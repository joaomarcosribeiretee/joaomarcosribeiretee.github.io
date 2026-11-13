import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck, FiCopy, FiDownload, FiMail, FiSend } from "react-icons/fi";
import { LuBriefcase, LuClock, LuGlobe, LuMapPin } from "react-icons/lu";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { SOCIALS } from "../components/SocialIcons";
import { useT } from "../contexts/LanguageContext";
import { cvHref } from "../lib/cv";
import { pressable, transitions } from "../lib/motion";
import "../styles/Contact.css";

const EMAIL = "jmribeirete@hotmail.com";
// white confetti would vanish on the light theme
const confettiColors = () =>
  document.documentElement.dataset.theme === "light" ? ["#00739a", "#14161a"] : ["#00BFFF", "#ffffff"];
const EMPTY_FORM = { name: "", email: "", message: "" };
const FIELD_ORDER = ["name", "email", "message"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Texts live in translations (contact.availability.<id>).
const AVAILABILITY = [
  { id: "reply", Icon: LuClock },
  { id: "location", Icon: LuMapPin },
  { id: "contract", Icon: LuBriefcase },
  { id: "timezone", Icon: LuGlobe },
];

const isValid = (name, value) =>
  name === "email" ? EMAIL_PATTERN.test(value.trim()) : value.trim().length > 0;

const validate = (data) =>
  FIELD_ORDER.reduce((errors, name) => (isValid(name, data[name]) ? errors : { ...errors, [name]: true }), {});

const Contact = () => {
  const t = useT("contact");
  const meta = useT("meta");

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [copied, setCopied] = useState(false);

  const fieldRefs = { name: useRef(null), email: useRef(null), message: useRef(null) };
  const emailTextRef = useRef(null);
  const successTimer = useRef(0);
  const copiedTimer = useRef(0);

  useEffect(
    () => () => {
      clearTimeout(successTimer.current);
      clearTimeout(copiedTimer.current);
    },
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // once a field showed an error, re-check it while the person fixes it
    if (errors[name] && isValid(name, value)) {
      setErrors(({ [name]: _fixed, ...rest }) => rest);
    }
  };

  const finishSuccess = () => {
    setSubmitStatus("success");
    setFormData(EMPTY_FORM);
    setErrors({});
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.7 }, colors: confettiColors() });
    clearTimeout(successTimer.current);
    successTimer.current = setTimeout(() => setSubmitStatus(null), 6000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const found = validate(formData);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((name) => found[name]);
    if (firstInvalid) {
      setSubmitStatus(null);
      fieldRefs[firstInvalid].current?.focus();
      return;
    }

    // Honeypot: a person never sees this field. If it is filled it was a bot:
    // look like a success and send nothing.
    if (honeypot) {
      setHoneypot("");
      finishSuccess();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .send(
        "service_60a8f28",
        "template_l75l4vf",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Z5f16b-UG0q8Kb3pG"
      )
      .then(finishSuccess)
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        // the error stays until the next attempt (and so does what was typed)
        setSubmitStatus("error");
      })
      .finally(() => setIsSubmitting(false));
  };

  const showCopied = () => {
    setCopied(true);
    clearTimeout(copiedTimer.current);
    copiedTimer.current = setTimeout(() => setCopied(false), 2000);
  };

  // Fallback when the Clipboard API is unavailable or refused: select the address
  // so Ctrl/Cmd+C (or the long-press menu) finishes the job.
  const selectEmail = () => {
    const node = emailTextRef.current;
    if (!node) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      if (document.execCommand("copy")) showCopied();
    } catch {
      // selection is enough
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      showCopied();
    } catch {
      selectEmail();
    }
  };

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    ref: fieldRefs[name],
    value: formData[name],
    onChange: handleChange,
    required: true,
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });

  const fieldError = (name) =>
    errors[name] && (
      <p className="field-error" id={`contact-${name}-error`}>
        {t.form.errors[name]}
      </p>
    );

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-grid">
        <div className="contact-info">
          <SectionHeader id="contact-title" title={t.title} subtitle={t.subtitle} />

          <Reveal className="email-card" index={1}>
            <span className="email-icon" aria-hidden="true">
              <FiMail />
            </span>
            <div className="email-text">
              <span className="email-label">{t.emailLabel}</span>
              <a href={`mailto:${EMAIL}`} ref={emailTextRef}>
                {EMAIL}
              </a>
            </div>
            <button type="button" className="email-copy" onClick={copyEmail} aria-label={t.copyLabel}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "done" : "copy"}
                  className="email-copy-inner"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={transitions.fast}
                >
                  {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                  <span className="email-copy-text" aria-hidden="true">
                    {copied ? t.copied : t.copy}
                  </span>
                </motion.span>
              </AnimatePresence>
            </button>
            {/* announces the result without moving focus */}
            <span className="sr-only" aria-live="polite">
              {copied ? t.copied : ""}
            </span>
          </Reveal>

          <Reveal className="contact-links" index={2}>
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} className="contact-link" href={href} target="_blank" rel="noopener noreferrer">
                <Icon aria-hidden="true" /> {label}
              </a>
            ))}
          </Reveal>

          <Reveal index={3}>
            <motion.a
              className="btn btn-ghost"
              href={cvHref(meta)}
              download={meta.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => confetti({ particleCount: 80, spread: 90, origin: { y: 0.8 }, colors: confettiColors() })}
              {...pressable}
            >
              <FiDownload aria-hidden="true" /> {t.downloadCV}
            </motion.a>
          </Reveal>

          <Reveal className="availability" index={4}>
            <p className="availability-label" id="availability-label">
              {t.availability.label}
            </p>
            <ul className="availability-list" aria-labelledby="availability-label">
              {AVAILABILITY.map(({ id, Icon }) => (
                <li key={id}>
                  <Icon aria-hidden="true" />
                  <span>{t.availability[id]}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="contact-form-card" index={1}>
          <form onSubmit={handleSubmit} className="contact-form" noValidate aria-busy={isSubmitting}>
            <div className="field">
              <label htmlFor="contact-name">{t.form.name}</label>
              <input type="text" autoComplete="name" placeholder={t.form.namePlaceholder} {...fieldProps("name")} />
              {fieldError("name")}
            </div>
            <div className="field">
              <label htmlFor="contact-email">{t.form.email}</label>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={t.form.emailPlaceholder}
                {...fieldProps("email")}
              />
              {fieldError("email")}
            </div>
            <div className="field">
              <label htmlFor="contact-message">{t.form.message}</label>
              <textarea rows={5} placeholder={t.form.messagePlaceholder} {...fieldProps("message")} />
              {fieldError("message")}
            </div>

            {/* honeypot: invisible and unreachable for people and screen readers */}
            <div className="hp-field" aria-hidden="true">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="form-footer">
              <motion.button type="submit" className="btn btn-primary" disabled={isSubmitting} {...pressable}>
                {isSubmitting ? <span className="spinner" aria-hidden="true" /> : <FiSend aria-hidden="true" />}{" "}
                {isSubmitting ? t.form.sending : t.form.sendButton}
              </motion.button>

              {/* both regions stay mounted so screen readers announce their updates */}
              <div className="form-status">
                <p role="status" className="status-msg status-msg--success">
                  {submitStatus === "success" ? t.form.successMessage : ""}
                </p>
                <p role="alert" className="status-msg status-msg--error">
                  {submitStatus === "error" ? t.form.errorMessage : ""}
                </p>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;

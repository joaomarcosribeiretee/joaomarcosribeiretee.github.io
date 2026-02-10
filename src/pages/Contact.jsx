import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import PageTransition4 from "../components/PageTransition4";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Confete extra
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00BFFF', '#ffffff'] // Blue and white confetti
        });
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/docs/JoaoMarcos_CV.pdf`;
    link.setAttribute("download", "JoaoMarcos_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#00BFFF', '#ffffff']
    });
  };

  return (
    <PageTransition4>
      <div id="contact" className="contact-page">
        <div className="contact-container">

          {/* Header Section */}
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="contact-title">
              {t.title.split(' ')[0]} <span className="outline-text">{t.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="contact-subtitle">
              {t.subtitle}
            </p>
          </motion.div>

          <div className="contact-content-wrapper">

            {/* Left Column: Info & Socials */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="info-card">
                <div className="info-icon"><FaEnvelope /></div>
                <div className="info-details">
                  <h3>Email</h3>
                  <a href="mailto:jmribeirete@hotmail.com">jmribeirete@hotmail.com</a>
                </div>
              </div>

              <div className="social-links-container">
                <motion.a
                  href="https://linkedin.com/in/joaomarcosribeirete"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, color: "#00BFFF" }}
                  className="social-link"
                >
                  <FaLinkedin /> LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/joaomarcosribeiretee"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, color: "#00BFFF" }}
                  className="social-link"
                >
                  <FaGithub /> GitHub
                </motion.a>
              </div>

              <div className="cv-section">
                <button type="button" className="download-btn-modern" onClick={handleDownload}>
                  <FaFileDownload /> {t.downloadCV}
                </button>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="modern-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={t.form.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={t.form.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder={t.form.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input form-textarea"
                  />
                </div>

                <div className="form-footer">
                  <button type="submit" className="submit-btn-modern" disabled={isSubmitting}>
                    {isSubmitting ? t.form.sending : t.form.sendButton}
                  </button>

                  {submitStatus === "success" && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="status-msg success"
                    >
                      {t.form.successMessage}
                    </motion.span>
                  )}
                  {submitStatus === "error" && (
                    <p className="status-msg error">{t.form.errorMessage}</p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>

        </div>

        {/* Ambient Glow */}
        <div className="glow-corner top-right"></div>
        <div className="glow-corner bottom-left"></div>
      </div>
    </PageTransition4>
  );
};

export default Contact;

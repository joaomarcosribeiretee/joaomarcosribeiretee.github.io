import React from 'react';
import { motion } from 'framer-motion';
import { LuLanguages } from 'react-icons/lu';
import { useLanguage, useT } from '../contexts/LanguageContext';
import { transitions } from '../lib/motion';
import '../styles/LanguageToggle.css';

const OPTIONS = [
    { id: 'pt', label: 'PT' },
    { id: 'en', label: 'EN' },
];

// Used by both the desktop and the mobile header. <html lang> is kept in sync
// by LanguageProvider whenever the language changes.
const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();
    const t = useT('header');

    return (
        <div className="language-toggle" role="group" aria-label={t.language}>
            <LuLanguages className="lang-icon" aria-hidden="true" focusable="false" />
            {OPTIONS.map((opt) => {
                const selected = language === opt.id;
                return (
                    <button
                        key={opt.id}
                        type="button"
                        aria-pressed={selected}
                        className={`lang-option ${selected ? 'is-active' : ''}`}
                        onClick={(e) => {
                            setLanguage(opt.id);
                            // Pointer clicks (detail > 0) drop focus so no browser can leave a
                            // ring behind; Enter/Space (detail === 0) keep it for keyboard users.
                            if (e.detail > 0) e.currentTarget.blur();
                        }}
                    >
                        {selected && (
                            <motion.span className="lang-pill" layoutId="lang-pill" transition={transitions.layout} />
                        )}
                        <span className="lang-label">{opt.label}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default LanguageToggle;

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/LanguageToggle.css';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    const BrazilFlag = () => (
        <svg viewBox="0 0 720 504" width="32" height="32">
            <rect width="720" height="504" fill="#009b3a" />
            <path d="M360 39.6L68.4 252 360 464.4 651.6 252z" fill="#fedf00" />
            <circle cx="360" cy="252" r="126" fill="#3e4095" />
            <path d="M239.1 275.6c43.6 26.3 98.7 34.6 150.3 22.8 34.6-7.9 66.8-23.7 91.1-45.7l2.8-2.6c-48 40.5-114.7 54.8-176 39.4-23.2-5.8-45-15.6-64.2-28.5l-4 14.6z" fill="#fff" />
        </svg>
    );

    const USFlag = () => (
        <svg viewBox="0 0 741 390" width="32" height="32">
            <rect width="741" height="390" fill="#bf0a30" />
            <path d="M0 30h741M0 90h741M0 150h741M0 210h741M0 270h741M0 330h741" stroke="#fff" strokeWidth="30" />
            <rect width="296.4" height="210" fill="#002868" />
            <g fill="#fff">
                <g id="s18">
                    <g id="s9">
                        <g id="s5">
                            <g id="s">
                                <path d="M24.7 10.5l-1.9 5.8 4.9-3.6-6.1.1 4.9 3.7z" />
                            </g>
                            <use xlinkHref="#s" x="49.4" />
                            <use xlinkHref="#s" x="98.8" />
                            <use xlinkHref="#s" x="148.2" />
                            <use xlinkHref="#s" x="197.6" />
                        </g>
                        <use xlinkHref="#s" x="24.7" y="17.5" />
                        <use xlinkHref="#s" x="74.1" y="17.5" />
                        <use xlinkHref="#s" x="123.5" y="17.5" />
                        <use xlinkHref="#s" x="172.9" y="17.5" />
                    </g>
                    <use xlinkHref="#s9" y="35" />
                    <use xlinkHref="#s9" y="70" />
                </g>
                <use xlinkHref="#s18" y="105" />
            </g>
        </svg>
    );

    return (
        <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        >
            {language === 'pt' ? <BrazilFlag /> : <USFlag />}
        </button>
    );
};

export default LanguageToggle;

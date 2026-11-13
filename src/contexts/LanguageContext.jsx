import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

const STORAGE_KEY = 'portfolio-language';

const readSaved = () => {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch {
        return null;
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const saved = readSaved();
        return saved === 'en' || saved === 'pt' ? saved : 'pt';
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch {
            // storage blocked: language just won't persist
        }
        document.documentElement.lang = translations[language].meta.htmlLang;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Shortcut: translations for one section of the current language.
export const useT = (section) => {
    const { language } = useLanguage();
    return translations[language][section];
};

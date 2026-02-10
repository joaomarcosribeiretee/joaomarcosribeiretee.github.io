import { en } from './en';
import { pt } from './pt';

export const translations = {
    en,
    pt
};

export const getTranslation = (language, key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
        value = value?.[k];
    }

    return value || key;
};

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const SUPPORTED = ['es', 'en'];
const STORAGE_KEY = 'lang';

// Resolve the initial language: saved choice > browser language > 'es'
const getInitialLanguage = () => {
    if (typeof window === 'undefined') return 'es';

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;

    const browser = (window.navigator.language || 'es').toLowerCase();
    return browser.startsWith('es') ? 'es' : 'en';
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(getInitialLanguage);

    // Persist choice and keep <html lang> in sync
    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (lang) => {
        if (SUPPORTED.includes(lang)) setLanguageState(lang);
    };

    const toggleLanguage = () => {
        setLanguageState(prev => (prev === 'es' ? 'en' : 'es'));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, supported: SUPPORTED }}>
            {children}
        </LanguageContext.Provider>
    );
};

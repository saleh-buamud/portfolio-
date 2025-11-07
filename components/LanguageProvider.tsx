'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import en from '../locales/en.json';
import ar from '../locales/ar.json';

const translations: Record<string, any> = { en, ar };
type Lang = 'en' | 'ar';

const LanguageContext = createContext({
    lang: 'en' as Lang,
    setLang: (l: Lang) => { },
    t: (key: string) => ''
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>('en');

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);

    const t = (key: string) => {
        const parts = key.split('.');
        let obj: any = translations[lang];
        for (const p of parts) {
            obj = obj?.[p];
            if (obj == null) return key;
        }
        return obj;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useTranslation = () => useContext(LanguageContext);
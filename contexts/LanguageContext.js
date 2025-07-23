'use client';

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    brand: 'SOARA',
    nav: {
      home: 'Home',
      about: 'About', 
      sponsors: 'Sponsors',
      notifications: 'Notifications',
      members: 'Members',
      contacts: 'Contacts'
    }
  },
  jp: {
    brand: 'SOARA',
    nav: {
      home: 'ホーム',
      about: 'について',
      sponsors: 'スポンサー', 
      notifications: '通知',
      members: 'メンバー',
      contacts: 'お問い合わせ'
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'jp' : 'en');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
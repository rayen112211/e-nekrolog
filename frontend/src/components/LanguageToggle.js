import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
      aria-label="Toggle language"
    >
      {language === 'pl' ? (
        <>
          <svg className="w-5 h-4" viewBox="0 0 640 480">
            <rect width="640" height="240" fill="#fff" />
            <rect y="240" width="640" height="240" fill="#dc143c" />
          </svg>
          <span className="font-medium text-sm text-gray-700">PL</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-4" viewBox="0 0 60 30">
            <clipPath id="t">
              <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
            </clipPath>
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </svg>
          <span className="font-medium text-sm text-gray-700">EN</span>
        </>
      )}
    </button>
  );
};

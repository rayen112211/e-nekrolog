import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export const Header = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with Text */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="/artifacts/eklepsydra_logo_1770229022969.png"
                alt="eKlepsydra"
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <span
                  className="text-2xl font-bold text-primary"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  eKlepsydra
                </span>
                <span className="block text-xs text-gray-500 -mt-1">
                  {t('tagline')}
                </span>
              </div>
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => navigate('/')}
              className={`text-sm font-medium transition-colors ${isHomePage ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {t('home')}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('howItWorks')}
            </button>
            <button
              onClick={() => navigate('/blog')}
              className={`text-sm font-medium transition-colors ${location.pathname.startsWith('/blog') ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {t('blog')}
            </button>
            <button
              onClick={() => navigate('/kontakt')}
              className={`text-sm font-medium transition-colors ${location.pathname === '/kontakt' ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {t('contact')}
            </button>

            <div className="h-6 w-px bg-gray-300" />

            <LanguageToggle />

            <Button
              onClick={() => navigate('/create-nekrolog')}
              className="bg-primary hover:bg-primary/90 text-white font-medium"
            >
              {t('createENekrolog')}
            </Button>
          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageToggle />
            <Button
              size="sm"
              onClick={() => navigate('/create-nekrolog')}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              {t('createShort')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

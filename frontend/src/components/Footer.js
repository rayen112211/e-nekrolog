import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full border-t border-gray-200 py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/artifacts/eklepsydra_logo_1770229022969.png"
                  alt="eKlepsydra"
                  className="h-12 w-auto"
                />
                <span
                  className="text-2xl font-bold text-primary"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  eKlepsydra
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t('footerText')}
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                {t('footerNav')}
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => navigate('/')}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t('home')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/blog')}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t('blog')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/kontakt')}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t('contact')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/')}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t('forBusinesses')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info - REAL DATA */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                {t('contact')}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+48500719216" className="hover:text-gray-900">
                    +48 500 719 216
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:biuro@eKlepsydra.pl" className="hover:text-gray-900">
                    biuro@eKlepsydra.pl
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-8"></div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© {currentYear} eKlepsydra. {t('allRightsReserved')}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-900 transition-colors">
                {t('privacyPolicy')}
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                {t('terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

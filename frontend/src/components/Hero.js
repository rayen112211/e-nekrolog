import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Heart, Bell, Clock, Shield, Send, Flower2, MessageCircle, Video } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/artifacts/hero_background_1770226527050.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Main heading */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              {t('heroTitle')}
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-12 max-w-3xl mx-auto font-light drop-shadow-lg">
              {t('heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-white hover:bg-white/95 text-gray-900 px-12 py-7 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-white/20"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                onClick={() => navigate('/create-nekrolog')}
              >
                {t('createENekrolog')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white/10 px-12 py-7 text-lg backdrop-blur-sm transition-all duration-300"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                onClick={scrollToHowItWorks}
              >
                {t('learnHow')}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>{t('stat1Value')} {t('stat1Label')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{t('stat2Value')} {t('stat2Label')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>{t('stat3Label')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Value Props Section - Based on real eKlepsydra services */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {t('whyChooseUs')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('whyChooseUsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Send,
                titleKey: 'feature1Title',
                descKey: 'feature1Desc',
                color: '#8B7355'
              },
              {
                icon: Flower2,
                titleKey: 'feature2Title',
                descKey: 'feature2Desc',
                color: '#D4A574'
              },
              {
                icon: MessageCircle,
                titleKey: 'feature3Title',
                descKey: 'feature3Desc',
                color: '#7B9E87'
              },
              {
                icon: Video,
                titleKey: 'feature4Title',
                descKey: 'feature4Desc',
                color: '#5B7C99'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {t(feature.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

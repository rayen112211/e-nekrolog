import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card } from './ui/card';
import { Users, Shield, Heart } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      titleKey: 'valueTitle1',
      descKey: 'valueDesc1'
    },
    {
      icon: Shield,
      titleKey: 'valueTitle2',
      descKey: 'valueDesc2'
    },
    {
      icon: Heart,
      titleKey: 'valueTitle3',
      descKey: 'valueDesc3'
    }
  ];

  return (
    <section id="about" className="w-full py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {t('aboutSectionTitle')}
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('aboutSectionSubtitle')}
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F9F9F9 100%)'
                  }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3
                    className="text-xl font-bold text-foreground mb-3"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Stats section */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {t('stat1Value')}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {t('stat1Label')}
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {t('stat2Value')}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {t('stat2Label')}
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                ∞
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {t('stat3Label')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

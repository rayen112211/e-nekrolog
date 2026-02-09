import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card } from './ui/card';
import { Palette, Share2, Heart } from 'lucide-react';

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '1',
      title: t('step1Title'),
      description: t('step1Desc'),
      icon: Palette,
      color: '#8B7355',
      bgGradient: 'linear-gradient(135deg, #F5F2ED 0%, #E8E3D9 100%)'
    },
    {
      number: '2',
      title: t('step2Title'),
      description: t('step2Desc'),
      icon: Share2,
      color: '#6B8E6B',
      bgGradient: 'linear-gradient(135deg, #FAF9F6 0%, #F0EDE6 100%)'
    },
    {
      number: '3',
      title: t('step3Title'),
      description: t('step3Desc'),
      icon: Heart,
      color: '#5B7C99',
      bgGradient: 'linear-gradient(135deg, #F0F4F8 0%, #E3E9EF 100%)'
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-24 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #FAFAFA 0%, #F5F5F5 50%, #FAFAFA 100%)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {t('howItWorksTitle')}
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-primary/40" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('howItWorksSubtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connecting line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 z-0" />
                )}

                <Card
                  className="relative z-10 p-8 h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-primary/20"
                  style={{
                    background: step.bgGradient
                  }}
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-2"
                    style={{ borderColor: step.color }}
                  >
                    <span className="text-xl font-bold" style={{ color: step.color }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <Icon className="w-10 h-10" style={{ color: step.color }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-foreground mb-4 leading-snug"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent */}
                  <div
                    className="mt-6 h-1 w-16 rounded-full"
                    style={{ backgroundColor: step.color }}
                  />
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            {t('howItWorksNote')}
          </p>
        </div>
      </div>
    </section>
  );
};

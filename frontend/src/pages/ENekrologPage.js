import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { RSVPForm } from '../components/RSVPForm';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Share2, CalendarPlus } from 'lucide-react';
import { toast } from 'sonner';

const themeStyles = {
  classic: {
    primary: '#8B7355',
    secondary: '#F5F2ED',
    accent: '#D4AF37',
    backgroundImage: 'linear-gradient(135deg, #F5F2ED 0%, #E8E3D9 100%)',
  },
  modern: {
    primary: '#2C3E50',
    secondary: '#ECF0F1',
    accent: '#607D8B',
    backgroundImage: 'linear-gradient(135deg, #ECF0F1 0%, #D5DBDB 100%)',
  },
  floral: {
    primary: '#6B8E6B',
    secondary: '#FAF9F6',
    accent: '#D4A5A5',
    backgroundImage: 'linear-gradient(135deg, #FAF9F6 0%, #F0EDE6 100%)',
  },
  peaceful: {
    primary: '#5B7C99',
    secondary: '#F0F4F8',
    accent: '#A8C5DD',
    backgroundImage: 'linear-gradient(135deg, #F0F4F8 0%, #DFE6EC 100%)',
  },
};

export const ENekrologPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [nekrologData, setNekrologData] = useState(null);

  useEffect(() => {
    // Try to load from localStorage first
    const storedData = localStorage.getItem('nekrologData');
    if (storedData) {
      setNekrologData(JSON.parse(storedData));
    } else {
      // Fallback to mock data
      setNekrologData({
        name: 'Anna Maria Kowalska',
        birthDate: '1945-03-15',
        deathDate: '2024-12-28',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        farewellText: 'Z głębokim smutkiem zawiadamiamy o śmierci naszej ukochanej Mamy, Babci i Prababci. Odeszła spokojnie, otoczona miłością rodziny. Pozostanie na zawsze w naszych sercach.',
        funeralDate: '2025-01-02',
        funeralTime: '11:00',
        ceremonyLocation: 'Kościół pw. św. Jana, ul. Główna 15, Warszawa',
        burialLocation: 'Cmentarz Powązkowski, kwatera 12',
        wakeLocation: 'Sala parafialna przy kościele',
        wakeTime: '13:00',
        enableRSVP: true,
        funeralHomeName: '',
        funeralHomeLogo: '',
        selectedTheme: 'classic'
      });
    }
  }, []);

  if (!nekrologData) return null;

  const theme = themeStyles[nekrologData.selectedTheme] || themeStyles.classic;

  const calculateAge = (birthDate, deathDate) => {
    const birth = new Date(birthDate);
    const death = new Date(deathDate);
    let age = death.getFullYear() - birth.getFullYear();
    const m = death.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && death.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: nekrologData.name,
        text: `E-nekrolog ${nekrologData.name}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link skopiowany do schowka');
    }
  };

  const handleAddToCalendar = () => {
    // Mock calendar integration
    toast.success(t('addToCalendar'));
    // In real app: generate ICS file or Google Calendar link
  };

  const age = calculateAge(nekrologData.birthDate, nekrologData.deathDate);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: theme.backgroundImage }}>
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* B2B Branding Header */}
            {nekrologData.funeralHomeName && (
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground">{t('preparedBy')}</p>
                <div className="flex items-center justify-center gap-3 mt-2">
                  {nekrologData.funeralHomeLogo && (
                    <img
                      src={nekrologData.funeralHomeLogo}
                      alt={nekrologData.funeralHomeName}
                      className="h-8 object-contain"
                    />
                  )}
                  <p className="font-medium text-foreground">{nekrologData.funeralHomeName}</p>
                </div>
              </div>
            )}

            {/* Main card */}
            <Card className="memorial-shadow-lg overflow-hidden border-2" style={{ borderColor: theme.accent }}>
              {/* Photo section */}
              <div className="p-8 sm:p-12 text-center" style={{ backgroundColor: theme.secondary }}>
                <div className="inline-block mb-6">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 shadow-lg"
                    style={{ borderColor: theme.accent }}>
                    <img
                      src={nekrologData.photo || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop'}
                      alt={nekrologData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: theme.primary }}
                >
                  {nekrologData.name}
                </h1>

                <p className="text-lg text-muted-foreground mb-2">
                  {t('born')} {formatDate(nekrologData.birthDate)} — {t('died')} {formatDate(nekrologData.deathDate)}
                </p>

                <p className="text-sm text-muted-foreground">
                  {age} {t('years')}
                </p>
              </div>

              {/* Content section */}
              <div className="p-8 sm:p-12 bg-background">
                {/* Farewell text */}
                {nekrologData.farewellText && (
                  <div className="mb-10">
                    <p className="text-base leading-relaxed text-foreground">
                      {nekrologData.farewellText}
                    </p>
                  </div>
                )}

                {/* Divider */}
                <div className="h-px my-10" style={{ backgroundColor: theme.accent, opacity: 0.3 }}></div>

                {/* Funeral information */}
                <div className="space-y-6">
                  <h2
                    className="text-2xl font-semibold mb-6"
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: theme.primary }}
                  >
                    {t('funeralInfo')}
                  </h2>

                  <div className="space-y-4">
                    {/* Date and time */}
                    {nekrologData.funeralDate && (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: theme.secondary }}>
                          <Calendar className="w-5 h-5" style={{ color: theme.primary }} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">
                            {t('dateAndTime')}
                          </div>
                          <div className="text-base text-foreground">
                            {formatDate(nekrologData.funeralDate)}
                            {nekrologData.funeralTime && `, ${nekrologData.funeralTime}`}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Ceremony location */}
                    {nekrologData.ceremonyLocation && (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: theme.secondary }}>
                          <MapPin className="w-5 h-5" style={{ color: theme.primary }} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">
                            {t('ceremonyLocation')}
                          </div>
                          <div className="text-base text-foreground">
                            {nekrologData.ceremonyLocation}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Burial location */}
                    {nekrologData.burialLocation && (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: theme.secondary }}>
                          <MapPin className="w-5 h-5" style={{ color: theme.primary }} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">
                            {t('burialLocation')}
                          </div>
                          <div className="text-base text-foreground">
                            {nekrologData.burialLocation}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Wake Information */}
                {nekrologData.wakeLocation && (
                  <>
                    <div className="h-px my-10" style={{ backgroundColor: theme.accent, opacity: 0.3 }}></div>

                    <div className="space-y-6">
                      <h2
                        className="text-2xl font-semibold mb-6"
                        style={{ fontFamily: 'Cormorant Garamond, serif', color: theme.primary }}
                      >
                        {t('wakeInfo')}
                      </h2>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: theme.secondary }}>
                          <MapPin className="w-5 h-5" style={{ color: theme.primary }} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">
                            {t('wakeLocation')}
                          </div>
                          <div className="text-base text-foreground">
                            {nekrologData.wakeLocation}
                            {nekrologData.wakeTime && ` • ${nekrologData.wakeTime}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Actions */}
                <div className="mt-10 flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      className="flex-1 text-primary-foreground"
                      style={{ backgroundColor: theme.primary }}
                      size="lg"
                      onClick={() => navigate('/karta-pamieci')}
                    >
                      {t('goToMemorial')}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleAddToCalendar}
                      className="flex items-center gap-2"
                      style={{ borderColor: theme.primary, color: theme.primary }}
                    >
                      <CalendarPlus className="w-4 h-4" />
                      {t('addToCalendar')}
                    </Button>
                  </div>

                  {nekrologData.enableRSVP && nekrologData.wakeLocation && (
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <RSVPForm
                          wakeLocation={nekrologData.wakeLocation}
                          wakeTime={nekrologData.wakeTime}
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handleShare}
                        className="flex items-center gap-2"
                      >
                        <Share2 className="w-4 h-4" />
                        {t('shareENekrolog')}
                      </Button>
                    </div>
                  )}

                  {(!nekrologData.enableRSVP || !nekrologData.wakeLocation) && (
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleShare}
                      className="flex items-center gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      {t('shareENekrolog')}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

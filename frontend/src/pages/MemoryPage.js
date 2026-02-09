import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Flame, Heart, Bell } from 'lucide-react';
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

export const MemoryPage = () => {
  const { t } = useLanguage();

  const [candlesCount, setCandlesCount] = useState(12);
  const [condolencesList, setCondolencesList] = useState([
    {
      id: 1,
      name: 'Jan Nowak',
      message: 'Wyrazy współczucia dla całej rodziny. Będzie nam jej bardzo brakować.',
      date: '29.12.2024'
    },
    {
      id: 2,
      name: 'Maria Wiśniewska',
      message: 'Spoczywaj w pokoju. Pozostaniesz w naszych sercach na zawsze.',
      date: '29.12.2024'
    }
  ]);

  const [nameInput, setNameInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [reminderEmail, setReminderEmail] = useState('');
  const [showReminderForm, setShowReminderForm] = useState(false);
  const [nekrologData, setNekrologData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('nekrologData');
    if (storedData) {
      setNekrologData(JSON.parse(storedData));
    } else {
      setNekrologData({
        name: 'Anna Maria Kowalska',
        birthDate: '1945-03-15',
        deathDate: '2024-12-28',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        biography: 'Anna Maria Kowalska była ukochaną żoną, matką, babcią i prababcią. Urodziła się w Warszawie, gdzie spędziła całe swoje życie. Przez wiele lat pracowała jako nauczycielka w szkole podstawowej, kształtując młode pokolenia. Była znana ze swojej dobroci, cierpliwości i mądrości. Kochała czytać książki, opiekować się ogrodem i spędzać czas z rodziną. Jej ciepło i miłość pozostaną z nami na zawsze.',
        selectedTheme: 'classic'
      });
    }
  }, []);

  if (!nekrologData) return null;

  const theme = themeStyles[nekrologData.selectedTheme] || themeStyles.classic;

  const deceased = {
    name: nekrologData.name || 'Anna Maria Kowalska',
    birthDate: nekrologData.birthDate ? new Date(nekrologData.birthDate).toLocaleDateString('pl-PL') : '15.03.1945',
    deathDate: nekrologData.deathDate ? new Date(nekrologData.deathDate).toLocaleDateString('pl-PL') : '28.12.2024',
    age: nekrologData.birthDate && nekrologData.deathDate ?
      Math.floor((new Date(nekrologData.deathDate) - new Date(nekrologData.birthDate)) / (365.25 * 24 * 60 * 60 * 1000)) : 79,
    photo: nekrologData.photo || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    biography: nekrologData.biography || 'Anna Maria Kowalska była ukochaną żoną, matką, babcią i prababcią...',
    photos: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop'
    ]
  };

  const handleAddCondolence = (e) => {
    e.preventDefault();
    if (nameInput.trim() && messageInput.trim()) {
      const newCondolence = {
        id: Date.now(),
        name: nameInput,
        message: messageInput,
        date: new Date().toLocaleDateString('pl-PL')
      };
      setCondolencesList(prev => [newCondolence, ...prev]);
      setNameInput('');
      setMessageInput('');
      toast.success('Kondolencja została dodana');
    }
  };

  const handleCandleClick = () => {
    setCandlesCount(prev => prev + 1);
    toast.success('Znicz został zapalony');
  };

  const handleSetReminder = (e) => {
    e.preventDefault();
    if (reminderEmail.trim()) {
      // Mock reminder setup
      toast.success(t('reminderSet'));
      setReminderEmail('');
      setShowReminderForm(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: theme.backgroundImage }}>
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="memorial-shadow-lg overflow-hidden border-2" style={{ borderColor: theme.accent }}>
              <div className="p-8 sm:p-12" style={{ backgroundColor: theme.secondary }}>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 shadow-lg flex-shrink-0"
                    style={{ borderColor: theme.accent }}>
                    <img
                      src={deceased.photo}
                      alt={deceased.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h1
                      className="text-3xl sm:text-4xl font-semibold mb-2"
                      style={{ fontFamily: 'Cormorant Garamond, serif', color: theme.primary }}
                    >
                      {deceased.name}
                    </h1>
                    <p className="text-base text-muted-foreground mb-4">
                      {t('born')} {deceased.birthDate} — {t('died')} {deceased.deathDate}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Flame className="w-4 h-4" />
                        <span>{candlesCount} zapalone znicze</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 memorial-shadow border" style={{ borderColor: theme.accent }}>
              <h2
                className="text-2xl font-semibold mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: theme.primary }}
              >
                {t('biography')}
              </h2>
              <p className="text-base leading-relaxed text-foreground">
                {deceased.biography}
              </p>
            </Card>

            <Card className="p-8 memorial-shadow border" style={{ borderColor: theme.accent }}>
              <h2
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: theme.primary }}
              >
                {t('photoGallery')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {deceased.photos.map((photo, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden border-2"
                    style={{ borderColor: theme.accent }}>
                    <img
                      src={photo}
                      alt={`Wspomnienie ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-memorial"
                    />
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={handleCandleClick}
                className="flex items-center gap-2 flex-1"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Flame className="w-5 h-5" />
                {t('lightCandle')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 flex-1"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Heart className="w-5 h-5" />
                {t('addMemory')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowReminderForm(!showReminderForm)}
                className="flex items-center gap-2 flex-1"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Bell className="w-5 h-5" />
                {t('setReminders')}
              </Button>
            </div>

            {showReminderForm && (
              <Card className="p-6 memorial-shadow border" style={{ borderColor: theme.accent }}>
                <h3 className="text-lg font-medium mb-4" style={{ color: theme.primary }}>
                  {t('anniversaryReminders')}
                </h3>
                <form onSubmit={handleSetReminder} className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Email</label>
                    <Input
                      type="email"
                      required
                      value={reminderEmail}
                      onChange={(e) => setReminderEmail(e.target.value)}
                      placeholder="jan.kowalski@email.com"
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Prześlemy Ci przypomnienie o rocznicach i ważnych datach
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="text-primary-foreground"
                    style={{ backgroundColor: theme.primary }}
                  >
                    {t('notifyMe')}
                  </Button>
                </form>
              </Card>
            )}

            <Card className="p-8 memorial-shadow border" style={{ borderColor: theme.accent }}>
              <h2
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: theme.primary }}
              >
                {t('condolences')}
              </h2>

              <form onSubmit={handleAddCondolence} className="mb-8 p-6 rounded-lg" style={{ backgroundColor: theme.secondary }}>
                <h3 className="text-lg font-medium text-foreground mb-4">
                  {t('addCondolence')}
                </h3>
                <div className="space-y-4">
                  <Input
                    placeholder={t('yourName')}
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="bg-background"
                  />
                  <Textarea
                    placeholder={t('yourMessage')}
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="bg-background min-h-[100px]"
                  />
                  <Button
                    type="submit"
                    className="text-primary-foreground"
                    style={{ backgroundColor: theme.primary }}
                  >
                    {t('send')}
                  </Button>
                </div>
              </form>

              <div className="space-y-6">
                {condolencesList.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    {t('noCondolences')}
                  </p>
                ) : (
                  condolencesList.map((item) => (
                    <div key={item.id} className="border-b pb-6 last:border-0"
                      style={{ borderColor: theme.accent, opacity: 0.3 }}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-medium text-foreground">{item.name}</div>
                        <div className="text-sm text-muted-foreground">{item.date}</div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.message}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

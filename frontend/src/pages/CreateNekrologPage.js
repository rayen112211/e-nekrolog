import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { ThemeSelector } from '../components/ThemeSelector';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Switch } from '../components/ui/switch';

export const CreateNekrologPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    name: '',
    birthDate: '',
    deathDate: '',
    photo: '',
    farewellText: '',
    biography: '',

    // Step 2: Funeral Info
    funeralDate: '',
    funeralTime: '',
    ceremonyLocation: '',
    burialLocation: '',
    wakeLocation: '',
    wakeTime: '',
    enableRSVP: false,

    // Step 3: B2B Branding
    funeralHomeName: '',
    funeralHomeLogo: '',

    // Step 4: Theme
    selectedTheme: 'classic'
  });

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in localStorage for the preview page
    localStorage.setItem('nekrologData', JSON.stringify(formData));
    navigate('/e-nekrolog');
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h1
                className="text-3xl sm:text-4xl font-semibold text-primary mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {t('createENekrolog')}
              </h1>
              <p className="text-base text-muted-foreground mb-6">
                {t('step')} {currentStep} {t('of')} {totalSteps}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <Card className="p-8 memorial-shadow-lg">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-primary mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {t('stepPersonalInfo')}
                    </h2>

                    <div>
                      <Label htmlFor="name">{t('fullName')} *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        placeholder="Anna Maria Kowalska"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="birthDate">{t('dateOfBirth')} *</Label>
                        <Input
                          id="birthDate"
                          type="date"
                          required
                          value={formData.birthDate}
                          onChange={(e) => updateFormData('birthDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="deathDate">{t('dateOfDeath')} *</Label>
                        <Input
                          id="deathDate"
                          type="date"
                          required
                          value={formData.deathDate}
                          onChange={(e) => updateFormData('deathDate', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="farewellText">{t('farewellText')}</Label>
                      <Textarea
                        id="farewellText"
                        value={formData.farewellText}
                        onChange={(e) => updateFormData('farewellText', e.target.value)}
                        placeholder={t('farewellPlaceholder')}
                        className="min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="biography">{t('memoryText')}</Label>
                      <Textarea
                        id="biography"
                        value={formData.biography}
                        onChange={(e) => updateFormData('biography', e.target.value)}
                        placeholder={t('memoryPlaceholder')}
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Funeral Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-primary mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {t('stepFuneralInfo')}
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="funeralDate">{t('funeralDate')}</Label>
                        <Input
                          id="funeralDate"
                          type="date"
                          value={formData.funeralDate}
                          onChange={(e) => updateFormData('funeralDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="funeralTime">{t('funeralTime')}</Label>
                        <Input
                          id="funeralTime"
                          type="time"
                          value={formData.funeralTime}
                          onChange={(e) => updateFormData('funeralTime', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="ceremonyLocation">{t('ceremonyLocation')}</Label>
                      <Input
                        id="ceremonyLocation"
                        value={formData.ceremonyLocation}
                        onChange={(e) => updateFormData('ceremonyLocation', e.target.value)}
                        placeholder="St. John's Church, 15 Main Street"
                      />
                    </div>

                    <div>
                      <Label htmlFor="burialLocation">{t('burialLocation')}</Label>
                      <Input
                        id="burialLocation"
                        value={formData.burialLocation}
                        onChange={(e) => updateFormData('burialLocation', e.target.value)}
                        placeholder="Powązki Cemetery"
                      />
                    </div>

                    <div className="memorial-divider my-6"></div>

                    <div>
                      <Label htmlFor="wakeLocation">{t('wakeLocation')}</Label>
                      <Input
                        id="wakeLocation"
                        value={formData.wakeLocation}
                        onChange={(e) => updateFormData('wakeLocation', e.target.value)}
                        placeholder="Sala przy kościele"
                      />
                    </div>

                    <div>
                      <Label htmlFor="wakeTime">{t('wakeTime')}</Label>
                      <Input
                        id="wakeTime"
                        type="time"
                        value={formData.wakeTime}
                        onChange={(e) => updateFormData('wakeTime', e.target.value)}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div>
                        <Label htmlFor="enableRSVP" className="text-base font-medium cursor-pointer">
                          {t('enableRSVP')}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          {t('rsvpDescription')}
                        </p>
                      </div>
                      <Switch
                        id="enableRSVP"
                        checked={formData.enableRSVP}
                        onCheckedChange={(checked) => updateFormData('enableRSVP', checked)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: B2B Branding */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-primary mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {t('stepBranding')}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-6">
                        Dla domów pogrzebowych - dodaj swoją markę do nekrologu
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="funeralHomeName">{t('funeralHomeName')}</Label>
                      <Input
                        id="funeralHomeName"
                        value={formData.funeralHomeName}
                        onChange={(e) => updateFormData('funeralHomeName', e.target.value)}
                        placeholder="Dom Pogrzebowy Spokój"
                      />
                    </div>

                    <div>
                      <Label htmlFor="funeralHomeLogo">{t('uploadLogo')} (URL)</Label>
                      <Input
                        id="funeralHomeLogo"
                        value={formData.funeralHomeLogo}
                        onChange={(e) => updateFormData('funeralHomeLogo', e.target.value)}
                        placeholder="https://example.com/logo.png"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Wklej URL swojego logo
                      </p>
                    </div>

                    {formData.funeralHomeLogo && (
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm font-medium mb-2">Podgląd logo:</p>
                        <img
                          src={formData.funeralHomeLogo}
                          alt="Logo preview"
                          className="max-h-20 object-contain"
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Step 4: Theme Selection */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-primary mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {t('stepTheme')}
                    </h2>

                    <ThemeSelector
                      selectedTheme={formData.selectedTheme}
                      onThemeSelect={(theme) => updateFormData('selectedTheme', theme)}
                    />
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-border">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevious}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      {t('previousStep')}
                    </Button>
                  )}

                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="ml-auto flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {t('nextStep')}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="ml-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {t('createNekrolog')}
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


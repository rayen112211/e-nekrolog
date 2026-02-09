import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card } from './ui/card';
import { Check } from 'lucide-react';

const themes = [
    {
        id: 'classic',
        nameKey: 'themeClassic',
        preview: '/theme-previews/classic.png',
        colors: {
            primary: '#8B7355',
            secondary: '#F5F2ED',
            accent: '#D4AF37',
        }
    },
    {
        id: 'modern',
        nameKey: 'themeModern',
        preview: '/theme-previews/modern.png',
        colors: {
            primary: '#2C3E50',
            secondary: '#ECF0F1',
            accent: '#607D8B',
        }
    },
    {
        id: 'floral',
        nameKey: 'themeFloral',
        preview: '/theme-previews/floral.png',
        colors: {
            primary: '#6B8E6B',
            secondary: '#FAF9F6',
            accent: '#D4A5A5',
        }
    },
    {
        id: 'peaceful',
        nameKey: 'themePeaceful',
        preview: '/theme-previews/peaceful.png',
        colors: {
            primary: '#5B7C99',
            secondary: '#F0F4F8',
            accent: '#A8C5DD',
        }
    }
];

export const ThemeSelector = ({ selectedTheme, onThemeSelect }) => {
    const { t } = useLanguage();

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">{t('selectTheme')}</h3>
            <div className="grid grid-cols-2 gap-4">
                {themes.map((theme) => (
                    <Card
                        key={theme.id}
                        className={`relative cursor-pointer transition-all hover:shadow-lg ${selectedTheme === theme.id ? 'ring-2 ring-primary' : ''
                            }`}
                        onClick={() => onThemeSelect(theme.id)}
                    >
                        <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg"
                            style={{ backgroundColor: theme.colors.secondary }}>
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="w-full h-full rounded-lg border-4 flex items-center justify-center"
                                    style={{ borderColor: theme.colors.primary }}>
                                    <div className="text-center">
                                        <div className="w-16 h-16 rounded-full mx-auto mb-2"
                                            style={{ backgroundColor: theme.colors.accent, opacity: 0.5 }}>
                                        </div>
                                        <div className="h-2 w-20 mx-auto mb-1 rounded"
                                            style={{ backgroundColor: theme.colors.primary, opacity: 0.3 }}>
                                        </div>
                                        <div className="h-2 w-16 mx-auto rounded"
                                            style={{ backgroundColor: theme.colors.primary, opacity: 0.3 }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {selectedTheme === theme.id && (
                                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                    <Check className="w-5 h-5 text-primary-foreground" />
                                </div>
                            )}
                        </div>
                        <div className="p-3 text-center">
                            <p className="text-sm font-medium text-foreground">{t(theme.nameKey)}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

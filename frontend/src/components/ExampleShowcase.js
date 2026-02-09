import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Calendar, MapPin, Heart, ArrowRight, Clock, Users } from 'lucide-react';

export const ExampleShowcase = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    // Example data for showcase
    const exampleData = {
        name: 'Anna Maria Kowalska',
        birthYear: '1945',
        deathYear: '2024',
        age: 79,
        farewellText: 'Z głębokim smutkiem zawiadamiamy o śmierci naszej ukochanej Mamy, Babci i Prababci. Odeszła spokojnie, otoczona miłością rodziny.',
        funeralDate: '2 stycznia 2025',
        funeralTime: '11:00',
        ceremonyLocation: 'Kościół pw. św. Jana, Warszawa',
    };

    return (
        <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section title */}
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl sm:text-5xl font-bold text-primary mb-4"
                            style={{ fontFamily: 'Cormorant Garamond, serif' }}
                        >
                            {t('exampleTitle')}
                        </h2>

                        {/* Decorative divider */}
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                            <div className="w-2 h-2 rounded-full bg-primary/40" />
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                        </div>

                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t('exampleSubtitle')}
                        </p>
                    </div>

                    {/* Example e-nekrolog card */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Decorative background elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />

                        <Card
                            className="relative overflow-hidden shadow-2xl border-0"
                            style={{
                                background: 'linear-gradient(135deg, #F5F2ED 0%, #E8E3D9 100%)',
                            }}
                        >
                            {/* Top decorative border */}
                            <div className="h-2 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

                            <div className="p-8 md:p-12">
                                {/* Cross symbol */}
                                <div className="text-center mb-6">
                                    <span className="text-4xl text-primary/60">✝</span>
                                </div>

                                {/* Main content */}
                                <div className="text-center mb-8">
                                    {/* Photo placeholder */}
                                    <div className="relative w-36 h-36 mx-auto mb-6">
                                        <div
                                            className="w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden"
                                            style={{ backgroundColor: '#D4C4B0' }}
                                        >
                                            <img
                                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
                                                alt="Memorial"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Decorative ring */}
                                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
                                    </div>

                                    {/* Name */}
                                    <h3
                                        className="text-3xl md:text-4xl font-bold mb-2"
                                        style={{
                                            fontFamily: 'Cormorant Garamond, serif',
                                            color: '#8B7355'
                                        }}
                                    >
                                        {exampleData.name}
                                    </h3>

                                    {/* Dates */}
                                    <p className="text-lg text-gray-600 mb-6">
                                        {exampleData.birthYear} — {exampleData.deathYear}
                                    </p>

                                    {/* Decorative line */}
                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <div className="h-px w-16 bg-primary/30" />
                                        <Heart className="w-4 h-4 text-primary/50 fill-primary/30" />
                                        <div className="h-px w-16 bg-primary/30" />
                                    </div>

                                    {/* Farewell text */}
                                    <p className="text-gray-700 leading-relaxed max-w-xl mx-auto italic">
                                        "{exampleData.farewellText}"
                                    </p>
                                </div>

                                {/* Funeral info */}
                                <div className="bg-white/60 rounded-xl p-6 mb-6">
                                    <h4
                                        className="text-xl font-semibold text-center mb-4"
                                        style={{
                                            fontFamily: 'Cormorant Garamond, serif',
                                            color: '#8B7355'
                                        }}
                                    >
                                        {t('funeralInfo')}
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Calendar className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">{t('dateAndTime')}</p>
                                                <p className="font-medium text-gray-800">{exampleData.funeralDate}</p>
                                                <p className="text-gray-600">{t('funeralTime')}: {exampleData.funeralTime}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">{t('ceremonyLocation')}</p>
                                                <p className="font-medium text-gray-800">{exampleData.ceremonyLocation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature badges */}
                                <div className="flex flex-wrap justify-center gap-3 mb-6">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm text-gray-600">
                                        <Users className="w-4 h-4 text-primary" />
                                        <span>RSVP</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm text-gray-600">
                                        <Heart className="w-4 h-4 text-primary" />
                                        <span>{t('condolences')}</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm text-gray-600">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span>{t('anniversaryReminders')}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom gradient */}
                            <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                        </Card>

                        {/* "This is an example" badge */}
                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                            <span className="text-sm font-medium text-primary">{t('exampleBadge')}</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <Button
                            size="lg"
                            onClick={() => navigate('/create-nekrolog')}
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg group"
                            style={{ fontFamily: 'Cormorant Garamond, serif' }}
                        >
                            {t('createENekrolog')}
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <p className="mt-4 text-sm text-gray-500">
                            {t('freeAndSecure')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

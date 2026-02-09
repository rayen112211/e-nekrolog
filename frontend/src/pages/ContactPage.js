import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { toast } from 'sonner';

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
        toast.success('Wiadomość wysłana! Odp owiemy wkrótce.');

        // Reset after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Header */}
                    <div className="text-center mb-16">
                        <h1
                            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
                            style={{ fontFamily: 'Cormorant Garamond, serif' }}
                        >
                            Kontakt
                        </h1>
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                            <div className="w-2 h-2 rounded-full bg-primary/40" />
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                        </div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Masz pytania? Skontaktuj się z nami - chętnie pomożemy
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2
                                    className="text-3xl font-bold text-gray-900 mb-6"
                                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                >
                                    Skontaktuj się z nami
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Jesteśmy dostępni od poniedziałku do piątku w godzinach 9:00 - 17:00.
                                    Odpowiemy na wszystkie Twoje pytania dotyczące e-nekrologów i naszej platformy.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <Card className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                                            <a href="tel:+48500000000" className="text-primary hover:underline">
                                                +48 500 000 000
                                            </a>
                                            <p className="text-sm text-gray-500 mt-1">Pn-Pt, 9:00 - 17:00</p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                            <a href="mailto:kontakt@e-nekrolog.pl" className="text-primary hover:underline">
                                                kontakt@e-nekrolog.pl
                                            </a>
                                            <p className="text-sm text-gray-500 mt-1">Odpowiadamy w ciągu 24h</p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                                            <p className="text-gray-600">
                                                ul. Przykładowa 123<br />
                                                00-001 Warszawa, Polska
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* FAQ Section */}
                            <div className="pt-8 border-t-2 border-gray-100">
                                <h3
                                    className="text-2xl font-bold text-gray-900 mb-4"
                                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                >
                                    Często zadawane pytania
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Czy usługa jest bezpłatna?</h4>
                                        <p className="text-gray-600">Tak, platforma e-nekrologów jest całkowicie bezpłatna dla wszystkich użytkowników.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Jak długo nekrolog będzie dostępny?</h4>
                                        <p className="text-gray-600">E-nekrolog pozostaje dostępny przez czas nieokreślony.Możesz go udostępniać bez ograniczeń czasowych.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card className="p-8">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center h-full py-12">
                                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                        <Check className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3
                                        className="text-3xl font-bold text-gray-900 mb-4"
                                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                    >
                                        Wiadomość wysłana!
                                    </h3>
                                    <p className="text-gray-600 text-center">
                                        Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <h3
                                            className="text-3xl font-bold text-gray-900 mb-2"
                                            style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                        >
                                            Wyślij wiadomość
                                        </h3>
                                        <p className="text-gray-600">Wypełnij formularz, a my skontaktujemy się z Tobą</p>
                                    </div>

                                    <div>
                                        <Label htmlFor="name">Imię i nazwisko *</Label>
                                        <Input
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Jan Kowalski"
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="jan.kowalski@example.com"
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="phone">Telefon</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+48 500 000 000"
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Wiadomość *</Label>
                                        <Textarea
                                            id="message"
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Opisz swoje pytanie lub potrzeby..."
                                            rows={6}
                                            className="mt-2"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full py-6 text-lg"
                                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                    >
                                        <Send className="w-5 h-5 mr-2" />
                                        Wyślij wiadomość
                                    </Button>
                                </form>
                            )}
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

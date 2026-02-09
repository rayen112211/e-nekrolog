import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Users, Check } from 'lucide-react';
import { toast } from 'sonner';

export const RSVPForm = ({ wakeLocation, wakeTime }) => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        guests: 1
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        setSubmitted(true);
        toast.success(t('rsvpThankYou'));
        setTimeout(() => {
            setIsOpen(false);
            setTimeout(() => setSubmitted(false), 500);
        }, 2000);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2"
                >
                    <Users className="w-5 h-5" />
                    {t('confirmAttendance')}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {t('rsvpTitle')}
                    </DialogTitle>
                </DialogHeader>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                        <div className="space-y-2 p-4 bg-muted/30 rounded-lg">
                            <p className="text-sm font-medium text-muted-foreground">{t('wakeLocation')}</p>
                            <p className="text-base text-foreground">{wakeLocation}</p>
                            {wakeTime && (
                                <>
                                    <p className="text-sm font-medium text-muted-foreground mt-3">{t('wakeTime')}</p>
                                    <p className="text-base text-foreground">{wakeTime}</p>
                                </>
                            )}
                        </div>

                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="name">{t('yourName')}</Label>
                                <Input
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Jan Kowalski"
                                />
                            </div>

                            <div>
                                <Label htmlFor="guests">{t('numberOfGuests')}</Label>
                                <Input
                                    id="guests"
                                    type="number"
                                    min="1"
                                    max="10"
                                    required
                                    value={formData.guests}
                                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            {t('confirmAttendance')}
                        </Button>
                    </form>
                ) : (
                    <div className="flex flex-col items-center justify-center py-8">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <Check className="w-8 h-8 text-green-600" />
                        </div>
                        <p className="text-lg font-medium text-foreground text-center">
                            {t('rsvpThankYou')}
                        </p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

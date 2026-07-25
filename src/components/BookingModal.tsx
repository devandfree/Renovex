import React, { useState } from 'react';
import { X, Calendar, Clock, Check, Send, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('renovation');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[28px] max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
          >
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5 text-gray-700" />
            </motion.button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-[#F2B94C] text-gray-950 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {lang === 'fr' ? 'Réserver une Visite Technique' : 'Book a Technical Consultation'}
                </h3>
                <p className="text-xs text-gray-500">
                  {lang === 'fr' ? 'Gratuit & sans engagement de votre part' : 'Free consultation with a site engineer'}
                </p>
              </div>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">
                  {lang === 'fr' ? 'Rendez-vous Confirmé !' : 'Appointment Confirmed!'}
                </h4>
                <p className="text-xs text-emerald-700">
                  {lang === 'fr'
                    ? `Nous avons enregistré votre rendez-vous pour le ${date} à ${time}. Un SMS de confirmation vous a été envoyé.`
                    : `Your appointment is confirmed for ${date} at ${time}. Confirmation sent via SMS.`}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {lang === 'fr' ? 'Nom complet *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {lang === 'fr' ? 'Téléphone portable *' : 'Mobile Phone *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+33 6 12 34 56 78"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 text-sm outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {lang === 'fr' ? 'Date de visite *' : 'Date *'}
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-amber-500 text-sm outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {lang === 'fr' ? 'Créneau horaire' : 'Preferred Time'}
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-amber-500 text-sm outline-none bg-white"
                    >
                      <option value="09:00">09:00 - 10:00</option>
                      <option value="11:00">11:00 - 12:00</option>
                      <option value="14:00">14:00 - 15:00</option>
                      <option value="16:00">16:00 - 17:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {lang === 'fr' ? 'Type de prestation' : 'Service Type'}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 text-sm outline-none bg-white"
                  >
                    <option value="renovation">Rénovation de Bâtiment</option>
                    <option value="finishing">Finition Intérieure</option>
                    <option value="roofing">Toiture & Couverture</option>
                    <option value="foundation">Réparation de Fondations</option>
                    <option value="modular">Construction Modulaire</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#111827] hover:bg-black text-white font-bold py-3.5 rounded-full text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer gold-glow shine-hover"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'fr' ? 'Confirmer le Rendez-vous' : 'Confirm Appointment'}</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

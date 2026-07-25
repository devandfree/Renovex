import React, { useState } from 'react';
import { X, PhoneCall, Check, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
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
            className="bg-white rounded-[28px] max-w-md w-full p-6 sm:p-8 relative shadow-2xl"
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
              <div className="w-11 h-11 rounded-full bg-[#2D4030] text-white flex items-center justify-center font-bold">
                <PhoneCall className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {lang === 'fr' ? 'Demande de Rappel Immédiat' : 'Request Instant Callback'}
                </h3>
                <p className="text-xs text-gray-500">
                  {lang === 'fr' ? 'Un conseiller BTP vous rappelle sous 15 minutes' : 'An engineer calls you within 15 minutes'}
                </p>
              </div>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-2"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-emerald-900">
                  {lang === 'fr' ? 'Demande transmise !' : 'Callback requested!'}
                </h4>
                <p className="text-xs text-emerald-700">
                  {lang === 'fr'
                    ? 'Gardez votre téléphone à proximité, nous vous appelons immédiatement.'
                    : 'Keep your phone handy, an engineer will reach out shortly.'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {lang === 'fr' ? 'Votre Nom *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marc Laurent"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {lang === 'fr' ? 'Numéro de Téléphone *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+33 6 98 76 54 32"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 text-sm outline-none"
                  />
                </div>

                <div className="bg-gray-50 p-3 rounded-xl text-[11px] text-gray-600 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>
                    {lang === 'fr' ? 'Service gratuit du lundi au samedi de 8h à 19h.' : 'Free service available Monday through Saturday.'}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#2D4030] hover:bg-[#1f2e22] text-white font-bold py-3.5 rounded-full text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer gold-glow shine-hover"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'fr' ? 'Me Faire Rappeler' : 'Call Me Now'}</span>
                </motion.button>
              </form>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

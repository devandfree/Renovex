import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, ChevronDown, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'renovation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', projectType: 'renovation', message: '' });
    }, 4000);
  };

  const faqs = [
    {
      q: {
        fr: 'Combien de temps prend la délivrance d\'un devis officiel ?',
        en: 'How long does it take to receive an official quote?'
      },
      a: {
        fr: 'Nos ingénieurs et métreurs vous transmettent une proposition détaillée sous 24h à 48h après la première visite technique sur site.',
        en: 'Our site engineers provide a detailed quote within 24 to 48 hours following the initial technical site survey.'
      }
    },
    {
      q: {
        fr: 'Vos travaux sont-ils couverts par une garantie décennale ?',
        en: 'Are your construction works covered by a 10-year warranty?'
      },
      a: {
        fr: 'Absolument. Tous nos chantiers de gros œuvre, toiture, structure et rénovation sont couverts par notre assurance Garantie Décennale & Responsabilité Civile Professionnelle (AXA BTP).',
        en: 'Absolutely. All our structural, roofing, and renovation works are fully insured with a 10-Year Decennial Warranty.'
      }
    },
    {
      q: {
        fr: 'Intervenez-vous en dehors de la région parisienne ?',
        en: 'Do you operate outside the Paris metropolitan area?'
      },
      a: {
        fr: 'Oui, nos équipes mobiles interviennent sur toute la France pour des projets tertiaires, industriels ou résidentiels de grande envergure.',
        en: 'Yes, our mobile teams deploy nationwide across France for large-scale commercial and residential projects.'
      }
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            {lang === 'fr' ? 'Contactez Nos Experts Renovex' : 'Get in Touch With Renovex'}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {lang === 'fr'
              ? 'Un projet de construction ou de rénovation ? Discutons-en dès aujourd\'hui.'
              : 'Planning a new construction or renovation project? Speak to our engineering team today.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 rounded-[28px] border border-gray-200/80 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {lang === 'fr' ? 'Demande de Renseignements' : 'Send us a Message'}
            </h3>

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
                  {lang === 'fr' ? 'Message envoyé avec succès !' : 'Message Sent Successfully!'}
                </h4>
                <p className="text-sm text-emerald-700">
                  {lang === 'fr'
                    ? 'Un chef de projet Renovex prendra contact avec vous dans les plus brefs délais.'
                    : 'A Renovex project manager will contact you within 24 hours.'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {lang === 'fr' ? 'Nom complet *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {lang === 'fr' ? 'Adresse Email *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean.dupont@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {lang === 'fr' ? 'Numéro de Téléphone *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+33 6 12 34 56 78"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {lang === 'fr' ? 'Domaine d\'Intervention' : 'Project Category'}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm outline-none bg-white transition-all cursor-pointer"
                    >
                      <option value="renovation">Rénovation Globale</option>
                      <option value="finishing">Finition Intérieure</option>
                      <option value="roofing">Toiture & Couverture</option>
                      <option value="foundation">Fondations & Structure</option>
                      <option value="modular">Construction Modulaire</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {lang === 'fr' ? 'Description de votre projet' : 'Project Details'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'fr' ? 'Renseignez la surface, l\'adresse du chantier et vos contraintes...' : 'Describe surface area, project location, timeline constraints...'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm outline-none transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#111827] hover:bg-black text-white font-semibold py-3.5 rounded-full text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'fr' ? 'Envoyer ma demande' : 'Send Message'}</span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Info & Office Hours */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white p-8 rounded-[28px] border border-gray-200/80 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {lang === 'fr' ? 'Coordonnées & Siège' : 'Contact Details'}
              </h3>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {lang === 'fr' ? 'Adresse du Siège' : 'Headquarters'}
                  </h4>
                  <p className="text-sm text-gray-600 mt-0.5">
                    124 Avenue des Champs-Élysées, 75008 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {lang === 'fr' ? 'Téléphone Direct' : 'Direct Call'}
                  </h4>
                  <p className="text-sm text-gray-600 mt-0.5">
                    +33 (0)1 42 68 90 00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">Email</h4>
                  <p className="text-sm text-gray-600 mt-0.5">
                    contact@renovex-btp.fr
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {lang === 'fr' ? 'Horaires d\'Ouverture' : 'Working Hours'}
                  </h4>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Lun - Ven: 08:00 - 19:00 | Sam: 09:00 - 13:00
                  </p>
                </div>
              </div>
            </div>

            {/* Insurance Badge Card */}
            <div className="bg-[#4A4A4A] text-white p-6 rounded-[24px] flex items-center gap-4 shadow-sm">
              <ShieldCheck className="w-10 h-10 text-amber-400 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  {lang === 'fr' ? 'Garantie Décennale AXA N° 89402' : 'AXA Decennial Insurance Certified'}
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  {lang === 'fr' ? 'Sérénité totale garantie pour tous vos travaux de bâtiment.' : 'Full peace of mind for structural & renovation work.'}
                </p>
              </div>
            </div>

          </motion.div>

        </div>

        {/* FAQ Accordion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[28px] p-8 border border-gray-200/80 shadow-sm max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            {lang === 'fr' ? 'Foire Aux Questions (FAQ)' : 'Frequently Asked Questions'}
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors text-sm cursor-pointer"
                >
                  <span>{faq.q[lang]}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-amber-600' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4 text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-100"
                    >
                      {faq.a[lang]}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};


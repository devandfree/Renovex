import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Clock, 
  ShieldCheck, 
  ArrowLeft, 
  Calendar, 
  Building2, 
  ChevronDown, 
  FileText, 
  Award, 
  HardHat, 
  MessageSquare,
  Sparkles,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { HERO_ENGINEERS_IMAGE } from '../data/content';

interface ContactPageProps {
  lang: Language;
  onGoBack: () => void;
  onOpenBooking: () => void;
  onOpenCallback: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  lang,
  onGoBack,
  onOpenBooking,
  onOpenCallback,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clientType: 'entreprise',
    projectType: 'renovation',
    budget: '200k-500k',
    preferredContact: 'phone',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        clientType: 'entreprise',
        projectType: 'renovation',
        budget: '200k-500k',
        preferredContact: 'phone',
        message: '',
      });
    }, 5000);
  };

  const offices = [
    {
      city: { fr: 'Paris - Siège Social & Bureau d\'Études', en: 'Paris - Headquarters & Engineering' },
      address: '42 Avenue de la Grande Armée, 75017 Paris',
      phone: '+33 (0)1 45 67 89 10',
      email: 'paris@renovex-btp.fr',
      hours: { fr: 'Lun - Ven : 8h00 - 19h00', en: 'Mon - Fri: 8:00 AM - 7:00 PM' }
    },
    {
      city: { fr: 'Lyon - Agence Rhône-Alpes', en: 'Lyon - Regional Office' },
      address: '15 Quai Rambaud, 69002 Lyon',
      phone: '+33 (0)4 72 34 56 78',
      email: 'lyon@renovex-btp.fr',
      hours: { fr: 'Lun - Ven : 8h30 - 18h30', en: 'Mon - Fri: 8:30 AM - 6:30 PM' }
    }
  ];

  const faqs = [
    {
      q: {
        fr: 'Combien de temps prend l\'établissement d\'un devis officiel ?',
        en: 'How long does it take to receive an official quote?'
      },
      a: {
        fr: 'Après une première étude technique et visite éventuelle sur site, nos ingénieurs métreurs vous délivrent un chiffrage détaillé poste par poste sous 24h à 48h.',
        en: 'Following an initial technical review and site visit, our quantity surveyors issue an itemized estimate within 24 to 48 hours.'
      }
    },
    {
      q: {
        fr: 'Vos travaux sont-ils garantis par une assurance Décennale ?',
        en: 'Are your construction works backed by a 10-year Warranty?'
      },
      a: {
        fr: 'Absolument. Tous nos projets de rénovation lourde, gros œuvre, structure et toitures sont entièrement couverts par notre police Garantie Décennale AXA N°89402.',
        en: 'Yes. All major renovation, structural, and roofing projects are fully insured under AXA Decennial Policy N°89402.'
      }
    },
    {
      q: {
        fr: 'Intervenez-vous pour les particuliers ou uniquement le tertiaire ?',
        en: 'Do you work with residential clients or only commercial properties?'
      },
      a: {
        fr: 'Nous accompagnons à la fois les professionnels (sièges sociaux, commerces, copropriétés) et les particuliers (villas, réhabilitations haussmanniennes de standing).',
        en: 'We partner with both commercial developers (office buildings, retail) and residential homeowners (villas, luxury apartment retrofits).'
      }
    },
    {
      q: {
        fr: 'Proposez-vous un accompagnement pour les aides d\'État (RGE / MaPrimeRénov\') ?',
        en: 'Do you assist with state renovation subsidies and tax grants?'
      },
      a: {
        fr: 'Oui, étant qualifiés Qualibat RGE, notre équipe administrative monte directement vos dossiers de subventions énergétiques pour déduire les aides de votre reste à charge.',
        en: 'Yes, as a certified Qualibat RGE contractor, our administrative team manages all state subsidy filings on your behalf.'
      }
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-4 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button & Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center justify-between"
        >
          <motion.button
            whileHover={{ scale: 1.04, x: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={onGoBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-100 border border-gray-200 px-4 py-2.5 rounded-full transition-all shadow-2xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-600" />
            <span>{lang === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}</span>
          </motion.button>

          <div className="text-xs text-gray-500 font-medium">
            Renovex &gt; <span className="text-gray-900 font-bold">{lang === 'fr' ? 'Contact & Agences' : 'Contact Us'}</span>
          </div>
        </motion.div>

        {/* Hero Banner Contact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] overflow-hidden bg-gray-900 text-white p-8 sm:p-14 mb-12 shadow-xl"
        >
          <div className="relative z-10 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>{lang === 'fr' ? 'Assistance & Bureau d\'Études' : 'Engineering Contact Hub'}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              {lang === 'fr' 
                ? 'Contactez Nos Ingénieurs BTP' 
                : 'Get in Touch with Renovex Engineers'}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8"
            >
              {lang === 'fr'
                ? 'Une question sur un projet de construction ou de rénovation ? Nos chefs de projet et métreurs sont à votre disposition par téléphone, email ou rendez-vous sur site.'
                : 'Have a building or renovation inquiry? Our project managers and quantity surveyors are ready to assist you by phone, email, or on-site.'}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenBooking}
                className="bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer gold-glow shine-hover"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Prendre Rendez-vous Technique' : 'Book Technical Survey'}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenCallback}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full text-sm backdrop-blur-md transition-all border border-white/20 flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Rappel Téléphonique 24h' : '24h Phone Callback'}</span>
              </motion.button>
            </motion.div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden lg:block">
            <img 
              src={HERO_ENGINEERS_IMAGE} 
              alt="Engineers Contact" 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>

        {/* Direct Contact Quick Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white p-7 rounded-[28px] border border-gray-200/90 shadow-2xs hover:shadow-md transition-all flex items-center gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0">
              <Phone className="w-7 h-7 text-amber-600" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                {lang === 'fr' ? 'Ligne Directe Siège' : 'Direct HQ Line'}
              </span>
              <a href="tel:+33145678910" className="text-base sm:text-lg font-extrabold text-gray-900 hover:text-amber-600 transition-colors">
                +33 (0)1 45 67 89 10
              </a>
              <span className="text-xs text-emerald-600 font-semibold block mt-1">
                ✓ {lang === 'fr' ? 'Disponibilité 8h - 19h' : 'Available 8am - 7pm'}
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white p-7 rounded-[28px] border border-gray-200/90 shadow-2xs hover:shadow-md transition-all flex items-center gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center flex-shrink-0">
              <Mail className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                {lang === 'fr' ? 'Email Bureau d\'Études' : 'Engineering Email'}
              </span>
              <a href="mailto:contact@renovex-btp.fr" className="text-base sm:text-lg font-extrabold text-gray-900 hover:text-amber-600 transition-colors">
                contact@renovex-btp.fr
              </a>
              <span className="text-xs text-gray-500 font-medium block mt-1">
                {lang === 'fr' ? 'Réponse sous 2 heures' : 'Response within 2 hours'}
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white p-7 rounded-[28px] border border-gray-200/90 shadow-2xs hover:shadow-md transition-all flex items-center gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7 text-emerald-600" />
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                {lang === 'fr' ? 'Assurance & Garantie' : 'AXA Insurance'}
              </span>
              <span className="text-base sm:text-lg font-extrabold text-gray-900 block">
                AXA N°89402
              </span>
              <span className="text-xs text-emerald-700 font-semibold block mt-1">
                ✓ {lang === 'fr' ? 'Garantie Décennale Activée' : '10-Year Warranty Active'}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Main Grid: Form + Office Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[32px] border border-gray-200/90 shadow-sm">
            <div className="mb-8">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
                {lang === 'fr' ? 'Formulaire Express' : 'Direct Inquiry'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {lang === 'fr' ? 'Demande de Devis ou d\'Information' : 'Request a Detailed Quote'}
              </h2>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">
                  {lang === 'fr' ? 'Message Transmis à Nos Ingénieurs !' : 'Message Sent to Our Engineering Team!'}
                </h3>
                <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  {lang === 'fr'
                    ? 'Merci. Un chef de projet Renovex étudie votre demande et vous recontactera sous 24h avec un premier diagnostic.'
                    : 'Thank you. A Renovex project manager is reviewing your inquiry and will respond within 24 hours.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Client Type */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    {lang === 'fr' ? 'Vous êtes :' : 'You are:'}
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'entreprise', label: { fr: 'Entreprise / Tertiaire', en: 'Commercial' } },
                      { id: 'particulier', label: { fr: 'Particulier', en: 'Homeowner' } },
                      { id: 'architecte', label: { fr: 'Architecte / MOA', en: 'Architect' } },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, clientType: type.id })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center ${
                          formData.clientType === type.id
                            ? 'bg-gray-900 text-white border-gray-900 shadow-2xs'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {type.label[lang]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      {lang === 'fr' ? 'Nom complet *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className="w-full bg-gray-50 text-gray-900 text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      {lang === 'fr' ? 'Téléphone *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="06 12 34 56 78"
                      className="w-full bg-gray-50 text-gray-900 text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    {lang === 'fr' ? 'Adresse Email *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jean.dupont@entreprise.fr"
                    className="w-full bg-gray-50 text-gray-900 text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Project Type & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      {lang === 'fr' ? 'Type de Travaux' : 'Project Scope'}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-gray-50 text-gray-900 text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    >
                      <option value="renovation">{lang === 'fr' ? 'Rénovation Globale' : 'Full Renovation'}</option>
                      <option value="structure">{lang === 'fr' ? 'Gros Œuvre & Structure' : 'Structural Building'}</option>
                      <option value="roofing">{lang === 'fr' ? 'Toiture & Étanchéité' : 'Roofing & Waterproofing'}</option>
                      <option value="modular">{lang === 'fr' ? 'Construction Modulaire' : 'Modular Construction'}</option>
                      <option value="finishing">{lang === 'fr' ? 'Aménagement Intérieur' : 'Interior Fit-out'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      {lang === 'fr' ? 'Budget Estimé' : 'Estimated Budget'}
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-gray-50 text-gray-900 text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    >
                      <option value="<50k">&lt; 50 000 €</option>
                      <option value="50k-200k">50 000 € - 200 000 €</option>
                      <option value="200k-500k">200 000 € - 500 000 €</option>
                      <option value=">500k">&gt; 500 000 €</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    {lang === 'fr' ? 'Description de votre Projet *' : 'Project Overview *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'fr' ? 'Indiquez les contraintes techniques, surfaces, délais souhaités...' : 'Describe technical specs, surface area, timeline...'}
                    className="w-full bg-gray-50 text-gray-900 text-sm p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-extrabold py-4 rounded-full text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'fr' ? 'Envoyer la Demande de Devis' : 'Submit Quote Request'}</span>
                </button>

                <p className="text-[11px] text-gray-500 text-center font-medium">
                  🔒 {lang === 'fr' ? 'Vos données sont protégées. Aucune sollicitation commerciale abusive.' : 'Your data is strictly confidential.'}
                </p>

              </form>
            )}
          </div>

          {/* Offices & Map Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-[32px] border border-gray-200/90 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                  {lang === 'fr' ? 'Implantation Nationale' : 'Regional Offices'}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {lang === 'fr' ? 'Nos Bureaux & Agences' : 'Our Office Locations'}
                </h3>
              </div>

              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-200/70 space-y-3">
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-amber-600" />
                      {office.city[lang]}
                    </h4>

                    <div className="space-y-1.5 text-xs text-gray-600 font-medium">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="font-semibold text-gray-900">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2 pt-1 text-emerald-700 font-semibold">
                        <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{office.hours[lang]}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking Promo Banner */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-[32px] shadow-lg space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-gray-950 text-xs font-bold uppercase">
                <Calendar className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? 'Agenda en Ligne' : 'Live Booking'}</span>
              </div>

              <h4 className="text-xl font-bold">
                {lang === 'fr' ? 'Réservez un Créneau Visite Technique' : 'Book an On-Site Engineering Survey'}
              </h4>

              <p className="text-gray-300 text-xs leading-relaxed">
                {lang === 'fr'
                  ? 'Choisissez directement la date et l\'heure de passage d\'un conducteur de travaux pour inspecter votre bâtiment.'
                  : 'Select your preferred time for a site inspection with a Renovex chief supervisor.'}
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-bold py-3 px-6 rounded-full text-xs transition-all shadow-md cursor-pointer text-center"
              >
                {lang === 'fr' ? 'Ouvrir le Calendrier de RDV' : 'Open Booking Calendar'}
              </button>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-gray-200/80 shadow-sm mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              {lang === 'fr' ? 'Foire Aux Questions' : 'Frequently Asked Questions'}
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              {lang === 'fr' ? 'Questions Fréquentes avant de Lancer un Chantier' : 'Questions Before Launching Your Project'}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-gray-900 flex items-center justify-between gap-4 bg-gray-50/60 hover:bg-gray-100/80 transition-colors text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.q[lang]}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-600 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaq === idx && (
                  <div className="p-5 pt-3 bg-white text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a[lang]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

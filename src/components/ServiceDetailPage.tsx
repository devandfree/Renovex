import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Tag, 
  ShieldCheck, 
  Award, 
  Phone, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight, 
  Wrench, 
  Home, 
  Layers, 
  Building2,
  FileText,
  Sparkles,
  HelpCircle,
  Building
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ServiceItem } from '../types';
import { SERVICES_DATA, PROJECTS_DATA, HERO_ENGINEERS_IMAGE } from '../data/content';

interface ServiceDetailPageProps {
  serviceId: string;
  lang: Language;
  onGoBack: () => void;
  onSelectService: (serviceId: string) => void;
  onOpenBooking: () => void;
  onOpenCallback: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  lang,
  onGoBack,
  onSelectService,
  onOpenBooking,
  onOpenCallback,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
  const details = service.fullDetails[lang];
  const extended = service.extendedDetails?.[lang];

  // Helper to render icon by name
  const getIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Wrench': return <Wrench className={className} />;
      case 'Home': return <Home className={className} />;
      case 'HomeCheck': return <ShieldCheck className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Building2': return <Building2 className={className} />;
      default: return <Wrench className={className} />;
    }
  };

  // Filter projects relevant to this service or fallback to top projects
  const relatedProjects = PROJECTS_DATA.filter(
    (p) => p.category === service.category
  ).slice(0, 3);
  const displayProjects = relatedProjects.length > 0 ? relatedProjects : PROJECTS_DATA.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-24">
      
      {/* Top Sticky Sub-Header & Breadcrumbs */}
      <div className="bg-white border-b border-gray-200/80 sticky top-20 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onGoBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-amber-600 bg-gray-100 hover:bg-amber-50 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Tous les Services' : 'All Services'}</span>
            </button>

            <span className="text-gray-300">/</span>

            <span className="text-xs sm:text-sm font-bold text-gray-900 truncate max-w-[200px] sm:max-w-xs">
              {service.title[lang]}
            </span>
          </div>

          {/* Quick Service Switcher Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500 hidden sm:inline">
              {lang === 'fr' ? 'Changer de service :' : 'Switch service:'}
            </span>
            <select
              value={service.id}
              onChange={(e) => onSelectService(e.target.value)}
              className="text-xs font-semibold bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200 rounded-full px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              {SERVICES_DATA.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title[lang]}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative pt-10 pb-16 overflow-hidden bg-gradient-to-b from-white via-amber-50/20 to-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  {getIcon(service.iconName, "w-3.5 h-3.5 text-amber-700")}
                  <span>{lang === 'fr' ? 'Service Expert Renovex' : 'Renovex Expert Service'}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Garantie AXA 10 ans</span>
                </span>
              </div>

              {/* Service Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
                {service.title[lang]}
              </h1>

              {/* Tagline / Subtitle */}
              {extended?.tagline && (
                <p className="text-base sm:text-lg font-semibold text-amber-800/90 leading-snug">
                  {extended.tagline}
                </p>
              )}

              {/* Overview paragraph */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {details.overview}
              </p>

              {/* Key Metrics Quick Pill Row */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-medium">
                      {lang === 'fr' ? 'Délai moyen d\'exécution' : 'Average timeline'}
                    </span>
                    <span className="text-sm font-extrabold text-gray-900">
                      {details.typicalTimeline}
                    </span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Tag className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-medium">
                      {lang === 'fr' ? 'Tarif indicatif' : 'Starting rate'}
                    </span>
                    <span className="text-sm font-extrabold text-gray-900">
                      {details.startingPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-extrabold px-7 py-3.5 rounded-full text-sm shadow-md gold-glow shine-hover transition-all cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{lang === 'fr' ? 'Demander un Devis Gratuit' : 'Request Free Quote'}</span>
                </button>

                <button
                  onClick={onOpenCallback}
                  className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 py-3.5 rounded-full text-sm border border-gray-300 shadow-2xs transition-all cursor-pointer flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>{lang === 'fr' ? 'Être rappelé sous 2h' : 'Get callback in 2h'}</span>
                </button>
              </div>

            </motion.div>

            {/* Right Media Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white group">
                <img 
                  src={service.heroImage || HERO_ENGINEERS_IMAGE} 
                  alt={service.title[lang]}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>

                {/* Overlay Card Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500 text-gray-950 flex items-center justify-center font-extrabold">
                        {getIcon(service.iconName, "w-5 h-5")}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">
                          {lang === 'fr' ? 'Conducteur de Travaux Dédié' : 'Dedicated Site Engineer'}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {lang === 'fr' ? 'Supervision & suivi hebdomadaire' : 'Weekly site reports & oversight'}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      100% Qualifié
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Main Content Sections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-8">

        {/* Section 1: Inclusions & Included Features */}
        <section className="bg-white rounded-[32px] p-8 sm:p-12 border border-gray-200/80 shadow-2xs">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
              {lang === 'fr' ? 'Périmètre d\'Intervention' : 'Scope of Work'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {lang === 'fr' ? 'Prestations & Compétences Incluses' : 'Included Prestations & Expertise'}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              {lang === 'fr' 
                ? 'Toutes nos interventions sont exécutées par nos propres ouvriers qualifiés dans le respect des Référentiels DTU BTP.'
                : 'All work is executed by certified in-house craftsmen complying strictly with DTU building standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {details.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -2 }}
                className="bg-[#FAFAFA] hover:bg-amber-50/50 p-5 rounded-2xl border border-gray-100 hover:border-amber-200/60 transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {feature}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {lang === 'fr' 
                      ? 'Fourniture des matériaux certifiés, main d\'œuvre et nettoyage de chantier inclus.'
                      : 'Certified materials supply, labor, and jobsite cleanup included.'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2: Technical Specifications & Commitments */}
        {extended?.technicalSpecs && (
          <section className="bg-white rounded-[32px] p-8 sm:p-12 border border-gray-200/80 shadow-2xs">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                {lang === 'fr' ? 'Fiche Technique & Engagements' : 'Technical Specifications'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {lang === 'fr' ? 'Spécifications Techniques Renovex' : 'Renovex Technical Standards'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {extended.technicalSpecs.map((spec, idx) => (
                <div 
                  key={idx}
                  className="bg-[#FAFAFA] p-5 rounded-2xl border border-gray-100 flex flex-col justify-between"
                >
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                    {spec.label}
                  </span>
                  <p className="text-sm font-extrabold text-gray-900">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 3: Step-by-Step Execution Workflow */}
        {extended?.processSteps && (
          <section className="bg-gray-950 text-white rounded-[32px] p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mb-10">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                {lang === 'fr' ? 'Méthodologie de Chantier' : 'Jobsite Methodology'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                {lang === 'fr' ? 'Comment se déroule votre projet ?' : 'How your project unfolds'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">
                {lang === 'fr'
                  ? 'Un processus rigoureux en 4 étapes pour vous garantir la sérénité du devis au livrable final.'
                  : 'A rigorous 4-step process designed for total peace of mind from initial quote to final delivery.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {extended.processSteps.map((stepItem, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-900/90 border border-gray-800 p-6 rounded-2xl flex flex-col justify-between hover:border-amber-500/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-amber-400 font-mono">
                        {stepItem.step}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs text-gray-400">
                        ✓
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {stepItem.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 4: Related Projects Portfolio */}
        <section className="bg-white rounded-[32px] p-8 sm:p-12 border border-gray-200/80 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                {lang === 'fr' ? 'Réalisations BTP' : 'Realized Projects'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {lang === 'fr' ? 'Exemples de Chantiers Récents' : 'Recent Case Studies'}
              </h2>
            </div>

            <button
              onClick={onGoBack}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 underline underline-offset-4"
            >
              <span>{lang === 'fr' ? 'Voir tout le portfolio' : 'View full portfolio'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayProjects.map((proj) => (
              <div 
                key={proj.id}
                className="group rounded-2xl overflow-hidden border border-gray-200/80 bg-gray-50 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={proj.image} 
                    alt={proj.title[lang]} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-900">
                    {proj.location}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {proj.title[lang]}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {proj.description[lang]}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span>{proj.area}</span>
                    <span className="font-bold text-gray-900">{proj.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: FAQs for this Service */}
        {extended?.faqs && extended.faqs.length > 0 && (
          <section className="bg-white rounded-[32px] p-8 sm:p-12 border border-gray-200/80 shadow-2xs">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                {lang === 'fr' ? 'Questions Fréquentes' : 'Service FAQs'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {lang === 'fr' ? 'Vos questions sur ce service' : 'Frequently Asked Questions'}
              </h2>
            </div>

            <div className="space-y-4 max-w-4xl">
              {extended.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-[#FAFAFA]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-amber-600 transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-white"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Section 6: Bottom CTA Banner */}
        <section className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white rounded-[32px] p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              {lang === 'fr' ? 'Lancer votre projet de BTP' : 'Start your building project'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              {lang === 'fr' ? `Besoin de ${service.title[lang]} ?` : `Need ${service.title[lang]}?`}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {lang === 'fr'
                ? 'Demandez votre étude gratuite et recevez un devis estimatif sous 24h à 48h sans engagement.'
                : 'Request a free technical survey and receive a detailed quote within 24-48 hours.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <button
              onClick={onOpenBooking}
              className="bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-extrabold px-8 py-4 rounded-full text-xs sm:text-sm transition-all shadow-md gold-glow shine-hover cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Demander un Devis' : 'Request Estimate'}</span>
            </button>
            <button
              onClick={onOpenCallback}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full text-xs sm:text-sm backdrop-blur-md transition-all border border-white/20 cursor-pointer flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{lang === 'fr' ? 'Être Rappelé' : 'Request Callback'}</span>
            </button>
          </div>
        </section>

      </div>

    </div>
  );
};

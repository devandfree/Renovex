import React, { useState } from 'react';
import { 
  Wrench, 
  Home, 
  Layers, 
  Building2, 
  ArrowLeft, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Tag, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  HardHat, 
  Compass, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { SERVICES_DATA, HERO_ENGINEERS_IMAGE } from '../data/content';

interface ServicesPageProps {
  lang: Language;
  onGoBack: () => void;
  onOpenBooking: () => void;
  onOpenCallback: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  lang,
  onGoBack,
  onOpenBooking,
  onOpenCallback,
  onSelectService,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'renovation' | 'structure' | 'finishing'>('all');

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeTab === 'renovation') return s.id === 'building-renovation' || s.id === 'modular-construction';
    if (activeTab === 'structure') return s.id === 'foundation-repair' || s.id === 'roofing-solutions';
    if (activeTab === 'finishing') return s.id === 'interior-finishing';
    return true;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return Wrench;
      case 'Home': return Home;
      case 'HomeCheck': return ShieldCheck;
      case 'Layers': return Layers;
      case 'Building2': return Building2;
      default: return Wrench;
    }
  };

  const processSteps = [
    {
      step: '01',
      title: { fr: 'Audit & Diagnostic Technique', en: 'Technical Audit & Inspection' },
      desc: {
        fr: 'Inspection préalable sur site avec relevés métriques 3D, analyse thermique et étude de faisabilité de vos structures.',
        en: 'On-site survey with 3D metric capture, thermal inspection, and structural feasibility study.'
      },
      icon: Compass
    },
    {
      step: '02',
      title: { fr: 'Devis Détaillé & Planification', en: 'Detailed Quote & Planning' },
      desc: {
        fr: 'Proposition chiffrée poste par poste sans coût caché, choix des matériaux certifiés et calendrier prévisionnel des travaux.',
        en: 'Itemized transparent breakdown with certified material options and exact construction schedule.'
      },
      icon: FileText
    },
    {
      step: '03',
      title: { fr: 'Sécurisation & Préparation', en: 'Site Safety & Setup' },
      desc: {
        fr: 'Mise en place du chantier selon la charte Zéro Accident, acheminement des équipements et protection des existants.',
        en: 'Site mobilization compliant with Zero Accident standards and protective equipment installation.'
      },
      icon: HardHat
    },
    {
      step: '04',
      title: { fr: 'Exécution & Suivi Numérique', en: 'Execution & Live Tracking' },
      desc: {
        fr: 'Réalisation par nos compagnons qualifiés et suivi d\'avancement hebdomadaire accessible sur espace client.',
        en: 'Master craftsman execution with weekly digital reports accessible in your client portal.'
      },
      icon: CheckCircle2
    },
    {
      step: '05',
      title: { fr: 'Réception & Garantie AXA', en: 'Handover & AXA Guarantee' },
      desc: {
        fr: 'Livraison dans les délais impartis, contrôle qualité contradictoire et remise de l\'attestation Décennale AXA.',
        en: 'Punctual project delivery, strict compliance sign-off, and AXA 10-year warranty delivery.'
      },
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-4 pb-20 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button & Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={onGoBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-100 border border-gray-200 px-4 py-2.5 rounded-full transition-all shadow-2xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-600" />
            <span>{lang === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}</span>
          </button>

          <div className="text-xs text-gray-500 font-medium">
            Renovex &gt; <span className="text-gray-900 font-bold">{lang === 'fr' ? 'Services' : 'Our Services'}</span>
          </div>
        </div>

        {/* Hero Banner Services */}
        <div className="relative rounded-[32px] overflow-hidden bg-gray-900 text-white p-8 sm:p-14 mb-14 shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{lang === 'fr' ? 'Savoir-Faire & Expertise BTP' : 'Craftsmanship & BTP Expertise'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              {lang === 'fr' 
                ? 'Nos Services de Construction & Rénovation' 
                : 'Our Construction & Renovation Services'}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              {lang === 'fr'
                ? 'De la réparation de structures à la finition d\'exception, découvrez nos prestations sur-mesure pour professionnels et particuliers, sous garantie décennale AXA.'
                : 'From heavy structural repairs to luxury interior finishes, discover our tailored services backed by 10-year AXA insurance.'}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Demander un Devis Gratuit' : 'Request Free Quote'}</span>
              </button>

              <button
                onClick={onOpenCallback}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full text-sm backdrop-blur-md transition-all border border-white/20 flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Rappel sous 24h' : 'Callback in 24h'}</span>
              </button>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden lg:block">
            <img 
              src={HERO_ENGINEERS_IMAGE} 
              alt="BTP Services" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: { fr: 'Tous nos services', en: 'All Services' } },
            { id: 'renovation', label: { fr: 'Rénovation & Modulaire', en: 'Renovation & Modular' } },
            { id: 'structure', label: { fr: 'Gros Œuvre & Toitures', en: 'Structural & Roofing' } },
            { id: 'finishing', label: { fr: 'Second Œuvre & Finitions', en: 'Interior Finishing' } },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label[lang]}
            </button>
          ))}
        </div>

        {/* Service Cards Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredServices.map((service) => {
            const IconComponent = getServiceIcon(service.iconName);
            const details = service.fullDetails?.[lang];

            return (
              <div 
                key={service.id}
                className="bg-white rounded-[28px] border border-gray-200/90 shadow-sm hover:shadow-md transition-all p-7 sm:p-9 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-400 text-gray-950 flex items-center justify-center font-bold shadow-xs">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/60">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Garantie AXA
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title[lang]}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {details?.overview || service.description[lang]}
                  </p>

                  {/* Features List */}
                  {details?.features && (
                    <div className="space-y-2.5 mb-6 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block mb-2">
                        {lang === 'fr' ? 'Inclus dans la prestation :' : 'Key Inclusions:'}
                      </span>
                      {details.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Meta Pills: Timeline & Price */}
                  <div className="flex flex-wrap items-center gap-4 mb-8 text-xs text-gray-600 font-medium">
                    {details?.typicalTimeline && (
                      <div className="flex items-center gap-1.5 bg-gray-100 px-3.5 py-1.5 rounded-full">
                        <Clock className="w-3.5 h-3.5 text-gray-500" />
                        <span>Délai : <strong>{details.typicalTimeline}</strong></span>
                      </div>
                    )}
                    {details?.startingPrice && (
                      <div className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3.5 py-1.5 rounded-full border border-amber-200/60">
                        <Tag className="w-3.5 h-3.5 text-amber-600" />
                        <span><strong>{details.startingPrice}</strong></span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 bg-gray-900 hover:bg-black text-white font-semibold py-3 px-5 rounded-full text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{lang === 'fr' ? 'Détails & Tarification' : 'Details & Pricing'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold py-3 px-5 rounded-full text-xs sm:text-sm transition-all cursor-pointer shadow-2xs"
                  >
                    {lang === 'fr' ? 'Devis' : 'Quote'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section - How We Work */}
        <div className="bg-white rounded-[32px] p-8 sm:p-14 border border-gray-200/80 shadow-sm mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              {lang === 'fr' ? 'Méthodologie Pro' : 'Professional Workflow'}
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              {lang === 'fr' ? 'Comment Se Déroule Votre Chantier ?' : 'Our 5-Step Project Lifecycle'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((p, idx) => {
              const IconC = p.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-amber-500">{p.step}</span>
                      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-gray-800 shadow-2xs">
                        <IconC className="w-4 h-4 text-amber-600" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {p.title[lang]}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {p.desc[lang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Call To Action */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-[32px] p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold">
              {lang === 'fr' ? 'Un Projet de Construction ou de Rénovation ?' : 'Have a Construction or Renovation Project?'}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {lang === 'fr'
                ? 'Nos ingénieurs et techniciens étudient votre dossier et vous fournissent un devis chiffré sous 48 heures.'
                : 'Our engineering team reviews your specifications and delivers a firm itemized quote within 48 hours.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg cursor-pointer"
            >
              {lang === 'fr' ? 'Estimer Mon Projet' : 'Get Estimate'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

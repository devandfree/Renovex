import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Maximize2, 
  Calendar, 
  ArrowLeft, 
  CheckCircle2, 
  Search, 
  Filter, 
  Sparkles, 
  Layers, 
  Award, 
  X, 
  ArrowUpRight,
  ShieldCheck,
  PhoneCall,
  Clock,
  HardHat
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ProjectItem } from '../types';
import { PROJECTS_DATA, HERO_ENGINEERS_IMAGE } from '../data/content';

interface ProjectsPageProps {
  lang: Language;
  onGoBack: () => void;
  onOpenBooking: () => void;
  onOpenCallback: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  lang,
  onGoBack,
  onOpenBooking,
  onOpenCallback,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: { fr: 'Tous les chantiers', en: 'All Projects' } },
    { id: 'renovation', label: { fr: 'Rénovation & Patrimoine', en: 'Renovation & Heritage' } },
    { id: 'commercial', label: { fr: 'Tertiaire & Commercial', en: 'Commercial & Offices' } },
    { id: 'residential', label: { fr: 'Résidentiel Haut de Gamme', en: 'Luxury Residential' } },
    { id: 'roofing', label: { fr: 'Gros Œuvre & Toitures', en: 'Structural & Roofing' } },
  ];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
    const titleText = proj.title[lang].toLowerCase();
    const locationText = proj.location.toLowerCase();
    const search = searchQuery.toLowerCase();
    const matchesSearch = !search || titleText.includes(search) || locationText.includes(search);
    return matchesCategory && matchesSearch;
  });

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
            Renovex &gt; <span className="text-gray-900 font-bold">{lang === 'fr' ? 'Projets & Réalisations' : 'Projects Portfolio'}</span>
          </div>
        </motion.div>

        {/* Hero Banner Projects */}
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
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>{lang === 'fr' ? 'Portfolio BTP & Rénovation' : 'BTP Showcase'}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              {lang === 'fr' 
                ? 'Nos Chantiers & Réalisations d\'Exception' 
                : 'Our Portfolio of Excellence'}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8"
            >
              {lang === 'fr'
                ? 'Découvrez une sélection de nos projets phares : rénovations haussmanniennes, sièges sociaux bas-carbone, villas bioclimatiques et extensions modulaires.'
                : 'Explore our key construction achievements: Haussmannian restorations, low-carbon office headquarters, bioclimatic villas, and modular extensions.'}
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
                <span>{lang === 'fr' ? 'Lancer un Projet Similaire' : 'Start Similar Project'}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenCallback}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full text-sm backdrop-blur-md transition-all border border-white/20 flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Conseil d\'Ingénieur' : 'Engineering Consult'}</span>
              </motion.button>
            </motion.div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none hidden lg:block">
            <img 
              src={HERO_ENGINEERS_IMAGE} 
              alt="Projects Showcase" 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>

        {/* Portfolio Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: '150+', label: { fr: 'Chantiers livrés avec succès', en: 'Completed Projects' } },
            { value: '120k m²', label: { fr: 'Surfaces rénovées & construites', en: 'Built & Renovated Area' } },
            { value: '100%', label: { fr: 'Délais de livraison respectés', en: 'On-Time Delivery Rate' } },
            { value: '0', label: { fr: 'Sinistre décennal en 15 ans', en: 'Insurance Claims in 15 yrs' } }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-[24px] border border-gray-200/80 shadow-2xs hover:shadow-md transition-all text-center"
            >
              <div className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label[lang]}</div>
            </motion.div>
          ))}
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-[24px] p-5 border border-gray-200/80 shadow-2xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-gray-950 shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'fr' ? 'Rechercher ville, mot-clé...' : 'Search location, title...'}
              className="w-full bg-gray-50 text-gray-900 text-xs pl-9 pr-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-[28px] p-12 text-center border border-gray-200 my-8">
            <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {lang === 'fr' ? 'Aucun chantier ne correspond à votre recherche' : 'No projects match your filter'}
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              {lang === 'fr' ? 'Essayez de changer de catégorie ou de réinitialiser la recherche.' : 'Try changing categories or resetting search.'}
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold px-6 py-2.5 rounded-full text-xs"
            >
              {lang === 'fr' ? 'Réinitialiser les filtres' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-[28px] overflow-hidden border border-gray-200/90 shadow-2xs hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img 
                      src={project.image} 
                      alt={project.title[lang]} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
                    />
                    <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-md text-amber-400 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                      {project.category}
                    </div>

                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      <span>{project.year}</span>
                    </div>

                    {/* Bottom overlay with location & surface */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        {project.location}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                        <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                        {project.area}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-amber-600 transition-colors">
                      {project.title[lang]}
                    </h2>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description[lang]}
                    </p>

                    {/* Highlights chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.highlights.map((item, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-100 text-gray-700 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-gray-200/60"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="p-6 pt-0">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setModalProject(project)}
                    className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3 rounded-full text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>{lang === 'fr' ? 'Fiche Technique Chantier' : 'View Case Study'}</span>
                    <ArrowUpRight className="w-4 h-4 text-amber-400" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Technical Guarantee & Quality Commitment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[32px] p-8 sm:p-12 border border-gray-200/80 shadow-sm mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {lang === 'fr' ? 'Garantie Décennale AXA' : 'AXA 10-Year Insurance'}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {lang === 'fr'
                  ? 'Tous nos ouvrages de structure et de rénovation lourde sont souscrits auprès de la compagnie AXA France.'
                  : 'All major structural and renovation works are fully insured under AXA France decennial policy.'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {lang === 'fr' ? 'Certifications Qualibat RGE' : 'Qualibat RGE Standard'}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {lang === 'fr'
                  ? 'Nos prestations de rénovation thermique vous ouvrent le droit aux aides de l\'État (MaPrimeRénov\', CEE).'
                  : 'Energy retrofits qualify for state incentives, tax rebates, and green subsidies.'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mb-3">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {lang === 'fr' ? 'Compagnons Salariés' : 'In-House Craftsmen'}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {lang === 'fr'
                  ? 'Supervision directe par nos directeurs de travaux et équipes spécialisées pour un zéro défaut.'
                  : 'Direct execution and quality management by our internal engineering team and master tradesmen.'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 text-white rounded-[32px] p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              {lang === 'fr' ? 'Votre Prochain Chantier' : 'Your Next Project'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">
              {lang === 'fr' ? 'Vous avez un projet de construction ou rénovation ?' : 'Planning a major building or renovation project?'}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {lang === 'fr'
                ? 'Rencontrez nos ingénieurs pour un diagnostic technique complet et une estimation budgétaire détaillée.'
                : 'Schedule an engineering survey and get a comprehensive itemized quote.'}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenBooking}
            className="bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg cursor-pointer flex-shrink-0 gold-glow shine-hover"
          >
            {lang === 'fr' ? 'Prendre Rendez-vous' : 'Schedule Consultation'}
          </motion.button>
        </motion.div>

      </div>

      {/* Project Details Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 p-6 sm:p-8 relative">
            
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 bg-gray-100 p-2 rounded-full transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase mb-4">
              <Building2 className="w-3.5 h-3.5 text-amber-600" />
              <span>{modalProject.category}</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3 pr-8">
              {modalProject.title[lang]}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-600 mb-6 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-amber-600" /> {modalProject.location}
              </span>
              <span className="flex items-center gap-1">
                <Maximize2 className="w-4 h-4 text-amber-600" /> {modalProject.area}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-amber-600" /> {modalProject.year}
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden mb-6 h-64 bg-gray-100">
              <img
                src={modalProject.image}
                alt={modalProject.title[lang]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed mb-6">
              <h3 className="text-base font-bold text-gray-900">
                {lang === 'fr' ? 'Présentation du Chantier' : 'Project Summary'}
              </h3>
              <p>{modalProject.description[lang]}</p>

              <h3 className="text-base font-bold text-gray-900 pt-2">
                {lang === 'fr' ? 'Points Clés & Spécifications Techniques' : 'Technical Specifications'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {modalProject.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 bg-emerald-50 text-emerald-900 px-3 py-2 rounded-lg border border-emerald-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setModalProject(null);
                  onOpenBooking();
                }}
                className="flex-1 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold py-3.5 px-6 rounded-full text-xs sm:text-sm transition-all shadow-xs cursor-pointer text-center"
              >
                {lang === 'fr' ? 'Demander un projet similaire' : 'Request Similar Project'}
              </button>

              <button
                onClick={() => setModalProject(null)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3.5 px-6 rounded-full text-xs sm:text-sm transition-all cursor-pointer"
              >
                {lang === 'fr' ? 'Fermer' : 'Close'}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

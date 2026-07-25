import React, { useState } from 'react';
import { MapPin, Calendar, Layers, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ProjectItem } from '../types';
import { PROJECTS_DATA, HERO_ENGINEERS_IMAGE } from '../data/content';

interface ProjectsSectionProps {
  lang: Language;
  onOpenProjectsPage?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang, onOpenProjectsPage }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: { fr: 'Tous les Projets', en: 'All Projects' } },
    { id: 'renovation', label: { fr: 'Rénovation', en: 'Renovation' } },
    { id: 'residential', label: { fr: 'Résidentiel', en: 'Residential' } },
    { id: 'commercial', label: { fr: 'Tertiaire', en: 'Commercial' } },
    { id: 'roofing', label: { fr: 'Toiture', en: 'Roofing' } },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
              {lang === 'fr' ? 'Nos Réalisations Emblématiques' : 'Featured Projects'}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
              {lang === 'fr'
                ? 'Découvrez une sélection de nos projets récents alliant rigueur technique, esthétique contemporaine et performance environnementale.'
                : 'Explore our latest construction and renovation achievements blending technical precision with sustainable design.'}
            </p>
          </motion.div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gray-900 text-white shadow-xs scale-105'
                    : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, 4).map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-[28px] overflow-hidden border border-gray-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
                  />
                  
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-800 shadow-xs">
                    {project.category.toUpperCase()}
                  </div>

                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700 group-hover:bg-[#F2B94C] group-hover:text-amber-950 transition-colors shadow-md">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        {project.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5 text-emerald-600" />
                        {project.area}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {project.title[lang]}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {project.description[lang]}
                    </p>
                  </div>

                  {/* Highlights tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.highlights.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {onOpenProjectsPage && (
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenProjectsPage}
              className="inline-flex items-center gap-2 bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-extrabold px-9 py-4 rounded-full text-sm transition-all duration-300 shadow-md gold-glow shine-hover cursor-pointer"
            >
              <span>{lang === 'fr' ? 'Voir l\'ensemble des projets & fiches techniques' : 'Explore All Projects & Technical Specs'}</span>
            </motion.button>
          </div>
        )}


      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[28px] max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-72 sm:h-80 overflow-hidden relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title[lang]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                    {selectedProject.location} — {selectedProject.year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {selectedProject.title[lang]}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {selectedProject.description[lang]}
              </p>

              <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                {lang === 'fr' ? 'Points Clés du Chantier' : 'Key Construction Highlights'}
              </h4>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {selectedProject.highlights.map((h, idx) => (
                  <div key={idx} className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs font-semibold text-amber-900">
                    • {h}
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-black"
                >
                  {lang === 'fr' ? 'Fermer' : 'Close'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

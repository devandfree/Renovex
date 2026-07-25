import React from 'react';
import { ArrowUpRight, Phone, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { HERO_ENGINEERS_IMAGE, TEAM_AVATARS } from '../data/content';

interface HeroSectionProps {
  lang: Language;
  onOpenBooking: () => void;
  onOpenCallback: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenBooking,
  onOpenCallback,
}) => {
  return (
    <section id="home" className="pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row: Main Title + Rotating Circular Badge */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.12]">
              {lang === 'fr' 
                ? 'Technologies Innovantes pour la Construction Moderne' 
                : 'Innovative Technologies for Modern Construction'}
            </h1>
          </motion.div>

          {/* Rotating Circular Renovex Emblem Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-shrink-0 self-end lg:self-start pt-2"
          >
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Spinning SVG Text Circle */}
              <svg 
                className="w-full h-full animate-spin-slow" 
                viewBox="0 0 100 100"
              >
                <path
                  id="renovexTextCircle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10px] font-semibold tracking-[0.2em] fill-gray-800 uppercase">
                  <textPath href="#renovexTextCircle" startOffset="0%">
                    R e n o v e x  *  R e n o v e x  *  
                  </textPath>
                </text>
              </svg>

              {/* Center Amber Circle with Arrow Icon */}
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 12 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#F2B94C] gold-glow shine-hover flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300"
                onClick={onOpenBooking}
                title="Book Now"
              >
                <ArrowUpRight className="w-6 h-6 text-gray-900" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Hero Grid Content: Image Card on Left, Narrative & CTAs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Left Card: Large Photo with rounded-3xl */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative group overflow-hidden rounded-[32px] shadow-xl border border-gray-200/90 bg-gray-900">
              <img
                src={HERO_ENGINEERS_IMAGE}
                alt="Construction engineers reviewing blueprints on site"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-103 transition-transform duration-700 opacity-95"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle quality tag overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-white/60 flex items-center gap-2 text-xs font-bold text-gray-900"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'fr' ? 'Chantiers Certifiés ISO 9001' : 'ISO 9001 Certified Sites'}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Right Content Block */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center space-y-8"
          >
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-normal">
              {lang === 'fr'
                ? 'Adoptez des avancées de pointe comme l\'impression 3D, la construction modulaire et les drones pour révolutionner la conception, l\'efficacité et la réalisation des projets BTP.'
                : 'Embrace cutting-edge advancements like 3D printing, modular construction, and drones to revolutionize design, efficiency, and project delivery in the construction industry.'}
            </p>

            {/* Team Avatars with '+' badge */}
            <div className="flex items-center space-x-3 pt-2">
              <div className="flex -space-x-3 overflow-hidden">
                {TEAM_AVATARS.map((avatar, idx) => (
                  <motion.img
                    key={idx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + idx * 0.08 }}
                    src={avatar}
                    alt={`Team member ${idx + 1}`}
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover shadow-xs"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <button 
                  onClick={onOpenBooking}
                  className="flex items-center justify-center h-11 w-11 rounded-full bg-gray-950 text-white text-sm font-semibold ring-2 ring-white hover:bg-black transition-colors"
                  title="Plus d'experts disponibles"
                >
                  +
                </button>
              </div>
              <div className="text-sm font-medium text-gray-700 pl-2">
                <span className="font-bold text-gray-900 block">100+ Experts</span>
                <span className="text-xs text-gray-500">{lang === 'fr' ? 'À votre service' : 'On demand team'}</span>
              </div>
            </div>

            {/* Action Buttons: Amber "Book now" & White/Olive "Call us" */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenBooking}
                className="bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 text-base font-bold px-8 py-3.5 rounded-full shadow-md gold-glow shine-hover hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-gray-950" />
                <span>{lang === 'fr' ? 'Réserver' : 'Book now'}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenCallback}
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 text-base font-semibold px-8 py-3.5 rounded-full shadow-2xs hover:shadow transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-800" />
                <span>{lang === 'fr' ? 'Nous appeler' : 'Call us'}</span>
              </motion.button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};


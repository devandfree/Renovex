import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onOpenBooking: () => void;
  onNavigate?: (sec: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenBooking, onNavigate }) => {
  const handleNav = (e: React.MouseEvent, sec: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sec);
    }
  };

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-12 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#15803D" opacity="0.9" />
                <path d="M16 2L28 9L16 16L4 9L16 2Z" fill="#22C55E" />
                <path d="M16 16L28 9V23L16 30V16Z" fill="#EAB308" />
                <path d="M16 16L4 9V23L16 30V16Z" fill="#166534" />
              </svg>
              <span className="text-2xl font-bold tracking-tight text-white font-sans">
                Renovex
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {lang === 'fr'
                ? 'Entreprise générale de BTP & Rénovation. Nous allions technologies innovantes, matériaux durables et savoir-faire d\'exception pour bâtir l\'avenir.'
                : 'General BTP & Renovation contractor. We combine innovative technologies, sustainable materials, and expert craftsmanship to build the future.'}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-bold px-6 py-2.5 rounded-full text-xs transition-all shadow-md gold-glow shine-hover cursor-pointer"
            >
              <span>{lang === 'fr' ? 'Prendre Rendez-vous' : 'Book a Consultation'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {lang === 'fr' ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={(e) => handleNav(e, 'home')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">{lang === 'fr' ? 'Accueil' : 'Home'}</button></li>
              <li><button onClick={(e) => handleNav(e, 'about')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">{lang === 'fr' ? 'À propos' : 'About'}</button></li>
              <li><button onClick={(e) => handleNav(e, 'services')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Services</button></li>
              <li><button onClick={(e) => handleNav(e, 'projects')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">{lang === 'fr' ? 'Projets' : 'Projects'}</button></li>
              <li><button onClick={(e) => handleNav(e, 'blog')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Blog & Actus</button></li>
              <li><button onClick={(e) => handleNav(e, 'contact')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Contact</button></li>
            </ul>
          </div>

          {/* Legal / Social */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {lang === 'fr' ? 'Certifications & Qualité' : 'Certifications & Quality'}
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>✓ Qualibat RGE 2026</li>
              <li>✓ Certifié ISO 9001 & ISO 14001</li>
              <li>✓ Assurance Garantie Décennale AXA</li>
              <li>✓ Membre FFB (Fédération Française du Bâtiment)</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Renovex BTP. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          
          <div className="text-[11px] text-gray-500 flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline-block" />
            <span>by</span>
            <span className="text-gray-400 font-medium">Steve Emane</span>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">{lang === 'fr' ? 'Mentions Légales' : 'Legal Notice'}</a>
            <a href="#" className="hover:text-gray-300 transition-colors">{lang === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};


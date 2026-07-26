import React, { useState } from 'react';
import { Menu, X, Globe, Calendar } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onOpenBooking,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: { fr: 'Home', en: 'Home' } },
    { id: 'about', label: { fr: 'About', en: 'About' } },
    { id: 'services', label: { fr: 'Services', en: 'Services' } },
    { id: 'projects', label: { fr: 'Project', en: 'Project' } },
    { id: 'blog', label: { fr: 'Blog', en: 'Blog' } },
    { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Custom Geometric Polygon Logo from image */}
            <div className="w-8 h-8 flex flex-col justify-center items-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#15803D" opacity="0.9" />
                <path d="M16 2L28 9L16 16L4 9L16 2Z" fill="#22C55E" />
                <path d="M16 16L28 9V23L16 30V16Z" fill="#EAB308" />
                <path d="M16 16L4 9V23L16 30V16Z" fill="#166534" />
              </svg>
            </div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900 font-sans group-hover:text-amber-600 transition-colors">
            Renovex
          </span>
        </div>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center space-x-1 bg-gray-50/80 p-1.5 rounded-full border border-gray-200/60">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-gray-200/80 text-gray-900 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                }`}
              >
                {item.label[lang]}
              </button>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Language Toggle */}
          <button
            onClick={() => onLanguageChange(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            title="Changer de langue / Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'fr' ? 'FR' : 'EN'}</span>
          </button>

          {/* Book Now Pill Button */}
          <button
            onClick={onOpenBooking}
            className="bg-gray-950 hover:bg-black text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md shine-hover transition-all duration-300 active:scale-95 flex items-center gap-2 cursor-pointer border border-gray-800"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>{lang === 'fr' ? 'Réserver' : 'Book now'}</span>
          </button>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => onLanguageChange(lang === 'fr' ? 'en' : 'fr')}
            className="p-2 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full"
          >
            {lang === 'fr' ? 'FR' : 'EN'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-amber-50 text-amber-900 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label[lang]}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#111827] text-white py-3 rounded-full text-center font-medium shadow-sm hover:bg-black flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{lang === 'fr' ? 'Réserver un rendez-vous' : 'Book now'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

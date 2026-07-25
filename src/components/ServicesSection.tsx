import React, { useState, useRef } from 'react';
import { 
  Wrench, 
  Home, 
  ShieldCheck, 
  Layers, 
  Building2, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { Language, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/content';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectService,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string, isDark?: boolean) => {
    const className = `w-6 h-6 ${isDark ? 'text-amber-400' : 'text-amber-600'}`;
    switch (iconName) {
      case 'Wrench': return <Wrench className={className} />;
      case 'Home': return <Home className={className} />;
      case 'HomeCheck': return <ShieldCheck className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Building2': return <Building2 className={className} />;
      default: return <Building2 className={className} />;
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row: Title & Subtitle on Left, Carousel Controls on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
              {lang === 'fr' ? 'Services Sur Mesure pour Vous' : 'Services Tailored to You'}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {lang === 'fr'
                ? 'Nous proposons des solutions de construction personnalisées conçues pour répondre à vos besoins uniques, garantissant que chaque projet reflète votre vision et dépasse vos attentes.'
                : 'We provide customized construction solutions designed to meet your unique needs, ensuring every project reflects your vision and exceeds expectations.'}
            </p>
          </motion.div>

          {/* Carousel Arrows */}
          <div className="flex items-center space-x-3 self-end md:self-auto">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleScroll('left')}
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all shadow-2xs cursor-pointer"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleScroll('right')}
              className="w-11 h-11 rounded-full bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-900 flex items-center justify-center transition-all shadow-xs cursor-pointer gold-glow"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Scrollable Horizontal Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICES_DATA.map((service, idx) => {
            const isDark = service.isDark;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`snap-start flex-shrink-0 w-[290px] sm:w-[320px] rounded-[24px] p-7 flex flex-col justify-between shadow-sm hover:shadow-xl cursor-pointer transition-all ${
                  isDark
                    ? 'bg-[#4A4A4A] text-white border border-gray-600/50'
                    : 'bg-[#F4F4F5] text-gray-900 hover:bg-white border border-gray-200/60'
                }`}
                onClick={() => onSelectService(service)}
              >
                <div>
                  {/* Icon Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-2xs ${
                    isDark ? 'bg-white' : 'bg-white border border-gray-100'
                  }`}>
                    {getIcon(service.iconName, isDark)}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {service.title[lang]}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.description[lang]}
                  </p>
                </div>

                {/* Learn More Action Button */}
                <div className="pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service);
                    }}
                    className={`inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:no-underline transition-all ${
                      isDark 
                        ? 'text-[#F2B94C] hover:text-amber-300' 
                        : 'text-amber-600 hover:text-amber-700'
                    }`}
                  >
                    <span>{lang === 'fr' ? 'En savoir plus' : 'Learn More'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


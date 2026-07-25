import React from 'react';
import { Target, Award, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { ABOUT_BLUEPRINTS_IMAGE, HERO_ENGINEERS_IMAGE } from '../data/content';

interface AboutSectionProps {
  lang: Language;
  onOpenBooking: () => void;
  onOpenAboutPage?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenBooking, onOpenAboutPage }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              {lang === 'fr' ? 'À Propos de Notre Entreprise' : 'About Our Company'}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {lang === 'fr'
                ? 'Forts de plusieurs années d\'expérience dans le secteur du BTP, nous sommes spécialisés dans la réalisation de solutions durables, innovantes et de haute qualité, adaptées aux exigences uniques de nos clients.'
                : 'With years of experience in the construction industry, we specialize in delivering high-quality, innovative, and sustainable solutions tailored to meet the unique needs of our clients.'}
            </p>
          </motion.div>

          {/* Top Right "Learn More" Amber Pill Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenAboutPage ? onOpenAboutPage : onOpenBooking}
            className="self-start md:self-auto bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-bold px-7 py-3 rounded-full transition-all shadow-md gold-glow shine-hover text-sm cursor-pointer"
          >
            {lang === 'fr' ? 'En savoir plus' : 'Learn More'}
          </motion.button>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Media Column with Blueprints Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-full min-h-[360px] rounded-[28px] overflow-hidden shadow-md border border-gray-100 bg-gray-100 group">
              <img
                src={ABOUT_BLUEPRINTS_IMAGE}
                alt="Architectural blueprints and engineering tools"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
              />

              {/* Overlapping Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl max-w-xs border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    15+
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {lang === 'fr' ? 'Années d\'Excellence' : 'Years of Excellence'}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {lang === 'fr' ? 'Savoir-faire reconnu' : 'Recognized expertise'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: "Our Mission" Card Block */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="bg-[#F8F9FA] rounded-[28px] p-8 sm:p-10 border border-gray-200/60 h-full flex flex-col justify-between shadow-xs">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-100">
                  <Target className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'fr' ? 'Notre Vocation' : 'Our Mission'}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                  {lang === 'fr' ? 'Notre Mission' : 'Our Mission'}
                </h3>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  {lang === 'fr'
                    ? 'Fournir des services de construction exceptionnels qui dépassent les attentes de nos clients grâce à l\'innovation, à une artisanat d\'art irréprochable et à un engagement ferme envers la durabilité. Nous visons à bâtir des relations durables basées sur la confiance, l\'intégrité et la transparence.'
                    : 'To provide exceptional construction services that exceed client expectations through innovation, quality craftsmanship, and a commitment to sustainability. We aim to build lasting relationships with our clients based on trust, integrity, and transparency.'}
                </p>
              </div>

              {/* Pillars Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {lang === 'fr' ? 'Innovation BTP' : 'BTP Innovation'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {lang === 'fr' ? 'Garantie Décennale' : '10-Year Warranty'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {lang === 'fr' ? 'Normes RE2020' : 'Green RE2020'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {lang === 'fr' ? 'Délais Respectés' : 'On-Time Delivery'}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};


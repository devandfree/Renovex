import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface StatsBarProps {
  lang: Language;
}

export const StatsBar: React.FC<StatsBarProps> = ({ lang }) => {
  const stats = [
    {
      value: '150+',
      label: {
        fr: 'Projets Réalisés',
        en: 'Complete Projects',
      },
    },
    {
      value: '100+',
      label: {
        fr: 'Membres de l\'Équipe',
        en: 'Team Members',
      },
    },
    {
      value: '200+',
      label: {
        fr: 'Avis Clients',
        en: 'Client Reviews',
      },
    },
    {
      value: '30',
      label: {
        fr: 'Prix Remportés',
        en: 'Winning Awards',
      },
    },
  ];

  return (
    <section className="py-12 border-t border-b border-gray-200/70 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-start space-y-1 group cursor-default"
            >
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 group-hover:text-[#F2B94C] transition-colors">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base font-medium text-gray-500">
                {stat.label[lang]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


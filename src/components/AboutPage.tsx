import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Target, 
  Users, 
  HardHat, 
  CheckCircle2, 
  ArrowLeft,
  Calendar,
  Sparkles,
  Recycle,
  Compass,
  Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { ABOUT_BLUEPRINTS_IMAGE, HERO_ENGINEERS_IMAGE, TEAM_AVATARS } from '../data/content';

interface AboutPageProps {
  lang: Language;
  onGoBack: () => void;
  onOpenBooking: () => void;
  onOpenCallback: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  lang,
  onGoBack,
  onOpenBooking,
  onOpenCallback,
}) => {
  const timelineEvents = [
    {
      year: '2010',
      title: { fr: 'Création de Renovex', en: 'Renovex Foundation' },
      desc: {
        fr: 'Fondation de l\'entreprise à Paris par Marc Dubois et Sophie Laurent, spécialisée dans la réhabilitation d\'immeubles de caractère.',
        en: 'Company founded in Paris by Marc Dubois and Sophie Laurent, focusing on historic building rehabilitation.'
      }
    },
    {
      year: '2015',
      title: { fr: 'Virage Tertiaire & Éco-Construction', en: 'Commercial & Green Turn' },
      desc: {
        fr: 'Premier grand chantier de siège social certifié HQE (Haute Qualité Environnementale) à Lyon.',
        en: 'First major corporate headquarters construction HQE green-certified in Lyon.'
      }
    },
    {
      year: '2020',
      title: { fr: 'Digitalisation des Chantiers', en: 'Jobsite Digitalization' },
      desc: {
        fr: 'Intégration systématique du BIM (Building Information Modeling), des scans 3D LiDAR et des audits par drone.',
        en: 'Systematic integration of BIM 3D modeling, LiDAR scans, and thermal drone audits.'
      }
    },
    {
      year: '2023',
      title: { fr: 'Certifications Qualibat RGE & ISO', en: 'Qualibat RGE & ISO Standards' },
      desc: {
        fr: 'Obtention des normes environnementales ISO 14001, ISO 9001 et qualification RGE pour la rénovation énergétique.',
        en: 'Achieved ISO 14001, ISO 9001 green certifications and RGE rating for energy efficiency.'
      }
    },
    {
      year: '2026',
      title: { fr: 'Pionnier du Bas-Carbone & Modulaire', en: 'Low-Carbon & Modular Leader' },
      desc: {
        fr: 'Réseau national d\'équipes mobiles et leader des structures modulaires hors-site à faible empreinte carbone.',
        en: 'Nationwide mobile team network leading off-site low-carbon modular construction.'
      }
    }
  ];

  const coreValues = [
    {
      icon: ShieldCheck,
      title: { fr: 'Sécurité & Rigueur', en: 'Safety & Rigor' },
      desc: {
        fr: 'Politique Zéro Accident sur tous nos chantiers. Port des EPI obligatoires, audits quotidiens et formation continue.',
        en: 'Zero Accident policy across all active sites. Mandatory PPE, daily safety audits, and ongoing team training.'
      },
      color: 'bg-emerald-100 text-emerald-800'
    },
    {
      icon: Sparkles,
      title: { fr: 'Innovation Technologique', en: 'Tech Innovation' },
      desc: {
        fr: 'Utilisation de l\'impression 3D béton, des jumeaux numériques et de la préfabrication industrielle pour réduire les délais.',
        en: 'Leveraging 3D concrete printing, digital twins, and prefabrication to streamline delivery.'
      },
      color: 'bg-amber-100 text-amber-800'
    },
    {
      icon: Recycle,
      title: { fr: 'Engagement Éco-Responsable', en: 'Eco Responsibility' },
      desc: {
        fr: 'Valorisation à 90% des déchets de chantier, sélection de matériaux biosourcés et respect strict des normes RE2020.',
        en: '90% jobsite waste recycling, bio-sourced material sourcing, and strict RE2020 compliance.'
      },
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Compass,
      title: { fr: 'Transparence & Ponctualité', en: 'Transparency & Timeliness' },
      desc: {
        fr: 'Devis détaillés sans coût caché et suivi de chantier en temps réel accessible aux maîtres d\'ouvrage via application dédiée.',
        en: 'Detailed itemized quotes with zero hidden costs and live digital site tracking for clients.'
      },
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  const leadershipTeam = [
    {
      name: 'Marc Dubois',
      role: { fr: 'Directeur Général & Fondateur', en: 'CEO & Founder' },
      experience: '22 ans d\'expérience BTP',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      bio: {
        fr: 'Ingénieur ESTP, ancien conducteur de travaux sur grands ouvrages d\'art, passionné d\'architecture contemporaine.',
        en: 'ESTP Engineer with extensive experience in major structural engineering projects.'
      }
    },
    {
      name: 'Sophie Laurent',
      role: { fr: 'Directrice Technique & Ingénieure Bâtiment', en: 'Chief Technical Officer' },
      experience: '18 ans d\'expérience',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      bio: {
        fr: 'Spécialiste de la rénovation énergétique complexe et de la physique du bâtiment RE2020.',
        en: 'Specialist in complex energy efficiency retrofitting and RE2020 building physics.'
      }
    },
    {
      name: 'Antoine Moreau',
      role: { fr: 'Directeur des Opérations Chantiers', en: 'Director of Site Operations' },
      experience: '15 ans d\'expérience',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      bio: {
        fr: 'Supervisant plus de 50 compagnons et sous-traitants qualifiés avec un souci constant de la qualité d\'exécution.',
        en: 'Overseeing qualified site supervisors with an uncompromising commitment to quality.'
      }
    },
    {
      name: 'Éléonore Vasseur',
      role: { fr: 'Responsable RSE & Matériaux Biosourcés', en: 'CSR & Sustainable Materials Manager' },
      experience: '12 ans d\'expérience',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      bio: {
        fr: 'Architecte DPLG orientée construction bois, réemploi de matériaux et bilan carbone neutre.',
        en: 'Architect focused on timber construction, material circular economy, and carbon neutrality.'
      }
    }
  ];

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
            Renovex &gt; <span className="text-gray-900 font-bold">{lang === 'fr' ? 'À Propos' : 'About Us'}</span>
          </div>
        </motion.div>

        {/* Hero Banner À Propos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8 sm:p-14 mb-16 shadow-xl"
        >
          <div className="relative z-10 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30"
            >
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>{lang === 'fr' ? 'Qui Sommes-Nous' : 'About Renovex'}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              {lang === 'fr' 
                ? 'Construire avec Passion, Innover avec Rigueur' 
                : 'Building with Passion, Innovating with Rigor'}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8"
            >
              {lang === 'fr'
                ? 'Depuis plus de 15 ans, Renovex s\'impose comme un acteur majeur du BTP et de la rénovation haut de gamme en France. Nous combinons le savoir-faire artisanal traditionnel aux technologies de construction les plus avancées.'
                : 'For over 15 years, Renovex has established itself as a leader in premium BTP construction and renovation across France, blending master craftsmanship with modern engineering.'}
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
                className="bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-md flex items-center gap-2 gold-glow shine-hover cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Prendre Rendez-vous' : 'Schedule Consultation'}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenCallback}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full text-sm backdrop-blur-md transition-all border border-white/20 cursor-pointer"
              >
                {lang === 'fr' ? 'Demander un Rappel' : 'Request Callback'}
              </motion.button>
            </motion.div>
          </div>

          {/* Background image subtle overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none hidden lg:block">
            <img 
              src={HERO_ENGINEERS_IMAGE} 
              alt="Engineers site" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = ABOUT_BLUEPRINTS_IMAGE; }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Stats Highlight Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '15+', label: { fr: 'Années d\'expérience', en: 'Years of Experience' } },
            { value: '150+', label: { fr: 'Projets livrés', en: 'Projects Delivered' } },
            { value: '100+', label: { fr: 'Experts & compagnons', en: 'Skilled Craftsmen' } },
            { value: '98%', label: { fr: 'Clients satisfaits', en: 'Satisfaction Rate' } },
          ].map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-[24px] border border-gray-200/80 shadow-2xs hover:shadow-md transition-all text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1">{s.value}</div>
              <div className="text-xs sm:text-sm font-medium text-gray-500">{s.label[lang]}</div>
            </motion.div>
          ))}
        </div>

        {/* Section 1: Notre Mission & Notre Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Notre ADN' : 'Our DNA'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {lang === 'fr' ? 'Une Vision Résolument Tournée vers la Qualité' : 'A Vision Focused on Quality & Innovation'}
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              {lang === 'fr'
                ? 'Chez Renovex, nous croyons que la construction d\'un bâtiment ou sa rénovation ne se limite pas à assembler des matériaux. Il s\'agit de façonner des lieux de vie et de travail durables, efficients sur le plan énergétique, tout en respectant scrupuleusement l\'architecture initiale.'
                : 'At Renovex, we believe that constructing or renovating a building goes far beyond assembling materials. It is about crafting sustainable living and working spaces that honor architectural heritage.'}
            </p>

            <div className="space-y-3 pt-2">
              {[
                { fr: 'Garantie décennale AXA pour l\'ensemble des ouvrages', en: 'AXA 10-year warranty for all structural works' },
                { fr: 'Respect strict des normes énergétiques RE2020 et HQE', en: 'Strict RE2020 and HQE environmental standard compliance' },
                { fr: 'Gestion complète du chantier de la conception à la remise des clés', en: 'Full turnkey project management from blueprints to keys' },
                { fr: 'Suivi numérique de chantier en temps réel pour le client', en: 'Live digital jobsite progress tracking for property owners' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">{item[lang]}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-[28px] overflow-hidden shadow-lg border border-gray-200 group">
              <img
                src={ABOUT_BLUEPRINTS_IMAGE}
                alt="Blueprints and hardhat"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                    {lang === 'fr' ? 'Bureau d\'Études Intégré' : 'In-House Engineering Office'}
                  </span>
                  <h3 className="text-xl font-bold mt-1">
                    {lang === 'fr' ? 'Précision millimétrique & modélisation 3D' : 'Millimetric Precision & 3D Modeling'}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Core Values (4 Pillars) */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {lang === 'fr' ? 'Nos Valeurs Fondamentales' : 'Our Core Pillars'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {lang === 'fr'
                ? 'Quatre principes guident chacune de nos décisions sur le terrain comme en bureau d\'études.'
                : 'Four guiding principles shape every engineering and site decision we make.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white p-7 rounded-[24px] border border-gray-200/80 shadow-2xs hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${val.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {val.title[lang]}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {val.desc[lang]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Historical Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[32px] p-8 sm:p-12 border border-gray-200/80 shadow-sm mb-20"
        >
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              {lang === 'fr' ? 'Chronologie' : 'Timeline'}
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              {lang === 'fr' ? 'L\'Histoire de Renovex (2010 - 2026)' : 'The Journey of Renovex'}
            </h2>
          </div>

          <div className="relative border-l-2 border-amber-400/60 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
            {timelineEvents.map((evt, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-6 h-6 rounded-full bg-white border-4 border-amber-500 group-hover:scale-125 transition-transform" />
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-2xs group-hover:bg-amber-50/30 transition-colors">
                  <span className="inline-block bg-amber-500 text-gray-950 font-extrabold text-xs px-3 py-1 rounded-full mb-2">
                    {evt.year}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {evt.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {evt.desc[lang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 4: Leadership Team */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Gouvernance' : 'Leadership'}</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {lang === 'fr' ? 'Notre Équipe de Direction' : 'Executive Leadership'}
            </h2>
            <p className="text-gray-600 text-sm">
              {lang === 'fr'
                ? 'Des ingénieurs et conducteurs de travaux passionnés qui supervisent l\'excellence de vos chantiers.'
                : 'Experienced directors and engineers managing technical precision across all projects.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-[24px] overflow-hidden border border-gray-200/80 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
                    />
                    <div className="absolute bottom-3 left-3 bg-black/75 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md">
                      {member.experience}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-xs font-semibold text-amber-600 mb-3">{member.role[lang]}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{member.bio[lang]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 5: Certifications & Assurance */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#4A4A4A] text-white rounded-[32px] p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-gray-950 text-xs font-bold uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Garanties Légales & Label RGE' : 'Legal Certifications'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              {lang === 'fr' ? 'Chantiers Couverts & Sécurisés à 100%' : '100% Insured Construction Works'}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {lang === 'fr'
                ? 'Renovex bénéficie de la Garantie Décennale AXA N°89402, de la certification Qualibat RGE 2026 et est membre officiel de la Fédération Française du Bâtiment (FFB).'
                : 'Renovex carries AXA Decennial Warranty N°89402, Qualibat RGE 2026 rating, and is a registered member of FFB.'}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenBooking}
            className="bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg flex-shrink-0 gold-glow shine-hover cursor-pointer"
          >
            {lang === 'fr' ? 'Discuter de Votre Projet' : 'Discuss Your Project'}
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  User, 
  ArrowUpRight, 
  ArrowLeft, 
  Calendar, 
  Sparkles, 
  Share2, 
  Check, 
  X, 
  Bookmark, 
  MessageSquare, 
  ChevronRight,
  Send,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, BlogPost } from '../types';
import { BLOG_POSTS, HERO_ENGINEERS_IMAGE } from '../data/content';
import { ArticleDetailPage } from './ArticleDetailPage';

interface BlogPageProps {
  lang: Language;
  onGoBack: () => void;
  onOpenBooking: () => void;
  onOpenCallback: () => void;
  selectedArticle?: BlogPost | null;
  onSelectArticle?: (article: BlogPost | null) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  lang,
  onGoBack,
  onOpenBooking,
  onOpenCallback,
  selectedArticle: externalArticle = null,
  onSelectArticle
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [internalArticle, setInternalArticle] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const activeArticle = externalArticle || internalArticle;

  const handleSelectArticle = (art: BlogPost | null) => {
    if (onSelectArticle) {
      onSelectArticle(art);
    }
    setInternalArticle(art);
  };

  if (activeArticle) {
    return (
      <ArticleDetailPage
        article={activeArticle}
        lang={lang}
        onBackToBlog={() => handleSelectArticle(null)}
        onOpenBooking={onOpenBooking}
        onOpenCallback={onOpenCallback}
        onSelectArticle={(art) => handleSelectArticle(art)}
      />
    );
  }

  const categories = [
    { id: 'all', label: { fr: 'Tous les articles', en: 'All Articles' } },
    { id: 'Innovation BTP', label: { fr: 'Innovation BTP', en: 'BTP Innovation' } },
    { id: 'Réglementation', label: { fr: 'Réglementation & Aides', en: 'Regulations & Grants' } },
    { id: 'Technologie', label: { fr: 'Scan 3D & Drones', en: '3D Scan & Drones' } },
    { id: 'Éco-Construction', label: { fr: 'Éco-Construction', en: 'Eco-Building' } },
    { id: 'Gros Œuvre', label: { fr: 'Gros Œuvre & Toitures', en: 'Structure & Roofing' } },
    { id: 'Architecture', label: { fr: 'Architecture & Patrimoine', en: 'Architecture & Heritage' } },
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const titleText = post.title[lang].toLowerCase();
    const excerptText = post.excerpt[lang].toLowerCase();
    const search = searchQuery.toLowerCase();
    const matchesSearch = !search || titleText.includes(search) || excerptText.includes(search);
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

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
            Renovex &gt; <span className="text-gray-900 font-bold">{lang === 'fr' ? 'Journal & Tendances BTP' : 'Blog & News'}</span>
          </div>
        </motion.div>

        {/* Hero Banner Blog */}
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
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>{lang === 'fr' ? 'Le Mag Renovex' : 'Renovex Engineering Blog'}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              {lang === 'fr' 
                ? 'Actualités, Innovations & Réglementations BTP' 
                : 'Industry Insights, Tech & Construction Regulations'}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8"
            >
              {lang === 'fr'
                ? 'Analyses techniques, guides réglementaires RE2020, retours d\'expérience de chantier et avancées de la construction bas-carbone rédigés par nos ingénieurs.'
                : 'Technical analyses, RE2020 regulatory breakdowns, jobsite case studies, and low-carbon building trends published by our engineering leads.'}
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
                <span>{lang === 'fr' ? 'Consulter nos Ingénieurs' : 'Consult our Engineers'}</span>
              </motion.button>
            </motion.div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden lg:block">
            <img 
              src={HERO_ENGINEERS_IMAGE} 
              alt="Engineering Blog" 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>

        {/* Featured Article Spotlight Banner */}
        {featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onClick={() => handleSelectArticle(featuredPost)}
            className="bg-white rounded-[32px] overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl transition-all mb-12 cursor-pointer group grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-7 h-64 lg:h-auto overflow-hidden relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title[lang]} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
              />
              <div className="absolute top-4 left-4 bg-amber-400 text-gray-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                {lang === 'fr' ? 'À la Une' : 'Featured Story'}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-gray-500 font-medium mb-3">
                  <span className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full font-bold">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-amber-500" /> {featuredPost.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-4 leading-snug">
                  {featuredPost.title[lang]}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {featuredPost.excerpt[lang]}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-600" />
                  {featuredPost.author}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 group-hover:text-amber-600">
                  <span>{lang === 'fr' ? 'Lire l\'article' : 'Read Article'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Controls & Search */}
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
              placeholder={lang === 'fr' ? 'Rechercher un sujet...' : 'Search articles...'}
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

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-[28px] p-12 text-center border border-gray-200 my-8">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {lang === 'fr' ? 'Aucun article trouvé pour cette recherche' : 'No articles match your criteria'}
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              {lang === 'fr' ? 'Essayez de modifier votre mot-clé ou la catégorie.' : 'Try adjusting your search keywords or categories.'}
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold px-6 py-2.5 rounded-full text-xs"
            >
              {lang === 'fr' ? 'Réinitialiser la recherche' : 'Reset Search'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => handleSelectArticle(post)}
                className="bg-white rounded-[28px] overflow-hidden border border-gray-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="h-52 overflow-hidden relative bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
                    />
                    <div className="absolute top-3 left-3 bg-gray-900/90 backdrop-blur-xs text-amber-400 text-[11px] font-bold px-3 py-1 rounded-full border border-white/10">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 space-x-3 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-3 leading-snug line-clamp-2">
                      {post.title[lang]}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt[lang]}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-600" />
                    {post.author}
                  </span>

                  <span className="w-8 h-8 rounded-full bg-amber-100 group-hover:bg-[#F2B94C] flex items-center justify-center text-gray-900 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Technical Newsletter Subscription Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-[32px] p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 mb-12"
        >
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              {lang === 'fr' ? 'Newsletter Technique Mensuelle' : 'Monthly Engineering Digest'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">
              {lang === 'fr' ? 'Recevez nos études de cas et veilles BTP' : 'Stay informed on modern construction trends'}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {lang === 'fr'
                ? 'Une fois par mois, un condensé clair des nouvelles aides RE2020, innovations de chantier et analyses de coûts.'
                : 'A monthly breakdown of construction grants, RE2020 standards, and material pricing analyses.'}
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {newsletterSubscribed ? (
              <div className="bg-emerald-50 text-emerald-900 p-4 rounded-2xl flex items-center gap-3 border border-emerald-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-bold">
                  {lang === 'fr' ? 'Merci ! Vous êtes bien inscrit à notre newsletter.' : 'Thank you! You are now subscribed.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={lang === 'fr' ? 'Votre adresse email pro...' : 'Your business email...'}
                  className="bg-white/10 text-white placeholder-gray-400 text-xs sm:text-sm px-5 py-3.5 rounded-full border border-white/20 focus:outline-none focus:border-amber-400 min-w-[280px]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 gold-glow shine-hover"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'fr' ? 'S\'abonner' : 'Subscribe'}</span>
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

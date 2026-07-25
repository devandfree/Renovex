import React from 'react';
import { Clock, User, ArrowUpRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, BlogPost } from '../types';
import { BLOG_POSTS, HERO_ENGINEERS_IMAGE } from '../data/content';

interface BlogSectionProps {
  lang: Language;
  onOpenBlogPage?: () => void;
  onSelectArticle?: (article: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ lang, onOpenBlogPage, onSelectArticle }) => {

  return (
    <section id="blog" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Actualités & Tendances BTP' : 'BTP Insights & Blog'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              {lang === 'fr' ? 'Articles & Innovations Bâtiment' : 'Industry Insights & Articles'}
            </h2>
          </motion.div>

          {onOpenBlogPage && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenBlogPage}
              className="inline-flex items-center gap-2 bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all shadow-md gold-glow shine-hover cursor-pointer self-start md:self-auto"
            >
              <span>{lang === 'fr' ? 'Voir tous les articles' : 'View All Articles'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          )}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => {
                if (onSelectArticle) {
                  onSelectArticle(post);
                } else if (onOpenBlogPage) {
                  onOpenBlogPage();
                }
              }}
              className="bg-[#F8F9FA] rounded-[24px] overflow-hidden border border-gray-200/70 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
                  />
                  <div className="absolute top-3 left-3 bg-gray-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 space-x-3 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-3 line-clamp-2">
                    {post.title[lang]}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt[lang]}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-200/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-gray-400" />
                  {post.author}
                </span>

                <span className="w-8 h-8 rounded-full bg-amber-100 group-hover:bg-[#F2B94C] flex items-center justify-center text-gray-900 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};


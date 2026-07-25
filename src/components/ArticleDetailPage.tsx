import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  MessageSquare, 
  Send, 
  Sparkles, 
  BookOpen, 
  Building2, 
  Check, 
  Copy, 
  ChevronRight,
  PhoneCall,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, BlogPost } from '../types';
import { BLOG_POSTS, HERO_ENGINEERS_IMAGE } from '../data/content';

interface ArticleDetailPageProps {
  article: BlogPost;
  lang: Language;
  onBackToBlog: () => void;
  onOpenBooking: () => void;
  onOpenCallback: () => void;
  onSelectArticle: (article: BlogPost) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  lang,
  onBackToBlog,
  onOpenBooking,
  onOpenCallback,
  onSelectArticle
}) => {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [questionText, setQuestionText] = useState('');
  const [questionSubmitted, setQuestionSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const [userContact, setUserContact] = useState('');

  // Scroll to top on mount or when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article.id]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) return;
    setQuestionSubmitted(true);
    setTimeout(() => {
      setQuestionSubmitted(false);
      setQuestionText('');
      setUserName('');
      setUserContact('');
    }, 5000);
  };

  // Find related posts (excluding current post)
  const relatedPosts = BLOG_POSTS.filter(p => p.id !== article.id).slice(0, 3);

  // Content fallbacks if post content is not explicitly provided
  const intro = article.content?.[lang]?.introduction || article.excerpt[lang] + 
    (lang === 'fr' 
      ? " Le secteur de la construction et de la rénovation connaît une accélération sans précédent impulsée par les exigences environnementales et l'essor des technologies numériques. Chez Renovex, nos équipes d'ingénieurs déploient ces avancées directement sur vos chantiers."
      : " The construction sector is experiencing an unprecedented evolution driven by environmental mandates and digital tools. At Renovex, our site engineers apply these innovations across active builds.");

  const section1Title = article.content?.[lang]?.section1Title || 
    (lang === 'fr' ? "1. Enjeux Techniques & Contexte Réglementaire" : "1. Technical Challenges & Regulations");

  const section1Text = article.content?.[lang]?.section1Text || 
    (lang === 'fr'
      ? `L'intégration de la démarche ${article.category} dans les projets d'ingénierie moderne répond à un double objectif : maximiser l'efficience structurelle et anticiper les contraintes légales. Les études menées sur nos chantiers pilotes démontrent que l'anticipation en phase de diagnostic évite jusqu'à 85% des aléas techniques lors de l'exécution du gros œuvre.`
      : `Integrating ${article.category} within modern engineering workflows addresses a dual objective: maximizing structural efficiency while anticipating regulatory constraints. Site audits reveal that upfront diagnostic planning eliminates up to 85% of jobsite contingencies during primary structural works.`);

  const takeaways = article.content?.[lang]?.keyTakeaways || [
    lang === 'fr' ? "Optimisation des délais de chantier jusqu'à 35% grâce aux audits numérisés." : "Up to 35% time-to-delivery optimization via digital pre-audits.",
    lang === 'fr' ? "Conformité garantie aux normes environnementales et thermiques RE2020." : "Guaranteed compliance with RE2020 carbon & energy standards.",
    lang === 'fr' ? "Réduction des coûts d'exploitation et valorisation durable de l'actif." : "Operational cost reduction and long-term property value enhancement.",
    lang === 'fr' ? "Supervision continue par nos ingénieurs diplômés du bureau d'études." : "Continuous monitoring led by our licensed structural engineering leads."
  ];

  const section2Title = article.content?.[lang]?.section2Title || 
    (lang === 'fr' ? "2. Protocole de Déploiement Terrain par Renovex" : "2. On-Site Implementation Protocol by Renovex");

  const section2Text = article.content?.[lang]?.section2Text || 
    (lang === 'fr'
      ? "Chaque intervention débute par un Relevé Laser 3D et une analyse non destructive des structures existantes. Les données capturées alimentent notre jumeau numérique BIM, permettant à nos ingénieurs de simuler les contraintes de charge, la résistance thermique et la durabilité des matériaux avant tout coup de pioche."
      : "Every project starts with a 3D Laser Scan and non-destructive testing of existing load-bearing elements. Captured data feeds our BIM digital twin, allowing engineers to simulate load stress, thermal performance, and material longevity prior to groundbreaking.");

  const quote = article.content?.[lang]?.quote || 
    (lang === 'fr'
      ? "« La précision de l'ingénierie en amont est la garantie ultime de la sécurité, du respect des devis et de la pérennité architecturale. »"
      : "« Upfront engineering precision is the ultimate guarantee for jobsite safety, budget adherence, and architectural longevity. »");

  const section3Title = article.content?.[lang]?.section3Title || 
    (lang === 'fr' ? "3. Impact Économique & Bilan de Long Terme" : "3. Economic Impact & Long-Term Return");

  const section3Text = article.content?.[lang]?.section3Text || 
    (lang === 'fr'
      ? "Au-delà du gain écologique et sécuritaire, le déploiement de ces standards garantit une valorisation pérenne de votre patrimoine immobilier. De plus, nos prestations s'inscrivent dans les cadres d'éligibilité aux subventions publiques (MaPrimeRénov', CEE, Taux réduit de TVA)."
      : "Beyond safety and eco-efficiency, adopting these standards locks in enduring property appreciation. Furthermore, our interventions qualify for government grants and energy efficiency subsidies.");

  return (
    <article className="bg-[#FAFAFA] min-h-screen pt-4 pb-20">
      
      {/* Top Floating / Sticky Bar */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-2xs mb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          <motion.button
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBackToBlog}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-800 hover:text-amber-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>{lang === 'fr' ? 'Retour aux Articles' : 'Back to Articles'}</span>
          </motion.button>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Share button with Toast tooltip */}
            <div className="relative">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full transition-all cursor-pointer"
                title={lang === 'fr' ? 'Partager l\'article' : 'Share article'}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-gray-600" />}
                <span className="hidden sm:inline">{copied ? (lang === 'fr' ? 'Lien Copié !' : 'Link Copied!') : (lang === 'fr' ? 'Partager' : 'Share')}</span>
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full transition-all cursor-pointer ${
                bookmarked 
                  ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-amber-500 text-amber-600' : 'text-gray-600'}`} />
              <span className="hidden sm:inline">{bookmarked ? (lang === 'fr' ? 'Sauvegardé' : 'Saved') : (lang === 'fr' ? 'Sauvegarder' : 'Bookmark')}</span>
            </button>

            {/* Booking CTA Button */}
            <button
              onClick={onOpenBooking}
              className="bg-[#111827] hover:bg-black text-white font-bold text-xs px-4 py-2 sm:px-5 sm:py-2 rounded-full transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'fr' ? 'Réserver un Audit' : 'Book Audit'}</span>
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2 flex-wrap font-medium">
          <button onClick={onBackToBlog} className="hover:text-amber-600 transition-colors">
            {lang === 'fr' ? 'Accueil Journal' : 'Blog Home'}
          </button>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-700 font-semibold">{article.category}</span>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 font-bold truncate max-w-[200px] sm:max-w-xs">{article.title[lang]}</span>
        </nav>

        {/* Article Title & Metadata Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>{article.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 font-montserrat tracking-tight leading-[1.15] mb-6">
            {article.title[lang]}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200/80 text-xs sm:text-sm text-gray-600">
            {/* Author Profile */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gray-900 text-amber-400 font-bold flex items-center justify-center border-2 border-amber-400/40 shadow-xs">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{article.author}</p>
                <p className="text-xs text-gray-500">{article.authorRole?.[lang] || (lang === 'fr' ? 'Bureau d\'Études Technique Renovex' : 'Renovex Engineering Office')}</p>
              </div>
            </div>

            {/* Date & Read time */}
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-500" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                {article.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Hero Featured Image */}
        <div className="rounded-[28px] overflow-hidden mb-10 shadow-lg border border-gray-200/80 relative bg-gray-900 group">
          <img
            src={article.image}
            alt={article.title[lang]}
            className="w-full h-[320px] sm:h-[420px] object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-white text-xs flex justify-between items-center">
            <span className="text-gray-200 font-medium">© Renovex BTP — {lang === 'fr' ? 'Dossier Technique Exclusif' : 'Exclusive Technical Report'}</span>
            <span className="bg-amber-400 text-gray-950 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase">RE2020 / BTP</span>
          </div>
        </div>

        {/* Lead Introduction Box */}
        <div className="bg-amber-50/60 border-l-4 border-amber-400 p-6 sm:p-8 rounded-r-2xl mb-10 shadow-2xs">
          <p className="text-base sm:text-lg text-gray-900 font-semibold leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Article Body Sections */}
        <div className="prose prose-lg max-w-none text-gray-800 space-y-8 leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold font-montserrat text-gray-950 mb-4 tracking-tight">
              {section1Title}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              {section1Text}
            </p>
          </section>

          {/* Key Takeaways Callout Box */}
          <div className="my-8 bg-gray-900 text-white rounded-[24px] p-6 sm:p-8 border border-gray-800 shadow-md">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Synthèse Technique du Bureau d\'Études' : 'Engineering Takeaways'}</span>
            </div>
            <ul className="space-y-3">
              {takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold font-montserrat text-gray-950 mb-4 tracking-tight">
              {section2Title}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              {section2Text}
            </p>
          </section>

          {/* Engineer Quote Block */}
          <blockquote className="my-8 p-6 sm:p-8 bg-gradient-to-r from-gray-100 to-amber-50/40 rounded-2xl border-l-4 border-gray-900 shadow-2xs italic text-gray-900 font-medium text-lg sm:text-xl leading-relaxed">
            {quote}
            <footer className="not-italic text-xs font-bold text-amber-800 uppercase tracking-wider mt-3">
              — {article.author}, {lang === 'fr' ? 'Ingénieur Référent Renovex' : 'Lead Structural Engineer'}
            </footer>
          </blockquote>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold font-montserrat text-gray-950 mb-4 tracking-tight">
              {section3Title}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {section3Text}
            </p>
          </section>

        </div>

        {/* Author Bio Box */}
        <div className="mt-12 bg-white rounded-[28px] p-6 sm:p-8 border border-gray-200/90 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gray-900 text-amber-400 font-bold flex items-center justify-center border-4 border-amber-400/30 flex-shrink-0 shadow-md">
            <User className="w-10 h-10" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              {lang === 'fr' ? 'Auteur de l\'article' : 'Written By'}
            </span>
            <h3 className="text-xl font-bold font-montserrat text-gray-900 mt-0.5">
              {article.author}
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              {article.authorRole?.[lang] || (lang === 'fr' ? 'Expert BTP & Bureau d\'Études Renovex' : 'BTP Senior Structural Engineer')}
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              {lang === 'fr'
                ? 'Ingénieur diplômé spécialisé en pathologies des structures et rénovation bas-carbone. Supervisant les diagnostics techniques et les avis de faisabilité du groupe Renovex.'
                : 'Licensed engineer specializing in structural mechanics and low-carbon restoration. Directing technical audits across Renovex active sites.'}
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-xs px-5 py-3 rounded-full transition-all cursor-pointer flex-shrink-0"
          >
            {lang === 'fr' ? 'Consulter l\'expert' : 'Consult Expert'}
          </button>
        </div>

        {/* Interactive Q&A Form with Engineer */}
        <div className="mt-10 bg-gray-900 text-white rounded-[28px] p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold border border-amber-400/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-montserrat">
                {lang === 'fr' ? 'Une Question Technique sur cet Article ?' : 'Technical Question on this Subject?'}
              </h3>
              <p className="text-xs text-gray-400">
                {lang === 'fr' ? 'Posez votre question directement à nos ingénieurs (réponse sous 24h)' : 'Ask our site engineering team directly (reply within 24h)'}
              </p>
            </div>
          </div>

          {questionSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-950/80 border border-emerald-500/40 p-6 rounded-2xl text-center space-y-2"
            >
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-emerald-300">
                {lang === 'fr' ? 'Question transmise au bureau d\'études !' : 'Question submitted to engineering team!'}
              </h4>
              <p className="text-xs text-emerald-200">
                {lang === 'fr' 
                  ? 'Un ingénieur analysera votre demande et vous recontactera très rapidement.'
                  : 'An engineer will review your inquiry and contact you shortly.'}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleQuestionSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder={lang === 'fr' ? 'Votre Nom *' : 'Your Name *'}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 text-xs outline-none focus:border-amber-400"
                />
                <input
                  type="text"
                  required
                  placeholder={lang === 'fr' ? 'Téléphone ou Email *' : 'Phone or Email *'}
                  value={userContact}
                  onChange={(e) => setUserContact(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 text-xs outline-none focus:border-amber-400"
                />
              </div>

              <textarea
                required
                rows={3}
                placeholder={lang === 'fr' ? 'Votre question ou projet concernant cette thématique...' : 'Your technical question regarding this article topic...'}
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 text-xs outline-none focus:border-amber-400 resize-none"
              />

              <button
                type="submit"
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold px-6 py-3 rounded-full text-xs transition-all flex items-center justify-center gap-2 cursor-pointer gold-glow"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? 'Envoyer au Bureau d\'Études' : 'Submit to Engineers'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Related Articles Section */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                {lang === 'fr' ? 'Continuer la lecture' : 'Keep Reading'}
              </span>
              <h3 className="text-2xl font-bold font-montserrat text-gray-950">
                {lang === 'fr' ? 'Articles & Dossiers Similaires' : 'Related Technical Articles'}
              </h3>
            </div>
            <button
              onClick={onBackToBlog}
              className="text-xs font-bold text-gray-700 hover:text-amber-600 flex items-center gap-1 cursor-pointer"
            >
              <span>{lang === 'fr' ? 'Tout le Journal' : 'View All'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -4 }}
                onClick={() => onSelectArticle(post)}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_ENGINEERS_IMAGE; }}
                    />
                    <div className="absolute top-2.5 left-2.5 bg-gray-900/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] text-gray-500 mb-2">{post.date} • {post.readTime}</p>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                      {post.title[lang]}
                    </h4>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-1 text-[11px] text-amber-600 font-bold flex items-center gap-1">
                  <span>{lang === 'fr' ? 'Lire le dossier' : 'Read Report'}</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 text-white rounded-[32px] p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 border border-gray-800">
          <div className="max-w-xl">
            <span className="inline-block bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-amber-400/30">
              {lang === 'fr' ? 'Accompagnement Sur-Mesure' : 'Technical Partnership'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-montserrat mb-3 leading-tight">
              {lang === 'fr' ? 'Un projet de rénovation ou de construction ?' : 'Planning a renovation or building project?'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {lang === 'fr'
                ? 'Bénéficiez d\'une visite technique gratuite avec nos ingénieurs pour évaluer la faisabilité et chiffrer vos travaux avec précision.'
                : 'Book a free site consultation with our engineers to audit feasibility and calculate exact costs.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
            <button
              onClick={onOpenBooking}
              className="bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer gold-glow"
            >
              <Calendar className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Réserver une Visite' : 'Book Site Visit'}</span>
            </button>
            <button
              onClick={onOpenCallback}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>{lang === 'fr' ? 'Rappel 15 min' : 'Callback 15 min'}</span>
            </button>
          </div>
        </div>

      </div>
    </article>
  );
};

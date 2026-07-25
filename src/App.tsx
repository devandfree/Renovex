/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, ServiceItem, BlogPost } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ProjectsPage } from './components/ProjectsPage';
import { BlogPage } from './components/BlogPage';
import { ContactPage } from './components/ContactPage';
import { ProjectsSection } from './components/ProjectsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CallbackModal } from './components/CallbackModal';
import { ServiceModal } from './components/ServiceModal';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [activeSection, setActiveSection] = useState('home');
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'services' | 'projects' | 'blog' | 'contact'>('home');

  // Modals & Detailed Views state
  const [bookingOpen, setBookingOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Automatically scroll to top of window whenever active page view, selected service, or article changes
  React.useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const frameId = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    return () => cancelAnimationFrame(frameId);
  }, [currentView, selectedArticle, selectedServiceId]);

  const handleNavSectionChange = (sec: string) => {
    setSelectedServiceId(null);
    setSelectedArticle(null);
    setActiveSection(sec);
    if (sec === 'about') {
      setCurrentView('about');
    } else if (sec === 'services') {
      setCurrentView('services');
    } else if (sec === 'projects') {
      setCurrentView('projects');
    } else if (sec === 'blog') {
      setCurrentView('blog');
    } else if (sec === 'contact') {
      setCurrentView('contact');
    } else {
      if (currentView !== 'home') {
        setCurrentView('home');
      } else {
        const element = document.getElementById(sec);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-amber-400 selection:text-gray-950">
      
      {/* Header Navigation */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        onOpenBooking={() => setBookingOpen(true)}
        activeSection={activeSection}
        setActiveSection={handleNavSectionChange}
      />

      {/* Main Content Sections */}
      <main>
        {selectedServiceId ? (
          <ServiceDetailPage
            serviceId={selectedServiceId}
            lang={lang}
            onGoBack={() => setSelectedServiceId(null)}
            onSelectService={(id) => setSelectedServiceId(id)}
            onOpenBooking={() => setBookingOpen(true)}
            onOpenCallback={() => setCallbackOpen(true)}
          />
        ) : currentView === 'about' ? (
          <AboutPage
            lang={lang}
            onGoBack={() => {
              setCurrentView('home');
              setActiveSection('home');
            }}
            onOpenBooking={() => setBookingOpen(true)}
            onOpenCallback={() => setCallbackOpen(true)}
          />
        ) : currentView === 'services' ? (
          <ServicesPage
            lang={lang}
            onGoBack={() => {
              setCurrentView('home');
              setActiveSection('home');
            }}
            onOpenBooking={() => setBookingOpen(true)}
            onOpenCallback={() => setCallbackOpen(true)}
            onSelectService={(service) => setSelectedServiceId(service.id)}
          />
        ) : currentView === 'projects' ? (
          <ProjectsPage
            lang={lang}
            onGoBack={() => {
              setCurrentView('home');
              setActiveSection('home');
            }}
            onOpenBooking={() => setBookingOpen(true)}
            onOpenCallback={() => setCallbackOpen(true)}
          />
        ) : currentView === 'blog' ? (
          <BlogPage
            lang={lang}
            selectedArticle={selectedArticle}
            onSelectArticle={setSelectedArticle}
            onGoBack={() => {
              if (selectedArticle) {
                setSelectedArticle(null);
              } else {
                setCurrentView('home');
                setActiveSection('home');
              }
            }}
            onOpenBooking={() => setBookingOpen(true)}
            onOpenCallback={() => setCallbackOpen(true)}
          />
        ) : currentView === 'contact' ? (
          <ContactPage
            lang={lang}
            onGoBack={() => {
              setCurrentView('home');
              setActiveSection('home');
            }}
            onOpenBooking={() => setBookingOpen(true)}
            onOpenCallback={() => setCallbackOpen(true)}
          />
        ) : (
          <>
            {/* 1. Hero Section with rotating circular badge */}
            <HeroSection
              lang={lang}
              onOpenBooking={() => setBookingOpen(true)}
              onOpenCallback={() => setCallbackOpen(true)}
            />

            {/* 2. Key Stats Bar */}
            <StatsBar lang={lang} />

            {/* 3. Services Tailored to You */}
            <ServicesSection
              lang={lang}
              onSelectService={(service) => setSelectedServiceId(service.id)}
            />

            {/* 4. About Our Company & Mission */}
            <AboutSection
              lang={lang}
              onOpenBooking={() => setBookingOpen(true)}
              onOpenAboutPage={() => {
                setCurrentView('about');
                setActiveSection('about');
              }}
            />

            {/* 5. Featured Projects Portfolio */}
            <ProjectsSection
              lang={lang}
              onOpenProjectsPage={() => {
                setCurrentView('projects');
                setActiveSection('projects');
              }}
            />

            {/* 6. Industry Insights & Blog */}
            <BlogSection
              lang={lang}
              onOpenBlogPage={() => {
                setSelectedArticle(null);
                setCurrentView('blog');
                setActiveSection('blog');
              }}
              onSelectArticle={(article) => {
                setSelectedArticle(article);
                setCurrentView('blog');
                setActiveSection('blog');
              }}
            />

            {/* 7. Homepage Quick Contact CTA Banner */}
            <section className="py-16 bg-[#FAFAFA]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-[32px] p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-3 max-w-xl">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                      {lang === 'fr' ? 'Prêt à concrétiser votre chantier ?' : 'Ready to start your build?'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold">
                      {lang === 'fr' ? 'Faites étudier votre projet par nos ingénieurs BTP' : 'Have your project reviewed by our engineers'}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {lang === 'fr'
                        ? 'Devis sous 24h à 48h, étude de faisabilité technique et garantie décennale AXA.'
                        : 'Quote within 24 to 48 hours, technical feasibility study, and 10-year AXA warranty.'}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 w-full md:w-auto">
                    <button
                      onClick={() => {
                        setCurrentView('contact');
                        setActiveSection('contact');
                      }}
                      className="bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-extrabold px-8 py-4 rounded-full text-xs sm:text-sm transition-all duration-300 shadow-md gold-glow shine-hover cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>{lang === 'fr' ? 'Accéder à la Page Contact' : 'Go to Contact Page'}</span>
                    </button>
                    <button
                      onClick={() => setBookingOpen(true)}
                      className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full text-xs sm:text-sm backdrop-blur-md transition-all border border-white/20 cursor-pointer flex items-center justify-center"
                    >
                      <span>{lang === 'fr' ? 'Prendre Rendez-vous' : 'Book Appointment'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenBooking={() => setBookingOpen(true)}
        onNavigate={handleNavSectionChange}
      />

      {/* Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        lang={lang}
      />

      <CallbackModal
        isOpen={callbackOpen}
        onClose={() => setCallbackOpen(false)}
        lang={lang}
      />

      <ServiceModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        lang={lang}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Back To Top Floating Button */}
      <BackToTop lang={lang} />

    </div>
  );
}

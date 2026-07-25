import React from 'react';
import { X, CheckCircle2, Clock, Tag, ArrowRight } from 'lucide-react';
import { Language, ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  lang: Language;
  onOpenBooking: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  lang,
  onOpenBooking,
}) => {
  if (!service) return null;

  const details = service.fullDetails[lang];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[28px] max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
            service.isDark ? 'bg-gray-900 text-amber-400' : 'bg-emerald-100 text-emerald-800'
          }`}>
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
              {lang === 'fr' ? 'Fiche Technique Service' : 'Technical Service Sheet'}
            </span>
            <h3 className="text-2xl font-bold text-gray-900">
              {service.title[lang]}
            </h3>
          </div>
        </div>

        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {details.overview}
        </p>

        {/* Features Checklist */}
        <div className="bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-100">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
            {lang === 'fr' ? 'Prestations Incluses' : 'Included Services'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {details.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-medium text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline & Price Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200/60">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>{lang === 'fr' ? 'Délai Moyen' : 'Average Duration'}</span>
            </div>
            <p className="text-sm font-semibold text-amber-950">
              {details.typicalTimeline}
            </p>
          </div>

          <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200/60">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-1">
              <Tag className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'fr' ? 'Tarif Indicatif' : 'Starting Rate'}</span>
            </div>
            <p className="text-sm font-semibold text-emerald-950">
              {details.startingPrice}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-gray-500 hover:text-gray-800"
          >
            {lang === 'fr' ? 'Fermer' : 'Close'}
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="bg-[#F2B94C] hover:bg-[#e0a83b] text-gray-950 font-bold px-6 py-3 rounded-full text-xs transition-all flex items-center gap-2 shadow-sm"
          >
            <span>{lang === 'fr' ? 'Demander un Devis pour ce Service' : 'Request Quote for this Service'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

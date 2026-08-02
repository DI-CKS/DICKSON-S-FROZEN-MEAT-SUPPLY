import React from 'react';
import { Star, Quote, Building2, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#121212] text-[#F5F5F0] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#1A1A1A] border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-widest">
            <Quote className="w-3.5 h-3.5" />
            <span>COMMERCIAL REVIEWS &amp; TESTIMONIALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display uppercase">
            TRUSTED BY HEAD CHEFS &amp; RETAIL GROCERS
          </h2>

          <p className="text-base text-zinc-300">
            Hear from commercial buyers across Accra, Kumasi, and Tema who rely on Dickson&apos;s Frozen Meat Supply for uninterrupted stock.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#1A1A1A] border border-[#333] rounded p-6 flex flex-col justify-between shadow-xl relative group hover:border-[#FF6B00] transition-all"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF6B00] text-[#FF6B00]" />
                  ))}
                </div>

                <p className="text-sm text-zinc-200 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-[#333] flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6B00]"
                />
                <div>
                  <h4 className="font-extrabold text-white text-sm uppercase font-display">{t.name}</h4>
                  <p className="text-xs text-[#FF6B00] font-bold uppercase tracking-wider">{t.role}</p>
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 mt-0.5 font-semibold">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-zinc-500" />
                      {t.business}
                    </span>
                  </div>
                  <div className="text-[10px] text-zinc-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

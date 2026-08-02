import React from 'react';
import { ShieldCheck, ArrowRight, Snowflake, PhoneCall, Award, Truck, CheckCircle2 } from 'lucide-react';
import heroBanner from '../assets/images/frozen_meat_hero_banner_1785644390196.jpg';
import { PHONE_CONTACTS } from '../data/products';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreProducts }) => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center bg-[#121212] text-[#F5F5F0] overflow-hidden">
      {/* Background Hero Banner Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Dickson's Frozen Meat Industrial Cold Storage Warehouse"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-25 object-center filter brightness-90 saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-[#121212]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent" />
      </div>

      {/* Decorative Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#1A1A1A] border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span>DIRECT FACTORY IMPORTER & WHOLESALE DISTRIBUTOR</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] font-display uppercase">
              PREMIUM FROZEN MEAT, POULTRY &amp; FISH{' '}
              <span className="text-[#FF6B00]">
                DELIVERED FRESH
              </span>{' '}
              TO YOUR BUSINESS
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Ghana&apos;s reliable cold-chain supplier for commercial buyers, restaurants, supermarkets, hotels, and caterers. Grade A certified imports of Whole Chicken, Leg Quarters, Boneless Beef, Pork Cuts, and Atlantic Fish at unbeatable wholesale rates.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Strict -18°C Unbroken Cold Storage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Factory Sealed Master Cartons</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Express Refrigerated Truck Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Exact Net Weight &amp; Count Guaranteed</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-[#FF6B00] hover:bg-white text-black font-extrabold text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Request Wholesale Pricing</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded bg-[#1A1A1A] hover:bg-[#262626] text-[#F5F5F0] font-bold text-xs uppercase tracking-wider border border-[#333] transition-all cursor-pointer"
              >
                <span>View Product Catalog</span>
              </button>
            </div>

            {/* Direct Phone Numbers Ribbon */}
            <div className="pt-6 border-t border-[#333]">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Instant Phone Sales &amp; Container Orders:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {PHONE_CONTACTS.map((phone) => (
                  <a
                    key={phone.number}
                    href={`tel:${phone.number}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1A1A1A] border border-[#333] hover:border-[#FF6B00] transition-colors text-xs font-mono font-bold text-[#FF6B00]"
                  >
                    <span>{phone.formatted}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Hero Interactive Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg bg-[#1A1A1A] border border-[#333] p-6 sm:p-8 shadow-2xl backdrop-blur-md overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-[#333]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#121212] border border-[#FF6B00] flex items-center justify-center text-[#FF6B00]">
                    <Snowflake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base uppercase font-display">Wholesale Supply Spec</h3>
                    <p className="text-xs text-zinc-400">Dickson&apos;s Cold Storage Logistics</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-800/80 uppercase tracking-wider">
                  Ready to Ship
                </span>
              </div>

              {/* Spec Rows */}
              <div className="py-6 space-y-4">
                <div className="flex justify-between items-center text-xs py-2 border-b border-[#333]/60">
                  <span className="text-zinc-400 flex items-center gap-2 uppercase tracking-wider font-bold">
                    <Truck className="w-4 h-4 text-[#FF6B00]" />
                    Delivery Lead Time
                  </span>
                  <span className="font-bold text-white">Same-Day / Next-Day</span>
                </div>

                <div className="flex justify-between items-center text-xs py-2 border-b border-[#333]/60">
                  <span className="text-zinc-400 flex items-center gap-2 uppercase tracking-wider font-bold">
                    <Snowflake className="w-4 h-4 text-[#FF6B00]" />
                    Storage Temperature
                  </span>
                  <span className="font-bold text-[#FF6B00]">-18°C Deep Freeze</span>
                </div>

                <div className="flex justify-between items-center text-xs py-2 border-b border-[#333]/60">
                  <span className="text-zinc-400 flex items-center gap-2 uppercase tracking-wider font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Quality Assurance
                  </span>
                  <span className="font-bold text-emerald-400">100% Grade A Imports</span>
                </div>

                <div className="flex justify-between items-center text-xs py-2">
                  <span className="text-zinc-400 flex items-center gap-2 uppercase tracking-wider font-bold">
                    <Award className="w-4 h-4 text-[#FF6B00]" />
                    Wholesale Minimums
                  </span>
                  <span className="font-bold text-white">From 5 Cartons</span>
                </div>
              </div>

              {/* Quick Inquiry Action */}
              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3.5 px-4 rounded bg-[#FF6B00] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Quick Container &amp; Carton Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

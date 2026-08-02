import React from 'react';
import { Building, ShieldCheck, Award, Factory, Snowflake } from 'lucide-react';
import coldStoreImg from '../assets/images/frozen_meat_hero_banner_1785644390196.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#1A1A1A] border-t border-[#333] text-[#F5F5F0] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded overflow-hidden border border-[#333] shadow-2xl aspect-[4/3] bg-[#0A0A0A]">
              <img
                src={coldStoreImg}
                alt="Dickson's Cold Storage Facility"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

              {/* Floating Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#121212]/95 border border-[#333] backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#FF6B00] flex items-center justify-center text-black font-extrabold">
                    <Snowflake className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm font-display uppercase">Industrial Deep Freeze Hub</h4>
                    <p className="text-xs text-zinc-400">Continuous -18°C Monitoring</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#FF6B00]">ACCRA &amp; TEMA</span>
              </div>
            </div>
          </div>

          {/* Copy Side */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#121212] border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-widest">
              <Building className="w-3.5 h-3.5" />
              <span>ABOUT DICKSON&apos;S FROZEN MEAT SUPPLY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight font-display uppercase">
              GHANA&apos;S PREMIER WHOLESALE FROZEN MEAT IMPORTER
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Founded on the pillars of uncompromising quality, cold-chain integrity, and competitive commercial pricing, Dickson&apos;s Frozen Meat Supply has grown into a leading B2B distributor of frozen poultry, beef, pork, and seafood in Ghana.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              We source directly from certified international processing plants in Europe and South America. By eliminating unnecessary middleman markups, we empower restaurant owners, grocers, and catering businesses to maintain robust profit margins while serving pristine cuts.
            </p>

            {/* Core Values Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded bg-[#121212] border border-[#333]">
                <div className="flex items-center gap-2 text-[#FF6B00] font-bold text-xs uppercase tracking-wider font-display mb-1">
                  <Factory className="w-4 h-4" />
                  Direct Overseas Supply
                </div>
                <p className="text-xs text-zinc-400">Direct container shipments from top international slaughterhouses.</p>
              </div>

              <div className="p-4 rounded bg-[#121212] border border-[#333]">
                <div className="flex items-center gap-2 text-[#FF6B00] font-bold text-xs uppercase tracking-wider font-display mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Weight &amp; Count Accuracy
                </div>
                <p className="text-xs text-zinc-400">Guaranteed exact net carton weights with zero hidden thawing loss.</p>
              </div>

              <div className="p-4 rounded bg-[#121212] border border-[#333]">
                <div className="flex items-center gap-2 text-[#FF6B00] font-bold text-xs uppercase tracking-wider font-display mb-1">
                  <Award className="w-4 h-4 text-[#FF6B00]" />
                  Commercial Reliability
                </div>
                <p className="text-xs text-zinc-400">Scheduled delivery routes ensuring your kitchen never runs out of stock.</p>
              </div>

              <div className="p-4 rounded bg-[#121212] border border-[#333]">
                <div className="flex items-center gap-2 text-[#FF6B00] font-bold text-xs uppercase tracking-wider font-display mb-1">
                  <Snowflake className="w-4 h-4 text-[#FF6B00]" />
                  Advanced Cold Fleet
                </div>
                <p className="text-xs text-zinc-400">Insulated thermal trucks with active refrigeration units.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

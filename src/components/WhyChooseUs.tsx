import React from 'react';
import { ThermometerSnowflake, Ship, Boxes, UserCheck, CheckCircle, ShieldAlert } from 'lucide-react';
import { FEATURES } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ThermometerSnowflake: <ThermometerSnowflake className="w-7 h-7 text-[#FF6B00]" />,
    Ship: <Ship className="w-7 h-7 text-[#FF6B00]" />,
    Boxes: <Boxes className="w-7 h-7 text-[#FF6B00]" />,
    UserCheck: <UserCheck className="w-7 h-7 text-[#FF6B00]" />,
  };

  return (
    <section id="why-us" className="py-24 bg-[#121212] text-[#F5F5F0] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#1A1A1A] border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>UNMATCHED B2B ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display uppercase">
            WHY GHANA TRUSTS DICKSON&apos;S FROZEN MEAT SUPPLY
          </h2>

          <p className="text-base text-zinc-300">
            We operate with industrial precision to keep your kitchen or retail counters stocked with pristine frozen poultry, beef, pork, and fish.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group bg-[#1A1A1A] rounded border border-[#333] p-6 hover:border-[#FF6B00] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded bg-[#121212] border border-[#FF6B00] flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-black transition-colors">
                    {iconMap[feature.iconName]}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-[#121212] text-[#FF6B00] border border-[#333]">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white group-hover:text-[#FF6B00] transition-colors font-display uppercase">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#333] flex items-center gap-2 text-xs text-[#FF6B00] font-bold uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner highlight */}
        <div className="mt-16 p-8 rounded bg-[#1A1A1A] border border-[#FF6B00]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase">Need Container Load Pricing (FCL)?</h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl">
              We provide direct seaport custom clearing and reefer container transport for large-scale meat distributors across Ghana.
            </p>
          </div>

          <a
            href="tel:+233547159170"
            className="px-6 py-3.5 rounded bg-[#FF6B00] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider shadow-lg transition-colors whitespace-nowrap"
          >
            Call Container Line (+233 547 159 170)
          </a>
        </div>

      </div>
    </section>
  );
};

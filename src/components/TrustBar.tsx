import React from 'react';
import { TRUST_STATS } from '../data/content';
import { Truck, Snowflake, ShieldCheck, Building2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustFeatures = [
    {
      icon: Truck,
      title: 'Bulk Cold Transport',
      subtitle: 'Insulated fleet across Ghana',
    },
    {
      icon: Snowflake,
      title: '-18°C Deep Freeze',
      subtitle: 'Unbroken thermal protection',
    },
    {
      icon: ShieldCheck,
      title: 'Grade A Certified',
      subtitle: 'Premium EU & S. America cuts',
    },
    {
      icon: Building2,
      title: 'Direct Factory Importer',
      subtitle: 'Zero middleman markups',
    },
  ];

  return (
    <section className="bg-[#1A1A1A] border-y border-[#333] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Features Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 pb-8 border-b border-[#333]">
          {trustFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded bg-[#121212] border border-[#333] hover:border-[#FF6B00] transition-all group"
              >
                <div className="w-12 h-12 rounded bg-[#1A1A1A] border border-[#FF6B00] flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-black transition-colors shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-xs uppercase tracking-wider font-display">{feat.title}</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">{feat.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {TRUST_STATS.map((stat, idx) => (
            <div key={idx} className="p-4 bg-[#121212] rounded border border-[#333]">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] font-display tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-zinc-300 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

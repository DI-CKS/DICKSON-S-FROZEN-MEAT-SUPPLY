import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageSquare, Box, Scale, Snowflake, ShieldCheck } from 'lucide-react';
import { PRODUCTS, PHONE_CONTACTS } from '../data/products';
import { Product } from '../types';

interface WholesaleCalculatorProps {
  onApplyToQuote: (summary: string) => void;
}

export const WholesaleCalculator: React.FC<WholesaleCalculatorProps> = ({ onApplyToQuote }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);
  const [cartonCount, setCartonCount] = useState<number>(20);

  const selectedProduct: Product = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Estimate approx weight per carton in kg
  const parseCartonKg = (weightStr: string): number => {
    if (weightStr.includes('20 kg') || weightStr.includes('25 kg')) return 20;
    if (weightStr.includes('15 kg')) return 15;
    return 10;
  };

  const kgPerCarton = parseCartonKg(selectedProduct.cartonWeight);
  const totalKg = cartonCount * kgPerCarton;
  const totalTonnes = (totalKg / 1000).toFixed(2);
  const primaryPhone = PHONE_CONTACTS[0];

  const calculationSummary = `${cartonCount} Master Cartons of ${selectedProduct.name} (~${totalKg} kg / ${totalTonnes} Tonnes)`;

  const handleSendToWhatsApp = () => {
    const text = `Hello Dickson's Frozen Meat Supply, I would like a wholesale price quote for:\n- Product: ${selectedProduct.name}\n- Cartons: ${cartonCount} Boxes (~${totalKg} kg)\n- Category: ${selectedProduct.category.toUpperCase()}\n- Destination: Ghana Commercial Address\n\nPlease provide your current container/wholesale rate.`;
    window.open(`https://wa.me/${primaryPhone.number.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-[#121212] border-y border-[#333] text-[#F5F5F0] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#1A1A1A] border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-widest">
              <Calculator className="w-3.5 h-3.5" />
              <span>B2B FREIGHT &amp; TONNAGE ESTIMATOR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight font-display uppercase">
              CALCULATE YOUR BULK MEAT ORDER VOLUME
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Planning your weekly restaurant inventory or monthly retail supermarket stock? Use our interactive calculator to estimate net payload weight, carton volume, and required cold storage space.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded bg-[#1A1A1A] border border-[#333]">
                <Box className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Master Carton Packaging</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Heavy-duty corrugated boxes lined with protective food-grade inner polybags.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded bg-[#1A1A1A] border border-[#333]">
                <Snowflake className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Cold Chain Protection</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Dispatched in active refrigerated vehicles maintained strictly at -18°C.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Card */}
          <div className="lg:col-span-7 bg-[#1A1A1A] border border-[#333] rounded-lg p-6 sm:p-8 shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-display uppercase">
              <Scale className="w-5 h-5 text-[#FF6B00]" />
              Wholesale Order Volume Calculator
            </h3>

            <div className="space-y-6">
              {/* Select Product */}
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                  1. Select Meat / Poultry Cut:
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-[#121212] border border-[#333] text-white font-medium text-sm focus:outline-none focus:border-[#FF6B00]"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.cartonWeight}) - [{p.category.toUpperCase()}]
                    </option>
                  ))}
                </select>
              </div>

              {/* Slider for Cartons */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    2. Quantity (Master Cartons):
                  </label>
                  <span className="text-xl font-black text-[#FF6B00] font-mono">
                    {cartonCount} <span className="text-xs text-zinc-400 font-normal">Cartons</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={cartonCount}
                  onChange={(e) => setCartonCount(Number(e.target.value))}
                  className="w-full h-2 bg-[#121212] rounded appearance-none cursor-pointer accent-[#FF6B00]"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 mt-1 font-mono">
                  <span>5 Cartons (Min)</span>
                  <span>50 Cartons</span>
                  <span>100 Cartons</span>
                  <span>200+ (Container)</span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded bg-[#121212] border border-[#333]">
                <div>
                  <div className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider">Net Weight (kg):</div>
                  <div className="text-2xl font-black text-white font-mono mt-0.5">{totalKg} kg</div>
                </div>

                <div>
                  <div className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider">Total Tonnage:</div>
                  <div className="text-2xl font-black text-[#FF6B00] font-mono mt-0.5">{totalTonnes} MT</div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider">Cold Storage Tier:</div>
                  <div className="text-xs font-bold text-emerald-400 mt-2 flex items-center gap-1 uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    {cartonCount >= 50 ? 'Pallet / Container' : 'Carton Batch'}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`https://wa.me/${primaryPhone.number.replace('+', '')}?text=${encodeURIComponent(`Hello Dickson's Frozen Meat Supply, I would like a wholesale price quote for:\n- Product: ${selectedProduct.name}\n- Cartons: ${cartonCount} Boxes (~${totalKg} kg)\n- Category: ${selectedProduct.category.toUpperCase()}\n\nPlease provide your current container/wholesale rate.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded bg-[#121212] text-emerald-400 border border-emerald-500/30 hover:bg-emerald-950/40 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Estimate</span>
                </a>

                <button
                  onClick={() => onApplyToQuote(calculationSummary)}
                  className="w-full py-3 px-4 rounded bg-[#FF6B00] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Attach to Formal Quote Form</span>
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

import React from 'react';
import { X, Snowflake, ShieldCheck, Box, Scale, MapPin, CheckCircle, Phone } from 'lucide-react';
import { Product } from '../types';
import { PHONE_CONTACTS } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectForQuote: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onSelectForQuote,
}) => {
  if (!product) return null;

  const primaryPhone = PHONE_CONTACTS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in font-sans">
      <div className="relative w-full max-w-2xl bg-[#1A1A1A] border border-[#333] rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A0A0A] border-b border-[#333]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-widest rounded bg-[#121212] text-[#FF6B00] border border-[#333]">
              {product.category}
            </span>
            <span className="text-xs text-zinc-400 font-mono">ID: {product.id}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-[#262626] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Product Info & Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 relative rounded overflow-hidden border border-[#333] aspect-square bg-[#0A0A0A]">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0A0A0A]/90 text-[#FF6B00] text-xs font-bold flex items-center gap-1 border border-[#333]">
                <Snowflake className="w-3.5 h-3.5" />
                <span>{product.temperature}</span>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <h2 className="text-2xl font-black text-white leading-tight font-display uppercase">{product.name}</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">{product.description}</p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded bg-[#121212] border border-[#333]">
                  <div className="text-zinc-400 flex items-center gap-1 mb-1 font-bold uppercase tracking-wider text-[11px]">
                    <Box className="w-3.5 h-3.5 text-[#FF6B00]" />
                    Packaging / Weight
                  </div>
                  <div className="font-bold text-zinc-200">{product.cartonWeight}</div>
                </div>

                <div className="p-3 rounded bg-[#121212] border border-[#333]">
                  <div className="text-zinc-400 flex items-center gap-1 mb-1 font-bold uppercase tracking-wider text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                    Origin
                  </div>
                  <div className="font-bold text-zinc-200">{product.origin}</div>
                </div>

                <div className="p-3 rounded bg-[#121212] border border-[#333]">
                  <div className="text-zinc-400 flex items-center gap-1 mb-1 font-bold uppercase tracking-wider text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Certified Grade
                  </div>
                  <div className="font-bold text-emerald-400">{product.grade}</div>
                </div>

                <div className="p-3 rounded bg-[#121212] border border-[#333]">
                  <div className="text-zinc-400 flex items-center gap-1 mb-1 font-bold uppercase tracking-wider text-[11px]">
                    <Scale className="w-3.5 h-3.5 text-[#FF6B00]" />
                    Minimum Order
                  </div>
                  <div className="font-bold text-[#FF6B00]">{product.minOrder}</div>
                </div>
              </div>

              {/* Cut Options */}
              {product.cutOptions && product.cutOptions.length > 0 && (
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Available Cut Specifications:</div>
                  <div className="flex flex-wrap gap-2">
                    {product.cutOptions.map((opt, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-[#121212] text-zinc-300 text-xs font-semibold border border-[#333] flex items-center gap-1"
                      >
                        <CheckCircle className="w-3 h-3 text-[#FF6B00]" />
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Instant Call / Ordering Ribbon */}
          <div className="p-4 rounded bg-[#121212] border border-[#FF6B00]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-wider">Direct Sales Line:</div>
              <div className="text-sm font-mono font-bold text-white flex items-center gap-2 mt-0.5">
                <Phone className="w-4 h-4 text-[#FF6B00]" />
                <span>{primaryPhone.formatted}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  onSelectForQuote(product);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded bg-[#FF6B00] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider shadow-lg transition-colors cursor-pointer"
              >
                Inquire Bulk Quote for {product.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

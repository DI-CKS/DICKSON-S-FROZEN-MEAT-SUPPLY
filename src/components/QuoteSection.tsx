import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, Building, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { QuoteFormData, ProductCategory, Product } from '../types';
import { PHONE_CONTACTS } from '../data/products';

interface QuoteSectionProps {
  initialProduct?: Product | null;
  initialSummary?: string;
  onSuccessSubmitted: (refId: string, name: string, summary: string) => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  initialProduct,
  initialSummary,
  onSuccessSubmitted,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'restaurant',
    categoryNeeded: 'all',
    estimatedVolume: '10 - 50 Cartons',
    deliveryRegion: 'Greater Accra / Tema',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        categoryNeeded: initialProduct.category,
        message: `Inquiry regarding: ${initialProduct.name} (${initialProduct.cartonWeight}).`,
      }));
    } else if (initialSummary) {
      setFormData((prev) => ({
        ...prev,
        message: `Calculated Order: ${initialSummary}`,
      }));
    }
  }, [initialProduct, initialSummary]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.businessName) {
      alert('Please fill in your Name, Business Name, and Phone Number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomTicket = `DFM-${Math.floor(100000 + Math.random() * 900000)}`;
      const summaryText = `${formData.estimatedVolume} of ${formData.categoryNeeded.toUpperCase()} for ${formData.businessName} in ${formData.deliveryRegion}`;
      
      onSuccessSubmitted(randomTicket, formData.name, summaryText);

      // Reset form
      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        businessType: 'restaurant',
        categoryNeeded: 'all',
        estimatedVolume: '10 - 50 Cartons',
        deliveryRegion: 'Greater Accra / Tema',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#121212] text-[#F5F5F0] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & B2B Hotlines */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#1A1A1A] border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-widest">
                <Building className="w-3.5 h-3.5" />
                <span>WHOLESALE PRICING &amp; QUOTATIONS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight font-display uppercase">
                GET DIRECT IMPORTER PRICING FOR YOUR BUSINESS
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Submit your order details below or speak directly with our wholesale team. We provide rapid quotation responses, scheduled deliveries, and volume discounts.
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="space-y-4 bg-[#1A1A1A] border border-[#333] rounded-lg p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-3 border-b border-[#333] font-display uppercase">
                <Phone className="w-4 h-4 text-[#FF6B00]" />
                Direct Sales &amp; Import Lines
              </h3>

              <div className="space-y-3">
                {PHONE_CONTACTS.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.number}`}
                    className="flex items-start justify-between p-3 rounded bg-[#121212] border border-[#333] hover:border-[#FF6B00] transition-colors group"
                  >
                    <div>
                      <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">{phone.label}</div>
                      <div className="text-base font-mono font-bold text-[#FF6B00] group-hover:text-white">
                        {phone.formatted}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#FF6B00] text-black text-[10px] font-extrabold uppercase tracking-widest">
                      Call Now
                    </span>
                  </a>
                ))}
              </div>

              <div className="pt-2 space-y-2 text-xs text-zinc-400 font-semibold">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>Sales Email: sales@dicksonsfrozenmeat.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>Main Depot: Accra Industrial Cold Logistics Hub, Ghana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>Depot Hours: Mon &ndash; Sat: 6:00 AM &ndash; 7:00 PM</span>
                </div>
              </div>
            </div>

            {/* Guarantee Callout */}
            <div className="p-4 rounded bg-[#1A1A1A] border border-[#FF6B00]/40 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#FF6B00] shrink-0" />
              <div className="text-xs text-zinc-300">
                <span className="font-extrabold text-white block uppercase tracking-wider font-display">Fast Quotation Turnaround:</span>
                Quotes submitted during business hours are responded to within 30 minutes with official carton rates.
              </div>
            </div>

          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-7 bg-[#1A1A1A] border border-[#333] rounded-lg p-6 sm:p-8 shadow-2xl relative">
            <h3 className="text-2xl font-black text-white mb-2 font-display uppercase">REQUEST A WHOLESALE QUOTE</h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              Fill in your commercial requirements to receive an official price estimate.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                    Your Full Name <span className="text-[#FF6B00]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chef John Mensah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#121212] border border-[#333] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                    Company / Business Name <span className="text-[#FF6B00]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Golden Grill Restaurant"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#121212] border border-[#333] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                    Phone Number (WhatsApp) <span className="text-[#FF6B00]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +233 55 929 3261"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#121212] border border-[#333] text-sm text-white font-mono placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. buyer@restaurant.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#121212] border border-[#333] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Business Type */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                    Business Type
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) =>
                      setFormData({ ...formData, businessType: e.target.value as QuoteFormData['businessType'] })
                    }
                    className="w-full px-4 py-3 rounded bg-[#121212] border border-[#333] text-sm text-white focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option value="restaurant">Restaurant / Eatery</option>
                    <option value="supermarket">Supermarket / Grocery</option>
                    <option value="hotel">Hotel / Resort</option>
                    <option value="caterer">Commercial Caterer</option>
                    <option value="wholesaler">Regional Meat Wholesaler</option>
                    <option value="other">Other Business Buyer</option>
                  </select>
                </div>

                {/* Product Category Needed */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                    Primary Category
                  </label>
                  <select
                    value={formData.categoryNeeded}
                    onChange={(e) =>
                      setFormData({ ...formData, categoryNeeded: e.target.value as ProductCategory })
                    }
                    className="w-full px-4 py-3 rounded bg-[#121212] border border-[#333] text-sm text-white focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option value="all">All Frozen Categories</option>
                    <option value="poultry">Poultry (Whole Chicken, Wings, Legs)</option>
                    <option value="beef">Frozen Beef Cuts &amp; Ribs</option>
                    <option value="fish">Atlantic Fish (Mackerel, Tilapia)</option>
                    <option value="pork">Frozen Pork Cuts</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Order Volume */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                    Estimated Volume Needed
                  </label>
                  <select
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#121212] border border-[#333] text-sm text-white focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option value="5 - 10 Cartons">5 - 10 Master Cartons</option>
                    <option value="10 - 50 Cartons">10 - 50 Master Cartons</option>
                    <option value="50 - 200 Cartons">50 - 200 Cartons (Pallet Loads)</option>
                    <option value="200+ Cartons">200+ Cartons (Full Container Load)</option>
                  </select>
                </div>

                {/* Delivery Region */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                    Delivery Destination / Region
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Accra, Tema, Kumasi, Takoradi"
                    value={formData.deliveryRegion}
                    onChange={(e) => setFormData({ ...formData, deliveryRegion: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#121212] border border-[#333] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
                  Additional Notes / Specific Cuts Required
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your weekly supply schedule or specific carton size preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-[#121212] border border-[#333] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded bg-[#FF6B00] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Processing Quote Request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Wholesale Quote Request</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 text-center pt-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Obligations. Direct B2B Wholesale Pricing Guaranteed.</span>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, Snowflake, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { PHONE_CONTACTS } from '../data/products';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#F5F5F0] font-sans border-t border-[#333]">
      
      {/* Top Banner Ribbon */}
      <div className="bg-[#121212] border-b border-[#333] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded bg-[#FF6B00] flex items-center justify-center text-black shrink-0 font-bold">
              <Snowflake className="w-5 h-5 text-black" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm font-display uppercase">Need Emergency Cold-Truck Stock Replenishment?</h4>
              <p className="text-xs text-zinc-300">Call our direct hotline for priority same-day delivery dispatch.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {PHONE_CONTACTS.map((phone) => (
              <a
                key={phone.number}
                href={`tel:${phone.number}`}
                className="px-3 py-1.5 rounded bg-[#1A1A1A] border border-[#FF6B00]/50 hover:bg-[#FF6B00] text-xs font-mono font-bold text-[#FF6B00] hover:text-black transition-colors"
              >
                {phone.formatted}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" />

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2">
              Dickson&apos;s Frozen Meat Supply is Ghana&apos;s leading direct importer &amp; wholesale cold-chain supplier for commercial kitchens, hotels, supermarkets, and catering businesses.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold uppercase tracking-wider pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Grade A International Imports &bull; -18°C Cold Chain</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest font-display">Navigation</h4>
            <ul className="space-y-2 text-xs text-zinc-300 font-medium">
              <li><a href="#home" className="hover:text-[#FF6B00] transition-colors">Home Page</a></li>
              <li><a href="#products" className="hover:text-[#FF6B00] transition-colors">Product Catalog</a></li>
              <li><a href="#calculator" className="hover:text-[#FF6B00] transition-colors">B2B Volume Calculator</a></li>
              <li><a href="#why-us" className="hover:text-[#FF6B00] transition-colors">Why Choose Dickson&apos;s</a></li>
              <li><a href="#about" className="hover:text-[#FF6B00] transition-colors">About Cold Stores</a></li>
              <li><a href="#faq" className="hover:text-[#FF6B00] transition-colors">FAQ &amp; Delivery</a></li>
              <li><a href="#contact" className="hover:text-[#FF6B00] transition-colors">Request a Quote</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest font-display">Meat &amp; Fish Categories</h4>
            <ul className="space-y-2 text-xs text-zinc-300 font-medium">
              <li>Whole Dressed Chicken &amp; Leg Quarters</li>
              <li>3-Joint Chicken Wings &amp; Turkey Wings</li>
              <li>Boneless Beef Cuts &amp; Short Ribs</li>
              <li>Atlantic Mackerel (Kpanla Fish)</li>
              <li>Whole Guttered Tilapia &amp; Red Croaker</li>
              <li>Pork Chops &amp; Pork Belly Slabs</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-[#FF6B00] uppercase tracking-widest font-display">Contact Hotlines</h4>
            
            <div className="space-y-2 text-xs text-zinc-300 font-medium">
              <div className="font-bold text-white uppercase tracking-wider">Direct Phone Numbers:</div>
              {PHONE_CONTACTS.map((phone) => (
                <a
                  key={phone.number}
                  href={`tel:${phone.number}`}
                  className="flex items-center gap-2 hover:text-[#FF6B00] transition-colors font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                  <span>{phone.formatted}</span>
                </a>
              ))}
            </div>

            <div className="space-y-1.5 pt-2 text-xs text-zinc-300 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                <span>sales@dicksonsfrozenmeat.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                <span>Accra &amp; Tema Industrial Cold Hub, Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                <span>Mon - Sat: 6:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} Dickson&apos;s Frozen Meat Supply. All rights reserved. Direct B2B Wholesale Importer.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded bg-[#1A1A1A] border border-[#333] hover:bg-[#FF6B00] hover:text-black text-zinc-300 transition-colors flex items-center gap-1.5 cursor-pointer uppercase font-extrabold tracking-wider text-[11px]"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

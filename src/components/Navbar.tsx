import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, MessageSquare, ShieldCheck, Snowflake } from 'lucide-react';
import { Logo } from './Logo';
import { PHONE_CONTACTS } from '../data/products';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Order Estimator', href: '#calculator' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About Us', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const primaryPhone = PHONE_CONTACTS[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-[#0A0A0A] text-zinc-300 text-xs py-1.5 px-4 border-b border-[#333]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-zinc-300">
            <span className="inline-flex items-center gap-1.5 text-[#FF6B00] font-semibold">
              <Snowflake className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
              <span className="hidden sm:inline">-18°C Unbroken Cold Chain</span>
            </span>
            <span className="hidden md:inline-block text-zinc-700">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Direct Factory Importer (Poultry, Beef, Fish)
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-xs">
            <span className="text-zinc-400 hidden lg:inline">Wholesale Hotlines:</span>
            {PHONE_CONTACTS.map((phone, idx) => (
              <a
                key={phone.number}
                href={`tel:${phone.number}`}
                className="hover:text-[#FF6B00] transition-colors flex items-center gap-1 font-mono text-zinc-200"
                title={phone.label}
              >
                <Phone className="w-3 h-3 text-[#FF6B00]" />
                <span>{phone.formatted}</span>
                {idx < PHONE_CONTACTS.length - 1 && <span className="text-zinc-700 hidden sm:inline ml-1">/</span>}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121212]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#333]'
            : 'bg-[#121212]/80 backdrop-blur-sm py-4 border-b border-[#333]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#FF6B00] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF6B00] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${primaryPhone.number.replace('+', '')}?text=${encodeURIComponent(
                'Hello Dickson\'s Frozen Meat Supply, I am interested in placing a wholesale order.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded bg-[#1A1A1A] text-emerald-400 border border-emerald-500/30 hover:bg-emerald-950/40 transition-colors uppercase tracking-wider"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#FF6B00] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 text-xs font-black rounded bg-[#FF6B00] text-black uppercase tracking-wider"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white rounded bg-[#1A1A1A] border border-[#333] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0A] border-b border-[#333] px-4 pt-3 pb-6 mt-2 space-y-3 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2 text-sm font-bold uppercase tracking-wider text-zinc-200 hover:bg-[#1A1A1A] hover:text-[#FF6B00] rounded transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#333] space-y-2">
              <div className="text-xs text-zinc-400 font-semibold mb-1">Direct Sales Contact:</div>
              {PHONE_CONTACTS.map((phone) => (
                <a
                  key={phone.number}
                  href={`tel:${phone.number}`}
                  className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] py-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>{phone.formatted} ({phone.label})</span>
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${primaryPhone.number.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1A1A1A] text-emerald-400 font-bold rounded text-xs border border-emerald-500/30 uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#FF6B00] hover:bg-white text-black font-extrabold rounded text-xs uppercase tracking-wider shadow-lg"
                >
                  <span>Request Wholesale Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

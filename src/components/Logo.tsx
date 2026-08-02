import React from 'react';
import logoImg from '../assets/images/dicksons_frozen_meat_logo_1785644376499.jpg';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const dimensions = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  }[size];

  const textSize = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl',
  }[size];

  return (
    <div className="inline-flex items-center gap-3 group">
      <div className={`relative ${dimensions} rounded-lg overflow-hidden shadow-lg border-2 border-[#FF6B00] bg-[#1A1A1A] p-0.5 group-hover:scale-105 transition-all duration-300`}>
        <img
          src={logoImg}
          alt="Dickson's Frozen Meat Supply Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover rounded-md"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="hidden flex items-center justify-center w-full h-full bg-[#1A1A1A] text-[#FF6B00] font-bold">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" strokeLinecap="round" />
            <circle cx="12" cy="12" r="4" fill="#FF6B00" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-black tracking-tight text-[#F5F5F0] uppercase ${textSize} leading-none font-display`}>
            DICKSON&apos;S
          </span>
          <span className="text-[10px] md:text-[11px] tracking-widest uppercase text-[#FF6B00] font-bold flex items-center gap-1 mt-0.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse"></span>
            FROZEN MEAT SUPPLY
          </span>
        </div>
      )}
    </div>
  );
};

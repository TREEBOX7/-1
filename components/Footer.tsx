
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest text-white/50 py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-5xl font-bold text-white mb-4 tracking-tighter font-sans">
              TRee<span className="text-cardboard">BOX</span>
            </h3>
            <p className="text-xs tracking-wider leading-relaxed">
              © 2024 TReeBOX Design Studio. <br />
              All rights reserved. Rooted in Seoul, Unboxed for the World.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="hover:text-cardboard transition-colors text-xs font-bold tracking-[0.2em]">INSTAGRAM</a>
            <a href="#" className="hover:text-cardboard transition-colors text-xs font-bold tracking-[0.2em]">LINKEDIN</a>
            <a href="#" className="hover:text-cardboard transition-colors text-xs font-bold tracking-[0.2em]">BEHANCE</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] uppercase tracking-widest mb-2 font-bold">Stay with us</p>
            <p className="text-sm font-light">당신의 비즈니스를 단단하게 키워냅니다.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

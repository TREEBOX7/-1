
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onAdminClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'IDENTITY', href: '#identity' },
    { name: 'SHOWCASE', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'glass-nav py-3' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="text-5xl font-bold tracking-tighter text-white font-sans group"
        >
          TRee<span className="text-cardboard group-hover:text-white transition-colors">BOX</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-[11px] font-bold tracking-[0.2em] text-white/70 hover:text-cardboard transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-cardboard after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={onAdminClick}
            className="text-[9px] font-bold text-white/30 hover:text-cardboard transition-colors border border-white/10 px-3 py-1 rounded-sm hover:border-cardboard"
          >
            PORTAL
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden fixed inset-0 top-[64px] bg-forest/98 backdrop-blur-xl transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-2xl font-bold tracking-[0.3em] text-white hover:text-cardboard transition-all"
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onAdminClick(); }}
            className="text-xs font-bold text-cardboard border border-cardboard px-8 py-3 rounded-sm"
          >
            ADMIN PORTAL
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

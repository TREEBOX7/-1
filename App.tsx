
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import { PortfolioItem } from './types';
import { INITIAL_PORTFOLIO } from './constants';

const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('treebox_portfolio');
    if (saved) {
      setPortfolios(JSON.parse(saved));
    } else {
      setPortfolios(INITIAL_PORTFOLIO);
      localStorage.setItem('treebox_portfolio', JSON.stringify(INITIAL_PORTFOLIO));
    }
  }, []);

  const updatePortfolios = (newPortfolios: PortfolioItem[]) => {
    setPortfolios(newPortfolios);
    localStorage.setItem('treebox_portfolio', JSON.stringify(newPortfolios));
  };

  return (
    <div className="relative min-h-screen bg-offwhite">
      {/* Main Site Content */}
      <Header onAdminClick={() => setIsAdminMode(true)} />
      <main>
        <Hero />
        <Identity />
        <Showcase portfolios={portfolios} />
        <Contact />
      </main>
      <Footer />

      {/* Admin Portal Overlay */}
      {isAdminMode && (
        <div className="fixed inset-0 z-[1000] animate-in fade-in duration-300">
          <Admin 
            onExit={() => setIsAdminMode(false)} 
            portfolios={portfolios} 
            onUpdate={updatePortfolios} 
          />
        </div>
      )}
    </div>
  );
};

export default App;

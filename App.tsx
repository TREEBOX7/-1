
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Identity from './components/Identity.tsx';
import Showcase from './components/Showcase.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Admin from './components/Admin.tsx';
import { PortfolioItem } from './types.ts';
import { INITIAL_PORTFOLIO } from './constants.tsx';

const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('treebox_portfolio');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPortfolios(parsed);
        }
      }
    } catch (error) {
      console.error('Failed to load portfolios from storage:', error);
    }
  }, []);

  const updatePortfolios = (newPortfolios: PortfolioItem[]) => {
    setPortfolios(newPortfolios);
    try {
      localStorage.setItem('treebox_portfolio', JSON.stringify(newPortfolios));
    } catch (error) {
      console.error('Storage limit exceeded.', error);
      alert('데이터가 브라우저 저장 한계를 초과했습니다. 더 작은 이미지를 사용해 주세요.');
    }
  };

  return (
    <div className="relative min-h-screen bg-offwhite">
      <Header onAdminClick={() => setIsAdminMode(true)} />
      <main>
        <Hero />
        <Identity />
        <Showcase portfolios={portfolios} />
        <Contact />
      </main>
      <Footer />

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

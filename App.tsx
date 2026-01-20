
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Identity from './components/Identity.tsx';
import Showcase from './components/Showcase.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Admin from './components/Admin.tsx';
import { PortfolioItem } from './types.ts';
import { INITIAL_PORTFOLIO, DATA_VERSION } from './constants.tsx';

const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);

  useEffect(() => {
    try {
      const savedVersion = localStorage.getItem('treebox_data_version');
      const savedData = localStorage.getItem('treebox_portfolio');

      // 버전이 다르거나 저장된 데이터가 없으면 코드의 최신 데이터로 강제 업데이트
      if (savedVersion !== DATA_VERSION || !savedData) {
        console.log(`Syncing with Code Data (v${DATA_VERSION})`);
        setPortfolios(INITIAL_PORTFOLIO);
        localStorage.setItem('treebox_portfolio', JSON.stringify(INITIAL_PORTFOLIO));
        localStorage.setItem('treebox_data_version', DATA_VERSION);
      } else {
        const parsed = JSON.parse(savedData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPortfolios(parsed);
        }
      }
    } catch (error) {
      console.error('Failed to load portfolios from storage:', error);
      setPortfolios(INITIAL_PORTFOLIO);
    }
  }, []);

  const updatePortfolios = (newPortfolios: PortfolioItem[]) => {
    setPortfolios(newPortfolios);
    try {
      localStorage.setItem('treebox_portfolio', JSON.stringify(newPortfolios));
      // 사용자가 수동으로 수정한 경우에도 현재 코드 버전을 유지하여 자동 덮어쓰기 방지
      localStorage.setItem('treebox_data_version', DATA_VERSION);
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

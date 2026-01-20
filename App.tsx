
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

      // 1. 저장된 데이터가 있고 버전이 같다면 로컬 데이터 사용
      if (savedData && savedVersion === DATA_VERSION) {
        const parsed = JSON.parse(savedData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPortfolios(parsed);
          console.log("Loaded existing data from local storage.");
          return;
        }
      }

      // 2. 저장된 데이터가 없거나 버전이 강제로 업데이트된 경우에만 초기 데이터 로드
      console.log(`Initializing/Updating Data to v${DATA_VERSION}`);
      setPortfolios(INITIAL_PORTFOLIO);
      localStorage.setItem('treebox_portfolio', JSON.stringify(INITIAL_PORTFOLIO));
      localStorage.setItem('treebox_data_version', DATA_VERSION);
      
    } catch (error) {
      console.error('Failed to load portfolios from storage:', error);
      setPortfolios(INITIAL_PORTFOLIO);
    }
  }, []);

  const updatePortfolios = (newPortfolios: PortfolioItem[]) => {
    setPortfolios(newPortfolios);
    try {
      localStorage.setItem('treebox_portfolio', JSON.stringify(newPortfolios));
      localStorage.setItem('treebox_data_version', DATA_VERSION);
    } catch (error) {
      console.error('Storage limit exceeded.', error);
      alert('이미지 용량이 너무 커서 브라우저에 저장할 수 없습니다. EXPORT 기능을 이용해 백업 파일로 보관하세요.');
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

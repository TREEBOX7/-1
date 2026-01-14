
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
  // 초기 상태를 빈 배열이 아닌 INITIAL_PORTFOLIO로 설정하여 로딩 시 빈 화면 방지
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
      // 로드 실패 시 초기 데이터 유지
    }
  }, []);

  const updatePortfolios = (newPortfolios: PortfolioItem[]) => {
    setPortfolios(newPortfolios);
    try {
      localStorage.setItem('treebox_portfolio', JSON.stringify(newPortfolios));
    } catch (error) {
      console.error('Storage limit exceeded. Data might not be saved permanently.', error);
      alert('이미지 용량이 너무 커서 브라우저 저장이 불가능합니다. 저용량 이미지를 사용해 주세요.');
    }
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

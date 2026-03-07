import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import { PortfolioItem } from './types';
import { INITIAL_PORTFOLIO, DATA_VERSION } from './constants';

function App() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);

  useEffect(() => {
    // 로컬 스토리지에서 저장된 데이터를 확인하고 버전이 맞으면 불러옵니다.
    const savedData = localStorage.getItem('treebox_portfolio_data');
    const savedVersion = localStorage.getItem('treebox_portfolio_version');

    if (savedData && savedVersion === DATA_VERSION) {
      setPortfolio(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500/30">
      <Header />
      <main>
        <Hero />
        <Identity />
        <Showcase portfolio={portfolio} />
        <Contact />
      </main>
      <Footer />
      {/* 관리자 도구는 개발 및 데이터 관리용으로 유지합니다. */}
      <Admin portfolio={portfolio} setPortfolio={setPortfolio} />
    </div>
  );
}

export default App;

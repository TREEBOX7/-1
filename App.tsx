import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Portfolio from './components/Portfolio'; // 이름을 Portfolio로 변경했습니다.
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import { PortfolioItem } from './types';
import { INITIAL_PORTFOLIO } from './constants';

function App() {
  const [portfolios] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);

  const handleAdminClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      <Header onAdminClick={handleAdminClick} />
      <main>
        <Hero />
        {/* 아까 여백을 줄인 Identity 섹션 */}
        <Identity />
        
        {/* Portfolio 섹션 제목 복구 */}
        <div className="bg-zinc-950 py-24 border-t border-zinc-900">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tighter uppercase">Portfolio</h2>
              <div className="h-[1px] bg-zinc-800 flex-1 mt-2"></div>
            </div>
            <Portfolio portfolios={portfolios} />
          </div>
        </div>
        
        <Contact />
      </main>
      <Footer />
      <Admin portfolios={portfolios} setPortfolios={() => {}} />
    </div>
  );
}

export default App;

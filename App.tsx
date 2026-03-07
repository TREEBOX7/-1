import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Portfolio from './components/Portfolio';
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
    // 배경색을 423411.JPG의 다크 포레스트 그린으로 설정
    <div className="min-h-screen bg-[#13221e] text-white font-sans antialiased">
      <Header onAdminClick={handleAdminClick} />
      <main>
        <Hero />
        {/* 이동을 위한 id="identity" 설정 */}
        <div id="identity">
          <Identity />
        </div>
        
        {/* 이동을 위한 id="portfolio" 설정 */}
        <section id="portfolio" className="py-32 scroll-mt-20 border-t border-white/5">
          <div className="container mx-auto px-8">
            <div className="mb-20">
              <span className="text-green-600/50 font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">Our Works</span>
              <h2 className="text-5xl font-bold tracking-tighter uppercase">Portfolio</h2>
            </div>
            <Portfolio portfolios={portfolios} />
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
      <Admin portfolios={portfolios} setPortfolios={() => {}} />
    </div>
  );
}

export default App;

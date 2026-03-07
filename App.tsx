import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Portfolio from './components/Portfolio'; // 대소문자 주의! P가 대문자여야 합니다.
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
      <main className="bg-black">
        <Hero />
        <Identity />
        
        {/* Portfolio 섹션: 배경을 검은색으로 통일하여 Identity와 부드럽게 연결합니다. */}
        <section id="portfolio" className="py-32 bg-black border-t border-white/5 scroll-mt-20">
          <div className="container mx-auto px-8">
            <div className="mb-20">
              <span className="text-green-900 font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">Our Works</span>
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

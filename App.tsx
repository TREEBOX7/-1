import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Showcase from './components/Portfolio';
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
    <div className="min-h-screen bg-black text-white selection:bg-green-500/30">
      <Header onAdminClick={handleAdminClick} />
      <main>
        <Hero />
        <Identity />
        <Showcase portfolios={portfolios} />
        <Contact />
      </main>
      <Footer />
      <Admin portfolios={portfolios} setPortfolios={() => {}} />
    </div>
  );
}

export default App;

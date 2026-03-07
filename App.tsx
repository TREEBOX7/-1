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
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);

  useEffect(() => {
    const savedData = localStorage.getItem('treebox_portfolio_data');
    const savedVersion = localStorage.getItem('treebox_portfolio_version');
    if (savedData && savedVersion === DATA_VERSION) {
      setPortfolios(JSON.parse(savedData));
    }
  }, []);

  const handleAdminClick = () => {
    const adminSection = document.getElementById('admin-panel');
    if (adminSection) adminSection.scrollIntoView({ behavior: 'smooth' });
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
      <div id="admin-panel">
        <Admin portfolios={portfolios} setPortfolios={setPortfolios} />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  portfolios: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolios }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {portfolios.map((item) => (
        <div key={item.id} className="group relative">
          <div className="overflow-hidden bg-zinc-900 aspect-[16/9] mb-6 rounded-sm">
            <img 
              src={item.images[0]} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-green-500"></span>
              <span className="text-xs text-green-500 uppercase tracking-widest">{item.category}</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

import React from 'react';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  portfolios: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolios }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {portfolios.map((item) => (
        <div key={item.id} className="group cursor-pointer">
          <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-zinc-900">
            <img 
              src={item.images[0]} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://placehold.co/800x600/1a1a1a/ffffff?text=Image+Uploading...";
              }}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs font-bold tracking-[0.2em] border border-white/20 px-4 py-2">VIEW PROJECT</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-green-700 font-bold tracking-widest uppercase">{item.category}</p>
            <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
            <p className="text-zinc-500 text-xs mt-2 leading-relaxed line-clamp-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

import React, { useState } from 'react';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  portfolios: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolios }) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {portfolios.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-zinc-900/50">
              <img 
                src={item.images[0]} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* 마우스 호버 시 나타나는 View Project 버튼 */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button 
                  onClick={() => setZoomedImage(item.images[0])}
                  className="text-white text-xs font-bold tracking-[0.2em] border border-white/40 px-6 py-3 hover:bg-white hover:text-black transition-all"
                >
                  VIEW PROJECT
                </button>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-green-600 font-bold tracking-widest uppercase">{item.category}</p>
              <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* 이미지 확대 모달 (클릭 시 닫힘) */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        >
          <img 
            src={zoomedImage} 
            className="max-w-full max-h-full object-contain animate-in zoom-in duration-300"
            alt="Zoomed View"
          />
          <button className="absolute top-10 right-10 text-white text-4xl">&times;</button>
        </div>
      )}
    </>
  );
};

export default Portfolio;

import React, { useState } from 'react';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  portfolios: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolios }) => {
  // 이미지가 아니라 프로젝트 객체 전체를 저장하도록 변경합니다.
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

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
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button 
                  onClick={() => setSelectedProject(item)} // 클릭 시 프로젝트 전체 데이터 전달
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

      {/* 프로젝트 상세 모달 (설명글 포함) */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#13221e] max-w-6xl w-full flex flex-col md:flex-row gap-8 p-6 md:p-10 border border-white/10 rounded-sm relative"
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫힘 방지
          >
            {/* 왼쪽: 이미지 영역 */}
            <div className="md:w-2/3">
              <img 
                src={selectedProject.images[0]} 
                className="w-full h-auto object-contain rounded-sm shadow-2xl"
                alt={selectedProject.title}
              />
            </div>

            {/* 오른쪽: 텍스트 정보 영역 */}
            <div className="md:w-1/3 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-green-600 font-bold tracking-[0.2em] text-[10px] uppercase block mb-2">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter leading-tight mb-4">
                  {selectedProject.title}
                </h2>
                <div className="w-12 h-[1px] bg-green-900/50"></div>
              </div>
              
              <div className="space-y-4">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
                {/* 추가 정보 (필요시) */}
                <div className="pt-6 border-t border-white/5 space-y-2">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Role: {selectedProject.role}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Status: {selectedProject.result}</p>
                </div>
              </div>
            </div>

            {/* 닫기 버튼 */}
            <button 
              className="absolute top-4 right-6 text-white/40 hover:text-white text-3xl transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;

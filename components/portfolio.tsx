
import React, { useState } from 'react';
import { PortfolioItem, Category } from '../types';

interface ShowcaseProps {
  portfolios: PortfolioItem[];
}

const Showcase: React.FC<ShowcaseProps> = ({ portfolios }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories: Category[] = ['All', 'Exterior', 'Interior', 'Landscape', 'VR & Movie'];

  const filteredProjects = activeCategory === 'All' 
    ? portfolios 
    : portfolios.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-40 bg-forest text-white scroll-mt-20">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-xl">
            <span className="text-cardboard font-bold tracking-[0.4em] text-[10px] uppercase block mb-4">Showcase</span>
            <h2 className="text-5xl font-sans mb-8 font-bold leading-tight">상자 속에서 꺼낸 <br /> 혁신적인 시각화물들</h2>
            <p className="text-white/40 font-light leading-relaxed">각 프로젝트는 하나의 도면에서 시작되었습니다. <br /> 우리는 그 선들이 실제적인 공간으로 호흡할 수 있도록 생명력을 불어넣었습니다.</p>
          </div>
          <div className="flex flex-wrap gap-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-bold tracking-[0.2em] transition-all pb-2 border-b-2 ${activeCategory === cat ? 'border-cardboard text-cardboard' : 'border-transparent text-white/30 hover:text-white'}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/5">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-square border-r border-b border-white/5 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-forest flex flex-col items-center justify-center p-12 transition-all duration-700 ease-in-out group-hover:translate-y-[-100%] z-20">
                <div className="w-20 h-20 border border-cardboard/20 mb-8 flex items-center justify-center relative">
                   <div className="w-10 h-10 bg-cardboard/10"></div>
                   <div className="absolute top-0 left-0 w-2 h-[1px] bg-cardboard"></div>
                   <div className="absolute top-0 left-0 h-2 w-[1px] bg-cardboard"></div>
                   <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-cardboard"></div>
                   <div className="absolute bottom-0 right-0 h-2 w-[1px] bg-cardboard"></div>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-center font-sans px-4">{project.title}</h3>
                <span className="mt-6 text-[9px] text-white/30 font-bold uppercase tracking-[0.3em] border border-white/10 px-3 py-1">{project.category}</span>
              </div>

              <div className="absolute inset-0 translate-y-full transition-all duration-700 ease-in-out group-hover:translate-y-0 z-10">
                <img 
                  src={project.images[0] || 'https://via.placeholder.com/800x800?text=No+Image'} 
                  alt={project.title} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/40 to-transparent p-12 flex flex-col justify-end">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-cardboard text-[10px] font-bold tracking-[0.3em] uppercase">{project.category}</span>
                    <span className="text-[10px] text-white/40 font-bold">{project.images.length} IMAGES</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 font-sans leading-tight">{project.title}</h3>
                  <div className="w-0 h-[1px] bg-cardboard group-hover:w-full transition-all duration-1000"></div>
                  <button className="mt-8 text-left text-[11px] font-bold tracking-widest text-white/60 hover:text-white transition-colors">VIEW PROJECT ↗</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-forest/98 backdrop-blur-2xl transition-opacity duration-500" onClick={() => setSelectedProject(null)}></div>
          <div className="relative w-full max-w-7xl bg-white text-forest h-full max-h-[95vh] overflow-y-auto rounded-sm flex flex-col lg:flex-row shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 z-[110] w-12 h-12 flex items-center justify-center hover:bg-forest hover:text-white transition-all duration-300 border border-forest/10 rounded-full"
            >
              <span className="text-xl">✕</span>
            </button>
            <div className="w-full lg:w-1/2 bg-offwhite sticky top-0 h-[400px] lg:h-screen overflow-y-auto custom-scrollbar">
              <div className="flex flex-col gap-4 p-4">
                {selectedProject.images.map((img, i) => (
                  <img key={i} src={img} alt={`${selectedProject.title} ${i+1}`} className="w-full object-cover rounded-sm shadow-lg" />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-10 md:p-20 flex flex-col overflow-y-auto">
              <div className="mb-12">
                <span className="inline-block px-3 py-1 bg-cardboard/10 text-cardboard font-bold text-[10px] tracking-widest uppercase mb-6">{selectedProject.category}</span>
                <h2 className="text-5xl font-sans font-bold mb-10 leading-tight">{selectedProject.title}</h2>
                <div className="w-20 h-[3px] bg-cardboard"></div>
              </div>
              <div className="space-y-16 flex-1">
                <section>
                  <h4 className="text-[10px] font-bold text-forest/30 uppercase tracking-[0.3em] mb-4">Project Story</h4>
                  <p className="text-xl leading-relaxed font-light text-charcoal/80">{selectedProject.description}</p>
                </section>
                <div className="grid grid-cols-2 gap-12 pt-8 border-t border-forest/5">
                  <section>
                    <h4 className="text-[10px] font-bold text-forest/30 uppercase tracking-[0.3em] mb-4">Core Role</h4>
                    <p className="font-bold text-lg">{selectedProject.role}</p>
                  </section>
                  <section>
                    <h4 className="text-[10px] font-bold text-forest/30 uppercase tracking-[0.3em] mb-4">Contribution</h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-sans font-bold text-cardboard">{selectedProject.contribution}</span>
                      <span className="text-lg font-bold text-forest/40">%</span>
                    </div>
                  </section>
                </div>
                <section className="bg-offwhite p-10 border-l-4 border-cardboard">
                  <h4 className="text-[10px] font-bold text-forest/30 uppercase tracking-[0.3em] mb-4">Result & Impact</h4>
                  <p className="font-sans italic text-2xl text-forest font-bold leading-snug">"{selectedProject.result}"</p>
                </section>
              </div>
              <div className="mt-20 pt-10 border-t border-forest/5 flex justify-between items-center">
                <span className="text-[10px] font-bold text-forest/20 tracking-widest uppercase">© 2024 TReeBOX ARCH-VIZ</span>
                <a href="#contact" onClick={() => setSelectedProject(null)} className="text-[11px] font-bold tracking-widest border-b-2 border-forest hover:text-cardboard hover:border-cardboard transition-all pb-1 uppercase">Request a visualization</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Showcase;

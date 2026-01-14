
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-forest scroll-mt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
         <svg className="w-[80%] h-[80%] opacity-20" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
           <path className="line-art" d="M500,1000 C500,800 400,600 300,500 M500,1000 C500,750 650,550 800,450 M500,1000 C500,900 500,800 500,700 M500,850 C400,750 350,650 380,550 M500,800 C600,700 650,600 620,500" fill="none" stroke="#C5A07D" strokeWidth="1" />
         </svg>
      </div>

      <div className="container mx-auto px-8 relative z-10 text-center">
        <div className="mb-10 inline-block">
          <div className="w-24 h-24 border border-cardboard/40 flex items-center justify-center relative">
            <div className="w-16 h-16 bg-cardboard/10 animate-pulse"></div>
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-cardboard"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cardboard"></div>
          </div>
        </div>
        
        <h2 className="text-cardboard text-xs font-bold tracking-[0.5em] mb-6 uppercase">Your Ideas, Rooted & Unboxed.</h2>
        <h1 className="text-white text-5xl md:text-8xl font-sans font-bold mb-10 leading-[1.1] tracking-tight">
          상상을 현실이라는 <br /> 
          <span className="italic text-cardboard font-light">상자에 담습니다.</span>
        </h1>
        
        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          TReeBOX는 정교한 시각화를 통해 건축가의 아이디어를 현실로 구현하는 <br className="hidden md:block"/>
          프리미엄 ARCH-VIZ 솔루션 파트너입니다.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="#portfolio" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-12 py-5 bg-cardboard text-forest font-bold rounded-sm overflow-hidden transition-all hover:pr-16"
          >
            <span className="relative z-10">포트폴리오 보기</span>
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all">→</span>
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-12 py-5 border border-white/20 text-white font-bold rounded-sm hover:bg-white/5 transition-all"
          >
            프로젝트 문의하기
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-16 bg-gradient-to-b from-cardboard to-transparent"></div>
        <span className="text-[9px] tracking-[0.4em] text-white/30 mt-4 font-bold uppercase">DISCOVER</span>
      </div>
    </section>
  );
};

export default Hero;

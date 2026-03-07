import React from 'react';
import { PROCESS_STEPS, PROMISES } from '../constants'; // 확장자 제거 확인

const Identity: React.FC = () => {
  return (
    // py-40(10rem) -> py-20(5rem)으로 상하 패딩을 절반으로 줄였습니다.
    <section id="identity" className="py-20 bg-white scroll-mt-20 border-y border-zinc-100">
      <div className="container mx-auto px-8">
        
        {/* 헤더 섹션 여백 축소: mb-32 -> mb-16 */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-zinc-400 font-bold tracking-[0.3em] text-[10px] uppercase block mb-3">Identity & Trust</span>
          <h2 className="text-5xl font-sans text-black mb-6 font-bold leading-tight">AI가 선사하는 <br className="md:hidden"/> 시각화의 혁명</h2>
          <p className="text-zinc-500 text-sm max-w-2xl mx-auto leading-relaxed">
            TReeBOX는 단순한 렌더링을 넘어, AI를 활용해 전통적인 작업 방식의 한계를 돌파합니다. <br/>
            더 정교한 디테일, 더 빠른 납기, 그리고 비교할 수 없는 감동을 선사합니다.
          </p>
          <div className="w-16 h-[2px] bg-green-500 mx-auto mt-8"></div>
        </div>

        {/* Process Flow 여백 축소: mb-40 -> mb-20, mb-20 -> mb-12 */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-sans text-black font-bold italic">Our Process: 기술과 감성의 조화</h3>
            <div className="hidden md:block h-[1px] bg-zinc-100 flex-1 ml-10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step: any, idx: number) => (
              <div key={step.id} className="relative group">
                {/* 아이콘 여백 축소: mb-10 -> mb-6 */}
                <div className="mb-6 relative">
                   <div className="w-20 h-20 rounded-full border border-zinc-100 bg-white flex items-center justify-center text-4xl shadow-2xl shadow-zinc-100 group-hover:bg-green-500 group-hover:text-white transition-all duration-700 transform group-hover:-translate-y-1">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500/10 rounded-full flex items-center justify-center text-[10px] font-bold text-green-600">0{idx+1}</div>
                </div>
                <h4 className="text-lg font-bold text-black mb-3">{step.title}</h4>
                <p className="text-zinc-500 leading-relaxed text-sm">{step.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-10 left-[100%] w-full h-[1px] border-t border-dashed border-zinc-200 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Promise Cards 패딩 축소: p-12 -> p-10 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROMISES.map((promise: any) => (
            <div key={promise.title} className="bg-white p-10 border border-zinc-100 hover:border-green-500 transition-all duration-500 group shadow-sm rounded-lg">
              {/* 아이콘 여백 축소: mb-8 -> mb-6 */}
              <div className="text-green-500 mb-6 transform group-hover:scale-105 transition-transform">
                {promise.title === 'Time' && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                {promise.title === 'Transparence' && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>}
                {promise.title === 'Care' && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
              </div>
              <h4 className="text-xl font-bold text-black mb-4">{promise.label}</h4>
              <p className="text-zinc-500 leading-relaxed text-sm">{promise.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Identity;

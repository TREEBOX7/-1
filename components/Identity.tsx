import React from 'react';
import { PROCESS_STEPS, PROMISES } from '../constants'; // .tsx 확장자 제거

const Identity: React.FC = () => {
  return (
    <section id="identity" className="py-20 bg-white scroll-mt-20 border-y border-zinc-100">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-zinc-400 font-bold tracking-[0.3em] text-[10px] uppercase block mb-3">Identity & Trust</span>
          <h2 className="text-5xl font-sans text-black mb-6 font-bold leading-tight">AI가 선사하는 <br className="md:hidden"/> 시각화의 혁명</h2>
          <p className="text-zinc-500 text-sm max-w-2xl mx-auto leading-relaxed">
            TReeBOX는 단순한 렌더링을 넘어, AI를 활용해 전통적인 작업 방식의 한계를 돌파합니다. <br/>
            더 정교한 디테일, 더 빠른 납기, 그리고 비교할 수 없는 감동을 선사합니다.
          </p>
          <div className="w-16 h-[2px] bg-green-500 mx-auto mt-8"></div>
        </div>

        {/* 132d.JPG에서 봤던 그 디자인 레이아웃입니다. */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-sans text-black font-bold italic">Our Process</h3>
            <div className="hidden md:block h-[1px] bg-zinc-100 flex-1 ml-10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step: any, idx: number) => (
              <div key={step.id} className="relative group">
                <div className="mb-6 relative">
                   <div className="w-20 h-20 rounded-full border border-zinc-100 bg-white flex items-center justify-center text-4xl shadow-2xl shadow-zinc-100 group-hover:bg-green-500 group-hover:text-white transition-all">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-black mb-2">{step.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROMISES.map((promise: any) => (
            <div key={promise.title} className="bg-white p-10 border border-zinc-100 hover:border-green-500 transition-all rounded-lg">
              <h4 className="text-xl font-bold text-black mb-4">{promise.label}</h4>
              <p className="text-zinc-500 text-sm">{promise.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Identity;

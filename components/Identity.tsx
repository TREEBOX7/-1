import React from 'react';
import { PROCESS_STEPS, PROMISES } from '../constants'; // .tsx 확장자 제거

const Identity: React.FC = () => {
  return (
    <section id="identity" className="py-24 bg-black scroll-mt-20">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-zinc-500 font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">Identity & Trust</span>
          <h2 className="text-4xl font-sans text-white mb-8 font-bold leading-tight">AI가 선사하는 <br className="md:hidden"/> 시각화의 혁명</h2>
          <div className="w-16 h-[1px] bg-green-900 mx-auto mt-10"></div>
        </div>

        {/* Process Flow - 132d.JPG 스타일 복구 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-12 text-white italic">Process</h3>
            <div className="space-y-12">
              {PROCESS_STEPS.map((step: any) => (
                <div key={step.id} className="flex items-start gap-6 group">
                  <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{step.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-12 text-white italic">Our Promise</h3>
            <div className="space-y-12">
              {PROMISES.map((promise: any) => (
                <div key={promise.title} className="flex items-start gap-6 group">
                  <div className="text-3xl text-green-800 group-hover:text-green-500 transition-all">✨</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{promise.label}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{promise.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;

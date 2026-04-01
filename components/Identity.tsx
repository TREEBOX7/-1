import React from 'react';
import { PROCESS_STEPS, PROMISES } from '../constants'; // .tsx 확장자 제거 상태 유지 

const Identity: React.FC = () => {
  return (
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-green-600/50 font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">Identity & Trust</span>
          <h2 className="text-4xl font-sans text-white mb-8 font-bold leading-tight italic">AI가 선사하는 <br className="md:hidden"/> 시각화의 혁명</h2>
          <div className="w-16 h-[1px] bg-green-600/30 mx-auto mt-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto">
          {/* Process 섹션 */}
          <div>
            <h3 className="text-2xl font-bold mb-12 text-white italic">Process</h3>
            <div className="space-y-12">
              {PROCESS_STEPS.map((step: any) => (
                <div key={step.id} className="flex items-center gap-8 group"> {/* gap을 늘려 아이콘 공간 확보 */}
                  {/* 기존 text-3xl을 text-8xl로 변경하여 약 3배 확대 */}
                  <div className="text-8xl grayscale group-hover:grayscale-0 transition-all duration-500">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Promise 섹션 */}
          <div>
            <h3 className="text-2xl font-bold mb-12 text-white italic">Our Promise</h3>
            <div className="space-y-12">
              {PROMISES.map((promise: any) => (
                <div key={promise.title} className="flex items-center gap-6 group">
                  {/* 기존 text-2xl을 text-7xl로 변경하여 대폭 확대 */}
                  <div className="text-7xl text-green-700 group-hover:text-green-500 transition-all duration-500">
                    ✨
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{promise.label}</h4>
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

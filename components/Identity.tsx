import React from 'react';
import { PROCESS_STEPS, PROMISES } from '../constants.tsx';

const Identity: React.FC = () => {
  return (
    // 배경을 transparent로 설정하여 App의 다크 포레스트 색상이 보이게 함
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-green-600/50 font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">Identity & Trust</span>
          <h2 className="text-4xl font-sans text-white mb-8 font-bold leading-tight italic">AI가 선사하는 <br className="md:hidden"/> 시각화의 혁명</h2>
          <div className="w-16 h-[1px] bg-green-600/30 mx-auto mt-10"></div>
        </div>

        {/* 132d.JPG 레이아웃 적용 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-12 text-white italic">Process</h3>
            <div className="space-y-12">
              {PROCESS_STEPS.map((step: any) => (
                <div key={step.id} className="flex items-start gap-6 group">
                  <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{step.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{step.title}</h4>
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
                  <div className="text-2xl text-green-700 group-hover:text-green-500 transition-all">✨</div>
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

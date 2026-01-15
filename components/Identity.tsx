
import React from 'react';
import { PROCESS_STEPS, PROMISES } from '../constants.tsx';

const Identity: React.FC = () => {
  return (
    <section id="identity" className="py-40 bg-offwhite scroll-mt-20">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <span className="text-cardboard font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">Identity & Trust</span>
          <h2 className="text-5xl font-sans text-forest mb-8 font-bold leading-tight">왜 TReeBOX와 <br className="md:hidden"/> 함께해야 할까요?</h2>
          <div className="w-16 h-[2px] bg-cardboard mx-auto"></div>
        </div>

        {/* Process Flow */}
        <div className="mb-40">
          <div className="flex items-center justify-between mb-20">
            <h3 className="text-2xl font-sans text-forest font-bold italic">Our Process: 성장의 여정</h3>
            <div className="hidden md:block h-[1px] bg-forest/10 flex-1 ml-10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.id} className="relative group">
                <div className="mb-10 relative">
                   <div className="w-24 h-24 rounded-full border border-forest/5 bg-white flex items-center justify-center text-4xl shadow-2xl shadow-forest/5 group-hover:bg-forest group-hover:text-white transition-all duration-700 transform group-hover:-translate-y-2">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cardboard/10 rounded-full flex items-center justify-center text-[10px] font-bold text-cardboard">0{idx+1}</div>
                </div>
                <h4 className="text-xl font-bold text-forest mb-4">{step.title}</h4>
                <p className="text-charcoal/60 leading-relaxed text-sm">{step.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 left-[100%] w-full h-[1px] bg-dashed border-t border-forest/10 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Promise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-40">
          {PROMISES.map((promise) => (
            <div key={promise.title} className="bg-white p-12 border border-forest/5 box-shadow-premium hover:border-cardboard transition-all duration-500 group">
              <div className="text-cardboard mb-8 transform group-hover:scale-110 transition-transform">
                {promise.title === 'Time' && <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                {promise.title === 'Transparence' && <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>}
                {promise.title === 'Care' && <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A3.323 3.323 0 0010.603 3.303l-.202.03a3.323 3.323 0 00-2.283 2.327l-.02.09a3.323 3.323 0 001.42 3.633l.056.035c.12.08.18.22.18.362v1.752c0 .285.12.56.326.74l1.173 1.025c.343.3.435.793.22 1.189l-.513.943c-.22.404-.707.576-1.127.382l-1.076-.497a1 1 0 00-.814 0l-1.076.497c-.42.194-.907.022-1.127-.382l-.513-.943a1.107 1.107 0 01.22-1.189l1.173-1.025a.991.991 0 00.326-.74V9.851c0-.142.06-.282.18-.362l.056-.035a3.323 3.323 0 001.42-3.633l-.02-.09A3.323 3.323 0 003.55 3.51a3.323 3.323 0 00-1.895 2.182" /></svg>}
              </div>
              <h4 className="text-2xl font-bold text-forest mb-6">{promise.label}</h4>
              <p className="text-charcoal/60 leading-relaxed">{promise.desc}</p>
            </div>
          ))}
        </div>

        {/* Client Grids */}
        <div className="pt-20 border-t border-forest/5">
          <p className="text-[10px] font-bold text-forest/30 tracking-[0.4em] uppercase text-center mb-16">Selected Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
            {['AESTHETIX', 'GREENER', 'MODERNIST', 'VELOCITY', 'ZENITH'].map(p => (
              <span key={p} className="text-3xl font-sans font-bold tracking-tighter uppercase">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;

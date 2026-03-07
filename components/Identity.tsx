import React from 'react';
import { PROCESS_STEPS, PROMISES } from '../constants';

const Identity: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-10 tracking-tight">Process</h3>
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="mb-8 border-l border-zinc-800 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="font-bold text-xl">{step.label}</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-10 tracking-tight">Our Promise</h3>
            {PROMISES.map((promise) => (
              <div key={promise.id} className="mb-8 border-l border-green-900/30 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{promise.icon}</span>
                  <span className="font-bold text-xl text-green-500">{promise.label}</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">{promise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;

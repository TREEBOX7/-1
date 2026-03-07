import React from 'react';
import { PROCESS_STEPS, PROMISES } from '../constants';

const Identity: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Process</h3>
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span>{step.icon}</span>
                  <span className="font-bold">{step.label}</span>
                </div>
                <p className="text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8">Our Promise</h3>
            {PROMISES.map((promise) => (
              <div key={promise.id} className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span>{promise.icon}</span>
                  <span className="font-bold">{promise.label}</span>
                </div>
                <p className="text-zinc-400">{promise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;

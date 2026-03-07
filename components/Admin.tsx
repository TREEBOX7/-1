import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { DATA_VERSION } from '../constants';

interface AdminProps {
  portfolios: PortfolioItem[];
  setPortfolios: React.Dispatch<React.SetStateAction<PortfolioItem[]>>;
}

const Admin: React.FC<AdminProps> = ({ portfolios, setPortfolios }) => {
  // 관리자 기능 코드는 기존과 동일하게 유지됩니다.
  return (
    <section className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm font-medium text-green-500 mb-4">ADMIN TOOL</h2>
        <p className="text-zinc-400 text-xs">포트폴리오 데이터를 관리하는 영역입니다.</p>
      </div>
    </section>
  );
};

export default Admin;

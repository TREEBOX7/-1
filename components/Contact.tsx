
import React, { useState, useRef } from 'react';
import { InquiryFormData } from '../types';

const Contact: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<InquiryFormData>({
    company: '',
    manager: '',
    contact: '',
    email: '',
    budget: '',
    type: 'Exterior',
    message: '',
    referenceFile: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('감사합니다. 귀중한 시각화 문의가 성공적으로 접수되었습니다.\nTReeBOX 전문가가 24시간 이내에 연락드리겠습니다.');
    setFormData({ company: '', manager: '', contact: '', email: '', budget: '', type: 'Exterior', message: '', referenceFile: null });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, referenceFile: e.target.files[0] });
    }
  };

  return (
    <section id="contact" className="py-40 bg-offwhite relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-forest/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-2/5">
            <span className="text-cardboard font-bold tracking-[0.4em] text-[10px] uppercase block mb-6">Get in Touch</span>
            <h2 className="text-6xl font-sans text-forest mb-10 font-bold leading-[1.1]">
              TReeBOX는 당신의 <br /> 공간을 담을 <br /> 준비가 되었습니다.
            </h2>
            <p className="text-charcoal/60 mb-16 text-xl font-light leading-relaxed">
              도면이 생동감 넘치는 공간으로 피어나는 순간까지, <br />
              우리가 함께 고민하고 최상의 이미지로 만들어 가겠습니다.
            </p>

            <div className="space-y-12">
              <div className="group cursor-pointer">
                <h4 className="text-[10px] font-bold text-forest/20 tracking-[0.3em] uppercase mb-4">CGI Inquiry</h4>
                <a href="mailto:homzzz@naver.com" className="text-2xl font-bold text-forest group-hover:text-cardboard transition-colors block font-sans">homzzz@naver.com</a>
                <div className="w-0 h-[1px] bg-cardboard group-hover:w-1/2 transition-all mt-2"></div>
              </div>
              <div className="group cursor-pointer">
                <h4 className="text-[10px] font-bold text-forest/20 tracking-[0.3em] uppercase mb-4">Seoul Arch-Viz HQ</h4>
                <p className="text-lg font-medium text-charcoal/80">서울특별시 강서구</p>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-white p-12 md:p-20 box-shadow-premium border-t-8 border-forest">
              <h3 className="text-3xl font-sans font-bold text-forest mb-12">CGI Service Request</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">클라이언트 / Client *</label>
                  <input required type="text" className="w-full bg-offwhite p-5 border-b-2 border-transparent focus:border-cardboard outline-none transition-all font-medium" placeholder="예: 트립박스 건설" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">담당자 / Manager *</label>
                  <input required type="text" className="w-full bg-offwhite p-5 border-b-2 border-transparent focus:border-cardboard outline-none transition-all font-medium" placeholder="성함을 입력해주세요" value={formData.manager} onChange={e => setFormData({...formData, manager: e.target.value})} />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">이메일 / E-mail *</label>
                  <input required type="email" className="w-full bg-offwhite p-5 border-b-2 border-transparent focus:border-cardboard outline-none transition-all font-medium" placeholder="email@address.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">연락처 / Mobile *</label>
                  <input required type="tel" className="w-full bg-offwhite p-5 border-b-2 border-transparent focus:border-cardboard outline-none transition-all font-medium" placeholder="010-0000-0000" value={formData.contact} onChange={e => setFormData({...formData, contact: e.target.value})} />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">예산 범위 / Budget</label>
                  <select className="w-full bg-offwhite p-5 border-b-2 border-transparent focus:border-cardboard outline-none transition-all appearance-none font-medium" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
                    <option value="">예산을 선택해주세요</option>
                    <option value="Under 5M">500만원 이하</option>
                    <option value="5M - 20M">500만원 - 2,000만원</option>
                    <option value="20M - 50M">2,000만원 - 5,000만원</option>
                    <option value="Above 50M">5,000만원 이상</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">작업 유형 / Category</label>
                  <select className="w-full bg-offwhite p-5 border-b-2 border-transparent focus:border-cardboard outline-none transition-all appearance-none font-medium" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                    <option value="Exterior">Exterior Viz</option>
                    <option value="Interior">Interior Viz</option>
                    <option value="Landscape">Landscape Viz</option>
                    <option value="VR & Movie">Interative / VR</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3 mb-10">
                <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">작업 요청 내용 / Brief</label>
                <textarea required rows={5} className="w-full bg-offwhite p-5 border-b-2 border-transparent focus:border-cardboard outline-none transition-all resize-none font-medium" placeholder="도면 유무 및 마감 일정을 기재해 주세요." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <div className="space-y-3 mb-16">
                <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">참고 도면 및 레퍼런스 / Drawings & Files</label>
                <div onClick={() => fileInputRef.current?.click()} className="w-full p-6 border-2 border-dashed border-forest/10 hover:border-cardboard bg-offwhite flex items-center justify-between cursor-pointer transition-all">
                  <span className="text-sm font-medium text-forest/50">{formData.referenceFile ? formData.referenceFile.name : '파일을 선택하거나 이곳에 드래그하세요.'}</span>
                  <span className="text-xs font-bold text-cardboard">UPLOAD</span>
                  <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
                </div>
              </div>
              <button type="submit" className="group relative w-full py-8 bg-forest text-white font-bold tracking-[0.4em] overflow-hidden">
                <span className="relative z-10">REQUEST QUOTE</span>
                <div className="absolute inset-0 bg-cardboard translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

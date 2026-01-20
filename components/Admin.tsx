
import React, { useState, useRef } from 'react';
import { PortfolioItem, Category } from '../types.ts';
import { INITIAL_PORTFOLIO, DATA_VERSION } from '../constants.tsx';

interface AdminProps {
  onExit: () => void;
  portfolios: PortfolioItem[];
  onUpdate: (items: PortfolioItem[]) => void;
}

const Admin: React.FC<AdminProps> = ({ onExit, portfolios, onUpdate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [editingItem, setEditingItem] = useState<Partial<PortfolioItem> | null>(null);
  const [imageUrlInput, setImageUrlInput] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const importInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '0242') {
      setIsAuthenticated(true);
    } else {
      alert('접근이 거부되었습니다.');
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // 용량 제한 안내 (브라우저 스토리지 한계 때문)
      if (file.size > 2 * 1024 * 1024) {
        if (!window.confirm(`${file.name}의 용량이 2MB를 초과합니다. 브라우저 저장 용량이 부족해질 수 있습니다. 계속할까요?`)) continue;
      }
      
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
      newImages.push(base64);
    }

    setEditingItem((prev) => ({
      ...prev,
      images: [...(prev?.images || []), ...newImages],
    }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSave = () => {
    if (!editingItem?.title) {
      alert('프로젝트 제목을 입력해주세요.');
      return;
    }
    
    let newList;
    const finalItem = {
      ...editingItem,
      images: editingItem.images || [],
    };

    if (editingItem.id) {
      newList = portfolios.map(p => p.id === editingItem.id ? finalItem as PortfolioItem : p);
    } else {
      const newItem = { 
        ...finalItem, 
        id: Date.now().toString(),
      } as PortfolioItem;
      newList = [...portfolios, newItem];
    }
    
    onUpdate(newList);
    setEditingItem(null);
    alert('수정사항이 브라우저에 저장되었습니다.');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('이 프로젝트를 영구적으로 삭제하시겠습니까?')) {
      onUpdate(portfolios.filter(p => p.id !== id));
    }
  };

  // 데이터 내보내기 (JSON 파일로 저장)
  const exportData = () => {
    const dataStr = JSON.stringify(portfolios, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `treebox_portfolio_backup.json`);
    linkElement.click();
  };

  // 데이터 가져오기 (JSON 파일 열기)
  const importData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (Array.isArray(json)) {
          if (window.confirm('기존 데이터를 모두 지우고 불러온 파일의 내용으로 덮어씌울까요?')) {
            onUpdate(json);
            alert('데이터를 성공적으로 불러왔습니다.');
          }
        }
      } catch (err) {
        alert('올바른 데이터 파일이 아닙니다.');
      }
    };
    reader.readAsText(file);
    if (importInputRef.current) importInputRef.current.value = '';
  };

  if (!isAuthenticated) {
    return (
      <div className="h-screen bg-forest flex items-center justify-center p-8">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-12 shadow-2xl border-t-8 border-cardboard">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-sans font-bold text-forest mb-2">관리자 로그인</h2>
            <p className="text-sm text-charcoal/40 tracking-wider">포트폴리오 수정을 위해 암호를 입력하세요.</p>
          </div>
          <div className="space-y-6">
            <input 
              type="password" 
              autoFocus 
              className="w-full p-5 bg-offwhite border-b-2 border-forest/10 focus:border-cardboard outline-none font-bold tracking-widest text-center text-2xl" 
              placeholder="••••" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
            <div className="flex gap-4">
              <button type="submit" className="flex-1 py-5 bg-forest text-white font-bold tracking-widest hover:bg-cardboard transition-colors">접속하기</button>
              <button type="button" onClick={onExit} className="px-8 py-5 border border-forest/10 text-forest font-bold">닫기</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offwhite pb-20 overflow-y-auto">
      <div className="bg-forest text-white py-12 mb-16 shadow-xl">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-sans font-bold tracking-tight">프로젝트 관리도구</h1>
            <p className="text-white/40 text-sm mt-2">브라우저 로컬 저장소에 데이터가 보관됩니다.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setEditingItem({ category: 'Exterior', contribution: 100, images: [] })} className="px-8 py-3 bg-cardboard text-forest font-bold text-xs tracking-widest hover:bg-white transition-colors">신규 프로젝트 추가</button>
            <button onClick={() => importInputRef.current?.click()} className="px-6 py-3 border border-white/20 text-white font-bold text-[10px] tracking-widest hover:bg-white/10 transition-all">백업 불러오기(IMPORT)</button>
            <button onClick={exportData} className="px-6 py-3 border border-white/20 text-white font-bold text-[10px] tracking-widest hover:bg-white/10 transition-all">전체 백업하기(EXPORT)</button>
            <input type="file" ref={importInputRef} className="hidden" accept=".json" onChange={importData} />
            <button onClick={onExit} className="px-8 py-3 border border-white/40 text-white font-bold text-xs tracking-widest hover:bg-white/10 transition-colors">로그아웃</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {portfolios.map(p => (
            <div key={p.id} className="bg-white border border-forest/5 shadow-lg group">
              <div className="aspect-video relative overflow-hidden bg-forest/5">
                <img src={p.images[0] || 'https://via.placeholder.com/400x225?text=No+Image'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-[10px] font-bold text-forest tracking-widest uppercase">{p.category}</div>
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-forest/80 text-white text-[9px] font-bold">{p.images.length} IMAGES</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-forest mb-4 line-clamp-1">{p.title}</h3>
                <div className="mt-8 pt-6 border-t border-forest/5 flex gap-3">
                  <button onClick={() => setEditingItem(p)} className="flex-1 py-3 text-[10px] font-bold border border-forest/10 hover:bg-forest hover:text-white transition-colors tracking-widest">수정</button>
                  <button onClick={() => handleDelete(p.id)} className="px-5 py-3 text-[10px] font-bold border border-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors">삭제</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {editingItem && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-forest/90 backdrop-blur-md" onClick={() => setEditingItem(null)}></div>
            <div className="relative w-full max-w-4xl bg-white p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[95vh] rounded-sm">
              <h2 className="text-3xl font-sans font-bold text-forest mb-8">{editingItem.id ? '프로젝트 수정' : '새 프로젝트 등록'}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">프로젝트 이름</label>
                  <input type="text" value={editingItem.title || ''} onChange={e => setEditingItem({...editingItem, title: e.target.value})} className="w-full p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard font-bold" placeholder="예: 한남동 갤러리 하우스" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">카테고리</label>
                  <select value={editingItem.category || 'Exterior'} onChange={e => setEditingItem({...editingItem, category: e.target.value as Category})} className="w-full p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard font-bold">
                    <option value="Exterior">Exterior Viz</option>
                    <option value="Interior">Interior Viz</option>
                    <option value="Landscape">Landscape Viz</option>
                    <option value="VR & Movie">VR & Movie</option>
                  </select>
                </div>
                
                <div className="md:col-span-2 space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">이미지 관리</label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-cardboard/40 bg-cardboard/5 p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-cardboard/10 transition-colors gap-3"
                    >
                      <span className="text-3xl">📁</span>
                      <span className="text-sm font-bold text-forest uppercase tracking-widest">내 컴퓨터에서 사진 올리기</span>
                      <p className="text-[10px] text-forest/40">여러 장 선택 가능</p>
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        multiple 
                        accept="image/*"
                        onChange={handleFileChange} 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-forest/40">또는 이미지 주소(URL) 입력</p>
                       <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="https://..." 
                          className="flex-1 p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard text-sm"
                          value={imageUrlInput}
                          onChange={(e) => setImageUrlInput(e.target.value)}
                        />
                        <button 
                          onClick={() => {
                            if (imageUrlInput.trim()) {
                              setEditingItem(prev => ({...prev, images: [...(prev?.images || []), imageUrlInput.trim()]}));
                              setImageUrlInput('');
                            }
                          }}
                          className="px-6 bg-forest text-white font-bold text-xs"
                        >
                          추가
                        </button>
                       </div>
                    </div>
                  </div>
                  
                  {editingItem.images && editingItem.images.length > 0 && (
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6 max-h-[240px] overflow-y-auto p-2 border border-forest/5">
                      {editingItem.images.map((img, idx) => (
                        <div key={idx} className="relative aspect-square group overflow-hidden border border-forest/10">
                          <img src={img} className="w-full h-full object-cover" />
                          <button 
                            onClick={() => setEditingItem(prev => ({...prev, images: (prev?.images || []).filter((_, i) => i !== idx)}))}
                            className="absolute inset-0 bg-red-500/80 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold"
                          >
                            삭제
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">아티스트 역할</label>
                  <input type="text" value={editingItem.role || ''} onChange={e => setEditingItem({...editingItem, role: e.target.value})} className="w-full p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard" placeholder="예: Lead CGI Artist" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">기여도 (%)</label>
                  <input type="number" value={editingItem.contribution || 0} onChange={e => setEditingItem({...editingItem, contribution: parseInt(e.target.value)})} className="w-full p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard font-bold" />
                </div>
              </div>
              <div className="space-y-3 mb-12">
                <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">설명 (Description)</label>
                <textarea rows={4} value={editingItem.description || ''} onChange={e => setEditingItem({...editingItem, description: e.target.value})} className="w-full p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard resize-none leading-relaxed" placeholder="프로젝트에 대한 설명을 입력하세요."></textarea>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <button onClick={handleSave} className="flex-1 py-6 bg-forest text-white font-bold tracking-[0.3em] hover:bg-cardboard transition-colors shadow-xl">저장하기</button>
                <button onClick={() => setEditingItem(null)} className="md:px-12 py-6 border border-forest/10 text-forest font-bold tracking-widest hover:bg-offwhite">취소</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;

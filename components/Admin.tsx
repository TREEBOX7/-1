
import React, { useState, useRef } from 'react';
import { PortfolioItem, Category } from '../types.ts';
import { INITIAL_PORTFOLIO } from '../constants.tsx';

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
    if (password === '1111') {
      setIsAuthenticated(true);
    } else {
      alert('접근이 거부되었습니다.');
    }
  };

  const handleSyncWithCode = () => {
    if (window.confirm('브라우저에 저장된 데이터를 삭제하고, GitHub 코드(constants.tsx)에 정의된 최신 포트폴리오 데이터를 불러오시겠습니까?')) {
      localStorage.removeItem('treebox_portfolio');
      onUpdate(INITIAL_PORTFOLIO);
      alert('코드 데이터와 동기화되었습니다. 페이지를 새로고침하면 최종 적용됩니다.');
      window.location.reload();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size > 1024 * 1024) {
        if (!window.confirm(`${file.name}의 용량이 1MB를 초과합니다. 계속하시겠습니까?`)) continue;
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
  };

  const addImageUrl = () => {
    if (!imageUrlInput.trim()) return;
    setEditingItem((prev) => ({
      ...prev,
      images: [...(prev?.images || []), imageUrlInput.trim()],
    }));
    setImageUrlInput('');
  };

  const removeImage = (index: number) => {
    setEditingItem((prev) => ({
      ...prev,
      images: (prev?.images || []).filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    if (!editingItem?.title) {
      alert('제목을 입력해주세요.');
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
  };

  const handleDelete = (id: string) => {
    if (window.confirm('이 프로젝트를 영구적으로 삭제하시겠습니까?')) {
      onUpdate(portfolios.filter(p => p.id !== id));
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(portfolios, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `treebox_portfolio_${new Date().toISOString().split('T')[0]}.json`);
    linkElement.click();
  };

  const importData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (Array.isArray(json)) {
          if (window.confirm('기존 데이터를 덮어쓰고 새로운 데이터를 가져오시겠습니까?')) {
            onUpdate(json);
            alert('데이터를 성공적으로 가져왔습니다.');
          }
        }
      } catch (err) {
        alert('파일을 읽는 중 오류가 발생했습니다.');
      }
    };
    reader.readAsText(file);
    if (importInputRef.current) importInputRef.current.value = '';
  };

  if (!isAuthenticated) {
    return (
      <div className="h-screen bg-forest flex items-center justify-center p-8">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-12 shadow-2xl border-t-8 border-cardboard">
          <h2 className="text-3xl font-sans font-bold text-forest mb-2">Internal Portal</h2>
          <p className="text-sm text-charcoal/40 mb-10">Access restricted to TReeBOX administrators.</p>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">Security Password</label>
              <input type="password" autoFocus className="w-full p-5 bg-offwhite border-b-2 border-forest/10 focus:border-cardboard outline-none font-bold tracking-widest" placeholder="••••" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="flex gap-4 pt-4">
              <button type="submit" className="flex-1 py-5 bg-forest text-white font-bold tracking-[0.2em] hover:bg-cardboard transition-colors">AUTHENTICATE</button>
              <button type="button" onClick={onExit} className="px-8 py-5 border border-forest/10 text-forest font-bold hover:bg-offwhite">CANCEL</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offwhite pb-20 overflow-y-auto">
      <div className="bg-forest text-white py-12 mb-16">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-sans font-bold tracking-tight">CGI Portfolio Engine</h1>
            <p className="text-white/40 text-sm mt-2">Manage visualization content and sync external data.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button onClick={handleSyncWithCode} className="px-6 py-3 bg-orange-600 text-white font-bold text-[10px] tracking-widest hover:bg-orange-700 transition-all border border-transparent shadow-lg shadow-orange-900/20">SYNC WITH CODE</button>
            <button onClick={exportData} className="px-6 py-3 border border-cardboard text-cardboard font-bold text-[10px] tracking-widest hover:bg-cardboard hover:text-forest transition-all">EXPORT JSON</button>
            <button onClick={() => importInputRef.current?.click()} className="px-6 py-3 border border-white/20 text-white font-bold text-[10px] tracking-widest hover:bg-white/10 transition-all">IMPORT JSON</button>
            <input type="file" ref={importInputRef} className="hidden" accept=".json" onChange={importData} />
            <button onClick={() => setEditingItem({ category: 'Exterior', contribution: 100, images: [] })} className="px-8 py-3 bg-cardboard text-forest font-bold text-xs tracking-widest hover:bg-white transition-colors">ADD PROJECT</button>
            <button onClick={onExit} className="px-8 py-3 border border-white/20 text-white font-bold text-xs tracking-widest hover:bg-white/10 transition-colors">CLOSE</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {portfolios.map(p => (
            <div key={p.id} className="bg-white border border-forest/5 shadow-lg group">
              <div className="aspect-video relative overflow-hidden bg-forest/5">
                <img src={p.images[0] || 'https://via.placeholder.com/400x225?text=No+Image'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-[10px] font-bold text-forest tracking-widest">{p.category}</div>
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-forest/80 text-white text-[9px] font-bold">IMAGE x{p.images.length}</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-forest mb-4 line-clamp-1">{p.title}</h3>
                <p className="text-sm text-charcoal/50 line-clamp-2 h-10">{p.description}</p>
                <div className="mt-8 pt-6 border-t border-forest/5 flex gap-3">
                  <button onClick={() => setEditingItem(p)} className="flex-1 py-3 text-[10px] font-bold border border-forest/10 hover:bg-forest hover:text-white transition-colors tracking-widest">EDIT</button>
                  <button onClick={() => handleDelete(p.id)} className="px-5 py-3 text-[10px] font-bold border border-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors">✕</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {editingItem && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-forest/90 backdrop-blur-md" onClick={() => setEditingItem(null)}></div>
            <div className="relative w-full max-w-4xl bg-white p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[95vh] rounded-sm">
              <div className="flex justify-between items-end mb-8">
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-forest">{editingItem.id ? 'Edit Content' : 'Unbox New Idea'}</h2>
                <span className="text-[10px] font-bold text-cardboard tracking-[0.4em]">ADMIN EDITOR</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">Project Title</label>
                  <input type="text" value={editingItem.title || ''} onChange={e => setEditingItem({...editingItem, title: e.target.value})} className="w-full p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard font-bold" placeholder="프로젝트 명칭" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">Category</label>
                  <select value={editingItem.category || 'Exterior'} onChange={e => setEditingItem({...editingItem, category: e.target.value as Category})} className="w-full p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard font-bold">
                    <option value="Exterior">Exterior Viz</option>
                    <option value="Interior">Interior Viz</option>
                    <option value="Landscape">Landscape Viz</option>
                    <option value="VR & Movie">Interative / VR</option>
                  </select>
                </div>
                
                <div className="md:col-span-2 space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">Manage Images</label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="외부 이미지 URL 입력 (권장)" 
                          className="flex-1 p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard text-sm"
                          value={imageUrlInput}
                          onChange={(e) => setImageUrlInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && addImageUrl()}
                        />
                        <button 
                          onClick={addImageUrl}
                          className="px-6 bg-forest text-white font-bold text-xs"
                        >
                          ADD
                        </button>
                      </div>
                    </div>

                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-forest/10 bg-offwhite p-4 flex items-center justify-center cursor-pointer hover:border-cardboard transition-colors gap-3"
                    >
                      <span className="text-xl">📁</span>
                      <span className="text-xs font-bold text-forest/50 uppercase tracking-widest">Local Upload</span>
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        multiple 
                        accept="image/*"
                        onChange={handleFileChange} 
                      />
                    </div>
                  </div>
                  
                  {editingItem.images && editingItem.images.length > 0 && (
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6 max-h-[240px] overflow-y-auto p-2 border border-forest/5 custom-scrollbar">
                      {editingItem.images.map((img, idx) => (
                        <div key={idx} className="relative aspect-square bg-forest/5 border border-forest/5 group overflow-hidden">
                          <img src={img} className="w-full h-full object-cover" />
                          <button 
                            onClick={() => removeImage(idx)}
                            className="absolute inset-0 bg-red-500/80 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold"
                          >
                            REMOVE
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">Artist Role</label>
                  <input type="text" value={editingItem.role || ''} onChange={e => setEditingItem({...editingItem, role: e.target.value})} className="w-full p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard font-medium" placeholder="Ex: Lead Artist" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">Contribution (%)</label>
                  <input type="number" value={editingItem.contribution || 0} onChange={e => setEditingItem({...editingItem, contribution: parseInt(e.target.value)})} className="w-full p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard font-bold text-cardboard" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">Key Performance Result</label>
                  <input type="text" value={editingItem.result || ''} onChange={e => setEditingItem({...editingItem, result: e.target.value})} className="w-full p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard italic" placeholder="Ex: Award-winning project" />
                </div>
              </div>
              <div className="space-y-3 mb-12">
                <label className="text-[10px] font-bold uppercase tracking-widest text-forest/40">Project Description</label>
                <textarea rows={4} value={editingItem.description || ''} onChange={e => setEditingItem({...editingItem, description: e.target.value})} className="w-full p-4 bg-offwhite border-b-2 border-forest/5 outline-none focus:border-cardboard resize-none leading-relaxed" placeholder="상세 설명을 입력하세요."></textarea>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <button onClick={handleSave} className="flex-1 py-6 bg-forest text-white font-bold tracking-[0.3em] hover:bg-cardboard transition-colors shadow-xl">PUBLISH CHANGES</button>
                <button onClick={() => setEditingItem(null)} className="md:px-12 py-6 border border-forest/10 text-forest font-bold tracking-widest hover:bg-offwhite">DISCARD</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;

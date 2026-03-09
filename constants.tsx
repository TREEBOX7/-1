import { PortfolioItem } from './types';

export const DATA_VERSION = '1.0.8';

// Identity.tsx에서 사용하는 프로세스 단계 데이터입니다.
export const PROCESS_STEPS = [
  { id: "1", icon: "📋", label: "Planning", desc: "Design concept and structural planning" },
  { id: "2", icon: "🏗️", label: "Modeling", desc: "Detailed 3D geometry creation" },
  { id: "3", icon: "🖥️", label: "Rendering", desc: "High-quality lighting and texturing" }
];

// Identity.tsx에서 사용하는 약속 데이터입니다.
export const PROMISES = [
  { title: "Time", label: "Fast Delivery", desc: "AI 기반 프로세스로 압도적인 납기를 보장합니다." },
  { title: "Transparence", label: "Clear Process", desc: "모든 작업 과정은 투명하게 공유됩니다." },
  { title: "Care", label: "Customer First", desc: "고객의 비전을 가장 소중하게 생각합니다." }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    "id": "1",
    "title": "The Timber Nexus Pavilion",
    "category": "Exterior",
    "description": "지속 가능한 목재 구조와 유기적인 곡선을 결합한 미래형 파빌리온 시각화입니다.",
    "images": [
      "/t-01-e.jpg" 
    ],
    "role": "Lead 3D Artist",
    "contribution": 100,
    "result": "International Award 2024"
  },
  {
    "id": "2",
    "title": "Minimalist Monolith House",
    "category": "Exterior",
    "description": "거친 콘크리트 질감과 매끄러운 유리면이 조화를 이루는 독채 주택입니다.",
    "images": [
      "/t-02-e.jpg" 
    ],
    "role": "Environment Design",
    "contribution": 80,
    "result": "AD Main Cover"
  },
  {
    "id": "3",
    "title": "Zen Concrete Loft",
    "category": "Interior",
    "description": "하이엔드 주거 공간을 위한 인테리어 CG입니다.",
    "images": [
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMTM4/MDAxNzM3NDA0OTgzNzY1.mJ8r7_D7v0y7w_Z7z0y7w_Z7z0y7w_Z7z0y7w_Z7z0y7w.jpg?type=w773"
    ],
    "role": "Interior Visualization",
    "contribution": 100,
    "result": "Interior Design Award"
  }
];

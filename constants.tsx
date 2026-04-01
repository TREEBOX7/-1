import { PortfolioItem } from './types';

export const DATA_VERSION = '1.1.7';

export const PROCESS_STEPS = [
  { id: "1", icon: "📋", title: "Planning", desc: "Design concept and structural planning" },
  { id: "2", icon: "🏗️", title: "Modeling", desc: "Detailed 3D geometry creation" },
  { id: "3", icon: "🖥️", title: "Rendering", desc: "High-quality lighting and texturing" }
];

export const PROMISES = [
  { title: "Time", label: "Fast Delivery", desc: "AI 기반 프로세스로 압도적인 납기를 보장합니다." },
  { title: "Transparence", label: "Clear Process", desc: "모든 작업 과정은 투명하게 공유됩니다." },
  { title: "Care", label: "Customer First", desc: "고객의 비전을 가장 소중하게 생각합니다." }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    "id": "1",
    "title": "High-Rise Residential Complex",
    "category": "Exterior",
    "description": "지속 가능한 콘크리트 와 저층 상가들과 어울리는 공동주택 AI건축CG 입니다.",
    "images": ["/t-01-e.jpg", "/ca-04.jpg"],
    "role": "Lead 3D Artist",
    "contribution": 100,
    "result": "International Award 2024"
  },
  {
    "id": "2",
    "title": "Mixed-Use Tower View",
    "category": "Exterior",
    "description": "간단한 스케치업의 결과물로 만들어진 최상의 주상복합 AI건축CG 입니다.",
    "images": ["/t-02-e.jpg", "/t-02.jpg"],
    "role": "Environment Design",
    "contribution": 80,
    "result": "AD Main Cover"
  },
  {
    "id": "3",
    "title": "Institutional Building Complex",
    "category": "Exterior",
    "description": "대리석과 유리골조로 만들어진 사옥 AI건축CG 입니다.",
    "images": ["/test-3.jpg", "/test-4.jpg", "/test-2.jpg"],
    "role": "Interior Visualization",
    "contribution": 100,
    "result": "Interior Design Award"
  },
  {
    "id": "4",
    "title": "Detailed Urban Diorama Model",
    "category": "Exterior",
    "description": "최고의 사이트를 표현하기 위한 AI이미지 입니다.",
    "images": ["/test-6.jpg"],
    "role": "Interior Visualization",
    "contribution": 100,
    "result": "Interior Design Award"
  },
  {
    "id": "5",
    "title": "Detailed Urban Diorama Model",
    "category": "Exterior", 
    "description": "건축을 2D로 표현하기 위한 최고의 블루프린트 AI이미지 입니다.",
    "images": ["/test-9.jpg", "/test-10.jpg"],
    "role": "Interior Visualization",
    "contribution": 100,
    "result": "Interior Design Award"
  },
  {
    "id": "6",
    "title": "Detailed Urban Diorama Model",
    "category": "Interior",
    "description": "건축을 내부를 보여주기 위한 최고의 AI실내CG 입니다.",
    "images": ["/test-5.jpg"],
    "role": "Interior Visualization",
    "contribution": 100,
    "result": "Interior Design Award"
  }
];

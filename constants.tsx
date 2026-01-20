
import { PortfolioItem } from './types';

// GitHub에서 수정 후 이 버전을 올리면 브라우저 캐시를 무시하고 강제 업데이트됩니다.
export const DATA_VERSION = '1.0.1'; 

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'The Timber Nexus Pavilion',
    category: 'Exterior',
    description: '지속 가능한 목재 구조와 유기적인 곡선을 결합한 미래형 파빌리온 시각화입니다. 자연광의 유입과 그림자의 대비를 극대화하여 평온함을 표현했습니다.',
    images: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200'],
    role: 'Lead 3D Artist',
    contribution: 100,
    result: 'International ArchViz Excellence Award 2024 수상'
  },
  {
    id: '2',
    title: 'Minimalist Monolith House',
    category: 'Exterior',
    description: '거친 콘크리트 질감과 매끄러운 유리면이 조화를 이루는 독채 주택입니다. 숲속의 고립된 아름다움을 위해 세밀한 식생 환경(Scattering)을 구축했습니다.',
    images: ['https://postfiles.pstatic.net/MjAyNjAxMTZfNTAg/MDAxNzY4NTQxNDc5Njg1.FlrGzFupb7J4Nu5XRxjzB0-qwpj7AC8-1GQC5UuVAb4g.jppFz7vN5B8_xk3k9t2Z772S04jAl51mzOQA-w02120g.JPEG/2025_09_17_18_44_IMG_1278.JPG?type=w773'],
    role: 'Environment Design',
    contribution: 80,
    result: '건축 잡지 "AD" 메인 커버 프로젝트 선정'
  },
  {
    id: '3',
    title: 'Zen Concrete Loft',
    category: 'Interior',
    description: '하이엔드 주거 공간을 위한 인테리어 CG입니다. 미니멀한 가구 배치와 빛의 굴절을 정교하게 계산하여 정적인 공간의 미학을 완성했습니다.',
    images: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'],
    role: 'Lighting & Texturing',
    contribution: 95,
    result: '프리미엄 가구 브랜드 B사와 협업 렌더링'
  },
  {
    id: '4',
    title: 'Floating Garden Resort',
    category: 'Landscape',
    description: '수면 위에 떠 있는 듯한 리조트 단지의 조경 설계 시각화입니다. 물의 반사와 식물의 디테일을 4K 해상도로 구현하여 극강의 사실감을 부여했습니다.',
    images: ['https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200'],
    role: 'CGI Technical Director',
    contribution: 70,
    result: '글로벌 리조트 체인 투자 유치 성공'
  },
  {
    id: '5',
    title: 'Hyperion Virtual Tour',
    category: 'VR & Movie',
    description: '언리얼 엔진 5를 활용한 실시간 건축 경험입니다. 사용자가 공간을 자유롭게 이동하며 재질과 조명을 실시간으로 변경해 볼 수 있는 인터랙티브 콘텐츠입니다.',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'],
    role: 'Real-time Developer',
    contribution: 60,
    result: 'VR 건축 시뮬레이션 만족도 98% 달성'
  },
  {
    id: '6',
    title: 'The Obsidian Library',
    category: 'Interior',
    description: '흑색 대리석과 조명을 활용한 서재 공간입니다. 고풍스러운 분위기와 현대적인 미니멀리즘의 조화를 추구했습니다.',
    images: ['https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200'],
    role: 'Interior CGI Specialist',
    contribution: 100,
    result: 'Interior Design Portfolio of the Year'
  }
];

export const PROCESS_STEPS = [
  { id: 'Seed', title: '설계 (Seed)', desc: '도면과 건축가의 의도를 깊이 이해하여 아이디어의 씨앗을 확인합니다.', icon: '📐' },
  { id: 'Root', title: '구축 (Root)', desc: '정교한 3D 모델링으로 공간의 단단한 골조와 뿌리를 내립니다.', icon: '🏗️' },
  { id: 'Stem', title: '구현 (Stem)', desc: '빛과 재질을 입혀 생동감 넘치는 공간의 줄기를 뻗어 나갑니다.', icon: '🕯️' },
  { id: 'Fruit', title: '완성 (Fruit)', desc: '누구나 감동할 수 있는 최상의 시각적 결실을 맺습니다.', icon: '✨' },
];

export const PROMISES = [
  { title: 'Time', label: '철저한 마감', desc: '건축 프로젝트의 일정은 생명입니다. 약속된 납기일을 단 한 번도 어긴 적이 없습니다.', icon: 'clock' },
  { title: 'Transparence', label: '기술적 투명성', desc: '작업 과정을 실시간으로 공유하며 최상의 퀄리티를 위한 소통을 아끼지 않습니다.', icon: 'message' },
  { title: 'Care', label: '사후 지원', desc: '설계 변경이나 추가 렌더링이 필요한 경우 신속하고 유연하게 대응합니다.', icon: 'heart' },
];

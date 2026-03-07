
import { PortfolioItem } from './types';

/**
 * [중요: 사진 영구 보존 방법]
 * 1. 관리자 페이지에서 사진을 모두 업로드합니다.
 * 2. 상단의 'EXPORT' 버튼을 눌러 JSON 파일을 다운로드합니다.
 * 3. 다운로드된 파일의 내용을 복사하여 아래 'INITIAL_PORTFOLIO' 배열 안에 붙여넣으세요.
 * 4. 그런 다음 DATA_VERSION 숫자를 올리고(예: '1.0.2') GitHub에 푸시하면 모든 접속자에게 사진이 보입니다.
 */
export const DATA_VERSION = '1.0.1'; 

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    "id": "1",
    "title": "The Timber Nexus Pavilion",
    "category": "Exterior",
    "description": "지속 가능한 목재 구조와 유기적인 곡선을 결합한 미래형 파빌리온 시각화입니다. 자연광의 유입과 그림자의 대비를 극대화하여 평온함을 표현했습니다.",
    "images": [
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMjk0/MDAxNzY4OTAyODgzMTU2.IzwGWa22QenVkE31u1yVytHbWyn6Bf5stYEf5WYeH1wg.Bk-yQahyQwZeRzr3RVQlPxy7ll52IGAt1K2aIcOhgCQg.JPEG/251212-4.jpg?type=w773",
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMjcw/MDAxNzY4OTAyODgzMTU4.jCHqbcsyCRZL4j5yOkPtfY-kQZHFwnc2Vufi_b8Sv-cg.QuBiI4F8C2pyTrVbhf3XXdyPztK02BIoUQM710N-Ozcg.JPEG/251212-7p.jpg?type=w773"
    ],
    "role": "Lead 3D Artist",
    "contribution": 100,
    "result": "International ArchViz Excellence Award 2024 수상"
  },
  {
    "id": "2",
    "title": "Minimalist Monolith House",
    "category": "Exterior",
    "description": "거친 콘크리트 질감과 매끄러운 유리면이 조화를 이루는 독채 주택입니다. 숲속의 고립된 아름다움을 위해 세밀한 식생 환경(Scattering)을 구축했습니다.",
    "images": [
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMjIg/MDAxNzY4OTAyODgyNzU5.IHs5grBd_7bb7X2xwCdYYBn2s8k8rsfNnyp-AMutmFEg.hJDTxzkORY2HGmZnCpX7mEB21S0T4CqzOBdx4Yy-ZcYg.JPEG/Gemini_Generated_Image_19bth019bth019bt.jpg?type=w773",
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMjY1/MDAxNzY4OTAyODgyNzY0.aO0z3vkZpAHw5r7tzuIdINLHpRV22N3-eABmppsBWAYg.jfV_fSf553bnATFwjr-Bom3ftxHCZmi6OM5YGiMzbHQg.JPEG/Gemini_Generated_Image_mjaj0gmjaj0gmjaj.jpg?type=w773",
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMjM4/MDAxNzY4OTAyODgzMzA5.cWeeINxzrGM4NbM9Wvd5XeM6WZf_Sbd0Af5JHxYgz-Ug.yKOs4qC8G3CYI9NaklvjuE6euR9N51qk0UtajBtRoFQg.JPEG/test-2.jpg?type=w773"
    ],
    "role": "Environment Design",
    "contribution": 80,
    "result": "건축 잡지 \"AD\" 메인 커버 프로젝트 선정"
  },
  {
    "id": "3",
    "title": "Zen Concrete Loft",
    "category": "Interior",
    "description": "하이엔드 주거 공간을 위한 인테리어 CG입니다. 미니멀한 가구 배치와 빛의 굴절을 정교하게 계산하여 정적인 공간의 미학을 완성했습니다.",
    "images": [
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMjI4/MDAxNzY4OTAyODgyNzYz.9L5TSJd6VoV5w0cm6GUGXmWWFdvf1cXFSNtNr1yjog.ti0tam1doryuqciDd1e3u8ydSvioJaLIjTXl-e4Vjngg.JPEG/t-01-e.jpg?type=w773",
      https://postfiles.pstatic.net/MjAyNjAzMDdfMjU3/MDAxNzcyODYwNTg1MTUx.FF6Be8TLda-PKpCrYRmTYM9gTidKs6DMxRmwREXxqAwg.8ecyo1Dp6WKzxU8rcfTz1ySYuwRc1kKZtw1lMN92nc0g.JPEG/t-01-e.jpg?type=w773,
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMjY5/MDAxNzY4OTAyODgzMTc0.IsuTmKKArToZQO7-EIkzXGC7xq8hB-LeCN9b4JeaTSog.D93LWxeXudBI-2XLv4-FVSYQBsciM1kkX74Dhsw99Dkg.JPEG/ca-04.jpg?type=w773"
    ],
    "role": "Lighting & Texturing",
    "contribution": 95,
    "result": "프리미엄 가구 브랜드 B사와 협업 렌더링"
  },
  {
    "id": "4",
    "title": "Floating Garden Resort",
    "category": "Interior",
    "description": "수면 위에 떠 있는 듯한 리조트 단지의 조경 설계 시각화입니다. 물의 반사와 식물의 디테일을 4K 해상도로 구현하여 극강의 사실감을 부여했습니다.",
    "images": [
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMjQg/MDAxNzY4OTAyODgyNzY1.dYWkffnwFTQLtuszcm8nXfxP1HiEpIUgGunIMjwNfgsg.ijoHc6-LLbk-S8ncp5ctw9ipt7BwZMDYoKQJw_iyfwYg.JPEG/Gemini_Generated_Image_b9recxb9recxb9re.jpg?type=w773"
    ],
    "role": "CGI Technical Director",
    "contribution": 70,
    "result": "글로벌 리조트 체인 투자 유치 성공"
  },
  {
    "id": "5",
    "title": "Hyperion Virtual Tour",
    "category": "Exterior",
    "description": "언리얼 엔진 5를 활용한 실시간 건축 경험입니다. 사용자가 공간을 자유롭게 이동하며 재질과 조명을 실시간으로 변경해 볼 수 있는 인터랙티브 콘텐츠입니다.",
    "images": [
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMjQw/MDAxNzY4OTAyODgzMTk1.KrXGrAWfo4yNj0L554dOok4qyy0u30NuAayaElQrLL4g.KCR1qCl_xjvMwD64y0MjtwCkg2G-PR7aa18gAKepMhAg.JPEG/t-02-e.jpg?type=w773",
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMjIx/MDAxNzY4OTAyODgzMTYx.arggDIlfzHRyW4hoQay1aJpqHvSQ1Ugy-be8vWieZlYg.nkPGbUy8_mB5ug1j-lnJHLH7u8VsgxVdEzedGegEApAg.JPEG/t-02.JPG?type=w773"
    ],
    "role": "Real-time Developer",
    "contribution": 60,
    "result": "VR 건축 시뮬레이션 만족도 98% 달성"
  },
  {
    "id": "6",
    "title": "The Obsidian Library",
    "category": "Landscape",
    "description": "흑색 대리석과 조명을 활용한 서재 공간입니다. 고풍스러운 분위기와 현대적인 미니멀리즘의 조화를 추구했습니다.",
    "images": [
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMTc0/MDAxNzY4OTAyODgyNzU4.zBpJYDXZZSDSo2l15_navtqDIBN_m5Fm48U-AXmiLFYg.0O76eaHda-EmHVVWlc32CRWNlgVUNiRLnclQ82FDdq0g.JPEG/Generated_Image_December_09,_2025_-_7_52PM.jpg?type=w773",
      "https://postfiles.pstatic.net/MjAyNjAxMjBfNzYg/MDAxNzY4OTAyODgyNzY0.W207272_Y47467njY93UwrKeqdtSYLs71flBrr_UprAg.CHuf4SaXOse9LRhjrquWPt0m3GZr-k3l-zz8k2xY7XQg.JPEG/ca2.jpg?type=w773"
    ],
    "role": "Interior CGI Specialist",
    "contribution": 100,
    "result": "Interior Design Portfolio of the Year"
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

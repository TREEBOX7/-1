import { PortfolioItem } from './types';

/**
 * [중요: 사진 영구 보존 방법]
 * 1. 관리자 페이지에서 사진을 모두 업로드합니다.
 * 2. 상단의 'EXPORT' 버튼을 눌러 JSON 파일을 다운로드합니다.
 * 3. 다운로드된 파일의 내용을 복사하며 아래 'INITIAL_PORTFOLIO' 배열 안에 붙여넣으세요.
 * 4. 그런 다음 DATA_VERSION 숫자를 올리고(예: '1.0.3') GitHub에 푸시하면 모든 접속자에게 사진이 보입니다.
 */

export const DATA_VERSION = '1.0.3';

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    "id": "1",
    "title": "The Timber Nexus Pavilion",
    "category": "Exterior",
    "description": "지속 가능한 목재 구조와 유기적인 곡선을 결합한 미래형 파빌리온 시각화입니다. 자연광의 유입과 그림자의 대비를 극대화하여 평온함을 표현했습니다.",
    "images": [
      "https://postfiles.pstatic.net/MjAyNjAzMDdfMjU3/MDAxNzcyODYwNTg1MTUx.FF6Be8TLda-PKpCrYRmTYM9gTidKs6DMxRmwREXxqAwg.8ecyo1Dp6WKzxU8rcfTz1ySYuwRc1kKZtw1lMN92nc0g.JPEG/t-01-e.jpg?type=w773"
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
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMjM1/MDAxNzM3NDA0OTgzNzU5.IHs5grBd_7bb7X2wwCdYYBn2s8k8rsfNnyp-AMutmFEg.hJDTxzkORY2HGmZncPX7mEB21S0T4CqzOBdx4Yy-ZcYg.JPEG/Gemini_Generated_Image_19bth019bth019bt.jpg?type=w773",
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMTM4/MDAxNzM3NDA0OTgzNzY1.mJ8r7_D7v0y7w_Z7z0y7w_Z7z0y7w_Z7z0y7w_Z7z0y7w.jpg?type=w773"
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
      "https://postfiles.pstatic.net/MjAyNjAxMjBfMTM4/MDAxNzM3NDA0OTgzNzY1.mJ8r7_D7v0y7w_Z7z0y7w_Z7z0y7w_Z7z0y7w_Z7z0y7w.jpg?type=w773"
    ],
    "role": "Interior Visualization",
    "contribution": 100,
    "result": "Interior Design Magazine 우수작 선정"
  }
];

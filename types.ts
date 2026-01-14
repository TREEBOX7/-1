
export type Category = 'All' | 'Exterior' | 'Interior' | 'Landscape' | 'VR & Movie';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  description: string;
  images: string[]; // 다중 이미지 지원을 위해 string 배열로 변경
  role: string;
  contribution: number;
  result: string;
}

export interface InquiryFormData {
  company: string;
  manager: string;
  contact: string;
  email: string;
  budget: string;
  type: string;
  message: string;
  referenceFile?: File | null;
}

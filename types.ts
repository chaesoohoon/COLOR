
export enum SlideType {
  INTRO = 'INTRO',
  OBJECTIVES = 'OBJECTIVES',
  RESOLUTION = 'RESOLUTION',
  FILE_FORMATS = 'FILE_FORMATS',
  COMPARISON = 'COMPARISON',
  RGB_DEMO = 'RGB_DEMO',
  CMYK_DEMO = 'CMYK_DEMO',
  GAMUT = 'GAMUT',
  BITMAP_VECTOR = 'BITMAP_VECTOR',
  GOLDEN_RULES = 'GOLDEN_RULES',
  NEXT_LESSON = 'NEXT_LESSON',
  QR_ENTRY = 'QR_ENTRY',
  CONTACT = 'CONTACT'
}

export interface SlideContent {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: string[];
  bulletPoints?: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

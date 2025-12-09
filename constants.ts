
import { SlideContent, SlideType, QuizQuestion } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    type: SlideType.INTRO,
    title: "왜 색이 다르게 보일까요?",
    subtitle: "동일한 디자인 파일의 화면(RGB) vs 인쇄물(CMYK) 차이",
    content: [
      "여러분, 같은 파일인데 왜 색이 이렇게 달라 보일까요?",
      "이 차이를 모른 채 작업하면 결과물이 어떻게 될까요?",
      "시각적인 색상 차이를 이해하고, 올바른 색상 모드를 배워봅시다."
    ]
  },
  {
    id: 2,
    type: SlideType.OBJECTIVES,
    title: "오늘의 학습 목표",
    bulletPoints: [
      "인쇄(CMYK)와 웹·모바일(RGB) 환경의 색상 체계를 구분할 수 있다.",
      "작업 목적(인쇄/디지털)에 따른 올바른 색상 모드를 설정할 수 있다.",
      "RGB와 CMYK 변환 시 발생하는 색 변화(색역 차이)를 설명할 수 있다."
    ]
  },
  {
    id: 3,
    type: SlideType.RGB_DEMO,
    title: "RGB 색상 체계 (가산 혼합)",
    subtitle: "빛의 3원색: Red, Green, Blue",
    content: ["웹, 모바일, 영상용", "섞을수록 밝아짐 (White 지향)"]
  },
  {
    id: 4,
    type: SlideType.CMYK_DEMO,
    title: "CMYK 색상 체계 (감산 혼합)",
    subtitle: "색의 4원색: Cyan, Magenta, Yellow, Key(Black)",
    content: ["인쇄, 출판, 패키지용", "섞을수록 어두워짐 (Black 지향)"]
  },
  {
    id: 5,
    type: SlideType.GAMUT,
    title: "색역 (Color Gamut)과 변환",
    subtitle: "왜 색상 손실이 발생할까?",
    content: ["RGB는 CMYK보다 표현 범위가 넓어 변환 시 색이 탁해질 수 있습니다."]
  },
  {
    id: 6,
    type: SlideType.RESOLUTION,
    title: "해상도의 비밀",
    subtitle: "화면의 점(Pixel) vs 종이의 점(Dot)",
    content: [
      "웹은 72 PPI로 충분하지만, 인쇄는 왜 300 DPI가 필요할까요?",
      "해상도가 낮으면 인쇄물이 흐릿해지는 이유를 알아봅시다."
    ]
  },
  {
    id: 7,
    type: SlideType.BITMAP_VECTOR,
    title: "이미지 구조 비교",
    subtitle: "포토샵(Bitmap) vs 일러스트레이터(Vector)",
    content: ["확대해도 깨지지 않는 벡터와 픽셀로 이루어진 비트맵의 차이"]
  },
  {
    id: 8,
    type: SlideType.FILE_FORMATS,
    title: "파일 포맷 전략",
    subtitle: "상황에 맞는 최적의 파일 형식 찾기",
    content: [
      "투명한 배경이 필요할 땐 PNG?",
      "로고를 만들 땐 AI?",
      "인쇄소에 넘길 땐 PDF?"
    ]
  },
  {
    id: 9,
    type: SlideType.COMPARISON,
    title: "제작 환경 총정리",
    subtitle: "최종 점검: 인쇄 vs 웹 환경 완벽 비교",
    content: [
      "색상, 해상도, 포맷, 그리고 이미지 구조까지 한눈에 비교해봅시다."
    ]
  },
  {
    id: 10,
    type: SlideType.GOLDEN_RULES,
    title: "디자이너의 Golden Rules",
    subtitle: "실무에서 실수하지 않는 3가지 체크리스트",
    bulletPoints: [
      "Rule 1: 작업 시작 전 '색상 모드' 확인하기 (RGB vs CMYK)",
      "Rule 2: 인쇄용 이미지는 반드시 '300 DPI' 이상인지 체크",
      "Rule 3: 최종 인쇄 데이터는 'PDF'로, 폰트는 '아웃라인' 처리"
    ]
  },
  {
    id: 11,
    type: SlideType.NEXT_LESSON,
    title: "다음 차시 예고",
    subtitle: "색이 전달하는 이미지와 배색 보정",
    content: ["콘셉트에 적합한 색을 배색하고 보정하는 방법을 배워봅시다."]
  },
  {
    id: 12,
    type: SlideType.QR_ENTRY,
    title: "형성 평가 퀴즈",
    subtitle: "QR코드를 스캔하여 문제를 풀어보세요!",
    content: ["스마트폰으로 접속하여 오늘 배운 내용을 확인해봅시다."]
  },
  {
    id: 13,
    type: SlideType.CONTACT,
    title: "강사 소개",
    subtitle: "디자인 교육 문의",
    content: ["디자인 스킬 업이 필요하시다면 언제든 연락 주십시오."]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "웹/모바일 디자인 작업을 할 때 적절한 색상 모드는 무엇인가요?",
    options: ["CMYK", "RGB", "Grayscale", "Lab Color"],
    correctIndex: 1
  },
  {
    id: 2,
    question: "인쇄물 제작 시 권장되는 표준 해상도는 얼마인가요?",
    options: ["72 dpi", "96 dpi", "150 dpi", "300 dpi"],
    correctIndex: 3
  },
  {
    id: 3,
    question: "RGB 색상을 CMYK로 변환할 때 색이 탁해지는 주된 이유는?",
    options: ["모니터의 밝기가 너무 밝아서", "CMYK의 색역(Gamut)이 RGB보다 좁아서", "파일 형식이 JPG라서", "인쇄 잉크의 품질 문제 때문에"],
    correctIndex: 1
  },
  {
    id: 4,
    question: "빛의 3원색(RGB)을 모두 섞으면 무슨 색이 되나요?",
    options: ["검정색 (Black)", "흰색 (White)", "회색 (Grey)", "갈색 (Brown)"],
    correctIndex: 1
  },
  {
    id: 5,
    question: "이미지를 확대했을 때 깨지지 않는 방식(일러스트레이터)은?",
    options: ["비트맵 (Bitmap)", "래스터 (Raster)", "벡터 (Vector)", "픽셀 (Pixel)"],
    correctIndex: 2
  }
];

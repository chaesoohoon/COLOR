
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES, QUIZ_QUESTIONS } from './constants';
import { SlideType } from './types';
import ColorMixer from './components/ColorMixer';
import GamutChart from './components/GamutChart';
import Quiz from './components/Quiz';
import ComparisonTable from './components/ComparisonTable';
import ResolutionDemo from './components/ResolutionDemo';
import FileFormats from './components/FileFormats';
import SummaryList from './components/SummaryList';
import { ChevronRight, ChevronLeft, Monitor, Printer, Scaling, MousePointer2, Palette, Sparkles, Phone, Award, QrCode, Zap } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentSlideIndex];

  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'quiz') {
      setIsQuizMode(true);
    }
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(prev => prev + 1);
      setAnimKey(prev => prev + 1);
      const mainElement = document.getElementById('main-scroll-container');
      if (mainElement) mainElement.scrollTop = 0;
    }
  }, [currentSlideIndex, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
      setAnimKey(prev => prev + 1);
      const mainElement = document.getElementById('main-scroll-container');
      if (mainElement) mainElement.scrollTop = 0;
    }
  }, [currentSlideIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isQuizMode) return;
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isQuizMode]);

  const renderQRCode = () => {
    let quizUrl = '';
    try {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set('mode', 'quiz');
      quizUrl = currentUrl.toString();
    } catch (e) {
      quizUrl = window.location.href + '?mode=quiz';
    }
    const qrImageUrl = `https://quickchart.io/qr?text=${encodeURIComponent(quizUrl)}&size=300&ecLevel=Q&margin=1&dark=000000&light=ffffff`;

    return (
      <div key={animKey} className="flex flex-col items-center justify-center min-h-[50vh] space-y-8 w-full max-w-lg mx-auto py-8">
         <div className="relative group transition-all duration-500">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-[3rem] blur-xl opacity-60 transition duration-1000"></div>
            <div className="relative bg-white/10 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
               <img src={qrImageUrl} alt="Quiz QR Code" className="w-56 h-56 rounded-2xl" style={{ mixBlendMode: 'normal' }} />
            </div>
         </div>
         <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">QUIZ TIME</h3>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              스마트폰 카메라로 스캔하여<br/> 
              <span className="text-cyan-400 font-semibold">배운 내용을 확인</span>해보세요.
            </p>
         </div>
      </div>
    );
  };

  const renderBitmapVector = () => (
    <div key={animKey} className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch justify-center w-full max-w-[1280px] mx-auto py-2">
      {/* Bitmap Card */}
      <div className="flex-1 bg-slate-900/40 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-2xl flex flex-col relative group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        <div className="p-6 border-b border-white/5 bg-white/5">
           <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]"><MousePointer2 size={24}/></div>
              <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">비트맵 (Bitmap)</h3>
                  <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mt-0.5 font-semibold opacity-80">Pixel Based</p>
              </div>
           </div>
        </div>
        <div className="relative flex items-center justify-center bg-black/20 p-6 min-h-[200px]">
            <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
            <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_60px_rgba(59,130,246,0.5)]">
                    <rect x="20" y="20" width="60" height="60" fill="url(#pixels)" />
                    <pattern id="pixels" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <rect width="9" height="9" fill="#3b82f6" fillOpacity="0.8" />
                    </pattern>
                </svg>
            </div>
        </div>
        <div className="p-6 bg-white/5 backdrop-blur-md border-t border-white/5 flex-grow">
             <p className="text-slate-200 text-lg leading-relaxed font-light mb-4">
               확대하면 <span className="text-blue-300 font-semibold border-b border-blue-500/50">깨짐 현상</span> 발생.
             </p>
             <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded text-xs font-semibold">JPG</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded text-xs font-semibold">PNG</span>
             </div>
        </div>
      </div>
      {/* Vector Card */}
      <div className="flex-1 bg-slate-900/40 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-2xl flex flex-col relative group">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50"></div>
         <div className="p-6 border-b border-white/5 bg-white/5">
           <div className="flex items-center gap-4">
              <div className="p-3 bg-fuchsia-500/20 rounded-xl text-fuchsia-400 border border-fuchsia-500/20 shadow-[0_0_20px_rgba(217,70,239,0.3)]"><Scaling size={24}/></div>
              <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">벡터 (Vector)</h3>
                  <p className="text-fuchsia-400 font-mono text-xs uppercase tracking-widest mt-0.5 font-semibold opacity-80">Path Based</p>
              </div>
           </div>
        </div>
        <div className="relative flex items-center justify-center bg-black/20 p-6 min-h-[200px]">
            <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle, #d946ef 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
            <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_60px_rgba(217,70,239,0.5)]">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#d946ef" strokeWidth="3" />
                    <circle cx="20" cy="50" r="4" fill="#fff" stroke="#d946ef" strokeWidth="2" />
                    <circle cx="80" cy="50" r="4" fill="#fff" stroke="#d946ef" strokeWidth="2" />
                </svg>
            </div>
        </div>
        <div className="p-6 bg-white/5 backdrop-blur-md border-t border-white/5 flex-grow">
             <p className="text-slate-200 text-lg leading-relaxed font-light mb-4">
               무한히 확대해도 <span className="text-fuchsia-300 font-semibold border-b border-fuchsia-500/50">선명함 유지</span>.
             </p>
             <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-fuchsia-500/10 text-fuchsia-300 rounded text-xs font-semibold">AI</span>
                <span className="px-3 py-1 bg-fuchsia-500/10 text-fuchsia-300 rounded text-xs font-semibold">SVG</span>
             </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentSlide.type) {
      case SlideType.INTRO:
        return (
          <div key={animKey} className="flex flex-col items-center justify-center w-full text-center relative z-10 max-w-[1280px] mx-auto py-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative mb-8">
              <span className="inline-block py-2 px-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-sm font-semibold tracking-[0.3em] text-cyan-300 mb-6 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                DESIGN FUNDAMENTALS
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tighter leading-[0.95] mb-6 drop-shadow-2xl">
                Color<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 filter drop-shadow-[0_0_40px_rgba(217,70,239,0.4)]">Theory</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-12 px-6">
              왜 내 화면의 색과 인쇄물의 색은 다를까?<br/>
              디자이너가 꼭 알아야 할 <strong className="text-cyan-400 font-semibold">빛과 잉크의 차이</strong>
            </p>
            <div className="flex flex-wrap gap-8 md:gap-16 justify-center">
                <div className="flex flex-col items-center gap-4 group cursor-default">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-[1.5rem] bg-slate-800/50 backdrop-blur-xl border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.2)] flex items-center justify-center text-blue-400 transition-all">
                        <Monitor size={48} className="md:w-[56px] md:h-[56px]" />
                    </div>
                    <span className="text-base md:text-lg font-bold text-slate-400 tracking-[0.2em]">RGB</span>
                </div>
                <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>
                <div className="flex flex-col items-center gap-4 group cursor-default">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-[1.5rem] bg-slate-800/50 backdrop-blur-xl border border-fuchsia-500/30 shadow-[0_0_40px_rgba(217,70,239,0.2)] flex items-center justify-center text-fuchsia-400 transition-all">
                        <Printer size={48} className="md:w-[56px] md:h-[56px]" />
                    </div>
                    <span className="text-base md:text-lg font-bold text-slate-400 tracking-[0.2em]">CMYK</span>
                </div>
            </div>
          </div>
        );

      case SlideType.OBJECTIVES:
        return (
          <div key={animKey} className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto items-stretch px-4 py-2">
            {currentSlide.bulletPoints?.map((point, idx) => (
              <div key={idx} className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg">0{idx + 1}</div>
                  <div className="text-cyan-400/80">
                    {idx === 0 && <Monitor size={48} />}
                    {idx === 1 && <Palette size={48} />}
                    {idx === 2 && <Scaling size={48} />}
                  </div>
                </div>
                <div>
                    <h3 className="text-2xl text-white font-bold leading-tight mb-3">
                        {idx === 0 && "환경의 구분"}
                        {idx === 1 && "모드 설정"}
                        {idx === 2 && "변환의 이해"}
                    </h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-5"></div>
                    <p className="text-xl text-slate-200 font-light leading-relaxed break-keep">{point}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case SlideType.RESOLUTION:
        return <ResolutionDemo />;

      case SlideType.FILE_FORMATS:
        return <FileFormats />;

      case SlideType.COMPARISON:
        return <ComparisonTable />;
      
      case SlideType.RGB_DEMO:
        return <ColorMixer mode="RGB" />;

      case SlideType.CMYK_DEMO:
        return <ColorMixer mode="CMYK" />;

      case SlideType.GAMUT:
        return <GamutChart />;

      case SlideType.BITMAP_VECTOR:
        return renderBitmapVector();

      case SlideType.GOLDEN_RULES:
        return <SummaryList items={currentSlide.bulletPoints} />;

      case SlideType.NEXT_LESSON:
        return (
           <div key={animKey} className="flex flex-col items-center justify-center min-h-[50vh] w-full max-w-[1200px] mx-auto relative px-4 py-8">
              <div className="bg-slate-900/60 backdrop-blur-3xl border border-white/10 p-10 lg:p-20 rounded-[2.5rem] text-center shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden w-full">
                 <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/10 text-purple-300 text-sm font-bold border border-purple-500/20 uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
                    <Sparkles size={16} /> Coming Up Next
                 </div>
                 <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1]">
                    배색과 보정<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 filter drop-shadow-[0_0_30px_rgba(232,121,249,0.4)]">Master Class</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
                    오늘 배운 색상 이론을 바탕으로<br/><strong className="text-white font-bold">감각적인 컬러 팔레트</strong>를 구성하는 실전 테크닉을 배웁니다.
                 </p>
              </div>
           </div>
        );

      case SlideType.QR_ENTRY:
        return renderQRCode();

      case SlideType.CONTACT:
        const vCardData = `BEGIN:VCARD
VERSION:3.0
N:채;수훈;;;
FN:채수훈
ORG:The국제직업전문학교 첨단점;
TITLE:디자인 강사
TEL;TYPE=CELL:010-6274-6860
END:VCARD`;
        const contactQrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(vCardData)}&size=300&ecLevel=Q&margin=2&dark=000000&light=ffffff`;
        return (
          <div key={animKey} className="flex flex-col items-center justify-center min-h-[60vh] w-full relative z-10 px-4 max-w-[1400px] mx-auto py-8">
            
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-cyan-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

            <div className="w-full relative z-10 flex flex-col items-center space-y-10 md:space-y-16">
                
                {/* 1. Impact Headline */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-2xl text-cyan-300 font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_30px_rgba(6,182,212,0.2)] text-sm animate-pop-in">
                        <Zap size={18} className="fill-cyan-300" /> Professional Design Class
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 animate-text-shimmer leading-[1.2] tracking-tight drop-shadow-xl">
                        디자인 스킬 업이<br/>필요하시다면?
                    </h2>
                </div>

                {/* 2. Main Name Card */}
                <div className="w-full max-w-5xl relative group">
                     {/* Outer Glow Ring */}
                     <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-[3rem] opacity-70 blur-md animate-float-fast"></div>
                     
                     <div className="relative bg-slate-950/80 backdrop-blur-3xl rounded-[2.9rem] border border-white/10 p-8 md:p-14 overflow-hidden">
                        {/* Shimmer Overlay */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                            
                            {/* Left: Info */}
                            <div className="flex-1 text-center lg:text-left space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-400 tracking-wide uppercase">The국제직업전문학교 첨단점</h3>
                                
                                <div className="space-y-2">
                                    <p className="text-2xl text-slate-300 font-medium">디자인 강사</p>
                                    {/* Name Slam Animation */}
                                    <div className="relative inline-block">
                                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter animate-slam-in" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                                            채수훈
                                        </h1>
                                        {/* Underline Decoration */}
                                        <div className="absolute -bottom-2 left-0 w-full h-2 md:h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Interactive Phone Button */}
                                <div className="pt-6">
                                    <a href="tel:010-6274-6860" className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 rounded-2xl border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300">
                                        <div className="p-3 bg-cyan-500 rounded-xl text-white shadow-lg">
                                            <Phone size={32} fill="currentColor" />
                                        </div>
                                        <span className="text-3xl md:text-5xl font-bold text-white tracking-tighter text-cyan-50">010 6274 6860</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right: QR Code */}
                            <div className="shrink-0 relative group/qr">
                                <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                                    <img src={contactQrUrl} alt="Contact vCard QR" className="w-40 h-40 md:w-56 md:h-56 mix-blend-multiply" />
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap border border-white/20 shadow-xl flex items-center gap-2">
                                        <QrCode size={14} /> 연락처 자동 저장
                                    </div>
                                </div>
                            </div>

                        </div>
                     </div>
                </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isQuizMode) {
    return (
      <div className="fixed inset-0 bg-[#020617] text-slate-100 flex flex-col z-50 overflow-hidden h-[100dvh]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-slate-900 pointer-events-none"></div>
        <header className="flex-none h-16 flex items-center justify-between px-4 border-b border-white/10 bg-slate-900/80 backdrop-blur-md relative z-10">
           <button onClick={() => setIsQuizMode(false)} className="p-2 text-slate-400 hover:text-white rounded-full active:bg-white/10 transition-colors"><ChevronLeft size={24} /></button>
           <span className="font-bold text-lg text-white">Quiz Mode</span>
           <div className="w-10"></div>
        </header>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 pb-32">
          <Quiz questions={QUIZ_QUESTIONS} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] h-16 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl z-50 shadow-2xl flex items-center justify-between px-6 transition-all duration-300">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]"><Palette size={20} className="text-white" /></div>
            <div><h1 className="font-bold text-xl tracking-tight text-white leading-tight">COLOR THEORY</h1><span className="text-[10px] text-cyan-400 font-bold uppercase tracking-[0.2em] hidden sm:block">Interactive Lesson</span></div>
        </div>
        {currentSlide.type !== SlideType.CONTACT && (
            <div className="hidden 2xl:flex gap-2 bg-black/30 px-6 py-2.5 rounded-full border border-white/5 backdrop-blur-sm">
                {SLIDES.map((slide, i) => (
                    <div key={i} className={`h-2 rounded-full transition-all duration-500 ${i === currentSlideIndex ? 'w-10 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]' : 'w-2 bg-white/10'}`}></div>
                ))}
            </div>
        )}
        <div className="font-mono text-base text-slate-400">
            <span className="text-white font-bold">{String(currentSlideIndex + 1).padStart(2, '0')}</span><span className="opacity-30 mx-2">/</span><span>{String(totalSlides).padStart(2, '0')}</span>
        </div>
      </header>

      <main id="main-scroll-container" className="flex-1 flex flex-col pt-24 pb-24 px-4 md:px-6 w-full h-full relative z-10 overflow-y-auto overflow-x-hidden custom-scrollbar scroll-smooth">
         {currentSlide.type !== SlideType.INTRO && currentSlide.type !== SlideType.NEXT_LESSON && currentSlide.type !== SlideType.CONTACT && (
             <div className="text-center mt-8 mb-6 flex-shrink-0">
                 <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-xl tracking-tight leading-tight">{currentSlide.title}</h2>
                 {currentSlide.subtitle && <p className="text-slate-400 text-lg md:text-xl font-light tracking-wide">{currentSlide.subtitle}</p>}
             </div>
         )}
         <div className="flex-1 relative flex flex-col justify-center w-full min-h-0">
            {renderContent()}
         </div>
      </main>

      <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] h-16 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl z-50 shadow-2xl flex items-center justify-between px-6">
        <button onClick={prevSlide} disabled={currentSlideIndex === 0} className="flex items-center gap-3 px-6 py-3 rounded-xl hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all text-slate-300 font-medium group text-base">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /><span className="hidden md:inline">Previous</span>
        </button>
        <div className="flex-1 text-center hidden md:block text-slate-500 text-[10px] uppercase tracking-[0.25em] font-bold">Use Arrow Keys or Spacebar</div>
        <button onClick={nextSlide} disabled={currentSlideIndex === totalSlides - 1} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-slate-950 hover:bg-cyan-50 disabled:opacity-30 disabled:bg-slate-700 disabled:text-slate-400 transition-all font-bold shadow-lg shadow-white/10 group transform hover:-translate-y-0.5 text-base">
            <span className="hidden md:inline">Next Slide</span><ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </footer>
    </div>
  );
};

export default App;

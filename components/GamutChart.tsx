
import React from 'react';

const GamutChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[1280px] mx-auto px-4 py-4">
       <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full justify-center">
           
           {/* Chart Visual - Glass Container */}
           <div className="relative w-full max-w-[400px] aspect-square bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 lg:p-10 flex items-center justify-center group shrink-0">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] rounded-[2.5rem] pointer-events-none"></div>

              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible z-10">
                <defs>
                   <linearGradient id="spectrum" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0000ff" />
                      <stop offset="20%" stopColor="#00ffff" />
                      <stop offset="40%" stopColor="#00ff00" />
                      <stop offset="60%" stopColor="#ffff00" />
                      <stop offset="80%" stopColor="#ff0000" />
                      <stop offset="100%" stopColor="#ff00ff" />
                   </linearGradient>
                   <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                   </filter>
                </defs>
                
                {/* The Horseshoe Shape */}
                <path 
                    d="M 15,85 C 10,20 25,5 50,5 C 80,10 90,85 90,85 Z" 
                    fill="url(#spectrum)" 
                    opacity="0.15" 
                    stroke="url(#spectrum)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    filter="url(#glow)"
                />
                
                {/* 2. RGB Gamut (Triangle) */}
                <polygon 
                    points="25,75 50,15 80,75" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="2"
                    className="drop-shadow-[0_0_15px_rgba(59,130,246,1)]"
                />
                <circle cx="25" cy="75" r="2.5" fill="#3b82f6" />
                <circle cx="50" cy="15" r="2.5" fill="#3b82f6" />
                <circle cx="80" cy="75" r="2.5" fill="#3b82f6" />
                <text x="84" y="75" textAnchor="start" fill="#3b82f6" fontSize="5" fontWeight="bold" dy="1">RGB</text>

                {/* 3. CMYK Gamut (Smaller Polygon) */}
                <path 
                    d="M 35,70 L 45,30 L 60,35 L 65,70 L 50,65 Z" 
                    fill="rgba(236, 72, 153, 0.15)" 
                    stroke="#ec4899" 
                    strokeWidth="2" 
                    strokeDasharray="3 2"
                />
                <text x="33" y="70" textAnchor="end" fill="#ec4899" fontSize="5" fontWeight="bold" dy="1">CMYK</text>
                
                {/* 4. Out of Gamut Point */}
                <g className="origin-center">
                    <circle cx="55" cy="20" r="2.5" fill="#ef4444" stroke="#fff" strokeWidth="1" />
                    <line x1="55" y1="20" x2="68" y2="15" stroke="#ef4444" strokeWidth="0.5" />
                    <text x="69" y="15" textAnchor="start" fill="#ef4444" fontSize="5" fontWeight="bold">Out of Gamut</text>
                </g>
              </svg>
           </div>

           {/* Explanation Text */}
           <div className="flex-1 max-w-lg space-y-6">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-none tracking-tight">
                <span className="text-cyan-400 block mb-2 text-2xl font-bold">Color Gamut</span>
                색을 표현하는 범위
              </h3>
              
              <div className="space-y-4">
                <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-[2rem] border border-blue-500/30 shadow-lg">
                    <h4 className="text-blue-400 font-bold text-xl mb-2 flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div> RGB (화면)
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-base font-light">
                        삼각형 영역. 빛을 사용하므로 <strong className="text-white font-semibold">형광색이나 밝은 원색</strong>까지 표현 가능합니다.
                    </p>
                </div>
                
                <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-[2rem] border border-pink-500/30 shadow-lg">
                    <h4 className="text-pink-400 font-bold text-xl mb-2 flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.8)]"></div> CMYK (인쇄)
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-base font-light">
                        점선 영역. 잉크의 한계로 인해 <strong className="text-white font-semibold">표현 범위가 좁습니다.</strong> 화면의 선명한 색이 인쇄 시 탁하게 나오는 이유입니다.
                    </p>
                </div>
              </div>

               <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-[1.5rem] flex gap-3 items-start backdrop-blur-md">
                  <span className="text-2xl">⚠️</span>
                  <p className="text-yellow-100 text-base leading-relaxed">
                      <strong>Tip:</strong> 디자인 작업 전, 반드시 <span className="text-yellow-200 font-semibold">작업 목적에 맞는 색상 모드</span>를 설정하세요.
                  </p>
               </div>
           </div>
       </div>
    </div>
  );
};

export default GamutChart;

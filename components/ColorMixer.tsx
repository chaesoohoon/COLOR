import React, { useState, useEffect } from 'react';

interface ColorMixerProps {
  mode: 'RGB' | 'CMYK';
}

const ColorMixer: React.FC<ColorMixerProps> = ({ mode }) => {
  // RGB State (0-255)
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  // CMYK State (0-100)
  const [c, setC] = useState(0);
  const [m, setM] = useState(0);
  const [y, setY] = useState(0);
  const [k, setK] = useState(0);

  // Converted Color for Display
  const [displayColor, setDisplayColor] = useState('black');

  useEffect(() => {
    if (mode === 'RGB') {
      setDisplayColor(`rgb(${r}, ${g}, ${b})`);
    } else {
      const rVal = 255 * (1 - c / 100) * (1 - k / 100);
      const gVal = 255 * (1 - m / 100) * (1 - k / 100);
      const bVal = 255 * (1 - y / 100) * (1 - k / 100);
      setDisplayColor(`rgb(${rVal}, ${gVal}, ${bVal})`);
    }
  }, [r, g, b, c, m, y, k, mode]);

  useEffect(() => {
    if (mode === 'RGB') {
      setR(0); setG(0); setB(0);
    } else {
      setC(0); setM(0); setY(0); setK(0);
    }
  }, [mode]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch justify-center w-full max-w-[1280px] mx-auto px-4 py-2">
      
      {/* Controls Panel */}
      <div className="flex-1 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-2xl flex flex-col justify-center relative overflow-hidden min-h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
        
        <div className="mb-8 relative z-10">
            <div className="inline-block px-3 py-1.5 rounded-full bg-white/5 text-[10px] font-bold text-slate-300 mb-3 border border-white/10 tracking-[0.2em]">
                {mode === 'RGB' ? 'ADDITIVE MIXING' : 'SUBTRACTIVE MIXING'}
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
            {mode === 'RGB' ? '빛의 3원색' : '색의 4원색'}
            </h3>
            <p className="text-slate-400 text-base leading-relaxed font-light">
            {mode === 'RGB' 
                ? '빛은 섞을수록 밝아져 흰색이 됩니다.' 
                : '잉크는 섞을수록 어두워져 검정이 됩니다.'}
            </p>
        </div>
        
        <div className="space-y-6 flex-1 flex flex-col justify-center relative z-10">
          {mode === 'RGB' ? (
            <>
              {/* Red */}
              <div className="group">
                <div className="flex justify-between text-base font-bold mb-2">
                  <span className="text-red-400 tracking-[0.15em]">RED</span>
                  <span className="font-mono text-slate-300 text-lg bg-black/20 px-3 py-0.5 rounded-lg">{r}</span>
                </div>
                <input type="range" min="0" max="255" value={r} onChange={(e) => setR(Number(e.target.value))} 
                  className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer accent-red-500 hover:accent-red-400 transition-all ring-2 ring-transparent focus:ring-red-500/50 shadow-inner" />
              </div>
              {/* Green */}
              <div className="group">
                <div className="flex justify-between text-base font-bold mb-2">
                  <span className="text-green-400 tracking-[0.15em]">GREEN</span>
                  <span className="font-mono text-slate-300 text-lg bg-black/20 px-3 py-0.5 rounded-lg">{g}</span>
                </div>
                <input type="range" min="0" max="255" value={g} onChange={(e) => setG(Number(e.target.value))} 
                  className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer accent-green-500 hover:accent-green-400 transition-all ring-2 ring-transparent focus:ring-green-500/50 shadow-inner" />
              </div>
              {/* Blue */}
              <div className="group">
                <div className="flex justify-between text-base font-bold mb-2">
                  <span className="text-blue-400 tracking-[0.15em]">BLUE</span>
                  <span className="font-mono text-slate-300 text-lg bg-black/20 px-3 py-0.5 rounded-lg">{b}</span>
                </div>
                <input type="range" min="0" max="255" value={b} onChange={(e) => setB(Number(e.target.value))} 
                  className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all ring-2 ring-transparent focus:ring-blue-500/50 shadow-inner" />
              </div>
            </>
          ) : (
             <>
             {/* Cyan */}
             <div className="group">
               <div className="flex justify-between text-base font-bold mb-2">
                 <span className="text-cyan-400 tracking-[0.15em]">CYAN</span>
                 <span className="font-mono text-slate-300 text-lg bg-black/20 px-3 py-0.5 rounded-lg">{c}%</span>
               </div>
               <input type="range" min="0" max="100" value={c} onChange={(e) => setC(Number(e.target.value))} 
                 className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-400 hover:accent-cyan-300 transition-all ring-2 ring-transparent focus:ring-cyan-400/50 shadow-inner" />
             </div>
             {/* Magenta */}
             <div className="group">
               <div className="flex justify-between text-base font-bold mb-2">
                 <span className="text-fuchsia-500 tracking-[0.15em]">MAGENTA</span>
                 <span className="font-mono text-slate-300 text-lg bg-black/20 px-3 py-0.5 rounded-lg">{m}%</span>
               </div>
               <input type="range" min="0" max="100" value={m} onChange={(e) => setM(Number(e.target.value))} 
                 className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer accent-fuchsia-500 hover:accent-fuchsia-400 transition-all ring-2 ring-transparent focus:ring-fuchsia-500/50 shadow-inner" />
             </div>
             {/* Yellow */}
             <div className="group">
               <div className="flex justify-between text-base font-bold mb-2">
                 <span className="text-yellow-400 tracking-[0.15em]">YELLOW</span>
                 <span className="font-mono text-slate-300 text-lg bg-black/20 px-3 py-0.5 rounded-lg">{y}%</span>
               </div>
               <input type="range" min="0" max="100" value={y} onChange={(e) => setY(Number(e.target.value))} 
                 className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer accent-yellow-400 hover:accent-yellow-300 transition-all ring-2 ring-transparent focus:ring-yellow-400/50 shadow-inner" />
             </div>
             {/* Black */}
             <div className="group">
               <div className="flex justify-between text-base font-bold mb-2">
                 <span className="text-slate-400 tracking-[0.15em]">KEY (BLACK)</span>
                 <span className="font-mono text-slate-300 text-lg bg-black/20 px-3 py-0.5 rounded-lg">{k}%</span>
               </div>
               <input type="range" min="0" max="100" value={k} onChange={(e) => setK(Number(e.target.value))} 
                 className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer accent-slate-200 hover:accent-white transition-all ring-2 ring-transparent focus:ring-slate-500/50 shadow-inner" />
             </div>
           </>
          )}
        </div>
      </div>

      {/* Visualizer Panel */}
      <div className="flex-1 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 lg:p-10 flex flex-col items-center justify-center relative shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] min-h-[400px]">
         {/* Background Glow */}
         <div 
            className="absolute inset-0 opacity-30 transition-colors duration-300 blur-3xl rounded-[2rem]"
            style={{ backgroundColor: displayColor }}
         ></div>

         <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8">
            <div 
                className="w-56 h-56 lg:w-80 lg:h-80 rounded-full shadow-[0_0_80px_rgba(0,0,0,0.8)] transition-colors duration-100 border-8 border-slate-900/50 flex items-center justify-center relative overflow-hidden ring-4 ring-white/5"
                style={{ backgroundColor: displayColor }}
            >
                {/* Glossy Overlay */}
                <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-t-full"></div>
                
                {/* Mode Label */}
                <span className="font-mono font-bold text-white/40 mix-blend-difference text-3xl tracking-[0.3em]">
                    {mode}
                </span>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-2xl min-w-[250px] text-center">
                 <p className="font-mono text-xl lg:text-2xl text-white tracking-widest font-bold drop-shadow-md break-all">
                     {mode === 'RGB' 
                        ? `rgb(${r}, ${g}, ${b})` 
                        : `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`
                    }
                 </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ColorMixer;
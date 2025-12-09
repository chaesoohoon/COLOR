
import React from 'react';
import { Monitor, Printer } from 'lucide-react';

const ResolutionDemo: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 py-2 flex flex-col md:flex-row gap-8 items-stretch justify-center">
      {/* Low Resolution (Screen) */}
      <div className="flex-1 bg-slate-900/40 backdrop-blur-2xl border border-cyan-500/30 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70"></div>
        
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
          <Monitor size={32} />
        </div>

        <h3 className="text-3xl font-bold text-white mb-2">Screen (Web)</h3>
        <div className="text-cyan-400 font-bold font-mono text-xl mb-6 bg-cyan-500/10 px-4 py-1 rounded-lg border border-cyan-500/20">72 PPI</div>

        <div className="relative w-48 h-48 bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-600 shadow-inner mb-6 transform scale-105 transition-transform duration-500">
           {/* Big Pixels Simulation */}
           <div className="w-full h-full grid grid-cols-10 grid-rows-10">
              {[...Array(100)].map((_, i) => (
                <div key={i} className={`
                  ${(Math.floor(i/10) + i%10) % 2 === 0 ? 'bg-cyan-500' : 'bg-slate-900'}
                  opacity-80 border-[0.5px] border-black/20
                `}></div>
              ))}
           </div>
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Low Density</span>
           </div>
        </div>

        <p className="text-slate-300 leading-relaxed max-w-sm font-light">
          모니터는 빛으로 쏘기 때문에 적은 점(Pixel)으로도 선명해 보입니다. 
          <strong className="text-cyan-300 font-semibold block mt-2">웹 로딩 속도를 위해 가볍습니다.</strong>
        </p>
      </div>

      {/* High Resolution (Print) */}
      <div className="flex-1 bg-slate-900/40 backdrop-blur-2xl border border-fuchsia-500/30 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-70"></div>
        
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/20 shadow-[0_0_30px_rgba(217,70,239,0.3)]">
          <Printer size={32} />
        </div>

        <h3 className="text-3xl font-bold text-white mb-2">Print (Paper)</h3>
        <div className="text-fuchsia-400 font-bold font-mono text-xl mb-6 bg-fuchsia-500/10 px-4 py-1 rounded-lg border border-fuchsia-500/20">300 DPI</div>

        <div className="relative w-48 h-48 bg-white rounded-xl overflow-hidden border-2 border-slate-600 shadow-inner mb-6 transform scale-105 transition-transform duration-500">
           {/* Small Dots Simulation */}
           <div className="w-full h-full grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)]">
              {[...Array(1600)].map((_, i) => (
                <div key={i} className={`
                  ${(Math.floor(i/40) + i%40) % 2 === 0 ? 'bg-fuchsia-600' : 'bg-white'}
                `}></div>
              ))}
           </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">High Density</span>
           </div>
        </div>

        <p className="text-slate-300 leading-relaxed max-w-sm font-light">
          종이는 잉크가 번지기 때문에 훨씬 많은 점(Dot)이 필요합니다.
          <strong className="text-fuchsia-300 font-semibold block mt-2">해상도가 낮으면 이미지가 뭉개집니다.</strong>
        </p>
      </div>
    </div>
  );
};

export default ResolutionDemo;

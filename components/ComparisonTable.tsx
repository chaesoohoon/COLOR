
import React from 'react';
import { Smartphone, Printer } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-center px-4 py-2">
      {/* Header Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Screen/RGB Column */}
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-cyan-500/30 rounded-[2rem] p-8 flex flex-col relative group shadow-2xl">
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
                <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    <Smartphone size={32} />
                </div>
                <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">Web / Mobile</h3>
                    <p className="text-cyan-400 font-mono text-xs mt-1 font-bold tracking-[0.2em]">SCREEN</p>
                </div>
            </div>

            <div className="space-y-4 flex-1">
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-[0.15em] mb-1">Color Mode</div>
                    <div className="text-2xl font-bold text-white">RGB</div>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-[0.15em] mb-1">Resolution</div>
                    <div className="text-2xl font-bold text-white">72 PPI</div>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-[0.15em] mb-1">Image Structure</div>
                    <div className="text-2xl font-bold text-white">Bitmap / Pixel</div>
                </div>
                 <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-[0.15em] mb-2">Formats</div>
                    <div className="flex gap-2 flex-wrap">
                        <span className="badge-screen">JPG</span>
                        <span className="badge-screen">PNG</span>
                        <span className="badge-screen">GIF</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Print/CMYK Column */}
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-fuchsia-500/30 rounded-[2rem] p-8 flex flex-col relative group shadow-2xl">
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
                <div className="p-3 bg-fuchsia-500/20 rounded-xl text-fuchsia-400 border border-fuchsia-500/20 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
                    <Printer size={32} />
                </div>
                <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">Print / Editorial</h3>
                    <p className="text-fuchsia-400 font-mono text-xs mt-1 font-bold tracking-[0.2em]">PHYSICAL</p>
                </div>
            </div>

            <div className="space-y-4 flex-1">
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-[0.15em] mb-1">Color Mode</div>
                    <div className="text-2xl font-bold text-white">CMYK</div>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-[0.15em] mb-1">Resolution</div>
                    <div className="text-2xl font-bold text-white">300 DPI</div>
                </div>
                 <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-[0.15em] mb-1">Image Structure</div>
                    <div className="text-2xl font-bold text-white">Vector / High-Res</div>
                </div>
                 <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-[0.15em] mb-2">Formats</div>
                    <div className="flex gap-2 flex-wrap">
                        <span className="badge-print">AI</span>
                        <span className="badge-print">PDF</span>
                        <span className="badge-print">TIFF</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <style>{`
        .badge-screen { @apply px-2 py-1 bg-cyan-900/30 text-cyan-300 rounded text-sm font-mono border border-cyan-500/20; }
        .badge-print { @apply px-2 py-1 bg-fuchsia-900/30 text-fuchsia-300 rounded text-sm font-mono border border-fuchsia-500/20; }
      `}</style>
    </div>
  );
};

export default ComparisonTable;


import React from 'react';
import { CheckCircle2, ShieldCheck, AlertTriangle } from 'lucide-react';

interface SummaryListProps {
    items?: string[];
}

const SummaryList: React.FC<SummaryListProps> = ({ items }) => {
  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 py-2">
      <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-2xl border border-yellow-500/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_80px_rgba(234,179,8,0.15)] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="flex items-center gap-4 mb-10 border-b border-yellow-500/20 pb-6">
            <div className="p-3 bg-yellow-500/20 rounded-2xl text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                <ShieldCheck size={40} />
            </div>
            <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">DESIGNER'S CHECKLIST</h3>
                <p className="text-yellow-400/80 font-mono text-sm uppercase tracking-widest mt-1 font-bold">Don't forget these before print</p>
            </div>
        </div>

        <div className="space-y-6">
            {items?.map((item, idx) => (
                <div key={idx} className="flex items-start gap-5">
                    <div className="mt-1 shrink-0">
                         <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center shadow-lg">
                             <CheckCircle2 size={18} className="text-green-400" />
                         </div>
                    </div>
                    <div className="flex-1 bg-slate-900/40 border border-white/5 rounded-2xl p-5 shadow-sm">
                        <p className="text-xl md:text-2xl text-slate-100 font-medium leading-snug">
                            {item}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-10 p-5 rounded-2xl bg-red-500/10 border border-red-500/20 flex gap-4 items-center">
             <AlertTriangle className="text-red-400 shrink-0" size={24} />
             <p className="text-red-200 text-sm md:text-base font-light">
                 <strong>주의:</strong> 실수로 RGB 모드로 인쇄를 맡기면, 화면보다 훨씬 어둡고 탁하게 출력될 수 있습니다. (사고 예방 필수!)
             </p>
        </div>

      </div>
    </div>
  );
};

export default SummaryList;

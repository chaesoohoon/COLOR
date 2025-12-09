
import React from 'react';
import { Image, FileType, Layers, PenTool } from 'lucide-react';

const FileFormats: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 py-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
       
       {/* Screen Formats */}
       <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
             <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
             화면용 포맷 (Screen)
          </h3>
          <div className="space-y-4">
             <div className="bg-white/5 border border-cyan-500/20 p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center text-cyan-400 font-bold shrink-0">JPG</div>
                <div>
                    <h4 className="text-white font-bold text-lg">JPG / JPEG</h4>
                    <p className="text-slate-400 text-sm">사진 표현에 최적, 배경 투명 불가, 손실 압축</p>
                </div>
             </div>
             <div className="bg-white/5 border border-cyan-500/20 p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center text-cyan-400 font-bold shrink-0">PNG</div>
                <div>
                    <h4 className="text-white font-bold text-lg">PNG</h4>
                    <p className="text-slate-400 text-sm">배경 투명 가능, 무손실 압축, 웹 UI/아이콘에 적합</p>
                </div>
             </div>
             <div className="bg-white/5 border border-cyan-500/20 p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center text-cyan-400 font-bold shrink-0">GIF</div>
                <div>
                    <h4 className="text-white font-bold text-lg">GIF</h4>
                    <p className="text-slate-400 text-sm">간단한 애니메이션(움짤), 256색 제한</p>
                </div>
             </div>
          </div>
       </div>

       {/* Print Formats */}
       <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
             <span className="w-2 h-8 bg-fuchsia-500 rounded-full"></span>
             인쇄용 포맷 (Print)
          </h3>
          <div className="space-y-4">
             <div className="bg-white/5 border border-fuchsia-500/20 p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-fuchsia-900/50 rounded-lg flex items-center justify-center text-fuchsia-400 font-bold shrink-0">AI</div>
                <div>
                    <h4 className="text-white font-bold text-lg">AI (Illustrator)</h4>
                    <p className="text-slate-400 text-sm">벡터 원본 파일, 로고/캐릭터 제작, 수정 가능</p>
                </div>
             </div>
             <div className="bg-white/5 border border-fuchsia-500/20 p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-fuchsia-900/50 rounded-lg flex items-center justify-center text-fuchsia-400 font-bold shrink-0">PDF</div>
                <div>
                    <h4 className="text-white font-bold text-lg">PDF</h4>
                    <p className="text-slate-400 text-sm">인쇄소 전달 표준 포맷, 폰트/이미지 포함</p>
                </div>
             </div>
             <div className="bg-white/5 border border-fuchsia-500/20 p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-fuchsia-900/50 rounded-lg flex items-center justify-center text-fuchsia-400 font-bold shrink-0">TIFF</div>
                <div>
                    <h4 className="text-white font-bold text-lg">TIFF</h4>
                    <p className="text-slate-400 text-sm">초고화질 비손실 이미지, 대형 출력물에 사용</p>
                </div>
             </div>
          </div>
       </div>

    </div>
  );
};

export default FileFormats;

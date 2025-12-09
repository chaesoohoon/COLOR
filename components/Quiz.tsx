import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete?: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === currentQuestion.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto py-8 px-4">
        <div className="bg-slate-900/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl text-center w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
          
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30 animate-float">
            <Trophy className="text-white w-12 h-12" />
          </div>
          
          <h2 className="text-3xl font-bold mb-2 text-white">Quiz Completed!</h2>
          <p className="text-slate-400 mb-8">수고하셨습니다</p>
          
          <div className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
            {score}<span className="text-3xl text-slate-600">/{questions.length}</span>
          </div>
          
          <p className="text-slate-300 mb-8 text-lg font-medium">
            {score === questions.length ? "완벽합니다! 개념 마스터 🎓" : "복습이 조금 더 필요해요 💪"}
          </p>
          
          <button 
            onClick={resetQuiz}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all font-bold text-lg border border-white/5"
          >
            <RefreshCw size={20} /> 다시 풀기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-4">
      <div className="flex justify-between items-end px-2">
        <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider">Question {currentQuestionIndex + 1}</span>
        <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">Score: {score}</span>
      </div>

      <div className="w-full bg-slate-800/50 h-2 rounded-full overflow-hidden mb-2">
        <div 
          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full transition-all duration-500 ease-out"
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="bg-slate-900/60 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold mb-6 leading-snug text-white break-keep">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            let itemClass = "w-full p-4 rounded-xl text-left transition-all border relative overflow-hidden group ";
            
            if (isAnswered) {
              if (idx === currentQuestion.correctIndex) {
                itemClass += "border-green-500 bg-green-500/20 text-green-100 font-bold";
              } else if (idx === selectedOption) {
                itemClass += "border-red-500 bg-red-500/20 text-red-100";
              } else {
                itemClass += "border-transparent bg-white/5 opacity-40";
              }
            } else {
              itemClass += "border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-[1.01] active:scale-[0.99]";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                className={itemClass}
                disabled={isAnswered}
              >
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-base md:text-lg leading-tight">{option}</span>
                  {isAnswered && idx === currentQuestion.correctIndex && <CheckCircle className="text-green-400 shrink-0 ml-2 w-6 h-6" />}
                  {isAnswered && idx === selectedOption && idx !== currentQuestion.correctIndex && <XCircle className="text-red-400 shrink-0 ml-2 w-6 h-6" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 min-h-[3.5rem]">
        {isAnswered && (
          <button
            onClick={handleNext}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/30 text-lg flex items-center justify-center gap-2 animate-bounce-subtle"
          >
            {currentQuestionIndex < questions.length - 1 ? "Next Question" : "View Results"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
'use client';

import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number; // indeks dari jawaban yang benar (0-based)
  explanation?: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  title?: string;
}

const Quiz: React.FC<QuizProps> = ({ 
  questions,
  title = 'Quiz' 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.answer;
  
  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === currentQuestion.answer) {
      setCorrectAnswers(prev => prev + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };
  
  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectAnswers(0);
    setShowResults(false);
  };
  
  const percentage = Math.round((correctAnswers / questions.length) * 100);
  
  return (
    <div className="my-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
      {!showResults ? (
        <>
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
            </span>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-4">{currentQuestion.question}</h4>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full text-left p-4 rounded-lg border transition-all duration-200",
                    isAnswered && index === currentQuestion.answer
                      ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                      : isAnswered && index === selectedOption
                        ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
                        : selectedOption === index
                          ? "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800"
                          : "bg-white border-slate-200 hover:border-blue-300 dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-700",
                  )}
                >
                  <div className="flex justify-between items-center">
                    <span>{option}</span>
                    {isAnswered && (
                      index === currentQuestion.answer ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : index === selectedOption ? (
                        <XCircle className="h-5 w-5 text-red-500" />
                      ) : null
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {isAnswered && currentQuestion.explanation && (
            <div className={cn(
              "p-4 mb-6 rounded-lg",
              isCorrect
                ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300"
            )}>
              <p className="text-sm">{currentQuestion.explanation}</p>
            </div>
          )}
          
          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={!isAnswered}
              className={cn(
                "px-6 py-2 rounded-lg font-medium transition-colors",
                isAnswered
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-slate-200 text-slate-500 cursor-not-allowed dark:bg-slate-700 dark:text-slate-400"
              )}
            >
              {currentQuestionIndex < questions.length - 1 ? "Selanjutnya" : "Lihat Hasil"}
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Hasil Quiz</h3>
          
          <div className="mb-6">
            <div className="inline-flex items-center justify-center h-32 w-32 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
              <span className="text-3xl font-bold">
                {percentage < 60 ? "😢" : percentage < 80 ? "🙂" : "🎉"}
              </span>
            </div>
            <h4 className="text-2xl font-bold mb-1">
              {percentage}%
            </h4>
            <p className="text-slate-600 dark:text-slate-400">
              {correctAnswers} dari {questions.length} jawaban benar
            </p>
          </div>
          
          <div className="mb-4">
            {percentage < 60 ? (
              <p className="text-orange-600 dark:text-orange-400">
                Jangan menyerah! Coba lagi dan pelajari materinya dengan lebih teliti.
              </p>
            ) : percentage < 80 ? (
              <p className="text-blue-600 dark:text-blue-400">
                Bagus! Namun masih ada beberapa konsep yang perlu Anda pelajari lagi.
              </p>
            ) : (
              <p className="text-green-600 dark:text-green-400">
                Luar biasa! Anda telah menguasai materi dengan sangat baik.
              </p>
            )}
          </div>
          
          <button
            onClick={handleReset}
            className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Coba Lagi
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz; 
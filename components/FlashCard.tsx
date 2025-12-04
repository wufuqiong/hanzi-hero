import React from 'react';
import { CharacterDetailResponse } from '../types';
import { LoadingSpinner } from './LoadingSpinner';

interface FlashCardProps {
  character: string;
  details: CharacterDetailResponse | null;
  isLoading: boolean;
  onPlayAudio: (text: string) => void;
  isAudioLoading: boolean;
}

export const FlashCard: React.FC<FlashCardProps> = ({ 
  character, 
  details, 
  isLoading, 
  onPlayAudio,
  isAudioLoading 
}) => {
  return (
    <div className="bg-white rounded-[2rem] shadow-xl p-6 max-w-md w-full mx-auto transform transition-all border-4 border-sky-100 relative overflow-hidden">
       {/* Background Decoration */}
      <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-yellow-100 rounded-full opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 bg-green-100 rounded-full opacity-50 z-0 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Character Display */}
        <div className="text-[9rem] leading-none hanzi-font text-sky-600 mb-2 drop-shadow-sm select-none">
          {character}
        </div>

        {/* Details Section */}
        {isLoading ? (
          <div className="h-40 flex flex-col items-center justify-center space-y-4">
            <LoadingSpinner />
            <p className="text-slate-400 text-sm animate-pulse">正在加载...</p>
          </div>
        ) : details ? (
          <div className="w-full text-center space-y-6 animate-fade-in-up">
            
            {/* Pinyin and Audio - Compact Row */}
            <div className="flex items-center justify-center gap-3">
              <div className="text-4xl font-bold text-slate-700">{details.pinyin}</div>
              
              <button 
                onClick={() => onPlayAudio(character)}
                disabled={isAudioLoading}
                className="w-10 h-10 flex items-center justify-center bg-sky-100 hover:bg-sky-200 text-sky-600 rounded-full transition-all active:scale-95 shadow-sm"
                title="Listen"
              >
                {isAudioLoading ? (
                  <span className="w-4 h-4 border-2 border-sky-500 border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Phrases (词语) Section */}
            {details.phrases && details.phrases.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {details.phrases.map((phrase, idx) => (
                  <button
                    key={idx}
                    onClick={() => onPlayAudio(phrase)}
                    className="bg-yellow-50 text-yellow-800 border border-yellow-200 px-3 py-1 rounded-lg text-lg font-medium hover:bg-yellow-100 transition-colors"
                  >
                    {phrase}
                  </button>
                ))}
              </div>
            )}

            {/* Sentence Card */}
            <div className="bg-slate-50 rounded-2xl p-4 mt-4 border border-slate-100">
               <p className="text-xl text-slate-700 mb-2 font-medium leading-relaxed">{details.sentence}</p>
               <button 
                onClick={() => onPlayAudio(details.sentence)}
                className="text-xs text-sky-500 font-bold hover:text-sky-600 uppercase tracking-wide flex items-center justify-center gap-1 mx-auto"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 听句子
               </button>
            </div>
          </div>
        ) : (
          <div className="text-red-400">Could not load details.</div>
        )}
      </div>
    </div>
  );
};
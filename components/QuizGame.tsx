import React, { useState, useEffect, useCallback } from 'react';
import { CharacterDetailResponse } from '../types';

interface QuizGameProps {
  characters: string[];
  // A map of details we already know (cached)
  detailsCache: Record<string, CharacterDetailResponse>;
  onFinish: () => void;
  onPlayAudio: (text: string) => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({ characters, detailsCache, onFinish, onPlayAudio }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'wrong'>('none');
  const [score, setScore] = useState(0);

  const currentCharacter = characters[currentIndex];
  const currentDetails = detailsCache[currentCharacter];

  const generateOptions = useCallback(() => {
    // Correct answer
    const opts = [currentCharacter];
    // Add 3 random distractors
    while (opts.length < 4) {
      const randomChar = characters[Math.floor(Math.random() * characters.length)];
      if (!opts.includes(randomChar)) {
        opts.push(randomChar);
      }
    }
    // Shuffle
    return opts.sort(() => Math.random() - 0.5);
  }, [characters, currentCharacter]);

  useEffect(() => {
    setOptions(generateOptions());
    setFeedback('none');
  }, [currentIndex, generateOptions]);

  const handleOptionClick = (char: string) => {
    if (feedback !== 'none') return; // Prevent double clicks

    if (char === currentCharacter) {
      setFeedback('correct');
      setScore(s => s + 1);
      // Play a happy sound or just the character sound
      onPlayAudio("太棒了"); // "Awesome" in Chinese
      setTimeout(() => {
        if (currentIndex < 4) { // Let's do a mini-round of 5 for the quiz
           setCurrentIndex(prev => prev + 1);
        } else {
           onFinish();
        }
      }, 1500);
    } else {
      setFeedback('wrong');
      onPlayAudio("再试一次"); // "Try again"
      setTimeout(() => {
        setFeedback('none');
      }, 1000);
    }
  };

  if (currentIndex >= 5) {
     return <div className="text-center text-4xl font-bold text-sky-600">Quiz Complete!</div>
  }

  return (
    <div className="max-w-md mx-auto w-full">
      <div className="bg-white rounded-[2rem] shadow-lg p-6 mb-6 text-center border-4 border-yellow-200 min-h-[12rem] flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold text-slate-400 mb-2">Quiz Time!</h3>
        <p className="text-slate-600 mb-4 text-sm">Which character is this?</p>
        
        {currentDetails ? (
          <div className="animate-bounce-short flex flex-col items-center">
             <div className="text-5xl font-bold text-sky-600 mb-2">{currentDetails.pinyin}</div>
             <p className="text-sm text-slate-400">(Match the Pinyin)</p>
          </div>
        ) : (
          <div className="text-slate-400 italic">
             (Loading info for {currentCharacter}...)
             <br/>
             <span className="text-xs">Go to "Learn" mode first to load details!</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {options.map((char) => {
          let btnClass = "bg-white border-b-8 border-slate-200 active:border-b-0 active:translate-y-2 hover:bg-sky-50 text-slate-700";
          if (feedback === 'correct' && char === currentCharacter) {
             btnClass = "bg-green-400 border-b-8 border-green-600 text-white";
          } else if (feedback === 'wrong' && char !== currentCharacter) {
             btnClass = "opacity-50 bg-slate-100 border-slate-200";
          } else if (feedback === 'wrong' && char === currentCharacter) {
             // Highlight the correct one if they missed? Optional.
          }

          return (
            <button
              key={char}
              onClick={() => handleOptionClick(char)}
              disabled={feedback !== 'none'}
              className={`h-32 rounded-2xl text-6xl hanzi-font transition-all ${btnClass} shadow-md`}
            >
              {char}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center space-x-2">
        {[0, 1, 2, 3, 4].map((i) => (
           <div key={i} className={`w-4 h-4 rounded-full ${i < currentIndex ? 'bg-green-400' : 'bg-slate-200'}`} />
        ))}
      </div>
    </div>
  );
};
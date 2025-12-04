import React, { useState, useEffect, useCallback } from 'react';
import { CHARACTER_LIST, INITIAL_CACHE } from './constants';
import { AppMode, CharacterDetailResponse } from './types';
import { fetchCharacterDetails, fetchSpeech, playAudioBuffer } from './services/geminiService';
import { FlashCard } from './components/FlashCard';
import { QuizGame } from './components/QuizGame';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.HOME);
  
  // State for Learn Mode
  const [currentLearnIndex, setCurrentLearnIndex] = useState(0);
  const [detailsCache, setDetailsCache] = useState<Record<string, CharacterDetailResponse>>(INITIAL_CACHE);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [audioCache, setAudioCache] = useState<Record<string, AudioBuffer>>({});
  const [isAudioLoading, setIsAudioLoading] = useState(false);

  const currentCharacter = CHARACTER_LIST[currentLearnIndex];

  // Fetch details when character changes in Learn Mode
  useEffect(() => {
    if (mode === AppMode.LEARN) {
      const char = CHARACTER_LIST[currentLearnIndex];
      if (!detailsCache[char]) {
        setIsLoadingDetails(true);
        fetchCharacterDetails(char).then((details) => {
          setDetailsCache((prev) => ({ ...prev, [char]: details }));
          setIsLoadingDetails(false);
        });
      }
    }
  }, [mode, currentLearnIndex, detailsCache]);

  const handlePlayAudio = useCallback(async (text: string) => {
    if (!text) return;
    
    // Check cache first
    if (audioCache[text]) {
      playAudioBuffer(audioCache[text]);
      return;
    }

    setIsAudioLoading(true);
    const buffer = await fetchSpeech(text);
    setIsAudioLoading(false);

    if (buffer) {
      setAudioCache((prev) => ({ ...prev, [text]: buffer }));
      playAudioBuffer(buffer);
    }
  }, [audioCache]);

  const handleNext = () => {
    setCurrentLearnIndex((prev) => (prev + 1) % CHARACTER_LIST.length);
  };

  const handlePrev = () => {
    setCurrentLearnIndex((prev) => (prev - 1 + CHARACTER_LIST.length) % CHARACTER_LIST.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 max-w-2xl mx-auto">
      
      {/* Header */}
      <header className="w-full flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-sky-700 tracking-tight flex items-center gap-2">
          <span>🐼</span> Hanzi Hero
        </h1>
        {mode !== AppMode.HOME && (
           <button 
             onClick={() => setMode(AppMode.HOME)}
             className="bg-white text-slate-600 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 border border-slate-200"
           >
             Exit
           </button>
        )}
      </header>

      {/* Main Content Area */}
      <main className="w-full flex-grow flex flex-col justify-center">
        
        {mode === AppMode.HOME && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="text-center mb-8">
              <p className="text-xl text-slate-600 mb-2">Ready to learn?</p>
              <p className="text-slate-500 text-sm">Pick a mode to start your adventure!</p>
            </div>
            
            <button 
              onClick={() => setMode(AppMode.LEARN)}
              className="w-full bg-white hover:bg-sky-50 border-b-8 border-sky-200 active:border-b-0 active:translate-y-2 transition-all p-6 rounded-3xl shadow-lg group"
            >
               <div className="flex items-center justify-between">
                 <div className="text-left">
                   <h2 className="text-2xl font-bold text-sky-600 group-hover:text-sky-700">Learn Cards</h2>
                   <p className="text-slate-400">Explore characters one by one</p>
                 </div>
                 <div className="text-5xl group-hover:scale-110 transition-transform">📖</div>
               </div>
            </button>

            <button 
              onClick={() => setMode(AppMode.QUIZ)}
              className="w-full bg-white hover:bg-yellow-50 border-b-8 border-yellow-200 active:border-b-0 active:translate-y-2 transition-all p-6 rounded-3xl shadow-lg group"
            >
               <div className="flex items-center justify-between">
                 <div className="text-left">
                   <h2 className="text-2xl font-bold text-yellow-600 group-hover:text-yellow-700">Mini Quiz</h2>
                   <p className="text-slate-400">Test what you know!</p>
                 </div>
                 <div className="text-5xl group-hover:scale-110 transition-transform">🏆</div>
               </div>
            </button>
          </div>
        )}

        {mode === AppMode.LEARN && (
          <div className="flex flex-col items-center space-y-8">
            <FlashCard 
              character={currentCharacter}
              details={detailsCache[currentCharacter] || null}
              isLoading={isLoadingDetails}
              onPlayAudio={handlePlayAudio}
              isAudioLoading={isAudioLoading}
            />
            
            {/* Navigation Controls */}
            <div className="flex items-center gap-6">
              <button 
                onClick={handlePrev}
                className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-sky-600 hover:bg-sky-50 active:scale-95 transition-all text-2xl font-bold"
              >
                ←
              </button>
              <div className="text-slate-400 font-bold bg-white px-4 py-1 rounded-full shadow-sm text-sm">
                {currentLearnIndex + 1} / {CHARACTER_LIST.length}
              </div>
              <button 
                onClick={handleNext}
                className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-sky-600 hover:bg-sky-50 active:scale-95 transition-all text-2xl font-bold"
              >
                →
              </button>
            </div>
          </div>
        )}

        {mode === AppMode.QUIZ && (
          <QuizGame 
            characters={CHARACTER_LIST}
            detailsCache={detailsCache}
            onPlayAudio={handlePlayAudio}
            onFinish={() => {
              // Simple finish logic
              alert("Great job! You finished the mini-round.");
              setMode(AppMode.HOME);
            }}
          />
        )}

      </main>

      <footer className="mt-12 text-center text-slate-400 text-xs">
        Powered by Gemini AI • Learn Hanzi
      </footer>
    </div>
  );
};

export default App;

import React, { useState, useEffect, useCallback } from 'react';
import { LEVELS, INITIAL_CACHE } from './constants';
import { AppMode, CharacterDetailResponse, LevelData } from './types';
import { fetchCharacterDetails, fetchSpeech, playAudioBuffer } from './services/Service';
import { FlashCard } from './components/FlashCard';
import { QuizGame } from './components/QuizGame';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.HOME);
  
  // State for Level Selection
  const [selectedLevel, setSelectedLevel] = useState<LevelData>(LEVELS[0]);

  // State for Learn Mode
  const [currentLearnIndex, setCurrentLearnIndex] = useState(0);
  const [detailsCache, setDetailsCache] = useState<Record<string, CharacterDetailResponse>>(INITIAL_CACHE);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [audioCache, setAudioCache] = useState<Record<string, AudioBuffer>>({});
  const [isAudioLoading, setIsAudioLoading] = useState(false);

  const currentCharacter = selectedLevel.characters[currentLearnIndex];

  // Fetch details when character changes in Learn Mode
  useEffect(() => {
    if (mode === AppMode.LEARN) {
      const char = selectedLevel.characters[currentLearnIndex];
      if (!detailsCache[char]) {
        setIsLoadingDetails(true);
        fetchCharacterDetails(char).then((details) => {
          setDetailsCache((prev) => ({ ...prev, [char]: details }));
          setIsLoadingDetails(false);
        });
      }
    }
  }, [mode, currentLearnIndex, detailsCache, selectedLevel]);

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
    setCurrentLearnIndex((prev) => (prev + 1) % selectedLevel.characters.length);
  };

  const handlePrev = () => {
    setCurrentLearnIndex((prev) => (prev - 1 + selectedLevel.characters.length) % selectedLevel.characters.length);
  };

  const handleLevelSelect = (levelId: string) => {
    const level = LEVELS.find(l => l.id === levelId);
    if (level) {
      setSelectedLevel(level);
      setCurrentLearnIndex(0); // Reset index when level changes
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-6 px-4 max-w-2xl mx-auto">
      
      {/* Header */}
      <header className="w-full flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-sky-700 tracking-tight flex items-center gap-2">
          <span>🐼</span> Hanzi Hero
        </h1>
        {mode !== AppMode.HOME && (
           <button 
             onClick={() => setMode(AppMode.HOME)}
             className="bg-white text-slate-600 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 border border-slate-200"
           >
             主页 (Home)
           </button>
        )}
      </header>

      {/* Main Content Area */}
      <main className="w-full flex-grow flex flex-col justify-center">
        
        {mode === AppMode.HOME && (
          <div className="space-y-6 animate-fade-in-up">
            
            {/* Level Selector - Dropdown */}
            <div className="max-w-xs mx-auto w-full mb-8 relative z-20">
              <label htmlFor="level-select" className="block text-slate-500 text-sm font-bold mb-2 text-center">
                选择等级 (Select Level)
              </label>
              <div className="relative">
                <select
                  id="level-select"
                  value={selectedLevel.id}
                  onChange={(e) => handleLevelSelect(e.target.value)}
                  className="appearance-none w-full bg-white border-2 border-slate-200 hover:border-sky-300 text-slate-700 font-bold py-4 px-6 pr-10 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition-all cursor-pointer text-center text-lg"
                >
                  {LEVELS.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6 space-y-4">
              <button 
                onClick={() => setMode(AppMode.LEARN)}
                className="w-full bg-white hover:bg-sky-50 border-b-8 border-sky-200 active:border-b-0 active:translate-y-2 transition-all p-6 rounded-3xl shadow-lg group"
              >
                 <div className="flex items-center justify-between">
                   <div className="text-left">
                     <h2 className="text-2xl font-bold text-sky-600 group-hover:text-sky-700">学习卡片 (Learn)</h2>
                     <p className="text-slate-400">Learning {selectedLevel.characters.length} characters</p>
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
                     <h2 className="text-2xl font-bold text-yellow-600 group-hover:text-yellow-700">小测验 (Quiz)</h2>
                     <p className="text-slate-400">Test your knowledge!</p>
                   </div>
                   <div className="text-5xl group-hover:scale-110 transition-transform">🏆</div>
                 </div>
              </button>
            </div>
          </div>
        )}

        {mode === AppMode.LEARN && (
          <div className="flex flex-col items-center space-y-6">
            <div className="text-slate-400 font-bold uppercase text-xs tracking-widest bg-slate-100 px-3 py-1 rounded-full">
               {selectedLevel.name}
            </div>

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
                {currentLearnIndex + 1} / {selectedLevel.characters.length}
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
            characters={selectedLevel.characters}
            detailsCache={detailsCache}
            onPlayAudio={handlePlayAudio}
            onFinish={() => {
              // Simple finish logic
              alert("Great job! Level Complete!");
              setMode(AppMode.HOME);
            }}
          />
        )}

      </main>

      <footer className="mt-8 text-center text-slate-400 text-xs">
        Powered by Gemini AI
      </footer>
    </div>
  );
};

export default App;
import { CharacterDetailResponse } from "../types";
import { characterDatabase } from "../data/characterDatabase";

// Fallback data generator for unknown characters
function generateFallbackData(character: string): CharacterDetailResponse {
  const commonPinyin = ["nǐ", "wǒ", "tā", "hǎo", "ài", "xué", "jiā", "shuǐ"];
  const randomPinyin = commonPinyin[Math.floor(Math.random() * commonPinyin.length)];
  
  return {
    pinyin: randomPinyin,
    sentence: `这是一个关于${character}的句子。`,
    phrases: [`${character}字`, `用${character}`]
  };
}

export const fetchCharacterDetails = async (character: string): Promise<CharacterDetailResponse> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Check if we have data for this character
    if (characterDatabase[character]) {
      return characterDatabase[character];
    }
    
    // Generate fallback data for unknown characters
    return generateFallbackData(character);
    
  } catch (error) {
    console.error("Error fetching character details:", error);
    return {
      pinyin: "...",
      sentence: "...",
      phrases: [],
    };
  }
};

// Text-to-Speech using Web Speech API
export const fetchSpeech = async (text: string): Promise<AudioBuffer | null> => {
  try {
    // Check if browser supports Web Speech API
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
      console.warn("Web Speech API not supported in this browser");
      return null;
    }

    return new Promise((resolve) => {
      // Create a new speech synthesis utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN'; // Chinese
      utterance.rate = 0.8; // Slightly slower for clarity
      utterance.pitch = 1.0;
      
      // For Web Speech API, we play directly rather than returning AudioBuffer
      // Since we can't easily get AudioBuffer from Web Speech API, we'll modify the approach
      utterance.onstart = () => {
        // Return a dummy AudioBuffer to maintain interface compatibility
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const buffer = audioContext.createBuffer(1, 1, 22050); // Empty buffer
        resolve(buffer);
      };
      
      utterance.onerror = () => {
        resolve(null);
      };
      
      // Speak the text
      window.speechSynthesis.speak(utterance);
      
    });
  } catch (error) {
    console.error("Error with text-to-speech:", error);
    return null;
  }
};

// Alternative TTS using recorded audio files (if available)
export const fetchSpeechFromFiles = async (text: string): Promise<AudioBuffer | null> => {
  try {
    // This would require pre-recorded audio files for common words/phrases
    // For now, this is a placeholder implementation
    console.log("Local TTS would speak:", text);
    
    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return null;
  } catch (error) {
    console.error("Error with local TTS:", error);
    return null;
  }
};

// Simple audio player using Web Audio API
let sharedAudioContext: AudioContext | null = null;

export const playAudioBuffer = async (buffer: AudioBuffer) => {
  if (!sharedAudioContext) {
    sharedAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  
  if (sharedAudioContext.state === 'suspended') {
    await sharedAudioContext.resume();
  }

  const source = sharedAudioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(sharedAudioContext.destination);
  source.start();
};

// Direct speech playback using Web Speech API (recommended alternative)
export const speakText = (text: string, lang: string = 'zh-CN'): void => {
  if (!('speechSynthesis' in window)) {
    console.warn("Speech synthesis not supported");
    return;
  }
  
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.8;
  utterance.pitch = 1.0;
  
  window.speechSynthesis.speak(utterance);
};

// Utility to get available voices
export const getAvailableVoices = (): SpeechSynthesisVoice[] => {
  if (!('speechSynthesis' in window)) {
    return [];
  }
  return window.speechSynthesis.getVoices();
};

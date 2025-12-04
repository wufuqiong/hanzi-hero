import { CharacterDetailResponse } from "../types";

// Local database for character details
const characterDatabase: Record<string, CharacterDetailResponse> = {
  "我": {
    pinyin: "wǒ",
    sentence: "我喜欢苹果。"
  },
  "你": {
    pinyin: "nǐ",
    sentence: "你好吗？"
  },
  "他": {
    pinyin: "tā", 
    sentence: "他是我的爸爸。"
  },
  "她": {
    pinyin: "tā",
    sentence: "她是我的妈妈。"
  },
  "好": {
    pinyin: "hǎo",
    sentence: "今天天气很好。"
  },
  "爱": {
    pinyin: "ài",
    sentence: "我爱我的家人。"
  },
  "家": {
    pinyin: "jiā",
    sentence: "这是我的家。"
  },
  "学": {
    pinyin: "xué",
    sentence: "我喜欢学习中文。"
  },
  "猫": {
    pinyin: "māo",
    sentence: "小猫很可爱。"
  },
  "狗": {
    pinyin: "gǒu",
    sentence: "小狗在跑步。"
  }
};

// Fallback data for unknown characters
const getFallbackData = (character: string): CharacterDetailResponse => ({
  pinyin: "pīnyīn",
  sentence: `${character}是一个汉字。`
});

export const fetchCharacterDetails = async (character: string): Promise<CharacterDetailResponse> => {
  try {
    // Check if we have data for this character
    if (characterDatabase[character]) {
      return characterDatabase[character];
    }
    
    // Return fallback data for unknown characters
    return getFallbackData(character);
    
  } catch (error) {
    console.error("Error fetching character details:", error);
    return getFallbackData(character);
  }
};

export const fetchSpeech = async (text: string): Promise<AudioBuffer | null> => {
  try {
    // Use browser's Web Speech API for TTS
    if (!('speechSynthesis' in window)) {
      console.warn("Speech synthesis not supported in this browser");
      return null;
    }

    return new Promise((resolve) => {
      // Create a simple silent audio buffer as placeholder
      // In a real implementation, you might want to use a different TTS service
      // or pre-recorded audio files
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const frameCount = 24000; // 1 second of audio at 24kHz
      const buffer = audioContext.createBuffer(1, frameCount, 24000);
      
      // Fill with silence
      const channelData = buffer.getChannelData(0);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = 0;
      }
      
      // Use the browser's TTS to actually speak the text
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN'; // Chinese
      utterance.rate = 0.8; // Slower speed for clarity
      
      utterance.onstart = () => {
        console.log("Speech started");
      };
      
      utterance.onend = () => {
        audioContext.close();
        resolve(buffer);
      };
      
      utterance.onerror = (error) => {
        console.error("Speech synthesis error:", error);
        audioContext.close();
        resolve(buffer); // Still return the silent buffer
      };
      
      window.speechSynthesis.speak(utterance);
    });
    
  } catch (error) {
    console.error("Error with speech synthesis:", error);
    return null;
  }
};

// Robust Audio Player Helper
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
import { GoogleGenAI, Type, Modality } from "@google/genai";
import { CharacterDetailResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Helper to decode Base64 to ArrayBuffer
function decode(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Helper to decode audio data for the browser
async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length;
  // Live API / TTS usually returns 24kHz or 24000 sample rate mono
  const buffer = ctx.createBuffer(1, frameCount, 24000);
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < frameCount; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  return buffer;
}

export const fetchCharacterDetails = async (character: string): Promise<CharacterDetailResponse> => {
  try {
    // 1. Fetch Text Details (Pinyin + Chinese Sentence)
    const textPromise = ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `For the Chinese character "${character}", provide:
      1. Pinyin with tone marks.
      2. A simple, short Chinese sentence using the character suitable for a 5-year-old child.
      IMPORTANT: The sentence must be in Chinese ONLY. Do NOT include English translations.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            pinyin: { type: Type.STRING, description: "Pinyin with tone marks" },
            sentence: { type: Type.STRING, description: "A simple Chinese sentence using the character." },
          },
          required: ["pinyin", "sentence"],
        },
      },
    });

    const response = await textPromise;
    const textData = JSON.parse(response.text || '{}');
    
    return {
      pinyin: textData.pinyin || "...",
      sentence: textData.sentence || "...",
    };

  } catch (error) {
    console.error("Error fetching character details:", error);
    // Fallback
    return {
      pinyin: "...",
      sentence: "...",
    };
  }
};

export const fetchSpeech = async (text: string): Promise<AudioBuffer | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) return null;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    const audioBuffer = await decodeAudioData(decode(base64Audio), audioContext);
    
    audioContext.close(); 
    return audioBuffer;

  } catch (error) {
    console.error("Error fetching speech:", error);
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
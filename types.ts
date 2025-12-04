export interface CharacterData {
  char: string;
  pinyin?: string;
  sentence?: string;
  phrases?: string[];
  isLearned?: boolean;
}

export interface CharacterDetailResponse {
  pinyin: string;
  sentence: string; // Chinese only
  phrases: string[]; // List of 2-3 common words
}

export interface LevelData {
  id: string;
  name: string;
  characters: string[];
}

export enum AppMode {
  HOME = 'HOME',
  LEARN = 'LEARN',
  QUIZ = 'QUIZ'
}

export enum SoundType {
  CHARACTER = 'CHARACTER',
  SENTENCE = 'SENTENCE',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}
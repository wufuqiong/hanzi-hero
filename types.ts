export interface CharacterData {
  char: string;
  pinyin?: string;
  sentence?: string;
  isLearned?: boolean;
}

export interface CharacterDetailResponse {
  pinyin: string;
  sentence: string; // Chinese only
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
import { LevelData } from "./types";

export const LEVELS: LevelData[] = [
  {
    id: "grade-1",
    name: "一年级 (Grade 1)",
    characters: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "大", "小", "多", "少", "上", "下", "人", "口", "日", "月"]
  },
  {
    id: "grade-2",
    name: "二年级 (Grade 2)",
    characters: ["白", "天", "云", "山", "太", "阳", "星", "马", "牛", "羊", "兔", "鸟", "虫", "草", "花", "树", "木", "水", "火", "土"]
  },
  {
    id: "grade-3",
    name: "三年级 (Grade 3)",
    characters: ["吃", "看", "走", "笑", "来", "飞", "爱", "是", "跑", "跳", "爸", "妈", "我", "你", "他", "她", "好", "的", "不", "了"]
  },
  {
    id: "grade-4",
    name: "四年级 (Grade 4)",
    characters: ["两", "只", "头", "又", "高", "兴", "快", "乐", "回", "家", "去", "做", "生", "日", "手", "心", "西", "瓜", "雨", "雪"]
  }
];

// Helper to get all chars if needed, or specific level
export const getAllCharacters = () => LEVELS.flatMap(l => l.characters);

// Start empty to trigger AI generation
export const INITIAL_CACHE: Record<string, { pinyin: string, sentence: string, phrases: string[] }> = {};
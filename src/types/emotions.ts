export type Emotion = 'happy' | 'calm' | 'anxious' | 'sad';

export interface EmotionScores {
  happy: number;
  calm: number;
  anxious: number;
  sad: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
  emotions?: EmotionScores;
}
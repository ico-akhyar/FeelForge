import { Emotion } from '../types/emotions';

const emotionKeywords = {
  happy: ['happy', 'joy', 'excited', 'great', 'wonderful', 'fantastic', 'pleased', 'delighted'],
  calm: ['calm', 'peaceful', 'relaxed', 'serene', 'content', 'tranquil', 'composed'],
  anxious: ['anxious', 'worried', 'nervous', 'stressed', 'uneasy', 'tense', 'afraid'],
  sad: ['sad', 'depressed', 'unhappy', 'miserable', 'down', 'gloomy', 'heartbroken']
};

export function detectEmotions(text: string): Record<Emotion, number> {
  const lowercaseText = text.toLowerCase();
  const words = lowercaseText.split(/\s+/);
  
  const emotionScores: Record<Emotion, number> = {
    happy: 0,
    calm: 0,
    anxious: 0,
    sad: 0
  };

  words.forEach(word => {
    for (const [emotion, keywords] of Object.entries(emotionKeywords)) {
      if (keywords.some(keyword => word.includes(keyword))) {
        emotionScores[emotion as Emotion] += 1;
      }
    }
  });

  // Normalize scores to be between 0 and 10
  const maxScore = Math.max(...Object.values(emotionScores));
  if (maxScore > 0) {
    for (const emotion in emotionScores) {
      emotionScores[emotion as Emotion] = Math.round((emotionScores[emotion as Emotion] / maxScore) * 10);
    }
  }

  return emotionScores;
}
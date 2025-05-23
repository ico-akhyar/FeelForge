import axios from 'axios';

const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

const systemPrompt = `You are an empathetic AI assistant focused on emotional support and mental well-being. Your role is to:
1. Analyze the user's message for emotional content and tone
2. Provide supportive, understanding responses
3. Use a conversational, friendly tone
4. Offer gentle suggestions when appropriate
5. Maintain a positive and encouraging attitude

When responding:
- Show empathy and understanding
- Validate the user's feelings
- Avoid clinical or overly formal language
- Be supportive without being prescriptive
- Focus on emotional support rather than direct advice`;

export async function sendMessageToDeepSeek(message: string): Promise<string> {
  try {
    const response = await axios.post(
      DEEPSEEK_API_URL,
      {
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        model: 'deepseek-chat',
        temperature: 0.7,
        max_tokens: 500
      },
      {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling DeepSeek API:', error);
    throw new Error('Failed to get response from AI');
  }
}
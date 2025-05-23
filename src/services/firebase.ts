import { db } from '../config/firebase';
import { collection, addDoc, query, where, orderBy, getDocs, Timestamp } from 'firebase/firestore';
import { ChatMessage } from '../types/emotions';

export async function saveChatMessage(userId: string, message: ChatMessage) {
  try {
    await addDoc(collection(db, 'chatHistory'), {
      userId,
      ...message,
      timestamp: Timestamp.fromDate(message.timestamp)
    });
  } catch (error) {
    console.error('Error saving chat message:', error);
    throw error;
  }
}

export async function getChatHistory(userId: string): Promise<ChatMessage[]> {
  try {
    const q = query(
      collection(db, 'chatHistory'),
      where('userId', '==', userId),
      orderBy('timestamp', 'desc')
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
      timestamp: (doc.data().timestamp as Timestamp).toDate()
    })) as ChatMessage[];
  } catch (error) {
    console.error('Error fetching chat history:', error);
    throw error;
  }
}
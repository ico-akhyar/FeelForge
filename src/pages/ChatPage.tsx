import { useState, useRef, useEffect } from 'react';
import { Send, User, Bot } from 'lucide-react';
import Button from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    sender: 'ai',
    text: "Hello! I'm your AI reflection assistant. How are you feeling today? You can share anything that's on your mind, and I'll help you reflect on your emotions.",
    timestamp: new Date(),
  },
];

const ChatPage = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      sender: 'user',
      text: newMessage,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      // Generate AI response based on user message
      let aiResponse = '';
      
      if (newMessage.toLowerCase().includes('sad') || newMessage.toLowerCase().includes('depress')) {
        aiResponse = "I'm sorry to hear you're feeling down. Depression and sadness are common emotions that everyone experiences. Have you noticed any patterns or triggers that might be contributing to these feelings?";
      } else if (newMessage.toLowerCase().includes('anxious') || newMessage.toLowerCase().includes('worry')) {
        aiResponse = "Anxiety can be really challenging. When you notice yourself feeling anxious, try taking a few deep breaths. What specific worries are on your mind right now?";
      } else if (newMessage.toLowerCase().includes('happy') || newMessage.toLowerCase().includes('joy')) {
        aiResponse = "It's wonderful that you're feeling happy! Positive emotions are worth savoring. What specific things contributed to this joy today?";
      } else if (newMessage.toLowerCase().includes('angry') || newMessage.toLowerCase().includes('frustrat')) {
        aiResponse = "I understand that anger and frustration can be intense. These emotions often signal that something important to us is being threatened or blocked. What triggered these feelings?";
      } else {
        aiResponse = "Thank you for sharing that with me. Could you tell me more about how these experiences make you feel? I'm here to help you reflect on your emotions.";
      }
      
      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        sender: 'ai',
        text: aiResponse,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-950 py-6 transition-colors">
      <div className="max-w-3xl mx-auto px-4 flex flex-col h-[calc(100vh-8rem)]">
        <div className="bg-white dark:bg-gray-900 rounded-t-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 flex items-center">
          <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-3">
            <Bot size={18} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h1 className="font-medium text-gray-900 dark:text-gray-100">FeelForge AI Assistant</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Share your thoughts and feelings</p>
          </div>
        </div>
        
        <div className="flex-1 bg-white dark:bg-gray-900 border-x border-gray-200 dark:border-gray-800 overflow-y-auto">
          <div className="p-4 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <div className="flex items-center mb-1">
                    {message.sender === 'user' ? (
                      <>
                        <span className="font-medium mr-2">{user?.name || 'You'}</span>
                        <User size={14} className="text-indigo-200" />
                      </>
                    ) : (
                      <>
                        <span className="font-medium mr-2">AI Assistant</span>
                        <Bot size={14} className="text-gray-500 dark:text-gray-400" />
                      </>
                    )}
                  </div>
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <div
                    className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 w-2 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-b-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4">
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              disabled={isLoading}
            />
            <Button
              type="submit"
              variant="primary"
              disabled={isLoading || !newMessage.trim()}
            >
              <Send size={18} className="mr-1" />
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
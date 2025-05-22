import { useState } from 'react';
import { Calendar, Save, RefreshCw, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const JournalPage = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const [aiReflection, setAiReflection] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleReflect = () => {
    if (journalEntry.trim().length < 20) {
      alert('Please write a bit more for a meaningful reflection (at least 20 characters).');
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // Generate appropriate response based on keywords in journal entry
      let reflection = 'I notice a few interesting patterns in your journal entry today. ';
      
      if (journalEntry.toLowerCase().includes('anxious') || journalEntry.toLowerCase().includes('worry')) {
        reflection += 'Your entry mentions anxiety or worry. This is a common emotional response to uncertainty or perceived threats. Consider exploring what specifically triggers these feelings for you. Some gentle breathing exercises might help when you notice these emotions arising.';
      } else if (journalEntry.toLowerCase().includes('happy') || journalEntry.toLowerCase().includes('joy')) {
        reflection += 'I see expressions of joy and happiness in your writing! It\'s wonderful that you\'re experiencing these positive emotions. Try to identify what specifically brought you joy today so you can intentionally incorporate more of these elements into your routine.';
      } else if (journalEntry.toLowerCase().includes('sad') || journalEntry.toLowerCase().includes('depress')) {
        reflection += 'I notice some sadness in your entry. Remember that all emotions, including difficult ones, provide valuable information. Consider what this sadness might be telling you about your needs or values. Be gentle with yourself as you process these feelings.';
      } else if (journalEntry.toLowerCase().includes('angry') || journalEntry.toLowerCase().includes('frustrat')) {
        reflection += 'There seems to be some frustration or anger in your writing. These emotions often signal that something important to you is being blocked or violated. Reflecting on the specific triggers might help you understand your core needs better.';
      } else {
        reflection += 'Your entry contains a mix of experiences and reflections. I encourage you to notice any patterns in your emotional responses throughout the day. What triggers certain feelings for you? How do your thoughts influence your emotions?';
      }
      
      reflection += '\n\nConsider journaling again tomorrow to track how these feelings evolve over time. Consistent reflection is a powerful tool for emotional growth.';
      
      setAiReflection(reflection);
      setIsGenerating(false);
    }, 2000);
  };

  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate saving to database
    setTimeout(() => {
      setIsSaving(false);
      setIsSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-950 py-8 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Daily Journal</h1>
            <div className="flex items-center mt-1 text-gray-600 dark:text-gray-400">
              <Calendar size={16} className="mr-1" />
              <span>{today}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button
              variant="outline"
              onClick={handleReflect}
              disabled={isGenerating || journalEntry.length < 20}
              isLoading={isGenerating}
            >
              <RefreshCw size={16} className="mr-2" />
              Generate Reflection
            </Button>
            <Button
              variant="primary"
              onClick={handleSave}
              disabled={isSaving || journalEntry.length === 0}
              isLoading={isSaving}
            >
              <Save size={16} className="mr-2" />
              Save Entry
            </Button>
          </div>
        </div>

        {isSuccess && (
          <div className="mb-4 bg-success-50 dark:bg-success-900/20 text-success-800 dark:text-success-400 p-3 rounded-md text-sm flex items-center">
            <AlertCircle size={16} className="mr-2" />
            Your journal entry has been saved successfully!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-800 transition-colors">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Write Your Thoughts</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Write freely about your day, thoughts, feelings, or anything on your mind. The AI will help you reflect on your emotions.
            </p>
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="How are you feeling today? What's on your mind?"
              className="w-full h-64 border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            ></textarea>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
              <span>{journalEntry.length} characters</span>
              <span>{journalEntry.length < 20 ? 'Write at least 20 characters for a reflection' : ''}</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-800 transition-colors">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">AI Reflection</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Your personal AI assistant will analyze your journal entry and provide thoughtful insights about your emotions and patterns.
            </p>
            
            {isGenerating ? (
              <div className="h-64 flex flex-col items-center justify-center space-y-4">
                <div className="w-10 h-10 border-2 border-indigo-600 dark:border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 dark:text-gray-400">Analyzing your journal entry...</p>
              </div>
            ) : aiReflection ? (
              <div className="h-64 overflow-y-auto p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">{aiReflection}</p>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                <RefreshCw size={24} className="text-gray-400 dark:text-gray-600 mb-2" />
                <p className="text-gray-600 dark:text-gray-400">
                  Your AI reflection will appear here after you write and generate a reflection.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
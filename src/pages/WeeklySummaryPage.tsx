import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

// Dummy data
const emotionData = [
  { name: 'Monday', happy: 7, calm: 5, anxious: 2, sad: 1 },
  { name: 'Tuesday', happy: 5, calm: 6, anxious: 3, sad: 2 },
  { name: 'Wednesday', happy: 4, calm: 4, anxious: 6, sad: 3 },
  { name: 'Thursday', happy: 6, calm: 7, anxious: 2, sad: 1 },
  { name: 'Friday', happy: 8, calm: 6, anxious: 1, sad: 0 },
  { name: 'Saturday', happy: 9, calm: 7, anxious: 0, sad: 0 },
  { name: 'Sunday', happy: 7, calm: 8, anxious: 1, sad: 0 },
];

const emotionDistribution = [
  { name: 'Happy', value: 46, color: '#4ade80' },
  { name: 'Calm', value: 43, color: '#60a5fa' },
  { name: 'Anxious', value: 15, color: '#f97316' },
  { name: 'Sad', value: 7, color: '#f43f5e' },
];

const topTriggers = [
  { trigger: 'Work deadlines', count: 5 },
  { trigger: 'Family interactions', count: 3 },
  { trigger: 'Exercise', count: 3 },
  { trigger: 'Social events', count: 2 },
  { trigger: 'Meditation', count: 2 },
];

const insightsList = [
  'You tend to feel most positive on weekends, especially Saturdays.',
  'Work seems to be a common source of anxiety, particularly on Wednesdays.',
  'Exercise and meditation are consistently associated with positive emotions.',
  'Your overall emotional balance this week shows improvement compared to last week.',
  'Family interactions show mixed emotional responses - consider journaling more about these moments.'
];

const WeeklySummaryPage = () => {
  const [currentWeek, setCurrentWeek] = useState('August 1 - 7, 2023');

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-950 py-8 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Weekly Emotion Summary</h1>
          
          <div className="flex items-center space-x-2">
            <button 
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Previous week"
            >
              <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
            
            <div className="flex items-center bg-white dark:bg-gray-900 px-3 py-1 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <Calendar size={16} className="mr-2 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{currentWeek}</span>
            </div>
            
            <button 
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Next week"
            >
              <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-800 transition-colors">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Daily Emotion Tracking</h2>
            <div className="h-64 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={emotionData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="name" className="text-xs text-gray-600 dark:text-gray-400" />
                  <YAxis className="text-xs text-gray-600 dark:text-gray-400" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderColor: '#e5e7eb',
                      borderRadius: '0.5rem',
                      color: '#374151'
                    }} 
                  />
                  <Bar dataKey="happy" stackId="a" fill="#4ade80" name="Happy" />
                  <Bar dataKey="calm" stackId="a" fill="#60a5fa" name="Calm" />
                  <Bar dataKey="anxious" stackId="a" fill="#f97316" name="Anxious" />
                  <Bar dataKey="sad" stackId="a" fill="#f43f5e" name="Sad" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-800 transition-colors">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Emotion Distribution</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={emotionDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {emotionDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip 
                    formatter={(value, name) => [`${value} points`, name]}
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderColor: '#e5e7eb',
                      borderRadius: '0.5rem',
                      color: '#374151'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-800 transition-colors">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Top Emotional Triggers</h2>
            <ul className="space-y-3">
              {topTriggers.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{item.trigger}</span>
                  <div className="flex items-center">
                    <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full" 
                        style={{ width: `${(item.count / 5) * 100}%` }} 
                      />
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{item.count}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-800 transition-colors">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">AI Insights & Recommendations</h2>
            <ul className="space-y-3">
              {insightsList.map((insight, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{insight}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Focus for Next Week</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Consider incorporating more mindfulness practices during workdays, especially around deadlines. Your journaling shows these activities help reduce your anxiety levels significantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySummaryPage;
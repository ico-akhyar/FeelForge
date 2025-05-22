import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Brain, MessageCircle, BarChart3, User, Heart, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage = () => {
  const { isAuthenticated, loginAsGuest } = useAuth();

  const handleTryAsGuest = () => {
    loginAsGuest();
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-200">
      {/* Hero Section */}
      <section className="pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              Understand Your Emotions with AI-Powered Journaling
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              FeelForge helps you express your thoughts, track your emotional patterns, and gain
              deeper insights into your mental wellbeing with AI reflection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <Link to="/journal" className="btn-primary text-center">
                  Go to Journal
                </Link>
              ) : (
                <>
                  <Link to="/signup" className="btn-primary text-center">
                    Start Journaling Free
                  </Link>
                  <Button
                    variant="secondary"
                    onClick={handleTryAsGuest}
                    className="w-full sm:w-auto"
                  >
                    Try as Guest
                  </Button>
                </>
              )}
            </div>
          </div>
          <div className="mt-16 md:mt-24 max-w-4xl mx-auto relative">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-indigo-600 dark:bg-indigo-700 p-6">
                <h3 className="text-white text-lg font-medium">Journal Entry - Tuesday, August 4</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Today was a mix of emotions. I started the day feeling anxious about my upcoming presentation,
                  but after some deep breathing exercises, I managed to calm down. The presentation went better than
                  expected, and my manager gave me positive feedback. I'm proud of myself for pushing through
                  my anxiety and focusing on the task. In the evening, I had a good call with my sister, which
                  always lifts my mood. I'm feeling grateful for the small wins today.
                </p>
                <div className="mt-6 p-4 bg-indigo-50 dark:bg-gray-750 rounded-lg">
                  <h4 className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center">
                    <Sparkles size={18} className="mr-2" />
                    AI Reflection
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    I notice that you used anxiety management techniques effectively today. Your entry shows resilience
                    and self-awareness. The positive social connection with your sister is a valuable emotional support.
                    Consider celebrating these wins and building on these coping strategies for future stressful situations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Journaling Experience</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              FeelForge combines traditional journaling with AI-powered insights to help you understand yourself better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-lg transition-shadow p-8">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-6">
                <Brain size={24} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Reflection</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive thoughtful insights and patterns from our AI that helps you understand your emotional trends.
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow p-8">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-6">
                <MessageCircle size={24} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Chat</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Have conversations with our AI to explore your feelings, get advice, or simply reflect on your day.
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow p-8">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-6">
                <BarChart3 size={24} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emotional Insights</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track your emotional patterns over time with beautiful visualizations and weekly summaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Discover how FeelForge has helped people understand their emotions and improve their mental wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-lg transition-shadow p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-3">
                  <User size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah J.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Designer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "FeelForge has helped me recognize patterns in my anxiety triggers. The weekly summaries are eye-opening, and I love how the AI gives me personalized advice."
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-3">
                  <User size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Michael P.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "As someone who struggles to identify emotions, the AI reflections have been incredibly helpful. I've learned so much about myself in just a few weeks."
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-3">
                  <User size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Aisha R.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Therapist</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "I recommend FeelForge to my clients as a supplement to therapy. The insights they gain between our sessions accelerate their progress significantly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-indigo-600 dark:bg-indigo-800 transition-colors">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Start Your Journey Today</h2>
            <p className="text-lg text-indigo-100 mb-8">
              Join thousands of people who have transformed their relationship with their emotions through AI-powered journaling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <Link to="/journal" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100 text-center">
                  Go to Journal
                </Link>
              ) : (
                <>
                  <Link to="/signup" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100 text-center">
                    Start Free
                  </Link>
                  <Button
                    variant="outline"
                    onClick={handleTryAsGuest}
                    className="border-white text-white hover:bg-indigo-700 w-full sm:w-auto"
                  >
                    Try as Guest
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
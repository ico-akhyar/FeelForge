import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Mail, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loginWithGoogle, resetPassword } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isResetLoading, setIsResetLoading] = useState(false);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsLoading(true);
    
    try {
      await login(email, password);
      navigate('/journal');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setSuccessMessage('');
    setIsGoogleLoading(true);
    
    try {
      await loginWithGoogle();
      navigate('/journal');
    } catch (err) {
      setError('Failed to sign in with Google');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setError('');
    setSuccessMessage('');
    setIsResetLoading(true);

    try {
      await resetPassword(email);
      setSuccessMessage('Password reset email sent! Check your inbox.');
    } catch (err) {
      setError('Failed to send password reset email');
    } finally {
      setIsResetLoading(false);
    }
  };
  
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-950 flex flex-col justify-center py-12 transition-colors">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6 transition-colors">
          <ChevronLeft size={16} className="mr-1" />
          Back to Home
        </Link>
        
        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Welcome back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors">
            Sign up
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-900 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200 dark:border-gray-800 transition-colors">
          {error && (
            <div className="mb-4 bg-error-50 dark:bg-error-900/20 text-error-800 dark:text-error-400 p-3 rounded-md text-sm">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 bg-success-50 dark:bg-success-900/20 text-success-800 dark:text-success-400 p-3 rounded-md text-sm">
              {successMessage}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                icon={<Mail size={16} />}
                disabled={isLoading || isGoogleLoading}
              />
            </div>

            <div>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<Lock size={16} />}
                disabled={isLoading || isGoogleLoading}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-700 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me
                </label>
              </div>

              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleForgotPassword}
                isLoading={isResetLoading}
                disabled={isLoading || isGoogleLoading}
              >
                Forgot password?
              </Button>
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isLoading}
                disabled={isGoogleLoading}
              >
                Sign in
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Button
                type="button"
                variant="secondary"
                fullWidth
                onClick={handleGoogleLogin}
                isLoading={isGoogleLoading}
                disabled={isLoading}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" width="24" height="24">
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                  </g>
                </svg>
                {isGoogleLoading ? 'Signing in...' : 'Sign in with Google'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, User } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                FeelForge
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {isAuthenticated ? (
              <>
                <Link
                  to="/journal"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/journal') 
                      ? 'text-indigo-600 dark:text-indigo-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  Journal
                </Link>
                <Link
                  to="/chat"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/chat') 
                      ? 'text-indigo-600 dark:text-indigo-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  Chat
                </Link>
                <Link
                  to="/summary"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/summary') 
                      ? 'text-indigo-600 dark:text-indigo-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  Summary
                </Link>
                <div className="flex items-center space-x-2 text-sm font-medium">
                  <User size={16} className="text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300 truncate max-w-[120px]">
                    {user?.name}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/chat"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/chat') 
                      ? 'text-indigo-600 dark:text-indigo-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  Try AI Chat
                </Link>
                <Link
                  to="/login"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/login') 
                      ? 'text-indigo-600 dark:text-indigo-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn-primary"
                >
                  Sign Up
                </Link>
              </>
            )}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-gray-300" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-gray-300" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 transition-colors">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isAuthenticated ? (
              <>
                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center space-x-2">
                    <User size={16} className="text-gray-500 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {user?.name}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                    {user?.email}
                  </div>
                </div>
                <Link
                  to="/journal"
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/journal')
                      ? 'text-indigo-600 dark:text-indigo-400 bg-gray-50 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Journal
                </Link>
                <Link
                  to="/chat"
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/chat')
                      ? 'text-indigo-600 dark:text-indigo-400 bg-gray-50 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Chat
                </Link>
                <Link
                  to="/summary"
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/summary')
                      ? 'text-indigo-600 dark:text-indigo-400 bg-gray-50 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Summary
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/chat"
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/chat')
                      ? 'text-indigo-600 dark:text-indigo-400 bg-gray-50 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Try AI Chat
                </Link>
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/login')
                      ? 'text-indigo-600 dark:text-indigo-400 bg-gray-50 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                FeelForge
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              AI-powered journaling to help you understand your emotions and improve your mental well-being.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-500 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  123 Wellness Street, San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-500" />
                <a
                  href="mailto:hello@feelforge.com"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  hello@feelforge.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © {currentYear} FeelForge. All rights reserved. Made with{' '}
            <Heart size={14} className="inline text-error-500" /> by your friendly AI assistant.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
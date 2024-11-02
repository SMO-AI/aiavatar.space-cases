import React from 'react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  isDark?: boolean;
  setIsDark?: (isDark: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark = true, setIsDark = () => {} }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
          AI AVATAR
        </span>
        <div className="flex items-center space-x-4">
          <ThemeToggle 
            isDark={isDark} 
            onToggle={() => setIsDark(!isDark)} 
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm sm:text-base">
            Связаться
          </button>
        </div>
      </nav>
    </header>
  );
};
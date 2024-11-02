import React, { useEffect, useState } from 'react';

interface LayoutProps {
  children: (isDark: boolean, setIsDark: (isDark: boolean) => void) => React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      {children(isDark, setIsDark)}
    </div>
  );
};
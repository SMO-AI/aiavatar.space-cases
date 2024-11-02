import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                <span>info@aiavatar.pro</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                <span>57 Grove Road, London</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">Правовая информация</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-indigo-600 dark:hover:text-indigo-400 transition">Политика конфиденциальности</a>
              <a href="#" className="block hover:text-indigo-600 dark:hover:text-indigo-400 transition">Условия использования</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p>© {new Date().getFullYear()} AI AVATAR. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
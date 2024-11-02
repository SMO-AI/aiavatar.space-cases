import React, { useEffect, useState } from 'react';
import { Users, Eye, Target } from 'lucide-react';

const initialStats = [
  { 
    name: 'Просмотров', 
    value: 637203421,
    minIncrement: 1,
    maxIncrement: 50,
    interval: 3000,
    icon: Eye 
  },
  { 
    name: 'Подписчиков', 
    value: 2138458,
    minIncrement: 1,
    maxIncrement: 10,
    interval: 10000,
    icon: Users 
  },
  { 
    name: 'Лидов', 
    value: 176691,
    minIncrement: 1,
    maxIncrement: 5,
    interval: 15000,
    icon: Target 
  }
];

const formatNumber = (num: number): string => {
  return num.toLocaleString('ru-RU');
};

const getRandomIncrement = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const Analytics = () => {
  const [stats, setStats] = useState(initialStats);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('analytics');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setStats(currentStats => {
          const newStats = [...currentStats];
          newStats[index] = {
            ...newStats[index],
            value: newStats[index].value + getRandomIncrement(stat.minIncrement, stat.maxIncrement)
          };
          return newStats;
        });
      }, stat.interval);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <div id="analytics" className="mb-8 sm:mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{stat.name}</p>
                  <p className="mt-1 sm:mt-2 text-xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400 transition-all duration-300">
                    {formatNumber(stat.value)}
                  </p>
                </div>
                <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
import React, { useEffect, useRef } from 'react';

export const AnimatedTitle = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Add animation classes to each word with delay
          const words = entry.target.querySelectorAll('.word');
          words.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add('word-visible');
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <h1
      ref={titleRef}
      className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center px-4 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
      style={{
        textShadow: '0 4px 8px rgba(0,0,0,0.15)',
        letterSpacing: '0.5px'
      }}
    >
      <div className="overflow-hidden mb-2">
        <span className="word inline-block transform translate-y-full opacity-0 transition-all duration-700 ease-out bg-gradient-text-1">
          РЕЗУЛЬТАТЫ
        </span>{' '}
        <span className="word inline-block transform translate-y-full opacity-0 transition-all duration-700 ease-out bg-gradient-text-1">
          ПОЛУЧЕННЫЕ
        </span>{' '}
        <span className="word inline-block transform translate-y-full opacity-0 transition-all duration-700 ease-out bg-gradient-text-1">
          С
        </span>{' '}
        <span className="word inline-block transform translate-y-full opacity-0 transition-all duration-700 ease-out bg-gradient-text-1">
          ПОМОЩЬЮ
        </span>
      </div>
      <div className="overflow-hidden">
        <span className="word inline-block transform translate-y-full opacity-0 transition-all duration-700 ease-out bg-gradient-text-2">
          ТЕХНОЛОГИИ
        </span>{' '}
        <span className="word inline-block transform translate-y-full opacity-0 transition-all duration-700 ease-out bg-gradient-text-2">
          AI
        </span>{' '}
        <span className="word inline-block transform translate-y-full opacity-0 transition-all duration-700 ease-out bg-gradient-text-2">
          AVATAR
        </span>
      </div>
    </h1>
  );
};
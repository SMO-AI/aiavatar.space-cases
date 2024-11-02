import React, { useState, useEffect } from 'react';
import { Eye, Users, Target, ArrowRight, ChevronDown, ExternalLink } from 'lucide-react';

interface CaseStats {
  views: number;
  subscribers: number;
  leads?: number;
}

interface Case {
  id: number;
  title: string;
  niche: string;
  description: string;
  image: string;
  stats: CaseStats;
  instagram: string;
  presentation: string;
}

const niches = [
  'Бизнес',
  'Образование',
  'Технологии',
  'Видеопродакшн',
];

const cases: Case[] = [
  {
    id: 1,
    title: 'Блог о бизнесе и маркетинге',
    niche: 'Бизнес',
    description: 'С помощью AI-аватара блог достиг 999 тыс. подписчиков за 11 месяцев, максимальный охват ролика — 8,4 млн просмотров.',
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=400&h=400',
    stats: { views: 53100000, subscribers: 999000, leads: 95980 },
    instagram: 'https://www.instagram.com/sashbrin/',
    presentation: 'https://docs.google.com/presentation/d/1ysqKUh-lRI4EXBRuP74W-V2PtZAQ0LxfYWx4o5V1kaw/edit?usp=sharing'
  },
  {
    id: 2,
    title: 'Блог про нейросети, продвижение и маркетинг',
    niche: 'Образование',
    description: 'AI-аватар помог блогу достичь 89 тыс. подписчиков за 10 месяцев, максимальный охват ролика — 5,2 млн просмотров.',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=400&h=400',
    stats: { views: 53100000, subscribers: 89000, leads: 13200 },
    instagram: 'https://www.instagram.com/directoreels/',
    presentation: 'https://docs.google.com/presentation/d/1YJhYkSx-CUwC-M0dlBh9guLmrlOeVjmpB_G-0iya0a0/edit?usp=sharing'
  },
  {
    id: 3,
    title: 'Блог о гаджетах',
    niche: 'Технологии',
    description: 'Использование AI-аватара увеличило блог до 77,7 тыс. подписчиков за 11 месяцев, охват до 8,3 млн просмотров.',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=400&h=400',
    stats: { views: 53100000, subscribers: 77700 },
    instagram: 'https://www.instagram.com/egorkubb/',
    presentation: 'https://docs.google.com/presentation/d/1c1CRz98Vh9vyBzPYX_gD_TEVUobeLWiohfNdGc9P2ss/edit?usp=sharing'
  },
  {
    id: 4,
    title: 'Блог о нейросетях, ИИ и технологиях',
    niche: 'Образование',
    description: 'AI-аватар помог блогу достичь 92,6 тыс. подписчиков за 9 месяцев, охват — 7,4 млн просмотров.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400&h=400',
    stats: { views: 53100000, subscribers: 92600 },
    instagram: 'https://www.instagram.com/aisashbrin/',
    presentation: 'https://docs.google.com/presentation/d/1wpxMnvVj69Wqv4_humP9te1fswC9U2iyv6KkzxtfkSw/edit?usp=sharing'
  },
  {
    id: 5,
    title: 'Блог о маркетинге и нейросетях',
    niche: 'Образование',
    description: 'С помощью AI-аватара блог вырос до 272 тыс. подписчиков за 10 месяцев, охват 7,5 млн просмотров.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400&h=400',
    stats: { views: 53100000, subscribers: 272000, leads: 22828 },
    instagram: 'https://www.instagram.com/russgamzatov/',
    presentation: 'https://docs.google.com/presentation/d/1HoKH4gVPUh3FBIwUgtZRZF5wspe8AU-2qVTW96O7s3c/edit?usp=sharing'
  },
  {
    id: 6,
    title: 'Блог о видеоконтенте с помощью ИИ',
    niche: 'Видеопродакшн',
    description: 'AI-аватар увеличил блог до 104 тыс. подписчиков за 6 месяцев, охват ролика — 1,5 млн просмотров.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=400&h=400',
    stats: { views: 53100000, subscribers: 104000, leads: 13582 },
    instagram: 'https://www.instagram.com/neuro.gera/',
    presentation: 'https://docs.google.com/presentation/d/1N7e-E1KmbxEJpkrJbQRFRvh7aPGtM9UXD80h0azxeys/edit?usp=sharing'
  },
  {
    id: 7,
    title: 'Блог о видеоконтенте с помощью ИИ',
    niche: 'Видеопродакшн',
    description: 'Использование AI-аватара помогло блогу достичь 84 тыс. подписчиков за 8 месяцев, охват 1,6 млн просмотров.',
    image: 'https://images.unsplash.com/photo-1496559249665-c7e2874707ea?auto=format&fit=crop&q=80&w=400&h=400',
    stats: { views: 53100000, subscribers: 84000 },
    instagram: 'https://www.instagram.com/ivanavramenko/',
    presentation: 'https://docs.google.com/presentation/d/1sVudvm-JoiNbCAmmi1RHG7wSxRDFMRD0DLaXWQL8Kyk/edit?usp=sharing'
  },
  {
    id: 8,
    title: 'Блог про нейросети',
    niche: 'Образование',
    description: 'Создание контента с помощью AI-аватара увеличило блог до 55,9 тыс. подписчиков за 10 месяцев, максимальный охват ролика — 2,4 млн просмотров.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=400',
    stats: { views: 53100000, subscribers: 55900, leads: 11429 },
    instagram: 'https://www.instagram.com/igorbabkoff_ai/',
    presentation: 'https://docs.google.com/presentation/d/1XiH9JxGbLbQmMLWIqemjoWc8lKKavfloCUugSeJZV9A/edit?usp=sharing'
  },
  {
    id: 9,
    title: 'Блог про нейросети',
    niche: 'Образование',
    description: 'AI-аватар увеличил блог до 58,6 тыс. подписчиков за 13 месяцев, максимальный охват ролика — 2,4 млн просмотров.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400&h=400',
    stats: { views: 53100000, subscribers: 58600, leads: 3014 },
    instagram: 'https://www.instagram.com/egorkuzminxr/',
    presentation: 'https://docs.google.com/presentation/d/1niOdKb6G6OY2ajqdH7DMkk3hcp_J7W8UF9xQbKjC0pw/edit?usp=sharing'
  },
  {
    id: 10,
    title: 'Блог о маркетинге',
    niche: 'Бизнес',
    description: 'С помощью AI-аватара блог увеличился до 71,4 тыс. подписчиков за 11 месяцев, максимальный охват — 3,5 млн просмотров.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=400',
    stats: { views: 53100000, subscribers: 71400, leads: 13008 },
    instagram: 'https://www.instagram.com/bezikovkirilll/',
    presentation: 'https://docs.google.com/presentation/d/1a5JD_5gRQEqdocveoaR_sb04MHRgTGDBTvi-U-gZ8zk/edit?usp=sharing'
  },
  {
    id: 11,
    title: 'Блог о нейросетях, ИИ и маркетинге',
    niche: 'Образование',
    description: 'AI-аватар увеличил блог до 51,2 тыс. подписчиков за 13 месяцев, максимальный охват ролика — 2,8 млн просмотров.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400&h=400',
    stats: { views: 53100000, subscribers: 51200 },
    instagram: 'https://www.instagram.com/darya_creator/',
    presentation: 'https://docs.google.com/presentation/d/15cNxk9WCT7JYXKARwzDbK7LIQ5Kys8k9kk-wmCZ9BzE/edit?usp=sharing'
  },
  {
    id: 12,
    title: 'Блог о нейросетях',
    niche: 'Образование',
    description: 'С помощью AI-аватара блог вырос до 183 тыс. подписчиков за 19 месяцев, максимальный охват ролика — 22 млн просмотров.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=400&h=400',
    stats: { views: 53100000, subscribers: 183000, leads: 3650 },
    instagram: 'https://www.instagram.com/s.belyak/',
    presentation: 'https://docs.google.com/presentation/d/1LMysVxPiSZgnJUE4i8P9wF3GnAWXNk9Fh7R8DPGxiIE/edit?usp=sharing'
  }
];

export const CaseGrid = () => {
  const [selectedNiche, setSelectedNiche] = useState<string>('all');
  const [visibleCases, setVisibleCases] = useState<number[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const caseId = parseInt(entry.target.getAttribute('data-case-id') || '0', 10);
            if (caseId && !visibleCases.includes(caseId)) {
              setVisibleCases((prev) => [...prev, caseId]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-case-id]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selectedNiche]);

  const filteredCases = cases.filter(
    (case_) => selectedNiche === 'all' || case_.niche === selectedNiche
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative mb-6 sm:mb-8" id="niche-dropdown">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full sm:w-64 px-3 sm:px-4 py-2 text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex items-center justify-between hover:border-indigo-500 transition-colors duration-200 text-sm sm:text-base text-gray-700 dark:text-gray-300"
        >
          <span>
            {selectedNiche === 'all' ? 'Все ниши' : selectedNiche}
          </span>
          <ChevronDown
            className={`h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transition-transform duration-200 ${
              isDropdownOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 w-full sm:w-64 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
            <div className="py-1">
              <button
                onClick={() => {
                  setSelectedNiche('all');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-3 sm:px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm sm:text-base ${
                  selectedNiche === 'all' ? 'bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Все ниши
              </button>
              {niches.map((niche) => (
                <button
                  key={niche}
                  onClick={() => {
                    setSelectedNiche(niche);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-3 sm:px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm sm:text-base ${
                    selectedNiche === niche ? 'bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {niche}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4 sm:space-y-6">
        {filteredCases.map((case_) => (
          <div
            key={case_.id}
            data-case-id={case_.id}
            className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
              visibleCases.includes(case_.id)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-48 h-48 overflow-hidden">
                <img
                  src={case_.image}
                  alt={case_.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 p-4 sm:p-6">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                    {case_.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    {case_.niche}
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-3">
                  {case_.description}
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center group">
                    <Eye className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-1 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">{case_.stats.views.toLocaleString('ru-RU')}</span>
                  </div>
                  <div className="flex items-center group">
                    <Users className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-1 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">{case_.stats.subscribers.toLocaleString('ru-RU')}</span>
                  </div>
                  {case_.stats.leads && (
                    <div className="flex items-center group">
                      <Target className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-1 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">{case_.stats.leads.toLocaleString('ru-RU')}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={case_.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-all duration-300 hover:translate-x-1 group text-sm"
                  >
                    Instagram
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                  <a
                    href={case_.presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-all duration-300 hover:translate-x-1 group text-sm"
                  >
                    Подробнее
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
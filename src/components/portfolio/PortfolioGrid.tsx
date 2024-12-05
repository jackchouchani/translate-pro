import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { portfolioItems } from '../../data/portfolio';

export const PortfolioGrid = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'legal', 'medical', 'technical', 'business'];
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-md transition-colors ${
              filter === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {t(`portfolio.categories.${category}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={t(item.title)}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{t(item.title)}</h3>
              <p className="text-gray-600 mb-4">{t(item.description)}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.languages.map(lang => (
                  <span
                    key={lang}
                    className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500">{t(item.client)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
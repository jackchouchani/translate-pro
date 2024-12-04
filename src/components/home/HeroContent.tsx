import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const HeroContent = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        {t('hero.title')}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        {t('hero.subtitle')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/quote" 
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 flex items-center justify-center"
        >
          {t('hero.getQuote')} <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Link 
          to="/services" 
          className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 flex items-center justify-center"
        >
          {t('hero.ourServices')}
        </Link>
      </div>
    </motion.div>
  );
};
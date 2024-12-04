import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { QuoteCalculator } from '../components/quote/QuoteCalculator';
import { QuoteForm } from '../components/quote/QuoteForm';

export const QuotePage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6 text-center">{t('quote.title')}</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">{t('quote.subtitle')}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <QuoteCalculator />
            <QuoteForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BlogList } from '../components/blog/BlogList';
import { ResourcesList } from '../components/blog/ResourcesList';

export const BlogPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">{t('blog.title')}</h1>
          <p className="text-xl text-gray-600">{t('blog.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogList />
          </div>
          <div>
            <ResourcesList />
          </div>
        </div>
      </div>
    </div>
  );
};
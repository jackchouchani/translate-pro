import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { services } from '../data/services';
import { ServiceCard } from '../components/services/ServiceCard';

export const ServicesPage = () => {
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
          <h1 className="text-4xl font-bold mb-6">{t('services.mainPage.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('services.mainPage.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={{
                ...service,
                title: t(`services.${service.id}.title`),
                description: t(`services.${service.id}.description`)
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
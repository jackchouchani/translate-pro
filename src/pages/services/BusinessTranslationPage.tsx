import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, PieChart, Target, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const BusinessTranslationPage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Briefcase,
      title: t('services.business.features.professional.title'),
      description: t('services.business.features.professional.description')
    },
    {
      icon: PieChart,
      title: t('services.business.features.marketing.title'),
      description: t('services.business.features.marketing.description')
    },
    {
      icon: Target,
      title: t('services.business.features.localization.title'),
      description: t('services.business.features.localization.description')
    },
    {
      icon: Users,
      title: t('services.business.features.communication.title'),
      description: t('services.business.features.communication.description')
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">{t('services.business.title')}</h1>
          <p className="text-xl text-gray-600">{t('services.business.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">{t('services.business.documents.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t('services.business.documents.list', { returnObjects: true }).map((document: string, index: number) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-sm">
                <p className="text-gray-800">{document}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
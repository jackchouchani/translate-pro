import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Shield, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const CertificationPage = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: FileCheck,
      title: t('certification.steps.submission.title'),
      description: t('certification.steps.submission.description')
    },
    {
      icon: Shield,
      title: t('certification.steps.translation.title'),
      description: t('certification.steps.translation.description')
    },
    {
      icon: Clock,
      title: t('certification.steps.quality.title'),
      description: t('certification.steps.quality.description')
    },
    {
      icon: CheckCircle,
      title: t('certification.steps.certification.title'),
      description: t('certification.steps.certification.description')
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
          <h1 className="text-4xl font-bold mb-6">{t('certification.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('certification.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <step.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">{t('certification.recognition.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('certification.recognition.official.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('certification.recognition.official.description')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {t('certification.recognition.official.list', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('certification.recognition.quality.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('certification.recognition.quality.description')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {t('certification.recognition.quality.list', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import { motion } from 'framer-motion';
import { Award, GraduationCap, Building, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import aboutImage from '../assets/images/about/about.jpg';

export const AboutPage = () => {
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
          <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-gray-600">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={aboutImage}
              alt={t('about.officeImage')}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('about.features.certified.title')}</h3>
                <p className="text-gray-600">{t('about.features.certified.description')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <GraduationCap className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('about.features.expert.title')}</h3>
                <p className="text-gray-600">{t('about.features.expert.description')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Building className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('about.features.global.title')}</h3>
                <p className="text-gray-600">{t('about.features.global.description')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('about.features.client.title')}</h3>
                <p className="text-gray-600">{t('about.features.client.description')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
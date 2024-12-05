import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe2, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe2 className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">TranslatePro</span>
            </div>
            <p className="text-gray-400">
              {t('hero.subtitle')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">{t('footer.quickLinks.about')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">{t('footer.quickLinks.services')}</Link></li>
              <li><Link to="/certification" className="text-gray-400 hover:text-white">{t('footer.quickLinks.certification')}</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white">{t('footer.quickLinks.portfolio')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h3>
            <ul className="space-y-2">
              <li><Link to="/services/legal" className="text-gray-400 hover:text-white">{t('footer.services.legal')}</Link></li>
              <li><Link to="/services/medical" className="text-gray-400 hover:text-white">{t('footer.services.medical')}</Link></li>
              <li><Link to="/services/technical" className="text-gray-400 hover:text-white">{t('footer.services.technical')}</Link></li>
              <li><Link to="/services/business" className="text-gray-400 hover:text-white">{t('footer.services.business')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-400">+33 6 12 34 56 78</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-400">contact@translatepro.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-gray-400">123 Avenue de la Traduction, Paris, 75001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} TranslatePro. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
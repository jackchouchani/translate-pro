import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe2, Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">TranslatePro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-blue-600">{t('nav.about')}</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">{t('nav.services')}</Link>
            <Link to="/certification" className="text-gray-600 hover:text-blue-600">{t('nav.certification')}</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">{t('nav.contact')}</Link>
            <LanguageSwitcher />
            <Link to="/quote" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              {t('nav.getQuote')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/about" className="block text-gray-600 hover:text-blue-600">{t('nav.about')}</Link>
            <Link to="/services" className="block text-gray-600 hover:text-blue-600">{t('nav.services')}</Link>
            <Link to="/certification" className="block text-gray-600 hover:text-blue-600">{t('nav.certification')}</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600">{t('nav.contact')}</Link>
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <Link to="/quote" className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center">
              {t('nav.getQuote')}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
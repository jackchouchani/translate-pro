import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe2, Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Ferme le menu lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Gestion du clic en dehors du menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Empêche le défilement du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4" ref={menuRef}>
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
            <LanguageSwitcher isMobile={false} />
            <Link to="/quote" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              {t('nav.getQuote')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-x-0 top-[73px] transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'translate-x-0 opacity-100 visible'
              : 'translate-x-full opacity-0 invisible'
          }`}
        >
          <div className="bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/about" className="block p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                {t('nav.about')}
              </Link>
              <Link to="/services" className="block p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                {t('nav.services')}
              </Link>
              <Link to="/certification" className="block p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                {t('nav.certification')}
              </Link>
              <Link to="/contact" className="block p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                {t('nav.contact')}
              </Link>
              <LanguageSwitcher isMobile={true} /> {/* Passage de la prop isMobile */}
              <Link to="/quote" className="block bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 text-center">
                {t('nav.getQuote')}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
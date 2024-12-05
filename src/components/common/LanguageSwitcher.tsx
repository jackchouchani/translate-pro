import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe2, ChevronDown } from 'lucide-react';

export const LanguageSwitcher = ({ isMobile }: { isMobile?: boolean }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'fr', name: 'Français' }
  ];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${isMobile ? 'w-full' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center text-gray-600 hover:text-blue-600 ${
          isMobile 
            ? 'w-full p-2 justify-between hover:bg-gray-50 rounded-md' 
            : 'space-x-2'
        }`}
      >
        <span className="flex items-center space-x-2">
          <Globe2 className="h-5 w-5" />
          <span>{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
        </span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div 
          className={`
            absolute z-50 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5
            ${isMobile ? 'w-full top-full mt-1' : 'right-0 mt-2 w-48'}
          `}
        >
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`
                  block w-full text-left px-4 py-2 text-sm hover:bg-gray-100
                  ${i18n.language === language.code 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700'
                  }
                `}
                onClick={() => handleLanguageChange(language.code)}
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
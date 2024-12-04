import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe2 } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'fr', name: 'Français' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
        <Globe2 className="h-5 w-5" />
        <span>{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1">
          {languages.map((language) => (
            <button
              key={language.code}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => i18n.changeLanguage(language.code)}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
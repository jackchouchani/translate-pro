import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calculator } from 'lucide-react';

export const QuoteCalculator = () => {
  const { t } = useTranslation();
  const [wordCount, setWordCount] = useState<number>(0);
  const [documentType, setDocumentType] = useState<string>('general');
  const [urgency, setUrgency] = useState<string>('normal');

  const calculatePrice = () => {
    const baseRate =
      {
        general: 0.1,
        legal: 0.15,
        medical: 0.18,
        technical: 0.2,
      }[documentType] || 0.1;

    const urgencyMultiplier =
      {
        normal: 1,
        urgent: 1.5,
        express: 2,
      }[urgency] || 1;

    return (wordCount * baseRate * urgencyMultiplier).toFixed(2);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-semibold">
          {t('quote.calculator.title')}
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('quote.calculator.wordCount')}
          </label>
          <input
            type="number"
            min="0"
            value={wordCount}
            onChange={(e) =>
              setWordCount(Math.max(0, parseInt(e.target.value) || 0))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('quote.calculator.documentType')}
          </label>
          <select
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="general">
              {t('quote.calculator.types.general')}
            </option>
            <option value="legal">{t('quote.calculator.types.legal')}</option>
            <option value="medical">
              {t('quote.calculator.types.medical')}
            </option>
            <option value="technical">
              {t('quote.calculator.types.technical')}
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('quote.calculator.urgency')}
          </label>
          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="normal">
              {t('quote.calculator.urgency.normal')}
            </option>
            <option value="urgent">
              {t('quote.calculator.urgency.urgent')}
            </option>
            <option value="express">
              {t('quote.calculator.urgency.express')}
            </option>
          </select>
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">
              {t('quote.calculator.estimatedPrice')}
            </span>
            <span className="text-2xl font-bold text-blue-600">
              €{calculatePrice()}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {t('quote.calculator.disclaimer')}
          </p>
        </div>
      </div>
    </div>
  );
};

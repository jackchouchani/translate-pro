import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  sourceLanguage: string;
  targetLanguage: string;
  details: string;
}

type FormInputElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export const QuoteForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    sourceLanguage: '',
    targetLanguage: '',
    details: '',
  });

  const handleChange = (
    e: React.ChangeEvent<FormInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const encode = (data: Record<string, any>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "quote",
          ...formData
        })
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          sourceLanguage: '',
          targetLanguage: '',
          details: '',
        });
        alert(t('quote.form.successMessage'));
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('quote.form.errorMessage'));
    }
  };

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <input type="hidden" name="form-name" value="quote" />
      <div className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <Send className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-semibold">{t('quote.form.title')}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('quote.form.name')}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('quote.form.email')}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('quote.form.phone')}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('quote.form.sourceLanguage')}
            </label>
            <select
              name="sourceLanguage"
              value={formData.sourceLanguage}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">{t('quote.form.selectLanguage')}</option>
              <option value="en">{t('languages.english')}</option>
              <option value="tr">{t('languages.turkish')}</option>
              <option value="fr">{t('languages.french')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('quote.form.targetLanguage')}
            </label>
            <select
              name="targetLanguage"
              value={formData.targetLanguage}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">{t('quote.form.selectLanguage')}</option>
              <option value="en">{t('languages.english')}</option>
              <option value="tr">{t('languages.turkish')}</option>
              <option value="fr">{t('languages.french')}</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('quote.form.details')}
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          {t('quote.form.submit')}
        </button>
      </div>
    </form>
  );
};
import React from 'react';
import { Award, Clock, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FeatureCard } from './FeatureCard';

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      Icon: Award,
      title: t('features.certified.title'),
      description: t('features.certified.description')
    },
    {
      Icon: Clock,
      title: t('features.turnaround.title'),
      description: t('features.turnaround.description')
    },
    {
      Icon: Users,
      title: t('features.experts.title'),
      description: t('features.experts.description')
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
};
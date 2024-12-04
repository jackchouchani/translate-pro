import React from 'react';
import { motion } from 'framer-motion';
import { Scale, HeartPulse, Settings, Briefcase } from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const iconMap = {
  scale: Scale,
  'heart-pulse': HeartPulse,
  settings: Settings,
  briefcase: Briefcase,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
    >
      <Icon className="h-12 w-12 text-blue-600 mb-4" />
      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  );
};
import React from 'react';
import { motion } from 'framer-motion';

export const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <img 
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
        alt="Professional Translator"
        className="rounded-lg shadow-xl"
      />
    </motion.div>
  );
};
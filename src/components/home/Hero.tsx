import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';
import { Features } from './Features';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
        <Features />
      </div>
    </div>
  );
};
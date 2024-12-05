import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';
import { Features } from './Features';
import { Testimonials } from './Testimonials';

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <HeroContent />
            <HeroImage />
          </div>
          <Features />
        </div>
      </div>
      <Testimonials />
    </div>
  );
};
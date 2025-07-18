import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FeatureSection } from '@/components/FeatureSection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { TrustSection } from '@/components/TrustSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <TrustSection />
    </div>
  );
};

export default Index;

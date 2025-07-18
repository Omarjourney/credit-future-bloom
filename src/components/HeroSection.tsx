import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-credit-growth.jpg';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-medium">
                <TrendingUp className="w-5 h-5" />
                <span>Your Credit Journey Starts Here</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Rebuild Your Credit,{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Reclaim Your Future
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Take control of your financial destiny with our AI-powered credit repair platform. 
                Smart disputes, personalized plans, and expert guidance every step of the way.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group" onClick={() => navigate('/onboarding')}>
                Start Your Journey
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/dashboard')}>
                Preview Dashboard
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Free Credit Report Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Person climbing steps representing credit improvement journey"
                className="w-full h-auto rounded-2xl shadow-soft"
              />
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-xl shadow-soft">
                <div className="text-sm font-medium">+127 Points</div>
                <div className="text-xs opacity-80">Average Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
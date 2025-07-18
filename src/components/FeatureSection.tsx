import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Bot, FileText, Target, Shield, TrendingUp, Clock } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'Get personalized credit advice 24/7 from our intelligent assistant that learns your unique financial situation.',
    color: 'text-primary'
  },
  {
    icon: FileText,
    title: 'Dispute Automation',
    description: 'Automatically identify and dispute errors on your credit report with legally-backed letter templates.',
    color: 'text-accent'
  },
  {
    icon: Target,
    title: 'Personalized Credit Plan',
    description: 'Receive a custom roadmap tailored to your goals, whether buying a home, car, or improving overall creditworthiness.',
    color: 'text-success'
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your data is protected with 256-bit encryption'
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Average 127-point score improvement in 6 months'
  },
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'See initial results within 30-45 days'
  }
];

export const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Main Features */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="text-primary">Rebuild Your Credit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with proven credit repair strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="text-center border-0 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-hero flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="flex items-center gap-4 p-6 rounded-xl bg-card border animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
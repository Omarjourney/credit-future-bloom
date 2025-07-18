import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    score: '+156 points',
    text: 'CreditRise helped me go from 532 to 688 in just 8 months. I was finally able to buy my first home!',
    avatar: '👩🏽‍💼'
  },
  {
    name: 'Michael Chen',
    score: '+89 points',
    text: 'The AI assistant was like having a personal credit coach. Every question was answered immediately.',
    avatar: '👨🏻‍💻'
  },
  {
    name: 'Jessica Martinez',
    score: '+134 points',
    text: 'The dispute automation saved me hours of paperwork. Three errors removed in 2 months!',
    avatar: '👩🏻‍🎓'
  },
  {
    name: 'David Thompson',
    score: '+67 points',
    text: 'Finally got approved for that car loan I needed. The credit plan feature is a game-changer.',
    avatar: '👨🏾‍🔧'
  },
  {
    name: 'Emily Rodriguez',
    score: '+145 points',
    text: 'From bankruptcy to homeowner in 18 months. CreditRise made the impossible possible.',
    avatar: '👩🏽‍⚕️'
  }
];

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real People, <span className="text-primary">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands who have transformed their financial future with CreditRise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-success">{testimonial.score}</span>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-primary/20" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
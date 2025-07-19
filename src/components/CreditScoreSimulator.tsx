import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { CreditScoreDial } from '@/components/CreditScoreDial';

export const CreditScoreSimulator: React.FC = () => {
  const [score, setScore] = useState(650);
  const [animate, setAnimate] = useState(false);
  const prevScore = useRef(score);

  useEffect(() => {
    if (prevScore.current !== score) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 600);
      prevScore.current = score;
      return () => clearTimeout(timeout);
    }
  }, [score]);

  const getImpactLabel = (value: number) => {
    if (value >= 740) return 'Excellent';
    if (value >= 670) return 'Good';
    if (value >= 580) return 'Fair';
    return 'Poor';
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Credit Score Simulator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-6">
          <div className={`transition-transform ${animate ? 'animate-scale-in' : ''}`}>
            <CreditScoreDial score={score} animated={animate} />
          </div>
          <div className="w-full max-w-md">
            <Slider
              data-testid="score-slider"
              min={300}
              max={850}
              step={1}
              value={[score]}
              onValueChange={(v) => setScore(v[0])}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>300</span>
              <span>850</span>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Simulate credit changes
            </p>
          </div>
          <div className="text-sm font-medium">
            Impact: <span data-testid="impact-label">{getImpactLabel(score)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreditScoreSimulator;

import React from 'react';

interface CreditScoreDialProps {
  score: number;
  maxScore?: number;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const CreditScoreDial: React.FC<CreditScoreDialProps> = ({
  score,
  maxScore = 850,
  size = 'md',
  animated = true
}) => {
  const percentage = Math.min((score / maxScore) * 100, 100);
  const circumference = 2 * Math.PI * 45; // radius of 45
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const getScoreColor = (score: number) => {
    if (score >= 740) return 'text-success';
    if (score >= 670) return 'text-warning';
    return 'text-destructive';
  };

  const getStrokeColor = (score: number) => {
    if (score >= 740) return 'stroke-success';
    if (score >= 670) return 'stroke-warning';
    return 'stroke-destructive';
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${animated ? 'animate-scale-in' : ''}`}>
      <svg
        className="transform -rotate-90 w-full h-full"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="hsl(var(--muted))"
          strokeWidth="6"
          fill="transparent"
          className="opacity-20"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={`${getStrokeColor(score)} transition-all duration-1000 ease-out ${animated ? 'animate-glow-pulse' : ''}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`font-bold ${textSizes[size]} ${getScoreColor(score)}`}>
          {score}
        </span>
        <span className="text-xs text-muted-foreground">FICO® Score</span>
      </div>
    </div>
  );
};
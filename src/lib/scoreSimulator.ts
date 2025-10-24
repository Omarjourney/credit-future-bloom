// src/lib/scoreSimulator.ts

export interface CreditAction {
  type: 'payDownBalance' | 'openAccount' | 'closeAccount' | 'latePayment' | 'increaseLimit';
  amount?: number;
  date?: Date;
}

export interface ScoreSimulationResult {
  estimatedScore: number;
  explanation: string[];
}

export function simulateCreditScore(currentScore: number, actions: CreditAction[]): ScoreSimulationResult {
  // Placeholder logic: adjust score based on simple heuristics.
  let score = currentScore;
  const explanation: string[] = [];

  actions.forEach(action => {
    switch (action.type) {
      case 'payDownBalance':
        score += 10; // paying down improves credit
        explanation.push('Paying down balances can improve your credit utilization and score.');
        break;
      case 'openAccount':
        score -= 5; // opening account slightly lowers
        explanation.push('Opening a new account may temporarily lower your score due to hard inquiry.');
        break;
      case 'closeAccount':
        score -= 10;
        explanation.push('Closing an account can reduce available credit and age of credit history.');
        break;
      case 'latePayment':
        score -= 50;
        explanation.push('Late payments have significant negative impact on credit score.');
        break;
      case 'increaseLimit':
        score += 5;
        explanation.push('Increasing credit limit can improve credit utilization.');
        break;
      default:
        explanation.push('No effect for this action.');
    }
  });

  // Clamp to FICO range 300-850
  if (score > 850) score = 850;
  if (score < 300) score = 300;

  return { estimatedScore: score, explanation };
}

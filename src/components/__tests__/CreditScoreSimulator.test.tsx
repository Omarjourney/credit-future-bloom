import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import CreditScoreSimulator from '../CreditScoreSimulator';

describe('CreditScoreSimulator', () => {
  it('renders without crashing', () => {
    render(<CreditScoreSimulator />);
    expect(screen.getByText('Credit Score Simulator')).toBeInTheDocument();
    expect(screen.getByText('Simulate credit changes')).toBeInTheDocument();
  });

  it('updates score and impact when slider changes', async () => {
    render(<CreditScoreSimulator />);
    const slider = screen.getByRole('slider');
    const label = screen.getByTestId('impact-label');
    expect(label.textContent).toBe('Fair');

    await userEvent.tab(); // focus first element
    await userEvent.keyboard('{End}');

    expect(label.textContent).toBe('Excellent');
  });

  it('maps score to correct impact label', () => {
    render(<CreditScoreSimulator />);
    const label = screen.getByTestId('impact-label');
    expect(label.textContent).toBe('Fair');
  });
});

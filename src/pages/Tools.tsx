import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CreditScoreDial } from '@/components/CreditScoreDial';
import { 
  Calculator, 
  Calendar, 
  CreditCard, 
  PiggyBank, 
  TrendingUp,
  Filter,
  Search,
  DollarSign
} from 'lucide-react';

const Tools = () => {
  const [simulatorScore, setSimulatorScore] = useState(678);
  const [utilization, setUtilization] = useState(25);
  const [onTimePayments, setOnTimePayments] = useState(100);
  const navigate = useNavigate();

  const calculateProjectedScore = () => {
    let projected = simulatorScore;
    
    // Utilization impact
    if (utilization < 10) projected += 30;
    else if (utilization < 30) projected += 10;
    else if (utilization > 50) projected -= 20;
    
    // Payment history impact
    if (onTimePayments === 100) projected += 15;
    else if (onTimePayments > 95) projected += 5;
    else if (onTimePayments < 90) projected -= 25;
    
    return Math.min(850, Math.max(300, projected));
  };

  const creditCards = [
    {
      name: 'Chase Freedom Unlimited',
      apr: '20.49% - 29.24%',
      bonus: '$200 Bonus',
      features: ['1.5% cashback', 'No annual fee'],
      score: 'Good (670+)'
    },
    {
      name: 'Capital One Quicksilver',
      apr: '19.74% - 29.74%',
      bonus: '$200 Bonus',
      features: ['1.5% cashback', 'No foreign fees'],
      score: 'Fair (580+)'
    },
    {
      name: 'Discover it Cash Back',
      apr: '18.24% - 27.24%',
      bonus: 'Cashback Match',
      features: ['5% rotating categories', 'No annual fee'],
      score: 'Good (670+)'
    }
  ];

  const upcomingBills = [
    { name: 'Credit Card #1', amount: 125, due: '2024-01-15', status: 'due-soon' },
    { name: 'Car Payment', amount: 385, due: '2024-01-18', status: 'upcoming' },
    { name: 'Utilities', amount: 150, due: '2024-01-20', status: 'upcoming' },
    { name: 'Student Loan', amount: 275, due: '2024-01-25', status: 'upcoming' },
  ];

  return (
    <div className="min-h-screen bg-background p-4 animate-fade">
      <div className="flex justify-end mb-4">
        <Button variant="ghost" size="sm" onClick={() => navigate('/')}>Home</Button>
      </div>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Credit Building <span className="text-primary">Tools</span>
          </h1>
          <p className="text-muted-foreground">
            Powerful tools to simulate, plan, and optimize your credit journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Credit Score Simulator */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Credit Score Simulator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Controls */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Credit Utilization: {utilization}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={utilization}
                      onChange={(e) => setUtilization(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      On-Time Payments: {onTimePayments}%
                    </label>
                    <input
                      type="range"
                      min="60"
                      max="100"
                      value={onTimePayments}
                      onChange={(e) => setOnTimePayments(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>60%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-hero rounded-lg">
                    <h3 className="font-semibold mb-2">Quick Tips</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Keep utilization below 30%</li>
                      <li>• Never miss payments</li>
                      <li>• Pay down highest balances first</li>
                    </ul>
                  </div>
                </div>

                {/* Current Score */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">Current Score</h3>
                  <CreditScoreDial score={simulatorScore} size="md" animated={false} />
                </div>

                {/* Projected Score */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">Projected Score</h3>
                  <CreditScoreDial score={calculateProjectedScore()} size="md" />
                  <div className="mt-4 p-3 bg-success/10 rounded-lg">
                    <div className="text-lg font-bold text-success">
                      +{calculateProjectedScore() - simulatorScore} Points
                    </div>
                    <div className="text-xs text-muted-foreground">Potential increase</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bill Calendar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Bill Calendar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingBills.map((bill, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    bill.status === 'due-soon' 
                      ? 'border-warning bg-warning/5' 
                      : 'border-border'
                  }`}
                >
                  <div>
                    <div className="font-medium">{bill.name}</div>
                    <div className="text-sm text-muted-foreground">Due: {bill.due}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">${bill.amount}</div>
                    <div className={`text-xs ${
                      bill.status === 'due-soon' ? 'text-warning' : 'text-muted-foreground'
                    }`}>
                      {bill.status === 'due-soon' ? 'Due Soon' : 'Upcoming'}
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                <Calendar className="w-4 h-4 mr-2" />
                View Full Calendar
              </Button>
            </CardContent>
          </Card>

          {/* Credit Card Finder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Credit Card Finder
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  No Annual Fee
                </Button>
                <Button variant="outline" size="sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Cashback
                </Button>
              </div>

              <div className="space-y-3">
                {creditCards.map((card, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-soft transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{card.name}</h3>
                      <span className="text-sm bg-success/10 text-success px-2 py-1 rounded">
                        {card.score}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      APR: {card.apr}
                    </div>
                    <div className="text-sm font-medium text-primary mb-2">
                      {card.bonus}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {card.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full">
                <Search className="w-4 h-4 mr-2" />
                View All Cards
              </Button>
            </CardContent>
          </Card>

          {/* Budget Tracker */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PiggyBank className="w-5 h-5 text-primary" />
                Monthly Budget Tracker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Income</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Salary</span>
                      <span className="font-medium">$4,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Side Hustle</span>
                      <span className="font-medium">$800</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total Income</span>
                        <span className="text-success">$5,300</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Fixed Expenses</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Rent</span>
                      <span className="font-medium">$1,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Car Payment</span>
                      <span className="font-medium">$385</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Insurance</span>
                      <span className="font-medium">$150</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total Fixed</span>
                        <span className="text-destructive">$1,735</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Debt Payments</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Credit Cards</span>
                      <span className="font-medium">$425</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Student Loans</span>
                      <span className="font-medium">$275</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total Debt</span>
                        <span className="text-warning">$700</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-hero rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">$2,865</div>
                      <div className="text-sm text-muted-foreground">Available for goals</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tools;
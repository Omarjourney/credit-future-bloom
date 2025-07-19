import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditScoreDial } from '@/components/CreditScoreDial';
import { AIAssistantModal } from '@/components/AIAssistantModal';
import { Bot, Bell, TrendingUp, CheckCircle, AlertTriangle, Target, Award, Settings, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);
  const creditScore = 678;
  const monthlyChange = '+12';
  const goal = { score: 700, date: 'Dec 2025' };

  const actionItems = [
    { id: 1, text: 'Dispute duplicate account with Experian', impact: 'High', completed: false },
    { id: 2, text: 'Pay down Credit Card #1 to below 30%', impact: 'Medium', completed: true },
    { id: 3, text: 'Set up automatic payments for utilities', impact: 'Medium', completed: false },
    { id: 4, text: 'Request credit limit increase on oldest card', impact: 'Low', completed: false }
  ];

  const achievements = [
    { id: 1, name: 'First Dispute Filed', icon: '🎯', unlocked: true },
    { id: 2, name: 'Payment Streak', icon: '⚡', unlocked: true },
    { id: 3, name: 'Score Milestone', icon: '🏆', unlocked: false },
    { id: 4, name: 'Debt Reduction', icon: '📈', unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-background p-4 animate-fade">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            CreditRise
          </button>
          <nav className="hidden md:flex items-center gap-4 ml-8">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}">
              Home
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate('/tools')}>
              Tools
            </Button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={() => setIsAIAssistantOpen(true)}>
            <Bot className="w-4 h-4 mr-2" />
            AI Assistant
          </Button>
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Alert Banner */}
        <Card className="border-warning bg-warning/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-warning" />
              <span className="text-sm">
                <strong>Good news!</strong> Experian removed the disputed account from your report. Your score increased by 23 points.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Credit Score Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Credit Score Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <CreditScoreDial score={creditScore} size="lg" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">This Month</div>
                    <div className="text-2xl font-bold text-success">{monthlyChange}</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Goal: {goal.score} by {goal.date}
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(creditScore / goal.score) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Score History Chart Placeholder */}
                <div className="h-48 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Score Progress Chart</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Plan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Your Action Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {actionItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      item.completed ? 'bg-success border-success' : 'border-muted-foreground'
                    }`}>
                      {item.completed && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                    <div className="flex-1">
                      <div className={`${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                        {item.text}
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      item.impact === 'High' ? 'bg-destructive/10 text-destructive' :
                      item.impact === 'Medium' ? 'bg-warning/10 text-warning' :
                      'bg-success/10 text-success'
                    }`}>
                      {item.impact} Impact
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id}
                      className={`p-4 rounded-lg border text-center transition-all ${
                        achievement.unlocked 
                          ? 'border-success bg-success/5' 
                          : 'border-muted bg-muted/20 opacity-50'
                      }`}
                    >
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <div className="text-xs font-medium">{achievement.name}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Credit Report Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Credit Report Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Open Accounts</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Collections</span>
                  <span className="font-medium text-warning">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Hard Inquiries</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Credit Utilization</span>
                  <span className="font-medium text-success">24%</span>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Months of On-Time Payments</div>
                  <div className="mt-4 text-xs text-success">🔥 Keep it up! You're on track!</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* AI Assistant Modal */}
      <AIAssistantModal 
        isOpen={isAIAssistantOpen} 
        onClose={() => setIsAIAssistantOpen(false)} 
      />
    </div>
  );
};

export default Dashboard;
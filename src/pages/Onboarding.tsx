import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Home, CreditCard, AlertTriangle, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const goals = [
    {
      id: 'home',
      title: 'Buy a Home',
      description: 'Get mortgage-ready with the credit score you need',
      icon: Home,
      color: 'text-primary'
    },
    {
      id: 'debt',
      title: 'Pay Off Debt',
      description: 'Consolidate and eliminate high-interest debt',
      icon: CreditCard,
      color: 'text-accent'
    },
    {
      id: 'errors',
      title: 'Fix Errors',
      description: 'Remove inaccurate items damaging your score',
      icon: AlertTriangle,
      color: 'text-warning'
    }
  ];

  const [selectedGoal, setSelectedGoal] = useState<string>('');

  const steps = [
    {
      title: 'Welcome to CreditRise!',
      subtitle: 'Your journey to better credit starts here',
      content: (
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center animate-glow-pulse">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Let&apos;s rebuild your credit together</h2>
            <p className="text-muted-foreground">
              In just a few minutes, we&apos;ll create a personalized plan to help you reach your financial goals.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'What&apos;s your main goal?',
      subtitle: 'Choose your primary financial objective',
      content: (
        <div className="space-y-4 animate-fade-in-up">
          {goals.map((goal) => (
            <Card 
              key={goal.id}
              className={`cursor-pointer transition-all hover:shadow-glow ${
                selectedGoal === goal.id ? 'border-primary shadow-glow' : ''
              }`}
              onClick={() => setSelectedGoal(goal.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center ${goal.color}`}>
                    <goal.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{goal.title}</h3>
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )
    },
    {
      title: 'Secure Information',
      subtitle: 'We need some basic info to get started',
      content: (
        <div className="space-y-4 animate-fade-in-up">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date of Birth</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="password" 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="***-**-****"
                  />
                </div>
                <div className="mt-4 p-4 bg-success/10 rounded-lg">
                  <div className="flex items-center gap-2 text-success text-sm">
                    <div className="w-4 h-4 bg-success rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Your information is encrypted and secure</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Connect Your Credit Report',
      subtitle: 'Link your credit profile for personalized insights',
      content: (
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {['Experian', 'Equifax', 'TransUnion'].map((bureau) => (
              <div key={bureau} className="p-4 border rounded-lg">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-hero flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{bureau.slice(0, 3).toUpperCase()}</span>
                </div>
                <div className="text-xs text-muted-foreground">{bureau}</div>
              </div>
            ))}
          </div>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Secure OAuth Connection</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We&apos;ll securely connect to your credit reports using bank-level encryption
            </p>
            <Button variant="outline" className="w-full">
              Connect Credit Reports
            </Button>
          </Card>
        </div>
      )
    },
    {
      title: 'Your Personalized Plan',
      subtitle: 'AI-generated roadmap to your financial goals',
      content: (
        <div className="space-y-6 animate-fade-in-up">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🎊</div>
            <h2 className="text-2xl font-bold mb-2">Plan Generated!</h2>
            <p className="text-muted-foreground">Based on your goals and credit profile</p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Your 6-Month Action Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Dispute 2 inaccurate accounts</span>
                <span className="text-xs text-success ml-auto">+45 pts</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Reduce utilization to 15%</span>
                <span className="text-xs text-success ml-auto">+32 pts</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Set up payment reminders</span>
                <span className="text-xs text-success ml-auto">+18 pts</span>
              </div>
              <div className="text-center pt-4 border-t">
                <div className="text-2xl font-bold text-success">+95 Points</div>
                <div className="text-sm text-muted-foreground">Projected increase</div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final step - navigate to dashboard
      navigate('/dashboard');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    if (currentStep === 1) return selectedGoal !== '';
    return true;
  };

  return (
    <div className="relative min-h-screen bg-gradient-hero flex items-center justify-center p-4 animate-fade">
      <Button
        variant="outline"
        size="sm"
        className="absolute top-4 left-4"
        onClick={() => navigate('/')}
      >
        Home
      </Button>
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Step {currentStep + 1} of {steps.length}</span>
            <span className="text-sm text-muted-foreground">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content Card */}
        <Card className="shadow-glow">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{steps[currentStep].title}</CardTitle>
            <p className="text-muted-foreground">{steps[currentStep].subtitle}</p>
          </CardHeader>
          <CardContent className="min-h-[400px] flex items-center">
            {steps[currentStep].content}
          </CardContent>
          
          {/* Navigation */}
          <div className="flex justify-between p-6 pt-0">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            <Button 
              onClick={nextStep}
              disabled={currentStep === steps.length - 1 || !canProceed()}
              variant={currentStep === steps.length - 1 ? "success" : "default"}
            >
              {currentStep === steps.length - 1 ? 'Get Started' : 'Continue'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;

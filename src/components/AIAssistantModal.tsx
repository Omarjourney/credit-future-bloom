import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { X, Send, Bot, User } from 'lucide-react';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedPrompts = [
  "How do I fix a late payment?",
  "What's the fastest way to improve my score?",
  "Should I close old credit cards?",
  "How does credit utilization affect my score?",
  "What's a good credit mix?",
  "How to dispute an error on my report?"
];

const sampleMessages = [
  {
    type: 'assistant',
    content: "Hi! I'm your AI credit advisor. I'm here to help you understand your credit and guide you toward your financial goals. What would you like to know?"
  },
  {
    type: 'user',
    content: "I have a late payment from 2 years ago. Will it affect my mortgage application?"
  },
  {
    type: 'assistant',
    content: "Great question! A 2-year-old late payment has less impact than recent ones. Here's what you should know:\n\n• Late payments older than 24 months have minimal impact\n• Your recent payment history (last 12-24 months) matters most\n• If it's an isolated incident, lenders may overlook it\n\nFor your mortgage application, focus on:\n1. Keeping current accounts in good standing\n2. Maintaining low credit utilization\n3. Avoiding new credit inquiries\n\nWould you like me to help you prepare a strategy for your mortgage application?"
  }
];

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState(sampleMessages);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, {
      type: 'user',
      content: inputValue
    }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: "Thanks for your question! I'm analyzing your credit profile and current situation. Based on your goals and credit history, here's my recommendation..."
      }]);
    }, 1000);
    
    setInputValue('');
  };

  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl h-[80vh] flex flex-col shadow-glow">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              AI Credit Advisor
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <div className="flex flex-1 overflow-hidden">
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div 
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}
                  >
                    <div className="text-sm whitespace-pre-line">{message.content}</div>
                  </div>
                  {message.type === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask me anything about credit..."
                  className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button onClick={sendMessage} disabled={!inputValue.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Suggested Prompts Sidebar */}
          <div className="w-80 border-l p-4 bg-gradient-hero">
            <h3 className="font-semibold mb-4">Suggested Questions</h3>
            <div className="space-y-2">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(prompt)}
                  className="w-full text-left p-3 text-sm rounded-lg border hover:bg-card transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-success/10 rounded-lg">
              <h4 className="font-medium text-success mb-2">💡 Pro Tip</h4>
              <p className="text-xs text-muted-foreground">
                Be specific with your questions for more personalized advice. I can help with disputes, payment strategies, and credit optimization.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
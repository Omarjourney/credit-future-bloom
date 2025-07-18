import React from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-background border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by Credit Bureaus & <span className="text-primary">Protected by Law</span>
          </h2>
          <p className="text-muted-foreground">
            We work directly with major credit bureaus using federally mandated processes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {/* Credit Bureau Logos */}
          <div className="flex flex-col items-center gap-4 animate-fade-in-up">
            <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center">
              <span className="text-xl font-bold text-primary">EXP</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Experian</span>
          </div>

          <div className="flex flex-col items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center">
              <span className="text-xl font-bold text-primary">EQF</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Equifax</span>
          </div>

          <div className="flex flex-col items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center">
              <span className="text-xl font-bold text-primary">TU</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">TransUnion</span>
          </div>

          {/* Security Badge */}
          <div className="flex flex-col items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 rounded-xl bg-success/10 flex items-center justify-center">
              <Lock className="w-8 h-8 text-success" />
            </div>
            <span className="text-sm font-medium text-success">256-bit SSL</span>
          </div>
        </div>

        {/* Legal Compliance */}
        <div className="mt-12 p-6 rounded-xl bg-card border">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                FCRA & FDCPA Compliant
                <CheckCircle className="w-5 h-5 text-success" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All disputes are handled in accordance with the Fair Credit Reporting Act (FCRA) and Fair Debt Collection Practices Act (FDCPA). 
                Your rights are protected by federal law, and we ensure every action taken on your behalf meets strict legal standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
"use client";

import { FC } from 'react';

interface SubscriptionFeature {
  name: string;
  description: string;
  tiers: {
    free: boolean;
    standard: boolean;
    enterprise: boolean;
  };
}

interface SubscriptionTierSelectorProps {
  features: SubscriptionFeature[];
  selectedTier: 'free' | 'standard' | 'enterprise';
  onTierChange: (tier: 'free' | 'standard' | 'enterprise') => void;
}

const SubscriptionTierSelector: FC<SubscriptionTierSelectorProps> = ({
  features,
  selectedTier,
  onTierChange
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Tier Selection Tabs */}
      <div className="flex flex-col sm:flex-row justify-center mb-8 border border-muted rounded-lg overflow-hidden">
        <button
          onClick={() => onTierChange('free')}
          className={`py-3 px-6 text-center font-medium ${
            selectedTier === 'free'
              ? 'bg-accent text-primary'
              : 'bg-secondary text-white hover:bg-secondary/70'
          } transition-colors`}
        >
          Free
        </button>
        <button
          onClick={() => onTierChange('standard')}
          className={`py-3 px-6 text-center font-medium ${
            selectedTier === 'standard'
              ? 'bg-accent text-primary'
              : 'bg-secondary text-white hover:bg-secondary/70'
          } transition-colors`}
        >
          Standard
        </button>
        <button
          onClick={() => onTierChange('enterprise')}
          className={`py-3 px-6 text-center font-medium ${
            selectedTier === 'enterprise'
              ? 'bg-accent text-primary'
              : 'bg-secondary text-white hover:bg-secondary/70'
          } transition-colors`}
        >
          Enterprise
        </button>
      </div>

      {/* Feature List */}
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${
              feature.tiers[selectedTier]
                ? 'border-accent bg-secondary'
                : 'border-muted bg-secondary/50'
            } transition-colors`}
          >
            <div className="flex items-start">
              {feature.tiers[selectedTier] ? (
                <svg
                  className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-muted-foreground mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
              <div>
                <h3
                  className={`text-lg font-medium ${
                    feature.tiers[selectedTier] ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {feature.name}
                </h3>
                <p
                  className={
                    feature.tiers[selectedTier] ? 'text-white/80' : 'text-white/40'
                  }
                >
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-8 text-center">
        <a
          href={selectedTier === 'enterprise' ? '/contact' : '/signup'}
          className="btn-primary inline-block"
        >
          {selectedTier === 'free'
            ? 'Sign Up Free'
            : selectedTier === 'standard'
            ? 'Start Free Trial'
            : 'Contact Sales'}
        </a>
      </div>
    </div>
  );
};

export default SubscriptionTierSelector;

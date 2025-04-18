"use client";

import { FC } from 'react';

interface PricingCardProps {
  tier: 'Free' | 'Standard' | 'Enterprise';
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isHighlighted?: boolean;
}

const PricingCard: FC<PricingCardProps> = ({
  tier,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  isHighlighted = false,
}) => {
  return (
    <div className={`${isHighlighted ? 'pricing-card-highlight' : 'pricing-card'} flex flex-col h-full`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{tier}</h3>
        <div className="mb-3">
          <span className="text-3xl font-bold text-foreground">{price}</span>
          {tier !== 'Enterprise' && <span className="text-muted-foreground">/month</span>}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="flex-grow">
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-accent mr-2 mt-0.5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto">
        <a 
          href={ctaLink} 
          className={`w-full text-center ${isHighlighted ? 'btn-primary' : 'btn-outline'}`}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default PricingCard;

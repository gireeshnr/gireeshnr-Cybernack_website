"use client";

import { FC } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundClass?: string;
}

const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundClass = 'bg-primary',
}) => {
  return (
    <section className={`${backgroundClass} py-20 md:py-28 lg:py-32 relative overflow-hidden`}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-30"></div>
      
      {/* Abstract cyber security graphic element (SVG pattern) */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="50%" cy="50%" r="150" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50%" cy="50%" r="100" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50%" cy="50%" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-foreground mb-6">{title}</h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 md:mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={ctaLink} className="btn-primary text-center">
              {ctaText}
            </a>
            {secondaryCtaText && secondaryCtaLink && (
              <a href={secondaryCtaLink} className="btn-outline text-center">
                {secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

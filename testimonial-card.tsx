"use client";

import { FC } from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image?: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  quote,
  name,
  position,
  company,
  image
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
      <div className="mb-4">
        <svg className="h-8 w-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-foreground mb-6">{quote}</p>
      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <img 
              src={image} 
              alt={`${name} profile`} 
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-muted-foreground text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

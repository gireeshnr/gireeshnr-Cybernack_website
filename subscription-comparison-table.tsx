"use client";

import { FC } from 'react';

interface SubscriptionComparisonTableProps {
  features: {
    category?: string;
    name: string;
    free: string | boolean;
    standard: string | boolean;
    enterprise: string | boolean;
  }[];
}

const SubscriptionComparisonTable: FC<SubscriptionComparisonTableProps> = ({ features }) => {
  // Helper function to render check marks, x marks, or text
  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <svg className="h-6 w-6 text-accent mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="h-6 w-6 text-muted-foreground mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    }
    return <span className="text-white">{value}</span>;
  };

  // Group features by category
  const groupedFeatures: Record<string, typeof features> = {};
  features.forEach(feature => {
    const category = feature.category || 'General';
    if (!groupedFeatures[category]) {
      groupedFeatures[category] = [];
    }
    groupedFeatures[category].push(feature);
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-muted">
            <th className="py-4 px-6 text-left text-white">Feature</th>
            <th className="py-4 px-6 text-center text-white">Free</th>
            <th className="py-4 px-6 text-center text-white">Standard</th>
            <th className="py-4 px-6 text-center text-white">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedFeatures).map(([category, categoryFeatures], categoryIndex) => (
            <>
              {/* Category header if there are multiple categories */}
              {Object.keys(groupedFeatures).length > 1 && (
                <tr key={`category-${categoryIndex}`} className="bg-secondary/50">
                  <td colSpan={4} className="py-3 px-6 font-semibold text-white">
                    {category}
                  </td>
                </tr>
              )}
              
              {/* Features in this category */}
              {categoryFeatures.map((feature, featureIndex) => (
                <tr 
                  key={`feature-${categoryIndex}-${featureIndex}`} 
                  className="border-b border-muted hover:bg-secondary/30 transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-white">{feature.name}</td>
                  <td className="py-4 px-6 text-center">{renderCell(feature.free)}</td>
                  <td className="py-4 px-6 text-center">{renderCell(feature.standard)}</td>
                  <td className="py-4 px-6 text-center">{renderCell(feature.enterprise)}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionComparisonTable;

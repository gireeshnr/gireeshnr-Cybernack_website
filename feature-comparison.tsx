"use client";

import { FC, useState } from 'react';
import SubscriptionComparisonTable from './subscription-comparison-table';

interface FeatureComparisonProps {}

const FeatureComparison: FC<FeatureComparisonProps> = () => {
  const features = [
    {
      category: 'Training Modules',
      name: 'Basic Security Awareness',
      free: true,
      standard: true,
      enterprise: true
    },
    {
      category: 'Training Modules',
      name: 'Phishing Awareness',
      free: true,
      standard: true,
      enterprise: true
    },
    {
      category: 'Training Modules',
      name: 'Password Security',
      free: true,
      standard: true,
      enterprise: true
    },
    {
      category: 'Training Modules',
      name: 'Social Engineering',
      free: false,
      standard: true,
      enterprise: true
    },
    {
      category: 'Training Modules',
      name: 'Mobile Device Security',
      free: false,
      standard: true,
      enterprise: true
    },
    {
      category: 'Training Modules',
      name: 'Advanced Threat Protection',
      free: false,
      standard: false,
      enterprise: true
    },
    {
      category: 'Training Modules',
      name: 'Custom Modules',
      free: false,
      standard: false,
      enterprise: true
    },
    {
      category: 'Reporting & Analytics',
      name: 'Basic Completion Reports',
      free: true,
      standard: true,
      enterprise: true
    },
    {
      category: 'Reporting & Analytics',
      name: 'User Progress Tracking',
      free: 'Limited',
      standard: 'Advanced',
      enterprise: 'Comprehensive'
    },
    {
      category: 'Reporting & Analytics',
      name: 'Risk Assessment',
      free: false,
      standard: 'Basic',
      enterprise: 'Advanced'
    },
    {
      category: 'Reporting & Analytics',
      name: 'Custom Reports',
      free: false,
      standard: false,
      enterprise: true
    },
    {
      category: 'Support',
      name: 'Community Support',
      free: true,
      standard: true,
      enterprise: true
    },
    {
      category: 'Support',
      name: 'Email Support',
      free: false,
      standard: 'Priority',
      enterprise: '24/7'
    },
    {
      category: 'Support',
      name: 'Phone Support',
      free: false,
      standard: false,
      enterprise: true
    },
    {
      category: 'Support',
      name: 'Dedicated Account Manager',
      free: false,
      standard: false,
      enterprise: true
    },
    {
      category: 'User Management',
      name: 'User Import',
      free: 'Manual',
      standard: 'CSV Import',
      enterprise: 'API & SSO'
    },
    {
      category: 'User Management',
      name: 'User Groups',
      free: false,
      standard: true,
      enterprise: true
    },
    {
      category: 'User Management',
      name: 'Role-based Access Control',
      free: false,
      standard: 'Basic',
      enterprise: 'Advanced'
    },
    {
      category: 'Integrations',
      name: 'Email Integration',
      free: true,
      standard: true,
      enterprise: true
    },
    {
      category: 'Integrations',
      name: 'SSO Integration',
      free: false,
      standard: false,
      enterprise: true
    },
    {
      category: 'Integrations',
      name: 'API Access',
      free: false,
      standard: 'Limited',
      enterprise: 'Full'
    },
    {
      category: 'Integrations',
      name: 'SIEM Integration',
      free: false,
      standard: false,
      enterprise: true
    }
  ];

  return (
    <div className="w-full">
      <SubscriptionComparisonTable features={features} />
    </div>
  );
};

export default FeatureComparison;

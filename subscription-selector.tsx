import { FC, useState } from 'react';

interface SubscriptionSelectorProps {
  onSelect: (tier: 'free' | 'standard' | 'enterprise') => void;
  initialTier?: 'free' | 'standard' | 'enterprise';
}

const SubscriptionSelector: FC<SubscriptionSelectorProps> = ({ 
  onSelect, 
  initialTier = 'standard' 
}) => {
  const [selectedTier, setSelectedTier] = useState<'free' | 'standard' | 'enterprise'>(initialTier);

  const handleSelect = (tier: 'free' | 'standard' | 'enterprise') => {
    setSelectedTier(tier);
    onSelect(tier);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Free Tier */}
      <div 
        className={`bg-secondary rounded-lg p-6 border-2 transition-all cursor-pointer ${
          selectedTier === 'free' ? 'border-accent shadow-lg' : 'border-transparent hover:border-accent/50'
        }`}
        onClick={() => handleSelect('free')}
      >
        <div className="flex items-start mb-4">
          <input 
            type="radio" 
            id="free-tier" 
            name="subscription" 
            className="mt-1 mr-3" 
            checked={selectedTier === 'free'}
            onChange={() => handleSelect('free')}
          />
          <div>
            <label htmlFor="free-tier" className="block text-xl font-bold text-white">Free</label>
            <p className="text-white/60">$0/month</p>
          </div>
        </div>
        <p className="text-white/80 mb-4">Basic features to help small businesses get started</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Limited set of modules</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Basic reporting</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Up to 10 users</span>
          </li>
        </ul>
      </div>
      
      {/* Standard Tier */}
      <div 
        className={`bg-secondary rounded-lg p-6 border-2 transition-all cursor-pointer ${
          selectedTier === 'standard' ? 'border-accent shadow-lg' : 'border-transparent hover:border-accent/50'
        }`}
        onClick={() => handleSelect('standard')}
      >
        <div className="flex items-start mb-4">
          <input 
            type="radio" 
            id="standard-tier" 
            name="subscription" 
            className="mt-1 mr-3" 
            checked={selectedTier === 'standard'}
            onChange={() => handleSelect('standard')}
          />
          <div>
            <label htmlFor="standard-tier" className="block text-xl font-bold text-white">Standard</label>
            <p className="text-white/60">$5/month per user</p>
          </div>
        </div>
        <p className="text-white/80 mb-4">Enhanced features for growing organizations</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">All Free features</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Enhanced modules</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Advanced reporting</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Priority email support</span>
          </li>
        </ul>
      </div>
      
      {/* Enterprise Tier */}
      <div 
        className={`bg-secondary rounded-lg p-6 border-2 transition-all cursor-pointer ${
          selectedTier === 'enterprise' ? 'border-accent shadow-lg' : 'border-transparent hover:border-accent/50'
        }`}
        onClick={() => handleSelect('enterprise')}
      >
        <div className="flex items-start mb-4">
          <input 
            type="radio" 
            id="enterprise-tier" 
            name="subscription" 
            className="mt-1 mr-3" 
            checked={selectedTier === 'enterprise'}
            onChange={() => handleSelect('enterprise')}
          />
          <div>
            <label htmlFor="enterprise-tier" className="block text-xl font-bold text-white">Enterprise</label>
            <p className="text-white/60">Contact Us</p>
          </div>
        </div>
        <p className="text-white/80 mb-4">Comprehensive solution for complex security requirements</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">All Standard features</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Premium support</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Enterprise integrations</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Custom module options</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionSelector;

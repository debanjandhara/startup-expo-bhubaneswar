
import React from 'react';
import { Check } from 'lucide-react';

interface TicketFeature {
  text: string;
  included: boolean;
}

interface TicketCardProps {
  title: string;
  price: {
    daily: string;
    fullPass: string;
  };
  features: TicketFeature[];
  recommended?: boolean;
  onClick: () => void;
}

const TicketCard: React.FC<TicketCardProps> = ({
  title,
  price,
  features,
  recommended = false,
  onClick
}) => {
  return (
    <div className={`rounded-lg overflow-hidden transition-transform hover:-translate-y-1 ${
      recommended ? 'border-2 border-expo-gold shadow-lg' : 'border border-gray-200 shadow'
    }`}>
      {recommended && (
        <div className="bg-expo-gold text-expo-darkBlue font-bold py-1 text-center text-sm">
          RECOMMENDED
        </div>
      )}
      
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <div className="mt-4 mb-6">
          <div className="flex items-end">
            <span className="text-3xl font-bold text-expo-blue">{price.daily}</span>
            <span className="text-gray-500 ml-1">per day</span>
          </div>
          <div className="text-gray-600 mt-1">or {price.fullPass} full pass</div>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${
                feature.included ? 'text-expo-blue' : 'text-gray-300'
              }`} />
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={onClick}
          className={`w-full py-3 rounded-md font-medium ${
            recommended
              ? 'bg-expo-gold text-expo-darkBlue hover:bg-yellow-500'
              : 'bg-expo-blue text-white hover:bg-expo-darkBlue'
          } transition-colors`}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default TicketCard;

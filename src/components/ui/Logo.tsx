
import React from 'react';

interface LogoProps {
  type: 'government' | 'expo';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ type, className = '' }) => {
  if (type === 'government') {
    return (
      <div className={`flex items-center ${className}`}>
        <div className="w-12 h-12 bg-expo-darkBlue rounded-full flex items-center justify-center border-2 border-expo-gold">
          <div className="w-8 h-8 bg-expo-gold rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-expo-darkBlue rounded-full"></div>
          </div>
        </div>
        <div className="ml-2">
          <p className="text-expo-darkBlue font-serif font-bold text-sm md:text-base leading-tight">
            Government of<br />Odisha
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-12 h-12 bg-expo-blue rounded-md flex items-center justify-center">
        <span className="text-white font-bold text-xl">SEB</span>
      </div>
      <div className="ml-2">
        <p className="text-expo-blue font-serif font-bold text-sm md:text-base leading-tight">
          Startup Expo<br />Bhubaneswar
        </p>
      </div>
    </div>
  );
};

export default Logo;

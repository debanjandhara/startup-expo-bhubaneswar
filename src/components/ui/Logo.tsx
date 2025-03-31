
import React, { useEffect, useState } from 'react';
import startupOdisha from '../../../public/odisa-startup-logo.png';
import govtOfOdisha from '../../../public/govt_of_odisha_logo.png';

interface LogoProps {
  type: 'government' | 'expo';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ type, className = '' }) => {

  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  if (type === 'government') {
    return (
      <div className={`flex h-full items-center ${className}`}>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <img src={govtOfOdisha} alt='government of odisha' />
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
        <span className="text-white font-bold text-xl">SBE</span>
      </div>
      <div className="ml-2">
        <p className={`${isScrolled ? 'text-expo-blue' : 'text-white'} font-serif font-bold text-sm md:text-base leading-tight`}>
          Startup Bhubaneswar<br />Expo
        </p>
      </div>
    </div>
  );
};

export default Logo;

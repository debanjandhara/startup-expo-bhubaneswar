import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AuthButton: React.FC = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  return (
    <div className="flex items-center space-x-4">
      <Link
        to="/login"
        className={`px-4 py-2 ${isScrolled ? 'text-expo-darkBlue' : 'text-white hover:text-expo-lightBlue'} hover:text-expo-blue transition-colors font-medium`}
      >
        Login
      </Link>
      <Link
        to="/register"
        className="px-4 py-2 bg-expo-blue text-white rounded-md hover:bg-expo-darkBlue transition-colors font-medium"
      >
        Register
      </Link>
    </div>
  );
};

export default AuthButton; 
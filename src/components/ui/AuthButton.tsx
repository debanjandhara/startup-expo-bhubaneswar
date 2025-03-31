import React from 'react';
import { Link } from 'react-router-dom';

const AuthButton: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link
        to="/login"
        className="px-4 py-2 text-expo-darkBlue hover:text-expo-blue transition-colors font-medium"
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
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Register = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-expo-darkBlue mb-2">Create Account</h1>
                <p className="text-gray-600">Join our startup community</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-expo-blue focus:border-expo-blue"
                      placeholder="Enter first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-expo-blue focus:border-expo-blue"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-expo-blue focus:border-expo-blue"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-expo-blue focus:border-expo-blue"
                    placeholder="Create a password"
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-expo-blue focus:border-expo-blue"
                    placeholder="Confirm your password"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-expo-blue focus:ring-expo-blue border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the{' '}
                    <Link to="/terms" className="text-expo-blue hover:text-expo-darkBlue">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-expo-blue hover:text-expo-darkBlue">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-expo-blue text-white rounded-md hover:bg-expo-darkBlue transition-colors font-medium"
                >
                  Create Account
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-expo-blue hover:text-expo-darkBlue font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register; 
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Login = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-expo-darkBlue mb-2">Welcome Back</h1>
                <p className="text-gray-600">Sign in to your account</p>
              </div>
              
              <form className="space-y-6">
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
                    placeholder="Enter your password"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-expo-blue focus:ring-expo-blue border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-expo-blue hover:text-expo-darkBlue">
                    Forgot password?
                  </Link>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-expo-blue text-white rounded-md hover:bg-expo-darkBlue transition-colors font-medium"
                >
                  Sign In
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-expo-blue hover:text-expo-darkBlue font-medium">
                    Sign up
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

export default Login; 

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-expo-darkBlue/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="flex items-center space-x-2 md:space-x-4 mb-4 animate-fade-in">
            <div className="h-px w-8 md:w-16 bg-expo-gold"></div>
            <p className="font-medium text-expo-gold">April 2-5, 2025 • KIIT Convention Centre</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Startup Expo<br />Bhubaneswar 2025
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Eastern India's premier gathering of innovators, investors, and industry leaders. Join us for four days of insightful sessions, networking, and opportunities to showcase your startup.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#tickets" className="button-secondary text-center">
              Register Now
            </a>
            <a href="#schedule" className="px-6 py-3 rounded-md border-2 border-white text-white hover:bg-white hover:text-expo-darkBlue transition-colors text-center font-medium">
              View Schedule
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;

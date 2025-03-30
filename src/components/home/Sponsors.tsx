
import React from 'react';
import Logo from '../ui/Logo';

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="section-container">
      <h2 className="section-heading text-center">Sponsors & Partners</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        The Startup Expo Bhubaneswar 2025 is made possible by the support of our esteemed sponsors and partners.
      </p>
      
      <div className="mb-16">
        <h3 className="text-center text-xl font-bold text-expo-blue mb-8">Government Endorsements</h3>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="text-center">
            <Logo type="government" className="mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Government of Odisha</p>
          </div>
          
          <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-expo-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">OSI</span>
            </div>
            <p className="text-gray-600 font-medium">Odisha Startup & Innovation Authority</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-12">
        {/* Platinum Sponsors */}
        <div>
          <h3 className="text-center text-xl font-bold text-expo-blue mb-8">Platinum Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={`platinum-${i}`} className="border border-gray-200 rounded-lg p-6 flex items-center justify-center h-32 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-full h-full bg-gray-100 rounded flex items-center justify-center ${i % 2 === 0 ? 'bg-blue-50' : 'bg-gray-50'}`}>
                  <span className="font-bold text-xl text-gray-400">SPONSOR {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gold Sponsors */}
        <div>
          <h3 className="text-center text-xl font-bold text-expo-blue mb-8">Gold Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={`gold-${i}`} className="border border-gray-200 rounded-lg p-4 flex items-center justify-center h-24 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-full h-full bg-gray-100 rounded flex items-center justify-center ${i % 2 === 0 ? 'bg-yellow-50' : 'bg-gray-50'}`}>
                  <span className="font-bold text-gray-400">SPONSOR {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Silver Sponsors */}
        <div>
          <h3 className="text-center text-xl font-bold text-expo-blue mb-8">Silver Sponsors</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={`silver-${i}`} className="border border-gray-200 rounded-lg p-3 flex items-center justify-center h-20 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-full h-full bg-gray-100 rounded flex items-center justify-center ${i % 2 === 0 ? 'bg-gray-50' : 'bg-blue-50'}`}>
                  <span className="font-medium text-sm text-gray-400">SPONSOR {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-xl font-bold text-expo-blue mb-6">Become a Sponsor</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Interested in showcasing your brand at the Startup Expo Bhubaneswar 2025? Contact us to learn about our sponsorship packages and opportunities.
        </p>
        <a href="#contact" className="button-outline">
          Contact for Sponsorship
        </a>
      </div>
    </section>
  );
};

export default Sponsors;

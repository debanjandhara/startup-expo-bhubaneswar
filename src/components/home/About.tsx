import React from 'react';
import Logo from '../ui/Logo';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-heading">About the Expo</h2>
          <p className="mb-6 text-gray-700">
            The Startup Bhubaneswar Expo 2025 is the flagship event for the startup ecosystem in Eastern India. Organized with the official support of the Government of Odisha and the Odisha Startup & Innovation Authority, this four-day event brings together the brightest minds and most innovative startups from across the region and beyond.
          </p>
          <p className="mb-6 text-gray-700">
            Our mission is to showcase Odisha's burgeoning innovation hub and connect local startups with investors, mentors, industry experts, and potential collaborators. Through insightful panel discussions, workshops, and networking opportunities, we aim to foster a robust entrepreneurial ecosystem in the state.
          </p>
          <p className="text-gray-700">
            The expo focuses on various sectors including Fintech, HealthTech, AgriTech, EdTech, Clean Energy, and more. Whether you're a startup founder, investor, industry professional, or simply curious about the innovation landscape, this event offers something valuable for everyone.
          </p>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="section-subheading mb-6">Official Endorsements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-md shadow-sm">
              <Logo type="government" className="mb-4" />
              <p className="text-center text-sm text-gray-600 mt-2">
                Government of Odisha
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-md shadow-sm">
              <div className="w-16 h-16 bg-expo-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">OSI</span>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                Odisha Startup & Innovation Authority
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-expo-blue text-white rounded-md">
            <h4 className="font-bold text-lg mb-2">Regional Innovation Hub</h4>
            <p className="text-sm">
              The Startup Bhubaneswar Expo is a key initiative under the Odisha Startup Policy 2024, which aims to establish Bhubaneswar as a Top 10 startup destination in India by 2030. The event aligns with the state's vision of fostering 5,000 startups and creating a vibrant innovation ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

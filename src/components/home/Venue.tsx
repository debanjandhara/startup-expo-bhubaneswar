
import React from 'react';
import { MapPin } from 'lucide-react';

const Venue: React.FC = () => {
  return (
    <section id="venue" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">Venue & Information</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Venue Details */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <MapPin className="text-expo-blue mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-expo-darkBlue">KIIT Convention Centre</h3>
                  <p className="text-gray-600">KIIT Road, Patia, Bhubaneswar, Odisha 751024, India</p>
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-4 text-expo-blue">State-of-the-Art Facilities</h4>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-expo-gold font-bold mr-2">•</span>
                  <span>Main conference hall with capacity for 1000+ attendees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-expo-gold font-bold mr-2">•</span>
                  <span>Multiple breakout rooms for parallel sessions and workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-expo-gold font-bold mr-2">•</span>
                  <span>Dedicated networking lounges with refreshment areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-expo-gold font-bold mr-2">•</span>
                  <span>Exhibition space for startup booths and demonstrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-expo-gold font-bold mr-2">•</span>
                  <span>High-speed WiFi throughout the venue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-expo-gold font-bold mr-2">•</span>
                  <span>Ample parking space for attendees</span>
                </li>
              </ul>
              
              <h4 className="text-xl font-bold mb-4 text-expo-blue">Nearby Accommodations</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-expo-gold font-bold mr-2">•</span>
                  <span>KIIT Hospitality - On Campus (0.2 km)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-expo-gold font-bold mr-2">•</span>
                  <span>Trident Hotel Bhubaneswar (5 km)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-expo-gold font-bold mr-2">•</span>
                  <span>Mayfair Lagoon (7 km)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-expo-gold font-bold mr-2">•</span>
                  <span>Swosti Premium (8 km)</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-primary inline-flex items-center"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="order-1 lg:order-2">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              {/* This is a mockup map - in a real implementation, you would use Google Maps or OpenStreetMap */}
              <div className="absolute inset-0 bg-expo-lightBlue/10">
                <div className="absolute inset-0 bg-gradient-to-br from-expo-blue/5 to-expo-lightBlue/20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-expo-blue rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <div className="mt-2 bg-white px-4 py-2 rounded-md shadow-md">
                    <p className="text-expo-blue font-bold text-center">KIIT Convention Centre</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md">
                  <p className="text-xs text-gray-500">Map view</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2 text-expo-blue">Transportation</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <span className="font-medium">From Airport:</span> 12 km (25 min drive)
                </li>
                <li>
                  <span className="font-medium">From Railway Station:</span> 8 km (20 min drive)
                </li>
                <li>
                  <span className="font-medium">Local Transport:</span> Taxis, ride-sharing services, and shuttle services available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;

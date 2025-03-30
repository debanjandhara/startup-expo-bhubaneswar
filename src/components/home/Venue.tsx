
import React from 'react';
import { MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issues
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Venue: React.FC = () => {
  // KIIT Convention Centre coordinates
  const position: [number, number] = [20.3585, 85.8193];
  
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
              <MapContainer 
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
                className="z-0"
                bounds={[
                  [position[0] - 0.01, position[1] - 0.01],
                  [position[0] + 0.01, position[1] + 0.01]
                ]}
                zoom={15}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    KIIT Convention Centre <br /> Venue for Tech Expo 2023
                  </Popup>
                </Marker>
              </MapContainer>
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

import React from 'react';
import { MapPin } from 'lucide-react';

const Map: React.FC = () => {
  return (
    <div className="relative h-full w-full">
      {/* Static map background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://static-maps.yandex.ru/1.x/?ll=85.8177,20.3516&z=15&size=450,450&l=map&pt=85.8177,20.3516,pm2rdm)`
        }}
      />
      
      {/* Interactive overlay */}
      <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-300">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-expo-blue rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="mt-2 bg-white px-4 py-2 rounded-md shadow-md">
              <p className="text-expo-blue font-bold text-center">KIIT Convention Centre</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map controls */}
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md">
        <p className="text-xs text-gray-500">Map view</p>
      </div>
    </div>
  );
};

export default Map; 
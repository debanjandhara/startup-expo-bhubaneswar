import React, { useEffect, useRef, useState } from 'react';
import { MapPin, ZoomIn, ZoomOut } from 'lucide-react';

declare global {
  interface Window {
    google: any;
  }
}

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (mapRef.current) {
        const mapOptions = {
          center: { lat: 20.3516, lng: 85.8177 },
          zoom: 15,
          mapTypeId: 'roadmap',
        };

        mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);

        // Add marker
        markerRef.current = new window.google.maps.Marker({
          position: { lat: 20.3516, lng: 85.8177 },
          map: mapInstanceRef.current,
          title: 'KIIT Convention Centre',
          animation: window.google.maps.Animation.DROP,
        });

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-bold text-expo-blue">KIIT Convention Centre</h3>
              <p class="text-sm text-gray-600">KIIT Road, Patia, Bhubaneswar</p>
            </div>
          `,
        });

        markerRef.current.addListener('click', () => {
          infoWindow.open(mapInstanceRef.current, markerRef.current);
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      const currentZoom = mapInstanceRef.current.getZoom();
      mapInstanceRef.current.setZoom(currentZoom + 1);
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      const currentZoom = mapInstanceRef.current.getZoom();
      mapInstanceRef.current.setZoom(currentZoom - 1);
    }
  };

  return (
    <div className="relative h-full w-full">
      <div ref={mapRef} className="w-full h-full rounded-lg" />

      {/* Zoom Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button
          onClick={handleZoomIn}
          className="bg-white p-2 rounded-md shadow-md hover:bg-gray-50 transition-colors"
        >
          <ZoomIn className="w-5 h-5 text-expo-blue" />
        </button>
        <button
          onClick={handleZoomOut}
          className="bg-white p-2 rounded-md shadow-md hover:bg-gray-50 transition-colors"
        >
          <ZoomOut className="w-5 h-5 text-expo-blue" />
        </button>
      </div>

      {/* Venue Info */}
      <div className="absolute top-4 left-4 bg-white p-4 rounded-md shadow-md">
        <h3 className="font-bold text-expo-blue">KIIT Convention Centre</h3>
        <p className="text-sm text-gray-600">KIIT Road, Patia, Bhubaneswar</p>
      </div>
    </div>
  );
};

export default Map; 
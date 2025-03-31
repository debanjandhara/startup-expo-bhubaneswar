import React from 'react';

interface Speaker {
  name: string;
  profession: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    name: "Dr. Sarah Chen",
    profession: "AI & Machine Learning Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Rajesh Kumar",
    profession: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Priya Sharma",
    profession: "Venture Capitalist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Michael Chang",
    profession: "Startup Mentor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-expo-darkBlue mb-4">
            Featured Speakers
          </h2>
          <div className="w-20 h-1 bg-expo-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="absolute inset-0 bg-expo-gold rounded-full opacity-20"></div>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full rounded-full object-cover border-4 border-expo-gold"
                />
              </div>
              <h3 className="text-xl font-bold text-expo-darkBlue mb-2">
                {speaker.name}
              </h3>
              <p className="text-gray-600">
                {speaker.profession}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers; 
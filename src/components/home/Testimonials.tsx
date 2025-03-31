import React from 'react';

interface Testimonial {
  image: string;
  subject: string;
  text: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    subject: "Transformative Experience",
    text: "The Startup Expo Bhubaneswar was a game-changer for our company. The networking opportunities and insights from industry leaders helped us pivot our business strategy.",
    author: "Anita Patel",
    role: "Founder, TechStart Solutions"
  },
  {
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    subject: "Incredible Platform",
    text: "As an investor, I was impressed by the quality of startups and the level of innovation showcased. This event has become a must-attend in my calendar.",
    author: "David Chen",
    role: "Partner, Venture Capital Fund"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    subject: "Life-Changing Connections",
    text: "The mentorship sessions and workshops were invaluable. I found my co-founder and secured our first round of funding through connections made at the expo.",
    author: "Rahul Verma",
    role: "CEO, InnovateTech"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-expo-darkBlue mb-4">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-expo-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={testimonial.image}
                  alt={testimonial.subject}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-expo-darkBlue/40"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-expo-darkBlue mb-3">
                  {testimonial.subject}
                </h3>
                <p className="text-gray-600 mb-4">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-expo-darkBlue">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
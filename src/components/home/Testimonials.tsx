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
    image: "https://ltwgjhexldvatjakuxck.supabase.co/storage/v1/object/public/test/testis/Madan-Padaki.jpg",
    subject: "Welcome to the Olympics of Entrepreneurship",
    text: "We are bringing together global leaders, entrepreneurs, investors, policymakers and students, from across sectors, to collaborate and catalyze change. SBE 25 is creating a culture where ideas prosper and innovation thrives.",
    author: "Madan Padaki",
    role: "President, TechStart Solutions"
  },
  {
    image: "https://ltwgjhexldvatjakuxck.supabase.co/storage/v1/object/public/test/testis/Amit-Gupta.jpg",
    subject: "The Global Support Network",
    text: "SBE is a truly global platform shaping the future of entrepreneurship by driving innovation and value creation to transform economies. Our mission is to promote equity, sustainability, and inclusivity worldwide, ensuring entrepreneurial opportunities are accessible to all. Thus, building a future where innovation thrives, economies are robust, and everyone can succeed.",
    author: "Amit Gupta",
    role: "Global Chair, TiE Global"
  },
  {
    image: "https://ltwgjhexldvatjakuxck.supabase.co/storage/v1/object/public/test/testis/LakshmiPratury.jpg",
    subject: "Redefining success",
    text: "We are thrilled to be collaborating with TiE as curation partners for SBE. We are also excited to bring a special INK Experience @ SBE to curate in depth conversations with celebrities and young innovators across disciplines with the theme \"Redefining success\". Join us there!",
    author: "Lakshmi Pratury",
    role: "Founder and CEO - INK"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-expo-darkBlue mb-4">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-expo-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-100">
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
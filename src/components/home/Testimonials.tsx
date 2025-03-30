
import React from 'react';
import { Quote } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, company, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="absolute -top-4 left-6 bg-expo-gold w-8 h-8 rounded-full flex items-center justify-center">
        <Quote className="text-white w-4 h-4" />
      </div>
      <div className="pt-4">
        <p className="text-gray-700 italic mb-6">{quote}</p>
        <div className="flex items-center">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-expo-lightBlue"
          />
          <div>
            <h4 className="font-bold text-expo-darkBlue">{name}</h4>
            <p className="text-sm text-gray-600">{role}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "The Expo provided an incredible platform to connect with industry leaders. The networking opportunities were invaluable for our startup.",
      name: "Emma Thompson",
      role: "Founder & CEO",
      company: "InnovateTech",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Attending the workshops and keynote sessions gave our team fresh insights into emerging technologies that we're now implementing.",
      name: "David Rodriguez",
      role: "CTO",
      company: "Nexus Systems",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "As a speaker, I was impressed by the organization and the quality of attendees. The Q&A sessions were particularly engaging.",
      name: "Aisha Patel",
      role: "AI Research Lead",
      company: "DataSphere",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "The Expo exceeded all our expectations. We made valuable connections and secured three major partnerships as a direct result.",
      name: "Thomas Chen",
      role: "Marketing Director",
      company: "CloudFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "The diversity of topics covered made this event stand out. From AI to blockchain, every session provided actionable insights.",
      name: "Sophia Williams",
      role: "Product Manager",
      company: "TechFusion",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Being an exhibitor at the Expo allowed us to showcase our innovations to a targeted audience. The ROI was exceptional.",
      name: "Marcus Johnson",
      role: "VP of Sales",
      company: "NexGen Solutions",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-4">What Attendees Say</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Hear from past attendees about their experience at our Tech Expo
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

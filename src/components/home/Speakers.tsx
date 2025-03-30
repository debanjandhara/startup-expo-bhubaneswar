
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Github, Twitter, Linkedin, Globe } from 'lucide-react';

type SpeakerProps = {
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  }
};

const SpeakerCard: React.FC<SpeakerProps> = ({ name, role, company, bio, image, social }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-expo-darkBlue">{name}</h3>
        <p className="text-expo-blue font-medium">{role}</p>
        <p className="text-gray-600 mb-4">{company}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{bio}</p>
        
        {social && (
          <div className="flex space-x-3">
            {social.twitter && (
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-expo-blue transition-colors">
                <Twitter size={18} />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-expo-blue transition-colors">
                <Linkedin size={18} />
              </a>
            )}
            {social.github && (
              <a href={social.github} target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-expo-blue transition-colors">
                <Github size={18} />
              </a>
            )}
            {social.website && (
              <a href={social.website} target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-expo-blue transition-colors">
                <Globe size={18} />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Speakers: React.FC = () => {
  const speakersData: SpeakerProps[] = [
    {
      name: "Dr. Sarah Johnson",
      role: "AI Research Director",
      company: "TechVision Labs",
      bio: "Dr. Johnson leads groundbreaking research in machine learning and has published over 50 papers on AI applications in healthcare.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        website: "https://example.com"
      }
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "Future Mobility Inc.",
      bio: "Michael is pioneering the future of autonomous vehicles with over 15 years of experience in automotive technology.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Priya Patel",
      role: "Blockchain Specialist",
      company: "DecentraNet",
      bio: "Priya is an expert in blockchain technology, focusing on secure and scalable applications for financial systems.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "https://twitter.com",
        github: "https://github.com"
      }
    },
    {
      name: "James Wilson",
      role: "Quantum Computing Researcher",
      company: "QuantumLeap Technologies",
      bio: "James specializes in quantum algorithms and their applications in solving complex computational problems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "https://linkedin.com",
        website: "https://example.com"
      }
    }
  ];

  return (
    <section id="speakers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-4">Featured Speakers</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Learn from industry leaders and innovators who are shaping the future of technology
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakersData.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="button-outline">
            View All Speakers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;

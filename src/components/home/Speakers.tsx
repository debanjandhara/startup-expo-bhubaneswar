import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Speaker {
  name: string;
  profession: string;
  image: string;
  bio?: string;
}

const speakers: Speaker[] = [
  {
    name: "Dr. Sarah Chen",
    profession: "AI & Machine Learning Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Leading AI research at Google, focusing on ethical AI development"
  },
  {
    name: "Rajesh Kumar",
    profession: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Founder of TechStart India, serial entrepreneur with 3 successful exits"
  },
  {
    name: "Priya Sharma",
    profession: "Venture Capitalist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Partner at Sequoia Capital India, investing in early-stage startups"
  },
  {
    name: "Michael Chang",
    profession: "Startup Mentor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Former YCombinator partner, helping startups scale globally"
  },
  {
    name: "Dr. Anjali Patel",
    profession: "Deep Learning Researcher",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Research Director at Microsoft AI, specializing in computer vision"
  },
  {
    name: "Arun Verma",
    profession: "FinTech Innovator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "CEO of FinTech Solutions, revolutionizing digital payments in India"
  },
  {
    name: "Dr. Emily Watson",
    profession: "Biotech Entrepreneur",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Founder of BioTech Innovations, developing breakthrough medical solutions"
  },
  {
    name: "Suresh Reddy",
    profession: "Cloud Computing Expert",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "CTO at CloudTech Solutions, leading cloud transformation initiatives"
  }
];

const Speakers: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="speakers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-expo-darkBlue mb-4">
            Featured Speakers
          </h2>
          <div className="w-20 h-1 bg-expo-gold mx-auto"></div>
        </div>
        
        <div className="speakers-slider">
          <Slider {...settings}>
            {speakers.map((speaker, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="relative w-full h-64">
                    <div className="absolute inset-0 bg-expo-gold opacity-20"></div>
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-expo-darkBlue mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-expo-gold font-medium mb-2">
                      {speaker.profession}
                    </p>
                    {speaker.bio && (
                      <p className="text-gray-600 text-sm">
                        {speaker.bio}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Speakers; 
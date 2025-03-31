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
    name: "BV Jagadeesh",
    profession: "Founding Managing Partner, KAAJ Ventures",
    image: "https://ltwgjhexldvatjakuxck.supabase.co/storage/v1/object/public/test/speaker/BVJagadeesh.png",
    bio: "Leading AI research at Google, focusing on ethical AI development"
  },
  {
    name: "Kris Gopalakrishnan",
    profession: "Chairman Axilor Ventures, Co-founder Infosys, President ISF",
    image: "https://ltwgjhexldvatjakuxck.supabase.co/storage/v1/object/public/test/speaker/Kris-Gopalakrishnan.png",
    bio: "Founder of TechStart India, serial entrepreneur with 3 successful exits"
  },
  {
    name: "Mohandas Pai",
    profession: "Chairman, Manipal Global Education & Chairman at Aarin Capital",
    image: "https://ltwgjhexldvatjakuxck.supabase.co/storage/v1/object/public/test/speaker/Mohandas-Pai.png",
    bio: "Partner at Sequoia Capital India, investing in early-stage startups"
  },
  {
    name: "Naiyya Saggi",
    profession: "Group Co-founder, The Good Glamm Group",
    image: "https://ltwgjhexldvatjakuxck.supabase.co/storage/v1/object/public/test/speaker/Naiyya.png",
    bio: "Former YCombinator partner, helping startups scale globally"
  },
  {
    name: "Peter Hughes",
    profession: "Founder and CEO, Apex Group",
    image: "https://ltwgjhexldvatjakuxck.supabase.co/storage/v1/object/public/test/speaker/Peter.png",
    bio: "Research Director at Microsoft AI, specializing in computer vision"
  },
  {
    name: "Prashanth Prakash",
    profession: "Founding Partner, Accel India",
    image: "https://ltwgjhexldvatjakuxck.supabase.co/storage/v1/object/public/test/speaker/PrashanthPrakash.png",
    bio: "CEO of FinTech Solutions, revolutionizing digital payments in India"
  },
  {
    name: "Ravi Venkatesan",
    profession: "Chairman, Global Energy Alliance for People and Planet",
    image: "https://ltwgjhexldvatjakuxck.supabase.co/storage/v1/object/public/test/speaker/ravi-1.png",
    bio: "Founder of BioTech Innovations, developing breakthrough medical solutions"
  },
  {
    name: "Sanjeev Sanyal",
    profession: "Member of the Economic Advisory Council to the Prime Minister of India",
    image: "https://ltwgjhexldvatjakuxck.supabase.co/storage/v1/object/public/test/speaker/Sanjeev.png",
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
                <div className="rounded-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="relative w-full h-64">
                    <div className="absolute inset-0 opacity-20"></div>
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-auto h-56 mx-auto object-cover"
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
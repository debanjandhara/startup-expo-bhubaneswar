import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Speakers from '@/components/home/Speakers';
import Venue from '@/components/home/Venue';
import Schedule from '@/components/home/Schedule';
import Sponsors from '@/components/home/Sponsors';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Venue />
        <Schedule />
        <Testimonials />
        <Sponsors />
        
        {/* Quick Links Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-expo-darkBlue mb-4">
                Get Involved
              </h2>
              <div className="w-20 h-1 bg-expo-gold mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Tickets - Separate Route */}
              <Link to="/tickets" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <h3 className="text-xl font-bold text-expo-darkBlue mb-2 group-hover:text-expo-blue transition-colors">
                    Get Your Tickets
                  </h3>
                  <p className="text-gray-600">
                    Secure your spot at the expo with our flexible ticket options.
                  </p>
                </div>
              </Link>
              
              {/* Contact - Separate Route */}
              <Link to="/contact" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <h3 className="text-xl font-bold text-expo-darkBlue mb-2 group-hover:text-expo-blue transition-colors">
                    Become a Partner
                  </h3>
                  <p className="text-gray-600">
                    Join us as a sponsor or partner and connect with the startup ecosystem.
                  </p>
                </div>
              </Link>
              
              {/* Register - Separate Route */}
              <Link to="/register" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <h3 className="text-xl font-bold text-expo-darkBlue mb-2 group-hover:text-expo-blue transition-colors">
                    Join Our Community
                  </h3>
                  <p className="text-gray-600">
                    Create an account to access exclusive content and networking opportunities.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

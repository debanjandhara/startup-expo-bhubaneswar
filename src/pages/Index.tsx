
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Venue from '@/components/home/Venue';
import Schedule from '@/components/home/Schedule';
import Tickets from '@/components/home/Tickets';
import Sponsors from '@/components/home/Sponsors';
import Contact from '@/components/home/Contact';
import Speakers from '@/components/home/Speakers';
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
        <Tickets />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Testimonials from '@/components/home/Testimonials';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-24">
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage; 
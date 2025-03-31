import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/home/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-24">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage; 
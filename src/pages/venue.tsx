import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Venue from '@/components/home/Venue';

const VenuePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-24">
          <Venue />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VenuePage; 
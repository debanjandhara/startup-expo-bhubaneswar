import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sponsors from '@/components/home/Sponsors';

const SponsorsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-24">
          <Sponsors />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SponsorsPage; 
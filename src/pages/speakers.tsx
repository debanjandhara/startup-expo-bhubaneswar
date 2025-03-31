import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Speakers from '@/components/home/Speakers';

const SpeakersPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-24">
          <Speakers />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpeakersPage; 
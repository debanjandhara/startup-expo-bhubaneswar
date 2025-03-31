import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Schedule from '@/components/home/Schedule';

const SchedulePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-24">
          <Schedule />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SchedulePage; 
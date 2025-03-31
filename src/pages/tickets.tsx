import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Tickets from '@/components/home/Tickets';

const TicketsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-24">
          <Tickets />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TicketsPage; 
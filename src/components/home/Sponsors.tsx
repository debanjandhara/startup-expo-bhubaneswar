import React from 'react';
import Logo from '../ui/Logo';
import startupOdisha from '../../../public/odisa-startup-logo.png';
import s1 from '../../../public/sponsors/nuventures.jpg';
import s2 from '../../../public/sponsors/kaynes.jpg';
import s3 from '../../../public/sponsors/kalaari.jpg';
import s4 from '../../../public/sponsors/SBI-.jpg';
import s5 from '../../../public/sponsors/Bhive.jpg';
import s6 from '../../../public/sponsors/ChooseNJ.jpg';
// import s7 from '../../../public/sponsors/Havas.jpg';
import s8 from '../../../public/sponsors/excelsoft.jpg';
import s9 from '../../../public/sponsors/gift-city.jpg';
import s10 from '../../../public/sponsors/rangsons.jpg';
import s11 from '../../../public/sponsors/rakuten-1.jpg';
import s12 from '../../../public/sponsors/nmdc.jpg';
import s13 from '../../../public/sponsors/mahe-1.jpg';
import s14 from '../../../public/sponsors/health-genie.jpg';
import s15 from '../../../public/sponsors/avadant.jpg';
import s7 from '../../../public/sponsors/go-native.jpg';


const Sponsors: React.FC = () => {

  const platinumSponsors = [
    {
      img: s1,
    }, {
      img: s2,
    }, {
      img: s3,
    }, {
      img: s4
    }
  ];

  const goldSponsors = [
    {
      img: s5,
    }, {
      img: s6,
    }, {
      img: s7,
    }, {
      img: s8
    }, {
      img: s9
    }
  ];

  const silverSponsors = [
    {
      img: s10,
    }, {
      img: s11,
    }, {
      img: s12,
    }, {
      img: s13
    }, {
      img: s14
    }, {
      img: s15
    }
  ];

  return (
    <section id="sponsors" className="section-container">
      <h2 className="section-heading text-center">Sponsors & Partners</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        The Startup Bhubaneswar Expo 2025 is made possible by the support of our esteemed sponsors and partners.
      </p>
      
      <div className="mb-16">
        <h3 className="text-center text-xl font-bold text-expo-blue mb-8">Government Endorsements</h3>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="text-center">
            <Logo type="government" className="mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Government of Odisha</p>
          </div>
          <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
          
          <div className="text-center">
            <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto">
              <img src={startupOdisha} alt='startup-odisha' />
            </div>
            <p className="text-gray-600 font-medium">Odisha Startup & Innovation Authority</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-12">
        {/* Platinum Sponsors */}
        <div>
          <h3 className="text-center text-xl font-bold text-expo-blue mb-8">Platinum Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platinumSponsors.map((_,i) => (
              <div key={`platinum-${i}`} className="border border-gray-200 rounded-lg p-6 flex items-center justify-center h-32 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-full h-full rounded flex items-center justify-center`}>
                  {/* <span className="font-bold text-xl text-gray-400">SPONSOR {i}</span> */}
                  <img className='h-24 w-auto' src={_.img} alt={`plat-sponsor-img-${i}`}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gold Sponsors */}
        <div>
          <h3 className="text-center text-xl font-bold text-expo-blue mb-8">Gold Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {goldSponsors.map((_,i) => (
              <div key={`gold-${i}`} className="border border-gray-200 rounded-lg p-4 flex items-center justify-center h-24 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-full h-full rounded flex items-center justify-center`}>
                  {/* <span className="font-bold text-gray-400">SPONSOR {i}</span> */}
                  <img className='h-20 w-auto' src={_.img} alt={`gold-sponsor-img-${i}`}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Silver Sponsors */}
        <div>
          <h3 className="text-center text-xl font-bold text-expo-blue mb-8">Silver Sponsors</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {silverSponsors.map((_,i) => (
              <div key={`silver-${i}`} className="border border-gray-200 rounded-lg p-3 flex items-center justify-center h-24 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-full h-full rounded flex items-center justify-center`}>
                  {/* <span className="font-medium text-sm text-gray-400">SPONSOR {i}</span> */}
                  <img className='h-20 w-auto' src={_.img} alt={`gold-sponsor-img-${i}`}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-xl font-bold text-expo-blue mb-6">Become a Sponsor</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Interested in showcasing your brand at the Startup Bhubaneswar Expo 2025? Contact us to learn about our sponsorship packages and opportunities.
        </p>
        <a href="#contact" className="button-outline">
          Contact for Sponsorship
        </a>
      </div>
    </section>
  );
};

export default Sponsors;

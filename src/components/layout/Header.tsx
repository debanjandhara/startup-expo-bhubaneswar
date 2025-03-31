import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import AuthButton from '@/components/ui/AuthButton';

const navLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Speakers', href: '/#speakers' },
  { name: 'Venue', href: '/#venue' },
  { name: 'Schedule', href: '/#schedule' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Sponsors', href: '/#sponsors' },
  { name: 'Tickets', href: '/tickets' },
  { name: 'Contact', href: '/contact' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation when component mounts or location changes
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleNavClick = (href: string) => {
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname !== path) {
        // If we're not on the main page, navigate to it first
        window.location.href = href;
      } else {
        // If we're already on the main page, just scroll
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo type="expo" />
        
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.href.includes('#') ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-expo-darkBlue hover:text-expo-blue transition-colors font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-expo-darkBlue hover:text-expo-blue transition-colors font-medium"
              >
                {link.name}
              </Link>
            )
          ))}
          <AuthButton />
        </div>
        
        <button 
          className="md:hidden text-expo-darkBlue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-5 absolute w-full">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              link.href.includes('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-expo-darkBlue hover:text-expo-blue transition-colors font-medium py-2 text-left"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-expo-darkBlue hover:text-expo-blue transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="py-2">
              <AuthButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

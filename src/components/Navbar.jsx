import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass-effect backdrop-blur-xl border-b border-pink-500/20'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/mitslogo.jpg"
                alt="MITS Logo"
                className="h-20 md:h-20 rounded-md border-2  shadow-lg"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About Us' },
              { href: '#events', label: 'Events' },
              { href: '#contact', label: 'Contact Us' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-white hover:text-pink-400 transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            {/* Register button removed as requested */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-pink-400 transition-colors duration-300 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect backdrop-blur-xl border-b border-pink-500/20">
            <div className="px-4 py-6 space-y-4">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About Us' },
                { href: '#events', label: 'Events' },
                { href: '#contact', label: 'Contact Us' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-white hover:text-pink-400 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {/* Register button removed from mobile menu as well */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Heart, Sparkles, Star, Zap } from 'lucide-react';
import logo from '../assets/clglogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    // {
    //   title: 'Epic Events',
    //   links: [
    //     { name: 'Cricket & Sports', href: '#events' },
    //     { name: 'Drama Delites', href: '#events' },
    //     { name: 'Fashion Fanatics', href: '#events' },
    //     { name: 'Beat Bash & Melody', href: '#events' }
    //   ]
    // },
    {
      title: 'Connect With Us',
      content: [
        'Angallu, Madanapalle-517325',
        'Annamayya District, AP, India',
        'sac@mits.ac.in',
        'www.mits.ac.in'
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-purple-900/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img
                  src={logo}
                  alt="MITS Logo"
                  className="h-12 w-12 rounded-xl border-2 border-pink-400 shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  MITS Madanapalle
                </h3>
                <p className="text-xs text-gray-400">Since 1998</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering minds, shaping futures, and creating <span className="text-pink-400 font-semibold">unforgettable memories</span>
              that last a lifetime. Join the legacy!
            </p>
            <div className="flex space-x-3">
              {[Sparkles, Star, Zap].map((Icon, index) => (
                <div
                  key={index}
                  className="p-2 glass-effect rounded-full border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4 text-pink-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full"></span>
                {section.title}
              </h4>
              {section.links ? (
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-400 text-sm">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
        { name: 'Gallery', href: '#gallery' },
        { name: 'Events', href: '#events' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Epic Events',
      links: [
        { name: 'Vocal Showdown', href: '#events' },
        { name: 'Dance Battle', href: '#events' },
        { name: 'Mr & Ms Fresher', href: '#events' },
        { name: 'Cultural Fiesta', href: '#events' },
        { name: 'Tech Challenge', href: '#events' }
      ]
    },
    {
      title: 'Connect With Us',
      content: [
        'Angallu, Madanapalle-517325',
        'Annamayya District, AP, India',
        'info@mits.ac.in',
        '+91 8571234567'
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
                  className="h-12 w-12 rounded-full border-2 border-pink-400 shadow-lg animate-pulse"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20"></div>
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

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {currentYear} MITS Madanapalle. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
              <span>for</span>
              <span className="font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Freshers 2K25
              </span>
              <Sparkles className="w-4 h-4 text-yellow-400 animate-bounce" />
            </div>
          </div>

          {/* Fun Message */}
          <div className="mt-8 text-center">
            <div className="glass-effect rounded-2xl p-6 border border-pink-500/20 max-w-2xl mx-auto">
              <p className="text-gray-300 mb-2">
                🎉 Ready to make history? The most epic celebration awaits! 🎉
              </p>
              <div className="text-2xl">
                {['🌟', '🎊', '✨', '🎵', '🎭'].map((emoji, index) => (
                  <span
                    key={index}
                    className="animate-bounce inline-block mx-1"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

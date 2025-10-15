import React, { useState, useEffect } from 'react';
import { FileImage, Sparkles, Calendar, MapPin } from 'lucide-react';
import Countdown from './Countdown';

const Hero = ({ onPosterClick }) => {
  const images = [
    'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToEvents = () => {
    document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-30' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/50 to-black/80"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Sparkles Icon */}
        <div className="flex justify-center mb-8">
          <Sparkles className="w-16 h-16 text-pink-400 animate-pulse" />
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-neon-pulse">
          <span className="block font-['Orbitron'] bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            MITS
          </span>
          <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 text-white neon-text">
            Freshers Day 2025
          </span>
        </h1>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 text-sm sm:text-base md:text-lg">
          <div className="flex items-center gap-2 glass-effect px-3 sm:px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <span className="text-white font-medium">November 7<sup>th</sup>, 2025</span>
          </div>
          <div className="flex items-center gap-2 glass-effect px-3 sm:px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
            <span className="text-white font-medium">Open Auditorium, Opp. Shiva Block</span>
          </div>
        </div>

        {/* Countdown timer (days/hours/minutes/seconds) */}
        <div className="flex justify-center mb-6">
          <Countdown targetDate="2025-11-07T00:00:00" />
        </div>

        {/* Description */}
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button
            onClick={scrollToEvents}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold text-sm sm:text-base md:text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 neon-box"
          >
            <span className="relative z-10">Explore the Events</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* <button
            onClick={onPosterClick}
            className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 glass-effect border border-pink-500/50 text-white font-semibold text-sm sm:text-base rounded-full hover:border-pink-400 hover:bg-pink-500/10 transition-all duration-300"
            title="View Event Poster"
          >
            <FileImage className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 group-hover:animate-pulse" />
            View Poster
          </button> */}
        </div>
        {/* <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
          Get ready for the most electrifying celebration of the year! Join us for an unforgettable night
          of music, dance, and pure excitement as we welcome our new students with style.
        </p> */}


        {/* Explicit registration buttons for Sports & Culturals */}
        {/* <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="https://forms.gle/ncxbMBD3M5hMrgKJA"
            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-400 to-teal-400 text-gray-900 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <Sparkles className="w-4 h-4 text-white" />
            Register (Sports)
          </a>

          <a
            href="https://forms.gle/gwJSGGzKAZZXpjMo9"
            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-gray-900 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <Sparkles className="w-4 h-4 text-white" />
            Register (Culturals)
          </a>
        </div> */}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage
              ? 'bg-gradient-to-r from-pink-500 to-cyan-500 scale-125'
              : 'bg-white/30 hover:bg-white/50'
              }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-pink-400 to-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

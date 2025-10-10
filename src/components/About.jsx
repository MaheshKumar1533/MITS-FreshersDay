import React from 'react';
import { Award, Users, Sparkles, Star, Music, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Star className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 font-['Orbitron']">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-neon-pulse">
              About Freshers Day 2K25
            </span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4">
            Get ready for the most <span className="text-pink-400 font-semibold">electrifying celebration</span> of the year!
            MITS Freshers Day 2K25 is not just an event – it's a <span className="text-cyan-400 font-semibold">spectacular experience</span>
            that will welcome our newest family members with unforgettable memories, stunning performances, and pure excitement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              icon: Award,
              title: 'Mr & Ms Fresher',
              description: 'Compete for the prestigious crown and showcase your unique talents on the grand stage',
              color: 'from-pink-500 to-rose-500',
              bgColor: 'bg-pink-500/10',
              delay: '0s'
            },
            {
              icon: Music,
              title: 'Cultural Extravaganza',
              description: 'Experience mind-blowing performances, diverse cultures, and artistic expressions',
              color: 'from-purple-500 to-indigo-500',
              bgColor: 'bg-purple-500/10',
              delay: '0.2s'
            },
            {
              icon: Zap,
              title: 'High-Energy Entertainment',
              description: 'Dance battles, live music, interactive games, and surprises that will blow your mind',
              color: 'from-cyan-500 to-blue-500',
              bgColor: 'bg-cyan-500/10',
              delay: '0.4s'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`group relative glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-500 hover:scale-105 animate-float`}
              style={{ animationDelay: feature.delay }}
            >
              {/* Glowing Background */}
              <div className={`absolute inset-0 ${feature.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r ${feature.color} p-0.5`}>
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white group-hover:animate-pulse" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-pink-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-10 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto border border-pink-500/20">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to be part of something <span className="text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text">EXTRAORDINARY</span>?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              Join us for a night that will redefine your college experience and create memories that last a lifetime!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['🎉', '✨', '🎵', '🌟', '🎊'].map((emoji, index) => (
                <span
                  key={index}
                  className="text-2xl animate-bounce"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

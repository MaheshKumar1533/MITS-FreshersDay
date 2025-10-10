import React from 'react';
import { X, Calendar, MapPin, Clock, Star, Zap } from 'lucide-react';

const PosterChatbot = ({ show, onClose }) => {
  if (!show) return null;

  const eventHighlights = [
    { icon: '🎤', text: 'Vocal Showdown & Dance Battle' },
    { icon: '👑', text: 'Mr & Ms Fresher Contest' },
    { icon: '🎨', text: 'Cultural Fiesta Extravaganza' },
    { icon: '🎮', text: 'Tech Challenge Arena' },
    { icon: '🎁', text: 'Amazing Prizes & Exclusive Gifts' },
    { icon: '✨', text: 'Surprise Celebrity Performances' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] m-4 glass-effect rounded-3xl border border-pink-500/30 overflow-hidden animate-in zoom-in duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-pink-500 text-white rounded-full transition-all duration-300 hover:scale-110"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh] overflow-hidden">
          {/* Poster Image */}
          <div className="relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Freshers Day 2K25 Poster"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-float opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>

            {/* Main Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-2">
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-neon-pulse">
                    MITS Freshers Day
                  </span>
                </h2>
                <p className="text-2xl md:text-3xl font-bold text-white neon-text">2K25</p>

                {/* Event Details */}
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2 glass-effect px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-white text-sm font-medium">Nov 7, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 glass-effect px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-pink-400" />
                    <span className="text-white text-sm font-medium">6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 glass-effect px-3 py-1 rounded-full">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-white text-sm font-medium">MITS Campus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="p-6 overflow-y-auto max-h-[90vh]">
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Star className="w-10 h-10 text-yellow-400 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  The Ultimate <span className="text-pink-400">Party</span> Experience!
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Get ready for the most spectacular celebration of the year! An electrifying night filled with
                  music, dance, competitions, and unforgettable memories.
                </p>
              </div>

              {/* Event Highlights */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  Epic Event Highlights
                </h4>
                <div className="space-y-3">
                  {eventHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 glass-effect rounded-lg border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-2xl flex-shrink-0">{highlight.icon}</span>
                      <span className="text-gray-300 hover:text-white transition-colors duration-300">
                        {highlight.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Features */}
              <div className="glass-effect rounded-lg p-4 border border-pink-500/20">
                <h4 className="text-lg font-bold text-white mb-3 text-center">
                  🌟 Special Features 🌟
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center">
                    <span className="text-pink-400 font-semibold">� Live DJ</span>
                    <p className="text-gray-400">Non-stop music</p>
                  </div>
                  <div className="text-center">
                    <span className="text-cyan-400 font-semibold">📸 Photo Booth</span>
                    <p className="text-gray-400">Capture memories</p>
                  </div>
                  <div className="text-center">
                    <span className="text-purple-400 font-semibold">� Food & Drinks</span>
                    <p className="text-gray-400">Complimentary</p>
                  </div>
                  <div className="text-center">
                    <span className="text-yellow-400 font-semibold">🎁 Goody Bags</span>
                    <p className="text-gray-400">For everyone</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 animate-pulse">
                  <span className="flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    Register Now & Join the Party!
                    <Star className="w-5 h-5 animate-bounce" />
                  </span>
                </button>
                <p className="text-gray-400 text-sm mt-2">
                  Limited seats available! Register now to secure your spot.
                </p>
              </div>

              {/* Footer Message */}
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Follow us on social media for live updates and behind-the-scenes content!
                </p>
                <div className="flex justify-center space-x-4 mt-3 text-2xl">
                  {['🎉', '✨', '🎵', '🌟', '🎊'].map((emoji, index) => (
                    <span
                      key={index}
                      className="animate-bounce"
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
      </div>
    </div>
  );
};

export default PosterChatbot;

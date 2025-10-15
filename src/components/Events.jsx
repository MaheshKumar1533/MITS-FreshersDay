import React from 'react';
import { Music, Users, Award, Palette, Gamepad2, Zap, Trophy } from 'lucide-react';

const Events = () => {
  const events = [
    {
      icon: Users,
      title: 'Tug of War',
      description: 'Test your team strength and coordination in this classic battle of power! Compete in separate boys and girls categories.',
      registerLink: 'https://forms.gle/ncxbMBD3M5hMrgKJA',
      color: 'from-pink-500 to-rose-500',
      bgGlow: 'pink-500/20'
    },
    {
      icon: Gamepad2,
      title: 'Chess',
      description: 'Battle of minds! Showcase your strategic thinking and checkmate your opponents in this classic game of intellect.',
      registerLink: 'https://forms.gle/ncxbMBD3M5hMrgKJA',
      color: 'from-purple-500 to-indigo-500',
      bgGlow: 'purple-500/20'
    },
    {
      icon: Gamepad2,
      title: 'Carroms',
      description: 'Strike and pocket! Display your precision and skill in this popular indoor board game competition.',
      registerLink: 'https://forms.gle/ncxbMBD3M5hMrgKJA',
      color: 'from-cyan-500 to-blue-500',
      bgGlow: 'cyan-500/20'
    },
    {
      icon: Award,
      title: 'Shotput',
      description: 'Show your strength! Compete in this track and field event and see how far you can throw.',
      registerLink: 'https://forms.gle/ncxbMBD3M5hMrgKJA',
      color: 'from-orange-500 to-red-500',
      bgGlow: 'orange-500/20'
    },
    {
      icon: Users,
      title: 'Throw Ball',
      description: 'Team spirit meets athleticism! Join the thrilling throw ball tournament and score big with your team.',
      registerLink: 'https://forms.gle/ncxbMBD3M5hMrgKJA',
      color: 'from-green-500 to-emerald-500',
      bgGlow: 'green-500/20'
    },
    {
      icon: Award,
      title: 'Cricket',
      description: 'Unleash your cricketing prowess! Bat, bowl, and field your way to victory in the ultimate cricket showdown.',
      registerLink: 'https://forms.gle/ncxbMBD3M5hMrgKJA',
      color: 'from-blue-500 to-indigo-500',
      bgGlow: 'blue-500/20'
    },
    {
      icon: Palette,
      title: 'Drama Delites',
      description: 'Lights, camera, action! Bring stories to life with your dramatic performances and theatrical flair.',
      registerLink: 'https://forms.gle/gwJSGGzKAZZXpjMo9',
      color: 'from-purple-500 to-pink-500',
      bgGlow: 'purple-500/20'
    },
    {
      icon: Award,
      title: 'Fashion Fanatics',
      description: 'Walk the ramp with confidence! Showcase your style, personality, and fashion sense in this glamorous event.',
      registerLink: 'https://forms.gle/gwJSGGzKAZZXpjMo9',
      color: 'from-pink-500 to-purple-500',
      bgGlow: 'pink-500/20'
    },
    {
      icon: Music,
      title: 'Beat Bash',
      description: 'Feel the rhythm! Show off your electrifying dance moves and groove to the beat in this ultimate dance battle.',
      registerLink: 'https://forms.gle/gwJSGGzKAZZXpjMo9',
      color: 'from-red-500 to-orange-500',
      bgGlow: 'red-500/20'
    },
    {
      icon: Music,
      title: 'Melody Madness',
      description: 'Hit the high notes! Showcase your vocal talents and mesmerize the audience with your melodious voice.',
      registerLink: 'https://forms.gle/gwJSGGzKAZZXpjMo9',
      color: 'from-cyan-500 to-teal-500',
      bgGlow: 'cyan-500/20'
    },
    {
      icon: Palette,
      title: 'Artistry',
      description: 'Unleash your creativity! Paint, sketch, and create stunning visual masterpieces in this artistic competition.',
      registerLink: 'https://forms.gle/gwJSGGzKAZZXpjMo9',
      color: 'from-yellow-500 to-orange-500',
      bgGlow: 'yellow-500/20'
    },
    {
      icon: Palette,
      title: 'Insta Flick',
      description: 'Capture the moment! Show your photography skills and create Instagram-worthy shots that tell a story.',
      registerLink: 'https://forms.gle/gwJSGGzKAZZXpjMo9',
      color: 'from-indigo-500 to-purple-500',
      bgGlow: 'indigo-500/20'
    }
  ];

  return (
    <section id="events" className="relative section-padding overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/30"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400 animate-bounce" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 font-['Orbitron']">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-neon-pulse">
              Epic Events
            </span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            Get ready to compete, perform, and shine! Each event is designed to bring out the best in you
            and create <span className="text-pink-400 font-semibold">unforgettable moments</span>.
          </p>
        </div>        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-500 hover:scale-105 animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing Background */}
              <div className={`absolute inset-0 bg-${event.bgGlow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Icon with Neon Effect */}
              <div className={`relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${event.color} p-0.5 group-hover:animate-pulse`}>
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                  <event.icon className="w-10 h-10 text-white group-hover:text-pink-400 transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {event.description}
                </p>

                {/* Register Button */}
                <a
                  href={event.registerLink}
                  className={`inline-block px-6 py-3 bg-gradient-to-r ${event.color} text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 relative overflow-hidden group`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Register Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${event.color} opacity-20 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Prize Section */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 border border-yellow-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🏆 <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Amazing Prizes</span> Await! 🏆
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Winners will receive exclusive prizes, certificates, and the ultimate bragging rights!
            </p>
            <div className="flex justify-center space-x-8 text-4xl">
              {['🥇', '🥈', '🥉', '🎁', '🌟'].map((emoji, index) => (
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
    </section>
  );
};

export default Events;

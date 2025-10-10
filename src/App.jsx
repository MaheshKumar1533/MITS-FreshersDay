import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PosterChatbot from './components/PosterChatbot';

function App() {
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    // Add floating particles for party effect
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'fixed w-1 h-1 rounded-full pointer-events-none z-0';
      particle.style.background = `radial-gradient(circle, ${['#ff0080', '#00ffff', '#8000ff', '#00ff80'][Math.floor(Math.random() * 4)]}, transparent)`;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = '100%';
      particle.style.animation = `float ${5 + Math.random() * 5}s linear infinite`;
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 10000);
    };

    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero onPosterClick={() => setShowPoster(true)} />
        <About />
        <Gallery />
        <Events />
        <Contact />
        <Footer />
        <PosterChatbot show={showPoster} onClose={() => setShowPoster(false)} />
      </div>
    </div>
  );
}

export default App;

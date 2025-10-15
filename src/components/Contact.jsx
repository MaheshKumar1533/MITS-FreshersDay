import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'Madanapalle Institute of Technology & Science',
        'Post Box No: 14, Kadiri Road',
        'Angallu (V), Madanapalle-517325',
        'Annamayya District, Andhra Pradesh, India'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Phone,
      title: 'Event Coordinators',
      details: [
        'V. Harshavardhan: +91 76708 22609',
        'P. Jayaram Reddy: +91 79819 55627',
        'M. Harsha Vardhan (Culturals): +91 81437 67320',
        'V. Wazid (Sports): +91 82474 32448',
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['sac@mits.ac.in'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const socialLinks = [
    { icon: Instagram, color: 'hover:text-pink-400', href: '#' },
    { icon: Facebook, color: 'hover:text-blue-400', href: '#' },
    { icon: Youtube, color: 'hover:text-red-400', href: '#' },
    { icon: Linkedin, color: 'hover:text-blue-300', href: '#' }
  ];

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/30"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <MessageCircle className="w-12 h-12 text-pink-400 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron']">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-neon-pulse">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about the event? Want to be part of the organizing team?
            <span className="text-pink-400 font-semibold"> We're here to help!</span> Reach out to us and let's make this celebration unforgettable together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group glass-effect rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-500 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} p-0.5 flex-shrink-0 group-hover:animate-pulse`}>
                    <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            
          </div>

          {/* Contact Form & Map */}
          <div className="space-y-8">
            {/* Social Media */}
            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-pink-400">🌟</span> Follow Our Journey
              </h3>
              <p className="text-gray-400 mb-6">Stay updated with all the latest news and behind-the-scenes content!</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 glass-effect rounded-full border border-white/20 text-white ${social.color} transition-all duration-300 hover:scale-110 hover:border-pink-500/50`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="glass-effect rounded-2xl overflow-hidden border border-white/10">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31865.074342890974!2d78.49422682941045!3d13.617042201220594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2677c83886ad7%3A0xad73159e2bddda33!2sMadanapalle%20institute%20of%20technology%20and%20Sciences!5e0!3m2!1sen!2sin!4v1735365545296!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MITS Location"
                  className="filter sepia-[0.3] hue-rotate-[280deg] saturate-[1.5]"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        {/* <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 border border-pink-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🚨 <span className="text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text">Emergency Contact</span> 🚨
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              For urgent queries during the event, reach out to our 24/7 helpline:
            </p>
            <div className="flex justify-center items-center space-x-4">
              <Phone className="w-6 h-6 text-pink-400 animate-pulse" />
              <span className="text-xl font-bold text-white">+91 76708 22609 / +91 81437 67320</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;

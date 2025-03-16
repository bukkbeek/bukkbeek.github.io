import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bukkbeek-dark"></div>
        <div className="absolute inset-0 bg-gradient-radial from-bukkbeek-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in flex flex-col items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 mb-6 animate-float">
            <img
              src="/bukkbeek.png"
              alt="Bukkbeek Logo"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-bukkbeek-accent">BUKK</span>
            <span className="text-bukkbeek-light">BEEK</span>
          </h1>
          
          <div className="glass-card px-6 py-3 inline-block mb-8">
            <p className="text-bukkbeek-light/80 text-lg md:text-xl font-medium tracking-wide">
              GAME READY | STYLIZED | LOW-POLY
            </p>
          </div>
          
          <p className="max-w-2xl text-bukkbeek-light/70 text-lg mb-10">
            Blending scientific precision with artistic creativity to craft unique game assets
            inspired by Sri Lanka's lush tropical landscapes and rich cultural heritage.
          </p>
          
          <a
            href="#projects"
            className="glass-card px-8 py-4 text-bukkbeek-light hover:text-white hover:bg-bukkbeek-accent/20 transition-all duration-300 rounded-full flex items-center space-x-2"
          >
            <span>Explore My Work</span>
            <ChevronDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={24} className="text-bukkbeek-light/50" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

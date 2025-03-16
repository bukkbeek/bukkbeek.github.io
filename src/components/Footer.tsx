import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 bg-bukkbeek-dark/95 border-t border-bukkbeek-light/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-bukkbeek-accent">BUKK</span>
                <span className="text-bukkbeek-light">BEEK</span>
              </span>
              <span className="ml-3 text-bukkbeek-light/50 text-sm">
                Game Asset Developer
              </span>
            </div>
            <p className="text-bukkbeek-light/40 text-sm mt-2 max-w-md">
              Blending scientific precision with artistic creativity to craft unique
              game assets inspired by Sri Lanka's natural and cultural heritage.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <div>
              <p className="text-bukkbeek-light/40 text-sm">
                © {new Date().getFullYear()} BUKKBEEK. All rights reserved.
              </p>
            </div>
            
            <button
              onClick={scrollToTop}
              className="glass-card p-2 hover:bg-bukkbeek-accent/20 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} className="text-bukkbeek-light" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-bukkbeek-light/5 text-center">
          <p className="text-bukkbeek-light/30 text-xs">
            <span className="text-bukkbeek-light/50">#GameAssets #GameDevelopment #3DModeling #LowPoly #StylizedArt</span>
            <br />
            <span className="text-bukkbeek-light/30">#Blender #Unity #Godot #GameArt #IndieGameDev #SriLankanArtist #3DArtist</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

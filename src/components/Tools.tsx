import React from 'react';
import { Download, Play } from 'lucide-react';

const Tools: React.FC = () => {
  const tools = [
    {
      id: 1,
      title: 'PixelBlocks',
      description: 'Image to pixel art generator tool.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
      download: true
    },
    {
      id: 2,
      title: 'PixelTextures',
      description: 'Procedural pixel generation tool.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
      download: true
    },
    {
      id: 3,
      title: 'Sprite Renderer',
      description: 'GLB to sprite conversion tool.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      download: true
    },
    {
      id: 4,
      title: 'Jumble Merge',
      description: '2D game developed with gDevelop.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
      play: true
    },
    {
      id: 5,
      title: 'Truck Runner',
      description: '3D game developed with Godot.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80',
      play: true
    }
  ];

  return (
    <section id="tools" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="fade-in-section max-w-6xl mx-auto mb-12">
          <h2 className="section-header">Games & Tools</h2>
          <p className="text-bukkbeek-light/70 max-w-2xl">
            A collection of useful tools and games I've developed to enhance game asset creation and showcase my skills.
          </p>
        </div>

        <div className="fade-in-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div key={tool.id} className="glass-card overflow-hidden hover-scale group">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-bukkbeek-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {tool.download && (
                      <button className="glass-card p-3 rounded-full">
                        <Download size={20} className="text-bukkbeek-light" />
                      </button>
                    )}
                    {tool.play && (
                      <button className="glass-card p-3 rounded-full">
                        <Play size={20} className="text-bukkbeek-light" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-bukkbeek-light mb-2">{tool.title}</h3>
                  <p className="text-bukkbeek-light/70 text-sm">{tool.description}</p>
                  <div className="mt-4 flex justify-end">
                    {tool.download && (
                      <span className="text-xs bg-bukkbeek-primary/20 text-bukkbeek-primary px-2 py-1 rounded">
                        Download
                      </span>
                    )}
                    {tool.play && (
                      <span className="text-xs bg-bukkbeek-accent/20 text-bukkbeek-accent px-2 py-1 rounded">
                        Play Online
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;

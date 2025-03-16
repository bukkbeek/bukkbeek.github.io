import React, { useState } from 'react';
import { Image, Brush, PenTool, BookOpen } from 'lucide-react';

const Journey: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('3d-to-2d');
  
  const categories = [
    { id: '3d-to-2d', name: '3D to 2D Renders', icon: Image },
    { id: 'icons', name: 'Icon Building', icon: PenTool },
    { id: 'cards', name: 'Card Building', icon: BookOpen },
    { id: 'artwork', name: 'Traditional Artwork', icon: Brush },
  ];
  
  const artworks = {
    '3d-to-2d': [
      { id: 1, image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title: '3D to 2D Sample 1' },
      { id: 2, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', title: '3D to 2D Sample 2' },
      { id: 3, image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80', title: '3D to 2D Sample 3' },
    ],
    'icons': [
      { id: 1, image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80', title: 'Icon Sample 1' },
      { id: 2, image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80', title: 'Icon Sample 2' },
    ],
    'cards': [
      { id: 1, image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title: 'Card Sample 1' },
      { id: 2, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', title: 'Card Sample 2' },
    ],
    'artwork': [
      { id: 1, image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80', title: 'Artwork Sample 1' },
      { id: 2, image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80', title: 'Artwork Sample 2' },
      { id: 3, image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80', title: 'Artwork Sample 3' },
    ],
  };

  return (
    <section id="journey" className="py-20 md:py-32 bg-bukkbeek-dark/90">
      <div className="container mx-auto px-4">
        <div className="fade-in-section max-w-6xl mx-auto mb-12">
          <h2 className="section-header">Artistic Journey</h2>
          <p className="text-bukkbeek-light/70 max-w-2xl">
            Exploring various artistic disciplines and techniques that have shaped my creative approach.
          </p>
        </div>

        <div className="fade-in-section">
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-bukkbeek-accent text-bukkbeek-dark font-medium'
                      : 'glass-card text-bukkbeek-light/70 hover:text-bukkbeek-light'
                  }`}
                >
                  <Icon size={18} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {artworks[activeCategory as keyof typeof artworks].map((artwork) => (
              <div key={artwork.id} className="glass-card overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-bukkbeek-light font-medium">{artwork.title}</h3>
                  <p className="text-bukkbeek-light/60 text-sm">
                    {activeCategory === '3d-to-2d' && 'Exploring the intersection between 3D modeling and 2D art'}
                    {activeCategory === 'icons' && 'Custom icon design and development'}
                    {activeCategory === 'cards' && 'Card-based design elements and systems'}
                    {activeCategory === 'artwork' && 'Personal illustrations created during free time'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {activeCategory === 'artwork' && (
            <div className="mt-8 text-center">
              <p className="text-bukkbeek-light/60 text-sm italic">
                Note: These artworks are personal, non-commercial projects created during my free time.
              </p>
            </div>
          )}
        </div>

        <div className="fade-in-section mt-20">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-bukkbeek-light">Tutorials & Teaching</h3>
            <p className="text-bukkbeek-light/70 mb-6">
              I share my knowledge through YouTube tutorials and have served as an instructor
              for game development bootcamps.
            </p>
            <div className="bg-bukkbeek-dark/50 p-4 flex items-center justify-center">
              <div className="text-bukkbeek-light/60 text-center">
                <p className="mb-2">Video Tutorial Embed Placeholder</p>
                <a href="https://www.youtube.com/@bukkbeek4986" target="_blank" rel="noopener noreferrer" className="text-bukkbeek-accent hover:underline text-sm">
                  Visit YouTube Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

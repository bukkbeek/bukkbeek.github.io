import React from 'react';

const About: React.FC = () => {
  const skills = [
    { category: '3D Modeling & Texturing', tools: 'Blender' },
    { category: '2D Art & Illustration', tools: 'Krita, Inkscape' },
    { category: 'Game Development', tools: 'Unity, Godot' },
    {
      category: 'Art Styles',
      tools: 'Stylized, Low-poly, Gradient-shaded, Flat-shaded, Minimalist',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="fade-in-section max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-1/3">
              <div className="mb-8 relative">
                <div className="glass-card w-full aspect-square overflow-hidden">
                  <img
                    src="/lovable-uploads/6bbe10fe-16b1-452a-8566-e50f65e33ad1.png"
                    alt="Bukkbeek Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2">
                  <span className="text-bukkbeek-light/90 text-sm">Game Asset Developer</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="mb-6">
                <h2 className="section-header">About Me</h2>
              </div>

              <div className="space-y-6 text-bukkbeek-light/80">
                <p>
                  Bukkbeek is a freelance Game Asset Developer from Sri Lanka, currently based in
                  Canada. With a unique background in zoology and an ongoing Master's degree in
                  biology, I bring scientific precision and natural inspiration to my creative work.
                </p>
                <p>
                  My specialization lies in crafting stylized game-ready assets that blend the lush
                  tropical aesthetics of my homeland with its rich cultural and historical heritage.
                </p>
                <p>
                  The name "Bukkbeek" pays homage to the majestic hippogriff Buckbeak from the Harry
                  Potter universe, reflecting my passion for combining magical creativity with
                  natural elements in my designs.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6 text-bukkbeek-light/90">Skills & Tools</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="glass-card p-4">
                      <h4 className="font-medium text-bukkbeek-accent mb-2">{skill.category}</h4>
                      <p className="text-bukkbeek-light/70">{skill.tools}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

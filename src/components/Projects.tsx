import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-bukkbeek-dark/90">
      <div className="container mx-auto px-4">
        <div className="fade-in-section max-w-6xl mx-auto mb-12 text-center">
          <h2 className="section-header">Featured Projects</h2>
          <p className="text-bukkbeek-light/70 max-w-2xl mx-auto">
            Showcasing a selection of my most significant work in game asset development,
            spanning various styles and techniques.
          </p>
        </div>

        <div className="fade-in-section grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="sketchfab-embed-wrapper">
            <iframe
              title="Nomad's Barge: Wandering Airship of Elysium"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              src="https://sketchfab.com/models/7192f9624fdd4d75810fa42f07a3a4c0/embed?ui_theme=dark"
              width="640"
              height="480"
            ></iframe>
            <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
              <a
                href="https://sketchfab.com/3d-models/nomads-barge-wandering-airship-of-elysium-7192f9624fdd4d75810fa42f07a3a4c0?utm_medium=embed&amp;utm_campaign=share-popup&amp;utm_content=7192f9624fdd4d75810fa42f07a3a4c0"
                target="_blank"
                rel="nofollow"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}
              >
                Nomad's Barge: Wandering Airship of Elysium
              </a>{' '}
              by{' '}
              <a
                href="https://sketchfab.com/bukkbeek?utm_medium=embed&amp;utm_campaign=share-popup&amp;utm_content=7192f9624fdd4d75810fa42f07a3a4c0"
                target="_blank"
                rel="nofollow"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}
              >
                BUKKBEEK
              </a>{' '}
              on{' '}
              <a
                href="https://sketchfab.com?utm_medium=embed&amp;utm_campaign=share-popup&amp;utm_content=7192f9624fdd4d75810fa42f07a3a4c0"
                target="_blank"
                rel="nofollow"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}
              >
                Sketchfab
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

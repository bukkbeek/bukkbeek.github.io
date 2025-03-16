import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Tools from '../components/Tools';
import Journey from '../components/Journey';
import Contact from '../components/Contact';

const Index: React.FC = () => {
  // Update document title and meta tags for SEO
  useEffect(() => {
    document.title = "BUKKBEEK - Game Asset Developer Portfolio";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'BUKKBEEK - Game Asset Developer specializing in stylized, low-poly, and gradient-shaded assets inspired by Sri Lanka\'s tropical aesthetics and cultural heritage.');
    }
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Tools />
      <Journey />
      <Contact />
    </Layout>
  );
};

export default Index;

import React from 'react';
import { Send, Youtube, Facebook, Instagram, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="fade-in-section max-w-6xl mx-auto mb-12 text-center">
          <h2 className="section-header">Get In Touch</h2>
          <p className="text-bukkbeek-light/70 max-w-2xl mx-auto">
            Interested in working together? Let's create something amazing.
          </p>
        </div>

        <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-bukkbeek-light">Contact Form</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-bukkbeek-light/70 mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-bukkbeek-dark/50 border border-bukkbeek-light/10 rounded p-3 text-bukkbeek-light focus:outline-none focus:border-bukkbeek-accent/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-bukkbeek-light/70 mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-bukkbeek-dark/50 border border-bukkbeek-light/10 rounded p-3 text-bukkbeek-light focus:outline-none focus:border-bukkbeek-accent/50 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-bukkbeek-light/70 mb-2 text-sm">Message</label>
                  <textarea
                    id="message"
                    className="w-full bg-bukkbeek-dark/50 border border-bukkbeek-light/10 rounded p-3 text-bukkbeek-light focus:outline-none focus:border-bukkbeek-accent/50 transition-colors min-h-[120px]"
                    placeholder="Tell me about your project"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-bukkbeek-accent hover:bg-bukkbeek-accent/90 text-bukkbeek-dark font-medium py-3 px-6 rounded flex items-center justify-center gap-2 transition-colors w-full"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-bukkbeek-light">Find My Work</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-bukkbeek-accent mb-3">Platforms</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://bukkbeek.itch.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-bukkbeek-light/70 hover:text-bukkbeek-light transition-colors">
                        <span className="bg-bukkbeek-dark/50 p-1.5 rounded">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M6.39 17.25a9.4 9.4 0 0 1-.44-2.75c-.06-1.52-.02-3.1.1-4.7h12c.1 1.63.15 3.2.08 4.75a9.18 9.18 0 0 1-.44 2.7c-.98 0-1.89-.09-2.73-.27-.95-.21-1.95-.59-3.01-1.13a8.7 8.7 0 0 1-2.96 1.12 11.83 11.83 0 0 1-2.6.28Z" />
                          </svg>
                        </span>
                        <span>BUKKBEEK - itch.io</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://sketchfab.com/bukkbeek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-bukkbeek-light/70 hover:text-bukkbeek-light transition-colors">
                        <span className="bg-bukkbeek-dark/50 p-1.5 rounded">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M7.5 12.67L11.11 15l4.14-2.39L12 10.33zm8.45-1.94L12 13.3 8.05 10.73l3.81-2.27zm.05-3.57l-8.04 4.3L8 13.79l8-.05zm-8.05 6.7l3.83 2.24 4.14-2.37V11.3z" />
                          </svg>
                        </span>
                        <span>Sketchfab</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.artstation.com/bukkbeek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-bukkbeek-light/70 hover:text-bukkbeek-light transition-colors">
                        <span className="bg-bukkbeek-dark/50 p-1.5 rounded">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h15.613a2.42 2.42 0 0 0 2.166-1.333h.001l2.027-3.505a2.42 2.42 0 0 0 0-2.445l-2.027-3.505h-.001a2.42 2.42 0 0 0-2.166-1.333H4.192a2.42 2.42 0 0 0-2.164 1.333l-2.027 3.505a2.42 2.42 0 0 0 0 2.445zm7.37-1.722h9.26l-4.63-8.01-4.63 8.01zm9.614 1.833H6.995l2.196 3.825h5.591l2.202-3.825z" />
                          </svg>
                        </span>
                        <span>ArtStation</span>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-bukkbeek-accent mb-3">Social Media</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.youtube.com/@bukkbeek4986" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-bukkbeek-light/70 hover:text-bukkbeek-light transition-colors">
                        <span className="bg-bukkbeek-dark/50 p-1.5 rounded">
                          <Youtube size={18} />
                        </span>
                        <span>YouTube</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/bukkbeek/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-bukkbeek-light/70 hover:text-bukkbeek-light transition-colors">
                        <span className="bg-bukkbeek-dark/50 p-1.5 rounded">
                          <Facebook size={18} />
                        </span>
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/bukkbeek/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-bukkbeek-light/70 hover:text-bukkbeek-light transition-colors">
                        <span className="bg-bukkbeek-dark/50 p-1.5 rounded">
                          <Instagram size={18} />
                        </span>
                        <span>Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-bukkbeek-accent hover:text-bukkbeek-accent/80 transition-colors"
                  >
                    <span>View Full Resume</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

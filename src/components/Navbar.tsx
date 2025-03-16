import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tools', href: '#tools' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bukkbeek-dark/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-bold text-2xl tracking-tight flex items-center group">
          <span className="text-bukkbeek-accent">BUKK</span>
          <span className="text-bukkbeek-light">BEEK</span>
          <span className="text-xs text-bukkbeek-light/60 ml-2 transition-opacity duration-300 group-hover:opacity-100 opacity-0 md:opacity-60">
            Game Asset Developer
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-bukkbeek-light/80 hover:text-bukkbeek-accent transition-colors duration-300 story-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-bukkbeek-light hover:text-bukkbeek-accent transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bukkbeek-dark/95 backdrop-blur-md shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-bukkbeek-light/80 hover:text-bukkbeek-accent transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

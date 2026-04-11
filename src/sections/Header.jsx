import { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, Calendar } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Credentials', href: '#credentials' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-primary text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+919890277759" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>+91 98902 77759</span>
            </a>
            <span className="hidden md:inline text-white/50">|</span>
            <a href="mailto:sagarmahajan1@gmail.com" className="hidden md:flex items-center gap-1.5 hover:text-accent transition-colors">
              <span>sagarmahajan1@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-white/90">
            <MapPin size={14} />
            <span>Nashik, Maharashtra</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-lg py-2'
            : 'bg-white py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
                PE
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-lg text-text-primary leading-tight">
                  Physio Ergo Care
                </h1>
                <p className="text-xs text-text-secondary">Spine & Joint Rehabilitation</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-text-secondary hover:text-primary font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919890277759"
                className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-text-primary px-4 py-2 rounded-lg font-semibold transition-all hover:shadow-lg hover:scale-105"
              >
                <Calendar size={18} />
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden">Book</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-text-primary hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface rounded-lg font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+919890277759"
              className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg font-medium mt-2"
            >
              <Phone size={18} />
              <span>+91 98902 77759</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Floating Mobile Call Button */}
      <a
        href="tel:+919890277759"
        className="fixed bottom-6 right-6 lg:hidden z-40 bg-primary hover:bg-primary-dark text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Call now"
      >
        <Phone size={24} />
      </a>
    </>
  );
}

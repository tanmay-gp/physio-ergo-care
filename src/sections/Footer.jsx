import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, Heart } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Spine Rehabilitation', href: '#services' },
    { name: 'Sports Rehabilitation', href: '#services' },
    { name: 'Post-Op Rehabilitation', href: '#services' },
    { name: 'Knee Rehabilitation', href: '#services' },
    { name: 'Shoulder Rehabilitation', href: '#services' },
    { name: 'Hand, Wrist & Elbow', href: '#services' },
    { name: 'Ankle Rehabilitation', href: '#services' },
  ],
  quickLinks: [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white">
                <img
                  src="/images/logo.jpg"
                  alt="Physio Ergo Care Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Physio Ergo Care</h3>
                <p className="text-xs text-white/60">Spine & Joint Rehabilitation</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Evidence-based physiotherapy care since 2008. Committed to helping you 
              recover and maintain optimal physical health through personalized treatment.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919890277759"
                  className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors"
                >
                  <Phone size={18} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Phone</p>
                    <p className="text-sm">+91 98902 77759</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sagarmahajan1@gmail.com"
                  className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors"
                >
                  <Mail size={18} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <p className="text-sm">sagarmahajan1@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Location</p>
                    <p className="text-sm">Nashik, Maharashtra</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <Clock size={18} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Hours</p>
                    <p className="text-sm">Mon-Sat: 8AM-10AM & 7PM-10PM</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Physio Ergo Care. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500" /> in Nashik, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

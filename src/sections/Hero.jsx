import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Phone, MapPin, Clock, Award, Users, Stethoscope, ArrowRight } from 'lucide-react';

const stats = [
  { icon: Clock, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '5000+', label: 'Patients Treated' },
  { icon: Award, value: '4', label: 'Research Publications' },
  { icon: Stethoscope, value: '3', label: 'Hospital Affiliations' },
];

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[auto] sm:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-surface via-white to-surface pt-4 sm:pt-0 pb-8 sm:pb-0"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              <Award size={14} className="sm:size-4" />
              <span>Certified McKenzie Practitioner</span>
            </div>

            {/* Headline - smaller on mobile */}
            <h1 className="font-display text-2xl sm:text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
              <span className="block text-base sm:text-lg lg:text-xl font-medium text-text-secondary mb-1 sm:mb-2">Welcome to</span>
              Advanced{' '}
              <span className="text-primary">Spine & Joint</span>{' '}
              <span className="block sm:inline">Rehabilitation</span>
            </h1>

            {/* Description - more compact on mobile */}
            <p className="text-sm sm:text-lg text-text-secondary max-w-xl leading-relaxed">
              Evidence-based physiotherapy care since 2008. Led by{' '}
              <strong className="text-text-primary">Dr. Sagar Mahajan</strong>, Consultant 
              Physiotherapist with 15+ years of experience.
            </p>

            {/* Quick Info - inline on mobile */}
            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
              <a href="tel:+919890277759" className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors">
                <Phone size={14} className="sm:size-4 text-accent" />
                <span>+91 98902 77759</span>
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <div className="flex items-center gap-1.5 text-text-secondary">
                <MapPin size={14} className="sm:size-4 text-accent" />
                <span>Nashik</span>
              </div>
            </div>

            {/* CTAs - prominent and always visible */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">
              <a
                href="tel:+919890277759"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all hover:shadow-xl hover:scale-105 group shadow-lg"
              >
                <Phone size={18} className="sm:size-5" />
                <span>Book Appointment</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary/5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all"
              >
                <MapPin size={18} className="sm:size-5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-physiotherapy.jpg"
                  alt="Physiotherapy treatment at Physio Ergo Care"
                  className="w-full aspect-[4/3] object-cover"
                  loading="eager"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Clock size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Open Today</p>
                    <p className="font-semibold text-text-primary">8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">BP</div>
                    <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white text-xs font-bold">MP</div>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Certified</p>
                    <p className="font-semibold text-text-primary text-sm">McKenzie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Compact on mobile */}
        <div
          className={`grid grid-cols-4 gap-2 sm:gap-4 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-200 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-2 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white hover:shadow-lg transition-all group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <stat.icon size={20} className="sm:size-7 mx-auto mb-1 sm:mb-2 text-primary group-hover:scale-110 transition-transform" />
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-text-primary">{stat.value}</p>
              <p className="text-[10px] sm:text-sm text-text-secondary leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

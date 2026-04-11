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
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-surface via-white to-surface"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Award size={16} />
              <span>Certified McKenzie Practitioner</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Advanced{' '}
              <span className="text-primary">Spine & Joint</span>{' '}
              Rehabilitation in Nashik
            </h1>

            {/* Description */}
            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              Evidence-based physiotherapy care since 2008. Led by{' '}
              <strong className="text-text-primary">Dr. Sagar Mahajan</strong>, Consultant 
              Physiotherapist with 15+ years of experience at Wockhardt & Medicover Hospitals.
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-text-secondary">
                <Phone size={16} className="text-accent" />
                <span>+91 98902 77759</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin size={16} className="text-accent" />
                <span>Nashik, Maharashtra</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+919890277759"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:scale-105 group"
              >
                <Phone size={20} />
                <span>Book Appointment</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                <MapPin size={20} />
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
              <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl overflow-hidden">
                  {/* Hero Image - Running/Sports */}
                  <div className="aspect-[4/3] relative">
                    <img
                      src="/images/hero-running.jpg"
                      alt="Active lifestyle and sports rehabilitation at Physio Ergo Care"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                </div>
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
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-xs font-bold">MP</div>
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

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-gray-200 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <stat.icon size={28} className="mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <p className="text-2xl sm:text-3xl font-bold text-text-primary">{stat.value}</p>
              <p className="text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Navigation,
  CheckCircle,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98902 77759',
    href: 'tel:+919890277759',
    description: 'Call for appointments & inquiries',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sagarmahajan1@gmail.com',
    href: 'mailto:sagarmahajan1@gmail.com',
    description: 'Send us your queries',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nashik, Maharashtra',
    href: 'https://maps.app.goo.gl/ok3G4ymhjNdSRvYGA',
    description: 'View exact location on Google Maps',
    external: true,
  },
];

const hours = [
  { day: 'Monday - Saturday', time: '8:00 AM - 10:00 AM', type: 'Morning' },
  { day: 'Monday - Saturday', time: '7:00 PM - 10:00 PM', type: 'Evening' },
  { day: 'Sunday', time: 'Closed', type: 'Closed' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Visit Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-text-secondary text-lg">
            Ready to start your recovery journey? Contact us today to book an appointment 
            or visit our clinic in Nashik.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column - Map & Quick Info */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Map Container - explicit height for mobile */}
              <div className="h-64 sm:h-72 md:h-80 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120073.29268996916!2d73.67781241796875!3d19.9974533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb6c6e4e8a0d1d4a!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Physio Ergo Care Location"
                  className="w-full h-full"
                />
              </div>
              {/* Card Footer - separate from map */}
              <div className="p-4 bg-white flex items-center justify-between border-t border-gray-100">
                <div>
                  <h3 className="font-semibold text-text-primary">Physio Ergo Care</h3>
                  <p className="text-sm text-text-secondary">Nashik, Maharashtra</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/ok3G4ymhjNdSRvYGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex-shrink-0"
                >
                  <Navigation size={16} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="bg-surface hover:bg-white p-4 rounded-xl transition-all hover:shadow-lg group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon size={20} className="text-primary group-hover:text-white" />
                  </div>
                  <p className="text-xs text-text-secondary uppercase tracking-wide">{item.label}</p>
                  <p className="font-semibold text-text-primary text-sm mt-0.5">{item.value}</p>
                </a>
              ))}
            </div>

            {/* Opening Hours */}
            <div className="bg-surface rounded-2xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <Clock className="text-primary" size={20} />
                Opening Hours
              </h3>
              <div className="space-y-3">
                {hours.map((slot, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-2 ${
                      index !== hours.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div>
                      <p className="font-medium text-text-primary">{slot.type}</p>
                      <p className="text-sm text-text-secondary">{slot.day}</p>
                    </div>
                    <span
                      className={`font-semibold ${
                        slot.type === 'Closed' ? 'text-red-500' : 'text-primary'
                      }`}
                    >
                      {slot.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <h3 className="text-xl font-bold text-text-primary mb-2">Book an Appointment</h3>
            <p className="text-text-secondary text-sm mb-6">
              Fill out the form below and we will get back to you shortly.
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <CheckCircle className="mx-auto mb-3 text-green-500" size={48} />
                <h4 className="text-lg font-semibold text-green-800 mb-1">Thank You!</h4>
                <p className="text-green-700">
                  Your appointment request has been received. We will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-1">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="spine">Spine Rehabilitation</option>
                    <option value="sports">Sports Rehabilitation</option>
                    <option value="postop">Post-Op Rehabilitation</option>
                    <option value="knee">Knee Rehabilitation</option>
                    <option value="shoulder">Shoulder Rehabilitation</option>
                    <option value="hand">Hand, Wrist & Elbow</option>
                    <option value="ankle">Ankle Rehabilitation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your condition or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>

                <p className="text-xs text-text-secondary text-center">
                  Or message us directly on{' '}
                  <a
                    href="https://wa.me/919890277759"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline inline-flex items-center gap-1"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="mt-12 bg-gradient-to-r from-accent to-accent-dark rounded-2xl p-6 text-white text-center">
          <p className="font-semibold text-lg mb-2">Need Immediate Assistance?</p>
          <p className="text-white/90 mb-4">Call us directly for urgent appointments or inquiries</p>
          <a
            href="tel:+919890277759"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-bold text-lg hover:bg-white/90 transition-colors"
          >
            <Phone size={20} />
            <span>+91 98902 77759</span>
          </a>
        </div>
      </div>
    </section>
  );
}

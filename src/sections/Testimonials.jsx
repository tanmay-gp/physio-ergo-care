import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Hemant Malik',
    rating: 5,
    text: 'Dr.Mahajan is the best Physiotherapist in Nashik city. He personally pays attention & takes care of his patients. My chronic back pain got cured in just 2 sessions.',
    highlight: 'Chronic back pain cured in 2 sessions',
  },
  {
    name: 'Prasad Verulkar',
    rating: 5,
    text: 'Dr. Sagar Mahajan is a profound physiotherapist I must say. I underwent treatment for L4-L5 slip disc. My lower back pain reduced significantly. Unlike other doctors, he explains medical conditions very well.',
    highlight: 'L4-L5 slip disc treatment',
  },
  {
    name: 'Rushali Bagul',
    rating: 5,
    text: 'Dr Mahajan is an amazing physiotherapist. He is a humble and kind person. Thank you so much for the treatment you gave me for my ankle pain. I was so scared for the treatment but you treated me so well.',
    highlight: 'Ankle pain treatment',
  },
  {
    name: 'Bhimreddi Mangalur',
    rating: 5,
    text: 'I was suffering from neck pain. My pain got relieved in just 5 days without medicine. Now following ergonomic advice given by the doctor. Excellent doctor and nice physiotherapy clinic too.',
    highlight: 'Neck pain relieved in 5 days',
  },
  {
    name: 'Sanika Ahire',
    rating: 5,
    text: 'I was suffering from slip disc problem for several months. But when I had taken treatment from Dr Sagar sir, then I got immediate relief from pain. I would like to thank you sir.',
    highlight: 'Slip disc - immediate relief',
  },
  {
    name: 'Ekta Korde',
    rating: 5,
    text: 'Dr. Sagar Mahajan is an excellent physiotherapist. His treatment is the best treatment. Makes patients fit and fine within few days. Proper advice, exercise and care is taken at Physio Ergo Care.',
    highlight: 'Fit and fine within few days',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Patient Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            What Our Patients Say
          </h2>
          <p className="text-text-secondary text-lg">
            Real reviews from real patients. See how we've helped people recover 
            and get back to their active lives.
          </p>
          {/* Google Reviews Link */}
          <a
            href="https://maps.app.goo.gl/ok3G4ymhjNdSRvYGA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-dark font-medium transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>View all reviews on Google</span>
          </a>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Highlight Badge */}
              <div className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {testimonial.highlight}
              </div>

              {/* Review Text */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-text-primary text-sm">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="text-center p-4">
            <p className="text-3xl sm:text-4xl font-bold text-primary">5.0</p>
            <p className="text-text-secondary text-sm">Average Rating</p>
          </div>
          <div className="text-center p-4 border-x border-gray-200">
            <p className="text-3xl sm:text-4xl font-bold text-primary">50+</p>
            <p className="text-text-secondary text-sm">Google Reviews</p>
          </div>
          <div className="text-center p-4">
            <p className="text-3xl sm:text-4xl font-bold text-primary">15+</p>
            <p className="text-text-secondary text-sm">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

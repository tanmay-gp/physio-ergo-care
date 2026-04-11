import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const clinicImages = [
  {
    src: '/images/clinic/1.jpeg',
    alt: 'Clinic Waiting Area',
    caption: 'Comfortable waiting area for patients',
  },
  {
    src: '/images/clinic/2.jpeg',
    alt: 'Doctor\'s Consultation Desk',
    caption: 'Dr. Sagar Mahajan\'s consultation desk with awards and certifications',
  },
  {
    src: '/images/clinic/3.jpeg',
    alt: 'Treatment Room',
    caption: 'Modern treatment room with advanced physiotherapy equipment',
  },
  {
    src: '/images/clinic/4.jpeg',
    alt: 'Physiotherapy Treatment Area',
    caption: 'Dedicated space for physiotherapy treatments and exercises',
  },
];

export default function ClinicGallery() {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === 0 ? clinicImages.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === clinicImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="clinic" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Facility
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-text-secondary text-lg">
            State-of-the-art physiotherapy facility in Nashik, equipped with modern 
            equipment and a comfortable environment for your rehabilitation journey.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-accent">
            <MapPin size={18} />
            <span className="font-medium">Nashik, Maharashtra</span>
          </div>
        </div>

        {/* Image Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {clinicImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-lg">{image.alt}</p>
                <p className="text-white/80 text-sm mt-1">{image.caption}</p>
              </div>
              {/* Click indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Modern Equipment', value: 'Latest Technology' },
            { label: 'Comfortable Space', value: 'Patient-Friendly' },
            { label: 'Hygiene Standards', value: 'Clean & Safe' },
            { label: 'Easy Access', value: 'Prime Location' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-primary font-semibold text-sm">{feature.label}</p>
              <p className="text-text-secondary text-xs mt-1">{feature.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={goToPrevious}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={goToNext}
          >
            <ChevronRight size={24} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[80vh] mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={clinicImages[selectedImage].src}
              alt={clinicImages[selectedImage].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-semibold text-lg">{clinicImages[selectedImage].alt}</p>
              <p className="text-white/70 text-sm mt-1">{clinicImages[selectedImage].caption}</p>
              <p className="text-white/50 text-xs mt-2">
                {selectedImage + 1} / {clinicImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

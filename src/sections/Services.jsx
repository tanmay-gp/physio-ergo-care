import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Activity,
  PersonStanding,
  Bone,
  MoveDiagonal,
  Hand,
  Footprints,
  Spline,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const services = [
  {
    id: 'spine',
    icon: Spline,
    title: 'Spine Rehabilitation',
    subtitle: 'McKenzie Method',
    shortDesc: 'Evidence-based treatment for back and neck pain using the certified McKenzie Method.',
    fullDesc: 'The McKenzie Method was developed in the 1960s by Robin McKenzie, a physical therapist in New Zealand. As a certified McKenzie practitioner, I view each patient as a whole rather than a single symptom to be treated. This holistic approach helps identify the underlying causes of spinal pain and provides targeted exercises for long-term relief.',
    conditions: ['Lower Back Pain', 'Neck Pain', 'Sciatica', 'Herniated Disc', 'Postural Issues'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'sports',
    icon: Activity,
    title: 'Sports Rehabilitation',
    subtitle: 'The Care You Deserve',
    shortDesc: 'Quick assessment and specialized treatment for athletes and sportspersons.',
    fullDesc: "In today's competitive sports world, even the slightest injury to a sportsperson becomes a great setback to the team. Quick assessment, proper treatment, and rehabilitation are essential. We are properly geared to meet any eventuality and bring injured sportspersons back to their best shape with sport-specific rehabilitation programs.",
    conditions: ['ACL/PCL Injuries', 'Meniscus Tears', 'Rotator Cuff Injuries', 'Ankle Sprains', 'Muscle Strains'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'postop',
    icon: PersonStanding,
    title: 'Post-Op Rehabilitation',
    subtitle: 'Helping You Get Healthy',
    shortDesc: 'Specialized care for post-operative patients including TKR, THR, and arthroscopic surgeries.',
    fullDesc: 'We have cared for numerous post-operative patients, especially TKR (Total Knee Replacement), THR (Total Hip Replacement), arthroscopic repair of ACL, PCL, and various ligaments of knee and shoulder. Nothing matters more than your health and comfort, which is why we continuously advance our physiotherapy practice and techniques.',
    conditions: ['TKR Recovery', 'THR Recovery', 'ACL Reconstruction', 'Shoulder Surgery', 'Spine Surgery'],
    color: 'from-purple-500 to-violet-500',
  },
  {
    id: 'knee',
    icon: Bone,
    title: 'Knee Rehabilitation',
    subtitle: 'Restoring Mobility',
    shortDesc: 'Comprehensive treatment for knee pain caused by injury, arthritis, or age-related factors.',
    fullDesc: 'Knee pain is one of the most common problems faced by people of all ages. It can be caused by injury such as torn ligaments, medical conditions like arthritis, age-related factors, obesity, heredity, or heavy physical activity. Most knee pain can be effectively treated with physiotherapy, helping you avoid surgery in many cases.',
    conditions: ['Osteoarthritis', 'Ligament Injuries', 'Meniscus Problems', 'Patellofemoral Pain', 'Post-Injury Recovery'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'shoulder',
    icon: MoveDiagonal,
    title: 'Shoulder Rehabilitation',
    subtitle: 'Taking Care of You',
    shortDesc: 'Expert treatment for shoulder pain and mobility issues through targeted therapy.',
    fullDesc: 'Shoulder pain is exceptionally common and can severely limit daily activities. Through targeted physical therapy and shoulder training, many people are able to significantly improve their symptoms and regain full range of motion. We provide customized rehabilitation programs based on your specific condition.',
    conditions: ['Frozen Shoulder', 'Rotator Cuff Tears', 'Shoulder Impingement', 'Tendonitis', 'Post-Fracture'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'hand',
    icon: Hand,
    title: 'Hand, Wrist & Elbow',
    subtitle: 'Precision Care',
    shortDesc: 'Specialized rehabilitation for upper extremity injuries and post-surgical recovery.',
    fullDesc: "It's easy to take your hands, wrists, and elbows for granted — until something injures them. If you've broken, sprained, or had surgery on your hand, wrist, or elbow, you likely need physical therapy. Our exercises bring mobility and strength back, helping you return to your daily routine faster.",
    conditions: ['Carpal Tunnel', 'Tennis Elbow', 'Wrist Fractures', 'Hand Surgery Recovery', 'Repetitive Strain'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'ankle',
    icon: Footprints,
    title: 'Ankle Rehabilitation',
    subtitle: 'Back on Your Feet',
    shortDesc: 'Treatment for ankle sprains and chronic instability to prevent long-term problems.',
    fullDesc: 'Ankle sprains are common injuries that can result in lifelong problems if not properly treated. Some people with repeated or severe sprains can develop long-term joint pain and weakness. Treating a sprained ankle properly can help prevent ongoing ankle problems and restore stability.',
    conditions: ['Ankle Sprains', 'Chronic Instability', 'Achilles Tendonitis', 'Post-Fracture', 'Balance Issues'],
    color: 'from-teal-500 to-cyan-500',
  },
];

function ServiceCard({ service, isExpanded, onToggle }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  {/* DARK_THEME: card bg-primary-light/30, LIGHT_THEME: card bg-white */}
  return (
    <div
      ref={ref}
      className={`bg-primary-light/30 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-black/20 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Card Header */}
      <div className="p-6">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
          <service.icon size={28} />
        </div>
        {/* DARK_THEME: text-white, LIGHT_THEME: text-text-primary */}
        <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
        {/* DARK_THEME: text-white/60, LIGHT_THEME: text-primary */}
        <p className="text-sm text-white/60 font-medium mb-3">{service.subtitle}</p>
        {/* DARK_THEME: text-white/70, LIGHT_THEME: text-text-secondary */}
        <p className="text-white/70 text-sm leading-relaxed">
          {isExpanded ? service.fullDesc : service.shortDesc}
        </p>
      </div>

      {/* Expanded Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4">
          {/* DARK_THEME: text-white/60, LIGHT_THEME: text-text-secondary */}
          <p className="text-xs font-semibold text-white/60 uppercase tracking-wide mb-2">
            Conditions Treated
          </p>
          <div className="flex flex-wrap gap-2">
            {service.conditions.map((condition) => (
              /* DARK_THEME: bg-primary/50 text-white/80, LIGHT_THEME: bg-surface text-text-secondary */
              <span
                key={condition}
                className="text-xs bg-primary/50 text-white/80 px-3 py-1 rounded-full"
              >
                {condition}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle Button - DARK_THEME: bg-primary/50 text-white, LIGHT_THEME: bg-surface text-primary */}
      <button
        onClick={onToggle}
        className="w-full py-3 px-6 bg-primary/50 hover:bg-primary/70 flex items-center justify-center gap-2 text-white font-medium text-sm transition-colors"
      >
        {isExpanded ? (
          <>
            <ChevronUp size={16} />
            <span>Show Less</span>
          </>
        ) : (
          <>
            <ChevronDown size={16} />
            <span>Learn More</span>
          </>
        )}
      </button>
    </div>
  );
}

export default function Services() {
  const [expandedId, setExpandedId] = useState(null);
  const [headerRef, headerVisible] = useScrollAnimation(0.1);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  {/* DARK_THEME: section bg-primary-dark, LIGHT_THEME: section bg-white */}
  return (
    <section id="services" className="py-20 lg:py-28 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* DARK_THEME: text-white/80, LIGHT_THEME: text-primary */}
          <span className="inline-block text-white/80 font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          {/* DARK_THEME: text-white, LIGHT_THEME: text-text-primary */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive Physiotherapy Services
          </h2>
          {/* DARK_THEME: text-white/70, LIGHT_THEME: text-text-secondary */}
          <p className="text-white/70 text-lg">
            From spine rehabilitation to sports injury recovery, we offer evidence-based 
            treatment for a wide range of musculoskeletal conditions.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/spine-consultation.jpg"
              alt="Doctor explaining spine anatomy to patient"
              className="w-full h-64 md:h-80 object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="p-8 md:p-12 text-white max-w-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Expert Spine Care</h3>
                <p className="text-white/90">
                  Understanding your condition is the first step to recovery. We take time to 
                  explain your diagnosis and treatment options.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isExpanded={expandedId === service.id}
              onToggle={() => toggleExpand(service.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          {/* DARK_THEME: text-white/70, LIGHT_THEME: text-text-secondary */}
          <p className="text-white/70 mb-4">
            Not sure which service you need? Contact us for a consultation.
          </p>
          <a
            href="tel:+919890277759"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
          >
            <span>Call for Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
}

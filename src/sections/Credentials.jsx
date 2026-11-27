import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { useEffect } from 'react';
import {
  GraduationCap,
  Award,
  Building2,
  FileText,
  Users,
  Heart,
  Brain,
  Activity,
  Briefcase,
} from 'lucide-react';

const qualifications = [
  { degree: 'BPTh', institution: "Pravara Medical Trust's College of Physiotherapy", icon: GraduationCap },
  { degree: 'MPTh (Ortho)', institution: 'Dr. D.Y. Patil College of Physiotherapy, Pune', icon: GraduationCap },
  { degree: 'Certified McKenzie Practitioner', institution: 'Spine Rehabilitation Specialist', icon: Award },
  { degree: 'Certified Neurodynamic Therapist', institution: 'Advanced Neural Mobilization', icon: Brain },
  { degree: 'Certified Dry Needling Practitioner', institution: 'Pain Management Specialist', icon: Award },
];

const affiliations = [
  {
    role: 'Chief Physiotherapist',
    hospital: 'Ashoka Medicover Hospital Nashik',
    period: 'July 2018 - Present',
    icon: Building2,
  },
  {
    role: 'Head of Department - Physiotherapy',
    hospital: 'Wockhardt Hospital Nashik',
    period: 'July 2010 - June 2018',
    icon: Building2,
  },
  {
    role: 'President',
    hospital: "Physiotherapists' Association of Nashik (PAN)",
    period: 'Elected Position',
    icon: Users,
  },
];

const programs = [
  { name: 'Orthopedic Rehabilitation', description: 'TKR, THR, Arthroscopy recovery programs', icon: Briefcase },
  { name: 'Cardiac Rehabilitation', description: 'Post-Angioplasty & Post-CABG programs', icon: Heart },
  { name: 'Neuro Rehabilitation', description: 'Neurological condition management', icon: Brain },
  { name: 'Kidney Rehabilitation', description: 'CKD patients on dialysis', icon: Activity },
  { name: 'Sports Rehabilitation', description: 'WockFitZone - Sports injury center', icon: Award },
  { name: 'Corporate Ergonomics', description: '200+ lectures at MNCs in Nashik', icon: Users },
];

const awards = [
  {
    title: 'Significant Contribution Award',
    organization: 'Indian Association of Physiotherapy (IAP)',
    year: '2016',
    context: 'For forming Physiotherapists Association of Nashik (PAN)',
  },
];

function StatCard({ value, suffix, label, delay }) {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const [count, startCount] = useCountUp(value, 2000, true);

  useEffect(() => {
    if (isVisible) startCount();
  }, [isVisible, startCount]);

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">
        {count.toLocaleString('en-IN')}{suffix}
      </p>
      <p className="text-text-secondary font-medium">{label}</p>
    </div>
  );
}

export default function Credentials() {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [qualsRef, qualsVisible] = useScrollAnimation(0.1);
  const [affilRef, affilVisible] = useScrollAnimation(0.1);
  const [progRef, progVisible] = useScrollAnimation(0.1);

  return (
    <section id="credentials" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Credentials & Expertise
          </h2>
          <p className="text-text-secondary text-lg">
            Backed by advanced qualifications, hospital affiliations, and a commitment 
            to evidence-based practice since 2008.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <StatCard value={15} suffix="+" label="Years Experience" delay={0} />
          <StatCard value={22000} suffix="+" label="Patients Treated" delay={100} />
          <StatCard value={4} suffix="" label="Research Publications" delay={200} />
          <StatCard value={3} suffix="" label="Hospital Affiliations" delay={300} />
        </div>

        {/* Qualifications Grid */}
        <div
          ref={qualsRef}
          className={`mb-16 transition-all duration-700 ${
            qualsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <GraduationCap className="text-primary" size={28} />
            Qualifications & Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualifications.map((qual, index) => (
              <div
                key={qual.degree}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <qual.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{qual.degree}</h4>
                    <p className="text-sm text-text-secondary">{qual.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Hospital Affiliations */}
          <div
            ref={affilRef}
            className={`transition-all duration-700 ${
              affilVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <Building2 className="text-primary" size={28} />
              Hospital Affiliations
            </h3>
            <div className="space-y-4">
              {affiliations.map((affil) => (
                <div
                  key={affil.hospital}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-light/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <affil.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">{affil.role}</h4>
                      <p className="text-primary font-medium">{affil.hospital}</p>
                      <p className="text-sm text-text-secondary mt-1">{affil.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Award */}
            <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-5 rounded-xl">
              <div className="flex items-start gap-3">
                <Award className="text-amber-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-amber-900">{awards[0].title}</h4>
                  <p className="text-amber-800 text-sm">{awards[0].organization} ({awards[0].year})</p>
                  <p className="text-amber-700/80 text-sm mt-1">{awards[0].context}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Programs Developed */}
          <div
            ref={progRef}
            className={`transition-all duration-700 delay-200 ${
              progVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <FileText className="text-primary" size={28} />
              Specialized Programs
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {programs.map((prog) => (
                <div
                  key={prog.name}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-3">
                    <prog.icon size={20} className="text-primary-dark" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-1">{prog.name}</h4>
                  <p className="text-sm text-text-secondary">{prog.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

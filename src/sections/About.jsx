import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Building, Users, TrendingUp } from 'lucide-react';

const timeline = [
  {
    year: '2007',
    title: 'Master\'s Degree Completed',
    description: 'Completed MPTh (Ortho) from Dr. D.Y. Patil College of Physiotherapy, Pune',
    icon: Award,
  },
  {
    year: '2008',
    title: 'Physio Ergo Care Established',
    description: 'Founded the clinic to serve the Nashik community with evidence-based physiotherapy',
    icon: Building,
  },
  {
    year: '2010',
    title: 'Joined Wockhardt Hospital',
    description: 'Appointed as Head of Department, developed orthopedic and cardiac rehabilitation programs',
    icon: TrendingUp,
  },
  {
    year: '2016',
    title: 'IAP Recognition',
    description: 'Received Significant Contribution Award from Indian Association of Physiotherapy',
    icon: Award,
  },
  {
    year: '2018',
    title: 'Chief Physiotherapist at Medicover',
    description: 'Appointed Chief Physiotherapist at Ashoka Medicover Hospital Nashik',
    icon: Users,
  },
];

export default function About() {
  const [contentRef, contentVisible] = useScrollAnimation(0.1);
  const [timelineRef, timelineVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Dr. Sagar Mahajan
          </h2>
          <p className="text-text-secondary text-lg">
            A journey dedicated to improving lives through evidence-based physiotherapy
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Profile Image Card */}
          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-3xl overflow-hidden">
                {/* Placeholder for doctor image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-surface to-white flex items-center justify-center relative">
                  <div className="text-center p-8">
                    <div className="w-28 h-28 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-primary">SM</span>
                    </div>
                    <p className="text-text-secondary">Dr. Sagar Mahajan</p>
                    <p className="text-primary font-semibold">Consultant Physiotherapist</p>
                  </div>
                </div>
                <div className="p-6 bg-surface">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">15+</p>
                      <p className="text-sm text-text-secondary">Years Practice</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">5000+</p>
                      <p className="text-sm text-text-secondary">Patients Treated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Story Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-text-secondary leading-relaxed">
                I completed my Bachelor's in Physiotherapy from{' '}
                <strong className="text-text-primary">Pravara Medical Trust's College of Physiotherapy</strong>{' '}
                and my Master's from{' '}
                <strong className="text-text-primary">Dr. D.Y. Patil College of Physiotherapy, Pimpri, Pune</strong>{' '}
                in 2007. After completing my education, I started my clinical career with a vision to provide 
                evidence-based physiotherapy care to the Nashik community.
              </p>
              <p className="text-text-secondary leading-relaxed">
                In 2008, I took a significant step forward by establishing{' '}
                <strong className="text-text-primary">Physio Ergo Care</strong>. Since then, I have been 
                dedicated to serving people and helping them become more fit and problem-free through 
                personalized rehabilitation programs.
              </p>
              <p className="text-text-secondary leading-relaxed">
                In 2010, I joined <strong className="text-text-primary">Wockhardt Hospital, Nashik</strong> as a 
                Consultant Physiotherapist. During my tenure there, I developed comprehensive rehabilitation 
                programs including orthopedic rehabilitation for TKR and THR patients, post-arthroscopy 
                rehabilitation, Phase 1 & 2 cardiac rehabilitation for post-angioplasty and post-CABG patients, 
                neuro rehabilitation, and kidney rehabilitation for CKD patients.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I also established a specialized sports rehabilitation clinic named{' '}
                <strong className="text-text-primary">"WockFitZone"</strong> and have delivered nearly{' '}
                <strong className="text-text-primary">200 lectures on Office Ergonomics</strong> in various 
                multinational companies across Nashik.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I took the initiative in forming the{' '}
                <strong className="text-text-primary">Physiotherapists' Association of Nashik (PAN)</strong> and 
                was elected as its President. For this contribution, I was honored with the{' '}
                <strong className="text-text-primary">"Significant Contribution Award"</strong> by the Indian 
                Association of Physiotherapy (IAP) in 2016.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Building className="mx-auto mb-2 text-primary" size={24} />
                <p className="font-semibold text-text-primary">2 Major Hospitals</p>
              </div>
              <div className="text-center">
                <Award className="mx-auto mb-2 text-primary" size={24} />
                <p className="font-semibold text-text-primary">IAP Award 2016</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-2 text-primary" size={24} />
                <p className="font-semibold text-text-primary">PAN President</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className={`transition-all duration-700 ${
            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Professional Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full flex items-center justify-center z-10">
                    <item.icon size={14} className="text-primary" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all inline-block">
                      <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full mb-2">
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

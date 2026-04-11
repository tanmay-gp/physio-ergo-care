import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FileText, Calendar, ExternalLink, BookOpen } from 'lucide-react';

const publications = [
  {
    id: 1,
    title: 'Effectiveness of McConnell Patellofemoral Taping in Post-TKR Patients',
    subtitle: 'Strengthening of quadriceps muscles with McConnell patellofemoral taping',
    date: 'January 2018',
    category: 'Orthopedic Rehabilitation',
    description: 'A study examining the effectiveness of McConnell patellofemoral taping combined with quadriceps strengthening exercises in patients recovering from Total Knee Arthroplasty.',
    keywords: ['TKR', 'Patellofemoral Taping', 'Quadriceps Strengthening', 'Knee Rehabilitation'],
  },
  {
    id: 2,
    title: 'Physiotherapy for Dialysis Patients',
    subtitle: 'Effectiveness on quality of life and urea reduction ratio',
    date: 'April 2016',
    category: 'Kidney Rehabilitation',
    description: 'Research on the effectiveness of physiotherapy measures on the quality of life of chronic kidney disease patients undergoing regular dialysis, examining therapeutic efficacy on urea reduction ratio.',
    keywords: ['CKD', 'Dialysis', 'Quality of Life', 'Urea Reduction'],
  },
  {
    id: 3,
    title: 'Neurodynamics for Piriformis Syndrome Induced Sciatica',
    subtitle: 'Neural tissue mobilization with conventional physiotherapy',
    date: 'October 2007',
    category: 'Neuro Rehabilitation',
    description: 'A comparative study evaluating the effectiveness of neural tissue mobilization combined with conventional physiotherapy in treating piriformis syndrome induced sciatica.',
    keywords: ['Sciatica', 'Piriformis Syndrome', 'Neural Mobilization', 'Neurodynamics'],
  },
  {
    id: 4,
    title: 'Ergoexercises for Desk Workers',
    subtitle: 'Effectiveness of repeated ergoexercises for neck and shoulder',
    date: 'July 2014',
    category: 'Occupational Health',
    description: 'Research on the effectiveness of repeated ergonomic exercises for the neck and shoulder in desk workers, addressing the growing concern of workplace-related musculoskeletal disorders.',
    keywords: ['Ergonomics', 'Workplace Health', 'Neck Pain', 'Shoulder Pain', 'Desk Workers'],
  },
];

export default function Publications() {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  return (
    <section id="publications" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Research & Publications
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Evidence-Based Practice
          </h2>
          <p className="text-text-secondary text-lg">
            Our treatments are backed by research. Explore our contributions to the field 
            of physiotherapy and rehabilitation medicine.
          </p>
        </div>

        {/* Publications Grid */}
        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {publications.map((pub, index) => (
            <article
              key={pub.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    <BookOpen size={12} />
                    {pub.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-text-secondary text-sm">
                    <Calendar size={14} />
                    {pub.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-primary leading-snug group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <p className="text-text-secondary text-sm mt-1">{pub.subtitle}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {pub.description}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs bg-surface text-text-secondary px-2.5 py-1 rounded-md"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
                  <FileText size={16} />
                  <span>View Publication</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Research Philosophy */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          {/* Background with subtle pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />
          </div>
          
          {/* Content */}
          <div className="relative p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              {/* Icon with circle background */}
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                <BookOpen className="text-white" size={40} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Research-Based Approach
              </h3>
              
              <p className="text-white/80 leading-relaxed text-lg">
                At Physio Ergo Care, we believe in evidence-based practice. Every treatment protocol 
                we use is backed by scientific research and clinical evidence. Our commitment to 
                research ensures that our patients receive the most effective and up-to-date care 
                available in the field of physiotherapy.
              </p>
              
              {/* Accent line */}
              <div className="w-24 h-1 bg-accent rounded-full mx-auto mt-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

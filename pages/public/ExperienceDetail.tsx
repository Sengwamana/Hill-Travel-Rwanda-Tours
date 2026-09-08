import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';
import { eventsFor } from '../../utils/events';
import { EXPERIENCES, type ExperienceSlug } from '../../content/experiences';

const ExperienceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? EXPERIENCES[slug as ExperienceSlug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sandstone">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-earth mb-4">Experience Not Found</h2>
          <Link to="/events" className="text-forest hover:underline font-bold">Return to Events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-sandstone">
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <ImageWithFallback src={data.image} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
          <div className="max-w-7xl mx-auto">
             <span className="bg-forest px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">{data.category}</span>
             <h1 className="text-4xl md:text-6xl font-serif mb-4">{data.title}</h1>
             <div className="flex flex-wrap gap-6 text-sm font-medium opacity-90">
               <span className="flex items-center gap-2"><span className="material-symbols-outlined">schedule</span> {data.duration}</span>
               <span className="flex items-center gap-2"><span className="material-symbols-outlined">group</span> {data.groupSize}</span>
               <span className="flex items-center gap-2"><span className="material-symbols-outlined">pin_drop</span> {data.location}</span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-earth mb-6">Experience Overview</h2>
              <p className="text-lg text-earth/80 leading-relaxed">{data.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-earth mb-6">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.highlights.map((h: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-forest mt-0.5">check_circle</span>
                    <span className="text-earth/80">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
               <h3 className="text-2xl font-serif text-earth mb-6">Typical Itinerary</h3>
               <div className="border-l-2 border-forest/20 ml-3 space-y-8">
                 {data.itinerary.map((item, i) => (
                   <div key={i} className="relative pl-8">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-forest"></div>
                     <span className="block text-xs font-bold text-forest uppercase tracking-wider mb-1">{item.time}</span>
                     <span className="text-earth font-medium">{item.activity}</span>
                   </div>
                 ))}
               </div>
            </div>

            {eventsFor('experiences', slug || '').length > 0 && (
              <div>
                <h3 className="text-2xl font-serif text-earth mb-6">Book This for an Event</h3>
                <div className="flex flex-wrap gap-3">
                  {eventsFor('experiences', slug || '').map((e) => (
                    <Link
                      key={e.slug}
                      to={`/events/${e.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-sandstone rounded-sm text-sm font-bold uppercase tracking-wider text-earth hover:border-forest hover:text-forest hover:-translate-y-0.5 transition-all"
                    >
                      <span className="material-symbols-outlined text-base text-sage">{e.icon}</span>
                      {e.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-sm shadow-lg sticky top-24 border-t-4 border-forest">
               <p className="text-sm text-earth/60 mb-4">Rates are tailored to your group, season, and event.</p>
               <Link to={`/booking?experience=${slug}`} className="block w-full py-4 bg-forest text-white text-center font-bold uppercase tracking-widest hover:bg-forest-light transition-colors mb-4">
                 Book This Experience
               </Link>
               <Link to="/contact" className="block w-full py-4 border border-sandstone text-earth text-center font-bold uppercase tracking-widest hover:bg-sandstone transition-colors">
                 Ask a Question
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
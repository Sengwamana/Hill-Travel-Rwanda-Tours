import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventsFor } from '../../utils/events';
import { SERVICES, type ServiceSlug } from '../../content/services';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? SERVICES[slug as ServiceSlug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sandstone">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-earth mb-4">Service Not Found</h2>
          <Link to="/services" className="text-forest hover:underline font-bold">Return to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-sandstone min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
           <div className="w-20 h-20 bg-forest text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="material-symbols-outlined text-4xl">{data.icon}</span>
           </div>
           <span className="text-sage font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Services</span>
           <h1 className="text-4xl md:text-5xl font-serif text-earth mb-6">{data.title}</h1>
           <p className="text-xl text-earth/70 font-light">{data.summary}</p>
        </div>

        <div className="bg-white p-10 rounded-sm shadow-sm border-t-4 border-forest mb-12">
           <h2 className="text-2xl font-serif text-earth mb-6">Service Details</h2>
           <p className="text-earth/80 leading-relaxed mb-8 text-lg">
             {data.content}
           </p>
           
           <h3 className="text-lg font-bold text-earth mb-4">Key Features</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {data.features.map((feature: string, i: number) => (
               <div key={i} className="flex items-center gap-3 p-3 bg-sandstone/30 rounded-sm">
                 <span className="material-symbols-outlined text-forest">verified</span>
                 <span className="text-earth/90 font-medium">{feature}</span>
               </div>
             ))}
           </div>
        </div>

        {eventsFor('services', slug || '').length > 0 && (
          <div className="bg-white p-10 rounded-sm shadow-sm border-t-4 border-sage mb-12">
            <h2 className="text-2xl font-serif text-earth mb-6">Part of These Events</h2>
            <div className="flex flex-wrap gap-3">
              {eventsFor('services', slug || '').map((e) => (
                <Link
                  key={e.slug}
                  to={`/events/${e.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-sandstone/40 border border-sandstone rounded-sm text-sm font-bold uppercase tracking-wider text-earth hover:border-forest hover:text-forest hover:-translate-y-0.5 transition-all"
                >
                  <span className="material-symbols-outlined text-base text-sage">{e.icon}</span>
                  {e.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="bg-earth text-sandstone p-10 text-center rounded-sm">
           <h2 className="text-3xl font-serif mb-4">Ready to Plan?</h2>
           <p className="mb-8 opacity-80 max-w-lg mx-auto">
             Contact our team to include {data.title} in your upcoming trip to Rwanda.
           </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={`/booking?service=${data.slug}`} className="px-8 py-3 bg-white text-earth font-bold uppercase tracking-widest hover:bg-sage transition-colors">
                Plan This Service
              </Link>
              <Link to="/contact" className="px-8 py-3 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                Inquire Now
              </Link>
              <Link to="/services" className="px-8 py-3 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                View All Services
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
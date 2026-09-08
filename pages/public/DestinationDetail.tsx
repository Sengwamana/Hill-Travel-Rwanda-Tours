import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LodgeCard from '../../components/LodgeCard';
import ImageWithFallback from '../../components/ImageWithFallback';
import { eventsFor } from '../../utils/events';
import { DESTINATIONS, type DestinationSlug } from '../../content/destinations';

const DestinationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? DESTINATIONS[slug as DestinationSlug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sandstone">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-earth mb-4">Destination Not Found</h2>
          <Link to="/destinations" className="text-forest hover:underline font-bold">Return to Destinations</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-sandstone">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <ImageWithFallback src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
          <div className="max-w-7xl mx-auto">
             <span className="inline-block py-1 px-3 border border-white/40 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-md">
               {data.subtitle}
             </span>
             <h1 className="text-5xl md:text-7xl font-serif mb-6">{data.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Description */}
            <div>
              <h2 className="text-3xl font-serif text-earth mb-6">Overview</h2>
              <p className="text-lg text-earth/80 leading-relaxed font-light">
                {data.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-3xl font-serif text-earth mb-8">Key Highlights</h2>
              <div className="space-y-6">
                {data.highlights.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-sm shadow-sm border-l-4 border-sage">
                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center shrink-0 text-forest">
                      <span className="material-symbols-outlined">{idx === 0 ? 'star' : idx === 1 ? 'visibility' : 'landscape'}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-earth text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-earth/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lodges Grid (Mobile/Tablet view mostly, desktop has plenty of space) */}
            <div>
               <h2 className="text-3xl font-serif text-earth mb-8">Where to Stay</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {data.lodges.map((lodge, idx) => (
                   <LodgeCard key={idx} {...lodge} />
                 ))}
               </div>
            </div>

            {/* Events in this region */}
            {eventsFor('destinations', slug || '').length > 0 && (
              <div>
                <h2 className="text-3xl font-serif text-earth mb-8">Events in {data.title}</h2>
                <div className="flex flex-wrap gap-3">
                  {eventsFor('destinations', slug || '').map((e) => (
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

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Stats */}
            <div className="bg-forest text-white p-8 rounded-sm shadow-xl">
               <h3 className="font-serif text-2xl mb-6 border-b border-white/20 pb-4">At a Glance</h3>
               <div className="space-y-6">
                 {data.stats.map((stat, idx) => (
                   <div key={idx}>
                     <span className="block text-xs uppercase tracking-widest text-sage mb-1">{stat.label}</span>
                     <span className="block text-xl font-bold">{stat.value}</span>
                   </div>
                 ))}
               </div>
               <div className="mt-8 pt-6 border-t border-white/20">
                 <Link to={`/booking?destination=${slug}`} className="block w-full text-center py-3 bg-white text-forest font-bold uppercase tracking-widest text-sm hover:bg-sage hover:text-white transition-colors">
                   Book This Region
                 </Link>
               </div>
            </div>

            {/* Need Help? */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-earth/10">
               <span className="material-symbols-outlined text-4xl text-forest mb-4">support_agent</span>
               <h3 className="font-serif text-xl text-earth mb-2">Need advice?</h3>
               <p className="text-sm text-earth/70 mb-4">Our travel designers have visited every lodge in {data.title}.</p>
               <Link to="/contact" className="text-forest font-bold text-sm uppercase tracking-widest hover:underline">
                 Contact Concierge
               </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
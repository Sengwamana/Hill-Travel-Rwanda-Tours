import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';
import { EVENT_TYPES, IMAGES } from '../../utils/events';

const Events: React.FC = () => {
  return (
    <div className="w-full bg-sandstone">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <ImageWithFallback src={IMAGES.heroEvents} alt="Celebration in Rwanda" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-earth/40"></div>
        <div className="relative z-10 text-center text-white px-6">
          <span className="inline-block py-1 px-3 border border-white/40 rounded-full text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
            Plan, Host, Celebrate
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-4 animate-hero-title">Events & Occasions</h1>
          <p className="text-xl max-w-2xl mx-auto font-light animate-hero-text">
            From intimate birthdays to grand national celebrations, we design and host events across Rwanda's thousand hills.
          </p>
        </div>
      </div>

      {/* Intro strip */}
      <div className="border-b border-earth/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <p className="text-lg text-earth/70 max-w-3xl mx-auto leading-relaxed">
            Every event is tailored around your occasion. We connect you with the destinations, services, experiences, and partners needed to make it unforgettable.
          </p>
        </div>
      </div>

      {/* Event Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENT_TYPES.map((event) => (
            <Link
              key={event.slug}
              to={`/events/${event.slug}`}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border-b-4 border-transparent hover:border-forest flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-forest shadow-lg">
                  <span className="material-symbols-outlined">{event.icon}</span>
                </div>
                <span className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-[0.2em]">
                  {event.destinations.length} {event.destinations.length === 1 ? 'Region' : 'Regions'} Served
                </span>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-earth mb-2 group-hover:text-forest transition-colors">{event.name}</h3>
                <p className="text-earth/70 text-sm mb-5 flex-grow leading-relaxed">{event.tagline}</p>
                <div className="flex items-center justify-between border-t border-earth/10 pt-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-earth/50">
                    {event.services.length} services · {event.experiences.length} experiences
                  </span>
                  <span className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-forest">
                    Plan <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-24 px-6 bg-forest text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Not sure which event type fits?</h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            Share your occasion with our event designers and we will craft a full plan — venues, catering, production, and experiences.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-sandstone text-forest font-bold rounded-sm hover:bg-white transition-colors uppercase tracking-widest text-sm">
            Contact Concierge
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;
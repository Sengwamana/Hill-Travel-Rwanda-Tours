import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';
import { EVENT_BY_SLUG } from '../../utils/events';
import { relationLabel, relationPath } from '../../utils/site';

interface RelationSectionProps {
  kind: 'destinations' | 'services' | 'experiences' | 'projects';
  title: string;
  icon: string;
  slugs: string[];
}

const RelationSection: React.FC<RelationSectionProps> = ({ kind, title, icon, slugs }) => {
  if (!slugs.length) return null;
  return (
    <div>
      <h3 className="text-2xl font-serif text-earth mb-6 flex items-center gap-3">
        <span className="material-symbols-outlined text-sage">{icon}</span> {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {slugs.map((slug) => (
          <Link
            key={slug}
            to={relationPath(kind, slug)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-sandstone rounded-sm text-sm font-bold uppercase tracking-wider text-earth hover:border-forest hover:text-forest hover:-translate-y-0.5 transition-all"
          >
            {relationLabel(kind, slug)}
            <span className="material-symbols-outlined text-base">north_east</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const EventDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? EVENT_BY_SLUG[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sandstone">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-earth mb-4">Event Type Not Found</h2>
          <Link to="/events" className="text-forest hover:underline font-bold">Return to Events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-sandstone">
      {/* Hero */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <ImageWithFallback src={data.image} alt={data.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
          <div className="max-w-7xl mx-auto">
            <span className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-forest shadow-lg mb-4">
              <span className="material-symbols-outlined text-2xl">{data.icon}</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{data.name}</h1>
            <p className="text-lg md:text-xl text-sandstone/90 font-light max-w-2xl">{data.tagline}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-earth mb-6">What We Arrange</h2>
              <p className="text-lg text-earth/80 leading-relaxed">{data.description}</p>
            </div>

            <RelationSection kind="destinations" title="Host Your Event Here" icon="map" slugs={data.destinations} />
            <RelationSection kind="services" title="Services for This Event" icon="support_agent" slugs={data.services} />
            <RelationSection kind="experiences" title="Signature Experiences" icon="star" slugs={data.experiences} />
            <RelationSection kind="projects" title="Related Case Studies" icon="workspace_premium" slugs={data.projects} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-forest text-white p-8 rounded-sm shadow-xl">
              <h3 className="font-serif text-2xl mb-6 border-b border-white/20 pb-4">Plan This Event</h3>
              <p className="text-sm text-sandstone/80 leading-relaxed mb-6">
                Tell us your date, guest count, and vision. Our event designers respond within 24 hours with venues, catering, and production options.
              </p>
              <Link
                to={`/booking?event=${data.slug}`}
                className="block w-full text-center py-3 bg-white text-forest font-bold uppercase tracking-widest text-sm hover:bg-sage hover:text-white transition-colors mb-4"
              >
                Start Booking
              </Link>
              <Link
                to="/contact"
                className="block w-full text-center py-3 border border-white/40 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
              >
                Ask a Question
              </Link>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm border border-earth/10">
              <span className="material-symbols-outlined text-4xl text-forest mb-4">support_agent</span>
              <h3 className="font-serif text-xl text-earth mb-2">Talk to an Event Designer</h3>
              <p className="text-sm text-earth/70 mb-4">
                Every occasion is unique. Let us tailor venues, menus, and performances around your budget and guest list.
              </p>
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

export default EventDetail;
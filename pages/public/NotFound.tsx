import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="w-full bg-sandstone min-h-screen flex items-center justify-center px-6 pt-24 pb-24">
      <div className="text-center max-w-lg">
        <span className="material-symbols-outlined text-8xl text-sage mb-6">travel_explore</span>
        <h1 className="text-6xl font-serif text-earth mb-4">404</h1>
        <h2 className="text-2xl font-serif text-earth mb-4">Page Not Found</h2>
        <p className="text-earth/70 mb-10 leading-relaxed">
          The trail you're looking for doesn't exist. Let's get you back on the road to Rwanda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="px-8 py-3 bg-forest text-white font-bold uppercase tracking-widest hover:bg-forest-light transition-colors">
            Return Home
          </Link>
          <Link to="/destinations" className="px-8 py-3 border border-forest text-forest font-bold uppercase tracking-widest hover:bg-forest hover:text-white transition-colors">
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';

const About: React.FC = () => {
  return (
    <div className="w-full bg-sandstone">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 bg-earth text-sandstone">
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute inset-0 bg-black/40 z-10"></div>
           <ImageWithFallback src="https://images.unsplash.com/photo-1534234828563-0259b15e580d?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 grayscale" alt="Rwanda Landscape" />
        </div>
        <div className="max-w-7xl mx-auto relative z-20 text-center">
          <span className="text-sage font-bold text-xs uppercase tracking-[0.2em] mb-4 block animate-fade-in">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 animate-hero-title">About Hill Travel</h1>
          <p className="max-w-2xl mx-auto text-lg text-sandstone/90 font-light leading-relaxed animate-hero-text">
            Born from a deep love for Rwanda ("Le Pays des Mille Collines"), we are more than a travel agency. We are custodians of a legacy, connecting the world to the heart of Africa.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-10 rounded-sm shadow-sm border-t-4 border-forest relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-forest">flag</span>
            </div>
            <h2 className="text-3xl font-serif text-earth mb-6">Our Mission</h2>
            <p className="text-earth/80 text-lg leading-relaxed">
              To curate life-changing journeys that celebrate Rwanda's breathtaking beauty while actively uplifting its local communities and preserving its fragile natural heritage for generations to come.
            </p>
          </div>
          <div className="bg-white p-10 rounded-sm shadow-sm border-t-4 border-sage relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-sage">visibility</span>
            </div>
            <h2 className="text-3xl font-serif text-earth mb-6">Our Vision</h2>
            <p className="text-earth/80 text-lg leading-relaxed">
              To be the global benchmark for regenerative tourism in East Africa, proving that luxury travel can be a powerful force for ecological restoration and social equity.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-forest text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <span className="text-sage font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Core Principles</span>
             <h2 className="text-4xl font-serif">Our Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Regeneration", icon: "recycling", desc: "We strive to leave every place better than we found it, offsetting carbon and funding conservation." },
              { title: "Authenticity", icon: "handshake", desc: "We prioritize genuine human connections over staged performances." },
              { title: "Integrity", icon: "verified", desc: "Transparent pricing, fair wages for our guides, and ethical business practices." },
              { title: "Excellence", icon: "diamond", desc: "Uncompromising quality in every itinerary, lodge selection, and transport detail." }
            ].map((value, i) => (
              <div key={i} className="text-center p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 text-sage">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                <p className="text-sandstone/80 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-sandstone overflow-hidden">
        <div className="max-w-5xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-serif text-earth">Our Journey</h2>
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-earth/20 -translate-x-1/2 md:translate-x-0"></div>

            <div className="space-y-12">
              {[
                { year: "2018", title: "The Beginning", desc: "Founded in Kigali by a team of conservationists with a single Land Cruiser and a dream to show the real Rwanda." },
                { year: "2019", title: "Community First", desc: "Partnered with the Nyamirambo Women's Center to launch our first exclusive community-led walking tours." },
                { year: "2021", title: "Beyond Gorillas", desc: "Launched our signature 'Beyond the Gorillas' initiative to promote tourism in Akagera and Nyungwe, diversifying local income." },
                { year: "2023", title: "Award Winning", desc: "Recognized as 'Rwanda's Leading Eco-Tour Operator' for our commitment to carbon-neutral travel." },
                { year: "2024", title: "Regional Expansion", desc: "Expanded operations to include cross-border conservation circuits into Uganda and Tanzania." }
              ].map((item, i) => (
                <div key={i} className={`relative flex items-center md:justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-forest border-4 border-sandstone -translate-x-1/2 z-10 shadow-sm"></div>
                  
                  {/* Spacer for mobile alignment */}
                  <div className="w-8 md:w-1/2"></div>
                  
                  {/* Content */}
                  <div className="w-full md:w-[45%] pl-8 md:pl-0">
                    <div className={`bg-white p-6 rounded-sm shadow-sm border-l-4 border-earth ${i % 2 === 0 ? 'md:text-left' : 'md:text-right md:border-l-0 md:border-r-4'}`}>
                      <span className="text-forest font-bold text-2xl mb-2 block font-serif">{item.year}</span>
                      <h3 className="text-xl font-bold text-earth mb-2">{item.title}</h3>
                      <p className="text-earth/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-earth mb-6">Meet the Experts</h2>
          <p className="text-lg text-earth/70 mb-10 leading-relaxed">
            Our team consists of certified guides, travel designers, and logistics experts who know every corner of this beautiful country.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-earth text-white font-bold rounded-sm hover:bg-forest transition-colors uppercase tracking-widest text-sm shadow-lg">
            Plan Your Trip With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
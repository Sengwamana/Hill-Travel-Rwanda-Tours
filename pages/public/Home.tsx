import React from 'react';
import { Link } from 'react-router-dom';
import LodgeCard from '../../components/LodgeCard';
import ImageWithFallback from '../../components/ImageWithFallback';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image - Tea Plantations (Not just Gorillas) */}
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1544976735-e51c4e70438a?q=80&w=2662&auto=format&fit=crop" 
            alt="Rwanda Tea Plantation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 pt-20">
          <span className="inline-block py-1 px-3 border border-white/40 rounded-full text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm animate-fade-in">
            The Land of a Thousand Hills
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white mb-8 leading-tight drop-shadow-lg animate-hero-title">
            Hill Travel <span className="italic font-light">Rwanda</span> Tours
          </h1>
          <p className="text-lg md:text-xl text-sandstone/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-hero-text">
            Experience the untold stories of Rwanda. From the shores of Lake Kivu to the heart of the community, discover regenerative travel that heals the earth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-hero-buttons">
            <Link to="/destinations" className="min-w-[180px] px-8 py-4 bg-forest hover:bg-forest-light text-white rounded-sm font-medium transition-all duration-300 shadow-xl shadow-forest/20">
              Explore Destinations
            </Link>
            <Link to="/experiences" className="min-w-[180px] px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-sm font-medium transition-all duration-300">
              Our Philosophy
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Philosophy Section - "Beyond the Gorillas" */}
      <section className="py-24 px-6 bg-sandstone">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-earth leading-tight">
                Not Just a Trip. <br/>A <span className="text-forest italic">Transformation.</span>
              </h2>
              <p className="text-earth/80 text-lg leading-relaxed">
                While the majestic mountain gorillas are our pride, Rwanda's soul beats in its tea plantations, its vibrant art studios, and its resilient communities. 
                Hill Travel connects you with the people and places often missed by the tour bus.
              </p>
              
              <div className="space-y-6 pt-4">
                {[
                  { title: "Community-Led Tourism", desc: "80% of your booking fee goes directly to local cooperatives." },
                  { title: "Carbon Negative Stays", desc: "We only partner with lodges that offset more carbon than they emit." },
                  { title: "Cultural Immersion", desc: "Participate in 'Umuganda' (community work) and basket weaving workshops." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center shrink-0 text-forest">
                      <span className="material-symbols-outlined">{idx === 0 ? 'groups' : idx === 1 ? 'co2' : 'handshake'}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-earth mb-1">{item.title}</h4>
                      <p className="text-sm text-earth/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback src="https://images.unsplash.com/photo-1579685366885-e1e550c609d9?q=80&w=2070&auto=format&fit=crop" alt="Rwandan woman weaving" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-tr-2xl shadow-xl max-w-xs hidden md:block">
                <p className="font-serif italic text-earth text-lg mb-2">"Travel makes one modest. You see what a tiny place you occupy in the world."</p>
                <p className="text-xs font-bold text-forest uppercase tracking-wider">— Gustave Flaubert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lodges */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-forest font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Curated Stays</span>
            <h2 className="text-4xl md:text-5xl font-serif text-earth mb-6">Sleep With a Clear Conscience</h2>
            <p className="text-earth/70">
              We've developed a proprietary "Sustainability Score" to help you choose accommodations that align with your values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LodgeCard 
              image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
              name="Bisate Lodge"
              location="Volcanoes Nat. Park"
              price="$1,200"
              ecoScore={9.8}
              tags={['Reforestation', 'Solar Power', 'Luxury']}
            />
            <LodgeCard 
              image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
              name="Kivu Marina Bay"
              location="Karongi, Lake Kivu"
              price="$250"
              ecoScore={9.2}
              tags={['Water Conservation', 'Local Staff', 'Lake View']}
            />
            <LodgeCard 
              image="https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2070&auto=format&fit=crop"
              name="Akagera Rhino Camp"
              location="Akagera Nat. Park"
              price="$450"
              ecoScore={9.5}
              tags={['Anti-Poaching Fund', 'Tent Camp', 'Wildlife']}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/destinations" className="inline-flex items-center gap-2 border-b-2 border-forest pb-1 text-forest font-bold hover:text-earth hover:border-earth transition-colors">
              View All Accommodations <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-forest relative overflow-hidden">
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to Go Beyond?</h2>
          <p className="text-sandstone/80 text-xl mb-10 max-w-2xl mx-auto">
            Our travel designers are ready to curate a bespoke itinerary that balances luxury with responsibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-sandstone text-forest font-bold rounded-sm hover:bg-white transition-colors">
              Plan My Trip
            </button>
            <button className="px-10 py-4 border border-sandstone text-sandstone font-bold rounded-sm hover:bg-sandstone/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import LodgeCard from '../../components/LodgeCard';
import HeroSlider from '../../components/HeroSlider';
import ImageWithFallback from '../../components/ImageWithFallback';

const heroSlides = [
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Rwanda_Tea_Plantations.jpg", alt: "Rwanda tea plantation terraces" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Mountain_gorilla_%28Gorilla_beringei_beringei%29_female_with_baby.jpg/1920px-Mountain_gorilla_%28Gorilla_beringei_beringei%29_female_with_baby.jpg", alt: "Mountain gorilla in Volcanoes National Park" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Lake_Kivu_at_dawn.jpg/1920px-Lake_Kivu_at_dawn.jpg", alt: "Lake Kivu shoreline" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Kigali2018Cropped.jpg/1920px-Kigali2018Cropped.jpg", alt: "Kigali city from the hills" },
  { image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Drummer_at_Tour_DU_rwanda_2024.jpg/1280px-Drummer_at_Tour_DU_rwanda_2024.jpg", alt: "Celebration and events in Rwanda" },
];

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Sliding Background Images */}
        <HeroSlider slides={heroSlides} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>

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
            <Link to="/events" className="min-w-[180px] px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-sm font-medium transition-all duration-300">
              Plan an Event
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
                <ImageWithFallback src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Rwandan_basket_weaving.jpg/3840px-Rwandan_basket_weaving.jpg" alt="Rwandan woman weaving" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
              image="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Volcanoes_National_Park_%2844500559730%29.jpg/1920px-Volcanoes_National_Park_%2844500559730%29.jpg"
              name="Bisate Lodge"
              location="Volcanoes Nat. Park"
              ecoScore={9.8}
              tags={['Reforestation', 'Solar Power', 'Luxury']}
            />
            <LodgeCard 
              image="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Beach_in_Gisenyi_%28Rwanda%29.JPG/1920px-Beach_in_Gisenyi_%28Rwanda%29.JPG"
              name="Kivu Marina Bay"
              location="Karongi, Lake Kivu"
              ecoScore={9.2}
              tags={['Water Conservation', 'Local Staff', 'Lake View']}
            />
            <LodgeCard 
              image="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/A_lion_and_a_lioness_in_Akagera_National_Park.jpg/3840px-A_lion_and_a_lioness_in_Akagera_National_Park.jpg"
              name="Akagera Rhino Camp"
              location="Akagera Nat. Park"
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

      {/* Events Section */}
      <section className="py-24 px-6 bg-sandstone">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-forest font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Plan, Host, Celebrate</span>
            <h2 className="text-4xl md:text-5xl font-serif text-earth mb-6">An Occasion for Every Hill</h2>
            <p className="text-earth/70">
              Weddings, graduations, corporate retreats, cultural festivals, and more — we design events around Rwanda's destinations, services, and experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { slug: "wedding", name: "Weddings", desc: "Lakeside vows, traditional Intore ceremonies, and unforgettable receptions.", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Rwanda_tradional_dance_in_wedding.jpg/3840px-Rwanda_tradional_dance_in_wedding.jpg" },
              { slug: "corporate", name: "Corporate Events", desc: "Retreats, conferences, and team-building in Rwanda's premium venues.", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/An_aerial_of_Kigali_Convention_Center_on_June_19%2C_2019._Photo_by_Emmanuel_Kwizera.jpg/3840px-An_aerial_of_Kigali_Convention_Center_on_June_19%2C_2019._Photo_by_Emmanuel_Kwizera.jpg" },
              { slug: "cultural", name: "Cultural Celebrations", desc: "Festivals, art, dance, and craft markets that honour Rwandan heritage.", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Intore_mu_Rwanda.jpg/1920px-Intore_mu_Rwanda.jpg" }
            ].map((item) => (
              <Link key={item.slug} to={`/events/${item.slug}`} className="group relative h-96 overflow-hidden rounded-sm shadow-lg">
                <ImageWithFallback src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="text-2xl font-serif text-white mb-2">{item.name}</h3>
                  <p className="text-sandstone/80 text-sm mb-4 leading-relaxed">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sage">
                    Plan this event <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/events" className="inline-flex items-center gap-2 border-b-2 border-forest pb-1 text-forest font-bold hover:text-earth hover:border-earth transition-colors">
              Explore All 15 Event Types <span className="material-symbols-outlined">arrow_forward</span>
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
            <Link to="/booking" className="px-10 py-4 bg-sandstone text-forest font-bold rounded-sm hover:bg-white transition-colors">
              Plan My Trip
            </Link>
            <Link to="/contact" className="px-10 py-4 border border-sandstone text-sandstone font-bold rounded-sm hover:bg-sandstone/10 transition-colors">
              Download Brochure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
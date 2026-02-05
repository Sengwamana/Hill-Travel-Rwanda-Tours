import React from 'react';
import { Link } from 'react-router-dom';
import LodgeCard from '../../components/LodgeCard';
import ImageWithFallback from '../../components/ImageWithFallback';

const Destinations: React.FC = () => {
    // ... (rest of the file remains, I will target specific lines for replacement)

  const regions = [
    {
      id: "musanze",
      name: "Musanze & Volcanoes",
      tag: "The North",
      description: "Home to the endangered mountain gorillas, but also a hub for caving, canoeing, and cultural village tours. We focus on lodges that directly employ former poachers as conservationists.",
      image: "https://images.unsplash.com/photo-1534008779836-39df8546b404?q=80&w=1932&auto=format&fit=crop",
      highlights: [
        { icon: "landscape", text: "5 Volcanoes" },
        { icon: "pets", text: "Gorilla Trekking" },
        { icon: "cabin", text: "Cultural Village" }
      ]
    },
    {
      id: "lake-kivu",
      name: "Lake Kivu Belt",
      tag: "The West",
      description: "Rwanda's Riviera. A place to unwind after trekking. Explore the Napoleon Islands, kayak with local fishermen singing traditional songs, and cycle the Congo Nile Trail.",
      image: "https://images.unsplash.com/photo-1544253325-17a41922c2a2?q=80&w=2028&auto=format&fit=crop",
      highlights: [
        { icon: "kayaking", text: "Night Fishing" },
        { icon: "directions_bike", text: "Congo Nile Trail" },
        { icon: "coffee", text: "Coffee Tours" }
      ]
    },
    {
      id: "nyungwe",
      name: "Nyungwe National Park",
      tag: "The South-West",
      description: "One of Africa's oldest rainforests. A biodiversity hotspot teaming with 13 primate species including chimpanzees and colobus monkeys. Walk above the trees on the famous Canopy Walkway.",
      image: "https://images.unsplash.com/photo-1544634076-a901606f414e?q=80&w=1974&auto=format&fit=crop",
      highlights: [
        { icon: "forest", text: "Canopy Walk" },
        { icon: "pest_control", text: "Chimpanzees" },
        { icon: "water_drop", text: "Waterfalls" }
      ]
    },
    {
      id: "gishwati-mukura",
      name: "Gishwati-Mukura N.P.",
      tag: "The North-West",
      description: "Rwanda's newest national park and a UNESCO Biosphere Reserve. A touching story of regeneration, this forest is now recovering and offers exclusive chimpanzee and golden monkey tracking away from crowds.",
      image: "https://images.unsplash.com/photo-1440557653082-e8e186733eeb?q=80&w=2574&auto=format&fit=crop",
      highlights: [
        { icon: "recycling", text: "Regeneration" },
        { icon: "visibility", text: "Private Trekking" },
        { icon: "flutter", text: "Birding" }
      ]
    },
    {
      id: "kigali",
      name: "Kigali City Tour",
      tag: "The Capital",
      description: "The heartbeat of the country. Clean, safe, and innovative. Visit the Genocide Memorial for history, Nyamirambo for culture, and art centers for the future of Rwandan creativity.",
      image: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=2000&auto=format&fit=crop",
      highlights: [
        { icon: "museum", text: "Genocide Memorial" },
        { icon: "palette", text: "Art Galleries" },
        { icon: "shopping_basket", text: "Local Markets" }
      ]
    }
  ];

  return (
    <div className="w-full bg-sandstone">
      {/* Destinations Header */}
      <div className="relative pt-32 pb-20 px-6 bg-earth text-sandstone">
        <div className="absolute inset-0 overflow-hidden">
           <ImageWithFallback src="https://images.unsplash.com/photo-1517016006573-2eefaa2f5b63?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Texture" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-sage font-bold text-xs uppercase tracking-[0.2em] mb-4 block animate-fade-in">Discover</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 animate-hero-title">Our Regions</h1>
          <p className="max-w-2xl text-lg text-sandstone/80 animate-hero-text">
            Rwanda is small but incredibly diverse. From the volcanic peaks of the north to the savannahs of the east, explore the ecosystems we protect.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 -mt-10 relative z-20">
        
        {regions.map((region, index) => (
          <div key={region.id} className="bg-white p-8 md:p-12 rounded-sm shadow-sm mb-12 flex flex-col md:flex-row gap-12 items-center">
            <div className={`md:w-1/2 space-y-6 ${index % 2 === 0 ? 'order-2 md:order-1' : ''}`}>
              <div className="flex items-center gap-2">
                <span className="w-12 h-1 bg-forest"></span>
                <span className="text-forest font-bold uppercase tracking-widest text-sm">{region.tag}</span>
              </div>
              <h2 className="text-4xl font-serif text-earth">{region.name}</h2>
              <p className="text-earth/70 leading-relaxed">
                {region.description}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {region.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sage">{item.icon}</span>
                    <span className="text-sm font-bold text-earth">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link to={`/destinations/${region.id}`} className="inline-block px-6 py-3 border border-forest text-forest font-bold uppercase text-xs tracking-widest hover:bg-forest hover:text-white transition-colors mt-4">
                Explore {region.name.split(' ')[0]}
              </Link>
            </div>
            <div className={`md:w-1/2 h-80 md:h-[500px] w-full rounded-2xl overflow-hidden relative group ${index % 2 === 0 ? 'order-1 md:order-2' : ''}`}>
               <ImageWithFallback src={region.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={region.name} />
            </div>
          </div>
        ))}

        {/* Suggested Stays Grid */}
        <div className="mt-24">
           <h3 className="text-3xl font-serif text-earth mb-8 text-center">Top Sustainable Stays</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LodgeCard 
              image="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop"
              name="Singita Kwitonda"
              location="Volcanoes"
              price="$1,500"
              ecoScore={9.9}
              tags={['Conservation', 'High-End', 'Wellness']}
            />
            <LodgeCard 
              image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
              name="Magashi Camp"
              location="Akagera"
              price="$600"
              ecoScore={9.4}
              tags={['Solar Powered', 'Zero Plastic', 'Safari']}
            />
            <LodgeCard 
              image="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop"
              name="Cormoran Lodge"
              location="Kibuye"
              price="$180"
              ecoScore={8.9}
              tags={['Local Wood', 'Community Staff', 'Lakeside']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
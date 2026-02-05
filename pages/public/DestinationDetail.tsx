import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LodgeCard from '../../components/LodgeCard';
import ImageWithFallback from '../../components/ImageWithFallback';

// Mock Data for Destinations
const destinationData: Record<string, any> = {
  'musanze': {
    title: "Musanze & Volcanoes",
    subtitle: "The Kingdom of Gorillas",
    heroImage: "https://images.unsplash.com/photo-1534008779836-39df8546b404?q=80&w=1932&auto=format&fit=crop",
    description: "Musanze is the tourism capital of Rwanda, guarding the majestic Virunga Massif. It is the gateway for gorilla trekking in Volcanoes National Park, but offers much more—from the hauntingly beautiful Musanze Caves to the vibrant local markets.",
    stats: [
      { label: "Altitude", value: "2,400m - 4,507m" },
      { label: "Best Time", value: "Jun-Sep, Dec-Feb" },
      { label: "Key Species", value: "Mountain Gorillas, Golden Monkeys" }
    ],
    highlights: [
      { title: "Gorilla Trekking", desc: "A life-changing encounter with habituated gorilla families." },
      { title: "Dian Fossey Hike", desc: "Trek to the grave of the legendary primatologist at Karisoke." },
      { title: "Musanze Caves", desc: "Explore 2km of volcanic underground tunnels rich in history." }
    ],
    lodges: [
      {
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop",
        name: "Singita Kwitonda",
        location: "Volcanoes N.P.",
        price: "$1,500",
        ecoScore: 9.9,
        tags: ['Conservation', 'Luxury', 'Wellness']
      },
      {
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        name: "Bisate Lodge",
        location: "Volcanoes N.P.",
        price: "$1,200",
        ecoScore: 9.8,
        tags: ['Reforestation', ' Iconic Design', 'Views']
      }
    ]
  },
  'lake-kivu': {
    title: "Lake Kivu Belt",
    subtitle: "Rwanda's Riviera",
    heroImage: "https://images.unsplash.com/photo-1544253325-17a41922c2a2?q=80&w=2028&auto=format&fit=crop",
    description: "A glistening emerald jewel, Lake Kivu is one of Africa's Great Lakes. The Kivu Belt road offers scenic drives, while towns like Karongi and Rubavu provide sandy beaches, water sports, and relaxation after the intensity of primate trekking.",
    stats: [
      { label: "Depth", value: "480m (Max)" },
      { label: "Activity", value: "Relaxation, Kayaking" },
      { label: "Key Experience", value: "Night Fishing, Coffee Tours" }
    ],
    highlights: [
      { title: "Napoleon Island", desc: "Hike to the summit for views and see the fruit bat colony." },
      { title: "Night Fishing", desc: "Join local fishermen on their trimarans singing traditional songs." },
      { title: "Congo Nile Trail", desc: "A world-class biking and hiking trail along the lake shores." }
    ],
    lodges: [
      {
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
        name: "Cormoran Lodge",
        location: "Kibuye",
        price: "$180",
        ecoScore: 8.9,
        tags: ['Local Wood', 'Lakeside', 'Cozy']
      },
      {
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
        name: "Kivu Marina Bay",
        location: "Kamembe",
        price: "$250",
        ecoScore: 9.2,
        tags: ['Modern', 'Views', 'Comfort']
      }
    ]
  },
  'nyungwe': {
    title: "Nyungwe National Park",
    subtitle: "The Ancient Rainforest",
    heroImage: "https://images.unsplash.com/photo-1544634076-a901606f414e?q=80&w=1974&auto=format&fit=crop",
    description: "One of the oldest rainforests in Africa, Nyungwe is rich in biodiversity and spectacularly beautiful. It feeds the Nile and protects over 1,000 plant species, 13 primate species, and 300 bird species.",
    stats: [
      { label: "Size", value: "1,019 km²" },
      { label: "Primates", value: "13 Species" },
      { label: "Highlight", value: "Canopy Walkway" }
    ],
    highlights: [
      { title: "Chimpanzee Trekking", desc: "Track our closest relatives in the dense Cyamudongo forest." },
      { title: "Canopy Walkway", desc: "A 160m long suspension bridge 70m above the forest floor." },
      { title: "Isumo Waterfall", desc: "A beautiful hike through tea fields and rainforest to the falls." }
    ],
    lodges: [
      {
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2574&auto=format&fit=crop",
        name: "One&Only Nyungwe House",
        location: "Gisakura",
        price: "$1,800",
        ecoScore: 9.7,
        tags: ['Ultra-Luxury', 'Tea Plantation', 'Spa']
      },
      {
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2670&auto=format&fit=crop",
        name: "Nyungwe Top View Hotel",
        location: "Nyungwe",
        price: "$220",
        ecoScore: 8.5,
        tags: ['Panoramic Views', 'Mid-Range', 'Local Food']
      }
    ]
  },
  'gishwati-mukura': {
    title: "Gishwati-Mukura N.P.",
    subtitle: "A Story of Regeneration",
    heroImage: "https://images.unsplash.com/photo-1440557653082-e8e186733eeb?q=80&w=2574&auto=format&fit=crop",
    description: "Rwanda's newest national park is a triumph of conservation. Once nearly depleted, the forests are regenerating, linking Gishwati and Mukura. It offers an intimate, off-the-beaten-path primate experience.",
    stats: [
      { label: "Established", value: "2015" },
      { label: "Experience", value: "Exclusive / Private" },
      { label: "Key Species", value: "Chimpanzees, Golden Monkeys" }
    ],
    highlights: [
      { title: "Primate Tracking", desc: "Track a small population of chimpanzees and golden monkeys." },
      { title: "Birding", desc: "Home to 232 bird species and spectacular Albertine Rift endemics." },
      { title: "Nature Trails", desc: "Guided walks learning about the reforestation efforts." }
    ],
    lodges: [
      {
        image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=2670&auto=format&fit=crop",
        name: "Forest of Hope Guest House",
        location: "Gishwati",
        price: "$150",
        ecoScore: 9.5,
        tags: ['Basic Comfort', 'Immersion', 'NGO Run']
      }
    ]
  },
  'kigali': {
    title: "Kigali City Tour",
    subtitle: "The Heartbeat of Rwanda",
    heroImage: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=2000&auto=format&fit=crop",
    description: "Safe, clean, and vibrant, Kigali is one of Africa's most fascinating cities. From the moving Genocide Memorial to the bustling Kimironko Market and the colorful car-free zones, it represents Rwanda's resilience and future.",
    stats: [
      { label: "Founded", value: "1907" },
      { label: "Vibe", value: "Clean, Safe, Creative" },
      { label: "Must Do", value: "Genocide Memorial" }
    ],
    highlights: [
      { title: "Kigali Genocide Memorial", desc: "A necessary and moving tribute to the victims of 1994." },
      { title: "Nyamirambo Walking Tour", desc: "Experience the multicultural Muslim quarter and its vibrant street life." },
      { title: "Inema Arts Center", desc: "Discover contemporary Rwandan art and dance performances." }
    ],
    lodges: [
      {
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2574&auto=format&fit=crop",
        name: "The Retreat",
        location: "Kiyovu",
        price: "$600",
        ecoScore: 9.3,
        tags: ['Urban Oasis', 'Solar', 'Farm-to-Table']
      },
      {
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2670&auto=format&fit=crop",
        name: "Hotel des Mille Collines",
        location: "City Center",
        price: "$200",
        ecoScore: 8.0,
        tags: ['Historic', 'Pool', 'City Views']
      }
    ]
  }
};

const DestinationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? destinationData[slug] : null;

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
                {data.highlights.map((item: any, idx: number) => (
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
                 {data.lodges.map((lodge: any, idx: number) => (
                   <LodgeCard key={idx} {...lodge} />
                 ))}
               </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Stats */}
            <div className="bg-forest text-white p-8 rounded-sm shadow-xl">
               <h3 className="font-serif text-2xl mb-6 border-b border-white/20 pb-4">At a Glance</h3>
               <div className="space-y-6">
                 {data.stats.map((stat: any, idx: number) => (
                   <div key={idx}>
                     <span className="block text-xs uppercase tracking-widest text-sage mb-1">{stat.label}</span>
                     <span className="block text-xl font-bold">{stat.value}</span>
                   </div>
                 ))}
               </div>
               <div className="mt-8 pt-6 border-t border-white/20">
                 <Link to="/booking" className="block w-full text-center py-3 bg-white text-forest font-bold uppercase tracking-widest text-sm hover:bg-sage hover:text-white transition-colors">
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
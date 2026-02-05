import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';

const experienceData: Record<string, any> = {
  'crop-to-cup': {
    title: "Crop to Cup Tea Tour",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1605218458376-ee3238eb5839?q=80&w=1972&auto=format&fit=crop",
    duration: "4 Hours",
    groupSize: "Small Group (Max 8)",
    location: "Pfunda Tea Estate",
    price: "$45",
    description: "Immerse yourself in the emerald green hills of Pfunda. This interactive tour takes you through the entire tea production process. You'll don the traditional basket and join the pickers in the field, learning the art of selecting the perfect two leaves and a bud. Afterward, visit the factory to see the drying and processing, ending with a professional tasting session of Rwanda's finest export.",
    highlights: [
      "Harvest tea with local farmers",
      "Factory production tour",
      "Professional tea tasting session",
      "Scenic views of the Virunga mountains"
    ],
    itinerary: [
      { time: "08:00 AM", activity: "Arrival & Welcome Coffee" },
      { time: "08:30 AM", activity: "Tea Picking in the Fields" },
      { time: "10:00 AM", activity: "Factory Tour & Processing" },
      { time: "11:30 AM", activity: "Tasting & Q&A" }
    ]
  },
  'agaseke-weaving': {
    title: "Agaseke Weaving Workshop",
    category: "Artisan",
    image: "https://images.unsplash.com/photo-1489712310660-6b6dd7418705?q=80&w=2072&auto=format&fit=crop",
    duration: "3 Hours",
    groupSize: "1 - 10 Guests",
    location: "Nyamirambo, Kigali",
    price: "$30",
    description: "The Agaseke basket is a symbol of peace and unity in Rwanda. In this intimate workshop, you will sit with the women of the Nyamirambo Women's Center. They will teach you the intricate sisal weaving techniques passed down through generations. It's more than a lesson; it's a chance to share stories, laugh, and connect with the resilient women shaping modern Rwanda.",
    highlights: [
      "Learn traditional sisal weaving",
      "Take home your own creation",
      "Support female entrepreneurship",
      "Traditional lunch included"
    ],
    itinerary: [
      { time: "09:00 AM", activity: "Introduction to NWC" },
      { time: "09:30 AM", activity: "Weaving Lesson Begins" },
      { time: "11:30 AM", activity: "Community Lunch" }
    ]
  },
  'canopy-walk': {
    title: "Canopy Walk & Primate Trek",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1544634076-a901606f414e?q=80&w=1974&auto=format&fit=crop",
    duration: "6 Hours",
    groupSize: "Private or Group",
    location: "Nyungwe National Park",
    price: "$90",
    description: "Experience the rainforest from a bird's eye view. Suspended 60 meters above the forest floor, the canopy walkway offers a unique perspective of the ancient canopy. Combined with a hike to spot Colobus monkeys or Chimpanzees, this is a full immersion into one of Africa's oldest biospheres.",
    highlights: [
      "160m suspension bridge walk",
      "Spotting L'Hoest's monkeys",
      "Birdwatching (Great Blue Turaco)",
      "Hiking through ancient mahogany trees"
    ],
    itinerary: [
      { time: "07:00 AM", activity: "Briefing at Uwinka Center" },
      { time: "08:00 AM", activity: "Igishigishigi Trail Hike" },
      { time: "09:30 AM", activity: "Canopy Walk Crossing" },
      { time: "11:00 AM", activity: "Return Hike" }
    ]
  }
};

const ExperienceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? experienceData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sandstone">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-earth mb-4">Experience Not Found</h2>
          <Link to="/experiences" className="text-forest hover:underline font-bold">Return to Experiences</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-sandstone">
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <ImageWithFallback src={data.image} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
          <div className="max-w-7xl mx-auto">
             <span className="bg-forest px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">{data.category}</span>
             <h1 className="text-4xl md:text-6xl font-serif mb-4">{data.title}</h1>
             <div className="flex flex-wrap gap-6 text-sm font-medium opacity-90">
               <span className="flex items-center gap-2"><span className="material-symbols-outlined">schedule</span> {data.duration}</span>
               <span className="flex items-center gap-2"><span className="material-symbols-outlined">group</span> {data.groupSize}</span>
               <span className="flex items-center gap-2"><span className="material-symbols-outlined">pin_drop</span> {data.location}</span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-earth mb-6">Experience Overview</h2>
              <p className="text-lg text-earth/80 leading-relaxed">{data.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-earth mb-6">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.highlights.map((h: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-forest mt-0.5">check_circle</span>
                    <span className="text-earth/80">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
               <h3 className="text-2xl font-serif text-earth mb-6">Typical Itinerary</h3>
               <div className="border-l-2 border-forest/20 ml-3 space-y-8">
                 {data.itinerary.map((item: any, i: number) => (
                   <div key={i} className="relative pl-8">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-forest"></div>
                     <span className="block text-xs font-bold text-forest uppercase tracking-wider mb-1">{item.time}</span>
                     <span className="text-earth font-medium">{item.activity}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-sm shadow-lg sticky top-24 border-t-4 border-forest">
               <div className="flex justify-between items-end mb-6">
                 <div>
                   <span className="block text-sm text-earth/60">Starting from</span>
                   <span className="text-3xl font-serif text-forest font-bold">{data.price}</span>
                 </div>
                 <span className="text-xs font-bold text-earth/40 uppercase">Per Person</span>
               </div>
               
               <Link to="/booking" className="block w-full py-4 bg-forest text-white text-center font-bold uppercase tracking-widest hover:bg-forest-light transition-colors mb-4">
                 Book Now
               </Link>
               <Link to="/contact" className="block w-full py-4 border border-sandstone text-earth text-center font-bold uppercase tracking-widest hover:bg-sandstone transition-colors">
                 Ask a Question
               </Link>
               
               <p className="text-xs text-center text-earth/50 mt-4">
                 *Prices may vary based on group size and season.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
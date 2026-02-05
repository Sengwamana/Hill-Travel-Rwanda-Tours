import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';

const Experiences: React.FC = () => {
  const items = [
    {
      slug: "crop-to-cup",
      title: "Crop to Cup Tea Tour",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1605218458376-ee3238eb5839?q=80&w=1972&auto=format&fit=crop",
      duration: "4 Hours",
      group: "Small Group",
      location: "Pfunda Tea Estate",
      desc: "Walk through the emerald hills of Pfunda. Join the pickers in the field, learn the art of selecting the perfect leaves, and witness the processing factory. End with a tasting session of Rwanda's finest export.",
      price: "$45"
    },
    {
      slug: "agaseke-weaving",
      title: "Agaseke Weaving Workshop",
      category: "Artisan",
      image: "https://images.unsplash.com/photo-1489712310660-6b6dd7418705?q=80&w=2072&auto=format&fit=crop",
      duration: "3 Hours",
      group: "Women's Co-op",
      location: "Nyamirambo",
      desc: "Sit with the women of the Nyamirambo Women's Center. Learn the historic significance of the Agaseke basket (peace basket) and try your hand at the intricate weaving patterns that symbolize unity.",
      price: "$30"
    },
    {
      slug: "canopy-walk",
      title: "Canopy Walk & Primate Trek",
      category: "Adventure",
      image: "https://images.unsplash.com/photo-1544634076-a901606f414e?q=80&w=1974&auto=format&fit=crop",
      duration: "6 Hours",
      group: "Small Group",
      location: "Nyungwe Forest",
      desc: "Suspended 60 meters above the forest floor, walk the famous canopy bridge. Spot Colobus monkeys and diverse bird species in one of Africa's oldest rainforests.",
      price: "$90"
    }
  ];

  return (
    <div className="w-full bg-sandstone">
       {/* Hero */}
       <div className="h-[60vh] relative flex items-center justify-center">
         <ImageWithFallback src="https://images.unsplash.com/photo-1528271537-87b5a4548d47?q=80&w=2072&auto=format&fit=crop" alt="Coffee sorting" className="absolute inset-0 w-full h-full object-cover" />
         <div className="absolute inset-0 bg-earth/40"></div>
         <div className="relative z-10 text-center text-white px-6">
           <h1 className="text-5xl md:text-7xl font-serif mb-4 animate-hero-title">Authentic Encounters</h1>
           <p className="text-xl max-w-2xl mx-auto font-light animate-hero-text">Go beyond the vehicle. Walk, weave, cook, and connect with the heart of Rwanda.</p>
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 py-24">
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {items.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <Link to={`/experiences/${item.slug}`}>
                  <div className="overflow-hidden rounded-sm mb-6 aspect-video relative">
                    <ImageWithFallback src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest">{item.category}</div>
                  </div>
                  <h3 className="text-3xl font-serif text-earth mb-2 group-hover:text-forest transition-colors">{item.title}</h3>
                </Link>
                <div className="flex items-center gap-4 text-sm text-earth/60 mb-4">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">schedule</span> {item.duration}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">group</span> {item.group}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">location_on</span> {item.location}</span>
                </div>
                <p className="text-earth/80 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between border-t border-earth/10 pt-4">
                   <span className="font-bold text-xl text-forest">{item.price} <span className="text-xs font-normal text-earth/60">/ person</span></span>
                   <Link to={`/experiences/${item.slug}`} className="text-sm font-bold uppercase tracking-widest text-earth hover:text-forest transition-colors">
                     View Details
                   </Link>
                </div>
              </div>
            ))}

            {/* General CTA Block */}
            <div className="bg-forest text-sandstone p-10 flex flex-col justify-center rounded-sm">
               <span className="material-symbols-outlined text-6xl mb-6">handshake</span>
               <h3 className="text-3xl font-serif mb-4">Design Your Own Impact</h3>
               <p className="mb-8 opacity-90 leading-relaxed">
                 Want to visit a specific conservation project or donate supplies to a rural school? Our concierge team can arrange meaningful visits that respect local dignity and needs.
               </p>
               <Link to="/contact" className="bg-sandstone text-forest px-8 py-3 font-bold uppercase tracking-widest w-fit hover:bg-white transition-colors">
                 Contact Concierge
               </Link>
            </div>

         </div>
       </div>
    </div>
  );
};

export default Experiences;
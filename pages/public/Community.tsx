import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';

const Community: React.FC = () => {
  return (
    <div className="w-full bg-sandstone">
      {/* Hero */}
      <div className="h-[60vh] relative flex items-center justify-center">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1579685366885-e1e550c609d9?q=80&w=2070&auto=format&fit=crop" 
          alt="Community Weaving" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth/80 to-earth/40"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-hero-title">Tourism for Good</h1>
          <p className="text-xl font-light leading-relaxed animate-hero-text">
            We believe travel is an exchange, not a transaction. Meet the hands that weave the baskets, the farmers who grow the coffee, and the guardians of the forest.
          </p>
        </div>
      </div>

      {/* Impact Stats */}
      <section className="py-20 px-6 bg-forest text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-6">
            <span className="material-symbols-outlined text-6xl mb-4 text-sage opacity-80">diversity_3</span>
            <h3 className="text-5xl font-serif font-bold mb-2">450+</h3>
            <p className="uppercase tracking-widest text-sm text-sandstone/80">Families Supported</p>
          </div>
          <div className="p-6 border-y md:border-y-0 md:border-x border-white/10">
            <span className="material-symbols-outlined text-6xl mb-4 text-sage opacity-80">forest</span>
            <h3 className="text-5xl font-serif font-bold mb-2">12k</h3>
            <p className="uppercase tracking-widest text-sm text-sandstone/80">Trees Planted in 2023</p>
          </div>
          <div className="p-6">
            <span className="material-symbols-outlined text-6xl mb-4 text-sage opacity-80">school</span>
            <h3 className="text-5xl font-serif font-bold mb-2">85%</h3>
            <p className="uppercase tracking-widest text-sm text-sandstone/80">Revenue to Locals</p>
          </div>
        </div>
      </section>

      {/* The Story of Umuganda */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-6">
             <span className="text-forest font-bold text-xs uppercase tracking-[0.2em]">Our Philosophy</span>
             <h2 className="text-4xl md:text-5xl font-serif text-earth">Umuganda: Coming Together</h2>
             <p className="text-earth/80 text-lg leading-relaxed">
               On the last Saturday of every month, Rwanda comes to a standstill for "Umuganda" — nationwide community work. From cleaning streets to building schools, neighbors help neighbors.
             </p>
             <p className="text-earth/80 leading-relaxed">
               Hill Travel invites guests to participate in this powerful tradition. It’s an unscripted, authentic way to connect with the Rwandan spirit of resilience and unity.
             </p>
             <div className="pt-4">
                <Link to="/contact" className="text-forest font-bold border-b-2 border-forest pb-1 hover:text-earth hover:border-earth transition-colors">
                  Inquire About Joining Umuganda
                </Link>
             </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="aspect-square bg-sage/20 rounded-full absolute -top-10 -right-10 w-full h-full -z-10"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1543859239-01e9124237f0?q=80&w=2070&auto=format&fit=crop" 
                alt="Community Gathering" 
                className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
              />
          </div>
        </div>
      </section>

      {/* Partner Spotlight */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-earth mb-12 text-center">Our Community Partners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                slug: "nyamirambo-womens-center",
                title: "Nyamirambo Women's Center",
                desc: "A Rwandan NGO founded by 18 women living in Nyamirambo, Kigali. They provide education and vocational training to disadvantaged women.",
                img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"
              },
              {
                slug: "red-rocks-initiative",
                title: "Red Rocks Initiative",
                desc: "Integrating tourism and conservation around the Volcanoes National Park through art, music, and sustainable agriculture.",
                img: "https://images.unsplash.com/photo-1551049688-299f18df0498?q=80&w=1974&auto=format&fit=crop"
              },
              {
                slug: "akagera-guides",
                title: "Akagera Community Freelance Guides",
                desc: "We exclusively hire freelance guides from the communities bordering Akagera, ensuring wildlife protection translates to local income.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
              }
            ].map((partner, i) => (
              <div key={i} className="group cursor-pointer">
                <Link to={`/community/${partner.slug}`}>
                  <div className="overflow-hidden rounded-sm mb-6 aspect-[3/2]">
                    <ImageWithFallback src={partner.img} alt={partner.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="text-2xl font-serif text-earth mb-3 group-hover:text-forest transition-colors">{partner.title}</h3>
                </Link>
                <p className="text-earth/70 leading-relaxed text-sm mb-4">{partner.desc}</p>
                <Link to={`/community/${partner.slug}`} className="text-xs font-bold uppercase tracking-widest text-forest hover:underline">
                  Read Partner Story
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-earth text-sandstone text-center">
        <div className="max-w-3xl mx-auto">
           <span className="material-symbols-outlined text-6xl mb-6 text-sage">volunteer_activism</span>
           <h2 className="text-4xl font-serif mb-6">Leave More Than Footprints</h2>
           <p className="text-lg opacity-80 mb-10">
             Every trip booked contributes 5% directly to our Community Development Fund. 
             Want to do more? We can facilitate direct donations of school supplies or medical equipment.
           </p>
           <Link to="/contact" className="inline-block px-10 py-4 bg-sage text-earth font-bold rounded-sm hover:bg-white transition-colors">
             Plan a Philanthropic Trip
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Community;
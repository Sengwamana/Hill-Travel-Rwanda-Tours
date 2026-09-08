import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';

const Portfolio: React.FC = () => {
  const projects = [
    {
      slug: "akagera-lions",
      title: "Akagera Lion Reintroduction",
      client: "Conservation / African Parks",
      description: "Facilitating the complex logistics for the historic return of lions to Akagera National Park, restoring the savannah's ecological balance after two decades.",
      tags: ["Wildlife", "Logistics", "Restoration"],
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/A_lion_and_a_lioness_in_Akagera_National_Park.jpg/3840px-A_lion_and_a_lioness_in_Akagera_National_Park.jpg"
    },
    {
      slug: "kivu-coffee",
      title: "The Kivu Coffee Circuit",
      client: "Economic Dev / Local Co-ops",
      description: "Developing a sustainable tourism route connecting 15 washing stations, providing direct market access and increasing farmer income by 40%.",
      tags: ["Agriculture", "Community", "Economic Growth"],
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/MarabaHoldingTanks.jpg/1920px-MarabaHoldingTanks.jpg"
    },
    {
      slug: "gorilla-vet",
      title: "Mountain Gorilla Vet Project",
      client: "Education / Gorilla Doctors",
      description: "Coordinating immersive educational expeditions for international veterinary students to support ongoing primate health monitoring in the Virungas.",
      tags: ["Education", "Medical", "Primates"],
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Mountain_gorilla_%28Gorilla_beringei_beringei%29_female_with_baby.jpg/1920px-Mountain_gorilla_%28Gorilla_beringei_beringei%29_female_with_baby.jpg"
    },
    {
      slug: "nyamirambo-solar",
      title: "Nyamirambo Solar Initiative",
      client: "Infrastructure / Women's Center",
      description: "A community-led project to install solar panels for 50 households, funded entirely by our sustainable tourism revenue sharing model.",
      tags: ["Sustainability", "Energy", "Urban"],
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Sunset_views_from_Nyamirambo.jpg/3840px-Sunset_views_from_Nyamirambo.jpg"
    },
    {
      slug: "kivu-wedding",
      title: "A Lake Kivu Wedding",
      client: "Events / 240 Guests",
      description: "A full lakeside wedding weekend at Karongi — ceremony styling, gourmet catering, Intore performance, and guest transport across the belt. Planned end-to-end in six weeks.",
      tags: ["Wedding", "Catering", "Venue"],
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Rwanda_tradional_dance_in_wedding.jpg/3840px-Rwanda_tradional_dance_in_wedding.jpg"
    },
    {
      slug: "charity-gala",
      title: "Kigali Charity Gala",
      client: "Fundraising / Grassroots NGOs",
      description: "An annual gala raising funds for rural education. We produced the stage, hosted the auction, and sourced every waiter, chef, and decor item locally — doubling year-on-year donations.",
      tags: ["Fundraising", "Production", "Awards"],
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Rwandan_wedding_stage.jpg/1920px-Rwandan_wedding_stage.jpg"
    },
    {
      slug: "corporate-summit",
      title: "East Africa Corporate Summit",
      client: "Corporate / 350 Delegates",
      description: "A three-day leadership summit combining conference production in Kigali with a team-building expedition in Musanze. 350 delegates, 22 nationalities, zero transport delays.",
      tags: ["Corporate", "MICE", "Team Building"],
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Launch_of_the_Environment_Week_2017-_Umuganda_at_Nyandungu_Wetland_-_34961808125.jpg/3840px-Launch_of_the_Environment_Week_2017-_Umuganda_at_Nyandungu_Wetland_-_34961808125.jpg"
    }
  ];

  return (
    <div className="w-full bg-sandstone">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 bg-earth text-sandstone">
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute inset-0 bg-black/40 z-10"></div>
           <ImageWithFallback src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Rwanda_Landscape_Image.jpg/3840px-Rwanda_Landscape_Image.jpg" className="w-full h-full object-cover opacity-30 grayscale" alt="Project Planning" />
        </div>
        <div className="max-w-7xl mx-auto relative z-20 text-center">
          <span className="text-sage font-bold text-xs uppercase tracking-[0.2em] mb-4 block animate-fade-in">Our Work</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 animate-hero-title">Impact Portfolio</h1>
          <p className="max-w-2xl mx-auto text-lg text-sandstone/90 font-light leading-relaxed animate-hero-text">
            Beyond booking trips, we design conservation strategies, community programs, and landmark events. Explore our case studies.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group relative h-[500px] overflow-hidden rounded-sm shadow-lg cursor-pointer bg-earth">
              {/* Background Image */}
              <ImageWithFallback 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
              
              {/* Content Container */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* Tags */}
                <div className="mb-4 transform translate-y-0 transition-transform duration-500 delay-75">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="inline-block px-3 py-1 mb-2 mr-2 text-[10px] font-bold uppercase tracking-widest bg-forest/90 text-white backdrop-blur-md rounded-sm shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Client */}
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">{project.title}</h3>
                <p className="text-sage font-bold text-xs uppercase tracking-widest mb-6">{project.client}</p>
                
                {/* Expandable Description & CTA */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="text-sandstone/80 leading-relaxed mb-8 text-sm md:text-base border-l-2 border-sage pl-4">
                      {project.description}
                    </p>
                    <Link to={`/portfolio/${project.slug}`} className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-earth transition-all rounded-sm">
                      View Case Study <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-sandstone text-center border-t border-earth/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif text-earth mb-6">Have a Project in Mind?</h2>
          <p className="text-earth/70 mb-8 leading-relaxed">
            We consult for NGOs, government bodies, and private investors looking to develop sustainable tourism infrastructure in East Africa.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-earth text-white font-bold rounded-sm hover:bg-forest transition-colors uppercase tracking-widest text-sm shadow-xl">
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
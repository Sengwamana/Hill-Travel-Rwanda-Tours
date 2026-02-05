import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';

const portfolioData: Record<string, any> = {
  'akagera-lions': {
    title: "Akagera Lion Reintroduction",
    client: "Conservation / African Parks",
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=2586&auto=format&fit=crop",
    challenge: "Following the civil war in the 1990s, the lion population in Akagera National Park was wiped out. This created an ecological imbalance, allowing herbivore populations to overgraze and altering the savannah landscape.",
    solution: "We worked alongside African Parks to facilitate the logistics for the translocation of 7 lions from South Africa in 2015. This involved complex transport logistics, veterinary monitoring, and community education programs to ensure the safety of both the animals and neighboring villages.",
    result: "The lion population has successfully established itself and grown to over 50 individuals. The return of the apex predator has restored the ecological balance of the park, boosting tourism revenue which directly funds the park's management and community engagement.",
    tags: ["Wildlife", "Logistics", "Restoration"]
  },
  'kivu-coffee': {
    title: "The Kivu Coffee Circuit",
    client: "Economic Dev / Local Co-ops",
    image: "https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?q=80&w=2574&auto=format&fit=crop",
    challenge: "Coffee farmers in the Kivu belt produced high-quality beans but lacked direct access to the tourism market. Tourists passed through the region without engaging with the agricultural heritage or contributing to the farmers' income.",
    solution: "We designed a sustainable tourism route connecting 15 washing stations. We trained farmers in hospitality, created standardized tour protocols, and marketed the 'Crop to Cup' experience to international operators.",
    result: "The circuit now attracts thousands of visitors annually. Participating farmers have seen a 40% increase in income through tourism fees and direct coffee sales to visitors. The project has raised the profile of Rwandan specialty coffee globally.",
    tags: ["Agriculture", "Community", "Economic Growth"]
  },
  'gorilla-vet': {
    title: "Mountain Gorilla Vet Project",
    client: "Education / Gorilla Doctors",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2670&auto=format&fit=crop",
    challenge: "Mountain Gorillas are highly susceptible to human diseases. Ensuring their health requires constant monitoring and veterinary intervention, which is costly and requires specialized knowledge.",
    solution: "We partnered with the Gorilla Doctors to coordinate immersive educational expeditions. We handle the logistics for international veterinary teams and students to visit the field, learn from local vets, and contribute funding/supplies.",
    result: "These expeditions provide crucial funding and equipment for the Gorilla Doctors. The exchange of knowledge strengthens global veterinary practices, and the presence of these teams provides additional monitoring capacity for the endangered gorilla families.",
    tags: ["Education", "Medical", "Primates"]
  },
  'nyamirambo-solar': {
    title: "Nyamirambo Solar Initiative",
    client: "Infrastructure / Women's Center",
    image: "https://images.unsplash.com/photo-1548611716-3dbfabfa5524?q=80&w=2550&auto=format&fit=crop",
    challenge: "Many households in the Nyamirambo sector faced unreliable electricity access, hindering education for children studying at night and limiting economic productivity for women working from home.",
    solution: "Utilizing a portion of our tourism revenue, we launched a community-led project to install solar home systems. We worked with the Nyamirambo Women's Center to identify the 50 most vulnerable households.",
    result: "50 households now have reliable, clean energy. Children can study after sunset, and women can power sewing machines and charge phones, increasing their economic independence. The project serves as a model for tourism-funded infrastructure.",
    tags: ["Sustainability", "Energy", "Urban"]
  }
};

const PortfolioDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? portfolioData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sandstone">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-earth mb-4">Project Not Found</h2>
          <Link to="/portfolio" className="text-forest hover:underline font-bold">Return to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-sandstone">
      <div className="relative h-[60vh] w-full bg-earth">
         <ImageWithFallback src={data.image} alt={data.title} className="w-full h-full object-cover opacity-80" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
           <div className="max-w-7xl mx-auto">
             <div className="flex flex-wrap gap-2 mb-4">
                {data.tags.map((tag: string, i: number) => (
                  <span key={i} className="bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-widest">{tag}</span>
                ))}
             </div>
             <h1 className="text-4xl md:text-6xl font-serif mb-2">{data.title}</h1>
             <p className="text-sage font-bold uppercase tracking-widest">{data.client}</p>
           </div>
         </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
         <div className="space-y-16">
           <div className="relative pl-8 border-l-4 border-earth/20">
             <h2 className="text-2xl font-serif text-earth mb-4">The Challenge</h2>
             <p className="text-lg text-earth/80 leading-relaxed">{data.challenge}</p>
           </div>
           
           <div className="relative pl-8 border-l-4 border-forest">
             <h2 className="text-2xl font-serif text-earth mb-4">Our Solution</h2>
             <p className="text-lg text-earth/80 leading-relaxed">{data.solution}</p>
           </div>

           <div className="relative pl-8 border-l-4 border-sage">
             <h2 className="text-2xl font-serif text-earth mb-4">The Impact</h2>
             <p className="text-lg text-earth/80 leading-relaxed">{data.result}</p>
           </div>
         </div>

         <div className="mt-20 pt-10 border-t border-earth/10 text-center">
            <h3 className="text-xl font-serif text-earth mb-6">Interested in collaborating on a similar project?</h3>
            <Link to="/contact" className="inline-block px-10 py-4 bg-earth text-white font-bold uppercase tracking-widest hover:bg-forest transition-colors shadow-lg">
              Contact Our Strategy Team
            </Link>
         </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
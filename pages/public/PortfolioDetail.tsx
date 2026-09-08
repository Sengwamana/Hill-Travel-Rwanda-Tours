import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';
import { eventsFor } from '../../utils/events';

interface PortfolioProject {
  title: string;
  client: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
}

const portfolioData: Record<string, PortfolioProject> = {
  'akagera-lions': {
    title: "Akagera Lion Reintroduction",
    client: "Conservation / African Parks",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/A_lion_and_a_lioness_in_Akagera_National_Park.jpg/3840px-A_lion_and_a_lioness_in_Akagera_National_Park.jpg",
    challenge: "Following the civil war in the 1990s, the lion population in Akagera National Park was wiped out. This created an ecological imbalance, allowing herbivore populations to overgraze and altering the savannah landscape.",
    solution: "We worked alongside African Parks to facilitate the logistics for the translocation of 7 lions from South Africa in 2015. This involved complex transport logistics, veterinary monitoring, and community education programs to ensure the safety of both the animals and neighboring villages.",
    result: "The lion population has successfully established itself and grown to over 50 individuals. The return of the apex predator has restored the ecological balance of the park, boosting tourism revenue which directly funds the park's management and community engagement.",
    tags: ["Wildlife", "Logistics", "Restoration"]
  },
  'kivu-coffee': {
    title: "The Kivu Coffee Circuit",
    client: "Economic Dev / Local Co-ops",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/MarabaHoldingTanks.jpg/1920px-MarabaHoldingTanks.jpg",
    challenge: "Coffee farmers in the Kivu belt produced high-quality beans but lacked direct access to the tourism market. Tourists passed through the region without engaging with the agricultural heritage or contributing to the farmers' income.",
    solution: "We designed a sustainable tourism route connecting 15 washing stations. We trained farmers in hospitality, created standardized tour protocols, and marketed the 'Crop to Cup' experience to international operators.",
    result: "The circuit now attracts thousands of visitors annually. Participating farmers have seen a 40% increase in income through tourism fees and direct coffee sales to visitors. The project has raised the profile of Rwandan specialty coffee globally.",
    tags: ["Agriculture", "Community", "Economic Growth"]
  },
  'gorilla-vet': {
    title: "Mountain Gorilla Vet Project",
    client: "Education / Gorilla Doctors",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Mountain_gorilla_%28Gorilla_beringei_beringei%29_female_with_baby.jpg/1920px-Mountain_gorilla_%28Gorilla_beringei_beringei%29_female_with_baby.jpg",
    challenge: "Mountain Gorillas are highly susceptible to human diseases. Ensuring their health requires constant monitoring and veterinary intervention, which is costly and requires specialized knowledge.",
    solution: "We partnered with the Gorilla Doctors to coordinate immersive educational expeditions. We handle the logistics for international veterinary teams and students to visit the field, learn from local vets, and contribute funding/supplies.",
    result: "These expeditions provide crucial funding and equipment for the Gorilla Doctors. The exchange of knowledge strengthens global veterinary practices, and the presence of these teams provides additional monitoring capacity for the endangered gorilla families.",
    tags: ["Education", "Medical", "Primates"]
  },
  'nyamirambo-solar': {
    title: "Nyamirambo Solar Initiative",
    client: "Infrastructure / Women's Center",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Sunset_views_from_Nyamirambo.jpg/3840px-Sunset_views_from_Nyamirambo.jpg",
    challenge: "Many households in the Nyamirambo sector faced unreliable electricity access, hindering education for children studying at night and limiting economic productivity for women working from home.",
    solution: "Utilizing a portion of our tourism revenue, we launched a community-led project to install solar home systems. We worked with the Nyamirambo Women's Center to identify the 50 most vulnerable households.",
    result: "50 households now have reliable, clean energy. Children can study after sunset, and women can power sewing machines and charge phones, increasing their economic independence. The project serves as a model for tourism-funded infrastructure.",
    tags: ["Sustainability", "Energy", "Urban"]
  },
  'kivu-wedding': {
    title: "A Lake Kivu Wedding",
    client: "Events / 240 Guests",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Rwanda_tradional_dance_in_wedding.jpg/3840px-Rwanda_tradional_dance_in_wedding.jpg",
    challenge: "A young Rwandan couple wanted a full wedding weekend on the shores of Lake Kivu — but the logistics of venues, catering, guest transport, and a traditional Intore ceremony for 240 guests at Karongi were stretched across dozens of separate vendors.",
    solution: "We acted as the single wedding producer: sourced and styled the lakeside ceremony grounds, designed a farm-to-table menu with our catering partners, chartered guest transport across the belt, and booked the Intore troupe for the reception's grand welcome.",
    result: "The three-day celebration ran without a hitch. The couple booked through our wedding event type, and 60% of guest accommodations were at partner eco-lodges — leaving the region better-off than we found it.",
    tags: ["Wedding", "Catering", "Venue"]
  },
  'charity-gala': {
    title: "Kigali Charity Gala",
    client: "Fundraising / Grassroots NGOs",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Rwandan_wedding_stage.jpg/1920px-Rwandan_wedding_stage.jpg",
    challenge: "Two grassroots education NGOs wanted an annual gala that could raise serious funds without flying in expensive foreign production. They needed staging, an auction, entertainment, and flawless hospitality — on a modest budget.",
    solution: "We produced the entire event locally: sound and lighting design, an elevated auction with a professional MC, an Intore opening performance, and a fully local catering menu. Sponsors covered production in exchange for brand activations.",
    result: "The gala more than doubled year-on-year donations. The model is now an annual event, and the same production team supports our other fundraising and award events across the country.",
    tags: ["Fundraising", "Production", "Awards"]
  },
  'corporate-summit': {
    title: "East Africa Corporate Summit",
    client: "Corporate / 350 Delegates",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Launch_of_the_Environment_Week_2017-_Umuganda_at_Nyandungu_Wetland_-_34961808125.jpg/3840px-Launch_of_the_Environment_Week_2017-_Umuganda_at_Nyandungu_Wetland_-_34961808125.jpg",
    challenge: "A pan-African technology firm needed a three-day summit in Rwanda: a board-level conference in Kigali, followed by a team-building expedition near the volcanoes — with 350 delegates arriving from 22 countries.",
    solution: "We coordinated every layer: conference venue and AV production, hotel blocks across three partner properties, a transport fleet with staggered airport pickups, session facilitation, and a full expedition program in Musanze including a conservation volunteer morning.",
    result: "Zero transport delays across the entire summit. The client rated the expedition the best team-offsite in company history and has since booked an annual corporate-retreat package with us.",
    tags: ["Corporate", "MICE", "Team Building"]
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

         {eventsFor('projects', slug || '').length > 0 && (
           <div className="mt-16">
             <h3 className="text-2xl font-serif text-earth mb-6">Book a Similar Event</h3>
             <div className="flex flex-wrap gap-3">
               {eventsFor('projects', slug || '').map((e) => (
                 <Link
                   key={e.slug}
                   to={`/events/${e.slug}`}
                   className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-sandstone rounded-sm text-sm font-bold uppercase tracking-wider text-earth hover:border-forest hover:text-forest hover:-translate-y-0.5 transition-all"
                 >
                   <span className="material-symbols-outlined text-base text-sage">{e.icon}</span>
                   {e.name}
                 </Link>
               ))}
             </div>
           </div>
         )}
       </div>
    </div>
  );
};

export default PortfolioDetail;
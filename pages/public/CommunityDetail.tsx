import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';

const communityData: Record<string, any> = {
  'nyamirambo-womens-center': {
    title: "Nyamirambo Women's Center",
    type: "NGO & Cooperative",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop",
    mission: "To address gender-based violence, gender inequality, and discrimination by providing education and vocational training to disadvantaged women.",
    impact: [
      { value: "18", label: "Founding Members" },
      { value: "500+", label: "Women Trained" },
      { value: "100%", label: "Local Income" }
    ],
    description: "The Nyamirambo Women's Center (NWC), a Rwandan NGO, was launched at the end of 2007 by 18 women living in Nyamirambo, Kigali. Together they created a project that aimed to address gender-based violence, gender inequality, and discrimination. Today, NWC provides education and vocational training to women who do not have the means to pay for such training on their own.",
    activities: [
      "Walking Tour of Nyamirambo",
      "Sisal Basket Weaving Workshop",
      "Traditional Cooking Class"
    ]
  },
  'red-rocks-initiative': {
    title: "Red Rocks Initiative",
    type: "Conservation & Art",
    image: "https://images.unsplash.com/photo-1551049688-299f18df0498?q=80&w=1974&auto=format&fit=crop",
    mission: "To integrate tourism, conservation, and community development around the Volcanoes National Park through art, music, and sustainable agriculture.",
    impact: [
      { value: "15", label: "Cooperatives Supported" },
      { value: "1.5k", label: "Households Impacted" },
      { value: "Eco", label: "Award Winner" }
    ],
    description: "Red Rocks is more than a cultural center; it's a movement. Located near Volcanoes National Park, it bridges the gap between local farmers and the tourism industry. Through art lessons, drumming circles, and banana beer production, Red Rocks provides alternative income sources for locals, reducing the economic pressure to poach in the national park.",
    activities: [
      "Banana Beer Brewing",
      "Traditional Drumming",
      "Painting Lessons",
      "Botanical Garden Tour"
    ]
  },
  'akagera-guides': {
    title: "Akagera Community Freelance Guides",
    type: "Wildlife & Education",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
    mission: "To ensure that wildlife protection translates directly to local income by professionalizing guiding services for community members bordering the park.",
    impact: [
      { value: "40+", label: "Guides Certified" },
      { value: "30%", label: "Reduction in Poaching" },
      { value: "$$", label: "Direct Revenue" }
    ],
    description: "The Community Freelance Guides cooperative is composed of members from the villages immediately surrounding Akagera National Park. By training these locals as professional safari guides, the park ensures that the people who live with the wildlife benefit most from its protection. These guides offer unparalleled local knowledge of the terrain and animal behaviors.",
    activities: [
      "Game Drives",
      "Birding Safaris",
      "Walk the Line (Fence Walk)",
      "Night Drives"
    ]
  }
};

const CommunityDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? communityData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sandstone">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-earth mb-4">Partner Not Found</h2>
          <Link to="/community" className="text-forest hover:underline font-bold">Return to Community</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-sandstone">
      <div className="relative h-[60vh] w-full">
         <ImageWithFallback src={data.image} alt={data.title} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-gradient-to-t from-earth via-earth/40 to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
           <div className="max-w-7xl mx-auto">
             <span className="bg-sage text-earth px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">{data.type}</span>
             <h1 className="text-4xl md:text-6xl font-serif mb-4">{data.title}</h1>
             <p className="text-xl max-w-2xl opacity-90 font-light">{data.mission}</p>
           </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           {data.impact.map((stat: any, i: number) => (
             <div key={i} className="bg-white p-6 rounded-sm shadow-sm border-b-4 border-forest text-center">
               <span className="block text-4xl font-bold text-forest mb-2">{stat.value}</span>
               <span className="text-xs font-bold uppercase tracking-widest text-earth/60">{stat.label}</span>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div>
             <h2 className="text-3xl font-serif text-earth mb-6">Our Story & Impact</h2>
             <p className="text-earth/80 leading-relaxed text-lg mb-8">
               {data.description}
             </p>
             <h3 className="text-xl font-bold text-earth mb-4">Experiences You Can Book</h3>
             <ul className="space-y-3">
               {data.activities.map((act: string, i: number) => (
                 <li key={i} className="flex items-center gap-3 p-3 bg-white rounded-sm shadow-sm">
                   <span className="material-symbols-outlined text-sage">local_activity</span>
                   <span className="text-earth font-medium">{act}</span>
                 </li>
               ))}
             </ul>
           </div>
           
           <div className="bg-forest text-white p-10 rounded-sm">
             <h3 className="text-2xl font-serif mb-4">Support This Partner</h3>
             <p className="mb-8 opacity-80 leading-relaxed">
               When you book a tour with Hill Travel, a portion of revenue goes to partners like {data.title}. 
               You can also visit them directly or make a specific donation.
             </p>
             <div className="space-y-4">
               <Link to="/contact" className="block w-full py-3 bg-white text-forest text-center font-bold uppercase tracking-widest hover:bg-sage hover:text-white transition-colors">
                 Book a Visit
               </Link>
               <button className="block w-full py-3 border border-white/30 text-white text-center font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                 Donate Directly
               </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail;
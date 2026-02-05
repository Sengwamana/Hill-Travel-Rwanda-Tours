import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const serviceData: Record<string, any> = {
  'bespoke-itinerary': {
    title: "Bespoke Itinerary Planning",
    icon: "map",
    summary: "Tailor-made journeys designed around your specific interests.",
    content: "No two travelers are alike. Our Bespoke Itinerary Planning service is designed for those who seek a journey as unique as they are. Whether you are a solo photographer chasing the golden hour, a family seeking educational fun, or a couple on a romantic escape, we craft every detail. We handle logistics, accommodation, and exclusive access, leaving you to simply enjoy the journey.",
    features: ["Personalized Consultation", "24/7 On-Trip Support", "Exclusive Access", "Flexible Scheduling"]
  },
  'gorilla-permits': {
    title: "Gorilla Trekking Permits",
    icon: "pets",
    summary: "We handle the complex logistics of securing permits for Volcanoes National Park.",
    content: "Securing a Gorilla Trekking permit in Rwanda can be competitive and complex. As a licensed operator, we have direct access to the RDB booking system. We manage the entire process—from checking availability to securing the permit and arranging the necessary briefing logistics. Note: Permits currently cost $1,500 per person and are non-refundable.",
    features: ["Availability Monitoring", "Instant Booking", "Briefing Logistics", "Permit Delivery"]
  },
  'luxury-lodge-booking': {
    title: "Luxury Lodge Booking",
    icon: "king_bed",
    summary: "Access to exclusive rates and curated stays at Rwanda's most sustainable eco-lodges.",
    content: "We partner with Rwanda's most prestigious and sustainable lodges, including Singita, One&Only, and Wilderness Safaris. Our relationship with these properties often allows us to offer value-added benefits such as room upgrades, private dining experiences, or spa credits. We ensure your stay aligns with your values of comfort and conservation.",
    features: ["Best Rate Guarantee", "Room Upgrades (Subject to Avail)", "VIP Amenities", "Sustainability Vetted"]
  },
  'private-transport': {
    title: "Private Transport & Logistics",
    icon: "directions_car",
    summary: "Navigate the Land of a Thousand Hills in comfort with our fleet of modern 4x4s.",
    content: "Rwanda's terrain is beautiful but can be challenging. Travel in safety and comfort in our fleet of extended Land Cruisers. Each vehicle is equipped with Wi-Fi, a fridge, and charging ports. Most importantly, you are driven by a professional driver-guide who is also a trained naturalist, ready to spot wildlife and share local history.",
    features: ["4x4 Land Cruisers", "Professional Driver-Guides", "On-board Wi-Fi & Fridge", "Airport Transfers"]
  },
  'community-cultural-tours': {
    title: "Community & Cultural Tours",
    icon: "diversity_3",
    summary: "Authentic experiences that directly support local artisans and cooperatives.",
    content: "Go beyond the standard tourist trail. Our community tours are developed in partnership with local NGOs and cooperatives. From cooking classes in a family home to weaving workshops and agricultural tours, these experiences provide direct income to community members and offer you a genuine connection to Rwandan culture.",
    features: ["Direct Community Benefit", "Authentic Interaction", "Translator Guides", "Hands-on Activities"]
  },
  'corporate-group-travel': {
    title: "Corporate & Group Travel",
    icon: "groups",
    summary: "Seamless logistics for retreats, conferences, and educational groups.",
    content: "Rwanda is a leading MICE (Meetings, Incentives, Conferences, and Exhibitions) destination. We provide end-to-end logistics for large groups, including transport fleets, hotel blocks, conference venue setup, and team-building excursions. We blend professional efficiency with unique Rwandan experiences.",
    features: ["Large Group Logistics", "Venue Sourcing", "Team Building Activities", "VIP Protocol Services"]
  }
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? serviceData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sandstone">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-earth mb-4">Service Not Found</h2>
          <Link to="/services" className="text-forest hover:underline font-bold">Return to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-sandstone min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
           <div className="w-20 h-20 bg-forest text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="material-symbols-outlined text-4xl">{data.icon}</span>
           </div>
           <span className="text-sage font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Services</span>
           <h1 className="text-4xl md:text-5xl font-serif text-earth mb-6">{data.title}</h1>
           <p className="text-xl text-earth/70 font-light">{data.summary}</p>
        </div>

        <div className="bg-white p-10 rounded-sm shadow-sm border-t-4 border-forest mb-12">
           <h2 className="text-2xl font-serif text-earth mb-6">Service Details</h2>
           <p className="text-earth/80 leading-relaxed mb-8 text-lg">
             {data.content}
           </p>
           
           <h3 className="text-lg font-bold text-earth mb-4">Key Features</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {data.features.map((feature: string, i: number) => (
               <div key={i} className="flex items-center gap-3 p-3 bg-sandstone/30 rounded-sm">
                 <span className="material-symbols-outlined text-forest">verified</span>
                 <span className="text-earth/90 font-medium">{feature}</span>
               </div>
             ))}
           </div>
        </div>

        <div className="bg-earth text-sandstone p-10 text-center rounded-sm">
           <h2 className="text-3xl font-serif mb-4">Ready to Plan?</h2>
           <p className="mb-8 opacity-80 max-w-lg mx-auto">
             Contact our team to include {data.title} in your upcoming trip to Rwanda.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="px-8 py-3 bg-white text-earth font-bold uppercase tracking-widest hover:bg-sage transition-colors">
               Inquire Now
             </Link>
             <Link to="/services" className="px-8 py-3 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
               View All Services
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
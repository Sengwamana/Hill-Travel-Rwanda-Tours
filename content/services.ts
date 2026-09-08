export interface Service {
  slug: string;
  title: string;
  icon: string;
  description: string;
  summary: string;
  content: string;
  features: string[];
}

export interface ServiceMap {
  'bespoke-itinerary': Service;
  'gorilla-permits': Service;
  'luxury-lodge-booking': Service;
  'private-transport': Service;
  'community-cultural-tours': Service;
  'corporate-group-travel': Service;
  'catering-hospitality': Service;
  'venue-style': Service;
  'production-media': Service;
  'permits-safety': Service;
}

export type ServiceSlug = keyof ServiceMap;

export const SERVICES: ServiceMap = {
  'bespoke-itinerary': {
    slug: 'bespoke-itinerary',
    title: "Bespoke Itinerary Planning",
    icon: "map",
    description: "Tailor-made journeys designed around your specific interests, whether it's primates, birding, or cultural immersion.",
    summary: "Tailor-made journeys designed around your specific interests.",
    content: "No two travelers are alike. Our Bespoke Itinerary Planning service is designed for those who seek a journey as unique as they are. Whether you are a solo photographer chasing the golden hour, a family seeking educational fun, or a couple on a romantic escape, we craft every detail. We handle logistics, accommodation, and exclusive access, leaving you to simply enjoy the journey.",
    features: ["Personalized Consultation", "24/7 On-Trip Support", "Exclusive Access", "Flexible Scheduling"]
  },
  'gorilla-permits': {
    slug: 'gorilla-permits',
    title: "Gorilla Trekking Permits",
    icon: "pets",
    description: "We handle the complex logistics of securing permits for Volcanoes National Park, ensuring your encounter with the gentle giants.",
    summary: "We handle the complex logistics of securing permits for Volcanoes National Park.",
    content: "Securing a Gorilla Trekking permit in Rwanda can be competitive and complex. As a licensed operator, we have direct access to the RDB booking system. We manage the entire process—from checking availability to securing the permit and arranging the necessary briefing logistics. Permit rates are set by the Rwanda Development Board and are negotiable within our package pricing; contact us for the current rate.",
    features: ["Availability Monitoring", "Instant Booking", "Briefing Logistics", "Permit Delivery"]
  },
  'luxury-lodge-booking': {
    slug: 'luxury-lodge-booking',
    title: "Luxury Lodge Booking",
    icon: "king_bed",
    description: "Access to exclusive rates and curated stays at Rwanda's most sustainable and luxurious eco-lodges.",
    summary: "Access to exclusive rates and curated stays at Rwanda's most sustainable eco-lodges.",
    content: "We partner with Rwanda's most prestigious and sustainable lodges, including Singita, One&Only, and Wilderness Safaris. Our relationship with these properties often allows us to offer value-added benefits such as room upgrades, private dining experiences, or spa credits. We ensure your stay aligns with your values of comfort and conservation.",
    features: ["Best Rate Guarantee", "Room Upgrades (Subject to Avail)", "VIP Amenities", "Sustainability Vetted"]
  },
  'private-transport': {
    slug: 'private-transport',
    title: "Private Transport & Logistics",
    icon: "directions_car",
    description: "Navigate the Land of a Thousand Hills in comfort with our fleet of modern 4x4 Land Cruisers and professional driver-guides.",
    summary: "Navigate the Land of a Thousand Hills in comfort with our fleet of modern 4x4s.",
    content: "Rwanda's terrain is beautiful but can be challenging. Travel in safety and comfort in our fleet of extended Land Cruisers. Each vehicle is equipped with Wi-Fi, a fridge, and charging ports. Most importantly, you are driven by a professional driver-guide who is also a trained naturalist, ready to spot wildlife and share local history.",
    features: ["4x4 Land Cruisers", "Professional Driver-Guides", "On-board Wi-Fi & Fridge", "Airport Transfers"]
  },
  'community-cultural-tours': {
    slug: 'community-cultural-tours',
    title: "Community & Cultural Tours",
    icon: "diversity_3",
    description: "Authentic experiences that directly support local artisans, women's cooperatives, and reconciliation initiatives.",
    summary: "Authentic experiences that directly support local artisans and cooperatives.",
    content: "Go beyond the standard tourist trail. Our community tours are developed in partnership with local NGOs and cooperatives. From cooking classes in a family home to weaving workshops and agricultural tours, these experiences provide direct income to community members and offer you a genuine connection to Rwandan culture.",
    features: ["Direct Community Benefit", "Authentic Interaction", "Translator Guides", "Hands-on Activities"]
  },
  'corporate-group-travel': {
    slug: 'corporate-group-travel',
    title: "Corporate & Group Travel",
    icon: "groups",
    description: "Seamless logistics for retreats, conferences, and educational groups seeking impactful team-building experiences.",
    summary: "Seamless logistics for retreats, conferences, and educational groups.",
    content: "Rwanda is a leading MICE (Meetings, Incentives, Conferences, and Exhibitions) destination. We provide end-to-end logistics for large groups, including transport fleets, hotel blocks, conference venue setup, and team-building excursions. We blend professional efficiency with unique Rwandan experiences.",
    features: ["Large Group Logistics", "Venue Sourcing", "Team Building Activities", "VIP Protocol Services"]
  },
  'catering-hospitality': {
    slug: 'catering-hospitality',
    title: "Catering & Hospitality",
    icon: "restaurant",
    description: "Full-service catering for events of every scale, with menus built around Rwanda's farms, markets, and volcanic produce.",
    summary: "Full-service catering for events of every scale, built around Rwandan produce.",
    content: "From intimate family birthdays to 1,000-guest galas, our catering team designs menus that celebrate Rwanda's farms and markets. We provide tasting sessions, live cooking stations, professional serving staff, and complete table styling — with full handling of dietary and allergy requirements.",
    features: ["Menu Design & Tastings", "Live Cooking Stations", "Professional Waitstaff", "Full Table Styling"]
  },
  'venue-style': {
    slug: 'venue-style',
    title: "Venue Sourcing & Styling",
    icon: "chair",
    description: "From lakeside ceremony grounds to Kigali conference halls — we source, layout, and style the perfect setting for your occasion.",
    summary: "We source, lay out, and style the perfect setting for your occasion.",
    content: "Rwanda's venues range from lakefront beaches and volcano-view lawns to intimate galleries and Kigali's convention halls. We shortlist venues against your guest count, budget, and vision; negotiate terms; then style each space with decor, seating plans, signage, and ambiance that matches your theme.",
    features: ["Venue Shortlisting", "Contract Negotiation", "Interior & Floral Styling", "Seating & Layout Plans"]
  },
  'production-media': {
    slug: 'production-media',
    title: "Production, MCs & Media",
    icon: "videocam",
    description: "Sound, lighting, staging, photographers, and hosts. Production support that makes your event run — and look — flawless.",
    summary: "Sound, lighting, staging, photographers, and hosts for a flawless event.",
    content: "Great events feel effortless because the production is invisible. We provide end-to-end technical production — sound systems, lighting design, staging, live streaming — plus the human talent: professional MCs, photographers, videographers, and entertainers who keep energy high and memories captured.",
    features: ["Sound & Lighting Design", "Staging & Video Walls", "Professional MC Hosts", "Photography & Videography"]
  },
  'permits-safety': {
    slug: 'permits-safety',
    title: "Permits, Safety & Compliance",
    icon: "verified_user",
    description: "Event permits, crowd safety planning, medical cover, and compliance with Rwanda's regulations for public and sports gatherings.",
    summary: "Event permits, crowd safety, medical cover, and regulatory compliance.",
    content: "Public events, sports days, and street festivals in Rwanda require proper permits and safety planning. We manage applications with the relevant authorities, coordinate security and medical cover, plan crowd flow and emergency access, and ensure your event complies fully with Rwandan law.",
    features: ["Event Permit Processing", "Security Coordination", "Medical & Ambulance Cover", "Crowd Safety Planning"]
  }
};

export const SERVICE_LIST: Service[] = Object.values(SERVICES);
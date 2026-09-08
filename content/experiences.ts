export interface Experience {
  slug: string;
  title: string;
  category: string;
  image: string;
  duration: string;
  groupSize: string;
  location: string;
  description: string;
  highlights: string[];
  itinerary: { time: string; activity: string }[];
}

export interface ExperienceMap {
  'crop-to-cup': Experience;
  'agaseke-weaving': Experience;
  'canopy-walk': Experience;
  'intore-dance': Experience;
  'gourmet-catering': Experience;
  'umuganda-day': Experience;
  'team-building': Experience;
}

export type ExperienceSlug = keyof ExperienceMap;

export const EXPERIENCES: ExperienceMap = {
  'crop-to-cup': {
    slug: 'crop-to-cup',
    title: "Crop to Cup Tea Tour",
    category: "Cultural",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Tea_plantation%2C_Western_Rwanda.jpg/3840px-Tea_plantation%2C_Western_Rwanda.jpg",
    duration: "4 Hours",
    groupSize: "Small Group (Max 8)",
    location: "Pfunda Tea Estate",
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
    slug: 'agaseke-weaving',
    title: "Agaseke Weaving Workshop",
    category: "Artisan",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Rwandan_basket_weaving.jpg/3840px-Rwandan_basket_weaving.jpg",
    duration: "3 Hours",
    groupSize: "1 - 10 Guests",
    location: "Nyamirambo, Kigali",
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
    slug: 'canopy-walk',
    title: "Canopy Walk & Primate Trek",
    category: "Adventure",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Nyungwe_Forest_NP_20150928-DSCF4880.jpg/3840px-Nyungwe_Forest_NP_20150928-DSCF4880.jpg",
    duration: "6 Hours",
    groupSize: "Private or Group",
    location: "Nyungwe National Park",
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
  },
  'intore-dance': {
    slug: 'intore-dance',
    title: "Intore Dance & Music Performance",
    category: "Cultural",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Intore_mu_Rwanda.jpg/1920px-Intore_mu_Rwanda.jpg",
    duration: "1-2 Hours",
    groupSize: "Flexible",
    location: "Kigali & Beyond",
    description: "The Intore — Rwanda's royal dancers — blend athletic choreography with hypnotic drumming and song. This performance brings the grandeur of the Rwandan court to your event, whether it's a wedding welcome, a gala opener, or a culture festival finale. Troupes can be tailored to your stage and audience size.",
    highlights: [
      "Traditional royal dance & drumming",
      "Costumes handmade by local artisans",
      "Options for guest participation",
      "Stage or garden-floor setups"
    ],
    itinerary: [
      { time: "00:00 min", activity: "Group arrives & sets up" },
      { time: "00:15 min", activity: "Drumming welcome" },
      { time: "00:30 min", activity: "Intore ensemble performance" }
    ]
  },
  'gourmet-catering': {
    slug: 'gourmet-catering',
    title: "Gourmet Chef & Catering Experience",
    category: "Culinary",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Traditional_food_from_Rwanda.jpg",
    duration: "Half / Full Day",
    groupSize: "Tailored",
    location: "Your Venue",
    description: "Great events run on great food. Our chefs design menus around Rwanda's farms, markets, and volcanic produce — from farm-to-table feasts and live cooking stations to elegant plated dinners. We handle tasting, staffing, decor, and dietary needs, so your guests are wowed from canapé to dessert.",
    highlights: [
      "Menu design around local ingredients",
      "Live cooking & carving stations",
      "Full service staff & table styling",
      "Dietary & allergy management"
    ],
    itinerary: [
      { time: "Week of", activity: "Menu tasting & confirmation" },
      { time: "Event Day", activity: "Setup, service & styling" },
      { time: "Event End", activity: "Breakdown & cleanup" }
    ]
  },
  'umuganda-day': {
    slug: 'umuganda-day',
    title: "Umuganda Community Day",
    category: "Community",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Umuganda.jpg/3840px-Umuganda.jpg",
    duration: "Half Day",
    groupSize: "All Ages",
    location: "Partner Communities",
    description: "Umuganda is Rwanda's last-Saturday tradition of communal work. We arrange for your team, family, or school group to join a host community on a shared project — clearing a path, planting trees, or building a modest structure — followed by a communal meal. It's service travel at its most authentic and moving.",
    highlights: [
      "Join a real community work day",
      "Contribute hands-on to a project",
      "Shared traditional lunch with hosts",
      "Cultural orientation & safety briefing"
    ],
    itinerary: [
      { time: "07:00 AM", activity: "Meet hosts & assignment" },
      { time: "07:30 AM", activity: "Community work together" },
      { time: "11:00 AM", activity: "Shared meal & thanks" }
    ]
  },
  'team-building': {
    slug: 'team-building',
    title: "Volcanic Team-Building Week",
    category: "Corporate",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Launch_of_the_Environment_Week_2017-_Umuganda_at_Nyandungu_Wetland_-_34961808125.jpg/3840px-Launch_of_the_Environment_Week_2017-_Umuganda_at_Nyandungu_Wetland_-_34961808125.jpg",
    duration: "3-5 Days",
    groupSize: "10-50 Guests",
    location: "Musanze & Gishwati",
    description: "Deepen connection and alignment away from the office. This retreat blends facilitated strategy sessions, volcano hikes, conservation volunteering, and canoe challenges — all woven into one seamless program. We manage lodging, transport, meals, and facilitation so your team can focus entirely on each other.",
    highlights: [
      "Guided strategy & reflection sessions",
      "Volcano hike and canopy expeditions",
      "Conservation volunteer morning",
      "Full logistics: transport, meals, lodging"
    ],
    itinerary: [
      { time: "Day 1", activity: "Arrival & evening briefing" },
      { time: "Day 2", activity: "Strategy sessions + hike" },
      { time: "Day 3", activity: "Conservation & canoe day" },
      { time: "Day 4", activity: "Debrief, celebration & depart" }
    ]
  }
};

export const EXPERIENCE_LIST: Experience[] = Object.values(EXPERIENCES);
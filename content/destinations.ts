export interface Highlight {
  title: string;
  desc: string;
}

export interface Lodge {
  image: string;
  name: string;
  location: string;
  ecoScore: number;
  tags: string[];
}

export interface Destination {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  stats: { label: string; value: string }[];
  highlights: Highlight[];
  lodges: Lodge[];
}

export interface DestinationMap {
  musanze: Destination;
  'lake-kivu': Destination;
  nyungwe: Destination;
  'gishwati-mukura': Destination;
  kigali: Destination;
}

export type DestinationSlug = keyof DestinationMap;

export const DESTINATIONS: DestinationMap = {
  musanze: {
    slug: 'musanze',
    title: "Musanze & Volcanoes",
    subtitle: "The Kingdom of Gorillas",
    heroImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Mountain_gorilla_from_Susa_Group_in_Karisimbi_thicket_of_Volcanoes_National_Park_in_Rwanda._Emmanuel_Kwizera.jpg/3840px-Mountain_gorilla_from_Susa_Group_in_Karisimbi_thicket_of_Volcanoes_National_Park_in_Rwanda._Emmanuel_Kwizera.jpg",
    description: "Musanze is the tourism capital of Rwanda, guarding the majestic Virunga Massif. It is the gateway for gorilla trekking in Volcanoes National Park, but offers much more—from the hauntingly beautiful Musanze Caves to the vibrant local markets.",
    stats: [
      { label: "Altitude", value: "2,400m - 4,507m" },
      { label: "Best Time", value: "Jun-Sep, Dec-Feb" },
      { label: "Key Species", value: "Mountain Gorillas, Golden Monkeys" }
    ],
    highlights: [
      { title: "Gorilla Trekking", desc: "A life-changing encounter with habituated gorilla families." },
      { title: "Dian Fossey Hike", desc: "Trek to the grave of the legendary primatologist at Karisoke." },
      { title: "Musanze Caves", desc: "Explore 2km of volcanic underground tunnels rich in history." }
    ],
    lodges: [
      {
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Volcanoes_National_Park_%2845593389614%29.jpg/1920px-Volcanoes_National_Park_%2845593389614%29.jpg",
        name: "Singita Kwitonda",
        location: "Volcanoes N.P.",
        ecoScore: 9.9,
        tags: ['Conservation', 'Luxury', 'Wellness']
      },
      {
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Volcanoes_National_Park_%2844500559730%29.jpg/1920px-Volcanoes_National_Park_%2844500559730%29.jpg",
        name: "Bisate Lodge",
        location: "Volcanoes N.P.",
        ecoScore: 9.8,
        tags: ['Reforestation', ' Iconic Design', 'Views']
      }
    ]
  },
  'lake-kivu': {
    slug: 'lake-kivu',
    title: "Lake Kivu Belt",
    subtitle: "Rwanda's Riviera",
    heroImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Lake_Kivu_at_dawn.jpg/1920px-Lake_Kivu_at_dawn.jpg",
    description: "A glistening emerald jewel, Lake Kivu is one of Africa's Great Lakes. The Kivu Belt road offers scenic drives, while towns like Karongi and Rubavu provide sandy beaches, water sports, and relaxation after the intensity of primate trekking.",
    stats: [
      { label: "Depth", value: "480m (Max)" },
      { label: "Activity", value: "Relaxation, Kayaking" },
      { label: "Key Experience", value: "Night Fishing, Coffee Tours" }
    ],
    highlights: [
      { title: "Napoleon Island", desc: "Hike to the summit for views and see the fruit bat colony." },
      { title: "Night Fishing", desc: "Join local fishermen on their trimarans singing traditional songs." },
      { title: "Congo Nile Trail", desc: "A world-class biking and hiking trail along the lake shores." }
    ],
    lodges: [
      {
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Scenery_around_Kibuye_%28Karongi%29_-_Rwanda_-_01_%288971615320%29.jpg/1920px-Scenery_around_Kibuye_%28Karongi%29_-_Rwanda_-_01_%288971615320%29.jpg",
        name: "Cormoran Lodge",
        location: "Kibuye",
        ecoScore: 8.9,
        tags: ['Local Wood', 'Lakeside', 'Cozy']
      },
      {
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Beach_in_Gisenyi_%28Rwanda%29.JPG/1920px-Beach_in_Gisenyi_%28Rwanda%29.JPG",
        name: "Kivu Marina Bay",
        location: "Kamembe",
        ecoScore: 9.2,
        tags: ['Modern', 'Views', 'Comfort']
      }
    ]
  },
  nyungwe: {
    slug: 'nyungwe',
    title: "Nyungwe National Park",
    subtitle: "The Ancient Rainforest",
    heroImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Nyungwe_Forest_NP_20150928-DSCF4880.jpg/3840px-Nyungwe_Forest_NP_20150928-DSCF4880.jpg",
    description: "One of the oldest rainforests in Africa, Nyungwe is rich in biodiversity and spectacularly beautiful. It feeds the Nile and protects over 1,000 plant species, 13 primate species, and 300 bird species.",
    stats: [
      { label: "Size", value: "1,019 km²" },
      { label: "Primates", value: "13 Species" },
      { label: "Highlight", value: "Canopy Walkway" }
    ],
    highlights: [
      { title: "Chimpanzee Trekking", desc: "Track our closest relatives in the dense Cyamudongo forest." },
      { title: "Canopy Walkway", desc: "A 160m long suspension bridge 70m above the forest floor." },
      { title: "Isumo Waterfall", desc: "A beautiful hike through tea fields and rainforest to the falls." }
    ],
    lodges: [
      {
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Sorwathe_Tea_Plantation%2C_Rwanda.jpg/3840px-Sorwathe_Tea_Plantation%2C_Rwanda.jpg",
        name: "One&Only Nyungwe House",
        location: "Gisakura",
        ecoScore: 9.7,
        tags: ['Ultra-Luxury', 'Tea Plantation', 'Spa']
      },
      {
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/NYUNGWE_CLOUDS.jpg/3840px-NYUNGWE_CLOUDS.jpg",
        name: "Nyungwe Top View Hotel",
        location: "Nyungwe",
        ecoScore: 8.5,
        tags: ['Panoramic Views', 'Mid-Range', 'Local Food']
      }
    ]
  },
  'gishwati-mukura': {
    slug: 'gishwati-mukura',
    title: "Gishwati-Mukura N.P.",
    subtitle: "A Story of Regeneration",
    heroImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Gishwati_Natural_Forest_01.jpg/1920px-Gishwati_Natural_Forest_01.jpg",
    description: "Rwanda's newest national park is a triumph of conservation. Once nearly depleted, the forests are regenerating, linking Gishwati and Mukura. It offers an intimate, off-the-beaten-path primate experience.",
    stats: [
      { label: "Established", value: "2015" },
      { label: "Experience", value: "Exclusive / Private" },
      { label: "Key Species", value: "Chimpanzees, Golden Monkeys" }
    ],
    highlights: [
      { title: "Primate Tracking", desc: "Track a small population of chimpanzees and golden monkeys." },
      { title: "Birding", desc: "Home to 232 bird species and spectacular Albertine Rift endemics." },
      { title: "Nature Trails", desc: "Guided walks learning about the reforestation efforts." }
    ],
    lodges: [
      {
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Hills_of_Nyamagabe_in_Rwanda.jpg/3840px-Hills_of_Nyamagabe_in_Rwanda.jpg",
        name: "Forest of Hope Guest House",
        location: "Gishwati",
        ecoScore: 9.5,
        tags: ['Basic Comfort', 'Immersion', 'NGO Run']
      }
    ]
  },
  kigali: {
    slug: 'kigali',
    title: "Kigali City Tour",
    subtitle: "The Heartbeat of Rwanda",
    heroImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Kigali2018Cropped.jpg/1920px-Kigali2018Cropped.jpg",
    description: "Safe, clean, and vibrant, Kigali is one of Africa's most fascinating cities. From the moving Genocide Memorial to the bustling Kimironko Market and the colorful car-free zones, it represents Rwanda's resilience and future.",
    stats: [
      { label: "Founded", value: "1907" },
      { label: "Vibe", value: "Clean, Safe, Creative" },
      { label: "Must Do", value: "Genocide Memorial" }
    ],
    highlights: [
      { title: "Kigali Genocide Memorial", desc: "A necessary and moving tribute to the victims of 1994." },
      { title: "Nyamirambo Walking Tour", desc: "Experience the multicultural Muslim quarter and its vibrant street life." },
      { title: "Inema Arts Center", desc: "Discover contemporary Rwandan art and dance performances." }
    ],
    lodges: [
      {
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/View_on_Kigali_%2802%29.jpg/3840px-View_on_Kigali_%2802%29.jpg",
        name: "The Retreat",
        location: "Kiyovu",
        ecoScore: 9.3,
        tags: ['Urban Oasis', 'Solar', 'Farm-to-Table']
      },
      {
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Facade_of_Hotel_des_Mille_Collines_-_a.k.a._Hotel_Rwanda_-_Kigali_-_Rwanda.jpg/1920px-Facade_of_Hotel_des_Mille_Collines_-_a.k.a._Hotel_Rwanda_-_Kigali_-_Rwanda.jpg",
        name: "Hotel des Mille Collines",
        location: "City Center",
        ecoScore: 8.0,
        tags: ['Historic', 'Pool', 'City Views']
      }
    ]
  }
};

export const DESTINATION_LIST: Destination[] = Object.values(DESTINATIONS);
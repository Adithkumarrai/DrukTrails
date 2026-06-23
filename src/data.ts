import { Destination, Experience, Trek, Festival, Testimonial, BlogPost, FAQItem } from "./types";

export const DESTINATIONS: Destination[] = [
  {
    id: "paro",
    name: "Paro Valley",
    subtitle: "Tiger's Nest & Sacred Temple Valleys",
    description: "Home to the iconic Taktsang (Tiger's Nest) Monastery, clinging dramatically to a sheer cliff 900m above the valley floor. Paro is a gateway of terraced fields and ancient watchtowers.",
    image: "https://images.unsplash.com/photo-1548625361-155de6c7f5f3?auto=format&fit=crop&w=800&q=80",
    tags: ["Monastery", "Riverside", "Sacred Heritage"]
  },
  {
    id: "thimphu",
    name: "Thimphu",
    subtitle: "Capital, Traditional Culture & Dzongs",
    description: "Bhutan’s vibrant capital city seamlessly blends modern development with rich Himalayan customs. Explore the massive Tashichho Dzong, the giant Buddha Dordenma, and bustling handicraft markets.",
    image: "https://images.unsplash.com/photo-1578593139812-70b9fa638ccd?auto=format&fit=crop&w=800&q=80",
    tags: ["Capital City", "Artisan Crafts", "Dzongs"]
  },
  {
    id: "punakha",
    name: "Punakha Valley",
    subtitle: "Riverside Dzongs & Subtropical Fertility",
    description: "Boasting Bhutan's most beautiful fortress, Punakha Dzong sits gloriously at the confluence of the Pho Chhu and Mo Chhu rivers. Famous for its mild winter orchards and suspension bridges.",
    image: "https://images.unsplash.com/photo-1578593139965-069a531e8da6?auto=format&fit=crop&w=800&q=80",
    tags: ["Warm Climate", "River Confluence", "Fortress"]
  },
  {
    id: "bumthang",
    name: "Bumthang Valley",
    subtitle: "Spiritual Heartland & Ancient Stories",
    description: "The deep spiritual core of Bhutan, composed of four highly sacred mountain valleys. Here lies Bhutan's oldest Buddhist temples, legends of Guru Rinpoche, and wild honey orchards.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    tags: ["Ancient Temples", "Spiritual Walks", "Chorseys"]
  },
  {
    id: "haa",
    name: "Haa Valley",
    subtitle: "Hidden Border Valley & Remote Beauty",
    description: "Unopened to tourists until 2002, Haa remains an pristine alpine wonderland bordering Tibet. It features ancient tribal traditions, black yak-hair tents, and absolute mystical serenity.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    tags: ["Prinstine Nature", "Yak Nomads", "Untouched"]
  },
  {
    id: "wangdue",
    name: "Wangdue Phodrang",
    subtitle: "Bamboo Crafts & Wild Bamboo Habitats",
    description: "Known for slate stone exports and bamboo master crafts, Wangdue hosts the Phobjikha valley—the winter home of endangered, romantic Black-Necked Cranes.",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
    tags: ["Wildlife Sanctuary", "Bamboo Weaving", "Fortresses"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "nature-wildlife",
    icon: "FaLeaf",
    title: "Nature & Wildlife",
    description: "Traverse carbon-negative evergreen woods that shelter Snow Leopards, Red Pandas, and rare mountain orchids."
  },
  {
    id: "trekking-adventure",
    icon: "FaMountain",
    title: "Trekking Adventures",
    description: "Pitch state-of-the-art tents under high-altitude glaciers on trails ranked among the world's most pristine."
  },
  {
    id: "spiritual",
    icon: "FaOm",
    title: "Spiritual Journeys",
    description: "Experience silent monastery meditations, custom incense-making, and private blessings from Buddhist sages."
  },
  {
    id: "photography",
    icon: "FaCamera",
    title: "Photography Tours",
    description: "Frame deep mountain gorges, colorful tshechu dancers, and gorgeous golden morning rays in foggy valleys."
  },
  {
    id: "festivals",
    icon: "FaMask",
    title: "Festivals & Culture",
    description: "A front-row seat to spectacular Cham mask dances, traditional archery, and ancient historical reenactments."
  },
  {
    id: "village-food",
    icon: "FaUtensils",
    title: "Food & Village Life",
    description: "Stay in heritage farmhouses, soak in hot stone baths, and taste spicy cheese stews (Ema Datshi) with locals."
  }
];

export const TREKS: Trek[] = [
  {
    id: "snowman",
    name: "The Snowman Trek",
    duration: "25 Days",
    difficulty: "Extreme",
    maxAltitude: "5,320m",
    season: "Oct – Nov",
    description: "Widely regarded as the hardest trek on Earth. Crosses 11 high mountain passes along the pristine Tibetan border in absolute wilderness.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "drukpath",
    name: "Druk Path Trek",
    duration: "6 Days",
    difficulty: "Moderate",
    maxAltitude: "4,210m",
    season: "Mar – Jun, Sep – Nov",
    description: "Bhutan’s most popular, classic trek. Winds through spectacular rhododendron forests and high ruins connecting Paro and Thimphu.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "jomolhari",
    name: "Jomolhari Loop",
    duration: "8 Days",
    difficulty: "Challenging",
    maxAltitude: "4,930m",
    season: "Apr – May, Oct – Nov",
    description: "Walk inside Jigme Dorji National Park directly up to the base camp of the sacred Mount Jomolhari with breathtaking glaciers.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bumthang-cultural",
    name: "Bumthang Cultural",
    duration: "3 Days",
    difficulty: "Easy",
    maxAltitude: "3,120m",
    season: "Mar – May, Sep – Dec",
    description: "A leisurely, spiritual journey linking beautiful organic ancient villages, buckwheat farms, and historic temples of Guru Rinpoche.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  }
];

export const FESTIVALS: Festival[] = [
  {
    id: "paro-tsechu",
    name: "Paro Tsechu",
    date: "March / April",
    location: "Paro Rinpung Dzong",
    description: "Bhutan’s grandest festival. Five days of sacred Cham dances, ending with the pre-dawn unveiling of the massive, sacred 350-year-old Guru Throngdrel thangka tapestry.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "thimphu-tsechu",
    name: "Thimphu Tsechu",
    date: "September / October",
    location: "Tashichho Dzong courtyard",
    description: "The capital's primary celebration, drawing pilgrims from all districts dressed in their finest gho and kira silk robes to clear negative karma and witness sacred plays.",
    image: "https://images.unsplash.com/photo-1578593139812-70b9fa638ccd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "punakha-drubchen",
    name: "Punakha Drubchen",
    date: "February / March",
    location: "Punakha Riverside Dzong",
    description: "A dramatic historical reenactment featuring local militia dressed in 17th-century combat gear, celebrating the victory over invading Tibetan forces.",
    image: "https://images.unsplash.com/photo-1578593139965-069a531e8da6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "haa-summer",
    name: "Haa Summer Festival",
    date: "July",
    location: "Haa Valley Meadows",
    description: "An authentic look into the nomadic lifestyle of the yak-herders. Includes traditional sport competitions (like heavy stone throwing), alpine butter crafts, and herbal wine tastings.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "black-crane",
    name: "Black-Necked Crane Festival",
    date: "November 11th",
    location: "Gangtey Monastery, Phobjikha",
    description: "A heartwarming conservation festival celebrating the arrival of the endangered cranes. Settle in the ancient monastery courtyard to see schoolchildren perform bird-dance dramas.",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    name: "Alice Vance",
    country: "Canada",
    rating: 5,
    quote: "My 10-day trip with DrukTrails completely re-centered my life. Hiking to Tiger's Nest in the misty morning and smelling wild pine is an experience I will carry with me forever. The local guides treated me like family.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&h=150&w=150&q=80"
  },
  {
    id: "test2",
    name: "Kenji Sato",
    country: "Japan",
    rating: 5,
    quote: "Bhutan's forest covers and sustainable commitment are inspiring. DrukTrails organized our photography route with precision. From sunrise over the Punakha river to remote temple blessings, everything was pristine.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&h=150&w=150&q=80"
  },
  {
    id: "test3",
    name: "Dr. Sophia Mueller",
    country: "Germany",
    rating: 5,
    quote: "The Gross National Happiness indicator is real. I saw it in the villages, the sustainable organic farms, and the incredible laughter of the children. DrukTrails' focus on high-value, low-volume mindfulness is the gold standard.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&h=150&w=150&q=80"
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "blog1",
    title: "Complete Guide to Tiger's Nest Trek: Permits, Altitude & Mindful Preparation",
    category: "Trekking Guides",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1548625361-155de6c7f5f3?auto=format&fit=crop&w=500&q=80",
    readTime: "6 min read"
  },
  {
    id: "blog2",
    title: "Bhutan Festivals: A Guide to the Sacred Cham Tapestries & Etiquette",
    category: "Culture Guides",
    date: "May 20, 2026",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=500&q=80",
    readTime: "8 min read"
  },
  {
    id: "blog3",
    title: "Bhutan's SDF Sustainable Fee: How Your Fee Actively Restores Himalayan Forests",
    category: "Sustainable Travel",
    date: "April 02, 2026",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=500&q=80",
    readTime: "5 min read"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "What is the Sustainable Development Fee (SDF)?",
    answer: "Bhutan charges an SDF of USD 100 per night per adult (discounted from USD 200) for international travelers. Children are half price. This fee directly funds environmental preservation, medical facilities, free healthcare, public education, and infrastructure upgrades, promoting a carbon-negative high-value tourist model."
  },
  {
    id: "faq2",
    question: "Do I need a Visa to visit Bhutan?",
    answer: "Except for passport holders of India, Bangladesh, and Maldives, all international travelers need a pre-arranged tourist visa. DrukTrails handles the entire visa licensing and government approval on your behalf when you secure your booking. Visa processing takes 3–5 working days."
  },
  {
    id: "faq3",
    question: "What is the best season to visit Bhutan?",
    answer: "Druk Path Trek and general sightseeing are best during March to May (flawless rhododendron blooms) and September to November (crisp crystal skies and harvest festivals). Winter (Dec–Feb) is clear and offers majestic mountain views but gets cold at elevated passes. Summer is rainy monsoon season."
  },
  {
    id: "faq4",
    question: "How difficult is hiking to Paro Taktsang (Tiger's Nest)?",
    answer: "The hike is moderate. It is a 6.4 km round-trip climb with an elevation gain of around 600 meters, taking 4 to 5 hours total. The path is dirt and well-maintained. There is a scenic cafeteria at the halfway point to rest and purchase snacks. Horses can be hired for the uphill portion for those needing help."
  },
  {
    id: "faq5",
    question: "Can I travel to Bhutan independently as a solo traveler?",
    answer: "Yes, solo travelers are fully welcome! However, by law, you must still have a pre-registered local licensed guide and driver accompanying you for all transfers, trail treks, and monument visits. DrukTrails customizes solo tours featuring deep personal retreats, meditation sessions, and private transfers."
  }
];

export type Photo = {
  src: string;
  alt: string;
  /** room group label used by the photo tour */
  room: string;
};

/**
 * Photos ordered for the hero grid (first 5 shown) and reused by the
 * photo tour, grouped by room. Sourced from the reference listing.
 */
export const photos: Photo[] = [
  { src: "/photos/living.png", alt: "Living room with sofa and dining area", room: "Living room 1" },
  { src: "/photos/lounge.png", alt: "Jacuzzi lounge with wicker seating", room: "Living room 2" },
  { src: "/photos/jacuzzi.png", alt: "Private jacuzzi with mood lighting", room: "Living room 2" },
  { src: "/photos/kitchen-1.png", alt: "Full kitchen with wooden cabinetry", room: "Full kitchen" },
  { src: "/photos/kitchen-2.png", alt: "Kitchen counter with cooktop and appliances", room: "Full kitchen" },
  { src: "/photos/bedroom.png", alt: "Bedroom with queen bed and mirror", room: "Bedroom" },
  { src: "/photos/bathroom.png", alt: "Full bathroom with walk-in shower", room: "Full bathroom" },
  { src: "/photos/gym.png", alt: "Shared gym with cardio equipment", room: "Gym" },
  { src: "/photos/exterior.png", alt: "Aerial view of the building", room: "Exterior" },
  { src: "/photos/pool-1.png", alt: "Shared swimming pool courtyard", room: "Pool" },
  { src: "/photos/pool-2.png", alt: "Poolside loungers by the water", room: "Pool" },
  { src: "/photos/pool-3.png", alt: "Swimming pool with building view", room: "Pool" },
  { src: "/photos/aditional-image-1.png", alt: "Additional view of the apartment", room: "Additional photos" },
  { src: "/photos/aditional-photos-2.png", alt: "Additional view of the apartment", room: "Additional photos" },
  { src: "/photos/aditional-photos-3.png", alt: "Additional view of the apartment", room: "Additional photos" },
  { src: "/photos/aditional-photos-4.png", alt: "Additional view of the apartment", room: "Additional photos" },
  { src: "/photos/aditional-photos-5.png", alt: "Additional view of the apartment", room: "Additional photos" },
  { src: "/photos/aditional-photos-6.png", alt: "Additional view of the apartment", room: "Additional photos" },
  { src: "/photos/aditional-photos-7.png", alt: "Additional view of the apartment", room: "Additional photos" },
  { src: "/photos/aditional-photos-8.png", alt: "Additional view of the apartment", room: "Additional photos" },
  { src: "/photos/aditional-photos-9.png", alt: "Additional view of the apartment", room: "Additional photos" },
  { src: "/photos/aditional-photos-10.png", alt: "Additional view of the apartment", room: "Additional photos" },
];

/** Room groupings for the photo tour left rail + sections, in reference order */
const roomOrder: { name: string; caption?: string }[] = [
  { name: "Living room 1", caption: "Sofa · Air conditioning · Ceiling fan · TV" },
  { name: "Living room 2", caption: "Jacuzzi · Lounge seating · Air conditioning" },
  { name: "Full kitchen", caption: "Refrigerator · Cooktop · Cookware · Dishes" },
  { name: "Bedroom", caption: "Queen bed · Wardrobe · Air conditioning" },
  { name: "Full bathroom", caption: "Walk-in shower · Hair dryer · Hot water" },
  { name: "Gym", caption: "Shared · Cardio & weights" },
  { name: "Exterior", caption: "Building · Neighbourhood" },
  { name: "Pool", caption: "Shared outdoor pool" },
  { name: "Additional photos" },
];

export const photoTourRooms: { name: string; caption?: string; photos: Photo[] }[] =
  roomOrder.map((room) => ({
    ...room,
    photos: photos.filter((photo) => photo.room === room.name),
  }));

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  location: "Candolim, India",
  type: "Entire serviced apartment in Candolim, India",
  specs: ["3 guests", "1 bedroom", "1 bed", "1 bathroom"],
  rating: 4.95,
  reviewCount: 19,
  isGuestFavourite: true,
  host: {
    name: "Mirashya Homes",
    since: "2 years hosting",
    isSuperhost: true,
    avatar: "/photos/host.png",
  },
  highlights: [
    {
      icon: "outdoor",
      title: "Outdoor entertainment",
      body: "The pool and alfresco dining are great for summer trips.",
    },
    {
      icon: "fan",
      title: "Designed for staying cool",
      body: "Beat the heat with the A/C and ceiling fan.",
    },
    {
      icon: "key",
      title: "Self check-in",
      body: "You can check in with the building staff.",
    },
  ],
  description:
    "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴",
  price: {
    total: "₹28,499",
    nights: 5,
    checkIn: "10/18/2026",
    checkOut: "10/23/2026",
    guests: 2,
    freeCancellationBefore: "17 October",
  },
};

export type Amenity = {
  icon: string;
  label: string;
  category: string;
  unavailable?: boolean;
};

export const amenities: Amenity[] = [
  // First 10 preview items (ordered exactly to form the 2-column preview in pic2)
  { icon: "kitchen", label: "Kitchen", category: "Kitchen and dining" },
  { icon: "wifi", label: "Wifi", category: "Internet and office" },
  { icon: "workspace", label: "Dedicated workspace", category: "Internet and office" },
  { icon: "parking", label: "Free parking on premises", category: "Parking and facilities" },
  { icon: "pool", label: "Pool", category: "Parking and facilities" },
  { icon: "hottub", label: "Hot tub", category: "Parking and facilities" },
  { icon: "pet", label: "Pets allowed", category: "Services" },
  { icon: "cctv", label: "Exterior security cameras on property", category: "Home safety" },
  { icon: "carbon", label: "Carbon monoxide alarm", category: "Home safety", unavailable: true },
  { icon: "smoke", label: "Smoke alarm", category: "Home safety", unavailable: true },

  // Remaining 40 items grouped logically by category for the modal (pic3)
  // Bathroom
  { icon: "hairdryer", label: "Hairdryer", category: "Bathroom" },
  { icon: "cleaning", label: "Cleaning products", category: "Bathroom" },
  { icon: "shampoo", label: "Shampoo", category: "Bathroom" },
  { icon: "hotwater", label: "Hot water", category: "Bathroom" },
  { icon: "showergel", label: "Shower gel", category: "Bathroom" },

  // Bedroom and laundry
  { icon: "washer", label: "Washing machine", category: "Bedroom and laundry" },
  { icon: "hanger", label: "Hangers", category: "Bedroom and laundry" },
  { icon: "linen", label: "Bed linen", category: "Bedroom and laundry" },
  { icon: "blinds", label: "Room-darkening blinds", category: "Bedroom and laundry" },
  { icon: "iron", label: "Iron", category: "Bedroom and laundry" },
  { icon: "wardrobe", label: "Clothes storage", category: "Bedroom and laundry" },

  // Entertainment
  { icon: "tv", label: "TV", category: "Entertainment" },
  { icon: "book", label: "Books and reading material", category: "Entertainment" },

  // Heating and cooling
  { icon: "ac", label: "Air conditioning", category: "Heating and cooling" },
  { icon: "fan", label: "Ceiling fan", category: "Heating and cooling" },

  // Home safety
  { icon: "fire", label: "Fire extinguisher", category: "Home safety" },

  // Kitchen and dining
  { icon: "fridge", label: "Refrigerator", category: "Kitchen and dining" },
  { icon: "microwave", label: "Microwave", category: "Kitchen and dining" },
  { icon: "pot", label: "Cooking basics (pots and pans, oil, salt and pepper)", category: "Kitchen and dining" },
  { icon: "dishes", label: "Dishes and silverware (bowls, chopsticks, plates, cups, etc.)", category: "Kitchen and dining" },
  { icon: "stove", label: "Stove", category: "Kitchen and dining" },
  { icon: "oven", label: "Oven", category: "Kitchen and dining" },
  { icon: "kettle", label: "Hot water kettle", category: "Kitchen and dining" },
  { icon: "glass", label: "Wine glasses", category: "Kitchen and dining" },
  { icon: "table", label: "Dining table", category: "Kitchen and dining" },

  // Location features
  { icon: "water", label: "Waterfront", category: "Location features" },
  { icon: "beach", label: "Beach access", category: "Location features" },

  // Outdoor
  { icon: "patio", label: "Patio or balcony", category: "Outdoor" },
  { icon: "backyard", label: "Backyard", category: "Outdoor" },
  { icon: "outdoor", label: "Outdoor dining area", category: "Outdoor" },
  { icon: "bbq", label: "BBQ grill", category: "Outdoor" },

  // Parking and facilities
  { icon: "gym", label: "Shared gym in building", category: "Parking and facilities" },
  { icon: "elevator", label: "Elevator", category: "Parking and facilities" },
  { icon: "home", label: "Single level home", category: "Parking and facilities" },

  // Services
  { icon: "luggage", label: "Luggage drop-off allowed", category: "Services" },
  { icon: "calendar", label: "Long-term stays allowed", category: "Services" },
  { icon: "key", label: "Self check-in", category: "Services" },
  { icon: "staff", label: "Building staff", category: "Services" },
  { icon: "broom", label: "Cleaning before checkout", category: "Services" },
  { icon: "breakfast", label: "Breakfast", category: "Services" },
];

export const reviewCategories: { label: string; icon: string; score: number }[] = [
  { label: "Cleanliness", icon: "sparkle", score: 5.0 },
  { label: "Accuracy", icon: "accuracy", score: 4.9 },
  { label: "Check-in", icon: "key", score: 5.0 },
  { label: "Communication", icon: "chat", score: 5.0 },
  { label: "Location", icon: "pin", score: 4.8 },
  { label: "Value", icon: "tag", score: 4.9 },
];

export type Review = {
  name: string;
  avatarColor: string;
  meta: string;
  rating: number;
  date: string;
  body: string;
};

export const reviews: Review[] = [
  {
    name: "Aarav",
    avatarColor: "#c1846d",
    meta: "3 years on Airbnb",
    rating: 5,
    date: "August 2026",
    body: "Amazing place with a lovely jacuzzi. Super clean and exactly as pictured. Aarav was a great host and very responsive.",
  },
  {
    name: "Priya",
    avatarColor: "#6d8fc1",
    meta: "5 years on Airbnb",
    rating: 5,
    date: "August 2026",
    body: "Absolutely stunning apartment, the private jacuzzi made our anniversary trip so special. The pool and gym were a bonus. Would definitely stay again when we are back in Goa.",
  },
  {
    name: "Meredith",
    avatarColor: "#8d6dc1",
    meta: "Somerville, Massachusetts",
    rating: 5,
    date: "July 2026",
    body: "Beautiful and comfortable stay in a great location.",
  },
  {
    name: "David",
    avatarColor: "#c16d9e",
    meta: "Chicago, Illinois",
    rating: 5,
    date: "July 2026",
    body: "The apartment was spotless and the host went above and beyond to make sure our check-in was smooth. Highly recommend for anyone visiting Candolim — you are close to everything but it still feels private and quiet.",
  },
  {
    name: "Kavya",
    avatarColor: "#6dc19e",
    meta: "Bengaluru, India",
    rating: 5,
    date: "June 2026",
    body: "Loved the interiors and the jacuzzi. Great value for the price and the neighbourhood is lovely.",
  },
  {
    name: "Rahul",
    avatarColor: "#c1a96d",
    meta: "Mumbai, India",
    rating: 5,
    date: "June 2026",
    body: "The whole booking was seamless and the flat is even nicer in person.",
  },
];

export const similarListings: {
  src: string;
  title: string;
  price: string;
  rating: number;
}[] = [
  { src: "/photos/bedroom.png", title: "Serviced apartment in Candolim", price: "₹6,120 night", rating: 4.9 },
  { src: "/photos/living.png", title: "Serviced apartment in Calangute", price: "₹5,480 night", rating: 4.88 },
  { src: "/photos/jacuzzi.png", title: "Villa in Anjuna", price: "₹9,200 night", rating: 4.97 },
  { src: "/photos/lounge.png", title: "Serviced apartment in Baga", price: "₹7,340 night", rating: 4.92 },
];

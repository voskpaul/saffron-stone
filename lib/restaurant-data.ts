export const menuCategories = [
  { id: "breakfast", label: "Breakfast" },
  { id: "starters", label: "Starters & small plates" },
  { id: "mains", label: "Main courses" },
  { id: "vegetarian", label: "Vegetarian options" },
  { id: "desserts", label: "Desserts" },
  { id: "coffee", label: "Coffee & hot drinks" },
  { id: "drinks", label: "Fresh juices & signature drinks" },
] as const

export type MenuCategory = (typeof menuCategories)[number]["id"]

export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  category: MenuCategory
  image?: string
  imageAlt?: string
  dietaryLabel?: string
  featured?: boolean
}

export const menuItems: MenuItem[] = [
  {
    id: "coconut-pancakes",
    name: "Swahili coconut pancakes",
    description: "Soft, golden pancakes with toasted coconut, banana and passion fruit.",
    price: 620,
    category: "breakfast",
    image: "/images/saffron-breakfast.png",
    imageAlt: "Golden coconut pancakes with banana and passion fruit",
    featured: true,
  },
  {
    id: "masala-eggs",
    name: "Masala eggs & sourdough",
    description: "Soft eggs, tomato masala, coriander and toasted sourdough.",
    price: 680,
    category: "breakfast",
  },
  {
    id: "millet-porridge",
    name: "Spiced millet porridge",
    description: "Warm millet, cardamom, cinnamon, seasonal fruit and a little honey.",
    price: 490,
    category: "breakfast",
  },
  {
    id: "cassava-crisps",
    name: "Cassava crisps & pili pili",
    description: "Thin-cut cassava with house pili pili and cooling tamarind dip.",
    price: 450,
    category: "starters",
  },
  {
    id: "charred-corn",
    name: "Charred sweet corn",
    description: "Grilled corn, lime butter, smoked paprika and fresh herbs.",
    price: 520,
    category: "starters",
  },
  {
    id: "nyama-skewers",
    name: "Nyama choma skewers",
    description: "Fire-kissed beef, kachumbari and a bright green herb sauce.",
    price: 790,
    category: "starters",
  },
  {
    id: "chicken-pilau",
    name: "Saffron chicken pilau",
    description: "Fragrant spiced rice, grilled chicken, kachumbari and a lime wedge.",
    price: 1280,
    category: "mains",
    image: "/images/saffron-hero.png",
    imageAlt: "Grilled chicken and pilau rice served with vegetables and sauce",
    featured: true,
  },
  {
    id: "grilled-tilapia",
    name: "Grilled tilapia plate",
    description: "Charred tilapia, coconut rice, greens and fresh tomato kachumbari.",
    price: 1490,
    category: "mains",
    image: "/images/saffron-fish.png",
    imageAlt: "Grilled tilapia with coconut rice, lime and greens",
    featured: true,
  },
  {
    id: "braised-beef",
    name: "Slow-braised beef",
    description: "Tender beef, buttery mash, seasonal vegetables and pan jus.",
    price: 1450,
    category: "mains",
  },
  {
    id: "coconut-beans",
    name: "Coconut bean stew",
    description: "Creamy coconut beans, roasted plantain, greens and warm flatbread.",
    price: 980,
    category: "vegetarian",
    dietaryLabel: "Vegetarian",
    image: "/images/saffron-vegetarian.png",
    imageAlt: "Coconut beans with roasted plantain, greens and flatbread",
    featured: true,
  },
  {
    id: "pumpkin-flatbread",
    name: "Roasted pumpkin flatbread",
    description: "Roasted pumpkin, whipped feta, herbs and chilli oil on warm flatbread.",
    price: 890,
    category: "vegetarian",
    dietaryLabel: "Vegetarian",
  },
  {
    id: "greens-grain-bowl",
    name: "Greens & grain bowl",
    description: "Herbed grains, charred greens, avocado and a citrus dressing.",
    price: 950,
    category: "vegetarian",
    dietaryLabel: "Vegetarian",
  },
  {
    id: "chai-panna-cotta",
    name: "Chai panna cotta",
    description: "Silky spiced cream, passion fruit and toasted coconut.",
    price: 520,
    category: "desserts",
    image: "/images/saffron-dessert.png",
    imageAlt: "Chai panna cotta with passion fruit and toasted coconut",
    featured: true,
  },
  {
    id: "chocolate-tart",
    name: "Dark chocolate tart",
    description: "Cocoa pastry, smooth chocolate filling and a pinch of sea salt.",
    price: 580,
    category: "desserts",
  },
  {
    id: "mango-sorbet",
    name: "Mango & lime sorbet",
    description: "A bright, cool scoop of mango with fresh lime zest.",
    price: 420,
    category: "desserts",
  },
  {
    id: "espresso",
    name: "Espresso",
    description: "A short, balanced shot from our rotating espresso blend.",
    price: 280,
    category: "coffee",
  },
  {
    id: "cafe-latte",
    name: "Café latte",
    description: "Espresso with steamed milk, served in a warm ceramic cup.",
    price: 380,
    category: "coffee",
  },
  {
    id: "spiced-chai",
    name: "House spiced chai",
    description: "Black tea simmered with ginger, cinnamon and cardamom.",
    price: 320,
    category: "coffee",
  },
  {
    id: "hibiscus-spritz",
    name: "Hibiscus & lime spritz",
    description: "A tart hibiscus cooler with lime, sparkling water and fresh mint.",
    price: 480,
    category: "drinks",
    image: "/images/saffron-drinks.png",
    imageAlt: "Ruby hibiscus and lime spritz over ice",
    featured: true,
  },
  {
    id: "tamarind-cooler",
    name: "Tamarind cooler",
    description: "Tamarind, citrus and a hint of ginger over plenty of ice.",
    price: 450,
    category: "drinks",
  },
  {
    id: "passion-fruit-soda",
    name: "Passion fruit soda",
    description: "Fresh passion fruit, lime and soda with a fragrant basil leaf.",
    price: 490,
    category: "drinks",
  },
]

export const openingHours = [
  { day: "Monday", hours: "8:00 am – 9:00 pm" },
  { day: "Tuesday", hours: "8:00 am – 9:00 pm" },
  { day: "Wednesday", hours: "8:00 am – 9:00 pm" },
  { day: "Thursday", hours: "8:00 am – 10:00 pm" },
  { day: "Friday", hours: "8:00 am – 10:00 pm" },
  { day: "Saturday", hours: "9:00 am – 10:00 pm" },
  { day: "Sunday", hours: "9:00 am – 8:00 pm" },
] as const

export const restaurant = {
  name: "Saffron & Stone",
  location: "Nairobi, Kenya",
  address: "14 Garden Lane, Westlands, Nairobi, Kenya",
  email: "hello@saffronandstone.example",
  phone: "+254 700 000 000",
  whatsappPhone: "",
  demoNotice:
    "Saffron & Stone is a fictional portfolio concept. Menu items, prices, address, hours and contact details are illustrative demo content.",
} as const

export function formatPrice(amount: number) {
  return `KSh ${new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 }).format(amount)}`
}

export function getWhatsAppHref(message: string) {
  const number = restaurant.whatsappPhone.replace(/\D/g, "")
  if (!/^\d{10,15}$/.test(number)) return null

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function getTodayInNairobi() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Nairobi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date())
}

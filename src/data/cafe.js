/*
 * Central content file for Chai Bagaan Café.
 *
 * Sources:
 * - Hours, phone, address, dayparts and menu categories: the cafe's promotional
 *   poster supplied by the owner.
 * - Dish names mentioned by guests: the reviews listed in `reviews` below.
 * - Prices: not verified yet, so none are shown. To show one, add a `price`
 *   field (for example "₹120") to an item; it renders automatically.
 *
 * Do not add facts here that have not been verified with the owner.
 */

const MAPS_QUERY = 'Chai+Bagaan+Cafe+Nallurhalli+Whitefield+Bengaluru'

export const cafe = {
  name: 'Chai Bagaan',
  fullName: 'Chai Bagaan Café',
  tagline: 'Pure veg café and all-day dining',
  areaLine: 'Nallurahalli, Whitefield, Bengaluru',
  description:
    'Chai Bagaan Café is a pure-veg café near Nallurahalli Lake in Whitefield, Bengaluru, serving breakfast, lunch, evening snacks, dinner and late-night bites.',
  address: {
    lines: ['Near Nallurahalli Lake', 'Nallurahalli, Whitefield', 'Bengaluru, Karnataka, India'],
    locality: 'Bengaluru',
    region: 'Karnataka',
    country: 'IN',
  },
  phone: { display: '98867 43432', href: 'tel:+919886743432' },
  hours: { label: 'Open daily', time: '6:00 AM – 12:00 AM' },
  dineIn: 'Dine-in and takeaway available',
  isPureVeg: true,
  links: {
    directions: `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`,
    mapEmbed: `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`,
    googleSearch: 'https://www.google.com/search?q=CHAI+BAGAAN+CAFE',
    zomatoMenu: 'https://www.zomato.com/bangalore/chai-bagaan-cafe-whitefield-bangalore/menu',
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#visit' },
]

export const announcement = {
  items: ['100% pure veg', 'Open daily, 6 AM – 12 AM', 'Dine-in and takeaway available'],
}

export const dayparts = [
  { label: 'Breakfast', time: '6 AM onwards', icon: 'sunrise' },
  { label: 'Lunch', time: '12 PM onwards', icon: 'sun' },
  { label: 'Evening snacks', time: '4 PM onwards', icon: 'cup' },
]

export const menuCategories = [
  {
    id: 'north-indian',
    name: 'North Indian',
    icon: 'bowl',
    items: [
      { name: 'Butter Naan' },
      { name: 'Kulcha' },
      { name: 'Kadai Paneer' },
    ],
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: 'chopsticks',
    items: [
      { name: 'Hakka Noodles' },
      { name: 'Thukpa' },
      { name: 'Veg Manchurian', note: 'Served gravy or dry' },
    ],
  },
  {
    id: 'continental',
    name: 'Continental',
    icon: 'cutlery',
    items: [
      { name: 'Pasta' },
      { name: 'Burgers' },
      { name: 'Sandwiches' },
      { name: 'Peri Peri French Fries' },
    ],
  },
  {
    id: 'tandoor',
    name: 'Tandoor',
    icon: 'flame',
    items: [
      { name: 'Paneer Tikka' },
      { name: 'Tandoori Momos' },
      { name: 'Veg Kebabs' },
    ],
  },
  {
    id: 'chai-coffee-lassi',
    name: 'Chai, Coffee & Lassi',
    icon: 'teacup',
    items: [
      { name: 'Chai' },
      { name: 'Coffee' },
      { name: 'Cold Coffee' },
      { name: 'Lassi', note: 'Mentioned by guests' },
    ],
  },
]

export const featuredItems = [
  {
    title: 'Butter Naan & Kadai Paneer',
    category: 'North Indian',
    description: 'From the North Indian menu.',
    image: '/images/food-naan-paneer.jpg',
    alt: 'Butter naan, paneer curry, steamed rice and salad on a dark wooden table',
  },
  {
    title: 'Peri Peri French Fries',
    category: 'Continental',
    description: 'Described by a guest as very good.',
    image: '/images/food-sandwich-fries.jpg',
    alt: 'Grilled sandwiches and fries with ketchup on wooden boards',
  },
  {
    title: 'Cold Coffee',
    category: 'Chai, Coffee & Lassi',
    description: 'Chilled and topped with cream and chocolate.',
    image: '/images/food-cold-coffee.jpg',
    alt: 'Cold coffee in a terracotta cup with chocolate sauce and whipped cream',
  },
]

export const foodStrip = [
  { caption: 'Butter naan & paneer curry', image: '/images/food-naan-paneer.jpg', alt: 'Garlic naan with paneer curry, rice and salad' },
  { caption: 'Crisp rolls & chutney', image: '/images/food-chutney-rolls.jpg', alt: 'Crisp stuffed rolls on a black plate with herb chutney and pink sauce' },
  { caption: 'Creamy dal', image: '/images/food-dal.jpg', alt: 'Creamy dal finished with cream and coriander in a black bowl' },
  { caption: 'Thali with naan, chole & raita', image: '/images/food-thali.jpg', alt: 'Thali tray with naan, paneer, chole, raita and sliced onion' },
  { caption: 'Sandwiches & fries', image: '/images/food-sandwich-fries.jpg', alt: 'Grilled sandwiches and fries served on wooden boards' },
  { caption: 'Cold coffee, chocolate finish', image: '/images/food-cold-coffee.jpg', alt: 'Cold coffee with whipped cream and chocolate drizzle' },
]

export const story = {
  image: '/images/food-naan-paneer.jpg',
  alt: 'Paneer makhani in a copper bowl beside garlic naan and a basket of flatbread on a dark table',
  quote:
    'Inspired by your love for our chai, we’re back with a brand-new look, an expanded menu, and the same warmth you’ve always loved.',
  body:
    'Chai Bagaan Café is a pure-veg café near Nallurahalli Lake in Whitefield. From the first cup in the morning to late-night bites, it is a place to sit, eat and spend time together.',
}

export const gallery = [
  { image: '/images/food-thali.jpg', alt: 'Thali tray with naan, paneer, chole and raita', caption: 'Thali' },
  { image: '/images/food-chutney-rolls.jpg', alt: 'Crisp stuffed rolls on a black plate with chutney and pink sauce', caption: 'Crisp rolls & chutney' },
  { image: '/images/food-dal.jpg', alt: 'Creamy dal in a black serving dish', caption: 'Dal' },
  { image: '/images/food-cold-coffee.jpg', alt: 'Cold coffee with whipped cream and chocolate drizzle', caption: 'Cold coffee' },
]

export const reviews = [
  {
    name: 'Nehal Ashar',
    text: 'The burger & lassi are highly recommended. Peri peri french fries were very good. The ambience is amazing. Best vegetarian place for North indian food',
  },
  {
    name: 'Parvez alam',
    text: 'After 6 long years, meeting my friend again was already special—but stumbling upon this amazing restaurant made it unforgettable.\n\nFrom the moment we walked in, the ambiance felt warm, welcoming, and just perfect for reconnecting over old memories. The vibe, the lighting, the overall setup—it all created such a comfortable and happy space.\n\nA big shoutout to the staff for being incredibly polite, attentive, and genuinely kind. You could feel the effort they put into making every guest feel valued.\n\nAnd the food? Absolutely delightful—every bite just added to the experience!\n\nSometimes, the best memories are unplanned—and this place turned a simple reunion into something truly beautiful. Highly recommend to anyone looking for great food, great service, and even better vibes.',
  },
  {
    name: 'Himanshu jain',
    text: 'Very nice place. We had Veg Manchurian gravy and dry both. Both were delicious. We once had Mini meals. The north Indian taste as well was very good. This place serves all kinds of dishes and food is awesome here.',
  },
  {
    name: 'Shoba BK',
    text: 'Favorite hangout place. Pleasant surprise to have had fantastic private birthday celebration there. Great food,great place, Great ambience.',
  },
  {
    name: 'Mitha',
    text: 'The food options are vivid are spread across different cuisines. The ambience is good and the food is affordable too.',
  },
]

export const siteConfig = {
  name: 'Sri Jayam Marriage Service',
  proprietor: 'R. Viswanathan',
  tagline: 'Pure Vegetarian Catering with Tradition & Excellence',
  description:
    'Founded by Mr. R. Viswanathan, Sri Jayam Marriage Service offers premier pure vegetarian catering rooted in tradition, discipline, and sincere hospitality. With 30+ years of excellence, we serve families across Chennai and Tamil Nadu with authentic taste and dependable service.',
  phone: ['+91 94442 27423', '+91 94444 82842', '+91 90439 27423'],
  email: ['jayamcatering71@gmail.com', 'aswinviswanathan04@gmail.com'],
  branches: [
    {
      name: 'Main Branch',
      address: '28/53, Naickamar Street, West Mambalam, Chennai – 600033',
    },
    {
      name: 'Pondicherry Branch',
      address: 'Plot No.29, Easwaran Koil Street, Marry Oulgraet, Pondicherry – 10',
    },
  ],
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
  },
  whatsapp: '919444227423',
};

export const services = [
  {
    id: 'wedding-catering',
    title: 'Wedding Catering',
    subtitle: 'Grand Traditional Feasts',
    description:
      'We specialize in traditional Brahmin vegetarian catering and all kinds of South Indian weddings. Our strength lies in understanding rituals, food sequencing, precise timing, and attentive guest service—all essential elements of a successful wedding.',
    highlights: ['Traditional Brahmin catering', 'Banana-leaf meals', 'Ritual-aware sequencing', 'Attentive guest service'],
    icon: 'Heart',
    image: '/assets/services/wedding-catering.png',
  },
  {
    id: 'corporate-catering',
    title: 'Corporate Events',
    subtitle: 'Professional & Disciplined',
    description:
      'From corporate functions to community celebrations, we deliver consistent quality and authentic taste. Our team handles every event with the same discipline and sincere hospitality that has defined us for decades.',
    highlights: ['Corporate functions', 'Community celebrations', 'Consistent quality', 'Dependable service'],
    icon: 'Building2',
    image: '/assets/slider/premium-buffet-setup.jpg',
  },
  {
    id: 'temple-functions',
    title: 'Temple & Large Scale Functions',
    subtitle: 'Divine & Massive',
    description:
      'Expertise in handling large-scale events, including catering for 10,000+ guests for temple inaugurations and ashram events. We manage the complexity of massive gatherings with flawless execution.',
    highlights: ['10,000+ guest capacity', 'Temple inaugurations', 'Ashram events', 'Complex logistics'],
    icon: 'Sparkles',
    image: '/assets/slider/wedding-dining-setup.jpg',
  },
  {
    id: 'house-functions',
    title: 'House Functions',
    subtitle: 'Sacred Traditions',
    description:
      'Dedicated catering for Upanayanams, Sathabishekam celebrations, and other religious ceremonies. We respect the sanctity of every ritual and provide food that honors tradition.',
    highlights: ['Upanayanams', 'Sathabishekams', 'Religious ceremonies', 'Traditional recipes'],
    icon: 'Home',
    image: '/assets/services/traditional-seer-gifts.png',
  },
  {
    id: 'receptions',
    title: 'Receptions & Modern Events',
    subtitle: 'Contemporary Heritage',
    description:
      'Bridging tradition and modern preferences, our reception catering features diverse vegetarian menus that delight every guest while maintaining our core values of taste and quality.',
    highlights: ['Modern reception menus', 'Diverse buffet options', 'Fusion appetizers', 'Premium desserts'],
    icon: 'Crown',
    image: '/assets/services/live-snacks-stall.png',
  },
  {
    id: 'outdoor-catering',
    title: 'Statewide Service',
    subtitle: 'Serving Beyond Boundaries',
    description:
      'We serve families across Tamil Nadu, with a strong presence in Pondicherry, Pattukottai, Mayiladudurai, Karaikal, Thanjavur, and Chennai.',
    highlights: ['Pondicherry & Karaikal', 'Pattukottai & Mayiladudurai', 'Chennai & Thanjavur', 'Statewide logistics'],
    icon: 'TreePine',
    image: '/assets/others/statewide-service-banner.jpg',
  },
];

export const traditionalServices = [
  { title: 'Mangala Vaathiyam', subtitle: 'Traditional Wedding Music', icon: 'Music' },
  { title: 'Pushpam Maalaigal', subtitle: 'Flower Garlands', icon: 'Flower2' },
  { title: 'Seer Patchanangal', subtitle: 'Traditional Gift Items', icon: 'Gift' },
  { title: 'Vaitheega Samangal', subtitle: 'Priestly Arrangements', icon: 'BookOpen' },
  { title: 'Printing & Gift Bags', subtitle: 'Thambula Pai & Cards', icon: 'Printer' },
  { title: 'Aarthi Plates', subtitle: 'Ceremonial Plates', icon: 'CircleDot' },
  { title: 'Traditional Essentials', subtitle: 'Kolam, Vettrilai, Seeval, Pakku', icon: 'Leaf' },
  { title: 'Snacks Stalls', subtitle: 'Chats, Momos, Thattu Vadai', icon: 'UtensilsCrossed' },
  { title: 'Ice Cream & Sweet Stalls', subtitle: 'Premium Dessert Counters', icon: 'IceCreamCone' },
  { title: 'Peeda & Kattusaadham', subtitle: 'Traditional Specialties', icon: 'ChefHat' },
];

export const menuCategories = [
  {
    name: 'Traditional Meals',
    items: [
      { name: 'Grand South Indian Thali', description: 'A lavish spread of traditional rice, sambar, rasam, kootu, poriyal, and more served on a banana leaf' },
      { name: 'Chettinad Special Meal', description: 'Authentic Chettinad-style preparations with aromatic spices and traditional accompaniments' },
      { name: 'Brahmin Special Sapadu', description: 'Time-honored recipes prepared in the traditional Tamil Brahmin style with pure ingredients' },
      { name: 'Festival Special Thali', description: 'Seasonal delicacies curated for festive occasions with special sweet and savory items' },
    ],
  },
  {
    name: 'Starters & Snacks',
    items: [
      { name: 'Mini Idli Platter', description: 'Soft mini idlis with an assortment of chutneys and sambar for dipping' },
      { name: 'Crispy Medhu Vadai', description: 'Golden-fried urad dal vadais served with fresh coconut chutney' },
      { name: 'Paneer Tikka', description: 'Marinated cottage cheese grilled to perfection with aromatic spices' },
      { name: 'Masala Papadum Tower', description: 'Crispy pappadums topped with onion-tomato masala and fresh herbs' },
    ],
  },
  {
    name: 'Premium Buffet',
    items: [
      { name: 'Live Dosa Counter', description: 'Freshly made ghee-roast dosas, uttapam, and pesarattu at a live counter' },
      { name: 'Paneer Butter Masala', description: 'Rich and creamy paneer curry slow-cooked in tomato-cashew gravy' },
      { name: 'Vegetable Biryani', description: 'Fragrant basmati rice layered with fresh vegetables and aromatic spices' },
      { name: 'Variety Rice Station', description: 'Lemon rice, tamarind rice, curd rice, and coconut rice freshly prepared' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Traditional Payasam Trio', description: 'Paal payasam, semiya payasam, and rava kesari served warm' },
      { name: 'Gulab Jamun', description: 'Soft milk-solid dumplings soaked in rose-cardamom sugar syrup' },
      { name: 'Mysore Pak', description: 'Authentic ghee-rich Mysore Pak made with fresh besan and pure ghee' },
      { name: 'Jigarthanda Special', description: 'Classic Madurai-style chilled dessert with almond gum and ice cream' },
    ],
  },
  {
    name: 'Beverages',
    items: [
      { name: 'Filter Kaapi', description: 'Authentic South Indian filter coffee brewed with freshly ground beans' },
      { name: 'Masala Chai', description: 'Traditional spiced tea with cardamom, ginger, and fresh milk' },
      { name: 'Fresh Tender Coconut', description: 'Chilled tender coconut water served straight from the shell' },
      { name: 'Panneer Soda', description: 'Refreshing sparkling lemon-rose drink, a classic South Indian cooler' },
    ],
  },
];

export const testimonials = [
  {
    name: 'Lakshmi Narayanan',
    role: 'Wedding Client',
    text: 'Sri Jayam made our daughter\'s wedding absolutely magical. The food was extraordinary — every guest commented on the quality and variety. The traditional banana leaf meal was the highlight of the celebration.',
    rating: 5,
  },
  {
    name: 'Priya Venkatesh',
    role: 'Corporate Event',
    text: 'We have been using Sri Jayam for our company events for over 3 years. Their professionalism, consistency, and the quality of vegetarian food they deliver is unmatched in Chennai.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Family Function',
    text: 'The upanayanam ceremony catering was perfect. They understood exactly what was needed for the traditional ceremony and provided everything from food to flower arrangements. Truly a one-stop service.',
    rating: 5,
  },
  {
    name: 'Meenakshi Sundaram',
    role: 'Wedding Client',
    text: 'From the moment we contacted them, the team was responsive and helpful. The food quality exceeded our expectations. The live dosa counter was a huge hit with all our guests!',
    rating: 5,
  },
  {
    name: 'Anitha Balan',
    role: 'Reception Dinner',
    text: 'A truly premium experience. The presentation, the taste, the service — everything was world-class. Sri Jayam understands the meaning of luxury vegetarian catering. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Karthik Raman',
    role: 'Engagement Ceremony',
    text: 'The entire family was impressed with the quality and variety of food served. The desserts especially were a showstopper. Will definitely use their services for our wedding too.',
    rating: 5,
  },
];

export const stats = [
  { value: '30+', label: 'Years of Excellence' },
  { value: '10000+', label: 'Max Guests Managed' },
  { value: '100+', label: 'Expert Team Members' },
  { value: '100%', label: 'Pure Vegetarian' },
];

export const galleryImages = [
  { src: '/assets/slider/wedding-dining-setup.jpg', alt: 'Grand wedding dining setup', category: 'Weddings' },
  { src: '/assets/slider/premium-buffet-setup.jpg', alt: 'Premium buffet arrangement', category: 'Events' },
  { src: '/assets/services/wedding-catering.png', alt: 'Traditional South Indian Catering', category: 'Food' },
  { src: '/assets/services/wedding-flower-garlands.png', alt: 'Traditional Flower Decorations', category: 'Weddings' },
  { src: '/assets/services/traditional-wedding-music.png', alt: 'Traditional Wedding Music', category: 'Events' },
  { src: '/assets/services/traditional-seer-gifts.png', alt: 'Traditional Seer arrangements', category: 'Weddings' },
  { src: '/assets/services/live-snacks-stall.png', alt: 'Live Snacks Stall', category: 'Food' },
];


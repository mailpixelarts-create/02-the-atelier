export const BRAND = {
  name: 'THE ATELIER',
  tagline: 'Parisian Artisan Cafe & Patisserie',
  headline: 'Crafted Every Morning. Remembered Forever.',
  philosophy: 'Luxury begins with patience.'
} as const;

export const COLORS = {
  canvas: '#F8F4EE',
  warmWhite: '#FCFAF8',
  sand: '#E7DED2',
  darkCoffee: '#2C241F',
  chocolate: '#4A3A30',
  bronze: '#A27B5C',
  mutedOlive: '#8C9074',
  text: '#202020'
} as const;

export const FONTS = {
  display: "'Cormorant Garamond', 'Cormorant', Georgia, serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  caption: "'IBM Plex Mono', 'Courier New', monospace"
} as const;

export const NAV_LINKS = [
  { label: 'Morning Ritual', href: '#morning-ritual' },
  { label: 'Coffee', href: '#signature-coffee' },
  { label: 'Patisserie', href: '#seasonal-pastries' },
  { label: 'The Bakery', href: '#the-bakery' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Journal', href: '#journal' },
  { label: 'Reserve', href: '#reservation' }
] as const;

export const COFFEE_MENU = [
  {
    name: 'Espresso',
    origin: 'Colombia & Ethiopia Blend',
    description: 'A double shot pulled at 9 bars. Notes of dark chocolate, toasted walnut, and a whisper of blackberry.',
    price: '€4.50'
  },
  {
    name: 'Pour Over',
    origin: 'Ethiopia Yirgacheffe',
    description: 'Hand-poured through a ceramic V60. Bright jasmine aromatics with stone fruit sweetness.',
    price: '€5.50'
  },
  {
    name: 'Chemex',
    origin: 'Guatemala Huehuetenango',
    description: 'Slow-filtered for clarity. Milk chocolate, brown sugar, and a delicate acidity.',
    price: '€6.00'
  },
  {
    name: 'Cold Brew',
    origin: 'Brazil Santos',
    description: 'Steeped for eighteen hours. Smooth, full-bodied, with notes of caramel and roasted hazelnut.',
    price: '€5.50'
  },
  {
    name: 'House Blend',
    origin: 'The Atelier Signature',
    description: 'Our proprietary blend roasted in small batches. A balanced cup with honey sweetness.',
    price: '€4.00'
  }
] as const;

export const PASTRY_MENU = [
  {
    name: 'Croissant',
    description: 'Twenty-two layers of hand-laminated dough. Golden, shattering, and impossibly light.',
    price: '€3.50'
  },
  {
    name: 'Pain au Chocolat',
    description: 'Two batons of Valrhona dark chocolate wrapped in buttery, flaky pastry.',
    price: '€4.00'
  },
  {
    name: 'Tarte aux Fruits',
    description: 'Crisp almond frangipane base topped with seasonal fruits.',
    price: '€6.50',
    seasonal: true
  },
  {
    name: 'Pistachio Escargot',
    description: 'Swirled with house-made pistachio frangipane and topped with crushed Bronte pistachios.',
    price: '€4.50'
  },
  {
    name: 'Kouign-Amann',
    description: 'The Breton classic. Caramelized butter and sugar folded into bread dough.',
    price: '€5.00'
  },
  {
    name: 'Paris-Brest',
    description: 'Choux pastry ring filled with hazelnut praline mousseline cream.',
    price: '€7.00'
  }
] as const;

export const RITUAL_STAGES = [
  {
    time: '4:00 AM',
    title: 'Before Sunrise',
    description: 'The oven wakes before the city. Flour, butter, and water are measured with the precision of a perfumer blending notes.'
  },
  {
    time: '5:30 AM',
    title: 'The First Rise',
    description: 'In the quiet of dawn, croissants rest under linen cloths. Temperature and humidity are read like weather charts.'
  },
  {
    time: '6:30 AM',
    title: 'Coffee is Brewed',
    description: 'Single-origin beans from Ethiopia and Colombia are dialed in. Grind size adjusted by microns.'
  },
  {
    time: '7:00 AM',
    title: 'The Ovens Sing',
    description: 'Heat transforms dough into golden architecture. Twenty-two layers separate into shattering, caramelized crust.'
  },
  {
    time: '7:30 AM',
    title: 'Opening Doors',
    description: 'The bell chimes. A waft of warm viennoiserie meets the first customer. The ritual is complete.'
  }
] as const;

export const GALLERY_IMAGES = [
  { src: '/images/gallery-01.jpg', alt: 'Morning light through cafe windows', size: 'large' },
  { src: '/images/gallery-02.jpg', alt: 'Barista pouring latte art', size: 'small' },
  { src: '/images/gallery-03.jpg', alt: 'Fresh croissants on cooling rack', size: 'medium' },
  { src: '/images/gallery-04.jpg', alt: 'Ceramic cups on wooden shelf', size: 'small' },
  { src: '/images/gallery-05.jpg', alt: 'The Atelier storefront at dawn', size: 'large' },
  { src: '/images/gallery-06.jpg', alt: 'Coffee beans being roasted', size: 'medium' },
  { src: '/images/gallery-07.jpg', alt: 'Interior details and tilework', size: 'small' },
  { src: '/images/gallery-08.jpg', alt: 'Pastry chef dusting sugar', size: 'medium' },
  { src: '/images/gallery-09.jpg', alt: 'Handmade bread loaves', size: 'small' },
  { src: '/images/gallery-10.jpg', alt: 'Espresso machine close-up', size: 'large' },
  { src: '/images/gallery-11.jpg', alt: 'Outdoor seating in morning sun', size: 'medium' },
  { src: '/images/gallery-12.jpg', alt: 'The bar counter and pastry display', size: 'small' },
  { src: '/images/gallery-13.jpg', alt: 'Seasonal fruit tart detail', size: 'medium' },
  { src: '/images/gallery-14.jpg', alt: 'Reading corner with books', size: 'small' },
  { src: '/images/gallery-15.jpg', alt: 'Steam rising from coffee cup', size: 'large' },
  { src: '/images/gallery-16.jpg', alt: 'Kitchen team at work', size: 'small' },
  { src: '/images/gallery-17.jpg', alt: 'Window display with flowers', size: 'medium' },
  { src: '/images/gallery-18.jpg', alt: 'Evening ambiance at The Atelier', size: 'small' }
] as const;

export const JOURNAL_ENTRIES = [
  {
    date: 'June 2026',
    category: 'Coffee Origins',
    title: 'Following the Bean: A Journey to Yirgacheffe',
    excerpt: 'We traveled to the birthplace of coffee to source our newest single-origin.',
    readTime: '8 min read'
  },
  {
    date: 'May 2026',
    category: 'Pastry Arts',
    title: 'The 72-Hour Croissant: Why We Wait',
    excerpt: 'Our croissant dough ferments for three full days for unmatched depth.',
    readTime: '6 min read'
  },
  {
    date: 'April 2026',
    category: 'Design',
    title: 'Ceramics by Eloise: The Art of the Everyday',
    excerpt: 'Meet the Parisian ceramicist whose handmade cups give The Atelier its soul.',
    readTime: '5 min read'
  }
] as const;

export const CONTACT = {
  address: '42 Rue de Rivoli',
  city: 'Paris, 75001',
  country: 'France',
  phone: '+33 1 42 60 82 14',
  hours: 'Mon — Sat, 7:00 — 19:00'
} as const;

export const FOOTER = {
  credit: 'A LOOKBOOK Studio Experience',
  copyright: '© 2026 Norman James. Made with love by Empathy Studio.'
} as const;

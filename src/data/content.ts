import { FAQItem, Testimonial } from '../types';

export const TRUST_STATS = [
  { value: '50+ Tonnes', label: 'Monthly Import Volume' },
  { value: '-18°C', label: 'Unbroken Cold Storage' },
  { value: '250+', label: 'Commercial Clients' },
  { value: '100%', label: 'Quality & Weight Guarantee' },
];

export const FEATURES = [
  {
    id: 'cold-chain',
    title: 'Unbroken Cold-Chain Logistics',
    description: 'Our sub-zero warehouse and temperature-monitored refrigerated transport trucks guarantee your frozen poultry, beef, and fish remain strictly at -18°C from port to door.',
    iconName: 'ThermometerSnowflake',
    badge: 'Logistics Shield'
  },
  {
    id: 'direct-import',
    title: 'Direct Factory Importer Pricing',
    description: 'We import directly in 40ft reefer containers from certified international producers in the EU and South America — passing massive volume savings to your business.',
    iconName: 'Ship',
    badge: 'Direct Source'
  },
  {
    id: 'flexible-volume',
    title: 'Flexible Wholesale Quantities',
    description: 'Whether you need 5 master cartons for a boutique restaurant or 500 cartons for a regional distribution depot, we fulfill orders with speed and exact carton weight counts.',
    iconName: 'Boxes',
    badge: 'Scale Any Order'
  },
  {
    id: 'dedicated-account',
    title: 'Dedicated Account Specialist',
    description: 'Get a single point of contact who understands your menu or retail inventory needs, schedules recurring delivery routes, and provides immediate priority assistance.',
    iconName: 'UserCheck',
    badge: 'VIP B2B Service'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Chef Kwame Mensah',
    role: 'Executive Head Chef',
    business: 'The Royal Palm Beach Hotel & Grill',
    location: 'Osu, Accra',
    quote: "Dickson's has been our sole supplier for chicken leg quarters and Atlantic mackerel for 2 years. Their cold chain is rock solid — never a single defrosted carton, and the weight count per box is always exact.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-2',
    name: 'Madam Abena Osei',
    role: 'Managing Director',
    business: 'FreshChoice Supermarket Chain',
    location: 'Kumasi & Tema',
    quote: "As a supermarket operator, consistency and competitive pricing are everything. Dickson's direct importer rates allow us to maintain high profit margins while offering top Grade-A dressed chicken to our customers.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-3',
    name: 'Mr. David Boateng',
    role: 'Operations Lead',
    business: 'Savor Ghana Catering Services',
    location: 'Airport Residential Area, Accra',
    quote: "When catering events for 1,000+ guests, late or thawed deliveries mean disaster. Dickson's refrigerated trucks arrive right on schedule every single time. Best customer service team in the wholesale meat industry!",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the Minimum Order Quantity (MOQ) for wholesale orders?',
    answer: 'Our standard Minimum Order Quantity starts at just 5 master cartons per delivery order. For mixed orders (e.g., 2 cartons of chicken + 2 cartons of beef + 1 carton of fish), we accommodate custom bundles. Container-load discounts apply for orders over 100 cartons.',
    category: 'ordering'
  },
  {
    id: 'faq-2',
    question: 'How do you preserve the cold chain during transportation?',
    answer: 'All goods are stored in our industrial sub-zero cold storage facilities operating strictly between -18°C and -22°C. Goods are dispatched directly into insulated thermal vehicles equipped with active freezer monitoring units, ensuring zero thermal decay during transit.',
    category: 'quality'
  },
  {
    id: 'faq-3',
    question: 'Which areas in Ghana do you deliver to?',
    answer: 'We provide scheduled cold-truck deliveries across Greater Accra, Tema, Kumasi, Takoradi, Koforidua, and surrounding commercial hubs. Regional distribution buyers can also collect directly from our primary cold storage hubs.',
    category: 'delivery'
  },
  {
    id: 'faq-4',
    question: 'How are prices calculated for bulk containers and repeat orders?',
    answer: 'Wholesale prices are based on official market tier structures (Carton Tier, Pallet Tier, and Full Container Load Tier). Active commercial accounts with weekly or monthly standing orders receive locked contract rates and priority delivery slots.',
    category: 'payment'
  },
  {
    id: 'faq-5',
    question: 'Can commercial clients inspect products or visit the cold store warehouse?',
    answer: 'Yes! We welcome verified restaurant managers, hotel buyers, and grocers to inspect product samples and view our facility standards at our main Accra cold storage depot by appointment.',
    category: 'quality'
  },
  {
    id: 'faq-6',
    question: 'What payment methods do you accept for business purchases?',
    answer: 'We accept Bank Wire Transfer, Direct Corporate Deposit, Mobile Money (MTN MoMo Business Pay, Telecel Cash), and Certified Company Checks upon account approval.',
    category: 'payment'
  }
];

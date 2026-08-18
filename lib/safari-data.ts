export type Safari = { slug: string; title: string; duration: string; category: string; summary: string; image: string; destinations: string[]; highlights: string[] }

export const safaris: Safari[] = [
  { slug: 'gorilla-chimpanzee-big-five', title: 'Uganda Gorilla, Chimpanzee & Big Five Safari', duration: '11 days / 10 nights', category: 'Wildlife', summary: 'Uganda at its most complete, connecting Entebbe, primate forests, savannah wildlife and the wild north.', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=85', destinations: ['Entebbe', 'Kibale', 'Queen Elizabeth', 'Bwindi', 'Murchison Falls', 'Kidepo'], highlights: ['Gorilla experience in Bwindi', 'Chimpanzee experience in Kibale', 'Big Five wildlife viewing', 'Scenic multi-park travel'] },
  { slug: 'chimpanzees-queen-elizabeth', title: '4 Days Chimpanzees & Queen Elizabeth', duration: '4 days / 3 nights', category: 'Primates & Wildlife', summary: 'A compact chimpanzee and wildlife adventure through Kibale and Queen Elizabeth National Parks.', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1400&q=85', destinations: ['Kibale', 'Queen Elizabeth'], highlights: ['Chimpanzee experience', 'Kibale National Park', 'Queen Elizabeth wildlife', 'Three nights in Uganda’s west'] },
  { slug: 'queen-elizabeth-short-safari', title: '3 Day Trip to Queen Elizabeth National Park', duration: '3 days / 2 nights', category: 'Wildlife', summary: 'An unforgettable short journey through scenic landscapes and wildlife-rich Queen Elizabeth National Park.', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1400&q=85', destinations: ['Queen Elizabeth National Park'], highlights: ['Wildlife viewing', 'Lion spotting opportunities', 'Scenic landscapes', 'Short, focused safari'] },
  { slug: 'east-uganda-waterfalls', title: '6 Day Sezibwa Falls, Jinja, Kagulu Hill & Sipi Falls', duration: '6 days / 5 nights', category: 'Nature, Culture & Hiking', summary: 'A restorative eastern Uganda journey blending nature, culture, hiking and relaxation.', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1400&q=85', destinations: ['Sezibwa Falls', 'Jinja', 'Kagulu Hill', 'Sipi Falls'], highlights: ['Sezibwa Falls', 'Source of the Nile in Jinja', 'Kagulu Hill', 'Sipi Falls, hiking and relaxation'] },
  { slug: 'murchison-falls-wilderness', title: 'Murchison Falls Wilderness', duration: '5 days / 4 nights', category: 'Wildlife', summary: 'The Nile narrows through the park, creating one of Uganda’s most powerful wilderness spectacles.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85', destinations: ['Murchison Falls', 'Ziwa Rhino Sanctuary'], highlights: ['Rhino tracking', 'Nile boat safari', 'Top of the falls hike', 'Savannah game drives'] },
  { slug: 'kidepo-wild-north', title: 'Kidepo Valley: The Wild North', duration: '7 days / 6 nights', category: 'Remote', summary: 'A remote, rugged expedition through vast valleys and a culture-rich northern landscape.', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=85', destinations: ['Kidepo Valley', 'Karamoja'], highlights: ['Remote game drives', 'Narus Valley', 'Karamojong homestead visit', 'Dramatic mountain horizons'] },
]

export const destinations = [
  { slug: 'bwindi', name: 'Bwindi Impenetrable Forest', region: 'South-west Uganda', description: 'An ancient rainforest where gorilla trekking becomes a quiet, humbling encounter.', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85', best: 'June to September, December to February' },
  { slug: 'kibale', name: 'Kibale National Park', region: 'Western Uganda', description: 'The primate capital of East Africa, alive with forest calls and green trails.', image: 'https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=85', best: 'All year; drier trails June to September' },
  { slug: 'queen-elizabeth', name: 'Queen Elizabeth National Park', region: 'Western Uganda', description: 'Crater lakes, open plains, tree-climbing lions and the life-giving Kazinga Channel.', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85', best: 'June to September and December to February' },
  { slug: 'murchison-falls', name: 'Murchison Falls', region: 'Northern Uganda', description: 'The Nile thunders through a narrow cleft in Uganda’s largest protected area.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85', best: 'December to February; June to September' },
  { slug: 'kidepo', name: 'Kidepo Valley', region: 'North-east Uganda', description: 'Remote, rugged and deeply rewarding wilderness at the edge of the Karamoja plains.', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85', best: 'June to September' },
  { slug: 'jinja', name: 'Jinja & the Source of the Nile', region: 'Eastern Uganda', description: 'River energy, adventure and a warm welcome in Uganda’s historic adventure capital.', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85', best: 'All year' },
]

export const experiences = [
  { slug: 'gorilla-trekking', title: 'Gorilla trekking', description: 'Walk into the ancient green of Bwindi for a rare and respectful encounter.', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'chimpanzee-tracking', title: 'Chimpanzee tracking', description: 'Follow bright calls and forest trails in the primate capital of Kibale.', image: 'https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'wildlife-safaris', title: 'Wildlife safaris', description: 'Read the tracks, follow the light and meet Uganda’s wild residents.', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'culture-community', title: 'Culture & community', description: 'Travel with curiosity through food, stories, craft and living traditions.', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85' },
]

export const articles = [
  { slug: 'when-to-go-uganda', category: 'Planning', title: 'When is the best time to visit Uganda?', excerpt: 'A month-by-month guide to rainforests, savannah and gorilla trekking.', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'why-travel-with-purpose', category: 'Responsible travel', title: 'Why meaningful travel matters', excerpt: 'How a safari can leave something good behind for landscapes and communities.', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'packing-for-uganda', category: 'Planning', title: 'What to pack for a Uganda safari', excerpt: 'Practical notes from our journey designers for a lighter, more comfortable trip.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
]

export const journeyCountries = [
  {
    slug: 'uganda', name: 'Uganda', tagline: 'The Pearl of Africa', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85',
    journeys: [
      { slug: 'gorilla-chimpanzee-big-five', title: 'Gorilla, Chimpanzee & Big Five', duration: '11 days / 10 nights', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85' },
      { slug: 'chimpanzees-queen-elizabeth', title: 'Chimpanzees & Queen Elizabeth', duration: '4 days / 3 nights', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85' },
      { slug: 'east-uganda-waterfalls', title: '6 Day Sezibwa Falls, Jinja, Kagulu Hill & Sipi Falls', duration: '6 days / 5 nights', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=85' },
      { slug: 'queen-elizabeth-short-safari', title: '3 Day Queen Elizabeth National Park', duration: '3 days / 2 nights', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85' },
    ],
  },
  {
    slug: 'rwanda', name: 'Rwanda', tagline: 'Land of a Thousand Hills', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=85',
    journeys: [{ slug: 'volcanoes-lake-kivu', title: 'Volcanoes & Lake Kivu', duration: '8 days / 7 nights', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85' }],
  },
  {
    slug: 'kenya', name: 'Kenya', tagline: 'Where Safari Was Born', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85',
    journeys: [{ slug: 'masai-mara-grande', title: 'Masai Mara Grande Migration', duration: '8 days / 7 nights', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85' }, { slug: 'nairobi-amboseli', title: 'Nairobi & Amboseli', duration: '7 days / 6 nights', image: 'https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=85' }],
  },
  {
    slug: 'tanzania', name: 'Tanzania', tagline: "Africa's Greatest Stage", image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1600&q=85',
    journeys: [{ slug: 'serengeti-ngorongoro', title: 'Serengeti & Ngorongoro', duration: '10 days / 9 nights', image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=85' }],
  },
]

export const journeysByRegion = Object.fromEntries(journeyCountries.map((country) => [country.name + ' Safaris', country.journeys.map(({ slug, title }) => ({ slug, title }))]))

export const destinationDetails = [
  { slug: 'uganda', name: 'Uganda', tagline: 'The Pearl of Africa', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85', copy: 'Rainforest, savannah, crater lakes and the source of the Nile — Uganda is a country that rewards curious travellers.' },
  { slug: 'rwanda', name: 'Rwanda', tagline: 'Land of a Thousand Hills', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=85', copy: 'Volcanoes, thoughtful conservation and warm hospitality come together in one beautifully compact country.' },
  { slug: 'kenya', name: 'Kenya', tagline: 'Where Safari Was Born', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85', copy: 'Open plains, big skies and enduring wildlife stories across the Masai Mara and the Great Rift Valley.' },
  { slug: 'tanzania', name: 'Tanzania', tagline: "Africa's Greatest Stage", image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1600&q=85', copy: 'Follow the Serengeti rhythm from Ngorongoro to the coast, with time to look beyond the headline moments.' },
]

export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85', alt: 'Elephant in East African savannah', label: 'The wild north' },
  { src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85', alt: 'Lush rainforest canopy', label: 'Into the forest' },
  { src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85', alt: 'Wildlife beside a lake', label: 'Water and wilderness' },
  { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=85', alt: 'Waterfall in a green landscape', label: 'The long way round' },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85', alt: 'Open road through nature', label: 'Road notes' },
  { src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85', alt: 'Traveller taking in a landscape', label: 'Make room for wonder' },
  { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85', alt: 'Golden savannah at sunset', label: 'Last light' },
  { src: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85', alt: 'Green forest path', label: 'Forest hours' },
  { src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85', alt: 'Lion in the wild', label: 'Read the tracks' },
  { src: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=85', alt: 'Zebra in open country', label: 'Open country' },
  { src: 'https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=85', alt: 'Mountain landscape', label: 'Higher ground' },
  { src: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85', alt: 'Tropical leaves', label: 'A softer green' },
]

export const destByRegion = {
  'Uganda': [
    { slug: 'bwindi', name: 'Bwindi Impenetrable Forest' },
    { slug: 'kibale', name: 'Kibale National Park' },
    { slug: 'queen-elizabeth', name: 'Queen Elizabeth National Park' },
    { slug: 'murchison-falls', name: 'Murchison Falls' },
    { slug: 'kidepo', name: 'Kidepo Valley' },
    { slug: 'jinja', name: 'Jinja & Source of the Nile' },
  ],
  'Kenya': [
    { slug: 'masai-mara', name: 'Masai Mara' },
    { slug: 'amboseli', name: 'Amboseli' },
  ],
  'Rwanda': [
    { slug: 'volcanoes', name: 'Volcanoes National Park' },
  ],
  'Tanzania': [
    { slug: 'serengeti', name: 'Serengeti' },
    { slug: 'ngorongoro', name: 'Ngorongoro' },
  ],
}

export const navItems = [
  ['Safaris', '/safaris'], ['Destinations', '/destinations'], ['Experiences', '/experiences'], ['About us', '/about'], ['Special packages', '/offers'], ['Blog', '/blog'], ['Contact', '/contact'],
]

export function getSafari(slug: string) { return safaris.find((item) => item.slug === slug) }
export function getDestination(slug: string) { return destinations.find((item) => item.slug === slug) ?? destinationDetails.find((item) => item.slug === slug) }
export function getExperience(slug: string) { return experiences.find((item) => item.slug === slug) }
export function getArticle(slug: string) { return articles.find((item) => item.slug === slug) }

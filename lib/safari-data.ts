export type Safari = { slug: string; title: string; duration: string; category: string; summary: string; image: string; destinations: string[]; highlights: string[] }

export const safaris: Safari[] = [
  { slug: 'gorilla-chimpanzee-big-five', title: 'Gorilla, Chimpanzee & Big Five Safari', duration: '11 days / 10 nights', category: 'Wildlife', summary: 'Uganda at its most complete: primates, savannah wildlife, the Nile and misty forests.', image: '/images/lion-lioness-resting.jpg', destinations: ['Kibale', 'Queen Elizabeth', 'Bwindi', 'Murchison Falls'], highlights: ['Gorilla trekking in Bwindi', 'Chimpanzee tracking in Kibale', 'Game drives and boat safaris', 'Local community encounters'] },
  { slug: 'chimpanzees-queen-elizabeth', title: 'Chimpanzees & Queen Elizabeth', duration: '4 days / 3 nights', category: 'Primates', summary: 'A compact forest and savannah escape for curious travellers who want two worlds in one journey.', image: '/images/baboon.jpg', destinations: ['Kibale', 'Queen Elizabeth'], highlights: ['Chimpanzee tracking', 'Kasenyi plains game drive', 'Kazinga Channel cruise', 'Crater lake scenery'] },
  { slug: 'east-uganda-waterfalls', title: 'East Uganda Waterfalls & Culture', duration: '6 days / 5 nights', category: 'Nature & Culture', summary: 'Waterfalls, coffee, sacred sites and warm eastern hospitality, shaped into an easy-going route.', image: '/images/giraffe-trees.jpg', destinations: ['Jinja', 'Sipi Falls', 'Sezibwa Falls', 'Kagulu Hill'], highlights: ['Source of the Nile', 'Sipi coffee experience', 'Cultural storytelling', 'Scenic hill walks'] },
  { slug: 'murchison-falls-wilderness', title: 'Murchison Falls Wilderness', duration: '5 days / 4 nights', category: 'Wildlife', summary: 'The Nile narrows through the park, creating one of Uganda’s most powerful wilderness spectacles.', image: '/images/rhino-single.jpg', destinations: ['Murchison Falls', 'Ziwa Rhino Sanctuary'], highlights: ['Rhino tracking', 'Nile boat safari', 'Top of the falls hike', 'Savannah game drives'] },
  { slug: 'kidepo-wild-north', title: 'Kidepo Valley: The Wild North', duration: '7 days / 6 nights', category: 'Remote', summary: 'A remote, rugged expedition through vast valleys and a culture-rich northern landscape.', image: '/images/elephants-palms.jpg', destinations: ['Kidepo Valley', 'Karamoja'], highlights: ['Remote game drives', 'Narus Valley', 'Karamojong homestead visit', 'Dramatic mountain horizons'] },
]

export const destinations = [
  { slug: 'bwindi', name: 'Bwindi Impenetrable Forest', region: 'South-west Uganda', description: 'An ancient rainforest where gorilla trekking becomes a quiet, humbling encounter.', image: '/images/sinza-gorilla.jpg', best: 'June to September, December to February' },
  { slug: 'kibale', name: 'Kibale National Park', region: 'Western Uganda', description: 'The primate capital of East Africa, alive with forest calls and green trails.', image: '/images/sinza-baboon-forest.jpg', best: 'All year; drier trails June to September' },
  { slug: 'queen-elizabeth', name: 'Queen Elizabeth National Park', region: 'Western Uganda', description: 'Crater lakes, open plains, tree-climbing lions and the life-giving Kazinga Channel.', image: '/images/sinza-tree-lions-tall.jpg', best: 'June to September and December to February' },
  { slug: 'murchison-falls', name: 'Murchison Falls', region: 'Northern Uganda', description: 'The Nile thunders through a narrow cleft in Uganda’s largest protected area.', image: '/images/sinza-boat-safari.jpg', best: 'December to February; June to September' },
  { slug: 'kidepo', name: 'Kidepo Valley', region: 'North-east Uganda', description: 'Remote, rugged and deeply rewarding wilderness at the edge of the Karamoja plains.', image: '/images/sinza-elephants.jpeg', best: 'June to September' },
  { slug: 'jinja', name: 'Jinja & the Source of the Nile', region: 'Eastern Uganda', description: 'River energy, adventure and a warm welcome in Uganda’s historic adventure capital.', image: '/images/sinza-boat-safari.jpg', best: 'All year' },
]

export const experiences = [
  { slug: 'gorilla-trekking', title: 'Gorilla trekking', description: 'Walk into the ancient green of Bwindi for a rare and respectful encounter.', image: '/images/baboon.jpg' },
  { slug: 'chimpanzee-tracking', title: 'Chimpanzee tracking', description: 'Follow bright calls and forest trails in the primate capital of Kibale.', image: '/images/lions-tree-tall.jpg' },
  { slug: 'wildlife-safaris', title: 'Wildlife safaris', description: 'Read the tracks, follow the light and meet Uganda’s wild residents.', image: '/images/lioness-stalking.jpg' },
  { slug: 'culture-community', title: 'Culture & community', description: 'Travel with curiosity through food, stories, craft and living traditions.', image: '/images/giraffe-portrait.jpg' },
]

export const articles = [
  { slug: 'when-to-go-uganda', category: 'Planning', title: 'When is the best time to visit Uganda?', excerpt: 'A month-by-month guide to rainforests, savannah and gorilla trekking.', image: '/images/sinza-zebra-family.jpg' },
  { slug: 'why-travel-with-purpose', category: 'Responsible travel', title: 'Why meaningful travel matters', excerpt: 'How a safari can leave something good behind for landscapes and communities.', image: '/images/sinza-boat-safari.jpg' },
  { slug: 'packing-for-uganda', category: 'Safari tips', title: 'What to pack for a Uganda safari', excerpt: 'Practical notes from our journey designers for a lighter, more comfortable trip.', image: '/images/sinza-lion-grass.jpg' },
  { slug: 'gorilla-trekking-guide', category: 'Wildlife', title: 'A respectful guide to gorilla trekking', excerpt: 'What the forest asks of you, and what the encounter gives back.', image: '/images/sinza-gorilla.jpg' },
  { slug: 'tree-climbing-lions', category: 'Wildlife', title: 'The lions who climb trees', excerpt: 'A closer look at Queen Elizabeth’s remarkable Ishasha lions.', image: '/images/sinza-tree-lions-tall.jpg' },
  { slug: 'first-safari', category: 'Travel inspiration', title: 'What your first safari feels like', excerpt: 'The sounds, stillness and small surprises that make a day in the wild.', image: '/images/sinza-lion-walk.jpg' },
  { slug: 'safari-photography', category: 'Photography', title: 'Making space for the light', excerpt: 'Simple fieldcraft for photographing wildlife without rushing the moment.', image: '/images/sinza-baboon-monochrome.jpg' },
  { slug: 'rwanda-uganda', category: 'Destinations', title: 'Two forests, one extraordinary journey', excerpt: 'Pair Uganda’s rainforest with Rwanda’s volcanic landscapes.', image: '/images/sinza-gorilla.jpg' },
]

export const journeyCountries = [
  {
    slug: 'uganda', name: 'Uganda', tagline: 'The Pearl of Africa', image: '/images/elephants-wetland.jpg',
    journeys: [
      { slug: 'gorilla-chimpanzee-big-five', title: 'Gorilla, Chimpanzee & Big Five', duration: '11 days / 10 nights', image: '/images/lion-lioness-resting.jpg' },
      { slug: 'chimpanzees-queen-elizabeth', title: 'Chimpanzees & Queen Elizabeth', duration: '4 days / 3 nights', image: '/images/baboon.jpg' },
      { slug: 'east-uganda-waterfalls', title: 'East Uganda Waterfalls & Culture', duration: '6 days / 5 nights', image: '/images/giraffe-trees.jpg' },
    ],
  },
  {
    slug: 'rwanda', name: 'Rwanda', tagline: 'Land of a Thousand Hills', image: '/images/rhino-single.jpg',
    journeys: [{ slug: 'volcanoes-lake-kivu', title: 'Volcanoes & Lake Kivu', duration: '8 days / 7 nights', image: '/images/rhinos-pair.jpg' }],
  },
  {
    slug: 'kenya', name: 'Kenya', tagline: 'Where Safari Was Born', image: '/images/lioness-stalking.jpg',
    journeys: [{ slug: 'masai-mara-grande', title: 'Masai Mara Grande Migration', duration: '8 days / 7 nights', image: '/images/lions-ridge.jpg' }, { slug: 'nairobi-amboseli', title: 'Nairobi & Amboseli', duration: '7 days / 6 nights', image: '/images/elephants-palms.jpg' }],
  },
  {
    slug: 'tanzania', name: 'Tanzania', tagline: "Africa's Greatest Stage", image: '/images/lions-tree.jpg',
    journeys: [{ slug: 'serengeti-ngorongoro', title: 'Serengeti & Ngorongoro', duration: '10 days / 9 nights', image: '/images/lion-lioness-ridge.jpg' }],
  },
]

export const journeysByRegion = Object.fromEntries(journeyCountries.map((country) => [country.name + ' Safaris', country.journeys.map(({ slug, title }) => ({ slug, title }))]))

export const destinationDetails = [
  { slug: 'uganda', name: 'Uganda', tagline: 'The Pearl of Africa', image: '/images/sinza-lion-grass.jpg', copy: 'Rainforest, savannah, crater lakes and the source of the Nile — Uganda is a country that rewards curious travellers.' },
  { slug: 'rwanda', name: 'Rwanda', tagline: 'Land of a Thousand Hills', image: '/images/sinza-gorilla.jpg', copy: 'Volcanoes, thoughtful conservation and warm hospitality come together in one beautifully compact country.' },
  { slug: 'kenya', name: 'Kenya', tagline: 'Where Safari Was Born', image: '/images/sinza-zebra-family.jpg', copy: 'Open plains, big skies and enduring wildlife stories across the Masai Mara and the Great Rift Valley.' },
  { slug: 'tanzania', name: "Tanzania", tagline: "Africa's Greatest Stage", image: '/images/sinza-lion-walk.jpg', copy: 'Follow the Serengeti rhythm from Ngorongoro to the coast, with time to look beyond the headline moments.' },
]

export const galleryImages = [
  { src: '/images/sinza-lions-horizon.jpeg', alt: 'A lion and lioness walking along a green horizon', label: 'The family walk' },
  { src: '/images/sinza-lion-portrait.jpeg', alt: 'A lioness moving through open grassland', label: 'Ancient guardian' },
  { src: '/images/sinza-lion-walking.jpeg', alt: 'A lion walking across a Ugandan landscape', label: 'On the move' },
  { src: '/images/sinza-lion-landscape.jpeg', alt: 'A lioness crossing a green landscape', label: 'Read the tracks' },
  { src: '/images/sinza-lion-family.jpeg', alt: 'A lion and lioness resting together on the ridge', label: 'The pride at rest' },
  { src: '/images/sinza-giraffe.jpeg', alt: 'A giraffe framed by green woodland', label: 'Higher branches' },
  { src: '/images/sinza-rhinos.jpeg', alt: 'Two rhinos beneath a tree in tall grass', label: 'A quiet pair' },
  { src: '/images/sinza-baboons.jpeg', alt: 'A baboon family moving through forest grass', label: 'Into the forest' },
  { src: '/images/sinza-elephants.jpeg', alt: 'An elephant family crossing open wetland', label: 'The long line' },
  { src: '/images/sinza-tree-lions.jpeg', alt: 'Lions resting in a broad savannah tree', label: 'Tree climbers' },
  { src: '/images/sinza-baboon-portrait.jpeg', alt: 'A baboon watching through forest leaves', label: 'Wild country' },
  { src: '/images/sinza-rhino-group.png', alt: 'A group of rhinos resting in lush green woodland', label: 'Quiet giants' },
  { src: '/images/sinza-zebra-family.jpg', alt: 'A family of zebras gathered closely in warm grassland light', label: 'Striped together' },
  { src: '/images/sinza-lion-grass.jpg', alt: 'A lioness moving through Uganda’s green plains', label: 'Across the plain' },
  { src: '/images/sinza-boat-safari.jpg', alt: 'A family enjoying a guided boat safari on the Nile', label: 'On the river' },
  { src: '/images/sinza-baboon-forest.jpg', alt: 'A baboon watching from a leafy forest canopy', label: 'Forest watch' },
  { src: '/images/sinza-tree-lions-tall.jpg', alt: 'Two lions resting high in a broad tree', label: 'A room with a view' },
  { src: '/images/sinza-gorilla.jpg', alt: 'A mountain gorilla surrounded by lush forest leaves', label: 'Into the green' },
  { src: '/images/sinza-lion-walk.jpg', alt: 'A lion walking across a sunlit savannah', label: 'The long walk' },
  { src: '/images/sinza-baboon-monochrome.jpg', alt: 'A baboon framed by forest branches in monochrome', label: 'Quiet intelligence' },
  { src: '/images/sinza-rhino-pair.jpg', alt: 'Two rhinos resting together beneath woodland trees', label: 'Gentle giants' },
  { src: '/images/sinza-giraffe-landscape.jpg', alt: 'A giraffe browsing beneath a wide acacia tree', label: 'Higher branches' },
  { src: '/images/sinza-baboon-family.jpg', alt: 'A baboon family moving through tall green grass', label: 'Close company' },
  { src: '/images/sinza-giraffe-monochrome.jpg', alt: 'A giraffe emerging through a monochrome savannah canopy', label: 'The quiet height' },
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

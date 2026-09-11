export type SafariDay = { day: string; title: string; details: string[] }
export type Safari = { slug: string; title: string; duration: string; category: string; summary: string; image: string; destinations: string[]; highlights: string[]; itinerary?: SafariDay[] }

export const safaris: Safari[] = [
  { slug: 'gorilla-chimpanzee-big-five', title: 'Gorilla, Chimpanzee & Big Five Safari', duration: '11 days / 10 nights', category: 'Wildlife', summary: 'Uganda at its most complete: primates, savannah wildlife, the Nile and misty forests.', image: '/images/wildlife-chimp-rainforest.jpg', destinations: ['Kibale', 'Queen Elizabeth', 'Bwindi', 'Murchison Falls'], highlights: ['Gorilla trekking in Bwindi', 'Chimpanzee tracking in Kibale', 'Game drives and boat safaris', 'Local community encounters'] },
  { slug: 'chimpanzees-queen-elizabeth', title: 'Chimpanzees & Queen Elizabeth', duration: '4 days / 3 nights', category: 'Primates', summary: 'A compact forest and savannah escape for curious travellers who want two worlds in one journey.', image: '/images/wildlife-chimp-forest.jpg', destinations: ['Kibale', 'Queen Elizabeth'], highlights: ['Chimpanzee tracking', 'Kasenyi plains game drive', 'Kazinga Channel cruise', 'Crater lake scenery'] },
  { slug: 'east-uganda-waterfalls', title: 'East Uganda Waterfalls & Culture', duration: '6 days / 5 nights', category: 'Nature & Culture', summary: 'Waterfalls, coffee, sacred sites and warm eastern hospitality, shaped into an easy-going route.', image: '/images/giraffe-trees.jpg', destinations: ['Jinja', 'Sipi Falls', 'Sezibwa Falls', 'Kagulu Hill'], highlights: ['Source of the Nile', 'Sipi coffee experience', 'Cultural storytelling', 'Scenic hill walks'] },
  { slug: 'murchison-falls-wilderness', title: 'Murchison Falls Wilderness', duration: '5 days / 4 nights', category: 'Wildlife', summary: 'The Nile narrows through the park, creating one of Uganda’s most powerful wilderness spectacles.', image: '/images/rhino-single.jpg', destinations: ['Murchison Falls', 'Ziwa Rhino Sanctuary'], highlights: ['Rhino tracking', 'Nile boat safari', 'Top of the falls hike', 'Savannah game drives'] },
  { slug: 'chimpanzee-wildlife-adventure', title: 'Chimpanzee & Wildlife Adventure', duration: '4 days / 3 nights', category: 'Primates', summary: 'Track chimpanzees in Kibale, cruise the Kazinga Channel and search the plains of Queen Elizabeth National Park.', image: '/images/sinza-baboon-forest.jpg', destinations: ['Kibale', 'Queen Elizabeth'], highlights: ['Bigodi wetlands walk', 'Chimpanzee tracking', 'Kasenyi plains game drive', 'Kazinga Channel cruise', 'Lake Katwe crater lakes'], itinerary: [
    { day: 'Day 1', title: 'Kampala to Kibale', details: ['Pickup after breakfast and briefing with your guide.', 'Drive west with Rwenzori views and a lunch stop.', 'Check in, then explore Bigodi Wetlands for birds and forest life.'] },
    { day: 'Day 2', title: 'Chimpanzee tracking to Queen Elizabeth', details: ['Early breakfast and park headquarters briefing.', 'Track chimpanzees with an experienced ranger.', 'Transfer to Queen Elizabeth National Park for the evening.'] },
    { day: 'Day 3', title: 'Game drive and Kazinga Channel', details: ['Search for lions, leopards, elephants, buffalo and antelope on the Kasenyi plains.', 'Rest at the lodge before an afternoon boat cruise.', 'Spot hippos, crocodiles, elephants and hundreds of bird species.'] },
    { day: 'Day 4', title: 'Crater lakes, Equator and return', details: ['Visit Lake Katwe, salt pans and the crater lakes region.', 'Stop at the Equator for photos and lunch.', 'Transfer onwards to Kampala or Entebbe Airport.'] },
  ] },
  { slug: 'queen-elizabeth-kazinga', title: 'Queen Elizabeth & Kazinga Channel', duration: '3 days / 2 nights', category: 'Wildlife', summary: 'A compact safari of Equator stories, big-cat country and a close-up boat cruise on the Kazinga Channel.', image: '/images/sinza-boat-safari.jpg', destinations: ['Queen Elizabeth National Park', 'Equator'], highlights: ['Equator Line stop', 'Kasenyi plains game drive', 'Kazinga Channel boat cruise', 'Mbarara lunch stop'], itinerary: [
    { day: 'Day 1', title: 'The Equator to Queen Elizabeth', details: ['Pickup in Kampala or Entebbe and drive through banana plantations and Ankole cattle country.', 'Stop at the Equator for photographs, crafts and lunch.', 'Arrive at your lodge in Queen Elizabeth for dinner and rest.'] },
    { day: 'Day 2', title: 'Game drive and boat cruise', details: ['Depart at 6:30am for the Kasenyi plains in search of lions, leopards, elephants, hyenas and buffalo.', 'Return for breakfast and downtime.', 'Cruise the Kazinga Channel among hippos, crocodiles, elephants and birdlife.'] },
    { day: 'Day 3', title: 'Return to Kampala', details: ['Enjoy breakfast before beginning the journey east.', 'Pause for a local lunch in Mbarara.', 'Arrive in Kampala with your safari story complete.'] },
  ] },
  { slug: 'eastern-uganda-waterfalls-culture', title: 'Sezibwa, Jinja, Kagulu Hill & Sipi Falls', duration: '6 days / 5 nights', category: 'Nature & Culture', summary: 'Waterfalls, royal stories, coffee and the Source of the Nile in a richly textured journey through Eastern Uganda.', image: '/images/sinza-boat-safari.jpg', destinations: ['Sezibwa Falls', 'Jinja', 'Kagulu Hill', 'Sipi Falls'], highlights: ['Buganda Kingdom stories', 'Source of the Nile', 'Kagulu Hill hike', 'Three Sipi Falls', 'Arabica coffee experience'], itinerary: [
    { day: 'Day 1', title: 'Kampala, Sezibwa Falls and Jinja', details: ['Walk at Sezibwa Falls and hear cultural stories of the Buganda Kingdom.', 'Continue to Jinja and visit the Source of the Nile.', 'Optional boat cruise, quad biking or craft shopping.'] },
    { day: 'Day 2', title: 'Jinja to Kagulu Hill', details: ['Drive to Kagulu Hill through the Busoga landscape.', 'Hike the hill and hear royal migration stories.', 'Enjoy a picnic or local lunch, with optional drumming in the evening.'] },
    { day: 'Day 3', title: 'Kagulu to Sipi Falls', details: ['Travel via Mbale with views of Mount Elgon and rural communities.', 'Take a guided walk to one of the three waterfalls.'] },
    { day: 'Day 4', title: 'Sipi Falls in depth', details: ['Hike to all three waterfalls, caves and cliffs.', 'Harvest, roast and brew your own Arabica coffee.', 'Optional abseiling, Sebei cultural tour or lodge time.'] },
    { day: 'Day 5', title: 'Sipi to Kampala', details: ['Drive back through Eastern Uganda with a lunch stop in Jinja or Mukono.', 'Optional Mabira Forest or Sezibwa Falls visit before Kampala.'] },
    { day: 'Day 6', title: 'Relax and depart', details: ['Leisure breakfast and optional Kampala craft markets.', 'Visit Entebbe Botanical Gardens or Lake Victoria Beach.', 'Airport transfer timed to your flight.'] },
  ] },
  { slug: 'kidepo-wild-north', title: 'Kidepo Valley: The Wild North', duration: '7 days / 6 nights', category: 'Remote', summary: 'A remote, rugged expedition through vast valleys and a culture-rich northern landscape.', image: '/images/wildlife-elephant-tree.jpg', destinations: ['Kidepo Valley', 'Karamoja'], highlights: ['Remote game drives', 'Narus Valley', 'Karamojong homestead visit', 'Dramatic mountain horizons'] },
]

export const destinations = [
  { slug: 'bwindi', name: 'Bwindi Impenetrable Forest', region: 'South-west Uganda', description: 'An ancient rainforest where gorilla trekking becomes a quiet, humbling encounter.', image: '/images/wildlife-chimp-rainforest.jpg', best: 'June to September, December to February' },
  { slug: 'kibale', name: 'Kibale National Park', region: 'Western Uganda', description: 'The primate capital of East Africa, alive with forest calls and green trails.', image: '/images/wildlife-chimp-forest.jpg', best: 'All year; drier trails June to September' },
  { slug: 'queen-elizabeth', name: 'Queen Elizabeth National Park', region: 'Western Uganda', description: 'Crater lakes, open plains, tree-climbing lions and the life-giving Kazinga Channel.', image: '/images/wildlife-lion-tree.jpg', best: 'June to September and December to February' },
  { slug: 'murchison-falls', name: 'Murchison Falls', region: 'Northern Uganda', description: 'The Nile thunders through a narrow cleft in Uganda's largest protected area.', image: '/images/wildlife-hippo-water.jpg', best: 'December to February; June to September' },
  { slug: 'kidepo', name: 'Kidepo Valley', region: 'North-east Uganda', description: 'Remote, rugged and deeply rewarding wilderness at the edge of the Karamoja plains.', image: '/images/wildlife-elephant-tree.jpg', best: 'June to September' },
  { slug: 'jinja', name: 'Jinja & the Source of the Nile', region: 'Eastern Uganda', description: 'River energy, adventure and a warm welcome in Uganda's historic adventure capital.', image: '/images/sinza-boat-safari.jpg', best: 'All year' },
]

export const experiences = [
  { slug: 'gorilla-trekking', title: 'Gorilla trekking', description: 'Walk into the ancient green of Bwindi for a rare and respectful encounter.', image: '/images/wildlife-chimpanzee-close.jpg' },
  { slug: 'chimpanzee-tracking', title: 'Chimpanzee tracking', description: 'Follow bright calls and forest trails in the primate capital of Kibale.', image: '/images/wildlife-chimps-eating.jpg' },
  { slug: 'wildlife-safaris', title: 'Wildlife safaris', description: 'Read the tracks, follow the light and meet Uganda's wild residents.', image: '/images/wildlife-giraffe-safari.jpg' },
  { slug: 'culture-community', title: 'Culture & community', description: 'Travel with curiosity through food, stories, craft and living traditions.', image: '/images/wildlife-sunset-acacia.jpg' },
]

export const articles = [
  { slug: 'when-to-go-uganda', category: 'Planning', title: 'When is the best time to visit Uganda?', excerpt: 'A month-by-month guide to rainforests, savannah and gorilla trekking.', image: '/images/wildlife-sunset-acacia.jpg' },
  { slug: 'why-travel-with-purpose', category: 'Responsible travel', title: 'Why meaningful travel matters', excerpt: 'How a safari can leave something good behind for landscapes and communities.', image: '/images/wildlife-chimp-rainforest.jpg' },
  { slug: 'packing-for-uganda', category: 'Safari tips', title: 'What to pack for a Uganda safari', excerpt: 'Practical notes from our journey designers for a lighter, more comfortable trip.', image: '/images/wildlife-chimp-forest.jpg' },
  { slug: 'gorilla-trekking-guide', category: 'Wildlife', title: 'A respectful guide to gorilla trekking', excerpt: 'What the forest asks of you, and what the encounter gives back.', image: '/images/wildlife-chimpanzee-close.jpg' },
  { slug: 'tree-climbing-lions', category: 'Wildlife', title: 'The lions who climb trees', excerpt: 'A closer look at Queen Elizabeth's remarkable Ishasha lions.', image: '/images/wildlife-lion-tree.jpg' },
  { slug: 'first-safari', category: 'Travel inspiration', title: 'What your first safari feels like', excerpt: 'The sounds, stillness and small surprises that make a day in the wild.', image: '/images/wildlife-hippo-water.jpg' },
  { slug: 'safari-photography', category: 'Photography', title: 'Making space for the light', excerpt: 'Simple fieldcraft for photographing wildlife without rushing the moment.', image: '/images/wildlife-chimp-bw.jpg' },
  { slug: 'rwanda-uganda', category: 'Destinations', title: 'Two forests, one extraordinary journey', excerpt: 'Pair Uganda's rainforest with Rwanda's volcanic landscapes.', image: '/images/wildlife-chimps-eating.jpg' },
]

export const journeyCountries = [
  {
    slug: 'uganda', name: 'Uganda', tagline: 'The Pearl of Africa', image: '/images/wildlife-giraffe-safari.jpg',
    journeys: [
      { slug: 'gorilla-chimpanzee-big-five', title: 'Gorilla, Chimpanzee & Big Five', duration: '11 days / 10 nights', image: '/images/lion-lioness-resting.jpg' },
      { slug: 'chimpanzees-queen-elizabeth', title: 'Chimpanzees & Queen Elizabeth', duration: '4 days / 3 nights', image: '/images/baboon.jpg' },
      { slug: 'east-uganda-waterfalls', title: 'East Uganda Waterfalls & Culture', duration: '6 days / 5 nights', image: '/images/giraffe-trees.jpg' },
      { slug: 'chimpanzee-wildlife-adventure', title: 'Chimpanzee & Wildlife Adventure', duration: '4 days / 3 nights', image: '/images/sinza-baboon-forest.jpg' },
      { slug: 'queen-elizabeth-kazinga', title: 'Queen Elizabeth & Kazinga Channel', duration: '3 days / 2 nights', image: '/images/sinza-boat-safari.jpg' },
      { slug: 'eastern-uganda-waterfalls-culture', title: 'Sezibwa, Jinja, Kagulu Hill & Sipi Falls', duration: '6 days / 5 nights', image: '/images/sinza-giraffe-landscape.jpg' },
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
  { slug: 'uganda', name: 'Uganda', tagline: 'The Pearl of Africa', image: '/images/wildlife-chimp-rainforest.jpg', copy: 'Rainforest, savannah, crater lakes and the source of the Nile — Uganda is a country that rewards curious travellers.' },
  { slug: 'rwanda', name: 'Rwanda', tagline: 'Land of a Thousand Hills', image: '/images/wildlife-chimpanzee-close.jpg', copy: 'Volcanoes, thoughtful conservation and warm hospitality come together in one beautifully compact country.' },
  { slug: 'kenya', name: 'Kenya', tagline: 'Where Safari Was Born', image: '/images/wildlife-giraffe-safari.jpg', copy: 'Open plains, big skies and enduring wildlife stories across the Masai Mara and the Great Rift Valley.' },
  { slug: 'tanzania', name: "Tanzania", tagline: "Africa's Greatest Stage", image: '/images/wildlife-sunset-acacia.jpg', copy: 'Follow the Serengeti rhythm from Ngorongoro to the coast, with time to look beyond the headline moments.' },
]

export const galleryImages = [
  { src: '/images/wildlife-lion-tree.jpg', alt: 'A lion resting in an acacia tree', label: 'The watchful guardian' },
  { src: '/images/wildlife-chimp-forest.jpg', alt: 'A chimpanzee in the forest canopy', label: 'Forest intelligence' },
  { src: '/images/wildlife-chimpanzee-close.jpg', alt: 'A mountain chimpanzee in close-up', label: 'Ancient connection' },
  { src: '/images/wildlife-chimps-eating.jpg', alt: 'Chimpanzees eating together in nature', label: 'Family bonds' },
  { src: '/images/wildlife-elephant-tree.jpg', alt: 'An elephant beneath a wide acacia tree', label: 'Gentle giants' },
  { src: '/images/wildlife-hippo-water.jpg', alt: 'A hippopotamus in the water', label: 'River king' },
  { src: '/images/wildlife-hippos-water.jpg', alt: 'Hippopotamuses together in water', label: 'Water family' },
  { src: '/images/wildlife-giraffe-safari.jpg', alt: 'A giraffe on an African safari route', label: 'Higher branches' },
  { src: '/images/wildlife-sunset-acacia.jpg', alt: 'African sunset with acacia trees', label: 'Golden hour' },
  { src: '/images/wildlife-chimp-bw.jpg', alt: 'A chimpanzee in black and white', label: 'Quiet strength' },
  { src: '/images/wildlife-chimp-rainforest.jpg', alt: 'A chimpanzee in the rainforest', label: 'Into the green' },
  { src: '/images/sinza-zebra-family.jpg', alt: 'A family of zebras gathered in grassland', label: 'Striped together' },
  { src: '/images/sinza-lion-grass.jpg', alt: 'A lioness moving through Uganda's green plains', label: 'Across the plain' },
  { src: '/images/sinza-boat-safari.jpg', alt: 'A family enjoying a guided boat safari on the Nile', label: 'On the river' },
  { src: '/images/sinza-tree-lions-tall.jpg', alt: 'Two lions resting high in a broad tree', label: 'A room with a view' },
  { src: '/images/sinza-gorilla.jpg', alt: 'A mountain gorilla surrounded by lush forest leaves', label: 'Bwindi embrace' },
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
  ['Safaris', '/safaris'], ['Destinations', '/destinations'], ['Experiences', '/experiences'], ['About us', '/about'], ['Community', '/community'], ['Special packages', '/offers'], ['Blog', '/blog'], ['Contact', '/contact'],
]

export function getSafari(slug: string) { return safaris.find((item) => item.slug === slug) }
export function getDestination(slug: string) { return destinations.find((item) => item.slug === slug) ?? destinationDetails.find((item) => item.slug === slug) }
export function getExperience(slug: string) { return experiences.find((item) => item.slug === slug) }
export function getArticle(slug: string) { return articles.find((item) => item.slug === slug) }

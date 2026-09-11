export type SafariDay = { day: string; title: string; details: string[] }
export type Safari = { slug: string; title: string; duration: string; category: string; summary: string; image: string; destinations: string[]; highlights: string[]; itinerary?: SafariDay[] }

export const safaris: Safari[] = [
  { slug: 'gorilla-chimpanzee-big-five', title: 'Gorilla, Chimpanzee & Big Five Safari', duration: '11 days / 10 nights', category: 'Wildlife', summary: 'Uganda at its most complete: primates, savannah wildlife, the Nile and misty forests.', image: '/images/wildlife-chimp-rainforest.jpg', destinations: ['Kibale', 'Queen Elizabeth', 'Bwindi', 'Murchison Falls'], highlights: ['Gorilla trekking in Bwindi', 'Chimpanzee tracking in Kibale', 'Game drives and boat safaris', 'Local community encounters'], itinerary: [
    { day: 'Day 1', title: 'Arrival in Kampala', details: ['Arrive at Entebbe International Airport and transfer to Kampala.', 'Meet your guide for a journey briefing.', 'Check in at your accommodation and rest, or explore Kampala.'] },
    { day: 'Day 2', title: 'Kibale Forest - Chimpanzee Tracking', details: ['Drive to Kibale National Park (5-6 hours).', 'Early morning chimpanzee trek with an experienced ranger.', 'Afternoon Bigodi Wetlands walk for birds and forest wildlife.', 'Evening relaxation at lodge.'] },
    { day: 'Day 3', title: 'More Kibale Experiences', details: ['Optional early morning guided nature walk.', 'Visit local communities and learn traditional ways of life.', 'Afternoon at leisure or forest exploration.', 'Wildlife documentation and journaling.'] },
    { day: 'Day 4', title: 'Queen Elizabeth National Park', details: ['Drive to Queen Elizabeth National Park.', 'Afternoon Kasenyi plains game drive searching for lions, leopards and buffalo.', 'Evening boat cruise on Kazinga Channel.'] },
    { day: 'Day 5', title: 'Queen Elizabeth Game Drives', details: ['Early morning game drive on Kasenyi plains.', 'Return for breakfast and lodge time.', 'Afternoon crater lakes tour or relaxation.', 'Sunset viewing over the park.'] },
    { day: 'Day 6', title: 'Travel to Murchison Falls', details: ['Drive north to Murchison Falls National Park.', 'Afternoon arrival and settling in.', 'Evening introduction to the park.'] },
    { day: 'Day 7', title: 'Murchison Falls Wildlife', details: ['Early morning game drive in Northern Murchison.', 'Mid-morning Nile Delta boat safari.', 'Afternoon activity of choice or lodge time.'] },
    { day: 'Day 8', title: 'Top of Murchison Falls Hike', details: ['Hike to the top of Murchison Falls.', 'Experience the dramatic Nile narrows.', 'Afternoon wildlife spotting.'] },
    { day: 'Day 9', title: 'Travel to Bwindi', details: ['Drive to Bwindi Impenetrable Forest (long journey).', 'Overnight in Bwindi or nearby accommodation.'] },
    { day: 'Day 10', title: 'Gorilla Trekking in Bwindi', details: ['Early breakfast and park headquarters briefing.', 'Full-day gorilla trekking experience with expert ranger.', 'Respectful encounter with mountain gorillas in their natural habitat.', 'Return to lodge and relaxation.'] },
    { day: 'Day 11', title: 'Return to Kampala', details: ['Drive back to Kampala.', 'Transfer to Entebbe Airport for departure or additional accommodation in Kampala.'] },
  ] },
  { slug: 'chimpanzees-queen-elizabeth', title: 'Chimpanzees & Queen Elizabeth', duration: '4 days / 3 nights', category: 'Primates', summary: 'A compact forest and savannah escape for curious travellers who want two worlds in one journey.', image: '/images/wildlife-chimp-forest.jpg', destinations: ['Kibale', 'Queen Elizabeth'], highlights: ['Chimpanzee tracking', 'Kasenyi plains game drive', 'Kazinga Channel cruise', 'Crater lake scenery'], itinerary: [
    { day: 'Day 1', title: 'Kampala to Kibale Forest', details: ['Early pickup from Kampala or Entebbe.', 'Drive west through banana plantations and scenic Uganda.', 'Stop at equator for photos and refreshments.', 'Arrive at Kibale and settle into lodge.'] },
    { day: 'Day 2', title: 'Chimpanzee Tracking', details: ['Early breakfast (5:00am).', 'Guided trek in Kibale Forest to track wild chimpanzees.', 'Experience their natural behavior and forest habitat.', 'Afternoon Bigodi Wetlands walk for bird watching and forest life.'] },
    { day: 'Day 3', title: 'Transfer to Queen Elizabeth', details: ['Morning at leisure or additional nature walk.', 'Transfer to Queen Elizabeth National Park (2 hours).', 'Afternoon Kasenyi plains game drive.', 'Spot lions, leopards, buffalos, and elephants.'] },
    { day: 'Day 4', title: 'Kazinga Channel & Return', details: ['Early morning game drive in Kasenyi plains.', 'Boat cruise on Kazinga Channel with hippos and crocodiles.', 'Visit crater lakes region.', 'Return to Kampala or Entebbe Airport.'] },
  ] },
  { slug: 'east-uganda-waterfalls', title: 'East Uganda Waterfalls & Culture', duration: '6 days / 5 nights', category: 'Nature & Culture', summary: 'Waterfalls, coffee, sacred sites and warm eastern hospitality, shaped into an easy-going route.', image: '/images/sinza-boat-safari.jpg', destinations: ['Jinja', 'Sipi Falls', 'Sezibwa Falls', 'Kagulu Hill'], highlights: ['Source of the Nile', 'Sipi coffee experience', 'Cultural storytelling', 'Scenic hill walks'], itinerary: [
    { day: 'Day 1', title: 'Kampala to Jinja', details: ['Drive east to Jinja (1 hour).', 'Visit the Source of the Nile at Owen Falls.', 'Explore Jinja town and waterfront.', 'Optional boat cruise or whitewater rafting activity.'] },
    { day: 'Day 2', title: 'Jinja to Kagulu Hill', details: ['Drive to Kagulu Hill through rural Busoga region.', 'Afternoon hike up Kagulu Hill.', 'Learn about royal Buganda Kingdom migration stories.', 'Stay in Kagulu area.'] },
    { day: 'Day 3', title: 'Kagulu Hill Experiences', details: ['Optional early morning hike or relaxation.', 'Visit local communities and markets.', 'Afternoon drumming and traditional music session.', 'Picnic lunch with local food.'] },
    { day: 'Day 4', title: 'Kagulu to Sipi Falls', details: ['Drive to Sipi Falls region via Mount Elgon foothills.', 'Afternoon guided walk to Sipi Falls.', 'Views of the three-tier waterfalls.', 'Settle in Sipi accommodation.'] },
    { day: 'Day 5', title: 'Sipi Coffee & Waterfalls', details: ['Full day Sipi Falls experience.', 'Trek to all three waterfalls.', 'Coffee farm visit and coffee harvest experience.', 'Roast and brew your own Arabica coffee.', 'Optional cave exploration or abseiling.'] },
    { day: 'Day 6', title: 'Return to Kampala', details: ['Drive back to Kampala through eastern Uganda.', 'Visit Sezibwa Falls en route if time allows.', 'Arrive in Kampala or head to airport.'] },
  ] },
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
  { slug: 'kidepo-wild-north', title: 'Kidepo Valley: The Wild North', duration: '7 days / 6 nights', category: 'Remote', summary: 'A remote, rugged expedition through vast valleys and a culture-rich northern landscape.', image: '/images/wildlife-elephant-tree.jpg', destinations: ['Kidepo Valley', 'Karamoja'], highlights: ['Remote game drives', 'Narus Valley', 'Karamojong homestead visit', 'Dramatic mountain horizons'], itinerary: [
    { day: 'Day 1', title: 'Kampala to Kidepo', details: ['Early flight from Kampala to Kidepo Valley National Park or long overland journey.', 'Settle into lodge in the remote north.', 'Orientation walk around the lodge area.'] },
    { day: 'Day 2', title: 'Narus Valley Game Drive', details: ['Early morning game drive in Narus Valley.', 'Search for lions, leopards, buffalo and Kidepo giraffes.', 'Afternoon wildlife photography.', 'Evening at lodge.'] },
    { day: 'Day 3', title: 'Kidepo Valley & Karamojong Culture', details: ['Game drive in Kidepo Valley.', 'Visit traditional Karamojong warrior community.', 'Learn about pastoralist traditions and way of life.', 'Return for sunset at lodge.'] },
    { day: 'Day 4', title: 'Pian Upe Wildlife Reserve', details: ['Explore Pian Upe Wildlife Reserve, adjacent to Kidepo.', 'Spot zebras, hartebeest and other wildlife.', 'Scenic drives with mountain backdrop.'] },
    { day: 'Day 5', title: 'Remote Exploration', details: ['Full day remote exploring with your guide.', 'Look for Kidepo wildlife including wild dog where present.', 'Photography and wildlife documentation.', 'Return for evening meals and stargazing.'] },
    { day: 'Day 6', title: 'Last Wildlife & Preparation', details: ['Final morning game drive.', 'Visit a Karamojong boma (settlement).', 'Craft purchase and final cultural interactions.'] },
    { day: 'Day 7', title: 'Departure', details: ['Flight back to Kampala or overland travel.', 'Arrive in Kampala and transfer to accommodation or airport.'] },
  ] },
  { slug: 'ziwa-rhino-tracking', title: '1 Day Ziwa Rhino Tracking Tour', duration: '1 day', category: 'Wildlife', summary: 'An intimate morning or afternoon tracking experience with Uganda\'s reintroduced rhino population at Ziwa Sanctuary.', image: '/images/big-five/giraffe-mother-calf.jpg', destinations: ['Ziwa Rhino Sanctuary'], highlights: ['Rhino tracking on foot', 'Conservation education', 'Guided walk through protected reserve', 'Stunning Uganda landscape'] },
  { slug: 'murchison-falls-2days', title: '2 Days Murchison Falls', duration: '2 days / 1 night', category: 'Wildlife', summary: 'A quick but immersive taste of the Nile\'s dramatic power and the wildlife of Uganda\'s largest protected area.', image: '/images/wildlife/hippo-water.jpg', destinations: ['Murchison Falls'], highlights: ['Nile Delta boat safari', 'Top of Murchison Falls hike', 'Northern plains game drive', 'Nile river spectacle'] },
  { slug: 'bwindi-gorilla-3days', title: '3 Days Bwindi Gorilla Trekking', duration: '3 days / 2 nights', category: 'Primates', summary: 'A focused journey into Bwindi\'s misty forests for the transformative experience of gorilla trekking in their natural habitat.', image: '/images/primates/chimp-bw-portrait.jpg', destinations: ['Bwindi Impenetrable Forest'], highlights: ['Full-day gorilla trekking', 'Ancient rainforest experience', 'Local community visits', 'Forest walks and nature immersion'] },
  { slug: 'murchison-queen-elizabeth-5days', title: '5 Days Murchison Falls & Queen Elizabeth', duration: '5 days / 4 nights', category: 'Wildlife', summary: 'Combine the raw power of Murchison Falls with the diverse wildlife and tree-climbing lions of Queen Elizabeth National Park.', image: '/images/big-five/giraffe-single.jpg', destinations: ['Murchison Falls', 'Queen Elizabeth'], highlights: ['Nile boat safari', 'Falls hike', 'Kasenyi plains game drives', 'Kazinga Channel cruise', 'Lion and leopard spotting'] },
  { slug: 'gorillas-lions-5days', title: '5 Days Gorillas & Lions Tracking', duration: '5 days / 4 nights', category: 'Wildlife', summary: 'Experience Uganda\'s most iconic primates and Big Five predators in this diverse 5-day wilderness expedition.', image: '/images/primates/young-primate.webp', destinations: ['Bwindi', 'Queen Elizabeth'], highlights: ['Gorilla trekking in Bwindi', 'Tree-climbing lions', 'Kazinga Channel cruise', 'Forest and savanna contrast', 'Expert wildlife tracking'] },
  { slug: 'kidepo-murchison-6days', title: '6 Days Kidepo Valley & Murchison Falls', duration: '6 days / 5 nights', category: 'Remote', summary: 'Venture into Uganda\'s wildest regions: the remote Kidepo Valley and the power of Murchison Falls in one epic journey.', image: '/images/wildlife/shoebill-bird.webp', destinations: ['Kidepo Valley', 'Murchison Falls'], highlights: ['Remote Kidepo wilderness', 'Narus Valley game drives', 'Karamojong culture', 'Murchison Falls hike', 'Big game tracking'] },
  { slug: 'best-of-uganda-11days', title: '11 Days Best of Uganda Safari', duration: '11 days / 10 nights', category: 'Wildlife', summary: 'The ultimate Uganda experience: gorillas, chimpanzees, lions, Murchison Falls, and authentic cultural encounters across the Pearl of Africa.', image: '/images/primates/chimp-with-leaves.jpg', destinations: ['Kibale', 'Queen Elizabeth', 'Murchison Falls', 'Bwindi'], highlights: ['Gorilla and chimp tracking', 'Multiple national parks', 'Tree-climbing lions', 'Boat safaris and hikes', 'Cultural immersion'] },
  { slug: 'uganda-wildlife-14days', title: '14 Days Uganda Wildlife Safari', duration: '14 days / 13 nights', category: 'Wildlife', summary: 'The most comprehensive Uganda safari: experience all major ecosystems, wildlife, and cultural destinations from west to east.', image: '/images/primates/chimp-forest-portrait.jpg', destinations: ['Kibale', 'Queen Elizabeth', 'Murchison Falls', 'Kidepo Valley', 'Bwindi'], highlights: ['Complete wildlife diversity', 'All major national parks', 'Extended primate experiences', 'Cultural immersion', 'Remote wilderness exploration'] },
  { slug: 'rwanda-gorilla-safari-3days', title: '3 Days Rwanda Gorilla Safari', duration: '3 days / 2 nights', category: 'Primates', summary: 'Trek mountain gorillas in Rwanda\'s Volcanoes National Park, experiencing these remarkable primates in their misty highland forest home.', image: '/images/primates/young-primate.webp', destinations: ['Volcanoes National Park'], highlights: ['Gorilla trekking in Volcanoes', 'Mountain rainforest experience', 'Golden monkey encounters', 'Kigali city experience', 'Rwanda\'s volcanic landscape'] },
  { slug: 'rwanda-primates-5days', title: '5 Days Rwanda Primates Safari', duration: '5 days / 4 nights', category: 'Primates', summary: 'A primate-focused journey combining gorilla trekking, golden monkey experiences, and Nyungwe Forest chimpanzee tracking.', image: '/images/primates/chimp-with-leaves.jpg', destinations: ['Volcanoes National Park', 'Nyungwe Forest'], highlights: ['Mountain gorilla trekking', 'Golden monkeys', 'Chimpanzee tracking in Nyungwe', 'Forest canopy walks', 'Primate conservation insights'] },
  { slug: 'rwanda-gorilla-wildlife-6days', title: '6 Days Rwanda Gorilla & Wildlife Safari', duration: '6 days / 5 nights', category: 'Wildlife', summary: 'Combine the intimacy of gorilla trekking with the diversity of Rwanda\'s Akagera National Park wildlife experiences.', image: '/images/wildlife/antelope-02.jpg', destinations: ['Volcanoes National Park', 'Akagera National Park'], highlights: ['Mountain gorilla encounters', 'Akagera game drives', 'Lion and elephant spotting', 'Big Five experiences', 'Rwanda\'s ecosystems'] },
  { slug: 'nyungwe-forest-3days', title: '3 Days Nyungwe Forest Tour', duration: '3 days / 2 nights', category: 'Nature & Culture', summary: 'Immerse yourself in Rwanda\'s ancient rainforest for chimpanzee tracking, canopy walks, and pristine woodland experiences.', image: '/images/wildlife/shoebill-bird.webp', destinations: ['Nyungwe Forest'], highlights: ['Chimpanzee tracking', 'Forest canopy walks', 'Waterfall hikes', 'Birdwatching', 'Forest community encounters'] },
  { slug: 'uganda-gorillas-kigali-3days', title: '3 Days Uganda Gorillas from Kigali, Rwanda', duration: '3 days / 2 nights', category: 'Primates', summary: 'Cross the border from Rwanda to Uganda for an intensive gorilla trekking experience in Bwindi, based from Kigali.', image: '/images/primates/chimp-forest-portrait.jpg', destinations: ['Bwindi Impenetrable Forest'], highlights: ['Gorilla trekking from Kigali base', 'Bwindi rainforest immersion', 'Cross-border adventure', 'Community visits', 'Expert gorilla encounters'] },
]

export function getSafari(slug: string): Safari | undefined {
  return safaris.find((s) => s.slug === slug)
}

export const destinations = [
  { slug: 'bwindi', name: 'Bwindi Impenetrable Forest', region: 'South-west Uganda', description: 'An ancient rainforest where gorilla trekking becomes a quiet, humbling encounter.', image: '/images/wildlife-chimp-rainforest.jpg', best: 'June to September, December to February' },
  { slug: 'kibale', name: 'Kibale National Park', region: 'Western Uganda', description: 'The primate capital of East Africa, alive with forest calls and green trails.', image: '/images/wildlife-chimp-forest.jpg', best: 'All year; drier trails June to September' },
  { slug: 'queen-elizabeth', name: 'Queen Elizabeth National Park', region: 'Western Uganda', description: 'Crater lakes, open plains, tree-climbing lions and the life-giving Kazinga Channel.', image: '/images/wildlife-lion-tree.jpg', best: 'June to September and December to February' },
  { slug: 'murchison-falls', name: 'Murchison Falls', region: 'Northern Uganda', description: "The Nile thunders through a narrow cleft in Uganda's largest protected area.", image: '/images/wildlife-hippo-water.jpg', best: 'December to February; June to September' },
  { slug: 'kidepo', name: 'Kidepo Valley', region: 'North-east Uganda', description: 'Remote, rugged and deeply rewarding wilderness at the edge of the Karamoja plains.', image: '/images/wildlife-elephant-tree.jpg', best: 'June to September' },
  { slug: 'jinja', name: 'Jinja & the Source of the Nile', region: 'Eastern Uganda', description: "River energy, adventure and a warm welcome in Uganda's historic adventure capital.", image: '/images/sinza-boat-safari.jpg', best: 'All year' },
]

export const experiences = [
  { slug: 'gorilla-trekking', title: 'Gorilla trekking', description: 'Walk into the ancient green of Bwindi for a rare and respectful encounter.', image: '/images/wildlife-chimpanzee-close.jpg' },
  { slug: 'chimpanzee-tracking', title: 'Chimpanzee tracking', description: 'Follow bright calls and forest trails in the primate capital of Kibale.', image: '/images/wildlife-chimps-eating.jpg' },
  { slug: 'wildlife-safaris', title: 'Wildlife safaris', description: "Read the tracks, follow the light and meet Uganda's wild residents.", image: '/images/wildlife-giraffe-safari.jpg' },
  { slug: 'culture-community', title: 'Culture & community', description: 'Travel with curiosity through food, stories, craft and living traditions.', image: '/images/wildlife-sunset-acacia.jpg' },
]

export const articles = [
  // Uganda Travel Guides
  { slug: 'when-to-go-uganda', category: 'Uganda Travel', title: 'When is the best time to visit Uganda?', excerpt: 'A month-by-month guide to rainforests, savannah and gorilla trekking.', image: '/images/wildlife-sunset-acacia.jpg' },
  { slug: 'uganda-safari-guide', category: 'Uganda Travel', title: 'Ultimate Uganda Safari Guide', excerpt: 'Everything you need to know about planning a life-changing safari through Uganda.', image: '/images/primates/chimp-feeding-01.webp' },
  { slug: 'uganda-national-parks', category: 'Uganda Travel', title: 'Uganda National Parks Guide', excerpt: 'Explore all of Uganda\'s protected areas: what to see, where to go, and best experiences.', image: '/images/primates/chimp-forest-portrait.jpg' },
  { slug: 'wildlife-uganda-where-to-see', category: 'Uganda Travel', title: 'Where to See Wildlife in Uganda', excerpt: 'A guide to spotting Uganda\'s iconic animals in their natural habitats across the country.', image: '/images/big-five/buffalo-with-birds.jpg' },
  { slug: 'uganda-gorilla-trekking-guide', category: 'Uganda Travel', title: 'Uganda Gorilla Trekking Guide', excerpt: 'Everything about tracking mountain gorillas in Bwindi\'s ancient rainforests.', image: '/images/primates/chimp-bw-portrait.jpg' },
  { slug: 'chimpanzee-tracking-uganda', category: 'Uganda Travel', title: 'Chimpanzee Tracking in Uganda', excerpt: 'Follow the calls and trails of wild chimpanzees in Kibale Forest, the primate capital.', image: '/images/primates/young-chimp-hanging.jpg' },
  { slug: 'murchison-falls-guide', category: 'Uganda Travel', title: 'Murchison Falls Travel Guide', excerpt: 'Discover Uganda\'s largest national park and the Nile\'s most dramatic waterfall.', image: '/images/wildlife/hippo-water.jpg' },
  { slug: 'queen-elizabeth-national-park', category: 'Uganda Travel', title: 'Queen Elizabeth National Park Guide', excerpt: 'Tree-climbing lions, Kazinga Channel cruises, and diverse ecosystems await.', image: '/images/wildlife/antelope-01.jpg' },
  { slug: 'bwindi-impenetrable-forest', category: 'Uganda Travel', title: 'Bwindi Impenetrable National Park Guide', excerpt: 'Experience the ancient rainforest home of half the world\'s mountain gorillas.', image: '/images/primates/chimp-with-leaves.jpg' },
  { slug: 'kibale-forest-guide', category: 'Uganda Travel', title: 'Kibale Forest Guide', excerpt: 'East Africa\'s primate capital: chimps, monkeys, and pristine forest trails.', image: '/images/primates/young-primate.webp' },
  { slug: 'kidepo-valley-guide', category: 'Uganda Travel', title: 'Kidepo Valley Guide', excerpt: 'Uganda\'s remote wilderness: vast valleys, wild game, and pastoral cultures.', image: '/images/wildlife/shoebill-bird.webp' },
  { slug: 'lake-mburo-guide', category: 'Uganda Travel', title: 'Lake Mburo Guide', excerpt: 'Uganda\'s smallest national park with zebras, impalas, and aquatic adventures.', image: '/images/big-five/giraffe-single.jpg' },
  { slug: 'ziwa-rhino-sanctuary', category: 'Uganda Travel', title: 'Ziwa Rhino Sanctuary Guide', excerpt: 'Track Uganda\'s reintroduced rhino population in this conservation success story.', image: '/images/big-five/giraffe-mother-calf.jpg' },
  { slug: 'jinja-source-of-nile', category: 'Uganda Travel', title: 'Jinja and the Source of the Nile', excerpt: 'Adventure and spirituality at the world-famous Source of the Nile River.', image: '/images/wildlife/antelope-02.jpg' },
  { slug: 'sipi-falls-guide', category: 'Uganda Travel', title: 'Sipi Falls Guide', excerpt: 'Three stunning waterfalls, coffee farms, and eastern Uganda\'s scenic beauty.', image: '/images/wildlife/heron-flying.jpg' },
  { slug: 'uganda-birding-guide', category: 'Uganda Travel', title: 'Uganda Birding Guide', excerpt: 'Over 1000 bird species: a birdwatcher\'s paradise across Uganda\'s ecosystems.', image: '/images/primates/chimps-family-road.jpg' },
  
  // Rwanda Travel Guides
  { slug: 'rwanda-safari-guide', category: 'Rwanda Travel', title: 'Rwanda Safari Guide', excerpt: 'The land of a thousand hills: wildlife, culture, and gorilla trekking.', image: '/images/big-five/giraffe-single.jpg' },
  { slug: 'when-to-visit-rwanda', category: 'Rwanda Travel', title: 'Best Time to Visit Rwanda', excerpt: 'Month-by-month weather guide for planning your Rwanda adventure.', image: '/images/primates/young-primate.webp' },
  { slug: 'gorilla-trekking-rwanda', category: 'Rwanda Travel', title: 'Gorilla Trekking in Rwanda', excerpt: 'Trek mountain gorillas in Volcanoes National Park\'s misty highlands.', image: '/images/primates/chimp-with-leaves.jpg' },
  { slug: 'volcanoes-national-park', category: 'Rwanda Travel', title: 'Volcanoes National Park Guide', excerpt: 'Dramatic volcanic peaks, gorillas, and golden monkeys in Rwanda\'s northwest.', image: '/images/wildlife/shoebill-bird.webp' },
  { slug: 'nyungwe-forest-guide', category: 'Rwanda Travel', title: 'Nyungwe Forest Guide', excerpt: 'Rwanda\'s ancient rainforest: chimpanzees, canopy walks, and pristine nature.', image: '/images/wildlife/antelope-02.jpg' },
  { slug: 'akagera-national-park', category: 'Rwanda Travel', title: 'Akagera National Park Guide', excerpt: 'Big Five wildlife, game drives, and Lake Ihema\'s scenic beauty.', image: '/images/big-five/buffalo-with-birds.jpg' },
  { slug: 'rwanda-primates-guide', category: 'Rwanda Travel', title: 'Rwanda Primates Guide', excerpt: 'Encounter gorillas, golden monkeys, and chimpanzees across Rwanda\'s forests.', image: '/images/primates/chimp-forest-portrait.jpg' },
  { slug: 'kigali-travel-guide', category: 'Rwanda Travel', title: 'Kigali Travel Guide', excerpt: 'Rwanda\'s vibrant capital: culture, history, food, and warm hospitality.', image: '/images/big-five/giraffe-mother-calf.jpg' },
  { slug: 'rwanda-culture', category: 'Rwanda Travel', title: 'Rwanda Culture and Experiences', excerpt: 'Discover Rwanda\'s rich heritage, communities, and authentic cultural encounters.', image: '/images/primates/chimp-bw-portrait.jpg' },
  { slug: 'uganda-vs-rwanda-gorilla', category: 'Comparisons', title: 'Uganda vs Rwanda Gorilla Trekking', excerpt: 'Compare Bwindi and Volcanoes: which gorilla trek is right for you?', image: '/images/primates/chimp-feeding-01.webp' },
  
  // Gorilla Trekking Intel
  { slug: 'what-to-expect-gorilla-trek', category: 'Gorilla Trekking', title: 'What to Expect on a Gorilla Trek', excerpt: 'A detailed walkthrough of a typical gorilla trekking day from start to finish.', image: '/images/primates/young-chimp-hanging.jpg' },
  { slug: 'how-to-prepare-gorilla', category: 'Gorilla Trekking', title: 'How to Prepare for Gorilla Trekking', excerpt: 'Physical preparation, mental readiness, and practical tips for success.', image: '/images/wildlife/hippo-water.jpg' },
  { slug: 'what-to-pack-gorilla', category: 'Gorilla Trekking', title: 'What to Pack for Gorilla Trekking', excerpt: 'Essential gear, clothing, and supplies for a comfortable trek.', image: '/images/wildlife/antelope-01.jpg' },
  { slug: 'gorilla-trekking-guide', category: 'Gorilla Trekking', title: 'A Respectful Guide to Gorilla Trekking', excerpt: 'What the forest asks of you, and what the encounter gives back.', image: '/images/wildlife/antelope-02.jpg' },
  { slug: 'gorilla-trekking-rules', category: 'Gorilla Trekking', title: 'Gorilla Trekking Rules', excerpt: 'The regulations designed to protect these incredible primates and ensure safety.', image: '/images/primates/chimp-with-leaves.jpg' },
  { slug: 'gorilla-etiquette', category: 'Gorilla Trekking', title: 'Gorilla Trekking Etiquette', excerpt: 'How to behave respectfully during your encounter with mountain gorillas.', image: '/images/primates/young-primate.webp' },
  { slug: 'gorilla-permits', category: 'Gorilla Trekking', title: 'Understanding Gorilla Permits', excerpt: 'What permits are, how to obtain them, and why they matter for conservation.', image: '/images/wildlife/shoebill-bird.webp' },
  { slug: 'best-time-gorilla-trek', category: 'Gorilla Trekking', title: 'Best Time for Gorilla Trekking', excerpt: 'Seasonal guide: weather, accessibility, and gorilla activity throughout the year.', image: '/images/big-five/giraffe-single.jpg' },
  { slug: 'gorilla-trek-day', category: 'Gorilla Trekking', title: 'What Happens on Gorilla Trekking Day', excerpt: 'Hour-by-hour breakdown of your gorilla trekking adventure.', image: '/images/big-five/giraffe-mother-calf.jpg' },
  
  // Safari Planning
  { slug: 'how-to-plan-safari', category: 'Safari Planning', title: 'How to Plan an African Safari', excerpt: 'Step-by-step guide from destination selection to final preparations.', image: '/images/wildlife/heron-flying.jpg' },
  { slug: 'uganda-safari-days', category: 'Safari Planning', title: 'How Many Days for a Uganda Safari?', excerpt: 'Different itinerary lengths and what you can realistically experience.', image: '/images/primates/chimps-family-road.jpg' },
  { slug: 'rwanda-safari-days', category: 'Safari Planning', title: 'How Many Days for Rwanda?', excerpt: 'Recommended trip lengths based on your interests and travel style.', image: '/images/primates/chimp-forest-portrait.jpg' },
  { slug: 'uganda-safari-costs', category: 'Safari Planning', title: 'Uganda Safari Cost Guide', excerpt: 'Budget breakdown: accommodation, guides, permits, meals, and transport.', image: '/images/primates/chimp-feeding-01.webp' },
  { slug: 'rwanda-safari-costs', category: 'Safari Planning', title: 'Rwanda Safari Cost Guide', excerpt: 'Pricing details for safaris, gorilla permits, and experiences in Rwanda.', image: '/images/primates/young-chimp-hanging.jpg' },
  { slug: 'budget-vs-luxury-safari', category: 'Safari Planning', title: 'Budget vs Mid-Range vs Luxury Safari', excerpt: 'Understanding the different safari experience levels and what to expect.', image: '/images/wildlife/hippo-water.jpg' },
  { slug: 'private-vs-group-safari', category: 'Safari Planning', title: 'Private vs Group Safari', excerpt: 'Pros and cons: choose the safari style that suits your travel goals.', image: '/images/wildlife/antelope-01.jpg' },
  { slug: 'family-safari-planning', category: 'Safari Planning', title: 'Family Safari Planning', excerpt: 'Tips for traveling with kids: age-appropriate activities and logistics.', image: '/images/wildlife/antelope-02.jpg' },
  { slug: 'honeymoon-safari', category: 'Safari Planning', title: 'Honeymoon Safari Planning', excerpt: 'Romance, adventure, and intimate moments in the African wilderness.', image: '/images/primates/chimp-with-leaves.jpg' },
  { slug: 'first-time-safari', category: 'Safari Planning', title: 'First-Time Safari Guide', excerpt: 'Everything a first-time visitor needs to know before their safari.', image: '/images/primates/young-primate.webp' },
  { slug: 'what-to-pack-safari', category: 'Safari Planning', title: 'What to Pack for an African Safari', excerpt: 'Comprehensive packing list for comfort and practicality in the field.', image: '/images/wildlife/shoebill-bird.webp' },
  
  // Wildlife Intel
  { slug: 'big-five-uganda', category: 'Wildlife', title: 'The Big Five in Uganda', excerpt: 'Find Uganda\'s iconic predators and large herbivores in their natural habitats.', image: '/images/big-five/giraffe-single.jpg' },
  { slug: 'where-to-see-lions', category: 'Wildlife', title: 'Where to See Lions in Uganda', excerpt: 'Prime locations for spotting Uganda\'s impressive lion populations.', image: '/images/big-five/giraffe-mother-calf.jpg' },
  { slug: 'where-to-see-elephants', category: 'Wildlife', title: 'Where to See Elephants in Uganda', excerpt: 'Uganda\'s elephant hotspots and the best times to encounter them.', image: '/images/wildlife/heron-flying.jpg' },
  { slug: 'chimpanzees-uganda', category: 'Wildlife', title: 'Chimpanzees in Uganda', excerpt: 'Understanding Uganda\'s chimp populations and how to track them responsibly.', image: '/images/primates/chimps-family-road.jpg' },
  { slug: 'gorillas-uganda-rwanda', category: 'Wildlife', title: 'Gorillas in Uganda and Rwanda', excerpt: 'Mountain gorillas: habitat, behavior, conservation, and trekking experiences.', image: '/images/primates/chimp-forest-portrait.jpg' },
  { slug: 'uganda-wildlife', category: 'Wildlife', title: 'Uganda\'s Wildlife', excerpt: 'A comprehensive overview of Uganda\'s diverse fauna and ecosystems.', image: '/images/primates/chimp-feeding-01.webp' },
  { slug: 'rwanda-wildlife', category: 'Wildlife', title: 'Rwanda\'s Wildlife', excerpt: 'Discover Rwanda\'s animals, birds, and reptiles across various habitats.', image: '/images/primates/young-chimp-hanging.jpg' },
  { slug: 'uganda-birds', category: 'Wildlife', title: 'Birding in Uganda', excerpt: 'Over 1000 species make Uganda a world-class birding destination.', image: '/images/wildlife/hippo-water.jpg' },
  { slug: 'wildlife-photography-tips', category: 'Wildlife', title: 'Wildlife Photography Tips', excerpt: 'Capture stunning safari moments with practical photography guidance.', image: '/images/wildlife/antelope-01.jpg' },
  
  // Travel Tips
  { slug: 'what-to-pack', category: 'Travel Tips', title: 'What to Pack', excerpt: 'Complete packing guide for East African adventures.', image: '/images/wildlife/antelope-02.jpg' },
  { slug: 'money-currency', category: 'Travel Tips', title: 'Money and Currency', excerpt: 'Currency, ATMs, card usage, and financial tips for Uganda and Rwanda.', image: '/images/primates/chimp-with-leaves.jpg' },
  { slug: 'internet-connectivity', category: 'Travel Tips', title: 'Internet and Connectivity', excerpt: 'Staying connected on safari: SIM cards, data, and communication options.', image: '/images/primates/young-primate.webp' },
  { slug: 'health-travel-prep', category: 'Travel Tips', title: 'Health and Travel Preparation', excerpt: 'Vaccinations, malaria prevention, and health precautions for East Africa.', image: '/images/wildlife/shoebill-bird.webp' },
  { slug: 'safari-vehicle-guide', category: 'Travel Tips', title: 'Safari Vehicle Guide', excerpt: 'Understanding safari vehicles, seating, comfort, and wildlife viewing.', image: '/images/big-five/giraffe-single.jpg' },
  { slug: 'accommodation-guide', category: 'Travel Tips', title: 'Accommodation Guide', excerpt: 'Options from luxury lodges to budget camps: what to expect and how to choose.', image: '/images/big-five/giraffe-mother-calf.jpg' },
  { slug: 'travel-times-destinations', category: 'Travel Tips', title: 'Travel Times Between Destinations', excerpt: 'Driving times, flight options, and route planning for Uganda and Rwanda.', image: '/images/wildlife/heron-flying.jpg' },
  { slug: 'road-travel-uganda', category: 'Travel Tips', title: 'Road Travel in Uganda', excerpt: 'Tips for overland travel: conditions, safety, and what to expect.', image: '/images/primates/chimps-family-road.jpg' },
  { slug: 'road-travel-rwanda', category: 'Travel Tips', title: 'Road Travel in Rwanda', excerpt: 'Rwanda\'s roads, travel logistics, and getting around the country.', image: '/images/primates/chimp-forest-portrait.jpg' },
  { slug: 'responsible-wildlife-viewing', category: 'Travel Tips', title: 'Responsible Wildlife Viewing', excerpt: 'Ethical practices for observing wildlife while protecting their wellbeing.', image: '/images/primates/chimp-feeding-01.webp' },
  { slug: 'why-travel-with-purpose', category: 'Responsible travel', title: 'Why Meaningful Travel Matters', excerpt: 'How a safari can leave something good behind for landscapes and communities.', image: '/images/wildlife-chimp-rainforest.jpg' },
]

export const journeyCountries = [
  {
    slug: 'uganda', name: 'Uganda', tagline: 'The Pearl of Africa', image: '/images/wildlife-giraffe-safari.jpg',
    journeys: [
      { slug: 'gorilla-chimpanzee-big-five', title: 'Gorilla, Chimpanzee & Big Five', duration: '11 days / 10 nights', image: '/images/primates/chimp-feeding-01.webp' },
      { slug: 'chimpanzees-queen-elizabeth', title: 'Chimpanzees & Queen Elizabeth', duration: '4 days / 3 nights', image: '/images/primates/young-chimp-hanging.jpg' },
      { slug: 'east-uganda-waterfalls', title: 'East Uganda Waterfalls & Culture', duration: '6 days / 5 nights', image: '/images/wildlife/antelope-01.jpg' },
      { slug: 'chimpanzee-wildlife-adventure', title: 'Chimpanzee & Wildlife Adventure', duration: '4 days / 3 nights', image: '/images/primates/chimps-family-road.jpg' },
      { slug: 'queen-elizabeth-kazinga', title: 'Queen Elizabeth & Kazinga Channel', duration: '3 days / 2 nights', image: '/images/big-five/buffalo-with-birds.jpg' },
      { slug: 'eastern-uganda-waterfalls-culture', title: 'Sezibwa, Jinja, Kagulu Hill & Sipi Falls', duration: '6 days / 5 nights', image: '/images/wildlife/antelope-02.jpg' },
      { slug: 'ziwa-rhino-tracking', title: '1 Day Ziwa Rhino Tracking Tour', duration: '1 day', image: '/images/big-five/giraffe-mother-calf.jpg' },
      { slug: 'murchison-falls-2days', title: '2 Days Murchison Falls', duration: '2 days / 1 night', image: '/images/wildlife/hippo-water.jpg' },
      { slug: 'bwindi-gorilla-3days', title: '3 Days Bwindi Gorilla Trekking', duration: '3 days / 2 nights', image: '/images/primates/chimp-bw-portrait.jpg' },
      { slug: 'murchison-queen-elizabeth-5days', title: '5 Days Murchison Falls & Queen Elizabeth', duration: '5 days / 4 nights', image: '/images/big-five/giraffe-single.jpg' },
      { slug: 'gorillas-lions-5days', title: '5 Days Gorillas & Lions Tracking', duration: '5 days / 4 nights', image: '/images/primates/young-primate.webp' },
      { slug: 'kidepo-murchison-6days', title: '6 Days Kidepo Valley & Murchison Falls', duration: '6 days / 5 nights', image: '/images/wildlife/shoebill-bird.webp' },
      { slug: 'best-of-uganda-11days', title: '11 Days Best of Uganda Safari', duration: '11 days / 10 nights', image: '/images/primates/chimp-with-leaves.jpg' },
      { slug: 'uganda-wildlife-14days', title: '14 Days Uganda Wildlife Safari', duration: '14 days / 13 nights', image: '/images/primates/chimp-forest-portrait.jpg' },
    ],
  },
  {
    slug: 'rwanda', name: 'Rwanda', tagline: 'Land of a Thousand Hills', image: '/images/big-five/giraffe-mother-calf.jpg',
    journeys: [
      { slug: 'volcanoes-lake-kivu', title: 'Volcanoes & Lake Kivu', duration: '8 days / 7 nights', image: '/images/big-five/giraffe-single.jpg' },
      { slug: 'rwanda-gorilla-safari-3days', title: '3 Days Rwanda Gorilla Safari', duration: '3 days / 2 nights', image: '/images/primates/young-primate.webp' },
      { slug: 'rwanda-primates-5days', title: '5 Days Rwanda Primates Safari', duration: '5 days / 4 nights', image: '/images/primates/chimp-with-leaves.jpg' },
      { slug: 'rwanda-gorilla-wildlife-6days', title: '6 Days Rwanda Gorilla & Wildlife Safari', duration: '6 days / 5 nights', image: '/images/wildlife/antelope-02.jpg' },
      { slug: 'nyungwe-forest-3days', title: '3 Days Nyungwe Forest Tour', duration: '3 days / 2 nights', image: '/images/wildlife/shoebill-bird.webp' },
      { slug: 'uganda-gorillas-kigali-3days', title: '3 Days Uganda Gorillas from Kigali, Rwanda', duration: '3 days / 2 nights', image: '/images/primates/chimp-forest-portrait.jpg' },
    ],
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
  { src: '/images/sinza-lion-grass.jpg', alt: "A lioness moving through Uganda's green plains", label: 'Across the plain' },
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

export function getDestination(slug: string) { return destinations.find((item) => item.slug === slug) ?? destinationDetails.find((item) => item.slug === slug) }
export function getExperience(slug: string) { return experiences.find((item) => item.slug === slug) }
export function getArticle(slug: string) { return articles.find((item) => item.slug === slug) }

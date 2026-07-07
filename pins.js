/*
 * pins.js — the single source of truth for the Atlas.
 * Edit THIS file to add / change places and Michelin tables; both the landing-page
 * globe and the Atlas page read from window.ATLAS_DATA below.
 *
 *   entries      — places you've been (show as solid ◆ pins)
 *   wishes       — places on the list (show as hollow ◇ on the Atlas "Someday" tab)
 *   meals        — Michelin tables eaten
 *   mealWishes   — Michelin tables on the list
 *
 * To add a place: copy a line, give it a new unique id, fill in the fields.
 * lat/lon are decimal degrees (N and E positive; S and W negative).
 */
window.ATLAS_DATA = {
  entries: [
    { id: 1, name: "Home base", loc: "LONDON, UK", when: "ALWAYS", note: "51° north. Where the passport lives between trips.", lat: 51.4993, lon: -0.1938 },
    { id: 2, name: "Lived & taught", loc: "VIETNAM", when: "", note: "A year of teaching, motorbikes and pho for breakfast.", lat: 16.0544, lon: 108.2022 },
    { id: 3, name: "Fuji summit", loc: "JAPAN", when: "", note: "Overnight ascent to catch sunrise above the clouds.", lat: 35.3606, lon: 138.7274 },
    { id: 4, name: "Fuego at night", loc: "GUATEMALA", when: "", note: "Camped on Acatenango, watched Fuego throw lava until 3am.", lat: 14.4747, lon: -90.8806 },
    { id: 5, name: "Petra & Wadi Rum", loc: "JORDAN", when: "", note: "Through the Siq at dawn, then a desert camp under the stars.", lat: 30.3285, lon: 35.4444 },
    { id: 6, name: "Scuba in the Red Sea", loc: "SHARM EL SHEIKH, EGYPT", when: "", note: "Reefs with visibility for days.", lat: 27.9158, lon: 34.33 },
    { id: 7, name: "Jet ski, island to island", loc: "CROATIA", when: "", note: "An Adriatic crossing between the Dalmatian islands.", lat: 43.38, lon: 16.44 },
    { id: 8, name: "Wild sea turtles", loc: "AUSTRALIA", when: "", note: "Swam alongside them on the southern Great Barrier Reef.", lat: -23.9, lon: 152.08 },
    { id: 9, name: "Kjeragbolten", loc: "NORWAY", when: "", note: "Stood on the boulder. Once was enough.", lat: 59.0336, lon: 6.5931 },
    { id: 10, name: "Caesars Palace poker champion", loc: "LAS VEGAS, USA", when: "", note: "Walked in a tourist, walked out a champion.", lat: 36.1162, lon: -115.1745 },
    { id: 11, name: "President's Club", loc: "PUNTA DE MITA, MEXICO", when: "SNOWFLAKE", note: "Earned the trip. Took the win, kept the tan.", lat: 20.7699, lon: -105.5185 },
    { id: 12, name: "Inside the Pyramids", loc: "GIZA, EGYPT", when: "", note: "Stepped into an ancient tomb — walking straight into history.", lat: 29.9773, lon: 31.1325 },
    { id: 13, name: "Shanghai from the tower", loc: "SHANGHAI, CHINA", when: "", note: "Up the main tower for a skyline that felt almost futuristic.", lat: 31.2336, lon: 121.5055 },
    { id: 14, name: "Vertical Hong Kong", loc: "HONG KONG", when: "", note: "Up the iconic tower for the full harbour and skyline buzz.", lat: 22.2855, lon: 114.1577 },
    { id: 15, name: "Marina Bay Sands", loc: "SINGAPORE", when: "", note: "Partied on the roof, then Gardens by the Bay — a city that built its own future.", lat: 1.2834, lon: 103.8607 },
    { id: 16, name: "Blue Lagoon & geysers", loc: "ICELAND", when: "", note: "Soaked in the lagoon, watched the earth erupt, ate reindeer and puffin.", lat: 63.8791, lon: -22.4438 },
    { id: 17, name: "Skydive over the Palm", loc: "DUBAI, UAE", when: "", note: "Jumped over Palm Jumeirah, then New Year's under the Burj Khalifa.", lat: 25.092, lon: 55.1381 },
    { id: 18, name: "Bruges & Brussels", loc: "BELGIUM", when: "", note: "Fairy-tale canals, then the chocolate-and-beer-soaked charm of Brussels.", lat: 51.2093, lon: 3.2247 },
    { id: 19, name: "Copenhagen", loc: "DENMARK", when: "", note: "Crown Jewels, Michelin Guide sandwiches and Christiania's free-spirited side.", lat: 55.6761, lon: 12.5683 },
    { id: 20, name: "Venice, Rome & Milan", loc: "ITALY", when: "", note: "Canals to ancient streets to polished style — the full sweep of Italy.", lat: 41.9028, lon: 12.4964 },
    { id: 21, name: "Champagne at Café de Paris", loc: "MONACO", when: "", note: "The first bottle. Appropriately ridiculous and glamorous.", lat: 43.7403, lon: 7.4278 },
    { id: 22, name: "Teenage years abroad", loc: "NETHERLANDS", when: "AGE 13–16", note: "Lived between Amsterdam and Den Haag — three years that shaped everything.", lat: 52.0705, lon: 4.3007 },
    { id: 23, name: "The Algarve", loc: "PORTUGAL", when: "", note: "Ate incredibly well, seaside pace the whole way.", lat: 37.0179, lon: -7.9304 },
    { id: 24, name: "Sagrada Família", loc: "BARCELONA, SPAIN", when: "", note: "Ancient, unfinished and otherworldly all at once.", lat: 41.4036, lon: 2.1744 },
    { id: 25, name: "The Vatican & vaults", loc: "VATICAN CITY", when: "", note: "Centuries of power, art, secrecy and spectacle.", lat: 41.9029, lon: 12.4534 },
    { id: 26, name: "Lucha libre & tacos", loc: "MEXICO CITY, MEXICO", when: "", note: "Lucha libre, a Michelin-recognised taco stand and tequila tasting.", lat: 19.4326, lon: -99.1332 },
    { id: 27, name: "New York, the classic", loc: "NEW YORK, USA", when: "", note: "Observatory views, parties and steak dinners at full speed.", lat: 40.7484, lon: -73.9857 },
    { id: 28, name: "Top down in Miami", loc: "MIAMI, USA", when: "", note: "24-hour parties and boulevard chaos, roof off.", lat: 25.7617, lon: -80.1918 },
    { id: 29, name: "Honky Tonk Highway", loc: "NASHVILLE, USA", when: "", note: "Proper BBQ, neon signs and live music till late.", lat: 36.1627, lon: -86.7816 },
    { id: 30, name: "6th Street & Franklin BBQ", loc: "AUSTIN, USA", when: "", note: "A shed that became a club, Clydesdales on 6th, Rogan's comedy club, Franklin to finish.", lat: 30.2672, lon: -97.7431 },
    { id: 31, name: "The Paris classics", loc: "PARIS, FRANCE", when: "", note: "Louvre, Notre-Dame and rooftop views — art, history and skyline glamour in one hit.", lat: 48.8566, lon: 2.3522 },
    { id: 32, name: "Nice & Èze", loc: "FRENCH RIVIERA", when: "", note: "Beaches in Nice, the hike up Èze, and that effortlessly cinematic Riviera pace.", lat: 43.7102, lon: 7.262 },
    { id: 33, name: "Zurich & Uetliberg", loc: "SWITZERLAND", when: "", note: "Lake days, the climb up Uetliberg, paddleboarding through unfairly perfect scenery.", lat: 47.3769, lon: 8.5417 },
    { id: 34, name: "Geneva", loc: "SWITZERLAND", when: "", note: "Swam the lake, toured the Patek Philippe Museum — watchmaking-and-waterfront polish.", lat: 46.2044, lon: 6.1432 },
    { id: 35, name: "Chamonix & Mont Blanc", loc: "FRENCH ALPS", when: "", note: "Up to the Mont Blanc station — views that make everything bigger, sharper, colder.", lat: 45.9237, lon: 6.8694 },
    { id: 36, name: "Berlin", loc: "GERMANY", when: "", note: "History, edge, nightlife and creative chaos — a city that never fully explains itself.", lat: 52.52, lon: 13.405 },
    { id: 37, name: "Prague", loc: "CZECHIA", when: "", note: "Old streets and a castle skyline — a Gothic storybook after a few beers.", lat: 50.0755, lon: 14.4378 },
    { id: 38, name: "Vienna & the Zombie", loc: "AUSTRIA", when: "", note: "Palaces and museums, then a first 'Zombie' — less imperial, more memorable.", lat: 48.2082, lon: 16.3738 },
    { id: 39, name: "Athens & the Islands", loc: "GREECE", when: "", note: "The ancient weight of Athens, then island-hopping to Santorini's postcard sunsets.", lat: 36.3932, lon: 25.4615 },
    { id: 40, name: "Bucharest & the lakes", loc: "ROMANIA", when: "", note: "Old Town, the 'Lake District', and Mr Castillo's lesson in how good a gyro is.", lat: 44.4268, lon: 26.1025 },
    { id: 41, name: "Snowdon summit", loc: "WALES", when: "", note: "Up through the cloud line to the roof of Wales, and back down before the weather turned.", lat: 53.0685, lon: -4.0763 },
    { id: 42, name: "LangBiang summit", loc: "DA LAT, VIETNAM", when: "", note: "The climb above Da Lat — the central highlands laid out green and endless.", lat: 12.0464, lon: 108.4419 },
    { id: 43, name: "Preikestolen", loc: "NORWAY", when: "", note: "The hike to Pulpit Rock — 604m of sheer nothing straight down to Lysefjord.", lat: 58.9864, lon: 6.1904 }
  ],

  wishes: [
    { id: 51, name: "Torres del Paine", loc: "PATAGONIA, CHILE", when: "", note: "The W trek, end to end.", lat: -50.9423, lon: -73.4068, wish: true },
    { id: 52, name: "Gorillas in the mist", loc: "RWANDA", when: "", note: "Volcanoes NP — one hour with a habituated troop.", lat: -1.4795, lon: 29.4926, wish: true },
    { id: 53, name: "Aurora, properly", loc: "TROMSØ, NORWAY", when: "", note: "69° north in deep winter, camera ready.", lat: 69.6492, lon: 18.9553, wish: true }
  ],

  meals: [
    { id: 101, name: "CORE by Clare Smyth", area: "NOTTING HILL", cuisine: "MODERN BRITISH", stars: 3, isLondon: true, lat: 51.5137, lon: -0.2010 },
    { id: 102, name: "Dinner by Heston Blumenthal", area: "KNIGHTSBRIDGE", cuisine: "TRADITIONAL BRITISH", stars: 1, isLondon: true, lat: 51.5021, lon: -0.1600 },
    { id: 103, name: "A. Wong", area: "VICTORIA", cuisine: "CHINESE", stars: 2, isLondon: true, lat: 51.4926, lon: -0.1420 },
    { id: 104, name: "Restaurant Story", area: "BERMONDSEY", cuisine: "MODERN CUISINE", stars: 2, isLondon: true, lat: 51.5027, lon: -0.0766 },
    { id: 105, name: "Humble Chicken", area: "SOHO", cuisine: "JAPANESE", stars: 1, isLondon: true, lat: 51.5136, lon: -0.1318 },
    { id: 106, name: "Angler", area: "MOORGATE", cuisine: "SEAFOOD", stars: 1, isLondon: true, lat: 51.5199, lon: -0.0864 },
    { id: 107, name: "Murano", area: "MAYFAIR", cuisine: "ITALIAN", stars: 1, isLondon: true, lat: 51.5079, lon: -0.1489 },
    { id: 108, name: "Galvin La Chapelle", area: "SPITALFIELDS", cuisine: "FRENCH", stars: 1, isLondon: true, lat: 51.5195, lon: -0.0786 },
    { id: 109, name: "HIDE", area: "PICCADILLY", cuisine: "MODERN BRITISH", stars: 1, isLondon: true, lat: 51.5066, lon: -0.1440 },
    { id: 110, name: "Sushi Kanesaka", area: "MAYFAIR", cuisine: "JAPANESE", stars: 1, isLondon: true, lat: 51.5063, lon: -0.1522 },
    { id: 111, name: "Cornucopia by Clare Smyth", area: "NOTTING HILL", cuisine: "TRADITIONAL BRITISH", stars: 1, isLondon: true, lat: 51.5150, lon: -0.2035 },
    { id: 112, name: "Dorian", area: "NOTTING HILL", cuisine: "MODERN BRITISH", stars: 1, isLondon: true, lat: 51.5158, lon: -0.1990 },
    { id: 113, name: "The Harwood Arms", area: "FULHAM", cuisine: "BRITISH GASTROPUB", stars: 1, isLondon: true, lat: 51.4808, lon: -0.1962 },
    { id: 114, name: "Kikunoi Roan", area: "KYOTO, JAPAN", cuisine: "JAPANESE", stars: 2, isLondon: false, lat: 35.0035, lon: 135.7710 },
    { id: 115, name: "San Ho Won", area: "SAN FRANCISCO, USA", cuisine: "KOREAN", stars: 1, isLondon: false, lat: 37.7614, lon: -122.4091 },
    { id: 116, name: "Moss", area: "GRINDAVÍK, ICELAND", cuisine: "MODERN CUISINE", stars: 1, isLondon: false, lat: 63.8804, lon: -22.4495 }
  ],

  mealWishes: [
    { id: 151, name: "The Ledbury", area: "NOTTING HILL", cuisine: "MODERN BRITISH", stars: 3, isLondon: true, lat: 51.5111, lon: -0.2003, wish: true },
    { id: 152, name: "Ikoyi", area: "THE STRAND", cuisine: "CREATIVE", stars: 2, isLondon: true, lat: 51.5104, lon: -0.1200, wish: true }
  ]
};

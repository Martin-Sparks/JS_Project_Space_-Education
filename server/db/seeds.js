use solar_system;
db.dropDatabase();

db.details.insertMany([
    {
        api_id: "soleil",
        englishName: "Sun",
        description: "The Sun is the star at the centre of our Solar System.  It is often referred to as a yellow dwarf star, though its light is actually closer to white than yellow.  It lies 25-28 thousand light years from the centre of our home galaxy, the Milky Way, in the Orion Arm.  Its closest neighbouring star is Proxima Centauri, 4.2 light years distant.",
        mythology: "As the most important source of energy for life on Earth, dominating the daytime skies, the Sun was worshipped by many ancient civilizations as a god.  The Romans worhipped Sol, the personification of the unconquered sun.  In ancient Greece, Helios rode his chariot through the sky, wearing his radiant crown.",
        symbol: "☉",
        distance_to: {
            mercure: 57910000,
            venus: 108200000,
            terre: 149600000,
            mars: 227900000,
            jupiter: 778500000,
            saturne: 1434000000,
            uranus: 2871000000,
            neptune: 4495000000,
            pluton: 5906380000
        },
        photo: "https://images-assets.nasa.gov/image/PIA11132/PIA11132~orig.jpg"
    },
    {
        api_id: "mercure",
        englishName: "Mercury",
        description: "Mercury is the smallest true planet in our Solar System, lying closest to the Sun.  It is smaller than the largest moons of Jupiter and Saturn, Ganymede and Titan, though larger than the dwarf planet Pluto.  Mercury has a very thin, almost non-existent, atmosphere and a barren, crater-pocked surface similar to the Moon.  It has no moons of its own.",
        mythology: "Mercury crosses the sky faster than any other planet, and is therefore named for the Roman messenger god, who ran faster than the wind in his winged shoes and hat.  Mercury was the god of travellers, communication and commerce.  He carried a magical staff called the caduceus, entwined with snakes, and was responsible for guiding souls to the underworld.  The Greeks called him Hermes.",
        symbol: "☿",
        distance_to: {
            soleil: 57910000,
            venus: 50290000,
            terre: 91691000,
            mars: 170030000,
            jupiter: 720420000,
            saturne: 1366690000,
            uranus: 2815640000,
            neptune: 4443090000,
            pluton: 5848470000
        },
        photo: "https://images-assets.nasa.gov/image/PIA11132/PIA11132~orig.jpg"
    },
    {
        api_id: "venus",
        englishName: "Venus",
        description: "Venus is the closest planet to Earth, similar in size and composition but suffering from an advanced greenhouse effect.  Venus is thus the hottest planet in our Solar System, despite Mercury being closer to the Sun.  Under thick clouds of sulphuric acid, the volcanic surface bakes at over 460 degrees centigrade.  Venus and Mercury are the only planets in our Solar System without moons.",
        mythology: "Venus outshines everything in the night sky except the moon, and is named for the Roman goddess of love and beauty.  Like her Greek equivalent, Aphrodite, she was born from foam on the surface of the sea.  The Romans believed Venus was their ancestor, tracing their family tree back to her son Aeneas, who fled to Italy when the ancient city of Troy was destroyed.",
        symbol: "♀",
        distance_to: {
            soleil: 108200000,
            mercure: 50290000,
            terre: 41400000,
            mars: 119740000,
            jupiter: 670130000,
            saturne: 1316400000,
            uranus: 2765350000,
            neptune: 4392800000,
            pluton: 5798180000
        },
        photo: "https://images-assets.nasa.gov/image/PIA11132/PIA11132~orig.jpg"
        },
    {
        api_id: "terre",
        englishName: "Earth",
        description: "Our home planet is over 4.5 billion years old, and the only planet currently known to support life.  Day becomes night as the Earth spins, and the seasons turn as the planet wobbles on its axis.  Earth's Moon is larger than Pluto, believed to have been formed upon collision with a proto-planet the size of Mars.  The Moon's gravity drags on Earth's oceans, leading to the rhythm of the tides.",
        mythology: "Much like the Sun, the Earth itself was worshipped by many ancient civilizations.  Traditionally a goddess, Mother Earth was called Terra by the Romans and Gaia by the Greeks.  Gaia was the daughter of Chaos, mother of the Titans and grandmother to all the gods of Mount Olympus.  She gave birth to Uranus, the sky.",
        symbol: "⨁",
        distance_to: {
            soleil: 149600000,
            mercure: 91691000,
            venus: 41400000,
            mars: 78340000,
            jupiter: 628730000,
            saturne: 1275000000,
            uranus: 2723950000,
            neptune: 4351400000,
            pluton: 5756780000,
        },
        photo: "https://images-assets.nasa.gov/image/PIA11132/PIA11132~orig.jpg"
        },
    {
        api_id: "mars",
        englishName: "Mars",
        description: "The Red Planet's colour is caused by high levels of rusty iron oxide in its rocks and soil.  Like Earth, Mars has ice caps of frozen water.  If melted, these would cover the whole planet in a shallow sea.  Olympus Mons is a giant extinct volcano, three times higher than Mount Everest.  Mars' misshapen moons, Phobos and Deimos, are thought to be asteroids captured from the nearby belt.",
        mythology: "Blood red, Mars is named for the Roman god of war, and its moons named for his sons Phobos and Deimos (fear and terror).  Son of Jupiter and Juno, Mars was equivalent to the Greek god Ares.  He was the father of Romulus and Remus, founders of Rome, twin brothers raised in the the wilds by a she-wolf.  As a military people, Mars was very important to the Romans.  The month of March is named for him.",
        symbol: "♂",
        distance_to: {
            soleil: 227900000,
            mercure: 170030000,
            venus: 119740000,
            terre: 78340000,
            jupiter: 550390000,
            saturne: 1196660000,
            uranus: 2645610000,
            neptune: 4273060000,
            pluton: 5678480000
        },
        photo: "https://images-assets.nasa.gov/image/PIA11132/PIA11132~orig.jpg"
        },
    {
        api_id: "jupiter",
        englishName: "Jupiter",
        description: "Jupiter is the largest planet, and the third brightest object in the night sky after the Moon and Venus.  It is a gas giant, with a roiling, stormy atmosphere and no defined solid surface.  The Great Red Spot is a huge storm that has been raging since at least the 17th century.  Jupiter has 79 known moons, four of which were large enough to be spotted by Galileo Galilei through a telescope in 1610.",
        mythology: "As the largest planet in our solar system, it is fitting that Jupiter is named for the king of the gods.  Jupiter (also known as Jove) was the Roman god of the sky, the thunderbolt was his weapon and the eagle his animal.  He was the brother of Neptune and Pluto, the sea and the underworld.  His counterpart in Greek mythology was Zeus, the ruler of all the gods of Mount Olympus.",
        symbol: "♃",
        distance_to: {
            soleil: 778500000,
            mercure: 720420000,
            venus: 670130000,
            terre: 628730000,
            mars: 550390000,
            saturne: 646270000,
            uranus: 2095220000,
            neptune: 3722670000,
            pluton: 5127880000
        },
        photo: "https://images-assets.nasa.gov/image/PIA11132/PIA11132~orig.jpg"
        },
    {
        api_id: "saturne",
        englishName: "Saturn",
        description: "Famous for its rings, which are formed largely of ice, Saturn is the only planet in the Solar System less dense than water.  If you could find a bathtub large enough, it would float.  With 82 known moons, Saturn has more than any other planet.  Titan, its largest, is the only moon known to have a significant atmosphere - methane rain falls from the sky into rivers, lakes and seas.",
        mythology: "Saturn was the Roman god of wealth and agriculture, father to Jupiter, Neptune and Pluto.  Wielding his sickle, Saturn is equivalent to the Greek Titan Cronus, son of Uranus and father of Zeus.  Saturn was the god of time and the turning of the seasons, origin of Father Time.  Saturday is named for him.",
        symbol: "♄",
        distance_to: {
            soleil: 1434000000,
            mercure: 1366690000,
            venus: 1316400000,
            terre: 1275000000,
            mars: 1196660000,
            jupiter: 646270000,
            uranus: 1448950000,
            neptune: 3076400000,
            pluton: 4472380000
        },
        photo: "https://images-assets.nasa.gov/image/PIA11132/PIA11132~orig.jpg"
        },
    {
        api_id: "uranus",
        englishName: "Uranus",
        description: "Like Neptune, Uranus is known as an ice giant, as its atmosphere is more ice than gas.  Uranus looks like a huge, greenish-blue, featureless marble, with few visible patterns in its thick layer of clouds.  Scientists believe that oceans of liquid diamond exist on Uranus, with floating diamond-bergs, and that diamonds also fall from the sky like hailstones.  Uranus has 13 narrow, dark rings.",
        mythology: "Uranus is the only planet named for a Greek god, rather than a Roman one.  Were the planet to be named after his Roman counterpart, it would be called Caelus.  Uranus (or Ouranos) was the personification of the sky, son and husband of Gaia, the Earth.  Uranus was a cruel father, ultimately overthrown by his son Cronus, whom the Romans called Saturn.",
        symbol: "⛢",
        distance_to: {
            soleil: 2871000000,
            mercure: 2815640000,
            venus: 2765350000,
            terre: 2723950000,
            mars: 2645610000,
            jupiter: 2095220000,
            saturne: 1448950000,
            neptune: 1627450000,
            pluton: 3035380000
        },
        photo: "https://images-assets.nasa.gov/image/PIA11132/PIA11132~orig.jpg"
        },
    {
        api_id: "neptune",
        englishName: "Neptune",
        description: "The farthest known true planet in our Solar System, Neptune is not visible to the naked eye.  It has a Great Dark Spot, similar to Jupiter's Great Red Spot, and a faint system of broken rings known as arcs.  Its atmosphere is much like that of Uranus, though a deeper blue, and it too is thought to have seas of liquid diamond.  Neptune has 14 known moons, named after lesser sea gods.",
        mythology: "With its blue colour, just visible through a telescope, Neptune was named for the Roman god of the sea.  He was also the god of springs, lakes, rivers and freshwater.  Like his Greek counterpart Poseidon, Neptune was the god of horses too.  He carried a trident as his weapon and symbol.",
        symbol: "♆",
        distance_to: {
            soleil: 4495000000,
            mercure: 4443090000,
            venus: 4392800000,
            terre: 4351400000,
            mars: 4273060000,
            jupiter: 3722670000,
            saturne: 3076400000,
            uranus: 1627450000,
            pluton: 141138000
        },
        photo: "https://images-assets.nasa.gov/image/PIA11132/PIA11132~orig.jpg"
        },
    {
        api_id: "pluton",
        englishName: "Pluto",
        description: "Pluto is an icy dwarf planet in the Kupier belt.  Charon, its largest moon, is over half the size of Pluto - so big that the two objects orbit around each other in a binary system.  In 2006, Pluto was downgraded from a true planet to a dwarf planet.  Though it orbits the Sun, and is large enough to be rounded by its own gravity, its gravitational field is not strong enough to clear the space around it.",
        mythology: "Far from the light of the Sun, icy and barren, Pluto is appropriately named for the Roman god of the underworld.  His Greek counterpart is Hades, famous for stealing his wife Persephone away from her loving mother Demeter, goddess of the harvest.  Hades tricked Persephone, obliging her to spend a third of the year with him underground.  During these winter months, Demeter forbids plants to grow.",
        symbol: "♇",
        distance_to: {
            soleil:	5906380000,
            mercure: 5848470000,
            venus: 5798180000,
            terre: 5756780000,
            mars: 5678480000,
            jupiter: 5127880000,
            saturne: 4472380000,
            uranus: 3035380000,
            neptune: 141138000
        },
        photo: "https://images-assets.nasa.gov/image/PIA11132/PIA11132~orig.jpg"
        }
]);



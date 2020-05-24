use solar_system;
db.dropDatabase();

db.details.insertMany([
    {
        api_id: "soleil",
        englishName: "Sun",
        description: "",
        mythology: "As the most important source of energy for life on Earth, dominating the daytime skies, the Sun was worshipped by many ancient civilizations as a god.  The Romans worhipped Sol, the personification of the unconquered sun.  In ancient Greece, Helios rode his chariot through the sky, wearing his radiant crown.",
        symbol: "☉",
        photo: ""
    },
    {
        api_id: "mercure",
        englishName: "Mercury",
        description: "",
        mythology: "Mercury crosses the sky faster than any other planet, and is therefore named for the Roman messenger god, who ran faster than the wind in his winged shoes and hat.  Mercury was the god of travellers, communication and commerce.  He carried a magical staff called the caduceus, entwined with snakes, and was responsible for guiding souls to the underworld.  The Greeks called him Hermes.",
        symbol: "☿",
        photo: ""
    },
    {
        api_id: "venus",
        englishName: "Venus",
        description: "",
        mythology: "Venus outshines everything in the night sky except the moon, and is named for the Roman goddess of love and beauty.  Like her Greek equivalent, Aphrodite, she was born from foam on the surface of the sea.  The Romans believed Venus was their ancestor, tracing their family tree back to her son Aeneas, who fled to Italy when the ancient city of Troy was destroyed.",
        symbol: "♀",
        photo: ""
    },
    {
        api_id: "terre",
        englishName: "Earth",
        description: "",
        mythology: "Much like the Sun, the Earth itself was worshipped by many ancient civilizations.  Traditionally a goddess, Mother Earth was called Terra by the Romans and Gaia by the Greeks.  Gaia was the daughter of Chaos, mother of the Titans and grandmother to all the gods of Mount Olympus.  She gave birth to Uranus, the sky.",
        symbol: "⨁",
        photo: ""
    },
    {
        api_id: "mars",
        englishName: "Mars",
        description: "",
        mythology: "Blood red, Mars is named for the Roman god of war.  Son of Jupiter and Juno, Mars was equivalent to the Greek god Ares.  He was the father of Romulus and Remus, founders of Rome, twin brothers raised in the the wilds by a she-wolf.  As a military people, Mars was very important to the Romans.  The month of March is named for him.",
        symbol: "♂",
        photo: ""
    },
    {
        api_id: "jupiter",
        englishName: "Jupiter",
        description: "",
        mythology: "As the largest planet in our solar system, it is fitting that Jupiter is named for the king of the gods.  Jupiter (also known as Jove) was the Roman god of the sky, the thunderbolt was his weapon and the eagle his animal.  He was the brother of Neptune and Pluto, the sea and the underworld.  His counterpart in Greek mythology was Zeus, the ruler of all the gods of Mount Olympus.",
        symbol: "♃",
        photo: ""
    },
    {
        api_id: "saturne",
        englishName: "Saturn",
        description: "",
        mythology: "Saturn was the Roman god of wealth and agriculture, father to Jupiter, Neptune and Pluto.  Wielding his sickle, Saturn is equivalent to the Greek Titan Cronus, son of Uranus and father of Zeus.  Saturn was the god of time and the turning of the seasons, origin of Father Time.  Saturday is named for him.",
        symbol: "♄",
        photo: ""
    },
    {
        api_id: "uranus",
        englishName: "Uranus",
        description: "",
        mythology: "Uranus is the only planet named for a Greek god, rather than a Roman one.  Were the planet to be named after his Roman counterpart, it would be called Caelus.  Uranus (or Ouranos) was the personification of the sky, son and husband of Gaia, the Earth.  Uranus was a cruel father, ultimately overthrown by his son Cronus, whom the Romans called Saturn.",
        symbol: "⛢",
        photo: ""
    },
    {
        api_id: "neptune",
        englishName: "Neptune",
        description: "",
        mythology: "With its blue colour, just visible through a telescope, Neptune was named for the Roman god of the sea.  He was also the god of springs, lakes, rivers and freshwater.  Like his Greek counterpart Poseidon, Neptune was the god of horses too.  He carried a trident as his weapon and symbol.",
        symbol: "♆",
        photo: ""
    },
    {
        api_id: "pluton",
        englishName: "Pluto",
        description: "",
        mythology: "Far from the light of the Sun, icy and barren, Pluto is appropriately named for the Roman god of the underworld.  His Greek counterpart is Hades, famous for stealing his wife Persephone away from her loving mother Demeter, goddess of the harvest.  Hades tricked Persephone, obliging her to spend a third of the year with him underground.  During these winter months, Demeter forbids plants to grow.",
        symbol: "♇",
        photo: ""
    }
]);



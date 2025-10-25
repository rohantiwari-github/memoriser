interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

const questionsData: Record<string, Question[]> = {
    week1: [
        {
            "question": "\"Science of relationships between organisms and their environments\" is the definition of:",
            "options": ["conservation", "preservation", "environmentalism", "ecology"],
            "correctAnswer": "ecology"
        },
        {
            "question": "The Trinity explosion of 1945 is taken as the beginning of the",
            "options": ["Holocene", "Cenocene", "Anthropocene", "Eocene"],
            "correctAnswer": "Anthropocene"
        },
        {
            "question": "Sustainable harvest of resources falls under the category of:",
            "options": ["conservation", "preservation", "environmentalism", "none of the above"],
            "correctAnswer": "conservation"
        },
        {
            "question": "The quantum of human impacts can be written as",
            "options": ["I = P + A + T", "I = P X A + T", "I = P X A X T", "I = P + A X T"],
            "correctAnswer": "I = P X A X T"
        },
        {
            "question": "The discipline of Demography is most closely related to:",
            "options": ["Phytogeography", "Zoogeography", "Population Geography", "Economic Geography"],
            "correctAnswer": "Population Geography"
        },
        {
            "question": "\"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor.\" This is the statement for",
            "options": ["Liebig's law of the minimum", "Liebig's law of the maximum", "Shelford's law of tolerance", "Shelford's law of intolerance"],
            "correctAnswer": "Liebig's law of the minimum"
        },
        {
            "question": "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
            "options": ["Liebig's law of the minimum", "Liebig's law of the maximum", "Shelford's law of tolerance", "Shelford's law of intolerance"],
            "correctAnswer": "Shelford's law of tolerance"
        },
        {
            "question": "The regional approach to Geography was developed by:",
            "options": ["Alexander von Humboldt", "Karl Ritter", "Rene Descartes", "Eratosthenes"],
            "correctAnswer": "Karl Ritter"
        },
        {
            "question": "Good climate is a",
            "options": ["chemical factor", "demographic factor", "push factor", "pull factor"],
            "correctAnswer": "pull factor"
        },
        {
            "question": "Scarcity of food is a",
            "options": ["chemical factor", "demographic factor", "push factor", "pull factor"],
            "correctAnswer": "push factor"
        },
    ],
    week2: [
        {
            "question": "In an undisturbed sedimentary strata, bottom layers are older than layers above them. This is known as",
            "options": ["Principle of superposition", "Principle of original horizontality", "Principle of lateral continuity", "Principle of inclusions"],
            "correctAnswer": "Principle of superposition"
        },
        {
            "question": "Mount Vesuvius is an example of",
            "options": ["Shield volcano", "Composite volcano", "Caldera", "Flood basalt province"],
            "correctAnswer": "Composite volcano"
        },
        {
            "question": "Krakatoa eruption resulted in the formation of",
            "options": ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"],
            "correctAnswer": "Caldera"
        },
        {
            "question": "Which of these is not a method of absolute dating?",
            "options": ["radioisotope dating", "thermoluminescence dating", "inclusion study", "fission track dating"],
            "correctAnswer": "inclusion study"
        },
        {
            "question": "Which of these is true about S waves?",
            "options": ["They are longitudinal in nature", "They are transverse in nature", "They cannot move through solids, liquids and gases", "They are the first to reach the surface of the Earth"],
            "correctAnswer": "They are transverse in nature"
        },
        {
            "question": "Hawaiian volcanoes are an example of",
            "options": ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"],
            "correctAnswer": "Shield volcano"
        },
        {
            "question": "Within a depositional basin, strata are laterally continuous in all directions till the edge of the basin. This is known as",
            "options": ["Principle of superposition", "Principle of original horizontality", "Principle of lateral continuity", "Principle of inclusions"],
            "correctAnswer": "Principle of lateral continuity"
        },
        {
            "question": "Which of these is a gas giant?",
            "options": ["Mercury", "Venus", "Mars", "Saturn"],
            "correctAnswer": "Saturn"
        },
        {
            "question": "Assemblage of fossils are unique to the time that they lived in, and so can be used to age rocks across a wide geographic distribution. This is known as",
            "options": ["Principle of fossil succession", "Principle of original horizontality", "Principle of superposition", "Principle of cross-cutting relationships"],
            "correctAnswer": "Principle of fossil succession"
        },
        {
            "question": "Which of these is an example of direct source of information about the Earth?",
            "options": ["earthquake", "volcanic eruption", "magnetic survey", "gravity anomaly"],
            "correctAnswer": "volcanic eruption"
        },
    ],
    week3: [
        {
            "question": "\"the points where three or more cirques meet\" is the definition of",
            "options": ["cirque", "arete", "horn", "hanging valley"],
            "correctAnswer": "horn"
        },
        {
            "question": "Which of these is an example of endogenic process?",
            "options": ["weathering", "mass movement", "erosion", "folding"],
            "correctAnswer": "folding"
        },
        {
            "question": "Sandstone is an example of",
            "options": ["siliciclastic rock", "carbonate rock", "evaporite rock", "phosphatic rock"],
            "correctAnswer": "siliciclastic rock"
        },
        {
            "question": "\"smooth oval-shaped ridge-like features comprised of glacial till, gravel and sand arranged parallel to the direction of ice movement\" is the definition of",
            "options": ["glacial till", "outwash deposit", "esker", "drumlin"],
            "correctAnswer": "drumlin"
        },
        {
            "question": "Which of these is an example of exogenic process?",
            "options": ["volcanism", "earthquake", "plate tectonics", "deposition"],
            "correctAnswer": "deposition"
        },
        {
            "question": "\"white or colourless hard mineral virtually insoluble in water\" is a description of",
            "options": ["amphiboles", "quartz", "feldspar", "pyroxene"],
            "correctAnswer": "quartz"
        },
        {
            "question": "Dolomite is an example of",
            "options": ["siliciclastic rock", "carbonate rock", "evaporite rock", "phosphatic rock"],
            "correctAnswer": "carbonate rock"
        },
        {
            "question": "\"green or black coloured inosilicate minerals forming prism or needle-like crystals\" is a description of",
            "options": ["amphiboles", "feldspar", "mica", "pyroxene"],
            "correctAnswer": "amphiboles"
        },
        {
            "question": "\"deep, long and wide troughs or basins with very steep concave to vertically dropping high walls as its head and sides\" is the definition of",
            "options": ["cirque", "arete", "horn", "hanging valley"],
            "correctAnswer": "cirque"
        },
        {
            "question": "\"magnesium iron silicate; a primary component of the Earth's upper mantle\" is a description of",
            "options": ["amphiboles", "feldspar", "quartz", "olivine"],
            "correctAnswer": "olivine"
        },
    ],
    week4: [
        {
            "question": "Which of these air masses is generally cool and moist?",
            "options": ["cP", "cT", "mP", "mT"],
            "correctAnswer": "mP"
        },
        {
            "question": "Which of these air masses is generally cold and dry?",
            "options": ["cP", "cT", "mP", "mT"],
            "correctAnswer": "cP"
        },
        {
            "question": "The ISS orbits in which layer?",
            "options": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            "correctAnswer": "Thermosphere"
        },
        {
            "question": "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called",
            "options": ["adaptation", "mitigation", "deceleration", "maladaptation"],
            "correctAnswer": "mitigation"
        },
        {
            "question": "Surplus seed and sperm banking is an adaptation option to facilitate",
            "options": ["resistance to climate changes", "resilience to climate changes", "response to climate changes", "none of these"],
            "correctAnswer": "resilience to climate changes"
        },
        {
            "question": "The classical period for taking averages for climate is",
            "options": ["10 years", "20 years", "30 years", "40 years"],
            "correctAnswer": "30 years"
        },
        {
            "question": "Noctilucent clouds are present in which layer?",
            "options": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            "correctAnswer": "Mesosphere"
        },
        {
            "question": "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called",
            "options": ["adaptation", "mitigation", "deceleration", "maladaptation"],
            "correctAnswer": "adaptation"
        },
        {
            "question": "Which of these is home to the ozone layer?",
            "options": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            "correctAnswer": "Stratosphere"
        },
        {
            "question": "Most of the weather phenomena occur in",
            "options": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            "correctAnswer": "Troposphere"
        },
    ],
    week5: [
        {
            "question": "Equal density curves are called",
            "options": ["isopycnal curves", "isohaline curves", "isotherm curves", "isobuoyant curves"],
            "correctAnswer": "isopycnal curves"
        },
        {
            "question": "Which of these is a minor feature of the ocean floor?",
            "options": ["continental shelf", "continental slope", "guyot", "abyssal plain"],
            "correctAnswer": "guyot"
        },
        {
            "question": "\"mountains with pointed summits rising from the sea floor, but not reaching the surface of the ocean\" is a description of",
            "options": ["oceanic deep / trench", "mid-oceanic ridge", "seamount", "atoll"],
            "correctAnswer": "seamount"
        },
        {
            "question": "Which of these is the largest habitat on the Earth?",
            "options": ["continental shelf", "continental slope", "guyot", "abyssal plain"],
            "correctAnswer": "abyssal plain"
        },
        {
            "question": "Which of these are the largest mountain ranges on Earth?",
            "options": ["oceanic deep / trench", "mid-oceanic ridge", "seamount", "atoll"],
            "correctAnswer": "mid-oceanic ridge"
        },
        {
            "question": "\"deep valleys, often cutting across continental shelves and slopes\" is a description of",
            "options": ["oceanic deep / trench", "mid-oceanic ridge", "guyot", "submarine canyon"],
            "correctAnswer": "submarine canyon"
        },
        {
            "question": "Continental slope has a gradient of",
            "options": ["0-1 degree", "1-2 degree", "2-5 degree", "5-10 degree"],
            "correctAnswer": "2-5 degree"
        },
        {
            "question": "Which of these is not a prominent tidal pattern?",
            "options": ["diurnal", "mixed diurnal", "semidiurnal", "mixed semidiurnal"],
            "correctAnswer": "mixed diurnal"
        },
        {
            "question": "\"relatively steep-sided, narrow, deep basins\" is a description of",
            "options": ["oceanic deep / trench", "mid-oceanic ridge", "seamount", "atoll"],
            "correctAnswer": "oceanic deep / trench"
        },
        {
            "question": "In the sea, a layer where the temperature decreases rapidly from the mixed upper layer to the cold deeper layer is called",
            "options": ["isopycnal", "thermophil", "thermohaline", "thermocline"],
            "correctAnswer": "thermocline"
        },
    ],
    week6: [
        {
            "question": "In Koeppen classification, which is hot summer temperature?",
            "options": ["h", "k", "a", "b"],
            "correctAnswer": "a"
        },
        {
            "question": "In Koeppen classification, which is desert precipitation?",
            "options": ["W", "S", "f", "s"],
            "correctAnswer": "W"
        },
        {
            "question": "India's location is",
            "options": ["Equatorial in South, Tropical in North", "Tropical in South, Equatorial in North", "Tropical in South, Sub-tropical in North", "Sub-tropical in South, Tropical in North"],
            "correctAnswer": "Tropical in South, Sub-tropical in North"
        },
        {
            "question": "In Koeppen classification, which is cold arid temperature?",
            "options": ["h", "k", "a", "b"],
            "correctAnswer": "k"
        },
        {
            "question": "In Koeppen classification, which is winter dry precipitation?",
            "options": ["w", "S", "f", "s"],
            "correctAnswer": "w"
        },
        {
            "question": "In Koeppen classification, which is cool summer temperature?",
            "options": ["c", "d", "F", "T"],
            "correctAnswer": "c"
        },
        {
            "question": "Which of these is the correct sequence of seasons in India?",
            "options": ["Hot weather season → Retreating monsoon season → South-West monsoon season → Cold weather season", "Hot weather season → South-West monsoon season → Retreating monsoon season → Cold weather season", "Hot weather season → Cold weather season → South-West monsoon season → Retreating monsoon season", "Hot weather season → South-West monsoon season → Cold weather season → Retreating monsoon season"],
            "correctAnswer": "Hot weather season → South-West monsoon season → Retreating monsoon season → Cold weather season"
        },
        {
            "question": "In Koeppen classification, which is monsoonal precipitation?",
            "options": ["W", "S", "m", "s"],
            "correctAnswer": "m"
        },
        {
            "question": "Physiography is the outcome of",
            "options": ["structure", "process", "stage of development", "all of these"],
            "correctAnswer": "all of these"
        },
        {
            "question": "In Koeppen classification, which is equatorial climate?",
            "options": ["A", "B", "C", "D"],
            "correctAnswer": "A"
        },
    ],
    week7: [
        {
            "question": "Soil formation is dependent upon",
            "options": ["vegetation", "time", "climate", "all of the above"],
            "correctAnswer": "all of the above"
        },
        {
            "question": "Which of these is not a characteristic of pioneer species",
            "options": ["ability to grow on bare rocks", "ability to tolerate extreme temperatures", "large size", "short life span"],
            "correctAnswer": "large size"
        },
        {
            "question": "\"groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such groups\" is a definition of",
            "options": ["cells", "species", "ecosystems", "biomes"],
            "correctAnswer": "species"
        },
        {
            "question": "Mechanical action of ocean waves is an example of",
            "options": ["chemical weathering", "physical weathering", "biological weathering", "none of the above"],
            "correctAnswer": "physical weathering"
        },
        {
            "question": "The climax near Tindni village is being controlled by disturbance by cattle. This is an example of",
            "options": ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"],
            "correctAnswer": "disclimax"
        },
        {
            "question": "Carbonation is an example of",
            "options": ["chemical weathering", "physical weathering", "biological weathering", "none of the above"],
            "correctAnswer": "chemical weathering"
        },
        {
            "question": "In soil profile, C refers to",
            "options": ["organic surface layer", "topsoil layer", "subsoil layer", "substratum layer"],
            "correctAnswer": "substratum layer"
        },
        {
            "question": "A climax caused by wildfires is an example of",
            "options": ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"],
            "correctAnswer": "catastrophic climax"
        },
        {
            "question": "Regur is a term for",
            "options": ["black cotton soil", "alluvial soil", "saline soil", "red and yellow soil"],
            "correctAnswer": "black cotton soil"
        },
        {
            "question": "\"the diversity that exists among different geographies\" is",
            "options": ["alpha (α) biodiversity", "beta (β) biodiversity", "gamma (γ) biodiversity", "delta (δ) biodiversity"],
            "correctAnswer": "gamma (γ) biodiversity"
        },
    ],
    week8: [
        {
            "question": "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
            "options": ["least concern species", "keystone species", "flagship species", "extinct species"],
            "correctAnswer": "keystone species"
        },
        {
            "question": "The \"subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce\" is the definition of",
            "options": ["habitat", "ecosystem", "biome", "biosphere"],
            "correctAnswer": "habitat"
        },
        {
            "question": "Which of these correctly represents the process of habitat fragmentation and loss?",
            "options": [
                "Original forest → Dissection → Perforation → Fragmentation → Attrition",
                "Original forest → Dissection → Attrition → Fragmentation → Perforation",
                "Original forest → Dissection → Perforation → Attrition → Fragmentation",
                "Original forest → Dissection → Fragmentation → Perforation → Attrition"
            ],
            "correctAnswer": "Original forest → Dissection → Perforation → Fragmentation → Attrition"
        },
        {
            "question": "Soil formation is an example of",
            "options": ["provisioning service", "regulating service", "supporting service", "cultural service"],
            "correctAnswer": "supporting service"
        },
        {
            "question": "Biological control of pest populations is an example of",
            "options": ["provisioning service", "regulating service", "supporting service", "cultural service"],
            "correctAnswer": "regulating service"
        },
        {
            "question": "The acronym HIPPO does not include",
            "options": ["habitat loss", "invasive species", "pollination", "pollution"],
            "correctAnswer": "pollination"
        },
        {
            "question": "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
            "options": ["umbrella species", "keystone species", "flagship species", "all of the above"],
            "correctAnswer": "all of the above"
        },
        {
            "question": "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
            "options": ["umbrella species", "keystone species", "flagship species", "extinct species"],
            "correctAnswer": "flagship species"
        },
        {
            "question": "Captive breeding is an example of",
            "options": ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"],
            "correctAnswer": "ex-situ conservation"
        },
        {
            "question": "We prefer those areas for the creation of a conservation reserve where the level of threat is",
            "options": ["very high", "medium", "very low", "non-existent"],
            "correctAnswer": "medium"
        },
    ],
    week9: [
        {
            "question": "According to Malthusian model,",
            "options": [
                "Population grows in geometric progression, food supply increases in arithmetic progression",
                "Population grows in geometric progression, food supply increases in geometric progression",
                "Population grows in arithmetic progression, food supply increases in arithmetic progression",
                "Population grows in arithmetic progression, food supply increases in geometric progression"
            ],
            "correctAnswer": "Population grows in geometric progression, food supply increases in arithmetic progression"
        },
        {
            "question": "Which of these is commonly observed during humanising of nature?",
            "options": [
                "environmental determinism",
                "possibilism",
                "neodeterminism",
                "stop and go determinism"
            ],
            "correctAnswer": "possibilism"
        },
        {
            "question": "Which of these is a pillar of sustainability",
            "options": [
                "social sustainability",
                "industrial sustainability",
                "agricultural sustainability",
                "trans-boundary sustainability"
            ],
            "correctAnswer": "social sustainability"
        },
        {
            "question": "Which of these is commonly observed in primitive societies?",
            "options": [
                "environmental determinism",
                "possibilism",
                "neodeterminism",
                "stop and go determinism"
            ],
            "correctAnswer": "environmental determinism"
        },
        {
            "question": "The demographic transition sees a society move from",
            "options": [
                "high birth rate, low death rate to low birth rate, high death rate",
                "low birth rate, high death rate to low birth rate, low death rate",
                "high birth rate, high death rate to low birth rate, low death rate",
                "high birth rate, high death rate to low birth rate, high death rate"
            ],
            "correctAnswer": "high birth rate, high death rate to low birth rate, low death rate"
        },
        {
            "question": "The logistic growth equation curve is",
            "options": [
                "I-shaped",
                "J-shaped",
                "S-shaped",
                "U-shaped"
            ],
            "correctAnswer": "S-shaped"
        },
        {
            "question": "Which of these is a preventive check according to Malthus?",
            "options": [
                "foresight",
                "vice",
                "misery",
                "flood"
            ],
            "correctAnswer": "foresight"
        },
        {
            "question": "Which of these is not a pillar of sustainability?",
            "options": [
                "environmental sustainability",
                "economic sustainability",
                "trans-boundary sustainability",
                "social sustainability"
            ],
            "correctAnswer": "trans-boundary sustainability"
        },
        {
            "question": "The book \"An Essay on the Principle of Population\" was written by",
            "options": [
                "Darwin",
                "Malthus",
                "Spencer",
                "Owens"
            ],
            "correctAnswer": "Malthus"
        },
        {
            "question": "Which of these is a positive check according to Malthus?",
            "options": [
                "late marriage",
                "war",
                "celibacy",
                "moral restraint"
            ],
            "correctAnswer": "war"
        },
    ],
    week10: [
        {
            "question": "Hydrogen for nuclear fusion comes under the category of",
            "options": ["potential resources", "actual resources", "reserve resources", "stock resources"],
            "correctAnswer": "stock resources"
        },
        {
            "question": "Which of these is the largest source of ammonia (NH3) in the atmosphere?",
            "options": ["animal manure", "mineral fertiliser", "crops and their decomposition", "human waste"],
            "correctAnswer": "animal manure"
        },
        {
            "question": "\"the part of actual resources that can be developed profitably in the future\" is a definition of",
            "options": ["potential resources", "actual resources", "reserve resources", "stock resources"],
            "correctAnswer": "reserve resources"
        },
        {
            "question": "Timber from forests that is being harvested can be categorised under",
            "options": ["potential resources", "actual resources", "reserve resources", "stock resources"],
            "correctAnswer": "actual resources"
        },
        {
            "question": "Rain gardens are primarily meant to",
            "options": ["reduce water usage", "increase recharge to groundwater", "protect existing water sources", "increase water flow to streams"],
            "correctAnswer": "increase recharge to groundwater"
        },
        {
            "question": "Oil that has not been drilled can be categorised under",
            "options": ["potential resources", "actual resources", "reserve resources", "stock resources"],
            "correctAnswer": "potential resources"
        },
        {
            "question": "Which of these is the largest source of nitrogen oxides in the atmosphere?",
            "options": ["electricity generation", "mobile sources", "industrial processes", "waste disposal"],
            "correctAnswer": "mobile sources"
        },
        {
            "question": "\"those resources that are currently being used after surveying, quantification and qualification\" is a definition of",
            "options": ["potential resources", "actual resources", "reserve resources", "stock resources"],
            "correctAnswer": "actual resources"
        },
        {
            "question": "\"those resources that may be used in the future\" is a definition of",
            "options": ["potential resources", "actual resources", "reserve resources", "stock resources"],
            "correctAnswer": "potential resources"
        },
        {
            "question": "Low concentration ores come in the category of",
            "options": ["potential resources", "actual resources", "reserve resources", "stock resources"],
            "correctAnswer": "reserve resources"
        },
    ],
    week11: [
        {
      "question": "New Delhi can best be categorised as",
      "options": ["administrative town", "industrial town", "transport town", "commercial town"],
      "correctAnswer": "administrative town"
    },
    {
      "question": "Which of these is a factor governing barrier effect of roads?",
      "options": ["traffic intensity", "speed of vehicles", "driver sensitivity", "all of these"],
      "correctAnswer": "all of these"
    },
    {
      "question": "Which of these is a factor governing barrier effect of roads?",
      "options": ["presence and location of animal crossings", "movement pattern of species", "species specific preference of road use", "all of these"],
      "correctAnswer": "all of these"
    },
    {
      "question": "Varanasi can best be categorised as",
      "options": ["mining town", "garrison town", "educational town", "religious town"],
      "correctAnswer": "religious town"
    },
    {
      "question": "\"the ability to produce a good using fewer inputs than another producer\" is",
      "options": ["comparative advantage", "absolute advantage", "production advantage", "resource advantage"],
      "correctAnswer": "absolute advantage"
    },
    {
      "question": "\"the price of a good that prevails in the world market for that good\" is the definition of",
      "options": ["export price", "import price", "world price", "domestic price"],
      "correctAnswer": "world price"
    },
    {
      "question": "Visakhapatnam can best be categorised as",
      "options": ["administrative town", "industrial town", "transport town", "commercial town"],
      "correctAnswer": "transport town"
    },
    {
      "question": "Which of these is / are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?",
      "options": ["land bridges", "canopy bridges", "glider poles", "all of these"],
      "correctAnswer": "all of these"
    },
    {
      "question": "Bhilai can best be categorised as",
      "options": ["administrative town", "industrial town", "transport town", "commercial town"],
      "correctAnswer": "industrial town"
    },
    {
      "question": "\"the ability to produce a good at a lower opportunity cost than another producer\" is a definition of",
      "options": ["real advantage", "monetary advantage", "comparative advantage", "opportunity advantage"],
      "correctAnswer": "comparative advantage"
    },
    ],
    week12: [
        {
      "question": "The time of flight for LiDAR is 0.00001 sec. Find the distance of the object from the instrument.",
      "options": ["500 m", "1000 m", "1500 m", "2000 m"],
      "correctAnswer": "1500 m"
    },
    {
      "question": "Which of these uses imputed willingness to pay?",
      "options": ["market price method", "replacement cost method", "travel cost method", "contingent valuation method"],
      "correctAnswer": "replacement cost method"
    },
    {
      "question": "\"The situation of people, infrastructure, housing, production capacities and other tangible human assets located in hazard-prone areas.\" is a definition for",
      "options": ["hazard", "exposure", "vulnerability", "disaster"],
      "correctAnswer": "exposure"
    },
    {
      "question": "\"A process, phenomenon or human activity that may cause loss of life, injury or other health impacts, property damage, social and economic disruption or environmental degradation.\" is a definition for",
      "options": ["hazard", "exposure", "vulnerability", "disaster"],
      "correctAnswer": "hazard"
    },
    {
      "question": "\"A serious disruption of the functioning of a community or a society at any scale due to hazardous events interacting with conditions of exposure, vulnerability and capacity, leading to one or more of the following: human, material, economic and environmental losses and impacts.\" is a definition for",
      "options": ["hazard", "exposure", "vulnerability", "disaster"],
      "correctAnswer": "disaster"
    },
    {
      "question": "\"The combination of all the strengths, attributes and resources available within an organisation, community or society to manage and reduce disaster risks and strengthen resilience.\" is a definition for",
      "options": ["contingency", "disaster management", "vulnerability", "capacity"],
      "correctAnswer": "capacity"
    },
    {
      "question": "Bathymetric LiDAR uses",
      "options": ["far infrared light", "near infrared light", "orange light", "green light"],
      "correctAnswer": "green light"
    },
    {
      "question": "IMU stands for",
      "options": ["Imperial metering unit", "Inertial metering unit", "Imperial measurement unit", "Inertial measurement unit"],
      "correctAnswer": "Inertial measurement unit"
    },
    {
      "question": "Which of these is not a consumptive value?",
      "options": ["timber", "firewood", "non-timber forest products", "education"],
      "correctAnswer": "education"
    },
    {
      "question": "The frequency of flyovers is an indicator of",
      "options": ["spatial resolution", "temporal resolution", "spectral resolution", "radiometric resolution"],
      "correctAnswer": "temporal resolution"
    },
    ],
};

export default questionsData;

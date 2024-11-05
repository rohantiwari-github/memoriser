interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

const questionsData: Record<string, Question[]> = {
    week1: [
        {
            question: '"Enquiry into plants" is a book written by',
            options: ["Humboldt", "Malthus", "Linnaeus", "Theophrastus"],
            correctAnswer: "Theophrastus",
        },
        {
            question: "In the Greek word root of Ecology, Oikos refers to",
            options: ["preservation", "household", "environment", "study"],
            correctAnswer: "household",
        },
        {
            question: "Which of these is not a step in natural selection?",
            options: ["variation", "underpopulation", "survival of the fittest", "struggle for existence"],
            correctAnswer: "underpopulation",
        },
        {
            question: "Ecology is the scientific study of interactions among organisms and their ____.",
            options: ["environment", "niche", "habitat", "population"],
            correctAnswer: "environment",
        },
        {
            question: "Which of these is not a characteristic of fitness?",
            options: [
                "Fitness is environment-specific.",
                "Fitness is species-specific.",
                "Fitness works on traits such as size and speed.",
                "Fitness should be measured across several generations.",
            ],
            correctAnswer: "Fitness is species-specific.",
        },
        {
            question: "Who amongst these is considered the father of Biogeography?",
            options: ["Humboldt", "Malthus", "Linnaeus", "Theophrastus"],
            correctAnswer: "Humboldt",
        },
        {
            question: "Which of these is not a characteristic of fitness?",
            options: [
                "Fitness is environment-specific.",
                "Fitness is species-specific.",
                "Higher reproductive rate means higher fitness.",
                "Fitness should be measured across several generations.",
            ],
            correctAnswer: "Fitness is species-specific.",
        },
        {
            question: "Which of these is not a kind of selection?",
            options: ["directional", "stochastic", "disruptive", "stabilising"],
            correctAnswer: "stochastic",
        },
        {
            question: "Ecology is the scientific study of ____ that determine the distribution and abundance of organisms.",
            options: ["statics", "interactions", "dynamics", "habitat"],
            correctAnswer: "interactions",
        },
        {
            question: "In the Greek word root of Ecology, Logos refers to",
            options: ["environment", "study", "preservation", "household"],
            correctAnswer: "study",
        },
    ],
    week2: [
        {
            question: "The laboratory approach to ecology uses",
            options: ["equations", "models", "experiments", "observations"],
            correctAnswer: "experiments",
        },
        {
            question: "Hierarchy emerges almost inevitably through a wide variety of evolutionary processes, for the simple reason that hierarchical structures are ____",
            options: ["imperfect", "perfect", "stable", "unstable"],
            correctAnswer: "stable",
        },
        {
            question: "For more biodiversity, the level of disturbance should be",
            options: ["none of these", "more", "intermediate", "less"],
            correctAnswer: "intermediate",
        },
        {
            question: "The mitochondrion is a/an",
            options: ["sub-cellular organelle", "cell", "tissue", "organ"],
            correctAnswer: "sub-cellular organelle",
        },
        {
            question: "The emergent principle can be stated as",
            options: ["none of these", "whole = sum of parts", "whole < sum of parts", "whole > sum of parts"],
            correctAnswer: "whole > sum of parts",
        },
        {
            question: '"The diversity that exists among different geographies" are',
            options: ["delta biodiversity", "gamma biodiversity", "beta biodiversity", "alpha biodiversity"],
            correctAnswer: "gamma biodiversity",
        },
        {
            question: '“Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such species” is a definition of',
            options: ["biomes", "ecosystems", "species", "cells"],
            correctAnswer: "species",
        },
        {
            question: "There is more biodiversity in areas with",
            options: [
                "less competition, less predation",
                "less competition, more predation",
                "more competition, more predation",
                "more competition, less predation",
            ],
            correctAnswer: "more competition, more predation",
        },
        {
            question: "The hierarchical system was given by",
            options: ["humboldt", "simon", "watson", "hutchinson"],
            correctAnswer: "simon",
        },
        {
            question: '"The diversity that exists within an ecosystem" is',
            options: ["beta biodiversity", "alpha biodiversity", "delta biodiversity", "gamma biodiversity"],
            correctAnswer: "alpha biodiversity",
        },
    ],
    week3: [
        {
            question: "Harmonious competition occurs where",
            options: [
                "both participants are unharmed",
                "both participants are benefited",
                "at least one participant is unharmed",
                "at least one participant is benefited",
            ],
            correctAnswer: "both participants are unharmed",
        },
        {
            question: "The interaction between exotic shrubs and trees through the action of seed predators is an example of",
            options: [
                "harmonious competition",
                "apparent competition",
                "infraspecific competition",
                "disguised competition",
            ],
            correctAnswer: "apparent competition",
        },
        {
            question: "An inventory of behaviors exhibited by an animal during a behavioral exercise is called",
            options: ["behaviorogram", "animalogram", "ethogram", "ecogram"],
            correctAnswer: "ethogram",
        },
        {
            question:
                "I observe a bird take a tick out of another bird's head and eat it. In the social context, this behavior would be called",
            options: ["auto grooming", "foraging", "allo grooming", "tick hunting"],
            correctAnswer: "allo grooming",
        },
        {
            question: "Hamilton's rule can be stated as",
            options: ["rB < C", "rB > C", "rB + C = 0", "rB = C"],
            correctAnswer: "rB > C",
        },
        {
            question:
                "I observe a monkey take a tick out of another monkey's head and eat it. In the social context, this behavior would be called",
            options: ["auto grooming", "foraging", "allo grooming", "tick hunting"],
            correctAnswer: "allo grooming",
        },
        {
            question: "Egrets with buffaloes are an example of",
            options: ["protocooperation", "commensalism", "colony", "allelopathy"],
            correctAnswer: "commensalism",
        },
        {
            question: "Birds on giraffe are an example of",
            options: ["commensalism", "colony", "protocooperation", "allelopathy"],
            correctAnswer: "protocooperation",
        },
        {
            question: "The scientific study of animal behavior is called",
            options: ["ecology", "behaviorism", "ethology", "prey-predator dynamics"],
            correctAnswer: "ethology",
        },
        {
            question: "Trampling of grass due to the movement of animals is an example of",
            options: ["amensalism", "commensalism", "protocooperation", "mutualism"],
            correctAnswer: "amensalism",
        },
    ],
    week4: [
        {
            question:
                "If we all become vegetarians, we'll be able to support our large populations. This can be explained through",
            options: ["biodiversity", "trophic cascades", "1% rule", "10% rule"],
            correctAnswer: "10% rule",
        },
        {
            question: "At the compensation point",
            options: [
                "photosynthesis > respiration",
                "photosynthesis < respiration",
                "photosynthesis = respiration",
                "photosynthesis = 0",
            ],
            correctAnswer: "photosynthesis = respiration",
        },
        {
            question: "Consider the food chain grass → grasshopper → frog → snake → hawk as we move up the food chain,",
            options: [
                "available energy is zero everywhere",
                "available energy decreases",
                "available energy increases",
                "available energy remains same",
            ],
            correctAnswer: "available energy decreases",
        },
        {
            question: "Consider the food chain grass → grasshopper → frog → snake → hawk in this food chain",
            options: [
                "equal numbers of hawks and grasshoppers can be supported",
                "more numbers of grasshoppers than hawks can be supported",
                "more numbers of hawks than grasshoppers can be supported",
                "none of these",
            ],
            correctAnswer: "more numbers of grasshoppers than hawks can be supported",
        },
        {
            question: "Net primary productivity is given by",
            options: ["APAR x LUE", "APAR − LUE", "APAR + LUE", "APAR / LUE"],
            correctAnswer: "APAR x LUE",
        },
        {
            question: "Consider the food chain grass → grasshopper → frog → snake → hawk in the food chain",
            options: [
                "hawk is consumer and herbivore",
                "hawk is decomposer",
                "hawk is consumer and carnivore",
                "hawk is producer",
            ],
            correctAnswer: "hawk is consumer and carnivore",
        },
        {
            question: "Tree → frugivorous birds → hawk represents",
            options: [
                "dumb-bell pyramid of numbers",
                "spindle pyramid of numbers",
                "inverted pyramid of numbers",
                "upright pyramid of numbers",
            ],
            correctAnswer: "spindle pyramid of numbers",
        },
        {
            question: "Trees → birds → parasites → hyperparasites represent",
            options: [
                "upright pyramid of numbers",
                "inverted pyramid of numbers",
                "spindle pyramid of numbers",
                "dumb-bell pyramid of numbers",
            ],
            correctAnswer: "inverted pyramid of numbers",
        },
        {
            question: "Consider the food chain grass → grasshopper → frog → snake → hawk in this food chain",
            options: [
                "frog is producer",
                "frog is decomposer",
                "frog is consumer and herbivore",
                "frog is consumer and carnivore",
            ],
            correctAnswer: "frog is consumer and carnivore",
        },
        {
            question: "Glacial lakes are typical examples of",
            options: ["hypertrophic lakes", "mesotrophic lakes", "oligotrophic lakes", "eutrophic lakes"],
            correctAnswer: "oligotrophic lakes",
        },
    ],
    week5: [
        {
            question: "The logistic growth equation, when plotted, appears",
            options: ["O shaped", "I shaped", "S shaped", "J shaped"],
            correctAnswer: "S shaped",
        },
        {
            question: "Which of these is not a measure of absolute population density?",
            options: ["removal method", "total count", "pelt count", "capture-recapture method"],
            correctAnswer: "pelt count",
        },
        {
            question: "Pan traps are used for sampling",
            options: ["non-pollinator insects", "butterflies", "bees", "pollinator insects"],
            correctAnswer: "pollinator insects",
        },
        {
            question: "Cover board surveys are typically used for sampling",
            options: ["herpetofauna", "fishes", "large mammals", "carnivores"],
            correctAnswer: "herpetofauna",
        },
        {
            question:
                "_____ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start",
            options: ["multistage sampling", "systematic sampling", "simple random sampling", "stratified sampling"],
            correctAnswer: "systematic sampling",
        },
        {
            question: "The juvenile mortality rate is the annual number of deaths of juveniles per",
            options: ["100 births", "1000 live births", "1000 births", "100 live births"],
            correctAnswer: "1000 live births",
        },
        {
            question: "The minimum replacement level fertility for a population to grow should be greater than",
            options: ["1", "2", "3", "4"],
            correctAnswer: "2",
        },
        {
            question: "_____ is how close the measured values are to the correct value",
            options: ["accuracy", "precision", "bias", "variance"],
            correctAnswer: "accuracy",
        },
        {
            question: "Which of these is true",
            options: [
                "physiological longevity < ecological longevity",
                "a or b",
                "physiological longevity = ecological longevity",
                "physiological longevity > ecological longevity",
            ],
            correctAnswer: "a or b",
        },
        {
            question:
                "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
            options: ["stratified sampling", "systematic sampling", "simple random sampling", "multistage sampling"],
            correctAnswer: "simple random sampling",
        },
    ],
    week6: [
        {
            question: "Importance value can be written as",
            options: [
                "relative density + relative frequency X relative dominance",
                "relative density X relative frequency X relative dominance",
                "relative density X relative frequency + relative dominance",
                "relative density + relative frequency + relative dominance",
            ],
            correctAnswer: "relative density + relative frequency + relative dominance",
        },
        {
            question: "Which of these is correct?",
            options: [
                "fundamental niche > realised niche",
                "fundamental niche = realised niche",
                "fundamental niche < realised niche",
                "a or b",
            ],
            correctAnswer: "fundamental niche < realised niche",
        },
        {
            question: "Importance value varies from",
            options: ["0 to 10", "0 to 50", "0 to 100", "0 to 300"],
            correctAnswer: "0 to 300",
        },
        {
            question: "Which of these depicts correctly the lithosere primary succession",
            options: [
                "moss → crustose lichen → foliose lichen → rock → herbaceous stage → shrub → woodland → climax",
                "rock → foliose lichen → crustose lichen → moss → herbaceous stage → shrub → woodland → climax",
                "rock → crustose lichen → foliose lichen → moss → herbaceous stage → shrub → woodland → climax",
                "moss → crustose lichen → foliose lichen → shrub → woodland → climax",
            ],
            correctAnswer: "rock → crustose lichen → foliose lichen → moss → herbaceous stage → shrub → woodland → climax",
        },
        {
            question: "Which of these is not a characteristic of pioneer species",
            options: ["short life span", "ability to grow on bare rocks", "ability to tolerate extreme temperatures", "large size"],
            correctAnswer: "large size",
        },
        {
            question:
                "The climax near Tindi village is being controlled by disturbance by cattle. This is an example of",
            options: ["disclimax", "catastrophic climax", "edaphic climax", "climatic climax"],
            correctAnswer: "disclimax",
        },
        {
            question:
                "A species found most frequently in a particular community, but also present occasionally in others is called",
            options: ["accidental species", "indifferent species", "selective species", "exclusive species"],
            correctAnswer: "selective species",
        },
        {
            question: "When compared to generalist species, specialist species have",
            options: ["none of these", "same-size niches", "broader niches", "narrower niches"],
            correctAnswer: "narrower niches",
        },
        {
            question: "A climax caused by wildfires is an example of",
            options: ["catastrophic climax", "edaphic climax", "disclimax", "climatic climax"],
            correctAnswer: "catastrophic climax",
        },
        {
            question: "Lithosere is an example of",
            options: ["xerosere", "hydrosere", "halosere", "psammosere"],
            correctAnswer: "xerosere",
        },
    ],
    week7: [
        {
            question: "Transplantation experiments are used to find",
            options: ["actual range", "effective range", "economic range", "potential range"],
            correctAnswer: "potential range",
        },
        {
            question:
                '"The rate of biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor" this is the statement for',
            options: [
                "Shelford's law of tolerance",
                "Liebig's law of maximum",
                "Shelford's law of intolerance",
                "Liebig's law of minimum",
            ],
            correctAnswer: "Liebig's law of minimum",
        },
        {
            question:
                '"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance" this is the statement for',
            options: [
                "Shelford's law of intolerance",
                "Shelford's law of tolerance",
                "Liebig's law of maximum",
                "Liebig's law of minimum",
            ],
            correctAnswer: "Shelford's law of tolerance",
        },
        {
            question: "Which of these is a physical factor of habitat?",
            options: ["predators", "temperatures", "moisture", "soil"],
            correctAnswer: "predators",
        },
        {
            question:
                "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
            options: ["translocation", "migration", "dispersal", "drifting"],
            correctAnswer: "dispersal",
        },
        {
            question: "The movement of lions across the Gir landscape is an example of",
            options: ["secular dispersal", "diffusion", "drifting", "jump dispersal"],
            correctAnswer: "diffusion",
        },
        {
            question:
                "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
            options: ["autopathy", "allelopathy", "autopathy", "allelopathy"],
            correctAnswer: "allelopathy",
        },
        {
            question: '"Quick movement over large distances, often across unsuitable terrain" is a definition of',
            options: ["drifting", "jump dispersal", "secular dispersal", "diffusion"],
            correctAnswer: "jump dispersal",
        },
        {
            question: "Scarcity of food is a",
            options: ["chemical factor", "push factor", "demographic factor", "pull factor"],
            correctAnswer: "push factor",
        },
        {
            question: "Good climate is a",
            options: ["demographic factor", "pull factor", "push factor", "chemical factor"],
            correctAnswer: "pull factor",
        },
    ],
    week8: [
        {
            question: "Captive breeding is an example of",
            options: ["ex-situ preservation", "ex-situ conservation", "in-situ conservation", "in-situ preservation"],
            correctAnswer: "ex-situ conservation",
        },
        {
            question: '"The subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce" is the definition of',
            options: ["habitat", "ecosystem", "biome", "biosphere"],
            correctAnswer: "habitat",
        },
        {
            question: "We prefer those areas for the creation of conservation reserve where the level of threat is",
            options: ["very high", "medium", "non-existent", "very low"],
            correctAnswer: "medium",
        },
        {
            question: "Which of these correctly represents the process of habitat fragmentation and loss",
            options: [
                "original forest → dissection → fragmentation → perforation → attrition",
                "original forest → dissection → perforation → attrition → fragmentation",
                "original forest → dissection → perforation → fragmentation → attrition",
                "original forest → dissection → attrition → fragmentation → perforation",
            ],
            correctAnswer: "original forest → dissection → fragmentation → perforation → attrition",
        },
        {
            question: "According to Leopold, which of these is not a tool of habitat management",
            options: ["sickle", "gun", "tire", "cattle"],
            correctAnswer: "gun",
        },
        {
            question: "Which of these is a deterministic factor?",
            options: ["environmental variation", "diseases", "forest fire", "death rate"],
            correctAnswer: "death rate",
        },
        {
            question: "The acronym HIPPO does not include",
            options: ["invasive species", "habitat loss", "habitat enhancement", "human overpopulation"],
            correctAnswer: "habitat enhancement",
        },
        {
            question: "Which of these is a stochastic factor",
            options: ["environmental fluctuation", "death rate", "birth rate", "population structure"],
            correctAnswer: "environmental fluctuation",
        },
        {
            question: "Zoo is an example of",
            options: ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"],
            correctAnswer: "ex-situ conservation",
        },
        {
            question: "The acronym HIPPO does not include",
            options: ["habitat loss", "pollution", "invasive species", "pollination"],
            correctAnswer: "pollination",
        },
    ],
    week9: [
        {
            question: "The quantum of human impacts is given by",
            options: ["I = P − (A×T)", "I = P × A × T", "I = P + A + T", "I = P + A − T"],
            correctAnswer: "I = P × A × T",
        },
        {
            question: "_____ determines which projects or developments require a full or partial impact assessment study.",
            options: ["screening", "reporting", "review", "scoping"],
            correctAnswer: "screening",
        },
        {
            question: 'The book "An Essay on the Principle of Population" was written by',
            options: ["Malthus", "Darwin", "Owens", "Spencer"],
            correctAnswer: "Malthus",
        },
        {
            question: "Which of these is not a pillar of sustainability?",
            options: ["agricultural sustainability", "economic sustainability", "environmental sustainability", "trans-boundary sustainability"],
            correctAnswer: "trans-boundary sustainability",
        },
        {
            question: "Which of these is a preventive check according to Malthus?",
            options: ["foresight", "vice", "misery", "flood"],
            correctAnswer: "foresight",
        },
        {
            question: "Which of these is a positive check according to Malthus?",
            options: ["war", "moral restraint", "late marriage", "celibacy"],
            correctAnswer: "war",
        },
        {
            question: "The demographic transition sees a society move from",
            options: [
                "high birth rate, low death rate to low birth rate, low death rate",
                "low birth rate, high death rate to low birth rate, low death rate",
                "high birth rate, high death rate to low birth rate, low death rate",
                "high birth rate, high death rate to low birth rate, high death rate",
            ],
            correctAnswer: "high birth rate, high death rate to low birth rate, low death rate",
        },
        {
            question: "According to the Malthusian model",
            options: [
                "population grows in arithmetic progression, food supply increases in arithmetic progression",
                "population grows in geometric progression, food supply increases in geometric progression",
                "population grows in arithmetic progression, food supply increases in geometric progression",
                "population grows in geometric progression, food supply increases in arithmetic progression",
            ],
            correctAnswer: "population grows in geometric progression, food supply increases in arithmetic progression",
        },
        {
            question: "_____ is used to identify which potential impacts are relevant to assess.",
            options: ["review", "screening", "scoping", "reporting"],
            correctAnswer: "scoping",
        },
        {
            question: "Which of these is a pillar of sustainability",
            options: ["trans-boundary sustainability", "industrial sustainability", "social sustainability", "agricultural sustainability"],
            correctAnswer: "social sustainability",
        },
    ],
    week10: [
        {
            question:
                '"The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences" is a definition of',
            options: ["mitigative capacity", "adaptive response", "adaptive capacity", "mitigative response"],
            correctAnswer: "adaptive capacity",
        },
        {
            question:
                '"Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead" is a definition of',
            options: ["malmitigation", "adaptation", "mitigation", "maladaptation"],
            correctAnswer: "maladaptation",
        },
        {
            question: "Which of these is not a climatic forcing for Earth?",
            options: ["changes in Moon's orbit", "changes in Earth's orbit", "changes in plate tectonics", "changes in Sun's strength"],
            correctAnswer: "changes in Moon's orbit",
        },
        {
            question: "Which of these is not a principle of ecological restoration?",
            options: ["ecological integrity", "short term sustainability", "informed by past and future", "benefits and engages society"],
            correctAnswer: "short term sustainability",
        },
        {
            question: "Macrodebris in the context of plastic debris has fragment of size",
            options: ["<5mm", "<1mm", ">20mm", "5–20mm"],
            correctAnswer: ">20mm",
        },
        {
            question: "Which of these is not a principle of ecological restoration?",
            options: ["ecological integrity", "long term sustainability", "informed by past and future", "benefits and engages scientists"],
            correctAnswer: "benefits and engages scientists",
        },
        {
            question: "Which of these is not a climatic forcing for Earth?",
            options: ["changes in Sun's strength", "changes in Sun's orbit", "changes in plates tectonics", "changes in Earth's orbit"],
            correctAnswer: "changes in Sun's orbit",
        },
        {
            question:
                "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called",
            options: ["deceleration", "maladaptation", "mitigation", "adaptation"],
            correctAnswer: "mitigation",
        },
        {
            question:
                "Because of climate change, Mudumalai tiger reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called",
            options: ["adaptation", "mitigation", "maladaptation", "deceleration"],
            correctAnswer: "adaptation",
        },
        {
            question: "Mesodebris in the context of plastic debris has fragment of size",
            options: ["<1mm", "<5mm", ">20mm", "5–20 mm"],
            correctAnswer: "5–20 mm",
        },
    ],
    week11: [
        {
            question: "The impact of El Nino on fishery in Peru is explained by",
            options: ["none of these", "match hypothesis", "mismatch hypothesis", "match-mismatch hypothesis"],
            correctAnswer: "match-mismatch hypothesis",
        },
        {
            question: "Which of these is a non-conventional energy source?",
            options: ["coal", "nuclear energy", "natural gas", "solar energy"],
            correctAnswer: "solar energy",
        },
        {
            question: "Which of these is a gas?",
            options: ["coal", "oil", "wood", "natural gas"],
            correctAnswer: "natural gas",
        },
        {
            question: "Which of these is not an aerosol?",
            options: ["pollen", "ash", "methane", "dust"],
            correctAnswer: "methane",
        },
        {
            question: "Most common sources of oil pollution in oceans are",
            options: [
                "natural sources",
                "atmospheric fallout",
                "discharge from ships",
                "sewage runoff and land drainage",
            ],
            correctAnswer: "sewage runoff and land drainage",
        },
        {
            question: "The convention on Biological Diversity came into force in",
            options: ["1993", "1992", "1995", "2000"],
            correctAnswer: "1993",
        },
        {
            question: "Which of these is most soluble in water?",
            options: ["sulfur dioxide", "oxygen", "nitrogen", "hydrogen"],
            correctAnswer: "sulfur dioxide",
        },
        {
            question: "Which of these is not an air pollutant?",
            options: ["lead", "carbon monoxide", "zinc", "methane"],
            correctAnswer: "zinc",
        },
        {
            question: "The Minamata disease was caused by",
            options: ["lead", "mercury", "copper", "zinc"],
            correctAnswer: "mercury",
        },
        {
            question: "The principal greenhouse gas responsible for global warming is",
            options: ["carbon dioxide", "ozone", "nitrous oxide", "sulfur dioxide"],
            correctAnswer: "carbon dioxide",
        },
    ],
    week12: [
        {
            question:
                "The juvenile mortality rate is the annual number of deaths of juveniles per",
            options: ["100 births", "1000 live births", "1000 births", "100 live births"],
            correctAnswer: "1000 live births",
        },
        {
            question: "Which of these is a non-renewable resource?",
            options: ["wind", "sunlight", "coal", "hydropower"],
            correctAnswer: "coal",
        },
        {
            question: "Which of the following protocols aims to reduce greenhouse gas emissions?",
            options: ["Kyoto Protocol", "Montreal Protocol", "Basel Convention", "Ramsar Convention"],
            correctAnswer: "Kyoto Protocol",
        },
        {
            question: "Which of these is a renewable source of energy?",
            options: ["coal", "nuclear energy", "natural gas", "solar energy"],
            correctAnswer: "solar energy",
        },
        {
            question: "Which of these is considered the cleanest fossil fuel?",
            options: ["coal", "natural gas", "oil", "wood"],
            correctAnswer: "natural gas",
        },
        {
            question: "What is the main purpose of the Ramsar Convention?",
            options: [
                "Conservation of marine life",
                "Protection of wetlands",
                "Control of pollution",
                "Regulation of carbon emissions",
            ],
            correctAnswer: "Protection of wetlands",
        },
        {
            question: "Which layer of the atmosphere contains the ozone layer?",
            options: ["Mesosphere", "Stratosphere", "Thermosphere", "Exosphere"],
            correctAnswer: "Stratosphere",
        },
        {
            question: "Acid rain is mainly caused by emissions of",
            options: ["carbon dioxide and nitrogen", "nitrogen dioxide and methane", "sulfur dioxide and nitrogen oxides", "methane and sulfur dioxide"],
            correctAnswer: "sulfur dioxide and nitrogen oxides",
        },
        {
            question: "Which of these gases is not a greenhouse gas?",
            options: ["Methane", "Nitrous oxide", "Carbon dioxide", "Oxygen"],
            correctAnswer: "Oxygen",
        },
        {
            question: "The process by which plants release oxygen is called",
            options: ["Respiration", "Photosynthesis", "Transpiration", "Decomposition"],
            correctAnswer: "Photosynthesis",
        },
    ],
};

export default questionsData;

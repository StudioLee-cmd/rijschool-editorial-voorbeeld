/* ===================================================================
   RIJSCHOOL (StuurWijs Voorbeeld) — editorial-bold customization
   =================================================================== */

export const config = {
  name: "StuurWijs Voorbeeld",
  tagline: "Leer rijden met vertrouwen",

  nav: [
    { label: "Over ons", href: "#intro" },
    { label: "Aanbod", href: "#features" },
    { label: "Leerlingen", href: "#gallery" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    bg: "#1A1612",
    backgroundImage: "/images/hero.jpg",
    foregroundImage: "",
    logoImage: "",
    subtitle: "Een rijschool uit Amsterdam. Ervaren instructeurs. Hoog slagingspercentage. Sinds 2014.",
  },

  intro: {
    text: [
      "Wij leiden leerlingen op die",
      "met zelfvertrouwen de weg",
      "op gaan. Van eerste les tot",
      "geslaagd examen — persoonlijk begeleid.",
    ],
    accentWords: ["zelfvertrouwen", "geslaagd", "persoonlijk"],
    sideImage: "/images/craft.jpg",
  },

  showcase: {
    title: "2500+",
    subtitle: "Geslaagde leerlingen",
    description:
      "Van zenuwachtige beginner tot zelfverzekerde bestuurder. Elke leerling krijgt dezelfde persoonlijke aandacht en een op maat gemaakt lesplan.",
    image: "/images/project1.jpg",
  },

  banner: {
    bg: "#8B3A1F",
    video: "",
    lines: [
      { text: "Sinds", style: "italic" },
      { text: "2014", style: "display" },
      { text: "rijlessen in", style: "italic" },
      { text: "Amsterdam", style: "display" },
    ],
  },

  columns: {
    title: "Ons aanbod",
    items: [
      {
        name: "Rijlessen Auto",
        color: "#1A1612",
        textColor: "#F4ECDD",
        image: "/images/project1.jpg",
        description:
          "Leer autorijden op jouw tempo. Van koppeling en schakelen tot invoegen op de snelweg — stap voor stap naar je rijbewijs.",
        cta: "Meer over autorijlessen",
        href: "#features",
      },
      {
        name: "Spoedcursus",
        color: "#8B3A1F",
        textColor: "#F4ECDD",
        image: "/images/project2.jpg",
        description:
          "Snel je rijbewijs halen? Met onze intensieve spoedcursus rij je binnen 2-4 weken examen. Dagelijks lessen, maximaal resultaat.",
        cta: "Meer over spoedcursus",
        href: "#features",
      },
      {
        name: "Motor & Faalangst",
        color: "#C9985A",
        textColor: "#1A1612",
        image: "/images/kitchen.jpg",
        description:
          "Motorrijlessen voor alle categorieën en speciale faalangstbegeleiding. Wij helpen je met extra geduld en vertrouwen de weg op.",
        cta: "Meer over motor & faalangst",
        href: "#features",
      },
    ],
  },

  visionCards: [
    {
      index: "01",
      title: "Geduld & Vertrouwen",
      description:
        "Wij geven les in jouw tempo. Geen druk, geen haast — gewoon rustig leren tot je het zelf voelt.",
      image: "/images/detail.jpg",
    },
    {
      index: "02",
      title: "Ervaren instructeurs",
      description:
        "Al onze instructeurs zijn CBR-gecertificeerd met minstens 10 jaar ervaring. Persoonlijk, geduldig en resultaatgericht.",
      image: "/images/team.jpg",
    },
    {
      index: "03",
      title: "Hoog slagingspercentage",
      description:
        "82% van onze leerlingen slaagt in de eerste keer. Dat is geen toeval — dat is goede voorbereiding en persoonlijke aandacht.",
      image: "/images/about.jpg",
    },
    {
      index: "04",
      title: "Moderne lesauto's",
      description:
        "We rijden met nieuwe, dubbel bediende lesauto's. Comfortabel, veilig en uitgerust met de nieuwste technologie.",
      image: "/images/carousel.jpg",
    },
  ],

  customize: {
    title: "Jouw rijbewijs begint hier",
    highlightWord: "rijbewijs",
    video: "",
    label: "Boek een gratis proefles",
  },

  team: [
    {
      name: "Mark de Groot",
      role: "Hoofdinstructeur & Oprichter",
      bio: "15 jaar ervaring. Bij elke leerling persoonlijk betrokken.",
      image: "/images/team-1.png",
    },
    {
      name: "Sophie Jansen",
      role: "Rijinstructeur Auto",
      bio: "Gespecialiseerd in faalangstbegeleiding en extra geduld.",
      image: "/images/team-2.png",
    },
    {
      name: "Kevin Smit",
      role: "Rijinstructeur Motor",
      bio: "Motorrijden is zijn passie. AVB en AVD-examens.",
      image: "/images/team-3.png",
    },
    {
      name: "Fatima Yilmaz",
      role: "Planning & Administratie",
      bio: "Houdt alle planningen op orde zodat jij altijd terecht kunt.",
      image: "/images/team-4.png",
    },
  ],

  faq: [
    {
      question: "Hoeveel rijlessen heb ik nodig?",
      answer:
        "Dat verschilt per persoon. Gemiddeld hebben leerlingen 25-35 lessen nodig. Tijdens je proefles schatten we in hoeveel lessen jij nodig hebt op basis van je rijervaring en leervermogen.",
    },
    {
      question: "Hoe snel kan ik mijn rijbewijs halen?",
      answer:
        "Met onze spoedcursus kun je binnen 2-4 weken examen doen. Bij reguliere lessen hangt het af van hoe vaak je per week rijdt — gemiddeld 3 tot 6 maanden.",
    },
    {
      question: "Bieden jullie ook motorrijlessen aan?",
      answer:
        "Ja. Wij bieden motorrijlessen aan voor alle categorieën (A1, A2, A). Inclusief AVB-examen (theorie) en AVD-examen (praktijk). Neem contact op voor een op maat gemaakt plan.",
    },
    {
      question: "Wat als ik last heb van faalangst?",
      answer:
        "Wij hebben instructeurs die gespecialiseerd zijn in faalangstbegeleiding. Met extra geduld, ademhalingstechnieken en geleidelijke opbouw helpen we je om met vertrouwen examen te doen.",
    },
    {
      question: "Is de proefles echt gratis?",
      answer:
        "Ja, je eerste proefles van 60 minuten is volledig gratis en vrijblijvend. We maken kennis, beoordelen je niveau en bespreken welk pakket het beste bij je past.",
    },
  ],

  footer: {
    cta: "Boek een gratis proefles",
    ctaHref: "https://calendly.com/tim-studiolee",
    links: [
      { label: "info@stuurwijsvoorbeeld.nl", href: "mailto:info@stuurwijsvoorbeeld.nl" },
      { label: "StudioLee.nl", href: "https://www.studiolee.nl" },
    ],
    credit: "Speciaal gemaakt voor rijscholen door StudioLee.nl",
  },
};

export type SiteConfig = typeof config;

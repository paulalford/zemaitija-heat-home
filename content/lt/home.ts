import type { HomePageContent } from "@/content/home-content";

export const lithuanianHomeContent = {
  metadata: {
    title: "Šildymas, šilumos siurbliai ir santechnika Šiauliuose",
    description:
      "Gyvenamųjų namų šildymo, šilumos siurblių montavimo, santechnikos ir skubaus remonto paslaugos Šiauliuose bei platesniame Žemaitijos regione. Demonstracinis projektas.",
    socialImageAlt:
      "Žemaitija Heat & Home — šildymas, šilumos siurbliai ir santechnika Šiauliuose bei platesniame Žemaitijos regione",
    socialImageHeadline:
      "Šildymas, šilumos siurbliai ir santechnika jūsų namams.",
    socialImageRegion: "Šiauliai ir platesnis Žemaitijos regionas",
    socialImageServices:
      "Šildymas · Šilumos siurbliai · Santechnika · Remontas",
    socialImageDisclosure: "Demonstracinis projektas",
  },
  hero: {
    eyebrow: "Žemaitija Heat & Home",
    heading:
      "Šildymo ir santechnikos paslaugos namams Šiauliuose ir aplinkiniuose rajonuose.",
    description:
      "Šildymo sistemų remontas, naujų sistemų montavimas, šilumos siurbliai ir kasdieniai santechnikos darbai gyvenamuosiuose namuose.",
    contactLabel: "Susisiekite dėl darbų",
    servicesLabel: "Peržiūrėkite mūsų paslaugas",
    image: {
      src: "/images/boiler_room_maintenance_in_progress.png",
      alt: "Technikas prižiūri gyvenamojo namo šildymo sistemą techninėje patalpoje",
    },
    area: {
      eyebrow: "Mūsų aptarnavimo teritorija",
      title: "Šiauliai ir Žemaitija",
      description:
        "Iškvietimai į gyvenamuosius namus Šiauliuose bei aplinkiniuose miestuose ir kaimuose, maždaug 50 km aptarnavimo spinduliu.",
      link: {
        path: "/service-area",
        label: "Patikrinkite savo vietovę",
      },
    },
  },
  services: {
    eyebrow: "Mūsų paslaugos",
    heading: "Šildymo, santechnikos ir skubaus remonto paslaugos.",
    introduction: "Pasirinkite paslaugą, kuri geriausiai atitinka jūsų poreikį.",
    items: [
      {
        title: "Šildymas",
        description:
          "Šildymo sistemų montavimas, remontas ir atnaujinimas, taip pat katilų bei šildymo sistemų priežiūra.",
        link: {
          path: "/heating",
          label: "Peržiūrėti šildymo paslaugas",
        },
        image: {
          src: "/images/tidy_boiler_room_with_copper_pipework.png",
          alt: "Gyvenamojo namo šildymo sistema su katilu ir variniais vamzdžiais",
          className: "service-card-image-heating",
        },
      },
      {
        title: "Šilumos siurbliai",
        description:
          "Šilumos siurblių montavimas namų savininkams, svarstantiems keisti savo šildymo sistemą.",
        link: {
          path: "/heat-pumps",
          label: "Sužinoti apie šilumos siurblius",
        },
        image: {
          src: "/images/ChatGPT%20Image%20Oct%208%2C%202026%2C%2008_56_29%20PM-3.png",
          alt: "Lauko šilumos siurblio blokas prie individualaus namo",
        },
      },
      {
        title: "Santechnika",
        description:
          "Bendrieji buitinės santechnikos darbai ir iškvietimai dėl darbų namuose.",
        link: {
          path: "/plumbing",
          label: "Peržiūrėti santechnikos paslaugas",
        },
        image: {
          src: "/images/ChatGPT%20Image%20Oct%208%2C%202026%2C%2008_56_30%20PM-4.png",
          alt: "Santechnikas remontuoja vamzdyną po virtuvės kriaukle",
          className: "service-card-image-plumbing",
        },
      },
      {
        title: "Skubus remontas",
        description:
          "Skubus šildymo ir santechnikos remontas, kai problemą namuose reikia spręsti neatidėliojant.",
        link: {
          path: "/emergency-repairs",
          label: "Skubaus remonto informacija",
        },
        image: {
          src: "/images/emergency-repair-heating-system.png",
          alt: "Technikas remontuoja gyvenamojo namo šildymo sistemą",
          className: "service-card-image-emergency",
        },
      },
    ],
  },
  heatPumps: {
    eyebrow: "Šilumos siurblių montavimas",
    heading: "Svarstote kitokį būdą šildyti savo namus?",
    description:
      "Jei renovuojate namus ar planuojate atnaujinti šildymo sistemą, verta apsvarstyti šilumos siurblį. Pradėkite nuo būsto, savo planų ir darbų, kurių reikėtų montavimui, įvertinimo.",
    link: {
      path: "/heat-pumps",
      label: "Sužinoti apie šilumos siurblių montavimą",
    },
    noteHeading: "Pradėkite nuo savo namo",
    noteDescription:
      "Šildymo sistemos atnaujinimas – gera proga įvertinti esamą sistemą ir apsvarstyti, kas geriausiai tinka jūsų būstui. Prieš pasirenkant naują sistemą verta aptarti jos tinkamumą ir montavimo procesą.",
    enquiryPrompt:
      "Kreipdamiesi nurodykite informaciją apie namą, esamą šildymo sistemą ir planuojamus renovacijos darbus.",
  },
  whyChoose: {
    eyebrow: "Vietinės paslaugos namams",
    heading: "Kodėl verta rinktis Žemaitija Heat & Home?",
    description:
      "Šildymo ir santechnikos paslaugos regiono namams – nuo priežiūros ir remonto iki planuojamų montavimo darbų.",
    link: {
      path: "/about",
      label: "Apie įmonę",
    },
    reasons: [
      {
        title: "Dėmesys gyvenamiesiems namams",
        description:
          "Paslaugos namų savininkams, nuomotojams ir žmonėms, renovuojantiems savo būstą.",
      },
      {
        title: "Aiški aptarnavimo teritorija",
        description:
          "Šiauliai ir platesnis Žemaitijos regionas, įprastai maždaug 50 km aptarnavimo spinduliu.",
      },
      {
        title: "Aiškus bendravimas",
        description:
          "Pradėkite nuo to, ką reikia atlikti. Aptarsime darbus, jų įvertinimą ir tolesnius veiksmus prieš priimant sprendimą.",
      },
      {
        title: "Praktiškas paslaugų spektras",
        description:
          "Šildymo sistemų montavimas, remontas ir priežiūra, taip pat šilumos siurbliai ir bendrieji santechnikos darbai.",
      },
    ],
  },
  process: {
    eyebrow: "Kaip pradėti",
    heading: "Nuo pirmos užklausos iki tolesnių veiksmų.",
    steps: [
      {
        title: "Susisiekite",
        description:
          "Nurodykite, kur yra objektas ir kokių šildymo ar santechnikos darbų reikia.",
      },
      {
        title: "Aptarkime darbus",
        description:
          "Aptarsime problemą ar planuojamus darbus ir informaciją, reikalingą jiems įvertinti.",
      },
      {
        title: "Apžiūra / įvertinimas",
        description:
          "Jei reikia, susitarsime dėl apsilankymo, kad apžiūrėtume objektą ir įvertintume darbų apimtį.",
      },
      {
        title: "Kainos pasiūlymas / tolesni veiksmai",
        description:
          "Peržiūrėkite siūlomus darbus ir kainos pasiūlymą, tada aptarsime, kaip tęsti.",
      },
    ],
  },
  region: {
    eyebrow: "Dirbame regione",
    heading: "Šiauliai ir platesnis Žemaitijos regionas.",
    description:
      "Gyvenamųjų namų šildymo ir santechnikos paslaugos Šiauliuose bei aplinkiniuose miestuose ir kaimuose, maždaug 50 km aptarnavimo spinduliu.",
    image: {
      src: "/images/ChatGPT%20Image%20Oct%208%2C%202026%2C%2008_56_31%20PM-5.png",
      alt: "Kaimo namas ir aplinkinis kraštovaizdis",
    },
    noteHeading: "Patikrinkite, ar aptarnaujame jūsų vietovę",
    noteDescription:
      "Susisiekdami nurodykite savo vietovę, kad galėtume patvirtinti, ar galime atlikti darbus. Tai taip pat padeda suplanuoti apsilankymą ar darbų įvertinimą.",
    link: {
      path: "/service-area",
      label: "Peržiūrėti aptarnavimo teritoriją",
    },
  },
  enquiry: {
    eyebrow: "Aptarkime darbus",
    heading: "Ko reikia jūsų namams?",
    description:
      "Papasakokite apie objektą, jo vietą ir reikalingus šildymo ar santechnikos darbus. Pradėkite nuo užklausos, o tada aptarsime tolesnius veiksmus.",
    contactLink: {
      path: "/contact",
      label: "Susisiekti su Žemaitija Heat & Home",
    },
    urgentPrompt: "Reikia skubaus remonto?",
    emergencyLink: {
      path: "/emergency-repairs",
      label: "Peržiūrėti skubaus remonto informaciją",
    },
  },
} as const satisfies HomePageContent;

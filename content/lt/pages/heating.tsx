import { HeatingPage, type HeatingPageContent } from "@/components/heating-page";
import { lithuanianHomeContent } from "@/content/lt/home";
import { lithuanianNavigationLabels } from "@/content/lt/navigation";
import { lithuanianSharedContent } from "@/content/lt/shared";
import { createLocalizedPageMetadata } from "@/lib/metadata";

export const lithuanianHeatingContent = {
  metadata: {
    title: "Šildymo sistemų montavimas ir remontas Šiauliuose",
    description:
      "Gyvenamųjų namų šildymo sistemų montavimo, remonto, priežiūros ir atnaujinimo paslaugos Šiauliuose bei platesniame Žemaitijos regione. Demonstracinis projektas.",
  },
  hero: {
    eyebrow: "Gyvenamųjų namų šildymas · Šiauliai ir Žemaitija",
    title: "Šildymo sistemų montavimas, remontas ir priežiūra jūsų namams.",
    description:
      "Nuo šildymo sistemos gedimo iki planuojamo jos keitimo – pagalba gyvenamųjų namų šildymui Šiauliuose ir platesniame Žemaitijos regione. Aptarkite esamą sistemą, savo planus ir tolesnius veiksmus.",
    contactLabel: "Gauti šildymo darbų kainos pasiūlymą",
  },
  services: {
    eyebrow: "Šildymo paslaugos",
    title: "Pagalba esamai šildymo sistemai ir būsimiems darbams.",
    description:
      "Gyvenamųjų namų šildymo sistemų montavimas, remontas, priežiūra ir atnaujinimas. Tinkama darbų apimtis prasideda nuo jūsų namo ir jo šildymo sistemos įvertinimo.",
    items: [
      {
        title: "Šildymo sistemos montavimas",
        description:
          "Suplanuokite šildymo sistemą naujam ar renovuojamam namui. Prieš pasirenkant sprendimą verta aptarti objektą, jūsų poreikius ir reikalingus darbus.",
      },
      {
        title: "Šildymo sistemos remontas",
        description:
          "Kreipkitės, jei šildymo sistema neveikia taip, kaip turėtų. Sistemos įvertinimas padeda nustatyti problemą ir galimus remonto sprendimus.",
      },
      {
        title: lithuanianSharedContent.structuredData.knowsAbout[3],
        description:
          "Pasirūpinkite esamos šildymo sistemos priežiūra. Aptarkite sistemą ir pastebėtas problemas, kad būtų galima įvertinti, kokios priežiūros jai reikia.",
      },
      {
        title: "Atnaujinimas ir keitimas",
        description:
          "Įvertinkite senstančią sistemą arba suplanuokite pakeitimus renovacijos metu. Aptarkite, ką galima palikti, patobulinti ar pakeisti ir kokių darbų reikėtų.",
      },
      {
        title: "Radiatorių darbai",
        description:
          "Aptarkite radiatorių montavimą, keitimą ar remontą – tiek keičiant patalpų išplanavimą, tiek taisant problemų keliantį radiatorių.",
      },
      {
        title: "Šildymo valdymas ir patobulinimai",
        description:
          "Įvertinkite temperatūros valdymą ir tai, kaip šiluma paskirstoma namuose. Aptarkite galimus reguliavimo ar valdymo įrangos pakeitimus, tinkančius esamai sistemai.",
      },
    ],
  },
  whenToCall: {
    eyebrow: "Kada verta kreiptis",
    title: "Kažkas pasikeitė ar planuojate naujus darbus?",
    description:
      "Tai priežastys, dėl kurių verta aptarti šildymo sistemos įvertinimą. Papasakokite, ką pastebėjote ar ką planuojate – problemos priežastis ir reikalingi darbai priklauso nuo jūsų namo ir jo sistemos.",
    signs: [
      "Patalpos ar radiatoriai tinkamai neįšyla.",
      "Šildymo sistemoje atsirado naujų ar neįprastų garsų.",
      "Temperatūra netikėtai skiriasi tarp patalpų arba keičiasi dienos metu.",
      "Dingo šildymas arba sistema nustojo veikti.",
      "Turite senstančią sistemą ir svarstote ją remontuoti ar pakeisti.",
      "Planuojate renovaciją, priestatą ar šildymo sistemos atnaujinimą.",
    ],
  },
  process: {
    eyebrow: "Kaip dirbame",
    title: "Nuo pirmos užklausos iki aiškaus darbų plano.",
    description:
      "Pradėkite nuo objekto vietos ir šildymo problemos ar planuojamų darbų aprašymo. Tada galima aptarti įvertinimą, kainos pasiūlymą ir tolesnius veiksmus.",
    steps: [
      {
        title: lithuanianHomeContent.process.steps[0].title,
        description:
          "Nurodykite, kur yra jūsų objektas ir kokių šildymo darbų reikia.",
      },
      {
        title: "Aptarkime jūsų šildymo sistemą",
        description:
          "Aptarkite šildymo problemą arba planuojamą montavimą, priežiūrą ar atnaujinimą ir papasakokite apie esamą sistemą.",
      },
      {
        title: lithuanianHomeContent.process.steps[2].title,
        description:
          "Jei reikia, susitarsime dėl apsilankymo, kad įvertintume jūsų namo šildymo sistemą ir planuojamus darbus.",
      },
      {
        title: lithuanianHomeContent.process.steps[3].title,
        description:
          "Peržiūrėkite siūlomus šildymo darbus ir kainos pasiūlymą, tada aptarkime tolesnius veiksmus.",
      },
    ],
  },
  serviceArea: {
    eyebrow: lithuanianHomeContent.hero.area.eyebrow,
    title: "Šildymo paslaugos Šiauliuose ir aplinkiniuose rajonuose.",
    description:
      "Aptarnaujame gyvenamuosius namus Šiauliuose ir platesniame Žemaitijos regione, įprastai maždaug 50 km spinduliu.",
    noteTitle: "Patikrinkite, ar aptarnaujame jūsų vietovę",
    noteDescription:
      "Užklausoje nurodykite objekto vietą, kad galėtume patvirtinti aptarnavimo galimybę ir aptarti apsilankymą objekte.",
    linkLabel: lithuanianHomeContent.region.link.label,
  },
  relatedServices: {
    eyebrow: "Kitos paslaugos",
    title: "Kiti darbai, kurių gali reikėti jūsų namams.",
    items: [
      {
        title: lithuanianNavigationLabels.heatPumps,
        description:
          "Svarstote keisti šildymo sistemą? Sužinokite daugiau apie šilumos siurblių montavimą ir aptarkite, ar toks sprendimas tinka jūsų namams.",
        path: "/heat-pumps",
        linkLabel: "Sužinoti apie šilumos siurblių montavimą",
      },
      {
        title: lithuanianNavigationLabels.plumbing,
        description:
          "Jei reikia bendrųjų santechnikos darbų arba santechnikos darbų renovacijos metu, susipažinkite su mūsų paslaugomis gyvenamiesiems namams.",
        path: "/plumbing",
        linkLabel: lithuanianHomeContent.services.items[2].link.label,
      },
      {
        title: lithuanianNavigationLabels.emergencyRepairs,
        description:
          "Jei šildymo sistemos gedimą reikia pašalinti skubiai, peržiūrėkite skubaus remonto informaciją.",
        path: "/emergency-repairs",
        linkLabel: lithuanianHomeContent.enquiry.emergencyLink.label,
      },
    ],
  },
  finalCta: {
    title: "Aptarkime jūsų šildymo darbus.",
    description:
      "Nurodykite, kur yra jūsų namai, kokia šildymo problema kilo arba ką norėtumėte atnaujinti. Paprašykite kainos pasiūlymo arba aptarkite objekto apžiūrą ir tolesnius veiksmus.",
    contactLabel: "Aptarti šildymo darbus",
  },
} as const satisfies HeatingPageContent;

export const metadata = createLocalizedPageMetadata({
  title: lithuanianHeatingContent.metadata.title,
  description: lithuanianHeatingContent.metadata.description,
  path: "/heating",
  locale: "lt",
});

export default function LithuanianHeatingPage() {
  return <HeatingPage content={lithuanianHeatingContent} locale="lt" />;
}

import {
  PlumbingPage,
  type PlumbingPageContent,
} from "@/components/plumbing-page";
import { lithuanianHomeContent } from "@/content/lt/home";
import { lithuanianNavigationLabels } from "@/content/lt/navigation";
import { lithuanianHeatingContent } from "@/content/lt/pages/heating";
import { createLocalizedPageMetadata } from "@/lib/metadata";

export const lithuanianPlumbingContent = {
  metadata: {
    title: "Santechnikos paslaugos gyvenamiesiems namams Šiauliuose",
    description:
      "Buitinės santechnikos remonto ir planuojamų santechnikos darbų paslaugos namams Šiauliuose bei platesniame Žemaitijos regione. Demonstracinis projektas.",
  },
  hero: {
    eyebrow: "Buitinė santechnika · Šiauliai ir Žemaitija",
    title: "Praktiška santechnikos pagalba jūsų namams.",
    description:
      "Nuo varvančio čiaupo iki santechnikos pakeitimų renovacijos metu – aptarkite buitinius santechnikos darbus Šiauliuose ir platesniame Žemaitijos regione.",
    contactLabel: "Aptarti santechnikos darbus",
    emergencyLabel: "Skubaus remonto informacija",
  },
  services: {
    eyebrow: "Santechnikos paslaugos",
    title: "Kasdienis remontas ir planuojami pakeitimai.",
    description:
      "Pagalba atliekant bendruosius santechnikos darbus namuose – nuo pavienių įrenginių iki vamzdynų pakeitimų, susijusių su renovacija ar šildymo projektu.",
    groups: [
      {
        title: "Remontas ir santechnikos įranga",
        description:
          "Praktiška pagalba sprendžiant kasdienes santechnikos problemas ir prižiūrint buitinius įrenginius.",
        services: [
          {
            title: "Varvantys čiaupai ir nesandarūs vamzdynai",
            description:
              "Įvertiname matomus nuotėkius ir aptariame prieinamų buitinių vamzdynų ar čiaupų remontą.",
          },
          {
            title: "Čiaupų keitimas",
            description:
              "Keičiame virtuvės, vonios ar pagalbinių patalpų čiaupus ir patikriname prijungtus vamzdynus.",
          },
          {
            title: "Kriauklės ir praustuvai",
            description:
              "Padedame montuoti, keisti ir remontuoti buitines kriaukles bei praustuvus.",
          },
          {
            title: "Tualetai ir bakeliai",
            description:
              "Įvertiname tualetų ir vandens bakelių gedimus arba aptariame jų keitimą.",
          },
        ],
      },
      {
        title: "Pakeitimai ir planuojami darbai",
        description:
          "Santechnikos pakeitimai renovacijos, naujo patalpų išplanavimo ar susijusių šildymo projektų metu.",
        services: [
          {
            title: "Vamzdynų pakeitimai",
            description:
              "Aptarkite buitinių vandentiekio vamzdynų pakeitimus perkeliant santechnikos įrangą ar keičiant patalpų išplanavimą.",
          },
          {
            title: "Santechnikos darbai renovacijos metu",
            description:
              "Planuokite santechnikos darbus kartu su vonios, virtuvės ar kitais būsto atnaujinimo darbais.",
          },
          {
            title: "Su šildymu susiję santechnikos darbai",
            description:
              "Derinkite buitinių vamzdynų pakeitimus, kurie yra šildymo sistemos darbų dalis.",
          },
          {
            title: "Bendrieji santechnikos remonto darbai",
            description:
              "Kreipkitės dėl kitų buitinių santechnikos darbų ir išsiaiškinkite, kam reikia dėmesio.",
          },
        ],
      },
    ],
  },
  reasonsToCall: {
    eyebrow: "Dažnos priežastys kreiptis",
    title: "Papasakokite, ką matote ir kas pasikeitė.",
    description:
      "Prieš susisiekdami neprivalote patys nustatyti priežasties. Aprašykite problemą, paveiktą įrenginį ar patalpą ir kada ją pirmą kartą pastebėjote.",
    items: [
      "Matomas nuotėkis iš čiaupo, įrenginio ar prieinamo vamzdyno.",
      "Čiaupas nuolat varva arba jį reikia pakeisti.",
      "Pasikeitė vandens srautas arba kyla abejonių dėl jo veikimo.",
      "Tualetas arba vandens bakelis neveikia taip, kaip turėtų.",
      "Vamzdynas pažeistas arba jį reikia pakeisti.",
      "Santechnikos pakeitimai renovacijos metu.",
      "Nauja santechnikos įranga arba kitoks patalpų išplanavimas.",
    ],
    urgentNote: {
      title: "Ar darbai atrodo skubūs?",
      description:
        "Jei aktyvi santechnikos ar šildymo problema reikalauja skubaus dėmesio, peržiūrėkite skubaus remonto puslapį ir sužinokite, kokią informaciją pateikti susisiekiant. Galimybės ir tolesni veiksmai priklauso nuo situacijos ir vietos.",
      linkLabel: lithuanianHomeContent.enquiry.emergencyLink.label,
    },
  },
  plannedWork: {
    eyebrow: "Planuojami santechnikos darbai",
    title: "Santechnika – svarbi geresnės erdvės planavimo dalis.",
    description:
      "Ankstyvas aptarimas padeda suderinti santechnikos įrangos pasirinkimą ir patalpų išplanavimą su renovacijai ar atnaujinimui reikalingais vamzdynų pakeitimais.",
    items: [
      {
        title: "Vonios renovacija",
        description:
          "Suplanuokite vamzdynų ir santechnikos įrangos pakeitimus pagal numatomą išplanavimą.",
      },
      {
        title: "Virtuvės pakeitimai",
        description:
          "Aptarkite kriauklės, čiaupo ir vandens tiekimo darbus naujam išplanavimui.",
      },
      {
        title: "Santechnikos įrangos perkėlimas",
        description:
          "Prieš pradedant darbus įvertinkite, kokių vamzdynų pakeitimų reikės.",
      },
      {
        title: "Būsto atnaujinimas",
        description:
          "Derinkite kelis buitinius santechnikos darbus atnaujinant skirtingas patalpas.",
      },
      {
        title: "Šildymo vamzdynų pakeitimai",
        description:
          "Planuokite susijusius santechnikos darbus kartu su šildymo sistemos montavimu ar atnaujinimu.",
      },
    ],
  },
  process: {
    eyebrow: lithuanianHeatingContent.process.eyebrow,
    title: "Aiškus kelias nuo užklausos iki tolesnių veiksmų.",
    description:
      "Pradėkite nuo darbų aprašymo ir objekto vietos. Tada, jei reikia, įvertinimas padės nustatyti darbų apimtį prieš nusprendžiant, kaip tęsti.",
    steps: [
      {
        title: lithuanianHomeContent.process.steps[0].title,
        description:
          "Nurodykite, kur yra objektas ir ar jums reikia remonto, ar planuojamų santechnikos darbų.",
      },
      {
        title: "Aprašykite darbus",
        description:
          "Papasakokite, kas nutiko arba ką norite pakeisti. Nuotraukos ir santechnikos įrangos informacija gali padėti pradiniam aptarimui.",
      },
      {
        title: "Įvertinimas / apsilankymas objekte",
        description:
          "Jei reikia, susitarsime dėl įvertinimo, kad apžiūrėtume santechniką ir suprastume reikalingų darbų apimtį.",
      },
      {
        title: lithuanianHomeContent.process.steps[3].title,
        description:
          "Peržiūrėkite siūlomus darbus ir kainos pasiūlymą, tada aptarkime darbų laiką ir tolesnius veiksmus.",
      },
    ],
  },
  serviceArea: {
    eyebrow: lithuanianHomeContent.hero.area.eyebrow,
    title: "Buitinės santechnikos paslaugos Šiauliuose ir aplinkiniuose rajonuose.",
    description:
      "Aptarnaujame namus Šiauliuose ir platesniame Žemaitijos regione, įprastai maždaug 50 km spinduliu.",
    noteTitle: "Susisiekdami nurodykite savo vietovę",
    noteDescription:
      "Nurodykite miestą ar kaimą ir aprašykite santechnikos darbus, kad galėtume patvirtinti aptarnavimo galimybę ir aptarti, ar reikalingas apsilankymas objekte.",
    linkLabel: lithuanianHomeContent.region.link.label,
  },
  relatedServices: {
    eyebrow: lithuanianHeatingContent.relatedServices.eyebrow,
    title: "Šildymo ir skubios pagalbos paslaugos jūsų namams.",
    items: [
      {
        title: lithuanianNavigationLabels.heating,
        description:
          "Susipažinkite su šildymo sistemų montavimo, remonto, priežiūros ir atnaujinimo paslaugomis jūsų namams.",
        path: "/heating",
        linkLabel: lithuanianHomeContent.services.items[0].link.label,
      },
      {
        title: lithuanianNavigationLabels.heatPumps,
        description:
          "Svarstote naują šildymo sprendimą? Sužinokite, ką reikėtų įvertinti prieš pasirenkant šilumos siurblį.",
        path: "/heat-pumps",
        linkLabel:
          lithuanianHeatingContent.relatedServices.items[0].linkLabel,
      },
      {
        title: lithuanianNavigationLabels.emergencyRepairs,
        description:
          "Jei santechnikos ar šildymo problema reikalauja skubaus dėmesio, peržiūrėkite skubaus remonto informaciją.",
        path: "/emergency-repairs",
        linkLabel: lithuanianHomeContent.enquiry.emergencyLink.label,
      },
    ],
  },
  finalCta: {
    title: "Kokių santechnikos darbų reikia jūsų namams?",
    description:
      "Nurodykite, kur yra objektas, ką reikia remontuoti arba ką planuojate pakeisti. Aptarsime darbus, ar reikalingas įvertinimas, ir tolesnius veiksmus.",
    contactLabel: "Aprašyti santechnikos darbus",
  },
} as const satisfies PlumbingPageContent;

// This metadata remains unreachable until the Lithuanian locale is published.
// An empty availability list prevents premature hreflang output.
export const metadata = createLocalizedPageMetadata({
  title: lithuanianPlumbingContent.metadata.title,
  description: lithuanianPlumbingContent.metadata.description,
  path: "/plumbing",
  locale: "lt",
  availableLocales: [],
});

export default function LithuanianPlumbingPage() {
  return <PlumbingPage content={lithuanianPlumbingContent} locale="lt" />;
}

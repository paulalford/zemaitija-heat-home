import {
  EmergencyRepairsPage,
  type EmergencyRepairsPageContent,
} from "@/components/emergency-repairs-page";
import { lithuanianHomeContent } from "@/content/lt/home";
import { lithuanianNavigationLabels } from "@/content/lt/navigation";
import { lithuanianHeatingContent } from "@/content/lt/pages/heating";
import { createLocalizedPageMetadata } from "@/lib/metadata";

export const lithuanianEmergencyRepairsContent = {
  metadata: {
    title: "Skubus šildymo ir santechnikos remontas Šiauliuose",
    description:
      "Informacija dėl skubių gyvenamųjų namų šildymo ir santechnikos remonto užklausų Šiauliuose bei platesniame Žemaitijos regione. Demonstracinis projektas.",
  },
  hero: {
    eyebrow: "Skubus remontas · Šiauliai ir Žemaitija",
    title: "Skubi šildymo ar santechnikos problema namuose?",
    description:
      "Papasakokite, kas nutiko ir kur yra objektas. Priimame skubaus remonto užklausas Šiauliuose ir platesniame Žemaitijos regione.",
    contactLabel: "Susisiekti dėl skubaus remonto",
    imageAlt: lithuanianHomeContent.services.items[3].image.alt,
    beforeContact: {
      title: "Prieš susisiekdami",
      preparation:
        "Pasiruoškite nurodyti vietą, trumpai aprašyti problemą ir pateikti kontaktinius duomenis. Aiškiai pasakykite, jei vanduo aktyviai teka arba šildymas visiškai neveikia.",
      coverage:
        "Įprasta aptarnavimo teritorija – maždaug 50 km aplink Šiaulius, platesniame Žemaitijos regione.",
    },
  },
  urgentProblems: {
    eyebrow: "Problemos, kurioms gali reikėti skubaus dėmesio",
    title: "Aprašykite, kas vyksta, nebandydami patys nustatyti gedimo.",
    description:
      "Šioms situacijoms gali reikėti greito įvertinimo. Jūsų pateikta informacija padeda nustatyti tinkamą kitą žingsnį, tačiau tai nereiškia, kad kiekvieną problemą galima pašalinti iš karto.",
    items: [
      "Aktyvus vandens nuotėkis iš prieinamo vamzdyno ar buitinio įrenginio.",
      "Trūkęs arba matomai pažeistas buitinis vamzdynas.",
      "Visiškai dingęs šildymas, kurio negalima pagrįstai atidėti iki planinės priežiūros.",
      "Vandens nuotėkis iš šildymo sistemos komponento.",
      "Rimtas santechnikos gedimas, trukdantis įprastai naudotis namais.",
      "Vanduo atsirado ten, kur jo neturėtų būti.",
      "Kita šildymo sistemos problema, kuri, panašu, reikalauja greito įvertinimo.",
    ],
  },
  contactInformation: {
    eyebrow: "Ką mums nurodyti",
    title: "Naudinga informacija padeda greitai suprasti situaciją.",
    description:
      "Pateikite tai, ką žinote, ir neikite į nesaugią vietą vien tam, kad surinktumėte daugiau informacijos. Gedimo priežasties patiems nustatyti nereikia.",
    items: [
      {
        title: "Objekto vieta",
        description:
          "Nurodykite miestą ar kaimą ir adreso informaciją, reikalingą nustatyti, kur reikalinga pagalba.",
      },
      {
        title: "Kas nutiko",
        description:
          "Aprašykite, ką matote ar girdite ir kuri patalpa, įrenginys ar šildymo sistemos dalis yra paveikta.",
      },
      {
        title: "Kada prasidėjo problema",
        description:
          "Nurodykite, kada pirmą kartą pastebėjote problemą ir ar nuo to laiko ji pasikeitė.",
      },
      {
        title: "Aktyvus vandens nuotėkis",
        description:
          "Aiškiai nurodykite, ar vanduo vis dar teka ir, jei žinote, ar vandens tiekimas buvo saugiai užsuktas.",
      },
      {
        title: "Šildymo būklė",
        description:
          "Nurodykite, ar šildymas visiškai neveikia, ar problema paveikė tik dalį sistemos.",
      },
      {
        title: "Nuotraukos",
        description:
          "Jei tai naudinga ir saugu, nuotraukos gali padėti parodyti paveiktą vietą pradinio aptarimo metu.",
      },
      {
        title: "Saugus priėjimas",
        description:
          "Nurodykite svarbią informaciją apie priėjimą, ypač jei saugiai pasiekti paveiktą vietą yra sudėtinga.",
      },
    ],
  },
  safety: {
    eyebrow: "Neatidėliotinas saugumas",
    title: "Pirmiausia pasirūpinkite saugumu.",
    items: [
      "Jei vanduo aktyviai teka ir jūs jau žinote, kaip saugiai užsukti vandens tiekimą, tai gali padėti sumažinti žalą.",
      "Nebandykite atlikti remonto, jei tai atrodo nesaugu arba viršija jūsų žinias. Laikykitės atokiau nuo vietų, kurios gali kelti pavojų.",
      "Jei kyla tiesioginis pavojus žmonėms ar turtui, kreipkitės į atitinkamas skubiosios pagalbos tarnybas, o ne pasikliaukite užklausa per svetainę.",
    ],
  },
  process: {
    eyebrow: "Kaip vyksta procesas",
    title: "Keturi aiškūs žingsniai nuo susisiekimo iki tolesnių veiksmų.",
    description:
      "Pirmiausia reikia pateikti pakankamai informacijos, kad būtų galima įvertinti užklausą ir aptarti tinkamus tolesnius veiksmus.",
    steps: [
      {
        title: "Susisiekite su mumis",
        description:
          "Atsiųskite užklausą su kontaktiniais duomenimis, kad galėtume peržiūrėti problemą.",
      },
      {
        title: "Aprašykite problemą ir vietą",
        description:
          "Nurodykite, kas nutiko, kur yra objektas ir ar šiuo metu yra vandens ar šildymo problemų.",
      },
      {
        title: "Įvertiname pateiktą informaciją",
        description:
          "Pateikta informacija padeda nustatyti užklausos pobūdį ir ar reikia papildomų duomenų.",
      },
      {
        title: "Suderiname tinkamus tolesnius veiksmus",
        description:
          "Aptariame, ką reikėtų daryti toliau, atsižvelgiant į problemą, vietą ir esamas galimybes.",
      },
    ],
  },
  serviceArea: {
    eyebrow: lithuanianHomeContent.hero.area.eyebrow,
    title: "Skubaus remonto užklausos Šiauliuose ir aplinkiniuose rajonuose.",
    description:
      "Mūsų įprasta aptarnavimo teritorija apima Šiaulius ir platesnį Žemaitijos regioną, maždaug 50 km spinduliu.",
    noteTitle: "Vieta padeda įvertinti užklausą",
    noteDescription:
      "Susisiekdami nurodykite objekto vietą, kad galėtume nustatyti, ar jis patenka į įprastą aptarnavimo teritoriją, ir aptarti tinkamus tolesnius veiksmus.",
    linkLabel: lithuanianHomeContent.region.link.label,
  },
  plannedWork: {
    eyebrow: "Planuojamiems darbams",
    title: "Neskubiems darbams naudokite įprastus paslaugų puslapius.",
    description:
      "Priežiūrą, atnaujinimus ir montavimo darbus galima aptarti puslapyje, kuris geriausiai atitinka reikalingą paslaugą.",
    services: [
      {
        title: lithuanianNavigationLabels.heating,
        description:
          "Montavimas, priežiūra, atnaujinimas ir neskubus remontas.",
        path: "/heating",
        linkLabel: lithuanianHomeContent.services.items[0].link.label,
      },
      {
        title: lithuanianNavigationLabels.plumbing,
        description:
          "Kasdieniai buitinės santechnikos remonto, pakeitimo ir renovacijos darbai.",
        path: "/plumbing",
        linkLabel: lithuanianHomeContent.services.items[2].link.label,
      },
      {
        title: lithuanianNavigationLabels.heatPumps,
        description:
          "Užklausos dėl tinkamumo, įvertinimo ir planuojamo montavimo.",
        path: "/heat-pumps",
        linkLabel:
          lithuanianHeatingContent.relatedServices.items[0].linkLabel,
      },
    ],
  },
  finalCta: {
    eyebrow: "Susisiekite su mumis",
    title: "Papasakokite, kas nutiko.",
    description:
      "Nurodykite objekto vietą, trumpai aprašykite problemą ir pateikite kontaktinius duomenis, kad galėtume įvertinti užklausą.",
    contactLabel: "Siųsti skubaus remonto užklausą",
  },
} as const satisfies EmergencyRepairsPageContent;

export const metadata = createLocalizedPageMetadata({
  title: lithuanianEmergencyRepairsContent.metadata.title,
  description: lithuanianEmergencyRepairsContent.metadata.description,
  path: "/emergency-repairs",
  locale: "lt",
});

export default function LithuanianEmergencyRepairsPage() {
  return (
    <EmergencyRepairsPage
      content={lithuanianEmergencyRepairsContent}
      locale="lt"
    />
  );
}

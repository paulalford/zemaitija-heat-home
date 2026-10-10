import {
  HeatPumpsPage,
  type HeatPumpsPageContent,
} from "@/components/heat-pumps-page";
import { lithuanianHomeContent } from "@/content/lt/home";
import { lithuanianNavigationLabels } from "@/content/lt/navigation";
import { lithuanianHeatingContent } from "@/content/lt/pages/heating";
import { createLocalizedPageMetadata } from "@/lib/metadata";

export const lithuanianHeatPumpsContent = {
  metadata: {
    title: "Šilumos siurblių montavimas Šiauliuose",
    description:
      "Šilumos siurblių tinkamumo, įvertinimo ir montavimo paslaugos namams Šiauliuose bei platesniame Žemaitijos regione. Demonstracinis projektas.",
  },
  hero: {
    eyebrow: "Šilumos siurblių montavimas · Šiauliai ir Žemaitija",
    title: "Šilumos siurblio pasirinkimas prasideda nuo jūsų namo įvertinimo.",
    description:
      "Svarstote keisti šildymo sistemą? Sužinokite, ar šilumos siurblys galėtų tikti jūsų namams Šiauliuose ar platesniame Žemaitijos regione, ir prieš priimdami sprendimą aptarkite objekto įvertinimą.",
    contactLabel: "Aptarti šilumos siurblį jūsų namams",
  },
  consideration: {
    eyebrow: "Kada verta svarstyti šilumos siurblį",
    title: "Šildymo sprendimas, kurį tinkamu metu verta apsvarstyti.",
    description:
      "Šios situacijos gali būti geras pagrindas pradėti pokalbį. Jos pačios savaime neparodo, ar šilumos siurblys tinka – sprendimas priklauso nuo jūsų namo ir reikalingų darbų.",
    items: [
      {
        title: "Senstančios šildymo sistemos keitimas",
        description:
          "Planuojamas sistemos keitimas – gera proga palyginti skirtingus šildymo sprendimus ir įvertinti, kokių darbų reikėtų šilumos siurbliui sumontuoti.",
      },
      {
        title: "Namo renovacija",
        description:
          "Šildymą verta planuoti kartu su apšiltinimo ir patalpų išplanavimo pakeitimais, kad rekomendacija atitiktų jūsų planuojamą namą.",
      },
      {
        title: "Žematemperatūrės šildymo sistemos planavimas",
        description:
          "Jei svarstote grindinį šildymą ar radiatorių keitimą, verta įvertinti, ar šilumos siurblys galėtų veikti su planuojama sistema.",
      },
      {
        title: "Šildymo valdymo gerinimas",
        description:
          "Šildymo valdymo įvertinimas gali būti platesnio sistemos atnaujinimo dalis. Aptarkite, ar jūsų poreikiams geriau tiktų esamos sistemos pakeitimai, ar naujas sprendimas.",
      },
      {
        title: "Kito šildymo sprendimo svarstymas",
        description:
          "Galite išnagrinėti galimybes dar prieš nuspręsdami ką nors keisti. Pradėkite nuo to, kaip šildomi jūsų namai ir ką norėtumėte pakeisti.",
      },
    ],
  },
  suitability: {
    eyebrow: "Tinkamumo veiksniai",
    title: "Prieš pasirenkant sistemą reikia įvertinti visą namą.",
    description:
      "Rekomenduojant šilumos siurblį reikia atsižvelgti į namo šildymo poreikį, esamą sistemą ir ateities planus. Tai pagrindiniai dalykai, kuriuos verta aptarti objekto vertinimo metu.",
    factors: [
      {
        title: "Esama šildymo sistema",
        description:
          "Esama įranga, jos būklė ir jungtys padeda nustatyti, ką galima palikti ir ką reikėtų pakeisti.",
      },
      {
        title: "Pastato šilumos izoliacija",
        description:
          "Svarbu, kaip gerai namas išlaiko šilumą. Esamą apšiltinimą ir planuojamus pagerinimus reikėtų vertinti kartu.",
      },
      {
        title: "Šilumos poreikis",
        description:
          "Prieš rekomenduojant įrangą reikia įvertinti pastato šilumos poreikį, o ne rinktis sistemą vien pagal grindų plotą.",
      },
      {
        title: "Radiatoriai arba grindinis šildymas",
        description:
          "Reikia įvertinti esamus radiatorius ar grindinį šildymą ir jų tinkamumą planuojamai sistemai. Dalį jų gali būti galima palikti, kitus gali reikėti pakeisti.",
      },
      {
        title: "Vieta lauko įrenginiui",
        description:
          "Lauko įrenginiui reikia tinkamos vietos, užtikrinant priėjimą ir atsižvelgiant į netoliese esančius langus, sklypo ribas bei kaimyninius namus.",
      },
      {
        title: "Namo išplanavimas",
        description:
          "Patalpų išdėstymas, vamzdynų trasos ir vieta karšto vandens įrangai namo viduje gali turėti įtakos montavimo darbams.",
      },
      {
        title: "Renovacijos planai",
        description:
          "Priestatai, apšiltinimo darbai ar patalpų pakeitimai gali turėti įtakos rekomendacijai ir tam, kokia tvarka reikėtų atlikti šildymo darbus.",
      },
    ],
  },
  assessment: {
    eyebrow: "Prieš pateikiant rekomendaciją",
    title: "Ką reikėtų įvertinti.",
    description:
      "Vertinant objektą surenkama praktinė informacija apie namą ir planuojamą sistemą. Užklausos metu pateikite tai, ką jau žinote, o apsilankymas objekte padės išsiaiškinti likusią informaciją.",
    details: [
      {
        title: "Namo dydis ir išplanavimas",
        description: "Šildomos patalpos, jų paskirtis ir planuojami pakeitimai.",
      },
      {
        title: "Esama šildymo įranga",
        description:
          "Dabartinis šilumos šaltinis, valdymo įranga ir žinomos problemos.",
      },
      {
        title: "Esami šildymo įrenginiai",
        description:
          "Radiatoriai arba grindinis šildymas skirtingose namo dalyse.",
      },
      {
        title: "Šilumos izoliacijos būklė",
        description:
          "Turima informacija apie stogo, sienų, grindų ir langų šilumos izoliaciją.",
      },
      {
        title: "Karšto vandens poreikis",
        description:
          "Namų ūkio poreikiai, esama karšto vandens talpa ir turima vieta namo viduje.",
      },
      {
        title: "Lauko įrenginio vieta",
        description: "Galimos vietos, priėjimas ir jungčių trasos iki namo.",
      },
    ],
    enquiryInformation: {
      title: "Naudinga informacija prieš kreipiantis",
      description:
        "Pasiruoškite nurodyti adresą, apytikslį namo plotą, esamos šildymo įrangos informaciją ir renovacijos planus. Dabartinės sistemos ir galimos lauko įrenginio vietos nuotraukos gali padėti pradiniam pokalbiui. Norint susisiekti nebūtina iš anksto žinoti visų atsakymų.",
    },
    installation: {
      title: "Kokie darbai gali būti reikalingi montuojant",
      description:
        "Priklausomai nuo pasirinkto sprendimo, gali reikėti sumontuoti lauko įrenginį, prijungti jį prie šildymo ir karšto vandens sistemos bei pritaikyti vamzdynus, radiatorius, grindinį šildymą ar valdymo įrangą. Pasiūlyme taip pat turėtų būti numatytas sistemos patikrinimas, sureguliavimas ir valdymo paaiškinimas po darbų.",
    },
  },
  process: {
    eyebrow: "Kaip dirbame",
    title: "Nuo pirmojo klausimo iki pagrįsto sprendimo.",
    description:
      "Užklausa pradeda pokalbį, o sistemos tinkamumas įvertinamas prieš rekomenduojant montavimą. Prieš priimdami sprendimą skirkite laiko suprasti siūlomus darbus ir kainos pasiūlymą.",
    steps: [
      {
        title: "Užklausa",
        description:
          "Nurodykite objekto vietą, esamą šildymo sistemą ir kokius pakeitimus svarstote.",
      },
      {
        title: "Pirminis aptarimas",
        description:
          "Aptarkite savo poreikius ir renovacijos planus, reikalingą informaciją ir tai, ar kitas žingsnis turėtų būti objekto įvertinimas.",
      },
      {
        title: "Objekto įvertinimas",
        description:
          "Prieš pateikiant rekomendaciją įvertinamas namas, šildymo sistema, karšto vandens poreikis ir galimos įrangos montavimo vietos.",
      },
      {
        title: "Rekomendacija / kainos pasiūlymas",
        description:
          "Aptariama, ar šilumos siurblys galėtų tikti jūsų namams. Jei montavimas rekomenduojamas, peržiūrimi siūlomi darbai, reikalingi papildomi pakeitimai ir kainos pasiūlymas.",
      },
      {
        title: "Tolesni veiksmai",
        description:
          "Užduokite klausimus apie pasiūlymą, o nusprendę tęsti – suderinkite darbų apimtį ir laiką. Jei šilumos siurblys netinka, galima aptarti kitus šildymo sprendimus.",
      },
    ],
  },
  serviceArea: {
    eyebrow: lithuanianHomeContent.hero.area.eyebrow,
    title: "Šilumos siurblių užklausos Šiauliuose ir aplinkiniuose rajonuose.",
    description:
      "Aptarnaujame namus Šiauliuose ir platesniame Žemaitijos regione, įprastai maždaug 50 km spinduliu.",
    noteTitle: "Pradėkite nuo objekto vietos",
    noteDescription:
      "Užklausoje nurodykite miestą ar kaimą, kad galėtume patvirtinti aptarnavimo galimybę ir aptarti objekto įvertinimo organizavimą.",
    linkLabel: lithuanianHomeContent.region.link.label,
  },
  relatedServices: {
    eyebrow: lithuanianHeatingContent.relatedServices.eyebrow,
    title: "Pagalba dėl kitų šildymo ir santechnikos darbų.",
    items: [
      {
        title: lithuanianNavigationLabels.heating,
        description:
          "Jei reikia pagalbos dėl esamos sistemos arba svarstote kitus šildymo darbus, susipažinkite su montavimo, remonto, priežiūros ir atnaujinimo paslaugomis.",
        path: "/heating",
        linkLabel: lithuanianHomeContent.services.items[0].link.label,
      },
      {
        title: lithuanianNavigationLabels.plumbing,
        description:
          "Planuojate kitus darbus namuose? Peržiūrėkite buitines santechnikos paslaugas kasdieniams poreikiams ir renovacijos projektams.",
        path: "/plumbing",
        linkLabel: lithuanianHomeContent.services.items[2].link.label,
      },
      {
        title: lithuanianNavigationLabels.emergencyRepairs,
        description:
          "Jei esamą šildymo ar santechnikos problemą reikia spręsti skubiai, prieš planuodami atnaujinimą peržiūrėkite skubaus remonto informaciją.",
        path: "/emergency-repairs",
        linkLabel: lithuanianHomeContent.enquiry.emergencyLink.label,
      },
    ],
  },
  finalCta: {
    title: "Ar šilumos siurblys tiktų jūsų namams?",
    description:
      "Papasakokite apie savo namus, esamą šildymo sistemą ir planus. Pradėkite pokalbį apie tinkamumą, objekto įvertinimą ir tolesnius veiksmus.",
    contactLabel: "Aptarti šilumos siurblio tinkamumą",
  },
} as const satisfies HeatPumpsPageContent;

// This metadata remains unreachable until the Lithuanian locale is published.
// An empty availability list prevents premature hreflang output.
export const metadata = createLocalizedPageMetadata({
  title: lithuanianHeatPumpsContent.metadata.title,
  description: lithuanianHeatPumpsContent.metadata.description,
  path: "/heat-pumps",
  locale: "lt",
  availableLocales: [],
});

export default function LithuanianHeatPumpsPage() {
  return <HeatPumpsPage content={lithuanianHeatPumpsContent} locale="lt" />;
}

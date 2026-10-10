import type { ContactPageContent } from "@/content/contact-content";
import { lithuanianNavigationLabels } from "@/content/lt/navigation";
import { lithuanianAboutContent } from "@/content/lt/pages/about";
import { lithuanianHomeContent } from "@/content/lt/home";

export const lithuanianContactContent = {
  metadata: {
    title: "Kontaktai dėl šildymo ir santechnikos darbų Šiauliuose",
    description:
      "Pateikite užklausą dėl šildymo, šilumos siurblio, santechnikos ar skubaus remonto darbų objekte Šiauliuose ar platesniame Žemaitijos regione. Demonstracinis projektas.",
  },
  hero: {
    eyebrow: "Susisiekite su Žemaitija Heat & Home",
    title: "Papasakokite, ko reikia jūsų namams.",
    description:
      "Pateikite informaciją apie šildymo, šilumos siurblio, santechnikos ar remonto darbus jūsų objekte Šiauliuose ar platesniame Žemaitijos regione.",
    locationNote: {
      eyebrow: "Pradėkite nuo vietos",
      description:
        "Jūsų miestas, kaimas ar objekto vieta padeda patvirtinti, ar užklausa patenka į įprastą maždaug 50 km aptarnavimo teritoriją aplink Šiaulius.",
      linkLabel: lithuanianAboutContent.localService.linkLabel,
    },
  },
  formSection: {
    eyebrow: "Užklausos forma",
    title: "Aprašykite objektą ir reikalingus darbus.",
    introduction:
      "Privalomi laukai pažymėti žemiau. Ši demonstracinė forma patikrina užklausą, tačiau jos nesiunčia el. paštu.",
  },
  guidance: {
    ariaLabel: "Užklausos informacija",
    urgent: {
      title: "Skubi užklausa?",
      description:
        "Aiškiai aprašykite, kas nutiko ir ar šiuo metu yra problemų su vandeniu ar šildymu. Svetainėje negarantuojamas skubaus reagavimo laikas.",
      safetyNotice:
        "Jei kyla tiesioginis pavojus žmonėms ar turtui, kreipkitės į atitinkamas skubiosios pagalbos tarnybas, o ne pasikliaukite užklausa per svetainę.",
      linkLabel: lithuanianHomeContent.enquiry.emergencyLink.label,
    },
    coverage: {
      title: "Aptarnavimo teritorijos patikrinimas",
      description:
        "Tiksli objekto informacija padeda nustatyti, ar darbai patenka į įprastą aptarnavimo teritoriją, ir aptarti tinkamą tolesnį žingsnį.",
      linkLabel: "Peržiūrėti aptarnavimo teritorijos informaciją",
    },
  },
  nextSteps: {
    eyebrow: "Kas vyksta toliau",
    title: "Nuo užklausos informacijos iki sutarto kito žingsnio.",
    description:
      "Taip procesas turėtų veikti prijungus tikrą el. laiškų siuntimą. Atsakymo laikas priklauso nuo užklausos ir nėra garantuojamas.",
    items: [
      { title: "Pateikite užklausą", description: "Nurodykite objekto vietą, reikalingą paslaugą ir aiškiai aprašykite darbus ar problemą." },
      { title: "Informacija peržiūrima", description: "Pateikti duomenys padeda nustatyti užklausos pobūdį ir vietą." },
      { title: "Aptariame, ko reikia", description: "Jei darbus reikia įvertinti išsamiau, gali būti aptarta papildoma informacija arba objekto apžiūra." },
      { title: "Suderiname tolesnius veiksmus", description: "Kai tinkama, galima patikslinti darbų apimtį, kainos pasiūlymą ir kaip tęsti." },
    ],
  },
  form: {
    requiredIndicator: "(privaloma)", optionalIndicator: "(neprivaloma)",
    labels: { name: "Vardas", email: "El. paštas", telephone: "Telefonas", propertyLocation: "Objekto vieta", service: "Reikalinga paslauga", enquiryType: "Užklausos tipas", message: "Žinutė", privacyConsent: "Sutikimas dėl duomenų naudojimo" },
    propertyLocationHint: "Įveskite miestą, kaimą ar kitą naudingą informaciją apie vietą.",
    messageHint: "Aprašykite objektą, kas nutiko arba kokie darbai planuojami, ir pateikite kitą svarbią informaciją.",
    privacyConsentStatement: "Sutinku, kad įvesti duomenys gali būti naudojami šiai demonstracinei užklausai patikrinti ir įvertinti.",
    privacyConsentHint: "Ši versija tik patikrina formą. Užklausa nėra siunčiama ar saugoma.",
    servicePlaceholder: "Pasirinkite paslaugą",
    serviceLabels: { heating: lithuanianNavigationLabels.heating, heatPumps: lithuanianNavigationLabels.heatPumps, plumbing: lithuanianNavigationLabels.plumbing, emergencyRepairs: lithuanianNavigationLabels.emergencyRepairs, other: "Kita / Nežinau" },
    enquiryTypeLabels: { plannedWork: "Planuojami darbai", repair: "Remontas", urgentProblem: "Skubi problema", notSure: "Nežinau" },
    submitLabel: "Patikrinti užklausą", submittingLabel: "Tikrinama užklausa…",
  },
  validation: {
    name: { empty: "Įveskite savo vardą.", tooLong: "Vardas negali būti ilgesnis nei 100 simbolių." },
    email: { empty: "Įveskite savo el. pašto adresą.", invalid: "Įveskite el. pašto adresą formatu name@example.com.", tooLong: "El. pašto adresas negali būti ilgesnis nei 254 simboliai." },
    telephone: { tooLong: "Telefono numeris negali būti ilgesnis nei 50 simbolių." },
    propertyLocation: { empty: "Įveskite objekto vietą.", tooLong: "Objekto vieta negali būti ilgesnė nei 200 simbolių." },
    service: { invalid: "Pasirinkite paslaugą, kuri geriausiai atitinka jūsų užklausą." },
    enquiryType: { invalid: "Pasirinkite užklausos tipą." },
    message: { empty: "Aprašykite objektą ir reikalingus darbus ar problemą.", tooLong: "Žinutė negali būti ilgesnė nei 3 000 simbolių." },
    privacyConsent: { required: "Patvirtinkite, kad šie duomenys gali būti naudojami šiai demonstracinei užklausai įvertinti." },
  },
  submission: {
    errorSummary: "Patikrinkite pažymėtus laukus ir bandykite dar kartą.",
    successMessage: "Ši demonstracinė portfolio forma sėkmingai patikrinta. Tikras el. laiškų siuntimas bus prijungtas, kai svetainė bus paruošta veikti.",
  },
} as const satisfies ContactPageContent;

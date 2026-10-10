import { lithuanianNavigationLabels } from "@/content/lt/navigation";

export const lithuanianNotFoundContent = {
  eyebrow: "Puslapis nerastas",
  title: "Nepavyko rasti šio puslapio.",
  description:
    "Puslapis galėjo būti perkeltas arba adresas gali būti neteisingas. Galite grįžti į pradžios puslapį arba pasirinkti vieną iš pagrindinių paslaugų.",
  homeHref: "/lt",
  homeLabel: "Grįžti į pradžią",
  navigationLabel: "Pagrindiniai puslapiai",
  navigationHeading: "Tęsti naršymą",
  links: [
    { href: "/lt/heating", label: lithuanianNavigationLabels.heating },
    { href: "/lt/heat-pumps", label: lithuanianNavigationLabels.heatPumps },
    { href: "/lt/plumbing", label: lithuanianNavigationLabels.plumbing },
    {
      href: "/lt/emergency-repairs",
      label: lithuanianNavigationLabels.emergencyRepairs,
    },
    { href: "/lt/service-area", label: lithuanianNavigationLabels.serviceArea },
    { href: "/lt/contact", label: lithuanianNavigationLabels.contact },
  ],
} as const;

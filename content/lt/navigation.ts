import type { NavigationLabels } from "@/content/shared-content";

export const lithuanianNavigationLabels = {
  home: "Pradžia",
  heating: "Šildymas",
  heatPumps: "Šilumos siurbliai",
  plumbing: "Santechnika",
  emergencyRepairs: "Skubus remontas",
  serviceArea: "Aptarnavimo teritorija",
  about: "Apie mus",
  contact: "Kontaktai",
} as const satisfies NavigationLabels;

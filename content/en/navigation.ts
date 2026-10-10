import type { NavigationLabels } from "@/content/shared-content";

export const englishNavigationLabels = {
  home: "Home",
  heating: "Heating",
  heatPumps: "Heat Pumps",
  plumbing: "Plumbing",
  emergencyRepairs: "Emergency Repairs",
  serviceArea: "Service Area",
  about: "About",
  contact: "Contact",
} as const satisfies NavigationLabels;

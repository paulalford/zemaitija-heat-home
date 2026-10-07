import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Heat Pumps" };

export default function HeatPumpsPage() {
  return <PageShell title="Heat Pumps" />;
}

import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Heating" };

export default function HeatingPage() {
  return <PageShell title="Heating" />;
}

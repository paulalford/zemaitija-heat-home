import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Emergency Repairs" };

export default function EmergencyRepairsPage() {
  return <PageShell title="Emergency Repairs" />;
}

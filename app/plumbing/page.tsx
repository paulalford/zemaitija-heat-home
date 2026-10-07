import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Plumbing" };

export default function PlumbingPage() {
  return <PageShell title="Plumbing" />;
}

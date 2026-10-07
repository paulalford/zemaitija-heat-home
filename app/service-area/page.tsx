import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Service Area" };

export default function ServiceAreaPage() {
  return <PageShell title="Service Area" />;
}

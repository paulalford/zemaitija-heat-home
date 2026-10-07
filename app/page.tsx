import { PageShell } from "@/components/page-shell";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <PageShell
      title={site.name}
      eyebrow="Residential heating & plumbing"
      description={`${site.serviceArea}.`}
    />
  );
}

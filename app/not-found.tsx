import { NotFoundPage } from "@/components/not-found-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = {
  ...createPageMetadata({
    title: "Page Not Found",
    description:
      "The requested page could not be found. Return home or continue to a main Žemaitija Heat & Home page.",
  }),
  robots: {
    index: false,
    follow: true,
  },
};

const mainPages = [
  { href: "/heating", label: "Heating" },
  { href: "/heat-pumps", label: "Heat Pumps" },
  { href: "/plumbing", label: "Plumbing" },
  { href: "/emergency-repairs", label: "Emergency Repairs" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
] as const;

export default function NotFound() {
  return (
    <NotFoundPage
      eyebrow="Page not found"
      title="We couldn't find that page."
      description="The page may have moved or the address may be incorrect. You can return home or continue to one of our main services."
      homeHref="/"
      homeLabel="Return home"
      navigationLabel="Main pages"
      navigationHeading="Continue browsing"
      links={mainPages}
    />
  );
}

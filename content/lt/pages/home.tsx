import { HomePage } from "@/components/home-page";
import { lithuanianHomeContent } from "@/content/lt/home";
import { createLocalizedPageMetadata } from "@/lib/metadata";

// This metadata remains unreachable until the Lithuanian homepage route is
// activated. An empty availability list prevents premature hreflang output.
export const metadata = createLocalizedPageMetadata({
  title: lithuanianHomeContent.metadata.title,
  description: lithuanianHomeContent.metadata.description,
  path: "/",
  locale: "lt",
  availableLocales: [],
  socialImage: {
    path: "/lt/opengraph-image",
    alt: lithuanianHomeContent.metadata.socialImageAlt,
  },
});

export default function LithuanianHomePage() {
  return <HomePage content={lithuanianHomeContent} locale="lt" />;
}

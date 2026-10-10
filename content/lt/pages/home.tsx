import { HomePage } from "@/components/home-page";
import { lithuanianHomeContent } from "@/content/lt/home";
import { createLocalizedPageMetadata } from "@/lib/metadata";

export const metadata = createLocalizedPageMetadata({
  title: lithuanianHomeContent.metadata.title,
  description: lithuanianHomeContent.metadata.description,
  path: "/",
  locale: "lt",
  socialImage: {
    path: "/lt/opengraph-image",
    alt: lithuanianHomeContent.metadata.socialImageAlt,
  },
});

export default function LithuanianHomePage() {
  return <HomePage content={lithuanianHomeContent} locale="lt" />;
}

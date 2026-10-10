import { HomePage } from "@/components/home-page";
import { englishHomeContent } from "@/content/en/home";
import { createLocalizedPageMetadata } from "@/lib/metadata";

export const metadata = createLocalizedPageMetadata({
  title: englishHomeContent.metadata.title,
  description: englishHomeContent.metadata.description,
  path: "/",
  locale: "en",
});

export default function EnglishHomePage() {
  return <HomePage content={englishHomeContent} locale="en" />;
}

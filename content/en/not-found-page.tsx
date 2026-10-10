import { NotFoundPage } from "@/components/not-found-page";
import { englishNotFoundContent } from "@/content/en/not-found";
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

export default function EnglishNotFoundPage() {
  return <NotFoundPage {...englishNotFoundContent} />;
}

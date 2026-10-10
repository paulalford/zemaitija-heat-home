import { NotFoundPage } from "@/components/not-found-page";
import { lithuanianNotFoundContent } from "@/content/lt/not-found";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = {
  ...createPageMetadata({
    title: "Puslapis nerastas",
    description:
      "Prašomas puslapis nerastas. Grįžkite į pradžios puslapį arba tęskite naršymą pagrindiniuose Žemaitija Heat & Home puslapiuose.",
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function LithuanianNotFoundPage() {
  return <NotFoundPage {...lithuanianNotFoundContent} />;
}

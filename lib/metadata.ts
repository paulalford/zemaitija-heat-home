import type { Metadata } from "next";
import { site } from "@/lib/site";

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} — heating, heat pumps and plumbing around Šiauliai`,
};

export function getPageTitle(title: string) {
  return `${title} | ${site.name}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: Readonly<{
  title: string;
  description: string;
  path?: string;
}>): Metadata {
  const fullTitle = getPageTitle(title);

  return {
    title: { absolute: fullTitle },
    description,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      title: fullTitle,
      description,
      ...(path ? { url: path } : {}),
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}

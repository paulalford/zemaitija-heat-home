import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";
import { englishSiteMetadata } from "@/content/en/site-metadata";
import "../../globals.css";

export const metadata = englishSiteMetadata;

export default function EnglishLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell locale="en">{children}</SiteShell>
      </body>
    </html>
  );
}

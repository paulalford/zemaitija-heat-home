import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";
import { lithuanianSiteMetadata } from "@/content/lt/site-metadata";
import "../../globals.css";

export const metadata = lithuanianSiteMetadata;

export default function LithuanianLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="lt">
      <body>
        <SiteShell locale="lt">{children}</SiteShell>
      </body>
    </html>
  );
}

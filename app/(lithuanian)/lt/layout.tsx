import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import "../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  robots: {
    index: false,
    follow: false,
  },
};

export default function LithuanianLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="lt">
      <body>{children}</body>
    </html>
  );
}

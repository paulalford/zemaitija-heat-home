import { ContactPage } from "@/components/contact-page";
import { lithuanianContactContent } from "@/content/lt/contact";
import type { ContactSearchParams } from "@/lib/contact-query";
import { createLocalizedPageMetadata } from "@/lib/metadata";

export const metadata = createLocalizedPageMetadata({
  title: lithuanianContactContent.metadata.title,
  description: lithuanianContactContent.metadata.description,
  path: "/contact",
  locale: "lt",
});

export default function LithuanianContactPage({
  searchParams,
}: Readonly<{ searchParams: Promise<ContactSearchParams> }>) {
  return (
    <ContactPage
      content={lithuanianContactContent}
      locale="lt"
      searchParams={searchParams}
    />
  );
}

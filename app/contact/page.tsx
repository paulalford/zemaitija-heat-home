import Link from "next/link";
import { ServiceProcess } from "@/components/service-process";
import { createPageMetadata } from "@/lib/metadata";
import { normalizePropertyLocation } from "@/lib/property-location";
import { ContactForm } from "./contact-form";

const title = "Contact for Heating & Plumbing in Šiauliai";
const description =
  "Send a heating, heat pump, plumbing or emergency repair enquiry for a property around Šiauliai and the wider Žemaitija region. A portfolio case study.";

const serviceQueryValues = new Map([
  ["heating", "heating"],
  ["heat-pumps", "heat-pumps"],
  ["plumbing", "plumbing"],
  ["emergency-repairs", "emergency-repairs"],
]);

const enquiryQueryValues = new Map([
  ["planned", "planned-work"],
  ["repair", "repair"],
  ["urgent", "urgent-problem"],
  ["not-sure", "not-sure"],
]);

type ContactSearchParams = Record<string, string | string[] | undefined>;

function getInitialValue(
  value: string | string[] | undefined,
  supportedValues: ReadonlyMap<string, string>,
) {
  return typeof value === "string" ? (supportedValues.get(value) ?? "") : "";
}

export const metadata = createPageMetadata({
  title,
  description,
  path: "/contact",
});

const enquiryProcess = [
  {
    title: "Send the enquiry",
    description:
      "Provide the property location, service required and a clear description of the work or problem.",
  },
  {
    title: "Details are reviewed",
    description:
      "The information provided helps establish the nature and location of the enquiry.",
  },
  {
    title: "Discuss what is needed",
    description:
      "Further information or a site assessment may be discussed where the job needs a closer look.",
  },
  {
    title: "Agree the next steps",
    description:
      "Where appropriate, the scope, quotation and how to proceed can then be clarified.",
  },
];

export default async function ContactPage({
  searchParams,
}: Readonly<{ searchParams: Promise<ContactSearchParams> }>) {
  const query = await searchParams;
  const initialService = getInitialValue(query.service, serviceQueryValues);
  const initialEnquiryType = getInitialValue(
    query.enquiry,
    enquiryQueryValues,
  );
  const initialPropertyLocation = normalizePropertyLocation(query.location);

  return (
    <>
      <section className="contact-hero" aria-labelledby="contact-hero-heading">
        <div className="container contact-hero-grid">
          <div className="contact-hero-introduction">
            <p className="eyebrow">Contact Žemaitija Heat &amp; Home</p>
            <h1 id="contact-hero-heading">Tell us what your home needs.</h1>
            <p className="page-description">
              Send details of the heating, heat pump, plumbing or repair work
              at your property around Šiauliai and the wider Žemaitija region.
            </p>
          </div>
          <div className="contact-hero-note">
            <p className="eyebrow">Start with the location</p>
            <p>
              Your town, village or property location helps confirm whether the
              enquiry falls within the normal service area of approximately 50
              km around Šiauliai.
            </p>
            <Link href="/service-area" className="text-link">
              Check the service area
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-enquiry" aria-labelledby="contact-enquiry-heading">
        <div className="container contact-enquiry-grid">
          <div>
            <header className="contact-section-heading">
              <p className="eyebrow">Enquiry form</p>
              <h2 id="contact-enquiry-heading">Describe the property and the job.</h2>
              <p>
                Required fields are marked below. This demonstration validates
                the enquiry but does not send it to an email service.
              </p>
            </header>
            <ContactForm
              key={`${initialService}:${initialEnquiryType}:${initialPropertyLocation}`}
              initialService={initialService}
              initialEnquiryType={initialEnquiryType}
              initialPropertyLocation={initialPropertyLocation}
            />
          </div>

          <aside className="contact-guidance" aria-label="Enquiry guidance">
            <section aria-labelledby="urgent-enquiry-heading">
              <h3 id="urgent-enquiry-heading">Urgent enquiry?</h3>
              <p>
                Give clear information about what has happened and whether
                water or heating is currently affected. The website does not
                promise an emergency response time.
              </p>
              <p>
                If there is an immediate risk to people or property, use the
                appropriate emergency service rather than relying on a website
                enquiry.
              </p>
              <Link href="/emergency-repairs" className="text-link">
                Read the emergency repair guidance
              </Link>
            </section>

            <section aria-labelledby="contact-coverage-heading">
              <h3 id="contact-coverage-heading">Checking coverage</h3>
              <p>
                Exact property information helps determine whether the work is
                within the normal service area and supports discussion of the
                appropriate next step.
              </p>
              <Link href="/service-area" className="text-link">
                View service-area information
              </Link>
            </section>
          </aside>
        </div>
      </section>

      <section
        className="contact-next-steps"
        aria-labelledby="contact-next-steps-heading"
      >
        <div className="container">
          <header className="contact-section-heading">
            <p className="eyebrow">What happens next</p>
            <h2 id="contact-next-steps-heading">
              From enquiry details to an agreed next step.
            </h2>
            <p>
              This is the intended process once live email delivery is
              connected. Timing depends on the enquiry and is not guaranteed.
            </p>
          </header>
          <ServiceProcess steps={enquiryProcess} />
        </div>
      </section>
    </>
  );
}

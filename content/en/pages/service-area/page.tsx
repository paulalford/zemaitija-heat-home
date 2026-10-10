import { ServiceAreaPage, type ServiceAreaPageContent } from "@/components/service-area-page";
import { englishHomeContent } from "@/content/en/home";
import { englishNavigationLabels } from "@/content/en/navigation";
import { englishHeatingContent } from "@/content/en/pages/heating";
import { createLocalizedPageMetadata } from "@/lib/metadata";

export const englishServiceAreaContent = {
  metadata: { title: "Heating & Plumbing Service Area Around Šiauliai", description: "Check coverage for residential heating, heat pump, plumbing and emergency repair enquiries within approximately 50 km of Šiauliai. A portfolio case study." },
  hero: { eyebrow: "Local residential services · Žemaitija", title: "Heating and plumbing services around Šiauliai.", description: "Our normal working area extends approximately 50 km from Šiauliai, serving surrounding towns, villages and rural properties across the wider Žemaitija region. Exact coverage is checked for each enquiry.", contactLabel: englishHomeContent.region.noteHeading },
  visual: { centre: "Šiauliai", radius: "≈ 50 km", title: "Indicative normal service radius", description: "Šiauliai is the geographic reference point. The diagram is a guide and does not represent a precise coverage boundary." },
  coverage: { eyebrow: "Main service coverage", title: "A normal working radius, checked job by job.", description: "The approximately 50 km radius helps explain the area we usually cover. It is not a guarantee that every property inside a mathematical circle can be accepted.", items: [
    { title: "Šiauliai as the reference point", description: "Coverage is described in relation to Šiauliai so homeowners have a clear geographic starting point." },
    { title: "Towns and villages", description: "The normal working area includes residential properties in surrounding communities across the region." },
    { title: "Approximately 50 km", description: "The radius is a practical guide to normal coverage, rather than a precise boundary or an automatic acceptance area." },
    { title: "Each enquiry is checked", description: "The exact property location and nature of the work help determine whether a job is within the normal service area." },
  ] },
  checkerSection: { eyebrow: "Location enquiry", title: "Check your location.", description: "The normal service area is approximately 50 km around Šiauliai, but every location is checked individually. Enter a town, village, postcode or property location to carry it into an enquiry.", checker: {
    fieldLabel: "Town, village or postcode", placeholder: "Kuršėnai", submitLabel: "Check location", loadingLabel: "Checking location…", fieldHint: "Enter the location you want to carry into your enquiry.", validation: { empty: "Enter a town, village, postcode or property location.", invalid: "Use standard letters, numbers and address punctuation for the location." }, enquiryLabel: "Enquire about this location", attribution: "Location search © OpenStreetMap contributors",
  } },
  locationDetails: { eyebrow: "How to check your location", title: "Send the property details with your enquiry.", description: "A few practical details help confirm whether the property is within the normal service area and whether the job can be discussed further.", items: [
    { title: "Town or village", description: "Name the settlement or local area where the property is located." }, { title: "Property address", description: "Provide enough address detail for the location to be checked." }, { title: "Service required", description: "Say whether the enquiry concerns heating, a heat pump, plumbing or a repair." }, { title: "Planned or urgent", description: "Explain whether you are arranging future work or need an urgent problem assessed." },
  ], noteTitle: "Why the type of work matters", noteDescription: "Location is considered alongside the service required and the nature of the job. Include both when you get in touch so coverage can be checked using the relevant information.", contactLabel: "Send your location and service details" },
  regionalServices: { eyebrow: "Services across the region", title: "One general service area for our core residential work.", description: "Heating, heat pump, plumbing and emergency repair enquiries use the same broad geographic coverage. Every enquiry is still checked using its location and scope.", items: [
    { title: englishNavigationLabels.heating, description: "Heating installation, repairs, maintenance and upgrades for residential properties.", path: "/heating", linkLabel: englishHomeContent.services.items[0].link.label },
    { title: englishNavigationLabels.heatPumps, description: "Heat pump suitability, assessment and planned installation enquiries.", path: "/heat-pumps", linkLabel: englishHeatingContent.relatedServices.items[0].linkLabel },
    { title: englishNavigationLabels.plumbing, description: "General domestic plumbing repairs, alterations and renovation work.", path: "/plumbing", linkLabel: englishHomeContent.services.items[2].link.label },
    { title: englishNavigationLabels.emergencyRepairs, description: "Urgent heating and plumbing repair enquiries, assessed using the problem and location provided.", path: "/emergency-repairs", linkLabel: englishHomeContent.enquiry.emergencyLink.label },
  ] },
  ruralProperties: { eyebrow: "Rural and outlying properties", title: "Coverage includes more than larger settlements.", description: "Žemaitija includes villages and rural homes as well as larger settlements. These properties can be considered using the same location and job information as any other enquiry.", noteTitle: "Share the exact property location", noteDescription: "An accurate address or clear location information is particularly useful for an outlying property. It allows coverage to be checked without implying a precise boundary or automatic acceptance." },
  finalCta: { title: "Is your property within the normal service area?", description: "Send the property location and the heating, heat pump, plumbing or repair service you need. We can check coverage and discuss the appropriate next steps.", contactLabel: "Check service-area coverage" },
} as const satisfies ServiceAreaPageContent;

export const metadata = createLocalizedPageMetadata({ ...englishServiceAreaContent.metadata, path: "/service-area", locale: "en" });
export default function EnglishServiceAreaPage() { return <ServiceAreaPage content={englishServiceAreaContent} locale="en" />; }

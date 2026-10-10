import type { ContactPageContent } from "@/content/contact-content";
import { englishNavigationLabels } from "@/content/en/navigation";

export const englishContactContent = {
  metadata: {
    title: "Contact for Heating & Plumbing in Šiauliai",
    description:
      "Send a heating, heat pump, plumbing or emergency repair enquiry for a property around Šiauliai and the wider Žemaitija region. A portfolio case study.",
  },
  hero: {
    eyebrow: "Contact Žemaitija Heat & Home",
    title: "Tell us what your home needs.",
    description:
      "Send details of the heating, heat pump, plumbing or repair work at your property around Šiauliai and the wider Žemaitija region.",
    locationNote: {
      eyebrow: "Start with the location",
      description:
        "Your town, village or property location helps confirm whether the enquiry falls within the normal service area of approximately 50 km around Šiauliai.",
      linkLabel: "Check the service area",
    },
  },
  formSection: {
    eyebrow: "Enquiry form",
    title: "Describe the property and the job.",
    introduction:
      "Required fields are marked below. This demonstration validates the enquiry but does not send it to an email service.",
  },
  guidance: {
    ariaLabel: "Enquiry guidance",
    urgent: {
      title: "Urgent enquiry?",
      description:
        "Give clear information about what has happened and whether water or heating is currently affected. The website does not promise an emergency response time.",
      safetyNotice:
        "If there is an immediate risk to people or property, use the appropriate emergency service rather than relying on a website enquiry.",
      linkLabel: "Read the emergency repair guidance",
    },
    coverage: {
      title: "Checking coverage",
      description:
        "Exact property information helps determine whether the work is within the normal service area and supports discussion of the appropriate next step.",
      linkLabel: "View service-area information",
    },
  },
  nextSteps: {
    eyebrow: "What happens next",
    title: "From enquiry details to an agreed next step.",
    description:
      "This is the intended process once live email delivery is connected. Timing depends on the enquiry and is not guaranteed.",
    items: [
      { title: "Send the enquiry", description: "Provide the property location, service required and a clear description of the work or problem." },
      { title: "Details are reviewed", description: "The information provided helps establish the nature and location of the enquiry." },
      { title: "Discuss what is needed", description: "Further information or a site assessment may be discussed where the job needs a closer look." },
      { title: "Agree the next steps", description: "Where appropriate, the scope, quotation and how to proceed can then be clarified." },
    ],
  },
  form: {
    requiredIndicator: "(required)", optionalIndicator: "(optional)",
    labels: { name: "Name", email: "Email", telephone: "Telephone", propertyLocation: "Property location", service: "Service required", enquiryType: "Enquiry type", message: "Message", privacyConsent: "Privacy consent" },
    propertyLocationHint: "Enter the town, village or other useful location information.",
    messageHint: "Describe the property, what has happened or what work is planned, and any relevant details.",
    privacyConsentStatement: "I agree that the details entered may be used to validate and assess this demonstration enquiry.",
    privacyConsentHint: "This version validates the form only. It does not send or store the enquiry.",
    servicePlaceholder: "Choose a service",
    serviceLabels: { heating: englishNavigationLabels.heating, heatPumps: englishNavigationLabels.heatPumps, plumbing: englishNavigationLabels.plumbing, emergencyRepairs: englishNavigationLabels.emergencyRepairs, other: "Other / Not sure" },
    enquiryTypeLabels: { plannedWork: "Planned work", repair: "Repair", urgentProblem: "Urgent problem", notSure: "Not sure" },
    submitLabel: "Validate enquiry", submittingLabel: "Validating enquiry…",
  },
  validation: {
    name: { empty: "Enter your name.", tooLong: "Keep your name to 100 characters or fewer." },
    email: { empty: "Enter your email address.", invalid: "Enter an email address in the format name@example.com.", tooLong: "Keep your email address to 254 characters or fewer." },
    telephone: { tooLong: "Keep the telephone number to 50 characters or fewer." },
    propertyLocation: { empty: "Enter the property location.", tooLong: "Keep the property location to 200 characters or fewer." },
    service: { invalid: "Choose the service that best matches your enquiry." },
    enquiryType: { invalid: "Choose an enquiry type." },
    message: { empty: "Describe the property and the work or problem.", tooLong: "Keep your message to 3,000 characters or fewer." },
    privacyConsent: { required: "Confirm that these details may be used to assess this demonstration enquiry." },
  },
  submission: {
    errorSummary: "Check the highlighted fields and try again.",
    successMessage: "This portfolio demonstration form has been validated successfully. Live email delivery will be connected when the site is deployed.",
  },
} as const satisfies ContactPageContent;

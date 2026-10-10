import { normalizePropertyLocation } from "@/lib/property-location";

export type ContactSearchParams = Record<
  string,
  string | string[] | undefined
>;

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

function getSingleValue(value: string | string[] | undefined) {
  return typeof value === "string" ? value : "";
}

export function getContactFormPrefill(searchParams: ContactSearchParams) {
  const service = getSingleValue(searchParams.service);
  const enquiry = getSingleValue(searchParams.enquiry);

  return {
    service: serviceQueryValues.get(service) ?? "",
    enquiryType: enquiryQueryValues.get(enquiry) ?? "",
    propertyLocation: normalizePropertyLocation(searchParams.location),
  };
}

export function getPreservedContactQuery(
  searchParams: ContactSearchParams = {},
) {
  const service = getSingleValue(searchParams.service);
  const enquiry = getSingleValue(searchParams.enquiry);
  const location = normalizePropertyLocation(searchParams.location);
  const query: Record<string, string> = {};

  if (serviceQueryValues.has(service)) {
    query.service = service;
  }

  if (enquiryQueryValues.has(enquiry)) {
    query.enquiry = enquiry;
  }

  if (location) {
    query.location = location;
  }

  return query;
}

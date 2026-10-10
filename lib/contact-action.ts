"use server";

import { englishContactContent } from "@/content/en/contact";
import { lithuanianContactContent } from "@/content/lt/contact";
import { isLocale, type Locale } from "@/lib/i18n";
import { PROPERTY_LOCATION_MAX_LENGTH } from "@/lib/property-location";

type ContactField = "name" | "email" | "telephone" | "propertyLocation" | "service" | "enquiryType" | "message" | "privacyConsent";
export type ContactFormValues = { name: string; email: string; telephone: string; propertyLocation: string; service: string; enquiryType: string; message: string; privacyConsent: boolean };
export type ContactFormState = { status: "idle" | "error" | "success"; message: string; errors: Partial<Record<ContactField, string>>; values: ContactFormValues; revision: number };

const allowedServices = new Set(["heating", "heat-pumps", "plumbing", "emergency-repairs", "other"]);
const allowedEnquiryTypes = new Set(["planned-work", "repair", "urgent-problem", "not-sure"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const localizedContent = { en: englishContactContent, lt: lithuanianContactContent } as const;

function getText(formData: FormData, field: string) { const value = formData.get(field); return typeof value === "string" ? value : ""; }
function nextRevision(previousRevision: number) { return Number.isSafeInteger(previousRevision) && previousRevision >= 0 ? previousRevision + 1 : 1; }
function getLocale(formData: FormData): Locale { const locale = formData.get("locale"); return typeof locale === "string" && isLocale(locale) ? locale : "en"; }

export async function submitContactEnquiry(previousState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const values: ContactFormValues = {
    name: getText(formData, "name"), email: getText(formData, "email"), telephone: getText(formData, "telephone"), propertyLocation: getText(formData, "propertyLocation"), service: getText(formData, "service"), enquiryType: getText(formData, "enquiryType"), message: getText(formData, "message"), privacyConsent: formData.get("privacyConsent") === "on",
  };
  const content = localizedContent[getLocale(formData)];
  const messages = content.validation;
  const errors: ContactFormState["errors"] = {};

  if (!values.name.trim()) errors.name = messages.name.empty;
  else if (values.name.length > 100) errors.name = messages.name.tooLong;
  if (!values.email.trim()) errors.email = messages.email.empty;
  else if (!emailPattern.test(values.email.trim())) errors.email = messages.email.invalid;
  else if (values.email.length > 254) errors.email = messages.email.tooLong;
  if (values.telephone.length > 50) errors.telephone = messages.telephone.tooLong;
  if (!values.propertyLocation.trim()) errors.propertyLocation = messages.propertyLocation.empty;
  else if (values.propertyLocation.length > PROPERTY_LOCATION_MAX_LENGTH) errors.propertyLocation = messages.propertyLocation.tooLong;
  if (!allowedServices.has(values.service)) errors.service = messages.service.invalid;
  if (!allowedEnquiryTypes.has(values.enquiryType)) errors.enquiryType = messages.enquiryType.invalid;
  if (!values.message.trim()) errors.message = messages.message.empty;
  else if (values.message.length > 3000) errors.message = messages.message.tooLong;
  if (!values.privacyConsent) errors.privacyConsent = messages.privacyConsent.required;

  const revision = nextRevision(previousState.revision);
  if (Object.keys(errors).length > 0) return { status: "error", message: content.submission.errorSummary, errors, values, revision };

  // This demonstration deliberately validates only; form data is not sent or stored.
  return { status: "success", message: content.submission.successMessage, errors: {}, values, revision };
}

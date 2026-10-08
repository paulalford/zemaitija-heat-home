"use server";

type ContactField =
  | "name"
  | "email"
  | "telephone"
  | "propertyLocation"
  | "service"
  | "enquiryType"
  | "message"
  | "privacyConsent";

export type ContactFormValues = {
  name: string;
  email: string;
  telephone: string;
  propertyLocation: string;
  service: string;
  enquiryType: string;
  message: string;
  privacyConsent: boolean;
};

export type ContactFormState = {
  status: "idle" | "error" | "success";
  message: string;
  errors: Partial<Record<ContactField, string>>;
  values: ContactFormValues;
  revision: number;
};

const allowedServices = new Set([
  "heating",
  "heat-pumps",
  "plumbing",
  "emergency-repairs",
  "other",
]);

const allowedEnquiryTypes = new Set([
  "planned-work",
  "repair",
  "urgent-problem",
  "not-sure",
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getText(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === "string" ? value : "";
}

function nextRevision(previousRevision: number) {
  return Number.isSafeInteger(previousRevision) && previousRevision >= 0
    ? previousRevision + 1
    : 1;
}

export async function submitContactEnquiry(
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values: ContactFormValues = {
    name: getText(formData, "name"),
    email: getText(formData, "email"),
    telephone: getText(formData, "telephone"),
    propertyLocation: getText(formData, "propertyLocation"),
    service: getText(formData, "service"),
    enquiryType: getText(formData, "enquiryType"),
    message: getText(formData, "message"),
    privacyConsent: formData.get("privacyConsent") === "on",
  };

  const errors: ContactFormState["errors"] = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  } else if (values.name.length > 100) {
    errors.name = "Keep your name to 100 characters or fewer.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter an email address in the format name@example.com.";
  } else if (values.email.length > 254) {
    errors.email = "Keep your email address to 254 characters or fewer.";
  }

  if (values.telephone.length > 50) {
    errors.telephone = "Keep the telephone number to 50 characters or fewer.";
  }

  if (!values.propertyLocation.trim()) {
    errors.propertyLocation = "Enter the property location.";
  } else if (values.propertyLocation.length > 200) {
    errors.propertyLocation =
      "Keep the property location to 200 characters or fewer.";
  }

  if (!allowedServices.has(values.service)) {
    errors.service = "Choose the service that best matches your enquiry.";
  }

  if (!allowedEnquiryTypes.has(values.enquiryType)) {
    errors.enquiryType = "Choose an enquiry type.";
  }

  if (!values.message.trim()) {
    errors.message = "Describe the property and the work or problem.";
  } else if (values.message.length > 3000) {
    errors.message = "Keep your message to 3,000 characters or fewer.";
  }

  if (!values.privacyConsent) {
    errors.privacyConsent =
      "Confirm that these details may be used to assess this demonstration enquiry.";
  }

  const revision = nextRevision(previousState.revision);

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      errors,
      values,
      revision,
    };
  }

  // A server-side email provider call can replace this demo response after
  // deployment. Until then, validated form data is neither sent nor stored.
  return {
    status: "success",
    message:
      "This portfolio demonstration form has been validated successfully. Live email delivery will be connected when the site is deployed.",
    errors: {},
    values,
    revision,
  };
}

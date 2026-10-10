import type { NavigationLabels } from "@/content/shared-content";

export type ContactValidationContent = Readonly<{
  name: Readonly<{ empty: string; tooLong: string }>;
  email: Readonly<{ empty: string; invalid: string; tooLong: string }>;
  telephone: Readonly<{ tooLong: string }>;
  propertyLocation: Readonly<{ empty: string; tooLong: string }>;
  service: Readonly<{ invalid: string }>;
  enquiryType: Readonly<{ invalid: string }>;
  message: Readonly<{ empty: string; tooLong: string }>;
  privacyConsent: Readonly<{ required: string }>;
}>;

export type ContactPageContent = Readonly<{
  metadata: Readonly<{ title: string; description: string }>;
  hero: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    locationNote: Readonly<{
      eyebrow: string;
      description: string;
      linkLabel: string;
    }>;
  }>;
  formSection: Readonly<{ eyebrow: string; title: string; introduction: string }>;
  guidance: Readonly<{
    ariaLabel: string;
    urgent: Readonly<{
      title: string;
      description: string;
      safetyNotice: string;
      linkLabel: string;
    }>;
    coverage: Readonly<{
      title: string;
      description: string;
      linkLabel: string;
    }>;
  }>;
  nextSteps: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    items: readonly Readonly<{ title: string; description: string }>[];
  }>;
  form: Readonly<{
    requiredIndicator: string;
    optionalIndicator: string;
    labels: Readonly<{
      name: string;
      email: string;
      telephone: string;
      propertyLocation: string;
      service: string;
      enquiryType: string;
      message: string;
      privacyConsent: string;
    }>;
    propertyLocationHint: string;
    messageHint: string;
    privacyConsentStatement: string;
    privacyConsentHint: string;
    servicePlaceholder: string;
    serviceLabels: Pick<
      NavigationLabels,
      "heating" | "heatPumps" | "plumbing" | "emergencyRepairs"
    > & Readonly<{ other: string }>;
    enquiryTypeLabels: Readonly<{
      plannedWork: string;
      repair: string;
      urgentProblem: string;
      notSure: string;
    }>;
    submitLabel: string;
    submittingLabel: string;
  }>;
  validation: ContactValidationContent;
  submission: Readonly<{ errorSummary: string; successMessage: string }>;
}>;

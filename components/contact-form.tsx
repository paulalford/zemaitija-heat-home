"use client";

import { useActionState, useEffect, useRef } from "react";
import type { ContactPageContent } from "@/content/contact-content";
import { submitContactEnquiry, type ContactFormState } from "@/lib/contact-action";
import type { Locale } from "@/lib/i18n";
import { PROPERTY_LOCATION_MAX_LENGTH } from "@/lib/property-location";

const defaultInitialState: ContactFormState = { status: "idle", message: "", errors: {}, values: { name: "", email: "", telephone: "", propertyLocation: "", service: "", enquiryType: "", message: "", privacyConsent: false }, revision: 0 };
type ContactFormProps = Readonly<{ content: ContactPageContent["form"]; locale: Locale; initialService?: string; initialEnquiryType?: string; initialPropertyLocation?: string }>;

function FieldError({ id, message }: Readonly<{ id: string; message?: string }>) {
  return message ? <p id={id} className="contact-field-error">{message}</p> : null;
}

export function ContactForm({ content, locale, initialService = "", initialEnquiryType = "", initialPropertyLocation = "" }: ContactFormProps) {
  const initialState: ContactFormState = { ...defaultInitialState, values: { ...defaultInitialState.values, propertyLocation: initialPropertyLocation, service: initialService, enquiryType: initialEnquiryType } };
  const [state, formAction, pending] = useActionState(submitContactEnquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "error") formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"], [data-invalid="true"] input')?.focus();
    else if (state.status === "success") statusRef.current?.focus();
  }, [state.revision, state.status]);

  const { errors, values } = state;
  const required = <span className="contact-required">{content.requiredIndicator}</span>;
  const enquiryTypes = [
    { value: "planned-work", label: content.enquiryTypeLabels.plannedWork },
    { value: "repair", label: content.enquiryTypeLabels.repair },
    { value: "urgent-problem", label: content.enquiryTypeLabels.urgentProblem },
    { value: "not-sure", label: content.enquiryTypeLabels.notSure },
  ] as const;

  return <form ref={formRef} action={formAction} className="contact-form" aria-busy={pending} noValidate>
    <input type="hidden" name="locale" value={locale} />
    {state.status !== "idle" && <div ref={statusRef} className={`contact-form-status contact-form-status-${state.status}`} role={state.status === "error" ? "alert" : "status"} tabIndex={-1}><p>{state.message}</p></div>}
    <div key={state.revision} className="contact-form-fields">
      <div className="contact-form-row">
        <div className="contact-field"><label htmlFor="name">{content.labels.name} {required}</label><input id="name" name="name" type="text" autoComplete="name" maxLength={100} defaultValue={values.name} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} required /><FieldError id="name-error" message={errors.name} /></div>
        <div className="contact-field"><label htmlFor="email">{content.labels.email} {required}</label><input id="email" name="email" type="email" autoComplete="email" inputMode="email" maxLength={254} defaultValue={values.email} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} required /><FieldError id="email-error" message={errors.email} /></div>
      </div>
      <div className="contact-form-row">
        <div className="contact-field"><label htmlFor="telephone">{content.labels.telephone} <span className="contact-optional">{content.optionalIndicator}</span></label><input id="telephone" name="telephone" type="tel" autoComplete="tel" inputMode="tel" maxLength={50} defaultValue={values.telephone} aria-invalid={Boolean(errors.telephone)} aria-describedby={errors.telephone ? "telephone-error" : undefined} /><FieldError id="telephone-error" message={errors.telephone} /></div>
        <div className="contact-field"><label htmlFor="property-location">{content.labels.propertyLocation} {required}</label><input id="property-location" name="propertyLocation" type="text" autoComplete="street-address" maxLength={PROPERTY_LOCATION_MAX_LENGTH} defaultValue={values.propertyLocation} aria-invalid={Boolean(errors.propertyLocation)} aria-describedby={`property-location-hint${errors.propertyLocation ? " property-location-error" : ""}`} required /><p id="property-location-hint" className="contact-field-hint">{content.propertyLocationHint}</p><FieldError id="property-location-error" message={errors.propertyLocation} /></div>
      </div>
      <div className="contact-field"><label htmlFor="service">{content.labels.service} {required}</label><select id="service" name="service" defaultValue={values.service} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined} required><option value="">{content.servicePlaceholder}</option><option value="heating">{content.serviceLabels.heating}</option><option value="heat-pumps">{content.serviceLabels.heatPumps}</option><option value="plumbing">{content.serviceLabels.plumbing}</option><option value="emergency-repairs">{content.serviceLabels.emergencyRepairs}</option><option value="other">{content.serviceLabels.other}</option></select><FieldError id="service-error" message={errors.service} /></div>
      <fieldset className="contact-choice-fieldset" data-invalid={errors.enquiryType ? "true" : undefined} aria-describedby={errors.enquiryType ? "enquiry-type-error" : undefined}><legend>{content.labels.enquiryType} {required}</legend><div className="contact-choice-grid">{enquiryTypes.map((option) => <label key={option.value} htmlFor={`enquiry-${option.value}`}><input id={`enquiry-${option.value}`} name="enquiryType" type="radio" value={option.value} defaultChecked={values.enquiryType === option.value} aria-describedby={errors.enquiryType ? "enquiry-type-error" : undefined} required /><span>{option.label}</span></label>)}</div><FieldError id="enquiry-type-error" message={errors.enquiryType} /></fieldset>
      <div className="contact-field"><label htmlFor="message">{content.labels.message} {required}</label><p id="message-hint" className="contact-field-hint">{content.messageHint}</p><textarea id="message" name="message" rows={8} maxLength={3000} defaultValue={values.message} aria-invalid={Boolean(errors.message)} aria-describedby={`message-hint${errors.message ? " message-error" : ""}`} required /><FieldError id="message-error" message={errors.message} /></div>
      <fieldset className="contact-consent-fieldset" aria-describedby={`privacy-consent-hint${errors.privacyConsent ? " privacy-consent-error" : ""}`}><legend>{content.labels.privacyConsent} {required}</legend><label htmlFor="privacy-consent" className="contact-consent-label"><input id="privacy-consent" name="privacyConsent" type="checkbox" defaultChecked={values.privacyConsent} aria-invalid={Boolean(errors.privacyConsent)} aria-describedby={`privacy-consent-hint${errors.privacyConsent ? " privacy-consent-error" : ""}`} required /><span>{content.privacyConsentStatement}</span></label><p id="privacy-consent-hint" className="contact-field-hint">{content.privacyConsentHint}</p><FieldError id="privacy-consent-error" message={errors.privacyConsent} /></fieldset>
    </div>
    <button type="submit" className="button contact-submit" disabled={pending}>{pending ? content.submittingLabel : content.submitLabel}</button>
  </form>;
}

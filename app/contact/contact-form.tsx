"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  submitContactEnquiry,
  type ContactFormState,
} from "./actions";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: {
    name: "",
    email: "",
    telephone: "",
    propertyLocation: "",
    service: "",
    enquiryType: "",
    message: "",
    privacyConsent: false,
  },
  revision: 0,
};

const enquiryTypes = [
  { value: "planned-work", label: "Planned work" },
  { value: "repair", label: "Repair" },
  { value: "urgent-problem", label: "Urgent problem" },
  { value: "not-sure", label: "Not sure" },
] as const;

function FieldError({ id, message }: Readonly<{ id: string; message?: string }>) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="contact-field-error">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactEnquiry,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "error") {
      const firstInvalidField = formRef.current?.querySelector<HTMLElement>(
        '[aria-invalid="true"], [data-invalid="true"] input',
      );
      firstInvalidField?.focus();
    } else if (state.status === "success") {
      statusRef.current?.focus();
    }
  }, [state.revision, state.status]);

  const { errors, values } = state;

  return (
    <form
      ref={formRef}
      action={formAction}
      className="contact-form"
      aria-busy={pending}
      noValidate
    >
      {state.status !== "idle" && (
        <div
          ref={statusRef}
          className={`contact-form-status contact-form-status-${state.status}`}
          role={state.status === "error" ? "alert" : "status"}
          tabIndex={-1}
        >
          <p>{state.message}</p>
        </div>
      )}

      <div key={state.revision} className="contact-form-fields">
        <div className="contact-form-row">
          <div className="contact-field">
            <label htmlFor="name">
              Name <span className="contact-required">(required)</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={100}
              defaultValue={values.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              required
            />
            <FieldError id="name-error" message={errors.name} />
          </div>

          <div className="contact-field">
            <label htmlFor="email">
              Email <span className="contact-required">(required)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              maxLength={254}
              defaultValue={values.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            <FieldError id="email-error" message={errors.email} />
          </div>
        </div>

        <div className="contact-form-row">
          <div className="contact-field">
            <label htmlFor="telephone">
              Telephone <span className="contact-optional">(optional)</span>
            </label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              maxLength={50}
              defaultValue={values.telephone}
              aria-invalid={Boolean(errors.telephone)}
              aria-describedby={
                errors.telephone ? "telephone-error" : undefined
              }
            />
            <FieldError id="telephone-error" message={errors.telephone} />
          </div>

          <div className="contact-field">
            <label htmlFor="property-location">
              Property location{" "}
              <span className="contact-required">(required)</span>
            </label>
            <input
              id="property-location"
              name="propertyLocation"
              type="text"
              autoComplete="street-address"
              maxLength={200}
              defaultValue={values.propertyLocation}
              aria-invalid={Boolean(errors.propertyLocation)}
              aria-describedby={`property-location-hint${
                errors.propertyLocation ? " property-location-error" : ""
              }`}
              required
            />
            <p id="property-location-hint" className="contact-field-hint">
              Enter the town, village or other useful location information.
            </p>
            <FieldError
              id="property-location-error"
              message={errors.propertyLocation}
            />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="service">
            Service required <span className="contact-required">(required)</span>
          </label>
          <select
            id="service"
            name="service"
            defaultValue={values.service}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            required
          >
            <option value="">Choose a service</option>
            <option value="heating">Heating</option>
            <option value="heat-pumps">Heat Pumps</option>
            <option value="plumbing">Plumbing</option>
            <option value="emergency-repairs">Emergency Repairs</option>
            <option value="other">Other / Not sure</option>
          </select>
          <FieldError id="service-error" message={errors.service} />
        </div>

        <fieldset
          className="contact-choice-fieldset"
          data-invalid={errors.enquiryType ? "true" : undefined}
          aria-describedby={
            errors.enquiryType ? "enquiry-type-error" : undefined
          }
        >
          <legend>
            Enquiry type <span className="contact-required">(required)</span>
          </legend>
          <div className="contact-choice-grid">
            {enquiryTypes.map((option) => (
              <label key={option.value} htmlFor={`enquiry-${option.value}`}>
                <input
                  id={`enquiry-${option.value}`}
                  name="enquiryType"
                  type="radio"
                  value={option.value}
                  defaultChecked={values.enquiryType === option.value}
                  aria-describedby={
                    errors.enquiryType ? "enquiry-type-error" : undefined
                  }
                  required
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
          <FieldError id="enquiry-type-error" message={errors.enquiryType} />
        </fieldset>

        <div className="contact-field">
          <label htmlFor="message">
            Message <span className="contact-required">(required)</span>
          </label>
          <p id="message-hint" className="contact-field-hint">
            Describe the property, what has happened or what work is planned,
            and any relevant details.
          </p>
          <textarea
            id="message"
            name="message"
            rows={8}
            maxLength={3000}
            defaultValue={values.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={`message-hint${
              errors.message ? " message-error" : ""
            }`}
            required
          />
          <FieldError id="message-error" message={errors.message} />
        </div>

        <fieldset
          className="contact-consent-fieldset"
          aria-describedby={`privacy-consent-hint${
            errors.privacyConsent ? " privacy-consent-error" : ""
          }`}
        >
          <legend>
            Privacy consent <span className="contact-required">(required)</span>
          </legend>
          <label htmlFor="privacy-consent" className="contact-consent-label">
            <input
              id="privacy-consent"
              name="privacyConsent"
              type="checkbox"
              defaultChecked={values.privacyConsent}
              aria-invalid={Boolean(errors.privacyConsent)}
              aria-describedby={`privacy-consent-hint${
                errors.privacyConsent ? " privacy-consent-error" : ""
              }`}
              required
            />
            <span>
              I agree that the details entered may be used to validate and
              assess this demonstration enquiry.
            </span>
          </label>
          <p id="privacy-consent-hint" className="contact-field-hint">
            This version validates the form only. It does not send or store the
            enquiry.
          </p>
          <FieldError
            id="privacy-consent-error"
            message={errors.privacyConsent}
          />
        </fieldset>
      </div>

      <button type="submit" className="button contact-submit" disabled={pending}>
        {pending ? "Validating enquiry…" : "Validate enquiry"}
      </button>
    </form>
  );
}

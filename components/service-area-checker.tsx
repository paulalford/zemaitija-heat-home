"use client";

import Link from "next/link";
import { useActionState, useState, type FormEvent } from "react";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import {
  normalizePropertyLocation,
  PROPERTY_LOCATION_MAX_LENGTH,
} from "@/lib/property-location";
import {
  checkServiceAreaLocation,
  type LocationCheckState,
} from "@/lib/service-area-action";

export type ServiceAreaCheckerContent = Readonly<{
  fieldLabel: string;
  placeholder: string;
  submitLabel: string;
  loadingLabel: string;
  fieldHint: string;
  validation: Readonly<{
    empty: string;
    invalid: string;
  }>;
  enquiryLabel: string;
  attribution: string;
}>;

const initialState: LocationCheckState = {
  status: "idle",
  heading: "",
  message: "",
  enteredLocation: "",
  revision: 0,
};

export function ServiceAreaChecker({
  content,
  locale,
}: Readonly<{
  content: ServiceAreaCheckerContent;
  locale: Locale;
}>) {
  const [state, formAction, pending] = useActionState(
    checkServiceAreaLocation,
    initialState,
  );
  const [location, setLocation] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const input = event.currentTarget.elements.namedItem("location");
    if (!(input instanceof HTMLInputElement)) {
      event.preventDefault();
      return;
    }

    const normalizedLocation = normalizePropertyLocation(input.value);

    if (!normalizedLocation) {
      event.preventDefault();
      input.setCustomValidity(
        input.value.trim()
          ? content.validation.invalid
          : content.validation.empty,
      );
      input.reportValidity();
      return;
    }

    input.setCustomValidity("");
    setLocation(normalizedLocation);
  }

  const currentLocation = normalizePropertyLocation(location);
  const showResult =
    !pending &&
    state.status !== "idle" &&
    state.enteredLocation === currentLocation;
  const canEnquire = state.status === "within" || state.status === "outside";

  return (
    <div className="service-area-checker">
      <form
        action={formAction}
        onSubmit={handleSubmit}
        className="service-area-checker-form contact-field"
        aria-busy={pending}
      >
        <input type="hidden" name="locale" value={locale} />
        <label htmlFor="service-area-location">{content.fieldLabel}</label>
        <div className="service-area-checker-controls">
          <input
            id="service-area-location"
            name="location"
            type="text"
            autoComplete="address-level2"
            maxLength={PROPERTY_LOCATION_MAX_LENGTH}
            placeholder={content.placeholder}
            aria-describedby="service-area-location-hint"
            value={location}
            onChange={(event) => {
              event.currentTarget.setCustomValidity("");
              setLocation(event.currentTarget.value);
            }}
            required
          />
          <button type="submit" className="button" disabled={pending}>
            {pending ? content.loadingLabel : content.submitLabel}
          </button>
        </div>
        <p id="service-area-location-hint" className="contact-field-hint">
          {content.fieldHint}
        </p>
      </form>

      <div role="status" aria-live="polite" aria-atomic="true">
        {showResult && (
          <div className="service-area-checker-result">
            <h3>{state.heading}</h3>
            <p>{state.message}</p>
            {canEnquire && (
              <Link
                href={{
                  pathname: getLocalizedPath(locale, "/contact"),
                  query: { location: state.enteredLocation },
                }}
                className="button"
              >
                {content.enquiryLabel}
              </Link>
            )}
          </div>
        )}
      </div>

      <p className="service-area-checker-attribution">
        <a href="https://www.openstreetmap.org/copyright">
          {content.attribution}
        </a>
      </p>
    </div>
  );
}

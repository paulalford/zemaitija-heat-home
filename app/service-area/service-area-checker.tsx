"use client";

import Link from "next/link";
import { useActionState, useState, type FormEvent } from "react";
import {
  normalizePropertyLocation,
  PROPERTY_LOCATION_MAX_LENGTH,
} from "@/lib/property-location";
import {
  checkServiceAreaLocation,
  type LocationCheckState,
} from "./actions";

const emptyLocationMessage =
  "Enter a town, village, postcode or property location.";
const invalidLocationMessage =
  "Use standard letters, numbers and address punctuation for the location.";

const initialState: LocationCheckState = {
  status: "idle",
  heading: "",
  message: "",
  enteredLocation: "",
  revision: 0,
};

export function ServiceAreaChecker() {
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

    const location = normalizePropertyLocation(input.value);

    if (!location) {
      event.preventDefault();
      input.setCustomValidity(
        input.value.trim() ? invalidLocationMessage : emptyLocationMessage,
      );
      input.reportValidity();
      return;
    }

    input.setCustomValidity("");
    setLocation(location);
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
        <label htmlFor="service-area-location">
          Town, village or postcode
        </label>
        <div className="service-area-checker-controls">
          <input
            id="service-area-location"
            name="location"
            type="text"
            autoComplete="address-level2"
            maxLength={PROPERTY_LOCATION_MAX_LENGTH}
            placeholder="Kuršėnai"
            aria-describedby="service-area-location-hint"
            value={location}
            onChange={(event) => {
              event.currentTarget.setCustomValidity("");
              setLocation(event.currentTarget.value);
            }}
            required
          />
          <button type="submit" className="button" disabled={pending}>
            {pending ? "Checking location…" : "Check location"}
          </button>
        </div>
        <p id="service-area-location-hint" className="contact-field-hint">
          Enter the location you want to carry into the enquiry form.
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
                  pathname: "/contact",
                  query: { location: state.enteredLocation },
                }}
                className="button"
              >
                Enquire about this location
              </Link>
            )}
          </div>
        )}
      </div>

      <p className="service-area-checker-attribution">
        <a href="https://www.openstreetmap.org/copyright">
          Location search © OpenStreetMap contributors
        </a>
      </p>
    </div>
  );
}

"use server";

// Geocoding and distance logic is shared; these response messages are English.

import { calculateHaversineDistanceKm } from "@/lib/geo-distance";
import { geocodeLithuanianLocation } from "@/lib/geocoding/nominatim";
import { normalizePropertyLocation } from "@/lib/property-location";

export type LocationCheckState = {
  status: "idle" | "within" | "outside" | "unresolved";
  heading: string;
  message: string;
  enteredLocation: string;
  revision: number;
};

const siauliaiOrigin = {
  latitude: 55.933333,
  longitude: 23.316667,
};

const normalServiceRadiusKm = 50;

function nextRevision(previousRevision: number) {
  return Number.isSafeInteger(previousRevision) && previousRevision >= 0
    ? previousRevision + 1
    : 1;
}

function unresolvedState(
  enteredLocation: string,
  revision: number,
): LocationCheckState {
  return {
    status: "unresolved",
    heading: "We couldn't confirm that location",
    message:
      "Check the spelling or enter a Lithuanian town, village, postcode or fuller property location.",
    enteredLocation,
    revision,
  };
}

export async function checkServiceAreaLocation(
  previousState: LocationCheckState,
  formData: FormData,
): Promise<LocationCheckState> {
  const enteredLocation = normalizePropertyLocation(formData.get("location"));
  const revision = nextRevision(previousState.revision);

  if (!enteredLocation) {
    return unresolvedState("", revision);
  }

  try {
    const geocodedLocation =
      await geocodeLithuanianLocation(enteredLocation);

    if (!geocodedLocation) {
      return unresolvedState(enteredLocation, revision);
    }

    const distanceKm = Math.round(
      calculateHaversineDistanceKm(siauliaiOrigin, geocodedLocation),
    );

    if (distanceKm <= normalServiceRadiusKm) {
      return {
        status: "within",
        heading: "Likely within our normal service area",
        message: `${geocodedLocation.displayName} is approximately ${distanceKm} km from Šiauliai. This is within the normal service radius of around 50 km. Final coverage is confirmed with the enquiry.`,
        enteredLocation,
        revision,
      };
    }

    return {
      status: "outside",
      heading: "Likely outside our normal service area",
      message: `${geocodedLocation.displayName} is approximately ${distanceKm} km from Šiauliai. This is beyond the normal service radius of around 50 km, but outlying jobs may still be considered individually.`,
      enteredLocation,
      revision,
    };
  } catch {
    return unresolvedState(enteredLocation, revision);
  }
}

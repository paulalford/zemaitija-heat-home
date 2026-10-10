"use server";

import { calculateHaversineDistanceKm } from "@/lib/geo-distance";
import { geocodeLithuanianLocation } from "@/lib/geocoding/nominatim";
import { isLocale, type Locale } from "@/lib/i18n";
import { normalizePropertyLocation } from "@/lib/property-location";

export type LocationCheckState = {
  status: "idle" | "within" | "outside" | "unresolved";
  heading: string;
  message: string;
  enteredLocation: string;
  revision: number;
};

type ResultMessages = Readonly<{
  unresolved: Readonly<{ heading: string; message: string }>;
  within: Readonly<{
    heading: string;
    message: (displayName: string, distanceKm: number) => string;
  }>;
  outside: Readonly<{
    heading: string;
    message: (displayName: string, distanceKm: number) => string;
  }>;
}>;

const resultMessages = {
  en: {
    unresolved: {
      heading: "We couldn't confirm that location",
      message:
        "Check the spelling or enter a Lithuanian town, village, postcode or fuller property location.",
    },
    within: {
      heading: "Likely within our normal service area",
      message: (displayName, distanceKm) =>
        `${displayName} is approximately ${distanceKm} km from Šiauliai. This is within the normal service radius of around 50 km. Final coverage is confirmed with the enquiry.`,
    },
    outside: {
      heading: "Likely outside our normal service area",
      message: (displayName, distanceKm) =>
        `${displayName} is approximately ${distanceKm} km from Šiauliai. This is beyond the normal service radius of around 50 km, but outlying jobs may still be considered individually.`,
    },
  },
  lt: {
    unresolved: {
      heading: "Nepavyko patvirtinti šios vietos",
      message:
        "Patikrinkite rašybą arba įveskite Lietuvos miestą, kaimą, pašto kodą ar išsamesnę objekto vietą.",
    },
    within: {
      heading: "Tikėtina, kad patenka į įprastą aptarnavimo teritoriją",
      message: (displayName, distanceKm) =>
        `${displayName} yra maždaug ${distanceKm} km nuo Šiaulių. Tai patenka į įprastą maždaug 50 km aptarnavimo spindulį. Galutinė aptarnavimo galimybė patvirtinama pagal užklausą.`,
    },
    outside: {
      heading: "Tikėtina, kad yra už įprastos aptarnavimo teritorijos ribų",
      message: (displayName, distanceKm) =>
        `${displayName} yra maždaug ${distanceKm} km nuo Šiaulių. Tai yra už įprasto maždaug 50 km aptarnavimo spindulio ribų, tačiau atokesni darbai vis tiek gali būti svarstomi individualiai.`,
    },
  },
} as const satisfies Record<Locale, ResultMessages>;

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

function getLocale(formData: FormData): Locale {
  const locale = formData.get("locale");
  return typeof locale === "string" && isLocale(locale) ? locale : "en";
}

function unresolvedState(
  enteredLocation: string,
  revision: number,
  locale: Locale,
): LocationCheckState {
  return {
    status: "unresolved",
    heading: resultMessages[locale].unresolved.heading,
    message: resultMessages[locale].unresolved.message,
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
  const locale = getLocale(formData);
  const messages = resultMessages[locale];

  if (!enteredLocation) {
    return unresolvedState("", revision, locale);
  }

  try {
    const geocodedLocation =
      await geocodeLithuanianLocation(enteredLocation);

    if (!geocodedLocation) {
      return unresolvedState(enteredLocation, revision, locale);
    }

    const distanceKm = Math.round(
      calculateHaversineDistanceKm(siauliaiOrigin, geocodedLocation),
    );

    if (distanceKm <= normalServiceRadiusKm) {
      return {
        status: "within",
        heading: messages.within.heading,
        message: messages.within.message(
          geocodedLocation.displayName,
          distanceKm,
        ),
        enteredLocation,
        revision,
      };
    }

    return {
      status: "outside",
      heading: messages.outside.heading,
      message: messages.outside.message(
        geocodedLocation.displayName,
        distanceKm,
      ),
      enteredLocation,
      revision,
    };
  } catch {
    return unresolvedState(enteredLocation, revision, locale);
  }
}

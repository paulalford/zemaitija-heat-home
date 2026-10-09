export const PROPERTY_LOCATION_MAX_LENGTH = 200;

const supportedLocationCharacters =
  /^[\p{L}\p{M}\p{N}\p{Zs}.,'’/()&#-]+$/u;

export function normalizePropertyLocation(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  const location = value.trim().normalize("NFC");

  if (
    !location ||
    location.length > PROPERTY_LOCATION_MAX_LENGTH ||
    !supportedLocationCharacters.test(location)
  ) {
    return "";
  }

  return location;
}

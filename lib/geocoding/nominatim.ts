import { unstable_cache } from "next/cache";
import { site } from "@/lib/site";

export type GeocodedLocation = {
  displayName: string;
  latitude: number;
  longitude: number;
};

const defaultSearchEndpoint = "https://nominatim.openstreetmap.org/search";
const searchEndpoint =
  process.env.NOMINATIM_SEARCH_URL ?? defaultSearchEndpoint;
// Keep a small buffer beyond the public service's absolute one-request-per-second limit.
const requestIntervalMs = 1_050;
const requestTimeoutMs = 5_000;
const cacheRevalidationSeconds = 60 * 60 * 24 * 30;

let requestQueue: Promise<void> = Promise.resolve();
let lastRequestStartedAt = 0;

function wait(milliseconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

async function runWithRateLimit<T>(request: () => Promise<T>) {
  const queuedRequest = requestQueue.then(async () => {
    const waitTime = Math.max(
      0,
      requestIntervalMs - (Date.now() - lastRequestStartedAt),
    );

    if (waitTime > 0) {
      await wait(waitTime);
    }

    lastRequestStartedAt = Date.now();
    return request();
  });

  requestQueue = queuedRequest.then(
    () => undefined,
    () => undefined,
  );

  return queuedRequest;
}

function parseCoordinate(value: unknown, minimum: number, maximum: number) {
  const coordinate =
    typeof value === "string" || typeof value === "number"
      ? Number(value)
      : Number.NaN;

  return Number.isFinite(coordinate) &&
    coordinate >= minimum &&
    coordinate <= maximum
    ? coordinate
    : null;
}

async function requestNominatim(
  location: string,
): Promise<GeocodedLocation | null> {
  return runWithRateLimit(async () => {
    const parameters = new URLSearchParams({
      q: location,
      format: "jsonv2",
      limit: "1",
      countrycodes: "lt",
    });
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);

    try {
      const response = await fetch(`${searchEndpoint}?${parameters}`, {
        headers: {
          Accept: "application/json",
          "Accept-Language": "en",
          Referer: `${site.url}/service-area`,
          "User-Agent": `ZemaitijaHeatHomePortfolio/1.0 (${site.url})`,
        },
        cache: "no-store",
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Geocoding provider returned an unsuccessful response.");
      }

      const payload: unknown = await response.json();

      if (!Array.isArray(payload)) {
        throw new Error("Geocoding provider returned a malformed response.");
      }

      if (payload.length === 0) {
        return null;
      }

      const result: unknown = payload[0];

      if (!result || typeof result !== "object") {
        throw new Error("Geocoding provider returned a malformed result.");
      }

      const record = result as Record<string, unknown>;
      const latitude = parseCoordinate(record.lat, -90, 90);
      const longitude = parseCoordinate(record.lon, -180, 180);
      const displayName =
        typeof record.display_name === "string"
          ? record.display_name.trim()
          : "";

      if (latitude === null || longitude === null || !displayName) {
        throw new Error("Geocoding provider returned an unusable result.");
      }

      return {
        displayName,
        latitude,
        longitude,
      };
    } finally {
      clearTimeout(timeout);
    }
  });
}

const getCachedNominatimResult = unstable_cache(
  requestNominatim,
  ["nominatim-lithuania-location-search-v1"],
  { revalidate: cacheRevalidationSeconds },
);

export async function geocodeLithuanianLocation(location: string) {
  return getCachedNominatimResult(location.toLocaleLowerCase("lt-LT"));
}

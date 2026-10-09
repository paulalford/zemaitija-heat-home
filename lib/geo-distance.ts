export type Coordinates = {
  latitude: number;
  longitude: number;
};

const earthRadiusKm = 6_371.0088;

function toRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

function coordinatesAreValid({ latitude, longitude }: Coordinates) {
  return (
    Number.isFinite(latitude) &&
    latitude >= -90 &&
    latitude <= 90 &&
    Number.isFinite(longitude) &&
    longitude >= -180 &&
    longitude <= 180
  );
}

export function calculateHaversineDistanceKm(
  origin: Coordinates,
  destination: Coordinates,
) {
  if (!coordinatesAreValid(origin) || !coordinatesAreValid(destination)) {
    throw new RangeError("Coordinates must contain valid latitude and longitude values.");
  }

  const originLatitude = toRadians(origin.latitude);
  const destinationLatitude = toRadians(destination.latitude);
  const latitudeDifference = destinationLatitude - originLatitude;
  const longitudeDifference = toRadians(
    destination.longitude - origin.longitude,
  );

  const haversine =
    Math.sin(latitudeDifference / 2) ** 2 +
    Math.cos(originLatitude) *
      Math.cos(destinationLatitude) *
      Math.sin(longitudeDifference / 2) ** 2;
  const boundedHaversine = Math.min(1, Math.max(0, haversine));

  const angularDistance =
    2 *
    Math.atan2(
      Math.sqrt(boundedHaversine),
      Math.sqrt(1 - boundedHaversine),
    );

  return earthRadiusKm * angularDistance;
}

import {
  createOpenGraphImage,
  openGraphImageSize,
} from "@/components/opengraph-image";
import { lithuanianHomeContent } from "@/content/lt/home";
import { lithuanianSharedContent } from "@/content/lt/shared";

export const lithuanianOpenGraphImageAlt =
  lithuanianHomeContent.metadata.socialImageAlt;
export const lithuanianOpenGraphImageSize = openGraphImageSize;

// Kept content-only until the Lithuanian locale is ready to be published.
export function LithuanianOpenGraphImage() {
  return createOpenGraphImage({
    brandPrimary: lithuanianSharedContent.brand.primary,
    brandSecondary: lithuanianSharedContent.brand.secondary,
    headline: lithuanianHomeContent.metadata.socialImageHeadline,
    region: lithuanianHomeContent.metadata.socialImageRegion,
    services: lithuanianHomeContent.metadata.socialImageServices,
    disclosure: lithuanianHomeContent.metadata.socialImageDisclosure,
  });
}

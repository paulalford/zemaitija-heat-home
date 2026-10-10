import {
  createOpenGraphImage,
  openGraphImageSize,
} from "@/components/opengraph-image";
import { englishHomeContent } from "@/content/en/home";
import { englishSharedContent } from "@/content/en/shared";

export const englishOpenGraphImageAlt =
  englishHomeContent.metadata.socialImageAlt;
export const englishOpenGraphImageSize = openGraphImageSize;

export function EnglishOpenGraphImage() {
  return createOpenGraphImage({
    brandPrimary: englishSharedContent.brand.primary,
    brandSecondary: englishSharedContent.brand.secondary,
    headline: englishHomeContent.metadata.socialImageHeadline,
    region: englishHomeContent.metadata.socialImageRegion,
    services: englishHomeContent.metadata.socialImageServices,
    disclosure: englishHomeContent.metadata.socialImageDisclosure,
  });
}

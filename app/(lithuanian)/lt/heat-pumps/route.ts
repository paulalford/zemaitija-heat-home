import { createPendingLithuanianResponse } from "@/lib/lithuanian-content";

export function GET() {
  return createPendingLithuanianResponse("/heat-pumps");
}

import { ImageResponse } from "next/og";

export const openGraphImageSize = {
  width: 1200,
  height: 630,
};

export type OpenGraphImageContent = Readonly<{
  brandPrimary: string;
  brandSecondary: string;
  headline: string;
  region: string;
  services: string;
  disclosure: string;
}>;

export function createOpenGraphImage(content: OpenGraphImageContent) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderTop: "20px solid #284d3b",
        padding: "64px 72px 58px",
        background: "#f7f5ef",
        color: "#252b27",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
        <div
          style={{
            width: "8px",
            height: "78px",
            display: "flex",
            background: "#965631",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#284d3b",
              fontSize: 52,
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            {content.brandPrimary}
          </div>
          <div
            style={{
              marginTop: "4px",
              color: "#555f57",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            {content.brandSecondary}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            maxWidth: "940px",
            color: "#252b27",
            fontSize: 68,
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: "-2px",
          }}
        >
          {content.headline}
        </div>
        <div
          style={{
            marginTop: "28px",
            color: "#5f7568",
            fontSize: 27,
            fontWeight: 600,
          }}
        >
          {content.region}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "2px solid #d7ddd3",
          paddingTop: "22px",
          color: "#555f57",
          fontSize: 20,
        }}
      >
        <div>{content.services}</div>
        <div>{content.disclosure}</div>
      </div>
    </div>,
    openGraphImageSize,
  );
}

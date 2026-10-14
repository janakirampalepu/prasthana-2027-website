import { ImageResponse } from "next/og";

export const alt = "Prasthana: Coding with Purpose & Precision";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Required for the static export (S3 + CloudFront); harmless elsewhere.
export const dynamic = "force-static";

// Share preview shown when a page link is posted on LinkedIn, WhatsApp, Slack, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
          background: "linear-gradient(135deg, #07070d 0%, #1b1240 55%, #0b3a52 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, letterSpacing: 8, color: "#67e8f9" }}>PRASTHANA</div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.05, marginTop: 28 }}>
          Coding with Purpose &amp; Precision
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#b8b8d0", marginTop: 32 }}>
          Product engineering and technology company · Hyderabad
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#8b5cf6", marginTop: 36 }}>
          Consulting · Web · Mobile · Quality · DevOps · Analytics · AI
        </div>
      </div>
    ),
    size,
  );
}

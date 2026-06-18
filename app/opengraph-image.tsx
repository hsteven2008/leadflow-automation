import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LeadFlow Automation | AI Lead Tracking & Follow-Up Automation for Small Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 100px",
          backgroundColor: "#1d4ed8",
          fontFamily: "sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: 100,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#bfdbfe", fontSize: 18, fontWeight: 600 }}>
            AI AUTOMATION FOR SMALL BUSINESSES
          </span>
        </div>

        {/* Headline line 1 */}
        <div style={{ display: "flex", color: "white", fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
          Stop losing leads.
        </div>
        {/* Headline line 2 */}
        <div style={{ display: "flex", color: "white", fontSize: 64, fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
          Automate your follow-ups.
        </div>

        {/* Subtext */}
        <div style={{ display: "flex", color: "#bfdbfe", fontSize: 26, marginBottom: 56 }}>
          Lead tracking · Google Sheets CRM · Zapier / Make workflows
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 1000,
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
              }}
            >
              ⚡
            </div>
            <span style={{ display: "flex", color: "white", fontSize: 28, fontWeight: 700 }}>
              LeadFlow Automation
            </span>
          </div>

          {/* Location + price */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <span style={{ display: "flex", color: "#bfdbfe", fontSize: 20 }}>Houston, TX</span>
            <span style={{ display: "flex", color: "white", fontSize: 20, fontWeight: 600 }}>Starting at $149</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

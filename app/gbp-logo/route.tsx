import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div style={{
        width: 1000,
        height: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1d4ed8",
        fontFamily: "sans-serif",
        paddingTop: 80,
        paddingBottom: 80,
      }}>

        {/* Flow icon — 3 connected nodes */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 56 }}>

          {/* Node 1 */}
          <div style={{
            display: "flex",
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.15)",
            border: "2px solid rgba(255,255,255,0.5)",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{ display: "flex", width: 26, height: 26, borderRadius: "50%", backgroundColor: "#ffffff" }} />
          </div>

          {/* Connector */}
          <div style={{ display: "flex", width: 60, height: 2, backgroundColor: "rgba(255,255,255,0.35)" }} />

          {/* Node 2 — orange accent, largest */}
          <div style={{
            display: "flex",
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "#f97316",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{ display: "flex", width: 38, height: 38, borderRadius: "50%", backgroundColor: "#ffffff" }} />
          </div>

          {/* Connector */}
          <div style={{ display: "flex", width: 60, height: 2, backgroundColor: "rgba(255,255,255,0.35)" }} />

          {/* Node 3 */}
          <div style={{
            display: "flex",
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.15)",
            border: "2px solid rgba(255,255,255,0.5)",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{ display: "flex", width: 26, height: 26, borderRadius: "50%", backgroundColor: "#ffffff" }} />
          </div>
        </div>

        {/* Wordmark — both lines same weight, two colors */}
        <span style={{
          fontSize: 108,
          fontWeight: 900,
          color: "#ffffff",
          lineHeight: 1,
          marginBottom: 8,
        }}>
          LeadFlow
        </span>
        <span style={{
          fontSize: 108,
          fontWeight: 900,
          color: "#f97316",
          lineHeight: 1,
          marginBottom: 52,
        }}>
          Automation
        </span>

        {/* Orange divider */}
        <div style={{
          display: "flex",
          width: 64,
          height: 4,
          backgroundColor: "#f97316",
          borderRadius: 2,
          marginBottom: 44,
        }} />

        {/* Tagline */}
        <span style={{
          fontSize: 26,
          fontWeight: 500,
          color: "rgba(255,255,255,0.75)",
          marginBottom: 14,
          textAlign: "center",
        }}>
          Workflow Automation for Small Businesses
        </span>

        {/* Location */}
        <span style={{
          fontSize: 24,
          fontWeight: 700,
          color: "rgba(255,255,255,0.55)",
          marginBottom: 48,
        }}>
          Houston, TX
        </span>

        {/* Website */}
        <div style={{
          display: "flex",
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 100,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 28,
          paddingRight: 28,
        }}>
          <span style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
            leadflowautomation.vercel.app
          </span>
        </div>

      </div>
    ),
    { width: 1000, height: 1000 }
  );
}

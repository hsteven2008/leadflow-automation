import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1000,
          height: 1000,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0f172a",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid dots */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(circle, #1e3a5f 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          display: "flex",
          opacity: 0.6,
        }} />

        {/* Top label */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 52,
          position: "relative",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            backgroundColor: "rgba(59,130,246,0.15)",
            border: "1px solid rgba(59,130,246,0.4)",
            borderRadius: 100,
            padding: "10px 28px",
          }}>
            <span style={{ fontSize: 20 }}>⚡</span>
            <span style={{ color: "#93c5fd", fontSize: 18, fontWeight: 600 }}>LeadFlow Automation · Houston, TX</span>
          </div>
        </div>

        {/* Center — person at laptop */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          position: "relative",
          gap: 0,
        }}>
          {/* Glow behind person */}
          <div style={{
            position: "absolute",
            width: 280,
            height: 280,
            borderRadius: "50%",
            backgroundColor: "rgba(59,130,246,0.12)",
            display: "flex",
          }} />

          {/* Person emoji */}
          <div style={{ display: "flex", fontSize: 100, marginBottom: 8 }}>👨‍💻</div>

          {/* Laptop screen preview */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1e293b",
            border: "1px solid #334155",
            borderRadius: 12,
            padding: "14px 20px",
            width: 320,
            gap: 8,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>📋</span>
              <div style={{ flex: 1, height: 8, backgroundColor: "#3b82f6", borderRadius: 4, display: "flex" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>✅</span>
              <div style={{ flex: 1, height: 8, backgroundColor: "#22c55e", borderRadius: 4, display: "flex" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>📧</span>
              <div style={{ width: "70%", height: 8, backgroundColor: "#a78bfa", borderRadius: 4, display: "flex" }} />
            </div>
          </div>
        </div>

        {/* Workflow nodes row */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0,
          paddingBottom: 48,
          paddingLeft: 40,
          paddingRight: 40,
          position: "relative",
        }}>
          {[
            { icon: "📝", label: "Form\nSubmit" },
            { icon: "⚡", label: "Auto\nTrigger", highlight: true },
            { icon: "📊", label: "Sheets\nCRM" },
            { icon: "📧", label: "Email\nSent" },
            { icon: "✅", label: "Lead\nCaptured" },
          ].map((node, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                backgroundColor: node.highlight ? "rgba(59,130,246,0.25)" : "rgba(255,255,255,0.05)",
                border: node.highlight ? "1px solid #3b82f6" : "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "14px 16px",
                width: 110,
              }}>
                <span style={{ fontSize: 28 }}>{node.icon}</span>
                <span style={{
                  color: node.highlight ? "#93c5fd" : "#94a3b8",
                  fontSize: 13,
                  fontWeight: 600,
                  textAlign: "center",
                }}>
                  {node.label.replace("\n", " ")}
                </span>
              </div>
              {i < 4 && (
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#3b82f6",
                  fontSize: 20,
                  paddingLeft: 4,
                  paddingRight: 4,
                }}>→</div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 44,
          position: "relative",
        }}>
          <span style={{ color: "#475569", fontSize: 16 }}>
            Automating lead tracking · follow-ups · client intake for small businesses
          </span>
        </div>
      </div>
    ),
    { width: 1000, height: 1000 }
  );
}

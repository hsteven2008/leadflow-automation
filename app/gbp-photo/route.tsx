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
        backgroundColor: "#ffffff",
        fontFamily: "sans-serif",
      }}>
        {/* Top accent bar */}
        <div style={{ display: "flex", height: 8, backgroundColor: "#2563eb" }} />

        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          paddingTop: 28,
          paddingBottom: 24,
        }}>
          <div style={{
            display: "flex",
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor: "#2563eb",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{ color: "#ffffff", fontSize: 24, fontWeight: 800 }}>LF</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{ fontSize: 40, fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>
              LeadFlow Automation
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 14 }}>📍</span>
              <span style={{ fontSize: 15, color: "#2563eb", fontWeight: 600 }}>
                Houston, TX · AI Automation Consultant
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", height: 1, backgroundColor: "#e2e8f0" }} />

        {/* Stats columns */}
        <div style={{ display: "flex", flex: 1, alignItems: "stretch" }}>

          {/* Col 1 — Time saved */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            paddingTop: 32,
            paddingBottom: 32,
            paddingLeft: 28,
            paddingRight: 28,
            backgroundColor: "#f8fafc",
          }}>
            <div style={{ display: "flex", width: 82, height: 82, borderRadius: "50%", backgroundColor: "#dbeafe", alignItems: "center", justifyContent: "center", marginBottom: 26 }}>
              <span style={{ fontSize: 40 }}>⏱️</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 10 }}>
              <span style={{ fontSize: 120, fontWeight: 900, color: "#2563eb", lineHeight: 1 }}>10</span>
              <span style={{ fontSize: 34, fontWeight: 700, color: "#2563eb", marginBottom: 16 }}>hrs</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8", marginBottom: 20 }}>SAVED PER WEEK</span>
            <div style={{ display: "flex", width: 36, height: 3, backgroundColor: "#2563eb", borderRadius: 2, marginBottom: 20 }} />
            <span style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 12, textAlign: "center" }}>Less Admin Work</span>
            <span style={{ fontSize: 16, color: "#64748b", textAlign: "center", lineHeight: 1.65, marginBottom: 26 }}>
              No more copy-pasting leads or chasing follow-ups by hand
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignSelf: "stretch", marginBottom: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", width: 8, height: 8, borderRadius: "50%", backgroundColor: "#2563eb", flexShrink: 0 }} />
                <span style={{ fontSize: 15, color: "#475569" }}>Auto-sync form submissions</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", width: 8, height: 8, borderRadius: "50%", backgroundColor: "#2563eb", flexShrink: 0 }} />
                <span style={{ fontSize: 15, color: "#475569" }}>Instant Google Sheets update</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", width: 8, height: 8, borderRadius: "50%", backgroundColor: "#2563eb", flexShrink: 0 }} />
                <span style={{ fontSize: 15, color: "#475569" }}>Zero manual data entry</span>
              </div>
            </div>
            <div style={{ display: "flex", height: 1, backgroundColor: "#e2e8f0", alignSelf: "stretch", marginBottom: 16 }} />
            <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500 }}>Avg. setup: 1–2 business days</span>
          </div>

          <div style={{ display: "flex", width: 1, backgroundColor: "#e2e8f0" }} />

          {/* Col 2 — Leads captured */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            paddingTop: 32,
            paddingBottom: 32,
            paddingLeft: 28,
            paddingRight: 28,
            backgroundColor: "#2563eb",
          }}>
            <div style={{ display: "flex", width: 82, height: 82, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.18)", alignItems: "center", justifyContent: "center", marginBottom: 26 }}>
              <span style={{ fontSize: 40 }}>🎯</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 2, marginBottom: 10 }}>
              <span style={{ fontSize: 120, fontWeight: 900, color: "#ffffff", lineHeight: 1 }}>100</span>
              <span style={{ fontSize: 34, fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>%</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#93c5fd", marginBottom: 20 }}>GUARANTEED</span>
            <div style={{ display: "flex", width: 36, height: 3, backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 2, marginBottom: 20 }} />
            <span style={{ fontSize: 22, fontWeight: 700, color: "#ffffff", marginBottom: 12, textAlign: "center" }}>Leads Captured</span>
            <span style={{ fontSize: 16, color: "#bfdbfe", textAlign: "center", lineHeight: 1.65, marginBottom: 26 }}>
              Every form submission lands in your CRM — zero falling through
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignSelf: "stretch", marginBottom: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", width: 8, height: 8, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.7)", flexShrink: 0 }} />
                <span style={{ fontSize: 15, color: "#bfdbfe" }}>Zapier-powered capture</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", width: 8, height: 8, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.7)", flexShrink: 0 }} />
                <span style={{ fontSize: 15, color: "#bfdbfe" }}>Real-time CRM update</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", width: 8, height: 8, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.7)", flexShrink: 0 }} />
                <span style={{ fontSize: 15, color: "#bfdbfe" }}>Zero lost inquiries</span>
              </div>
            </div>
            <div style={{ display: "flex", height: 1, backgroundColor: "rgba(255,255,255,0.2)", alignSelf: "stretch", marginBottom: 16 }} />
            <span style={{ fontSize: 13, color: "#93c5fd", fontWeight: 500 }}>Works with any website or contact form</span>
          </div>

          <div style={{ display: "flex", width: 1, backgroundColor: "#e2e8f0" }} />

          {/* Col 3 — Follow-up */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            paddingTop: 32,
            paddingBottom: 32,
            paddingLeft: 28,
            paddingRight: 28,
            backgroundColor: "#f8fafc",
          }}>
            <div style={{ display: "flex", width: 82, height: 82, borderRadius: "50%", backgroundColor: "#fef9c3", alignItems: "center", justifyContent: "center", marginBottom: 26 }}>
              <span style={{ fontSize: 40 }}>⚡</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 10 }}>
              <span style={{ fontSize: 120, fontWeight: 900, color: "#2563eb", lineHeight: 1 }}>60</span>
              <span style={{ fontSize: 34, fontWeight: 700, color: "#2563eb", marginBottom: 16 }}>sec</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8", marginBottom: 20 }}>RESPONSE TIME</span>
            <div style={{ display: "flex", width: 36, height: 3, backgroundColor: "#2563eb", borderRadius: 2, marginBottom: 20 }} />
            <span style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 12, textAlign: "center" }}>Auto Follow-Up</span>
            <span style={{ fontSize: 16, color: "#64748b", textAlign: "center", lineHeight: 1.65, marginBottom: 26 }}>
              Leads get a reply before they even consider a competitor
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignSelf: "stretch", marginBottom: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", width: 8, height: 8, borderRadius: "50%", backgroundColor: "#eab308", flexShrink: 0 }} />
                <span style={{ fontSize: 15, color: "#475569" }}>Instant confirmation email</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", width: 8, height: 8, borderRadius: "50%", backgroundColor: "#eab308", flexShrink: 0 }} />
                <span style={{ fontSize: 15, color: "#475569" }}>Scheduled follow-up sequences</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", width: 8, height: 8, borderRadius: "50%", backgroundColor: "#eab308", flexShrink: 0 }} />
                <span style={{ fontSize: 15, color: "#475569" }}>Works 24/7, no exceptions</span>
              </div>
            </div>
            <div style={{ display: "flex", height: 1, backgroundColor: "#e2e8f0", alignSelf: "stretch", marginBottom: 16 }} />
            <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500 }}>First reply sent within 60 seconds</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", height: 1, backgroundColor: "#e2e8f0" }} />

        {/* Footer */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
          paddingBottom: 20,
          gap: 12,
        }}>
          <span style={{ fontSize: 19, fontWeight: 600, color: "#475569" }}>
            We build the systems. You focus on your business.
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ display: "flex", backgroundColor: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 100, paddingTop: 6, paddingBottom: 6, paddingLeft: 16, paddingRight: 16 }}>
              <span style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>Zapier</span>
            </div>
            <div style={{ display: "flex", backgroundColor: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 100, paddingTop: 6, paddingBottom: 6, paddingLeft: 16, paddingRight: 16 }}>
              <span style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>Make.com</span>
            </div>
            <div style={{ display: "flex", backgroundColor: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 100, paddingTop: 6, paddingBottom: 6, paddingLeft: 16, paddingRight: 16 }}>
              <span style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>Google Sheets</span>
            </div>
            <div style={{ display: "flex", backgroundColor: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 100, paddingTop: 6, paddingBottom: 6, paddingLeft: 16, paddingRight: 16 }}>
              <span style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>n8n</span>
            </div>
          </div>
          <span style={{ fontSize: 14, color: "#94a3b8" }}>leadflowautomation.vercel.app</span>
        </div>

        {/* Bottom accent bar */}
        <div style={{ display: "flex", height: 8, backgroundColor: "#2563eb" }} />
      </div>
    ),
    { width: 1000, height: 1000 }
  );
}

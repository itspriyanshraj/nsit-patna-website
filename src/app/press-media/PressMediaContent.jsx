"use client";

const galleryImages = [
  "/gallery/env-day-1.jpeg",
  "/gallery/env-day-2.jpeg",
  "/gallery/env-day-3.jpeg",
  "/gallery/env-day-4.jpeg",
];

export default function PressMediaContent() {
  return (
    <div>
      <style>{`
        .gallery-card:hover .gallery-img { transform: scale(1.05); }
        .gallery-card:hover .gallery-overlay { opacity: 1; }
      `}</style>

      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, rgba(247, 32, 57, 0.08), transparent 42%), linear-gradient(180deg, #ffffff 0%, #f6f8fb 100%)", borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ position: "relative", zIndex: 1, width: "min(1320px, calc(100% - 48px))", margin: "0 auto", padding: "42px 0 48px" }}>
          <h1 className="mb-2" style={{ maxWidth: 900, margin: "14px 0 0", color: "#071225", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.02 }}>Gallery</h1>
          <div style={{ marginTop: 10, fontSize: 14, fontWeight: 600, color: "var(--para-color)" }}>
            <a href="/" style={{ color: "var(--main-color)", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 8px", color: "#ccc" }}>/</span>
            Gallery
          </div>
        </div>
      </section>

      <section style={{ width: "min(1320px, calc(100% - 48px))", margin: "0 auto", padding: "60px 0 92px" }}>
        <div style={{ marginBottom: 32 }}>
          <span style={{ color: "var(--main-color)", fontSize: 12, fontWeight: 950, letterSpacing: "0.08em", textTransform: "uppercase" }}>Gallery</span>
          <h2 style={{ margin: "8px 0 0", color: "#14213d", fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.15 }}>World&apos;s Environment Day 2026</h2>
          <p style={{ margin: "8px 0 0", color: "var(--para-color)", fontSize: 15, fontWeight: 500 }}>NSIT Patna celebrated World Environment Day on 05 June 2026</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {galleryImages.map((src, i) => (
            <a
              key={i}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="gallery-card"
              style={{
                display: "block", textDecoration: "none",
                borderRadius: 16, overflow: "hidden",
                position: "relative",
                boxShadow: "0 4px 20px rgba(23, 32, 51, 0.08)",
                border: "1px solid var(--border-color)",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(23, 32, 51, 0.15)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(23, 32, 51, 0.08)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 320, overflow: "hidden", background: "#f0f0f0" }}>
                <img
                  src={src}
                  alt="NSIT Environment Day"
                  className="gallery-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.45s ease" }}
                />
                <div
                  className="gallery-overlay"
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
                    display: "flex", alignItems: "flex-end",
                    padding: "24px 22px", opacity: 0, transition: "opacity 0.35s ease",
                  }}
                >
                  <div>
                    <span style={{ display: "inline-block", background: "var(--main-color)", color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, letterSpacing: "0.03em", marginBottom: 8 }}>
                      05 June 2026
                    </span>
                    <h3 style={{ margin: 0, color: "#fff", fontSize: 17, fontWeight: 600, lineHeight: 1.3 }}>
                      World&apos;s Environment Day
                    </h3>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 6, color: "rgba(255,255,255,0.85)", fontSize: 12, fontWeight: 600 }}>
                      View Full Image
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

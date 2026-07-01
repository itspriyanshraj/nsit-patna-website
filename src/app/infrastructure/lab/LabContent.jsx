"use client";

import { useState, useCallback } from "react";
import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";

const labImages = [
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l1.jpg", label: "Lab Main" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l2.png", label: "Computer Lab" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l3.png", label: "Workshop" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l4.png", label: "Electronics Lab" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l5.png", label: "Machine Shop" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l6.png", label: "Lab Equipment" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l7.png", label: "Lab Facility" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/I8.png", label: "Student Work" },
];

export default function LabPage() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const open = useCallback((i) => { setLightboxIdx(i); setZoom(1); setPan({ x: 0, y: 0 }); }, []);
  const close = useCallback(() => { setLightboxIdx(null); setZoom(1); setPan({ x: 0, y: 0 }); }, []);
  const nav = useCallback((d) => {
    setLightboxIdx((p) => { const n = p + d; return n < 0 ? labImages.length - 1 : n >= labImages.length ? 0 : n; });
    setZoom(1); setPan({ x: 0, y: 0 });
  }, []);
  const onWheel = useCallback((e) => { e.preventDefault(); setZoom((z) => Math.min(Math.max(e.deltaY < 0 ? z * 1.15 : z / 1.15, 0.5), 5)); }, []);
  const onDown = useCallback((e) => { if (zoom <= 1) return; setDragging(true); setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y }); }, [zoom, pan]);
  const onMove = useCallback((e) => { if (!dragging) return; setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }); }, [dragging, dragStart]);
  const onUp = useCallback(() => setDragging(false), []);

  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/lab" title="Lab" links={infrastructureLinks}>
      <style>{`
        .lab-hero { border-radius: 14px; overflow: hidden; margin-bottom: 28px; position: relative; background: linear-gradient(135deg, #14213d 0%, #1f305a 100%); padding: clamp(28px,4vw,48px); min-height: 160px; display: flex; flex-direction: column; justify-content: center; }
        .lab-desc-card { border-radius: 14px; overflow: hidden; margin-bottom: 28px; border: 1px solid var(--border-color); background: #fff; box-shadow: 0 2px 12px rgba(23,32,51,0.05); padding: clamp(20px,3vw,32px); }
        .lab-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .lab-card { border-radius: 14px; background: rgba(247,32,57,0.04); border: 2px solid var(--main-color); position: relative; overflow: hidden; transition: all 0.25s ease; cursor: pointer; transform: translateY(-4px); box-shadow: 0 12px 28px -8px rgba(247,32,57,0.5); }
        .lab-card:hover { border-color: var(--main-color); transform: translateY(-6px); box-shadow: 0 16px 36px -8px rgba(247,32,57,0.55); }
        .lab-card .lab-card-img { transform: scale(1.06); }
        .lab-card .lab-card-overlay { opacity: 1; }
        .lab-card-img { width: 100%; height: 260px; object-fit: cover; display: block; transition: transform 0.4s ease; }
        .lab-card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%); opacity: 0; transition: opacity 0.3s ease; display: flex; align-items: flex-end; padding: 20px; }
        .lab-card-body { padding: 18px 20px; }
        .lab-card-icon { display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #fff; font-size: 18px; background: var(--main-color); border-radius: 12px; box-shadow: 0 4px 12px rgba(247,32,57,0.4); margin-bottom: 12px; }
        .lab-card-title { margin: 0; color: #071225; font-size: 17px; font-weight: 700; line-height: 1.3; }
        .lab-card-num { position: absolute; top: 14px; left: 14px; z-index: 2; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 10px; background: var(--main-color); color: #fff; font-size: 13px; font-weight: 800; box-shadow: 0 2px 8px rgba(247,32,57,0.4); }
        .lab-view-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.95); border-radius: 10px; padding: 8px 16px; font-size: 13px; font-weight: 700; color: #14213d; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        @media (max-width: 600px) { .lab-grid { grid-template-columns: 1fr; } .lab-card-img { height: 200px; } }
      `}</style>

      <div className="lab-desc-card">
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
          <div className="lab-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v6m0 0H3m6 0h12M3 9v10a2 2 0 002 2h4m-6-12h18v10a2 2 0 01-2 2h-4m0 0H9m6 0v-6"/></svg>
          </div>
          <h3 style={{ margin: 0, color: "#14213d", fontSize: 20, fontWeight: 700 }}>Empowering Minds: The Computing Resource Hub</h3>
        </div>
        <p style={{ color: "var(--para-color)", fontSize: 14.5, fontWeight: 500, lineHeight: 1.75, margin: "0 0 20px" }}>
          NSIT has a fully fledged product development laboratory. The lab has all facilities which provide a clear cut idea of the processes behind the Electronic Product Design. The lab caters to the requirement of students for carrying out mini-project and major project in the department itself. NSIT has an exclusive workshop facility for practical as well as project work and is equipped with modern machines and equipments. Students can perform practices in carpentry, welding, sheet metal, foundry, bench work and fitter shop. Machine shop is equipped with lathe machine, shaper machine, milling machine, drilling machine, and grinding machine.
        </p>
        <img loading="lazy" src="https://www.nsit.in/Content/assets/c_images/nsit_lab/labmain.jpg" alt="NSIT Lab" style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 12, border: "1px solid var(--border-color)" }} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <span style={{ color: "var(--main-color)", fontSize: 12, fontWeight: 950, letterSpacing: "0.08em", textTransform: "uppercase" }}>Gallery</span>
        <h3 style={{ margin: "4px 0 0", color: "#14213d", fontSize: 22, fontWeight: 700 }}>Project Gallery</h3>
      </div>

      <div className="lab-grid">
        {labImages.map((item, i) => (
          <div key={i} className="lab-card" onClick={() => open(i)}>
            <span className="lab-card-num">{String(i + 1).padStart(2, "0")}</span>
            <img src={item.src} alt={item.label} className="lab-card-img" loading="lazy" />
            <div className="lab-card-overlay">
              <div className="lab-view-badge">
                {item.label}
              </div>
            </div>
            <div className="lab-card-body">
              <h4 className="lab-card-title">{item.label}</h4>
            </div>
          </div>
        ))}
      </div>

      {lightboxIdx !== null && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.93)", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={close} onKeyDown={(e) => { if (e.key === "Escape") close(); if (e.key === "ArrowLeft") nav(-1); if (e.key === "ArrowRight") nav(1); }} tabIndex={0} ref={(el) => el && el.focus()}>
          <button onClick={close} style={{ position: "absolute", top: 20, right: 24, zIndex: 10, width: 42, height: 42, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); nav(-1); }} style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", width: 46, height: 46, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); nav(1); }} style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", width: 46, height: 46, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 10 }}>
            <button onClick={() => setZoom((z) => Math.min(z / 1.2, 5))} style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/></svg></button>
            <button onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} style={{ padding: "0 14px", height: 38, borderRadius: 19, background: "rgba(255,255,255,0.12)", border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{Math.round(zoom * 100)}%</button>
            <button onClick={() => setZoom((z) => Math.min(z * 1.2, 5))} style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg></button>
          </div>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "85vw", maxHeight: "80vh", overflow: "hidden", borderRadius: 8, cursor: zoom > 1 ? "grab" : "default" }} onWheel={onWheel} onMouseDown={onDown} onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp}>
            <img loading="lazy" src={labImages[lightboxIdx].src} alt={labImages[lightboxIdx].label} style={{ display: "block", maxWidth: "85vw", maxHeight: "80vh", objectFit: "contain", transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`, transition: dragging ? "none" : "transform 0.2s ease" }} />
          </div>
          <div style={{ position: "absolute", bottom: 72, left: "50%", transform: "translateX(-50%)", textAlign: "center", color: "#fff" }}>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 700 }}>{labImages[lightboxIdx].label}</p>
            <p style={{ margin: "4px 0 0", fontSize: 12, opacity: 0.6 }}>{lightboxIdx + 1} / {labImages.length}</p>
          </div>
        </div>
      )}
    </SectionShell>
  );
}

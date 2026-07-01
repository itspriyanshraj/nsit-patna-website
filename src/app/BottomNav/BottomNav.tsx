"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "../navData";
import { HiHome, HiPhone, HiBars3, HiXMark, HiBuildingLibrary, HiBuildingOffice2 } from "react-icons/hi2";

type NavIcon = ComponentType<SVGProps<SVGSVGElement>>;
type NavTreeItem = {
  label: string;
  href?: string;
  items?: NavTreeItem[];
};
type MainItem = { label: string; icon: NavIcon; href: string };
type MenuBtn = { label: string; icon: NavIcon; isMenu: true };

const mainItems: (MainItem | MenuBtn)[] = [
  { label: "Home", icon: HiHome, href: "/" },
  { label: "About", icon: HiBuildingLibrary, href: "/institution/about-us" },
  { label: "Menu", icon: HiBars3, isMenu: true },
  { label: "Placement", icon: HiBuildingOffice2, href: "/placement" },
  { label: "Contact", icon: HiPhone, href: "/contact" },
];

function TreeItem({ item, depth = 0, onClose }: { item: NavTreeItem; depth?: number; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const childItems = item.items ?? [];
  const hasChildren = childItems.length > 0;

  return (
    <div className={`tree-depth-${Math.min(depth, 2)}`}
      onMouseEnter={() => hasChildren && setOpen(true)}
      onMouseLeave={() => hasChildren && setOpen(false)}
    >
      <div className="tree-row">
        {hasChildren ? (
          <a href="#" className="tree-link" onClick={(e) => { e.preventDefault(); setOpen(!open); }}>
            <span>{item.label}</span>
            <span aria-hidden="true" className={`tree-arrow ${open ? "open" : ""}`}>{"\u25BE"}</span>
          </a>
        ) : item.href ? (
          <Link href={item.href} className="tree-link" onClick={onClose}>
            <span>{item.label}</span>
          </Link>
        ) : (
          <span className="tree-label">{item.label}</span>
        )}
      </div>
      {hasChildren && open && (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          {childItems.map((child, i) => (
            <TreeItem key={i} item={child} depth={depth + 1} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function BottomNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bottomnav">
        {mainItems.map((item) => {
          if ("isMenu" in item) {
            return (
              <button
                key={item.label}
                className={`bottomnav-item menu-btn ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <HiXMark /> : <item.icon />}
                <span>{item.label}</span>
              </button>
            );
          }
          const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link key={item.label} href={item.href} className={`bottomnav-item ${active ? "active" : ""}`}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="menu-header">
              <Image src="/images/logo-opt-v3.png" alt="NSIT" width={110} height={110} />
                <button className="menu-close" onClick={() => setMenuOpen(false)}><HiXMark /></button>
            </div>
            <div className="menu-tree">
              {(navItems as NavTreeItem[]).map((item, i) => (
                <TreeItem key={i} item={item} onClose={() => setMenuOpen(false)} />
              ))}
            </div>
            <a href="/enquiry" className="enquiry-btn" onClick={() => setMenuOpen(false)}>Enquiry Now <span>{"\u2192"}</span></a>
          </div>
        </div>
      )}

      <style>{`
        .bottomnav {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          height: 62px;
          background: #fff;
          border-top: 1px solid #e9ecef;
          display: none;
          align-items: center;
          justify-content: space-around;
          z-index: 9999;
          padding: 4px 0 6px;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.06);
        }
        @media (max-width: 1359px) {
          .bottomnav { display: flex; }
        }
        .bottomnav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          text-decoration: none;
          color: #8899aa;
          font-size: 10px;
          font-weight: 700;
          transition: color 180ms ease;
          padding: 2px 0;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
        .bottomnav-item svg { font-size: 18px; transition: color 180ms ease; }
        .bottomnav-item.active, .bottomnav-item.active svg { color: #f72039; }
        .bottomnav-item:not(.active):hover, .bottomnav-item:not(.active):hover svg { color: #5a6a7a; }
        .menu-btn.active, .menu-btn.active svg { color: #f72039; }

        .menu-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.35);
          z-index: 9998;
          display: none;
          align-items: stretch;
          justify-content: flex-start;
          animation: fadeIn 180ms ease;
        }
        @media (max-width: 1359px) {
          .menu-overlay { display: flex; }
        }
        .menu-panel {
          background: #fff;
          width: 50%;
          max-width: 480px;
          min-width: 320px;
          max-height: 100vh;
          overflow-y: auto;
          padding: 0 0 100px;
          animation: slideLeft 220ms ease;
          box-shadow: 8px 0 32px rgba(0,0,0,0.12);
        }
        .menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 16px;
          background: transparent;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .menu-header img {
          object-fit: contain;
          width: auto;
          height: 64px;
        }
        .menu-close {
          background: #f3f4f6;
          border: none;
          font-size: 20px;
          color: #f72039;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .menu-tree { margin-top: 0; }

        .tree-row {
          border-bottom: 1px solid #e5e7eb;
        }
        .tree-link {
          display: flex; align-items: center;
          padding: 14px 16px; text-decoration: none; color: #14213d;
          font-size: 15px; font-weight: 600; gap: 6px;
        }
        .tree-link:hover { background: #ed1c24; color: #fff; }
        .tree-label {
          display: block; padding: 14px 16px;
          color: #14213d; font-size: 15px; font-weight: 600;
        }
        .tree-arrow { font-size: 15px; color: #8899aa; flex-shrink: 0; display: inline-grid; place-items: center; width: 12px; height: 16px; transition: transform 180ms ease; }
        .tree-arrow.open { transform: rotate(180deg); }
        .tree-link:hover .tree-arrow { color: #fff; }

        .tree-depth-1 .tree-row { border-bottom: 1px solid #e5e7eb; }
        .tree-depth-1 .tree-link:hover { background: #ed1c24; color: #fff; }

        .tree-depth-2 .tree-row { border-bottom: 1px solid #e5e7eb; }
        .tree-depth-2 .tree-link:hover { background: #ed1c24; color: #fff; }

        .enquiry-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          margin: 24px 16px 0; padding: 14px 20px;
          color: #fff; font-size: 15px; font-weight: 600;
          background: #ed1c24; border: 1px solid #ed1c24; border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 12px 22px rgba(237, 28, 36, 0.2);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .enquiry-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 30px rgba(237, 28, 36, 0.28); }
        .enquiry-btn span { transition: transform 180ms ease; }
        .enquiry-btn:hover span { transform: translateX(3px); }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }
      `}</style>
    </>
  );
}

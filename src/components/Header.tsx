import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { NAV } from "../data/content";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Beagle-Puppy.com home">
      {/* Beagle mark — SVG */}
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F1E8] border border-[#e5d9c6] overflow-hidden shrink-0">
        <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden>
          <ellipse cx="20" cy="22" rx="11" ry="10" fill="#C98F5A" />
          <ellipse cx="20" cy="24" rx="7.5" ry="7.5" fill="#F6EDE0" />
          <ellipse cx="20" cy="15" rx="7" ry="6" fill="#8A5A34" />
          <ellipse cx="20" cy="16.5" rx="4.2" ry="4.6" fill="#F6EDE0" />
          <circle cx="14.5" cy="22" r="2.1" fill="#1c1c1c" />
          <circle cx="25.5" cy="22" r="2.1" fill="#1c1c1c" />
          <circle cx="15.1" cy="21.4" r="0.7" fill="#fff" />
          <circle cx="26.1" cy="21.4" r="0.7" fill="#fff" />
          <ellipse cx="20" cy="27.5" rx="2.4" ry="1.9" fill="#1c1c1c" />
          <ellipse cx="8.5" cy="21" rx="3.4" ry="7.5" fill="#6E4525" />
          <ellipse cx="31.5" cy="21" rx="3.4" ry="7.5" fill="#6E4525" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block text-[19px] font-bold tracking-tight ${light ? "text-white" : "text-[#0B1F3A]"}`}>
          Beagle-Puppy.com
        </span>
        <span className={`block text-[11px] font-medium ${light ? "text-white/70" : "text-[#6b7688]"}`}>
          The Beagle Owner's Guide
        </span>
      </span>
    </Link>
  );
}

/* Header — Elementor: Container > Container(Image/Heading) + Text nav + Button */
export default function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/97 backdrop-blur border-b border-[#e6e9e6]">
      {/* Top micro-bar */}
      <div className="hidden md:block border-b border-[#eef1ee]">
        <div className="bp-container">
          <p className="text-center text-[11px] tracking-wide text-[#7b8494] py-1.5">
            Independent guidance for Beagle owners.
          </p>
        </div>
      </div>
      <div className="bp-container">
        <div className="flex h-[68px] items-center justify-between gap-4">
          <Logo />
          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 xl:gap-7">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `relative text-[13.5px] font-medium transition-colors pb-1 ${
                    isActive || loc.pathname === n.to
                      ? "text-[#0B1F3A] after:absolute after:left-0 after:right-0 after:-bottom-[2px] after:h-[2px] after:bg-[#159447] after:rounded-full"
                      : "text-[#2c3648] hover:text-[#0B1F3A]"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full text-[#0B1F3A] hover:bg-[#f2f4f2] transition-colors"
            >
              <Search size={18} />
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#0B1F3A] hover:bg-[#f2f4f2] transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      {open && (
        <nav aria-label="Mobile" className="lg:hidden border-t border-[#e6e9e6] bg-white">
          <div className="bp-container py-3">
            <ul className="divide-y divide-[#f0f2f0]">
              {[{ label: "Home", to: "/" }, ...NAV, { label: "About Beagles", to: "/about-beagles" }].map((n) => (
                <li key={n.to + n.label}>
                  <NavLink
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3 text-[15px] font-medium ${
                        isActive ? "text-[#15803D]" : "text-[#0B1F3A]"
                      }`
                    }
                  >
                    {n.label}
                    <span aria-hidden className="text-[#b6bdc7]">›</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}

export { Logo };

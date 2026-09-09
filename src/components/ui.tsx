import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

/* Elementor mapping: Button widget */
export function Btn({
  to,
  children,
  variant = "primary",
  size,
  className = "",
  external,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light" | "navy";
  size?: "sm";
  className?: string;
  external?: boolean;
}) {
  const cls = `btn btn-${variant === "outline-light" ? "outline-light" : variant} ${size === "sm" ? "btn-sm" : ""} ${className}`;
  const inner = (
    <>
      {children}
      <ArrowRight size={15} strokeWidth={2.4} aria-hidden />
    </>
  );
  if (external) return <a href={to} className={cls}>{inner}</a>;
  return <Link to={to} className={cls}>{inner}</Link>;
}

/* Elementor mapping: Heading + Text Editor */
export function SectionHead({
  title,
  sub,
  align = "left",
  className = "",
}: {
  title: string;
  sub?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/* Elementor mapping: static HTML/Text breadcrumb */
export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[12.5px]">
      <ol className="flex flex-wrap items-center gap-1.5 text-white/85">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={13} aria-hidden className="opacity-70" />}
              {last || !it.to ? (
                <span aria-current={last ? "page" : undefined} className={last ? "text-white font-medium" : ""}>
                  {it.label}
                </span>
              ) : (
                <Link to={it.to} className="hover:text-white hover:underline underline-offset-2">
                  {it.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* Decorative handwritten note — Caveat accent */
export function HandNote({
  children,
  className = "",
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p className={`font-hand leading-[1.15] ${light ? "text-white" : "text-[#0B1F3A]"} ${className}`}>
      {children}
    </p>
  );
}

export function UnderlineFlourish({ light = false }: { light?: boolean }) {
  return (
    <svg width="72" height="12" viewBox="0 0 72 12" fill="none" aria-hidden className="mt-1">
      <path d="M3 8.5C20 4.5 45 3.5 69 6" stroke={light ? "#fff" : "#0B1F3A"} strokeWidth="2" strokeLinecap="round" />
      <path d="M14 11C28 8.5 44 8 60 9.5" stroke={light ? "#fff" : "#0B1F3A"} strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/* Green pill link used in cards — Text widget */
export function CardLink({ to, label = "Read Guide" }: { to: string; label?: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#15803D] hover:text-[#0e5c2b] transition-colors"
    >
      {label}
      <ArrowRight size={14} strokeWidth={2.4} aria-hidden />
    </Link>
  );
}

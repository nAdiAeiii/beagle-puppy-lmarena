import type { ReactNode } from "react";
import { Breadcrumb, HandNote, UnderlineFlourish } from "./ui";

/* Authority-hub hero — Elementor: Container(bg image) > Breadcrumb + Heading + Text + Icon List + Handwritten */
export default function HubHero({
  breadcrumb,
  title,
  intro,
  points,
  image,
  imageAlt,
  handNote,
  tone = "green",
}: {
  breadcrumb: { label: string; to?: string }[];
  title: ReactNode;
  intro: string;
  points: { icon: ReactNode; text: string }[];
  image: string;
  imageAlt: string;
  handNote: ReactNode;
  tone?: "green" | "navy";
}) {
  return (
    <section className="relative overflow-hidden bg-[#0B1F3A]">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className={`absolute inset-0 ${tone === "green" ? "hub-hero-green" : "hub-hero-gradient"}`} />
      <div className="bp-container relative py-10 md:py-14">
        <div className="max-w-[560px]">
          <Breadcrumb items={breadcrumb} />
          <h1 className="mt-3 text-[34px] md:text-[48px] font-semibold leading-[1.08] text-white">{title}</h1>
          <p className="mt-3 max-w-[460px] text-[14px] md:text-[15px] leading-relaxed text-white/90">{intro}</p>
          <ul className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
            {points.map((p, i) => (
              <li key={i} className="flex items-center gap-2.5 text-white">
                <span className="text-white/95">{p.icon}</span>
                <span className="max-w-[140px] text-[12.5px] font-medium leading-tight">{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 text-right md:block lg:right-10">
          <HandNote light className="text-[26px] -rotate-3">{handNote}</HandNote>
          <div className="flex justify-end"><UnderlineFlourish light /></div>
        </div>
      </div>
    </section>
  );
}

/* Icon sub-navigation bar below hub hero — Elementor: Container > Icon+Text items */
export function HubSubnav({
  items,
  active = 0,
}: {
  items: { icon: ReactNode; label: string; to: string }[];
  active?: number;
}) {
  const scrollToId = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="bp-container relative z-10">
      <nav
        aria-label="Section navigation"
        className="subnav-scroll -mt-7 flex gap-1 overflow-x-auto rounded-[12px] border border-[#e6e9e6] bg-white px-2 py-2 shadow-[0_8px_30px_rgba(11,31,58,0.10)]"
      >
        {items.map((it, i) => (
          <button
            key={it.label}
            type="button"
            onClick={() => scrollToId(it.to)}
            className={`flex min-w-[104px] flex-1 flex-col items-center gap-1.5 rounded-[9px] px-3 py-2.5 text-center transition-colors cursor-pointer ${
              i === active ? "text-[#15803D]" : "text-[#0B1F3A] hover:bg-[#f4f6f4]"
            }`}
          >
            <span className={i === active ? "text-[#15803D]" : "text-[#0B1F3A]"}>{it.icon}</span>
            <span className={`text-[12px] font-semibold leading-tight ${i === active ? "underline decoration-[#159447] decoration-2 underline-offset-8" : ""}`}>
              {it.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}

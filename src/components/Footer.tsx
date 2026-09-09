import { Link } from "react-router-dom";
import { Logo } from "./Header";
import { FOOTER_COLS } from "../data/content";

const socialIconProps = { width: 15, height: 15, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const InstagramIcon = () => (
  <svg {...socialIconProps}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const FacebookIcon = () => (
  <svg {...socialIconProps}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const PinterestIcon = () => (
  <svg {...socialIconProps}><circle cx="12" cy="12" r="10" /><path d="M8.5 20.5 12 8.5" /><path d="M10.6 8.3c.8-1.3 2.8-1.6 4.2-.6 1.4 1 1.5 3 .3 4.7-1 1.4-2.4 2.1-3.7 1.7" /></svg>
);
const YoutubeIcon = () => (
  <svg {...socialIconProps}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
);

/* Footer — Elementor: Container(footer navy) > Containers > Text + Icon */
export default function Footer() {
  return (
    <footer className="bg-[#071A33] text-white mt-0">
      <div className="bp-container pt-10 pb-6">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr_1fr_auto] lg:gap-10">
          <div>
            <Logo light />
            <p className="mt-3 text-[12.5px] leading-relaxed text-white/65 max-w-[260px]">
              Helping Beagle owners make more informed decisions for happier, healthier lives together.
            </p>
          </div>
          {FOOTER_COLS.map((col) => (
            <nav key={col.title} aria-label={`Footer — ${col.title}`}>
              <h3 className="text-[12px] font-sans font-700 font-bold uppercase tracking-[0.1em] text-white/50 mb-3">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[13px] text-white/80 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="flex flex-col items-start md:items-end justify-between gap-4">
            <p className="font-hand text-[19px] leading-tight text-white/85 text-left md:text-right">
              Curious dogs.
              <br />
              Happier lives.
              <br />
              Together.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { Icon: InstagramIcon, label: "Instagram" },
                { Icon: FacebookIcon, label: "Facebook" },
                { Icon: PinterestIcon, label: "Pinterest" },
                { Icon: YoutubeIcon, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-white/10 pt-5">
          <p className="text-[12px] text-white/55">© 2024 Beagle-Puppy.com. All rights reserved.</p>
          <p className="text-[12px] text-white/55">Independent guidance for Beagle owners.</p>
        </div>
      </div>
    </footer>
  );
}

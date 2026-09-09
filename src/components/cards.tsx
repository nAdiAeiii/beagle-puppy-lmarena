import { Link } from "react-router-dom";
import { CardLink } from "./ui";

/* Journey Card — Elementor: Container > Image + Heading + Text Editor */
export function JourneyCard({
  to,
  img,
  alt,
  title,
  text,
}: {
  to: string;
  img: string;
  alt: string;
  title: string;
  text: string;
}) {
  return (
    <Link to={to} className="card card-hover group block">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-3.5">
        <h3 className="font-sans text-[13.5px] font-bold leading-snug text-[#0B1F3A]">{title}</h3>
        <p className="mt-1 text-[12px] leading-snug text-[#5b6577]">{text}</p>
      </div>
    </Link>
  );
}

/* Article Card — Image + Heading + Text */
export function ArticleCard({
  to,
  img,
  alt,
  title,
  text,
  linkLabel = "Read Guide",
}: {
  to: string;
  img: string;
  alt: string;
  title: string;
  text: string;
  linkLabel?: string;
}) {
  return (
    <article className="card card-hover group flex flex-col">
      <Link to={to} className="block aspect-[16/10] overflow-hidden" tabIndex={-1} aria-hidden>
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-sans text-[14px] font-bold leading-snug text-[#0B1F3A]">
          <Link to={to} className="hover:text-[#15803D] transition-colors">{title}</Link>
        </h3>
        <p className="mt-1 text-[12.5px] leading-snug text-[#5b6577]">{text}</p>
        <div className="mt-auto pt-3 flex justify-end">
          <CardLink to={to} label={linkLabel} />
        </div>
      </div>
    </article>
  );
}

/* Horizontal mini card — training rows */
export function MiniRowCard({
  to,
  img,
  alt,
  title,
}: {
  to: string;
  img: string;
  alt: string;
  title: string;
}) {
  return (
    <Link
      to={to}
      className="card card-hover group flex items-center gap-3 p-2 pr-4"
    >
      <span className="block h-[52px] w-[72px] shrink-0 overflow-hidden rounded-[7px]">
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </span>
      <span className="font-sans text-[13px] font-bold text-[#0B1F3A] leading-tight">{title}</span>
    </Link>
  );
}

/* Icon + Text item — Elementor: Container + Icon + Text Editor */
export function IconItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="card flex items-start gap-3 p-3.5">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF6EF] text-[#15803D]">
        {icon}
      </span>
      <span>
        <span className="block font-sans text-[13px] font-bold text-[#0B1F3A]">{title}</span>
        <span className="block text-[12px] leading-snug text-[#5b6577]">{text}</span>
      </span>
    </div>
  );
}

/* Feature list check item */
export function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-[13px] text-[#3F4B5F]">
      <span className="mt-[1px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#15803D] text-white">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path d="M2 5.2 3.8 7 8 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {text}
    </li>
  );
}

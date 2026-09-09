import { Link } from "react-router-dom";
import { ChevronRight, Mail, MapPin } from "lucide-react";
import { IMG } from "../data/images";
import TrustSection from "../components/TrustSection";
import { Breadcrumb } from "../components/ui";

function PageShell({
  title,
  intro,
  crumbs,
  children,
}: {
  title: string;
  intro: string;
  crumbs: { label: string; to?: string }[];
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <img src={IMG.restGrass} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A33] via-[#071A33]/85 to-[#071A33]/40" />
        <div className="bp-container relative py-10 md:py-12">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-2 max-w-[640px] text-[30px] md:text-[38px] font-semibold text-white">{title}</h1>
          <p className="mt-2 max-w-[560px] text-[14px] text-white/85">{intro}</p>
        </div>
      </section>
      <div className="bp-container py-8">
        <div className="mx-auto max-w-[760px] rounded-[14px] border border-[#e6e9e6] bg-white p-6 md:p-9">
          <div className="space-y-4 text-[14px] leading-relaxed text-[#4c5668]">{children}</div>
        </div>
      </div>
      <TrustSection />
      <div className="pb-8" />
    </main>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="pt-2 font-sans text-[17px] font-bold text-[#0B1F3A]">{children}</h2>;
}

export function About() {
  return (
    <PageShell title="About Us" intro="Who we are and why Beagle-Puppy.com exists." crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}>
      <p>Beagle-Puppy.com is an independent editorial resource for current and future Beagle owners. We exist for one reason: to help you give your Beagle a happy, healthy life — from the first night home through the senior years.</p>
      <H>What we do</H>
      <p>We publish clear, practical guides on choosing a Beagle, puppy care, the first 30 days, training, feeding, health, grooming and everyday gear. Every guide is written to be genuinely useful: short sentences, honest trade-offs, and steps you can follow the same day.</p>
      <H>What we are not</H>
      <p>We are not a breeder, rescue, veterinary practice, training school or pet shop. We don't sell puppies and we don't provide veterinary diagnoses. Where health is concerned, we always encourage you to speak to your own veterinarian.</p>
      <H>How we work</H>
      <p>Our content follows a simple editorial standard: practical first, commercial second. If we recommend a product type, we explain <em>why</em> it helps and what to look for — see <Link to="/how-we-recommend" className="font-semibold text-[#15803D] underline">How We Recommend Products</Link> and our <Link to="/editorial-policy" className="font-semibold text-[#15803D] underline">Editorial Policy</Link>.</p>
    </PageShell>
  );
}

export function EditorialPolicy() {
  return (
    <PageShell title="Editorial Policy" intro="How we research, write and maintain our guides." crumbs={[{ label: "Home", to: "/" }, { label: "Editorial Policy" }]}>
      <p>Our goal is to provide clear, practical and trustworthy guidance. This page describes the standards behind every article on Beagle-Puppy.com.</p>
      <H>Accuracy and review</H>
      <p>Guides are researched from widely accepted canine-care guidance and the lived experience of Beagle owners. Health content is educational only and never replaces professional veterinary advice. We review popular guides periodically and update them when guidance changes.</p>
      <H>Independence</H>
      <p>Commercial considerations never determine our conclusions. Product mentions exist only where they genuinely help solve an owner's problem, and we explain alternatives wherever reasonable.</p>
      <H>No fabricated authority</H>
      <p>We do not invent credentials, certifications, reviews, statistics, awards or endorsements. If a claim cannot be supported, we don't make it.</p>
      <H>Corrections</H>
      <p>If you spot an error, please <Link to="/contact" className="font-semibold text-[#15803D] underline">contact us</Link> and we will review it promptly.</p>
    </PageShell>
  );
}

export function HowWeRecommend() {
  return (
    <PageShell title="How We Recommend Products" intro="A calm, honest approach to gear and essentials." crumbs={[{ label: "Home", to: "/" }, { label: "How We Recommend Products" }]}>
      <p>Beagle ownership requires some kit — but not much, and not the most expensive option. Our recommendations focus on everyday problems: pulling on the lead, restless nights, shedding, ear care and safe travel.</p>
      <H>Our criteria</H>
      <p>We look for practical design, durability, ease of cleaning, Beagle-appropriate sizing, safety features and fair value. We prefer simple, proven essentials over novelties.</p>
      <H>What we avoid</H>
      <p>We avoid fear-based selling, exaggerated claims and over-long lists. If a product type isn't necessary for most owners, we say so.</p>
      <H>Affiliate disclosure</H>
      <p>Where outbound retailer links appear, they may be affiliate links at no extra cost to you. They never affect what we recommend or how we rank options.</p>
    </PageShell>
  );
}

export function Contact() {
  return (
    <PageShell title="Contact" intro="Questions, corrections or suggestions — we'd like to hear from you." crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}>
      <p>For general questions about our guides, or to report an error, send us a message. We read everything, though we can't provide personal veterinary advice.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[10px] border border-[#e2e7e2] bg-[#fbfbf9] p-4">
          <Mail size={20} className="text-[#15803D]" />
          <p className="mt-2 font-sans text-[14px] font-bold text-[#0B1F3A]">Email</p>
          <p className="text-[13px]">hello@beagle-puppy.com</p>
          <p className="mt-1 text-[12px] text-[#7b8494]">We aim to reply within a few working days.</p>
        </div>
        <div className="rounded-[10px] border border-[#e2e7e2] bg-[#fbfbf9] p-4">
          <MapPin size={20} className="text-[#15803D]" />
          <p className="mt-2 font-sans text-[14px] font-bold text-[#0B1F3A]">Note</p>
          <p className="text-[13px]">Beagle-Puppy.com is an online editorial resource and does not operate a shop, kennel or clinic.</p>
        </div>
      </div>
      <H>Before you write</H>
      <p>If your Beagle shows signs of illness — persistent vomiting, breathing difficulty, seizures, collapse or anything that worries you — please contact your veterinarian promptly rather than waiting for an email reply.</p>
    </PageShell>
  );
}

export function Privacy() {
  return (
    <PageShell title="Privacy" intro="How we handle your privacy on this site." crumbs={[{ label: "Home", to: "/" }, { label: "Privacy" }]}>
      <p>Beagle-Puppy.com is a reading-first editorial site. We don't require accounts, and we don't ask for personal information to access our guides.</p>
      <H>What we collect</H>
      <p>If you contact us by email, we receive your message and address so we can reply. Basic, privacy-respecting analytics may be used to understand which guides are helpful — never to build advertising profiles.</p>
      <H>Cookies</H>
      <p>Any cookies used are limited to essential site function and aggregated analytics. You can block cookies in your browser without losing access to our content.</p>
    </PageShell>
  );
}

export function Terms() {
  return (
    <PageShell title="Terms" intro="The simple rules for using this site." crumbs={[{ label: "Home", to: "/" }, { label: "Terms" }]}>
      <p>By using Beagle-Puppy.com you agree to use our content for general information and responsible pet ownership. Our guides are educational and do not replace professional veterinary, legal or insurance advice.</p>
      <H>Acceptable use</H>
      <p>You're welcome to read, share links to, and quote short passages with attribution. Please don't reproduce entire articles, misrepresent our content, or use it in ways that could harm animals or owners.</p>
      <H>External links</H>
      <p>Where we link to external sites, we do so for usefulness. We can't control their content or availability.</p>
    </PageShell>
  );
}

export function Disclaimer() {
  return (
    <PageShell title="Disclaimer" intro="Please read this alongside our health guides." crumbs={[{ label: "Home", to: "/" }, { label: "Disclaimer" }]}>
      <p>Content on Beagle-Puppy.com is provided for general educational purposes. It is not veterinary advice, and reading it does not create a professional relationship.</p>
      <H>Health content</H>
      <p>Every dog is different. Always consult your veterinarian about symptoms, diagnoses, treatment, vaccination, parasite control, diet changes and behaviour concerns — especially where medication or safety is involved.</p>
      <H>Emergencies</H>
      <p>In an emergency, contact your veterinary practice or an emergency animal hospital immediately.</p>
    </PageShell>
  );
}

export function Sitemap() {
  const groups: { title: string; links: { label: string; to: string; desc: string }[] }[] = [
    {
      title: "Start here",
      links: [
        { label: "Home", to: "/", desc: "The editorial hub — where are you in your Beagle journey?" },
        { label: "About Beagles", to: "/about-beagles", desc: "History, temperament and whether a Beagle fits your life." },
        { label: "The Complete Beagle Guide", to: "/beagle-guide", desc: "Temperament, size, training, feeding, health and daily life." },
      ],
    },
    {
      title: "Authority hubs",
      links: [
        { label: "Beagle Puppy Care", to: "/puppy-care", desc: "Sleeping, feeding, toilet training, socialisation and the First 30 Days." },
        { label: "Beagle Training & Behaviour", to: "/training", desc: "Recall, barking, leash skills, crate training and behaviour." },
        { label: "Beagle Food & Nutrition", to: "/food-nutrition", desc: "Puppy, adult and senior feeding, portions and weight." },
        { label: "Beagle Health", to: "/health", desc: "Common issues, preventive care, life stages and vet visits." },
        { label: "Grooming & Gear", to: "/grooming-gear", desc: "Brushing, bathing, nails, ears and essential kit." },
      ],
    },
    {
      title: "Trust & legal",
      links: [
        { label: "About Us", to: "/about", desc: "Who we are and what we do." },
        { label: "Editorial Policy", to: "/editorial-policy", desc: "How we research and maintain guides." },
        { label: "How We Recommend Products", to: "/how-we-recommend", desc: "Our honest approach to gear." },
        { label: "Contact", to: "/contact", desc: "Questions, corrections and suggestions." },
        { label: "Privacy", to: "/privacy", desc: "How we handle your privacy." },
        { label: "Terms", to: "/terms", desc: "Rules for using this site." },
        { label: "Disclaimer", to: "/disclaimer", desc: "Important notice for health content." },
      ],
    },
  ];
  return (
    <main>
      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <img src={IMG.autumnWalk} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A33] via-[#071A33]/85 to-[#071A33]/40" />
        <div className="bp-container relative py-10 md:py-12">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Sitemap" }]} />
          <h1 className="mt-2 text-[30px] md:text-[38px] font-semibold text-white">Sitemap</h1>
          <p className="mt-2 max-w-[560px] text-[14px] text-white/85">Every canonical destination on Beagle-Puppy.com — one page per intent.</p>
        </div>
      </section>
      <div className="bp-container grid gap-5 py-8 md:grid-cols-3">
        {groups.map((g) => (
          <nav key={g.title} aria-label={g.title} className="h-fit rounded-[14px] border border-[#e6e9e6] bg-white p-5">
            <h2 className="font-sans text-[14px] font-bold uppercase tracking-[0.08em] text-[#15803D]">{g.title}</h2>
            <ul className="mt-3 space-y-1">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="group flex items-start gap-1.5 rounded-[8px] px-2 py-2 hover:bg-[#EDF6EF]">
                    <ChevronRight size={15} className="mt-[3px] shrink-0 text-[#9aa3b2] group-hover:text-[#15803D]" />
                    <span>
                      <span className="block text-[13.5px] font-bold text-[#0B1F3A] group-hover:text-[#15803D]">{l.label}</span>
                      <span className="block text-[12px] text-[#5b6577]">{l.desc}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <TrustSection />
      <div className="pb-8" />
    </main>
  );
}

export function NotFound() {
  return (
    <main className="bp-container py-16 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mx-auto mt-2 max-w-[480px] text-[32px] font-semibold">This trail went cold.</h1>
      <p className="mx-auto mt-2 max-w-[440px] text-[14px] text-[#5b6577]">The page you're looking for doesn't exist — but your Beagle journey doesn't have to end here.</p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-primary">Back to Home</Link>
        <Link to="/sitemap" className="btn btn-outline">Browse the Sitemap</Link>
      </div>
    </main>
  );
}

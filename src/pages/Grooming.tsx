import { Link } from "react-router-dom";
import {
  Sparkles, Heart, ShoppingCart, House, Brush, Bath, Scissors, Ear, Settings, Car,
  PawPrint, ArrowRight, ShieldCheck,
} from "lucide-react";
import { IMG } from "../data/images";
import HubHero, { HubSubnav } from "../components/HubHero";
import { Btn, Eyebrow, HandNote, SectionHead } from "../components/ui";
import { ArticleCard, CheckItem } from "../components/cards";
import TrustSection from "../components/TrustSection";

export default function Grooming() {
  return (
    <main>
      <HubHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Grooming & Gear" }]}
        title={<>Grooming & Gear</>}
        intro="Keep your Beagle looking, feeling and living their best with expert grooming tips and the right essential gear."
        points={[
          { icon: <Sparkles size={26} strokeWidth={1.7} />, text: "Easy grooming routines" },
          { icon: <Heart size={26} strokeWidth={1.7} />, text: "Healthy coat and skin" },
          { icon: <ShoppingCart size={26} strokeWidth={1.7} />, text: "Trusted product recommendations" },
        ]}
        image={IMG.groomBrush}
        imageAlt="Beagle being gently brushed"
        handNote={<>A clean Beagle<br />is a happy<br />Beagle!</>}
        tone="navy"
      />
      <HubSubnav
        items={[
          { icon: <House size={22} />, label: "Overview", to: "#overview" },
          { icon: <Brush size={22} />, label: "Brushing & Coat Care", to: "#topics" },
          { icon: <Bath size={22} />, label: "Bathing", to: "#topics" },
          { icon: <Scissors size={22} />, label: "Nail Care", to: "#topics" },
          { icon: <Ear size={22} />, label: "Ear Care", to: "#topics" },
          { icon: <Settings size={22} />, label: "Essential Gear", to: "#essentials" },
          { icon: <Car size={22} />, label: "Travel & Home", to: "#essentials" },
          { icon: <Heart size={22} />, label: "Product Guides", to: "#articles" },
        ]}
      />

      <section id="overview" className="bp-container grid gap-6 pt-8 lg:grid-cols-[1.5fr_0.9fr_0.85fr] scroll-mt-28">
        <div>
          <Eyebrow>Care today. More adventures tomorrow.</Eyebrow>
          <h2 className="mt-1 text-[26px] md:text-[32px] font-semibold leading-tight">Simple Grooming.<br />A Happier, Healthier Beagle.</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#4c5668]">
            Beagles are relatively low-maintenance, but regular grooming keeps them healthy, comfortable and
            looking their best.
          </p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#4c5668]">
            This section gives you practical, step-by-step advice on brushing, bathing, nail care, ear cleaning
            and the essential gear every Beagle owner should have.
          </p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#4c5668]">
            With the right routine and tools, grooming can be easy — and a great way to bond with your Beagle.
          </p>
          <div className="mt-5"><Btn to="/grooming-gear">Explore Grooming & Gear Guides</Btn></div>
        </div>
        <div className="relative overflow-hidden rounded-[12px]">
          <img src={IMG.gardenPuppy} alt="Clean Beagle puppy sitting outdoors" loading="lazy" className="h-[300px] w-full object-cover lg:h-full lg:min-h-[380px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          <HandNote className="absolute right-4 top-4 text-[21px] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">Clean pups.<br />Happy tails. ♡</HandNote>
        </div>
        <aside className="h-fit rounded-[12px] bg-[#f3f6f0] p-5" aria-label="Quick grooming tips">
          <h3 className="font-serif text-[19px] font-semibold text-[#0B1F3A]">Quick Grooming Tips</h3>
          <ul className="mt-3 space-y-3.5">
            {[
              [Brush, "Brush 2–3 times per week", "Helps reduce shedding and keeps their coat healthy."],
              [Bath, "Bath as needed", "Usually every 4–8 weeks, or when they get really dirty."],
              [PawPrint, "Check nails regularly", "Keep them at a comfortable length."],
              [Ear, "Keep ears clean and dry", "Helps prevent infections (common in Beagles)."],
              [ShieldCheck, "Use safe, dog-friendly products", "Choose gentle, high-quality grooming supplies."],
            ].map(([Icon, t, d]: any) => (
              <li key={t} className="flex items-start gap-3 border-b border-[#e2e8e1] pb-3 last:border-0 last:pb-0">
                <span className="text-[#15803D]"><Icon size={22} /></span>
                <span><span className="block text-[13px] font-bold text-[#0B1F3A]">{t}</span>
                <span className="block text-[12.5px] text-[#5b6577]">{d}</span></span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* TOPICS */}
      <section id="topics" className="bp-container pt-8 scroll-mt-28">
        <div className="rounded-[14px] bg-[#faf5ec] p-6 md:p-7">
          <h2 className="text-[22px] md:text-[24px] font-semibold">Grooming Topics</h2>
          <p className="mt-1 text-[13.5px] text-[#5b6577]">Explore each topic below for detailed guides, tips and product recommendations.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <ArticleCard to="/grooming-gear" img={IMG.brushHome} alt="Beagle being brushed at home" title="Brushing & Coat Care" text="How often to brush, the best tools and tips for a healthy, shiny coat." />
            <ArticleCard to="/grooming-gear" img={IMG.bathDog} alt="Dog being bathed" title="Bathing Your Beagle" text="When and how to bathe your Beagle, plus the best shampoos." />
            <ArticleCard to="/grooming-gear" img={IMG.pawsClose} alt="Close-up of Beagle paws" title="Nail Care" text="How to trim nails safely and keep your Beagle comfortable." />
            <ArticleCard to="/grooming-gear" img={IMG.closeUpSun} alt="Beagle head close-up" title="Ear Care" text="Step-by-step ear cleaning tips to prevent infections." />
            <ArticleCard to="/grooming-gear" img={IMG.autumnWalk} alt="Beagle on a walk with gear" title="Essential Gear" text="Collars, harnesses, beds, crates and more – our top recommendations." />
          </div>
        </div>
      </section>

      {/* ESSENTIALS + MADE EASY */}
      <section id="essentials" className="bp-container grid gap-5 pt-6 lg:grid-cols-[1.7fr_1fr] scroll-mt-28">
        <div className="rounded-[14px] bg-[#faf5ec] p-6">
          <h2 className="text-[22px] font-semibold">Recommended Grooming Essentials</h2>
          <p className="text-[13px] text-[#5b6577]">Our top picks for Beagle owners. Practical, high-quality and Beagle-friendly.</p>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {[
              ["Slicker Brush", "(Gentle & effective)"],
              ["Dog Shampoo", "(Mild & safe)"],
              ["Nail Clippers", "(With safety guard)"],
              ["Microfibre Towel", "(Quick drying)"],
              ["Grooming Wipes", "(For quick clean-ups)"],
              ["Deshedding Tool", "(For seasonal shedding)"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-[10px] border border-[#e6e0d2] bg-white p-3 text-center">
                <span className="mx-auto flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#EDF6EF] text-[#15803D]">
                  <Brush size={22} />
                </span>
                <p className="mt-2 text-[11.5px] font-bold leading-tight text-[#0B1F3A]">{t}</p>
                <p className="text-[10.5px] text-[#7b8494]">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-4"><Btn to="/grooming-gear" size="sm">View All Recommended Products</Btn></div>
        </div>
        <aside className="rounded-[14px] bg-[#eef3e9] p-6">
          <h2 className="text-[20px] font-semibold">Grooming Made Easy</h2>
          <p className="mt-1.5 text-[13px] text-[#4c5668]">A clean, comfortable Beagle is a happier Beagle. With the right tools and routine, grooming becomes simple — and a great opportunity to check their overall health.</p>
          <ul className="mt-4 space-y-2.5">
            {["Healthier coat and skin", "Fewer matts and less shedding", "Helps prevent ear and skin problems", "A more comfortable, confident Beagle", "Stronger bond between you and your dog"].map((t) => (
              <CheckItem key={t} text={t} />
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 rounded-[10px] bg-[#e0ebdc] p-3">
            <PawPrint size={22} className="text-[#15803D]" />
            <HandNote className="text-[20px]">Good care<br />goes a long way. ♡</HandNote>
          </div>
        </aside>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="bp-container pt-8 scroll-mt-28">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionHead title="Featured Grooming Articles" sub="In-depth guides to help you keep your Beagle looking and feeling great." />
          <Link to="/sitemap" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#15803D] hover:underline">View All Grooming Articles <ArrowRight size={14} /></Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ArticleCard to="/grooming-gear" img={IMG.groomBrush} alt="Groomer brushing a dog" title="How to Brush a Beagle (Complete Guide)" text="Step-by-step instructions for a healthy coat." linkLabel="Read Article" />
          <ArticleCard to="/grooming-gear" img={IMG.groomSpa} alt="Dog receiving a bath at a spa" title="Best Shampoos for Beagles" text="Our top picks for sensitive skin and a shiny coat." linkLabel="Read Article" />
          <ArticleCard to="/grooming-gear" img={IMG.pawsClose} alt="Close-up of puppy paws" title="How to Trim a Beagle's Nails" text="Simple steps for a stress-free experience." linkLabel="Read Article" />
          <ArticleCard to="/grooming-gear" img={IMG.autumnFence} alt="Beagle puppy at a fence" title="How to Clean Your Beagle's Ears" text="Prevent common ear problems with the right routine." linkLabel="Read Article" />
        </div>
      </section>

      <TrustSection />
      <div className="pb-8" />
    </main>
  );
}

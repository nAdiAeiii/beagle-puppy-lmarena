import { Link } from "react-router-dom";
import {
  Leaf, Heart, UtensilsCrossed, House, Dog, Bone, Scale, ShieldAlert, PawPrint,
  ArrowRight, Plus, Timer,
} from "lucide-react";
import { IMG } from "../data/images";
import HubHero, { HubSubnav } from "../components/HubHero";
import { Btn, Eyebrow, HandNote, SectionHead, UnderlineFlourish } from "../components/ui";
import { ArticleCard } from "../components/cards";
import TrustSection from "../components/TrustSection";

export default function Food() {
  return (
    <main>
      <HubHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Food & Nutrition" }]}
        title={<>Beagle Food<br />& Nutrition</>}
        intro="Simple, expert guidance to help you feed your Beagle a healthy, balanced diet at every stage of life."
        points={[
          { icon: <Leaf size={26} strokeWidth={1.7} />, text: "Better nutrition happier, healthier Beagles" },
          { icon: <Heart size={26} strokeWidth={1.7} />, text: "Practical, realistic advice for everyday life" },
          { icon: <UtensilsCrossed size={26} strokeWidth={1.7} />, text: "For puppies, adults and seniors" },
        ]}
        image={IMG.eatingDish}
        imageAlt="Beagle puppy eating from a bowl"
        handNote={<>Good food<br />for bright<br />adventures.</>}
      />
      <HubSubnav
        items={[
          { icon: <House size={22} />, label: "Overview", to: "#overview" },
          { icon: <Dog size={22} />, label: "Puppy Feeding", to: "#guides" },
          { icon: <Dog size={22} />, label: "Adult Feeding", to: "#guides" },
          { icon: <Dog size={22} />, label: "Senior Beagles", to: "#guides" },
          { icon: <UtensilsCrossed size={22} />, label: "Best Food", to: "#guides" },
          { icon: <Bone size={22} />, label: "Treats", to: "#articles" },
          { icon: <Scale size={22} />, label: "Weight & Portions", to: "#weight" },
          { icon: <Leaf size={22} />, label: "Food Safety", to: "#articles" },
        ]}
      />

      <section id="overview" className="bp-container grid gap-6 pt-8 lg:grid-cols-[1.5fr_0.9fr_0.85fr] scroll-mt-28">
        <div>
          <Eyebrow>Healthy food. Happier Beagles.</Eyebrow>
          <h2 className="mt-1 text-[26px] md:text-[32px] font-semibold leading-tight">Feeding Your Beagle<br />With Confidence</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#4c5668]">
            A good diet is one of the most important things you can do for your Beagle's health, energy and happiness.
          </p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#4c5668]">
            This section gives you clear, practical advice on what to feed, how much to feed and how to keep your
            Beagle at a healthy weight throughout their life.
          </p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#4c5668]">
            Whether you have a new puppy, an active adult or a senior Beagle, you'll find everything you need right here.
          </p>
          <div className="mt-5"><Btn to="/food-nutrition">Explore Food & Nutrition Guides</Btn></div>
        </div>
        <div className="relative overflow-hidden rounded-[12px]">
          <img src={IMG.steelBowl} alt="Beagle eating from a stainless steel bowl" loading="lazy" className="h-[300px] w-full object-cover lg:h-full lg:min-h-[380px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-right">
            <HandNote light className="text-[21px] -rotate-2">Healthy<br />Beagles<br />happier days.</HandNote>
            <div className="flex justify-end"><UnderlineFlourish light /></div>
          </div>
        </div>
        <aside className="h-fit rounded-[12px] bg-[#f3f6f0] p-5" aria-label="Quick nutrition facts">
          <h3 className="font-serif text-[19px] font-semibold text-[#0B1F3A]">Quick Nutrition Facts</h3>
          <ul className="mt-3 space-y-3.5">
            {[
              [PawPrint, "Puppy food", "High-quality, nutrient-rich food for healthy growth"],
              [Dog, "Adult portions", "Typically 1.5 – 2.5 cups per day (split into 2 meals)"],
              [Heart, "Healthy weight", "Maintain a lean, athletic body condition"],
              [Leaf, "Fresh water", "Always provide clean, fresh water"],
              [Plus, "Avoid harmful foods", "No chocolate, grapes, onions, raisins or xylitol"],
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

      {/* GUIDES */}
      <section id="guides" className="bp-container pt-8 scroll-mt-28">
        <div className="rounded-[14px] bg-[#faf5ec] p-6 md:p-7">
          <h2 className="text-[22px] md:text-[24px] font-semibold">Find the Right Guide for Your Beagle</h2>
          <p className="mt-1 text-[13.5px] text-[#5b6577]">Choose your Beagle's life stage or a specific topic below.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ArticleCard to="/food-nutrition" img={IMG.pawsTreats} alt="Beagle with treats on paws" title="Beagle Puppy Feeding" text="What to feed, how much and how often." />
            <ArticleCard to="/food-nutrition" img={IMG.steelBowl} alt="Beagle eating from steel bowl" title="Feeding Adult Beagles" text="Keep your Beagle healthy, active and at the right weight." />
            <ArticleCard to="/food-nutrition" img={IMG.sleepingCouch} alt="Beagle resting near a bowl" title="Feeding Senior Beagles" text="Adjusting nutrition for older Beagles." />
            <ArticleCard to="/food-nutrition" img={IMG.kibbleBowl} alt="Bowl of dry kibble" title="Best Food for Beagles" text="Kibble, wet food, raw diets and what to look for." />
          </div>
        </div>
      </section>

      {/* WEIGHT */}
      <section id="weight" className="bp-container pt-6 scroll-mt-28">
        <div className="grid gap-5 lg:grid-cols-[300px_1fr_280px]">
          <div className="relative min-h-[230px] overflow-hidden rounded-[14px]">
            <img src={IMG.fieldStand} alt="Beagle standing in a grassy field" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <HandNote light className="absolute left-4 top-4 text-[20px] -rotate-2">The right<br />amount keeps<br />them healthy<br />and happy.</HandNote>
          </div>
          <div className="rounded-[14px] bg-[#faf5ec] p-6">
            <h2 className="text-[22px] font-semibold">Beagle Weight Guide</h2>
            <p className="mt-1.5 text-[13px] text-[#4c5668]">Maintaining a healthy weight helps your Beagle live a longer, happier life. Use this guide to understand ideal weight ranges and portion sizes.</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                [Timer, "Puppy", "3 – 9 kg", "(3–12 months)"],
                [Dog, "Adult", "9 – 14 kg", "(1–7 years)"],
                [Dog, "Senior", "9 – 14 kg", "(7+ years)"],
              ].map(([Icon, a, b, c]: any) => (
                <div key={a} className="border-l border-[#e0d4bd] first:border-0">
                  <Icon size={26} className="mx-auto text-[#15803D]" strokeWidth={1.6} />
                  <p className="mt-1 text-[12.5px] font-bold text-[#0B1F3A]">{a}</p>
                  <p className="text-[13px] font-bold text-[#0B1F3A]">{b}</p>
                  <p className="text-[11.5px] text-[#7b8494]">{c}</p>
                </div>
              ))}
            </div>
            <div className="mt-4"><Btn to="/food-nutrition" size="sm">See the Complete Weight & Portion Guide</Btn></div>
          </div>
          <aside className="rounded-[14px] bg-[#e7f0e4] p-6">
            <div className="flex items-center gap-2">
              <Leaf size={26} className="text-[#15803D]" />
              <h3 className="font-serif text-[18px] font-semibold leading-tight text-[#0B1F3A]">Healthy Food<br />Healthy Adventures</h3>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-[#4c5668]">Good nutrition today helps your Beagle enjoy a longer, more active life tomorrow.</p>
            <div className="mt-4 flex justify-center">
              <svg width="130" height="90" viewBox="0 0 130 90" fill="none" aria-hidden>
                <path d="M20 78h90" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
                <path d="M45 78V50c0-4 3-6 5-9 2-4 1-8 4-11 2-2 6-3 9-2l6 4-3 5c4 1 7 4 8 8l3 15c1 4-2 6-5 6H62l-3-8h-8l-6 20z" stroke="#15803D" strokeWidth="1.8" strokeLinejoin="round" />
                <circle cx="66" cy="32" r="1.6" fill="#15803D" />
                <path d="M100 30c-3-4-9-2-9 2 0 3 4 6 9 9 5-3 9-6 9-9 0-4-6-6-9-2z" stroke="#15803D" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </div>
          </aside>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="bp-container pt-8 scroll-mt-28">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionHead title="Popular Food & Nutrition Articles" sub="Helpful guides to your most common feeding questions." />
          <Link to="/sitemap" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#15803D] hover:underline">View All Food & Nutrition Articles <ArrowRight size={14} /></Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ArticleCard to="/food-nutrition" img={IMG.kibbleBowl} alt="Kibble in bowls with scoop" title="How Much to Feed a Beagle Puppy" text="A simple feeding guide by age and weight." linkLabel="Read Article" />
          <ArticleCard to="/food-nutrition" img={IMG.pouringTreats} alt="Hand pouring treats into a bowl" title="The Best Dog Food for Beagles" text="What to look for and our top recommendations." linkLabel="Read Article" />
          <ArticleCard to="/food-nutrition" img={IMG.treatReach} alt="Beagle offered a treat" title="Healthy Treats for Beagles" text="Great reward options without the extra weight." linkLabel="Read Article" />
          <ArticleCard to="/food-nutrition" img={IMG.feedingWoman} alt="Owner feeding a Beagle puppy" title="Human Foods Beagles Can (and Can't) Eat" text="Safe options and foods to avoid." linkLabel="Read Article" />
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-[12px] text-[#7b8494]"><ShieldAlert size={13} /> Never feed chocolate, grapes, raisins, onions or xylitol — these are toxic to dogs.</p>
      </section>

      <TrustSection />
      <div className="pb-8" />
    </main>
  );
}

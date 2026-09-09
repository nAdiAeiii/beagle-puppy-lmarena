import { Link } from "react-router-dom";
import {
  PawPrint, Heart, Search, Volume2, Users, Leaf, Bone, Ruler, Weight, TrendingUp, Dog,
  Footprints, Brain, Lightbulb, Megaphone, House, LayoutGrid, Unlink, UtensilsCrossed, Package,
  Scale, Brush, Ear, Scissors, Bath, ShieldCheck, HeartPulse, Stethoscope, Building2, ChevronRight,
  GraduationCap,
} from "lucide-react";
import { IMG } from "../data/images";
import { Btn, HandNote, SectionHead, UnderlineFlourish } from "../components/ui";
import { IconItem } from "../components/cards";
import TrustSection from "../components/TrustSection";

function SideImage({ img, alt, note }: { img: string; alt: string; note: React.ReactNode }) {
  return (
    <div className="relative min-h-[170px] overflow-hidden rounded-[12px] lg:min-h-[190px]">
      <img src={img} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#f3ece1]/95 via-[#f3ece1]/40 to-transparent" />
      <div className="absolute right-4 top-1/2 max-w-[140px] -translate-y-1/2 text-right">
        <HandNote className="text-[20px]">{note}</HandNote>
      </div>
    </div>
  );
}

export default function BeagleGuide() {
  const jump = ["Overview", "Temperament", "Size & Growth", "Exercise", "Training", "Feeding", "Grooming", "Health", "Family Life", "FAQ"];
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F8F1E8]">
        <img src={IMG.heroHome} alt="Joyful Beagle enjoying a sunny day outdoors" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="hero-gradient-left absolute inset-0" />
        <div className="bp-container relative py-10 md:py-14">
          <div className="grid items-center gap-6 lg:grid-cols-[1.5fr_auto_auto]">
            <div className="max-w-[580px]">
              <h1 className="text-[32px] md:text-[44px] font-semibold leading-[1.1]">The Complete Beagle Guide</h1>
              <p className="mt-2.5 max-w-[500px] text-[14px] md:text-[15px] text-[#3F4B5F]">
                Your all-in-one guide to the Beagle — covering temperament, size, training, feeding, health,
                exercise and daily life. Everything you need to know to raise a happy, healthy Beagle.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-[7px] border border-[#d8cfbf] bg-white/90 px-3 py-1.5 text-[12.5px] font-semibold text-[#0B1F3A]"><PawPrint size={14} /> Breed basics</span>
                <span className="inline-flex items-center gap-1.5 rounded-[7px] border border-[#d8cfbf] bg-white/90 px-3 py-1.5 text-[12.5px] font-semibold text-[#0B1F3A]"><Heart size={14} /> Owner-friendly guidance</span>
              </div>
            </div>
            <div className="hidden text-right -rotate-3 xl:block">
              <HandNote className="text-[24px]">Curious<br />Loyal<br />Always an<br />Adventure ♡</HandNote>
            </div>
            <aside className="w-full max-w-[250px] rounded-[10px] border border-white/60 bg-white/95 p-4 shadow-lg backdrop-blur" aria-label="Beagle quick facts">
              <h2 className="font-sans text-[13.5px] font-bold text-[#0B1F3A]">Beagle Quick Facts</h2>
              <dl className="mt-2 space-y-0 text-[12px]">
                {[["Group", "Hound (AKC)"], ["Size", "Small to medium"], ["Energy", "Moderate to high"], ["Shedding", "Moderate"], ["Trainability", "Moderate"], ["Lifespan", "12 – 15 years"]].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between border-b border-[#eef1ee] py-[7px] last:border-0">
                    <dt className="text-[#5b6577]">{k}</dt>
                    <dd className="font-semibold text-[#0B1F3A]">{v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* JUMP TO */}
      <div className="border-b border-[#e6e9e6] bg-white">
        <div className="bp-container">
          <nav aria-label="Jump to section" className="subnav-scroll flex items-center gap-2 overflow-x-auto py-3">
            <span className="shrink-0 text-[12.5px] font-bold text-[#0B1F3A]">Jump to:</span>
            {jump.map((j, i) => (
              <button
                key={j}
                type="button"
                onClick={() => {
                  const el = document.getElementById(j.toLowerCase().replace(/[^a-z]+/g, "-"));
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`shrink-0 cursor-pointer rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors ${i === 0 ? "border-[#15803D] bg-[#15803D] text-white" : "border-[#d9dfd9] text-[#2c3648] hover:border-[#15803D] hover:text-[#15803D]"}`}
              >
                {j}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* WHAT IS A BEAGLE LIKE */}
      <section id="overview" className="bp-container pt-8 scroll-mt-24">
        <div className="grid gap-5 lg:grid-cols-[1.5fr_1.2fr_0.9fr]">
          <div>
            <h2 className="text-[22px] md:text-[24px] font-semibold">What Is a Beagle Like?</h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#5b6577]">
              Beagles are friendly, curious and affectionate hounds, loved for their merry personalities and
              incredible sense of smell. They make wonderful family companions and bring joy, fun and
              adventure to everyday life.
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#5b6577]">
              This guide covers everything you need to know about living with a Beagle, from puppyhood through
              their senior years, with practical, trustworthy advice from experienced Beagle owners.
            </p>
            <div className="mt-4"><Btn to="/puppy-care">Explore the Guide</Btn></div>
          </div>
          <div className="overflow-hidden rounded-[12px]">
            <img src={IMG.heroPuppyFloor} alt="Beagle puppy lying with a chew toy on a rug" loading="lazy" className="h-[220px] w-full object-cover lg:h-full" />
          </div>
          <aside className="rounded-[12px] border border-[#e6e9e6] bg-white p-4" aria-label="Beagle at a glance">
            <h3 className="font-sans text-[14px] font-bold text-[#0B1F3A]">Beagle at a Glance</h3>
            <ul className="mt-2 space-y-2.5">
              {[
                [Heart, "Affectionate", "Loves people and companionship"],
                [Search, "Curious", "Always exploring with their nose"],
                [PawPrint, "Scent-driven", "An incredible sense of smell"],
                [Volume2, "Vocal", "Known for their distinctive bark"],
                [Users, "Family-friendly", "Great with children and other pets"],
              ].map(([Icon, t, d]: any) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-[1px] text-[#15803D]"><Icon size={17} /></span>
                  <span><span className="block text-[12.5px] font-bold text-[#0B1F3A]">{t}</span>
                  <span className="block text-[12px] text-[#5b6577]">{d}</span></span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* TEMPERAMENT */}
      <section id="temperament" className="bp-container pt-8 scroll-mt-24">
        <SectionHead title="Beagle Temperament" sub="Beagles are cheerful, gentle and inquisitive dogs. They are pack dogs by nature and love being around people. While they can be independent at times, their friendly and playful personalities make them wonderful companions." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            <IconItem icon={<Users size={18} />} title="Friendly" text="Warm, social and good with people." />
            <IconItem icon={<Search size={18} />} title="Curious" text="Always exploring and following their nose." />
            <IconItem icon={<Leaf size={18} />} title="Independent" text="Can be stubborn at times." />
            <IconItem icon={<Bone size={18} />} title="Food-Motivated" text="Responds well to positive rewards." />
          </div>
          <SideImage img={IMG.autumnFence} alt="Beagle puppy leaning over a fence" note={<>Small hound.<br />Big personality.</>} />
        </div>
      </section>

      {/* SIZE & GROWTH */}
      <section id="size-growth" className="bp-container pt-8 scroll-mt-24">
        <SectionHead title="Beagle Size & Growth" sub="Beagles are a small to medium-sized breed with a sturdy, compact build. Here's what to expect as they grow from puppy to adult." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <IconItem icon={<Ruler size={18} />} title="Height (Adult)" text="13 – 15 inches (33 – 40 cm)" />
            <IconItem icon={<Weight size={18} />} title="Weight (Adult)" text="20 – 30 pounds (9 – 14 kg)" />
            <IconItem icon={<TrendingUp size={18} />} title="Puppy Growth" text="Rapid growth in first 6 months. Near adult size by 12 months." />
            <IconItem icon={<Dog size={18} />} title="Adult Size" text="Small, sturdy and athletic with a strong build." />
          </div>
          <SideImage img={IMG.lawnStand} alt="Beagle standing on grass" note={<>A compact size,<br />a huge zest<br />for life.</>} />
        </div>
      </section>

      {/* EXERCISE */}
      <section id="exercise" className="bp-container pt-8 scroll-mt-24">
        <SectionHead title="Exercise Needs" sub="Beagles are an active breed that needs daily exercise and mental stimulation to stay happy and healthy." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <IconItem icon={<Footprints size={18} />} title="Daily Walks" text="At least 1–2 walks every day." />
            <IconItem icon={<PawPrint size={18} />} title="Scent Games" text="Let them use their amazing nose." />
            <IconItem icon={<Bone size={18} />} title="Play Time" text="Enjoys play with people and other dogs." />
            <IconItem icon={<Lightbulb size={18} />} title="Mental Stimulation" text="Puzzle toys and new experiences." />
          </div>
          <SideImage img={IMG.redBall} alt="Beagle puppy playing with a red ball" note={<>A tired Beagle<br />is a happy Beagle.</>} />
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="bp-container pt-8 scroll-mt-24">
        <SectionHead title="Training a Beagle" sub="Beagles are intelligent but can be independent, so training requires patience, consistency and positive reinforcement." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <IconItem icon={<Megaphone size={18} />} title="Recall" text="Practise often in a safe area." />
            <IconItem icon={<House size={18} />} title="House Training" text="Consistent routine and rewards." />
            <IconItem icon={<LayoutGrid size={18} />} title="Crate Training" text="Provides a safe space and helps with training." />
            <IconItem icon={<Unlink size={18} />} title="Leash Walking" text="Use positive reinforcement and keep walks interesting." />
          </div>
          <aside className="rounded-[12px] border border-[#d8e4da] bg-[#EDF6EF] p-5 text-center">
            <GraduationCap size={28} className="mx-auto text-[#15803D]" />
            <h3 className="mt-2 font-sans text-[14px] font-bold text-[#0B1F3A]">Remember</h3>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#3F4B5F]">Beagles are scent-driven and can be easily distracted. Patience and consistency are key to training success.</p>
            <Link to="/training" className="mt-2 inline-block text-[12.5px] font-semibold text-[#15803D] hover:underline">Explore training guides →</Link>
          </aside>
        </div>
      </section>

      {/* FEEDING */}
      <section id="feeding" className="bp-container pt-8 scroll-mt-24">
        <SectionHead title="Feeding a Beagle" sub="A balanced, high-quality diet keeps your Beagle healthy, energetic and at the right weight." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-3">
            <IconItem icon={<UtensilsCrossed size={18} />} title="Puppy Feeding" text="Nutrient-rich food to support growth." />
            <IconItem icon={<Package size={18} />} title="Adult Feeding" text="High-quality food with the right nutrients." />
            <IconItem icon={<Scale size={18} />} title="Weight Management" text="Monitor portions and avoid overfeeding." />
          </div>
          <SideImage img={IMG.eatingDish} alt="Dog eating from a dish" note={<>Good food<br />fuels great<br />adventures.</>} />
        </div>
      </section>

      {/* GROOMING */}
      <section id="grooming" className="bp-container pt-8 scroll-mt-24">
        <SectionHead title="Grooming & Care" sub="Beagles are a short, low-maintenance coat, but regular care keeps them healthy and comfortable." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <IconItem icon={<Brush size={18} />} title="Coat Care" text="Brush weekly to reduce shedding." />
            <IconItem icon={<Ear size={18} />} title="Ear Care" text="Check and clean ears regularly." />
            <IconItem icon={<Scissors size={18} />} title="Nail Trimming" text="Keep nails short for comfort." />
            <IconItem icon={<Bath size={18} />} title="Bathing" text="Only when needed to avoid skin irritation." />
          </div>
          <SideImage img={IMG.sleepingCouch} alt="Beagle sleeping cosily with a bone" note={<>A clean Beagle<br />is a healthy<br />Beagle.</>} />
        </div>
      </section>

      {/* HEALTH */}
      <section id="health" className="bp-container pt-8 scroll-mt-24">
        <SectionHead title="Beagle Health" sub="Beagles are generally healthy dogs, but like all breeds, they can be prone to certain health conditions. Regular veterinary care and a healthy lifestyle help them live long, happy lives." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <IconItem icon={<ShieldCheck size={18} />} title="Preventive Care" text="Vaccinations and parasite control." />
            <IconItem icon={<Weight size={18} />} title="Weight" text="Keep a healthy weight to prevent health issues." />
            <IconItem icon={<Ear size={18} />} title="Ear Health" text="Check for infections regularly." />
            <IconItem icon={<Stethoscope size={18} />} title="Routine Vet Visits" text="Annual check-ups keep them healthy." />
          </div>
          <aside className="rounded-[12px] border border-[#e6e9e6] bg-[#faf7f1] p-5">
            <p className="text-[12px] leading-relaxed text-[#5b6577]"><PawPrint size={14} className="mr-1 inline text-[#15803D]" /> Health information on this site is educational in nature and does not replace professional veterinary advice. Always consult your vet about your Beagle's health and care.</p>
          </aside>
        </div>
      </section>

      {/* FAMILY */}
      <section id="family-life" className="bp-container pt-8 scroll-mt-24">
        <SectionHead title="Are Beagles Good Family Dogs?" sub="Yes! Beagles are loving, playful and great with children. They thrive on companionship and make wonderful family pets." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <IconItem icon={<Users size={18} />} title="Great with Children" text="Gentle and playful companions." />
            <IconItem icon={<Building2 size={18} />} title="Apartment Suitable" text="Can adapt with enough exercise." />
            <IconItem icon={<Volume2 size={18} />} title="Can Be Vocal" text="Known for their bark and howl." />
            <IconItem icon={<Heart size={18} />} title="Loyal Companions" text="They love being part of the family." />
          </div>
          <SideImage img={IMG.girlBeagle} alt="Girl sharing a loving moment with her Beagle" note={<>Good friends<br />for a lifetime.</>} />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bp-container pt-8 scroll-mt-24">
        <SectionHead title="Frequently Asked Questions" sub="Quick answers to common questions about Beagles." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <div className="grid gap-2.5 sm:grid-cols-2">
            {["Do Beagles bark a lot?", "Do Beagles shed?", "Are Beagles easy to train?", "Are they good with children?", "How much exercise do they need?"].map((q) => (
              <details key={q} className="faq-item card group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[13px] font-semibold text-[#0B1F3A]">
                  {q}<ChevronRight size={16} className="faq-chevron shrink-0 text-[#15803D]" />
                </summary>
                <p className="border-t border-[#eef1ee] px-4 py-3 text-[12.5px] text-[#5b6577]">See our in-depth guides for a full, practical answer to this question.</p>
              </details>
            ))}
          </div>
          <SideImage img={IMG.sleepingBone} alt="Beagle puppy sleeping with a bone" note={<>Still have<br />questions?<br />We're here to help.</>} />
        </div>
      </section>

      {/* RELATED */}
      <section className="bp-container pt-8">
        <SectionHead title="Related Beagle Guides" sub="Explore more in-depth guides to help you care for your Beagle." />
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[
            [IMG.calmRest, "Beagle Puppy Care", "A complete guide for new owners.", "/puppy-care"],
            [IMG.sleepingSoft, "Your Beagle's First 30 Days", "Week-by-week guidance for a happy start.", "/puppy-care"],
            [IMG.autumnWalk, "Beagle Training", "Practical tips for real-world success.", "/training"],
            [IMG.kibbleBowl, "Best Food for Beagles", "Nutrition advice for a healthy, happy dog.", "/food-nutrition"],
            [IMG.closeUpSun, "Beagle Life Expectancy", "What to expect and how to support a long life.", "/health"],
            [IMG.brushHome, "Grooming Essentials", "Keep your Beagle clean and comfortable.", "/grooming-gear"],
          ].map(([img, t, d, to]) => (
            <Link key={t as string} to={to as string} className="group block">
              <span className="block aspect-[4/3] overflow-hidden rounded-[10px] border border-[#e2e7e2]">
                <img src={img as string} alt={t as string} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
              </span>
              <span className="mt-2 block font-sans text-[12.5px] font-bold text-[#0B1F3A] group-hover:text-[#15803D]">{t}</span>
              <span className="block text-[11.5px] text-[#7b8494]">{d}</span>
            </Link>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 text-[12px] text-[#5b6577]">
          <HeartPulse size={14} className="text-[#15803D]" />
          <span>Looking for something specific? <Link to="/sitemap" className="font-semibold text-[#15803D] hover:underline">Browse the full sitemap</Link></span>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <Brain size={0} /><UnderlineFlourish />
        </div>
      </section>

      <TrustSection />
      <div className="pb-8" />
    </main>
  );
}

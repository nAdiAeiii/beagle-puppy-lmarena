import {
  Heart, House, PawPrint, CalendarDays, Moon, UtensilsCrossed, Users, LayoutGrid,
  Weight, Ruler, Dog, BookOpen, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { IMG } from "../data/images";
import HubHero, { HubSubnav } from "../components/HubHero";
import { Btn, Eyebrow, HandNote, SectionHead, UnderlineFlourish } from "../components/ui";
import { ArticleCard } from "../components/cards";
import TrustSection from "../components/TrustSection";

export default function PuppyCare() {
  return (
    <main>
      <HubHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Puppy Care" }]}
        title={<>Beagle Puppy Care</>}
        intro="Practical, step-by-step guidance to help you give your Beagle puppy the best possible start in life."
        points={[
          { icon: <Heart size={26} strokeWidth={1.7} />, text: "Settle in with confidence" },
          { icon: <House size={26} strokeWidth={1.7} />, text: "Build healthy routines" },
          { icon: <PawPrint size={26} strokeWidth={1.7} />, text: "Raise a happy, well-adjusted Beagle" },
        ]}
        image={IMG.sleepingCouch}
        imageAlt="Beagle puppy resting on a soft couch in warm light"
        handNote={<>Small steps.<br />Big adventures<br />ahead.</>}
        tone="navy"
      />
      <HubSubnav
        items={[
          { icon: <House size={22} />, label: "Overview", to: "#overview" },
          { icon: <CalendarDays size={22} />, label: "First 30 Days", to: "#first-30-days" },
          { icon: <Moon size={22} />, label: "Sleeping", to: "#topics" },
          { icon: <UtensilsCrossed size={22} />, label: "Feeding", to: "#topics" },
          { icon: <House size={22} />, label: "Toilet Training", to: "#topics" },
          { icon: <Users size={22} />, label: "Socialisation", to: "#topics" },
          { icon: <LayoutGrid size={22} />, label: "Crate Training", to: "#topics" },
          { icon: <Heart size={22} />, label: "Common Issues", to: "#topics" },
        ]}
      />

      {/* INTRO + FACTS */}
      <section id="overview" className="bp-container grid gap-6 pt-8 lg:grid-cols-[1.5fr_0.9fr_0.85fr] scroll-mt-28">
        <div>
          <Eyebrow>A strong start</Eyebrow>
          <h2 className="mt-1 text-[26px] md:text-[32px] font-semibold leading-tight">Helping Your Beagle Puppy Thrive From Day One</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#4c5668]">
            Bringing home a Beagle puppy is an exciting and life-changing experience. Puppies are full of energy,
            curiosity and charm — but they also need structure, patience and the right care.
          </p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#4c5668]">
            This guide gives you practical, easy-to-follow advice on everything from the first few days at home to
            building healthy routines for sleep, feeding, training and socialisation.
          </p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#4c5668]">
            Use the sections below to find exactly what you need, or start with our First 30 Days guide for a
            simple step-by-step plan.
          </p>
          <div className="mt-5"><Btn to="/puppy-care">Start With the First 30 Days</Btn></div>
        </div>
        <div className="relative overflow-hidden rounded-[12px]">
          <img src={IMG.parkPuppy} alt="Beagle puppy sitting on grass in a sunny park" loading="lazy" className="h-[300px] w-full object-cover lg:h-full lg:min-h-[380px]" />
        </div>
        <aside className="h-fit rounded-[12px] bg-[#f3f6f0] p-5" aria-label="Key puppy facts">
          <h3 className="font-serif text-[19px] font-semibold text-[#0B1F3A]">Key Puppy Facts</h3>
          <ul className="mt-3 space-y-3.5">
            {[
              [PawPrint, "Puppy age", "8 weeks+ (when joining a new home)"],
              [Weight, "Adult weight", "9 – 14 kg"],
              [Ruler, "Adult height", "33 – 40 cm"],
              [Heart, "Life expectancy", "12 – 15 years"],
              [Dog, "Temperament", "Friendly, curious, sociable"],
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

      {/* 30-DAY TIMELINE */}
      <section id="first-30-days" className="bp-container pt-8 scroll-mt-28">
        <div className="grid gap-6 rounded-[14px] bg-[#faf5ec] p-6 md:p-8 lg:grid-cols-[220px_1fr]">
          <div>
            <h2 className="text-[24px] font-semibold leading-tight">Your Beagle Puppy's First 30 Days</h2>
            <p className="mt-2 text-[13px] text-[#5b6577]">A simple timeline to help you know what to expect and what to focus on at each stage.</p>
            <div className="mt-4"><Btn to="/puppy-care" size="sm">View the 30-Day Guide</Btn></div>
          </div>
          <ol className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              [IMG.sleepingBone, "Days 1–3", "Settling In", "Help your puppy feel safe and secure"],
              [IMG.scarfBlanket, "Days 4–7", "Establishing Routines", "Feeding, sleeping and toilet training"],
              [IMG.redBall, "Weeks 2–3", "Building Confidence", "Socialisation and early training"],
              [IMG.autumnHighfive, "Week 4", "Making Progress", "Good habits for the future"],
            ].map(([img, k, t, d], i) => (
              <li key={k as string} className="relative text-center">
                {i < 3 && <span aria-hidden className="dot-line absolute left-[calc(50%+44px)] top-[42px] hidden w-[calc(100%-88px)] md:block" />}
                <span className="mx-auto block h-[84px] w-[84px] overflow-hidden rounded-full border-[3px] border-[#2e7d4f] bg-white">
                  <img src={img as string} alt="" loading="lazy" className="h-full w-full object-cover" />
                </span>
                <p className="mt-2.5 text-[12.5px] font-bold text-[#0B1F3A]">{k}</p>
                <p className="text-[12.5px] font-bold text-[#0B1F3A]">{t}</p>
                <p className="mx-auto mt-0.5 max-w-[150px] text-[12px] leading-snug text-[#5b6577]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TOPICS */}
      <section id="topics" className="bp-container pt-8 scroll-mt-28">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionHead title="Puppy Care Topics" sub="Explore each topic in more detail using the guides below." />
          <Link to="/sitemap" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#15803D] hover:underline">View All Puppy Care Guides <ArrowRight size={14} /></Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ArticleCard to="/puppy-care" img={IMG.sleepingSoft} alt="Beagle sleeping peacefully indoors" title="Sleeping & Rest" text="How much sleep, where they should sleep and tips for a calm night." />
          <ArticleCard to="/food-nutrition" img={IMG.steelBowl} alt="Beagle eating from a steel bowl" title="Feeding Your Puppy" text="What, how much and how often to feed." />
          <ArticleCard to="/training" img={IMG.gardenPuppy} alt="Beagle puppy in a sunny garden" title="Toilet Training" text="Practical tips for house training success." />
          <ArticleCard to="/training" img={IMG.ballMouth} alt="Dog playing with an orange ball" title="Socialisation" text="Help your puppy meet new people, dogs and experiences." />
          <ArticleCard to="/training" img={IMG.calmRest} alt="Beagle resting calmly" title="Crate Training" text="How to use a crate the right way." />
          <ArticleCard to="/training" img={IMG.treatReach} alt="Beagle reaching for a treat" title="Biting & Chewing" text="Why puppies bite and how to manage it." />
          <ArticleCard to="/health" img={IMG.restGrass} alt="Beagle resting on grass" title="Common Problems" text="Solutions for typical puppy challenges." />
          <ArticleCard to="/beagle-guide" img={IMG.scarfBlanket} alt="Beagle resting on a blanket" title="The Next Steps" text="From puppy to adult – what happens next." />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bp-container py-8">
        <div className="grid overflow-hidden rounded-[14px] bg-[#eef3e9] md:grid-cols-[auto_1fr_auto_220px] items-center gap-5 p-6">
          <span className="hidden h-[72px] w-[72px] items-center justify-center rounded-full bg-[#7d9b76] text-white md:inline-flex"><BookOpen size={32} strokeWidth={1.6} /></span>
          <div>
            <h2 className="text-[22px] font-semibold">Need a Simple Plan?</h2>
            <p className="mt-1 max-w-[520px] text-[13.5px] text-[#4c5668]">Our <Link to="/puppy-care" className="font-semibold text-[#15803D] underline">First 30 Days Guide</Link> brings everything together in one easy-to-follow plan, so you can feel confident from the moment your Beagle puppy comes home.</p>
          </div>
          <div><Btn to="/puppy-care">Open the 30-Day Guide</Btn></div>
          <div className="relative hidden min-h-[130px] overflow-hidden rounded-[10px] md:block">
            <img src={IMG.sleepingBone} alt="Beagle puppy sleeping with a bone and teddy" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#eef3e9] via-transparent to-transparent" />
            <HandNote className="absolute bottom-2 right-2 text-[19px] text-right">A happy start<br />to a lifetime<br />together.</HandNote>
          </div>
        </div>
        <div className="mt-2"><UnderlineFlourish /></div>
      </section>

      <TrustSection />
      <div className="pb-8" />
    </main>
  );
}

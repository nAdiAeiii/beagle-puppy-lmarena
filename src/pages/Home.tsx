import { Link } from "react-router-dom";
import {
  ArrowRight, PawPrint, Ruler, Dumbbell, GraduationCap, Brush, Bone, Heart, House,
  ChevronRight, Volume2, Unlink, Scissors, Package, Droplets, Wind, BadgeCheck,
  Ear, Scale, Stethoscope, ShieldCheck, Camera, ToyBrick, Sparkles,
} from "lucide-react";
import { IMG } from "../data/images";
import { Btn, HandNote, SectionHead, UnderlineFlourish } from "../components/ui";
import { JourneyCard, MiniRowCard } from "../components/cards";
import TrustSection from "../components/TrustSection";

/* ============ HOMEPAGE — master mockup ============ */
export default function Home() {
  return (
    <main>
      {/* ---------- 1. HERO ---------- */}
      <section className="relative overflow-hidden bg-[#F8F1E8]" aria-labelledby="hero-heading">
        <img
          src={IMG.heroPuppyFloor}
          alt="Beagle puppy lying on a rug with a chew toy in warm natural light"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="hero-gradient-left absolute inset-0" />
        <div className="bp-container relative py-10 md:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_1fr]">
            <div className="max-w-[560px]">
              <h1 id="hero-heading" className="text-[30px] md:text-[42px] font-semibold leading-[1.12]">
                Everything You Need to Raise a Happy, Healthy Beagle
              </h1>
              <p className="mt-3 max-w-[480px] text-[14px] md:text-[15px] leading-relaxed text-[#3F4B5F]">
                Practical, independent guidance for Beagle owners — from choosing your puppy and surviving
                the first few weeks to training, feeding, health, behaviour and lifelong care.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Btn to="/beagle-guide">Start With the Beagle Puppy Guide</Btn>
                <Btn to="/training" variant="outline">Explore Beagle Training</Btn>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-end gap-8">
              <div className="text-right -rotate-3">
                <HandNote className="text-[24px]">Curious dogs<br />Happier lives<br />Together ♡</HandNote>
                <div className="flex justify-end"><UnderlineFlourish /></div>
              </div>
              {/* Start-here card — Elementor: Container > Text + Icon List */}
              <nav aria-label="Start here" className="w-[218px] rounded-[10px] border border-white/60 bg-white/95 p-2 shadow-[0_10px_30px_rgba(11,31,58,0.12)] backdrop-blur">
                <p className="px-3 pt-2 pb-1 font-sans text-[13px] font-bold text-[#0B1F3A]">Start here</p>
                <ul className="pb-1">
                  {[
                    ["New to Beagles?", "/about-beagles"],
                    ["Puppy care essentials", "/puppy-care"],
                    ["Training tips", "/training"],
                    ["Feeding guidance", "/food-nutrition"],
                    ["Health & wellbeing", "/health"],
                    ["Grooming & gear", "/grooming-gear"],
                  ].map(([label, to]) => (
                    <li key={label}>
                      <Link to={to} className="group flex items-center justify-between rounded-[7px] px-3 py-[7px] text-[12.5px] font-medium text-[#2c3648] hover:bg-[#EDF6EF] hover:text-[#0B1F3A]">
                        {label}
                        <ChevronRight size={14} className="text-[#9aa3b2] group-hover:text-[#15803D] group-hover:translate-x-[1px] transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* Mobile start-here */}
        <div className="bp-container relative pb-6 lg:hidden">
          <nav aria-label="Start here" className="rounded-[10px] border border-[#e3d9c8] bg-white/95 p-2 shadow">
            <p className="px-3 pt-1 pb-1 font-sans text-[13px] font-bold text-[#0B1F3A]">Start here</p>
            <div className="grid grid-cols-2 gap-1 pb-1">
              {[
                ["New to Beagles?", "/about-beagles"],
                ["Puppy care essentials", "/puppy-care"],
                ["Training tips", "/training"],
                ["Feeding guidance", "/food-nutrition"],
                ["Health & wellbeing", "/health"],
                ["Grooming & gear", "/grooming-gear"],
              ].map(([label, to]) => (
                <Link key={label} to={to} className="flex items-center justify-between rounded-[7px] px-3 py-2 text-[12.5px] font-medium text-[#2c3648] hover:bg-[#EDF6EF]">
                  {label}<ChevronRight size={14} className="text-[#9aa3b2]" />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* ---------- 2. JOURNEY ---------- */}
      <section className="bp-container pt-8 md:pt-10" aria-labelledby="journey-heading">
        <h2 id="journey-heading" className="section-title">Where Are You in Your Beagle Journey?</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 md:gap-4">
          <JourneyCard to="/about-beagles" img={IMG.gardenPuppy} alt="Beagle puppy sitting in a sunny garden" title="Thinking About a Beagle?" text="Is a Beagle the right dog for you?" />
          <JourneyCard to="/puppy-care" img={IMG.fieldStand} alt="Beagle puppy standing on grass in a field" title="Bringing Home a Puppy" text="Your step-by-step guide to the early weeks." />
          <JourneyCard to="/training" img={IMG.autumnWalk} alt="Beagle puppy on a leash during an autumn walk" title="Training Your Beagle" text="Build good habits for a happier life together." />
          <JourneyCard to="/food-nutrition" img={IMG.steelBowl} alt="Beagle eating from a stainless steel bowl" title="Feeding Your Beagle" text="Simple, practical nutrition guidance." />
          <JourneyCard to="/health" img={IMG.vetCheck} alt="Veterinarian examining a dog at a check-up" title="Keeping Your Beagle Healthy" text="Know what to watch for and keep them well." />
          <JourneyCard to="/grooming-gear" img={IMG.calmRest} alt="Beagle resting calmly on soft fabric" title="Grooming & Essential Gear" text="Everyday care and kit that makes life easier." />
        </div>
      </section>

      {/* ---------- 3. COMPLETE GUIDE ---------- */}
      <section className="bp-container pt-8 md:pt-10" aria-labelledby="complete-heading">
        <div className="grid gap-5 overflow-hidden rounded-[14px] border border-[#e6e9e6] bg-white p-5 md:p-6 lg:grid-cols-[240px_1fr_190px] lg:gap-7">
          <div className="overflow-hidden rounded-[10px]">
            <img src={IMG.sleepingSoft} alt="Beagle puppy sleeping peacefully in soft indoor light" loading="lazy" className="h-[190px] w-full object-cover lg:h-full lg:min-h-[300px]" />
          </div>
          <div className="py-1">
            <h2 id="complete-heading" className="text-[22px] md:text-[26px] font-semibold">The Complete Beagle Puppy Guide</h2>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#5b6577]">
              Your go-to resource for everything you need to know about raising a Beagle puppy. From temperament
              and growth to training, feeding, health and daily life — all in one place.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-4">
              {[
                [PawPrint, "Temperament"], [Ruler, "Size & Growth"], [Dumbbell, "Exercise"], [GraduationCap, "Training"],
                [Brush, "Grooming"], [Bone, "Feeding"], [Heart, "Health"], [House, "Life With a Beagle"],
              ].map(([Icon, label]: any) => (
                <li key={label}>
                  <Link to="/beagle-guide" className="flex items-center gap-2 rounded-[8px] border border-[#e2e7e2] bg-[#fbfbf9] px-3 py-2.5 text-[12.5px] font-semibold text-[#0B1F3A] hover:border-[#15803D] hover:bg-[#EDF6EF] transition-colors">
                    <Icon size={15} className="shrink-0 text-[#8a6a45]" />{label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4"><Btn to="/beagle-guide">Read the Complete Beagle Guide</Btn></div>
          </div>
          <div className="relative hidden overflow-hidden rounded-[10px] lg:block">
            <img src={IMG.standingPark} alt="Beagle standing in a sunny park" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            <HandNote light className="absolute left-4 top-4 text-[22px] -rotate-2">Small hounds.<br />Big adventures.</HandNote>
          </div>
        </div>
      </section>

      {/* ---------- 4. FIRST 30 DAYS ---------- */}
      <section className="bp-container pt-8 md:pt-10" aria-labelledby="days-heading">
        <div className="grid overflow-hidden rounded-[14px] border border-[#e6e9e6] bg-white lg:grid-cols-[1.6fr_1fr]">
          <div className="p-5 md:p-7">
            <h2 id="days-heading" className="text-[22px] md:text-[26px] font-semibold">Your Beagle Puppy's First 30 Days</h2>
            <p className="mt-1 text-[13.5px] text-[#5b6577]">A simple week-by-week guide to help your puppy settle in, build good habits and feel at home.</p>
            <ol className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["1", "Day 1", "Settle in, create a calm space and start your routine."],
                ["2", "First Week", "Sleep, feeding, toilet routine and crate introduction."],
                ["3", "Weeks 2–4", "Build confidence, manage biting and start socialisation."],
                ["4", "First Month", "Stronger routines, basic training and setting up for success."],
              ].map(([n, t, d]) => (
                <li key={n} className="relative">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#e9d9be] font-sans text-[13px] font-bold text-[#7a5b36]">{n}</span>
                  <p className="mt-2 font-sans text-[13px] font-bold text-[#0B1F3A]">{t}</p>
                  <p className="mt-0.5 text-[12px] leading-snug text-[#5b6577]">{d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-5"><Btn to="/puppy-care">See the First 30 Days Guide</Btn></div>
          </div>
          <div className="relative min-h-[210px] lg:min-h-full">
            <img src={IMG.redBall} alt="Happy Beagle puppy playing outdoors with a red ball" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ---------- 5. TRAINING ---------- */}
      <section className="bp-container pt-8 md:pt-10" aria-labelledby="train-heading">
        <SectionHead title="Understand the Beagle Before You Try to Train One" sub="Beagles are intelligent, independent and scent-driven. Here are practical guides for the most common training challenges." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.65fr_1fr]">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <MiniRowCard to="/training" img={IMG.pinkLeash} alt="Beagle sitting on grass looking up" title="Recall" />
            <MiniRowCard to="/training" img={IMG.closeUpSun} alt="Close-up of a Beagle in sunlight" title="Barking" />
            <MiniRowCard to="/training" img={IMG.forestLeash} alt="Beagle on a leash in a forest" title="Leash Pulling" />
            <MiniRowCard to="/training" img={IMG.treatReach} alt="Beagle reaching for a treat" title="Biting" />
            <MiniRowCard to="/training" img={IMG.calmRest} alt="Beagle resting in a crate-like cosy space" title="Crate Training" />
            <MiniRowCard to="/training" img={IMG.gardenPuppy} alt="Beagle puppy in a sunny garden" title="Toilet Training" />
            <MiniRowCard to="/training" img={IMG.eatingDish} alt="Dog eating calmly from a dish" title="Separation" />
            <MiniRowCard to="/training" img={IMG.restGrass} alt="Beagle lying peacefully on grass" title="Scent-Driven Behaviour" />
          </div>
          <div className="relative min-h-[190px] overflow-hidden rounded-[12px] lg:min-h-full">
            <img src={IMG.doorwayGreen} alt="Beagle standing near a doorway with greenery" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f3ece1]/95 via-[#f3ece1]/55 to-transparent" />
            <div className="absolute left-5 top-1/2 max-w-[200px] -translate-y-1/2">
              <HandNote className="text-[23px]">A better understanding leads to a happier Beagle.</HandNote>
              <UnderlineFlourish />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 6. FEEDING ---------- */}
      <section className="bp-container pt-8 md:pt-10" aria-labelledby="feed-heading">
        <SectionHead title="Feeding a Beagle Without the Guesswork" sub="Practical advice on what, how much and when to feed your Beagle." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.65fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [IMG.steelBowl, "Beagle eating from a steel bowl", "Beagle Puppy Feeding", "Nutrition for healthy growth."],
              [IMG.kibbleBowl, "Stainless steel bowl filled with dry kibble", "Best Food for Beagles", "Find the right food for their needs."],
              [IMG.lawnStand, "Beagle standing on green grass", "Weight & Portion Guide", "Keep your Beagle at a healthy weight."],
            ].map(([img, a, t, d]) => (
              <Link key={t as string} to="/food-nutrition" className="card card-hover group block">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={img as string} alt={a as string} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="p-3.5">
                  <h3 className="font-sans text-[13.5px] font-bold text-[#0B1F3A]">{t}</h3>
                  <p className="mt-0.5 text-[12px] text-[#5b6577]">{d}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="relative min-h-[190px] overflow-hidden rounded-[12px]">
            <img src={IMG.pawsTreats} alt="Beagle patiently holding treats on its paws" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#eef4e4]/95 via-[#eef4e4]/50 to-transparent" />
            <div className="absolute left-5 top-1/2 max-w-[170px] -translate-y-1/2">
              <HandNote className="text-[22px]">Good food fuels great adventures.</HandNote>
              <UnderlineFlourish />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 7. HEALTH ---------- */}
      <section className="bp-container pt-8 md:pt-10" aria-labelledby="health-heading">
        <SectionHead title="Know What to Watch For" sub="Stay informed about common health concerns and keep your Beagle well throughout their life." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.65fr_1fr]">
          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {[
                [Stethoscope, "Common Health Concerns"],
                [ShieldCheck, "Preventive Care"],
                [Ear, "Ear Care"],
                [Scale, "Weight Management"],
                [BadgeCheck, "Vet Visits"],
              ].map(([Icon, label]: any) => (
                <Link key={label} to="/health" className="card card-hover flex flex-col items-center gap-2 p-4 text-center">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#EDF6EF] text-[#15803D]">
                    <Icon size={20} />
                  </span>
                  <span className="font-sans text-[12px] font-bold leading-tight text-[#0B1F3A]">{label}</span>
                </Link>
              ))}
            </div>
            <p className="mt-3 text-[11.5px] italic text-[#7b8494]">Health information is educational and does not replace advice from your veterinarian.</p>
          </div>
          <div className="relative min-h-[190px] overflow-hidden rounded-[12px]">
            <img src={IMG.parkPuppy} alt="Beagle puppy sitting on lush green grass in a park" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/35 to-transparent" />
            <div className="absolute right-5 top-1/2 max-w-[150px] -translate-y-1/2 text-right">
              <HandNote light className="text-[22px]">Healthy Beagles, Happier Tomorrows</HandNote>
              <div className="flex justify-end"><UnderlineFlourish light /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 8. ESSENTIALS ---------- */}
      <section className="bp-container pt-8 md:pt-10" aria-labelledby="gear-heading">
        <SectionHead title="Beagle Essentials That Solve Real Problems" sub="Carefully chosen essentials to make everyday life with your Beagle easier." />
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.65fr_1fr]">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {[
              [Unlink, "Harnesses"],
              [Package, "Crates"],
              [House, "Beds"],
              [ToyBrick, "Chew Toys"],
              [Bone, "Training Gear"],
              [Brush, "Grooming Tools"],
              [Camera, "Safety & GPS"],
            ].map(([Icon, label]: any) => (
              <Link key={label} to="/grooming-gear" className="card card-hover flex flex-col items-center gap-2 p-3.5 text-center">
                <Icon size={26} className="text-[#0B1F3A]" strokeWidth={1.6} />
                <span className="font-sans text-[11.5px] font-bold leading-tight text-[#0B1F3A]">{label}</span>
              </Link>
            ))}
          </div>
          <div className="relative hidden min-h-[150px] overflow-hidden rounded-[12px] lg:block">
            <img src={IMG.autumnHighfive} alt="Beagle puppy giving a high five to its owner" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ---------- 9. ARTICLE STRIP ---------- */}
      <section className="bp-container pt-8 md:pt-10" aria-labelledby="guides-heading">
        <SectionHead title="Essential Beagle Guides" sub="In-depth articles to help you give your Beagle the best possible life." />
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 md:gap-4">
          {[
            [IMG.puppyClose, "Beagle portrait", "Beagle Temperament", "A friendly, curious companion."],
            [IMG.soccerBall, "Dog playing with a ball", "Exercise Needs", "How much is enough?"],
            [IMG.ballMouth, "Dog with a ball in its mouth", "Do Beagles Get Along With Other Dogs?", "Tips for successful introductions."],
            [IMG.closeUpSun, "Beagle close-up in sunlight", "Beagle Life Expectancy", "What to expect."],
            [IMG.girlBeagle, "Girl with her Beagle outdoors", "Are Beagles Good With Children?", "A guide for families."],
            [IMG.womanBed, "Owner relaxing with Beagle puppy", "Living With a Beagle", "The highs, the challenges and everything in between."],
          ].map(([img, a, t, d]) => (
            <Link key={t as string} to="/beagle-guide" className="group block">
              <span className="block aspect-[4/3] overflow-hidden rounded-[10px] border border-[#e2e7e2]">
                <img src={img as string} alt={a as string} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
              </span>
              <span className="mt-2 block font-sans text-[12.5px] font-bold leading-tight text-[#0B1F3A] group-hover:text-[#15803D]">{t}</span>
              <span className="block text-[11.5px] leading-snug text-[#7b8494]">{d}</span>
            </Link>
          ))}
        </div>
      </section>

      <TrustSection />

      {/* Home bottom CTA to hubs */}
      <section className="bp-container pb-10" aria-label="Explore guides">
        <div className="flex flex-wrap items-center gap-2.5 rounded-[12px] border border-[#e6e9e6] bg-[#EDF6EF] p-5">
          <Sparkles size={18} className="text-[#15803D]" />
          <p className="text-[13.5px] font-semibold text-[#0B1F3A]">Not sure where to begin?</p>
          <div className="ml-auto flex flex-wrap gap-2.5">
            <Link to="/puppy-care" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#15803D] hover:underline">First 30 Days <ArrowRight size={14} /></Link>
            <span className="text-[#b9c4b9]">•</span>
            <Link to="/about-beagles" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#15803D] hover:underline">Is a Beagle right for you? <ArrowRight size={14} /></Link>
            <span className="text-[#b9c4b9]">•</span>
            <Link to="/training" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#15803D] hover:underline">Training basics <ArrowRight size={14} /></Link>
          </div>
          <div className="hidden"><Volume2 size={1} /><Droplets size={1} /><Wind size={1} /><Scissors size={1} /></div>
        </div>
      </section>
    </main>
  );
}

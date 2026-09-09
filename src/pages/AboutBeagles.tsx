import { Link } from "react-router-dom";
import {
  PawPrint, Heart, Compass, House, Medal, Camera, Tag, BadgeCheck, MapPin, ArrowRight,
  Weight, Ruler, Star, Quote, Plus,
} from "lucide-react";
import { IMG } from "../data/images";
import HubHero, { HubSubnav } from "../components/HubHero";
import { Btn, Eyebrow, HandNote, SectionHead, UnderlineFlourish } from "../components/ui";
import TrustSection from "../components/TrustSection";

export default function AboutBeagles() {
  return (
    <main>
      <HubHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About Beagles" }]}
        title={<>About the Beagle</>}
        intro="Discover the history, personality and unique qualities that make Beagles one of the world's most loved dogs."
        points={[
          { icon: <PawPrint size={26} strokeWidth={1.7} />, text: "A rich history" },
          { icon: <Heart size={26} strokeWidth={1.7} />, text: "A loving companion" },
          { icon: <Compass size={26} strokeWidth={1.7} />, text: "A true adventurer" },
          { icon: <PawPrint size={26} strokeWidth={1.7} />, text: "A perfect family dog" },
        ]}
        image={IMG.heroHome}
        imageAlt="Beagle enjoying a sunny day outdoors"
        handNote={<>Small dog.<br />Big personality. ♡</>}
      />
      <HubSubnav
        items={[
          { icon: <House size={22} />, label: "Overview", to: "#overview" },
          { icon: <Medal size={22} />, label: "History", to: "#love" },
          { icon: <Heart size={22} />, label: "Temperament", to: "#love" },
          { icon: <Camera size={22} />, label: "Appearance", to: "#right" },
          { icon: <Tag size={22} />, label: "Size & Lifespan", to: "#faq" },
          { icon: <BadgeCheck size={22} />, label: "Is a Beagle Right for You?", to: "#right" },
          { icon: <MapPin size={22} />, label: "Fun Facts", to: "#faq" },
        ]}
      />

      <section id="overview" className="bp-container grid gap-6 pt-8 lg:grid-cols-[1.5fr_0.9fr_0.85fr] scroll-mt-28">
        <div>
          <Eyebrow>A timeless favourite</Eyebrow>
          <h2 className="mt-1 text-[26px] md:text-[32px] font-semibold leading-tight">A Beagle for Every<br />Kind of Life</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#4c5668]">
            Beagles are friendly, curious and full of character. With their expressive eyes, wagging tails and
            cheerful nature, they have been winning hearts for centuries.
          </p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#4c5668]">
            Whether you're looking for a <strong>playful family pet</strong>, an adventurous walking companion or a
            loyal friend, the Beagle's unique personality makes them a wonderful addition to many homes.
          </p>
          <div className="mt-5"><Btn to="/beagle-guide">Learn More About Beagles</Btn></div>
        </div>
        <div className="relative overflow-hidden rounded-[12px]">
          <img src={IMG.gardenPuppy} alt="Beagle puppy standing in a sunny garden" loading="lazy" className="h-[300px] w-full object-cover lg:h-full lg:min-h-[380px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-right">
            <HandNote light className="text-[21px] -rotate-2">Curious.<br />Friendly.<br />Unforgettable.</HandNote>
            <div className="flex justify-end"><UnderlineFlourish light /></div>
          </div>
        </div>
        <aside className="h-fit rounded-[12px] bg-[#f3f6f0] p-5" aria-label="Beagle at a glance">
          <h3 className="font-serif text-[19px] font-semibold text-[#0B1F3A]">Beagle at a Glance</h3>
          <ul className="mt-3 space-y-3.5">
            {[
              [PawPrint, "Breed group", "Hound"],
              [Ruler, "Height", "33 – 40 cm"],
              [Weight, "Weight", "9 – 14 kg"],
              [Heart, "Lifespan", "12 – 15 years"],
              [Star, "Temperament", "Friendly, curious, gentle"],
              [House, "Great for", "Families, active individuals, first-time dog owners"],
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

      {/* WHY PEOPLE LOVE */}
      <section id="love" className="bp-container pt-8 scroll-mt-28">
        <div className="rounded-[14px] bg-[#faf5ec] p-6 md:p-7">
          <h2 className="text-[22px] md:text-[24px] font-semibold">Why People Love Beagles</h2>
          <p className="mt-1 text-[13.5px] text-[#5b6577]">Beagles have a special charm that makes them one of the most popular dog breeds in the world.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [IMG.stickPlay, "Friendly & Sociable", "Beagles love people and get along well with other dogs."],
              [IMG.restGrass, "Curious & Intelligent", "Their incredible sense of smell and curiosity keep life interesting."],
              [IMG.sleepingCouch, "Playful & Energetic", "Always ready for a game or an outdoor adventure."],
              [IMG.girlBeagle, "Loyal Companions", "Beagles form strong bonds and make wonderful family pets."],
            ].map(([img, t, d]) => (
              <article key={t as string} className="card overflow-hidden">
                <span className="block aspect-[16/10] overflow-hidden"><img src={img as string} alt={t as string} loading="lazy" className="h-full w-full object-cover" /></span>
                <span className="block p-4"><span className="block text-[14px] font-bold text-[#0B1F3A]">{t}</span>
                <span className="mt-0.5 block text-[12.5px] text-[#5b6577]">{d}</span></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADVENTURE + RIGHT FOR YOU */}
      <section id="right" className="bp-container grid gap-5 pt-6 lg:grid-cols-[1.5fr_1fr] scroll-mt-28">
        <div className="relative min-h-[230px] overflow-hidden rounded-[14px]">
          <img src={IMG.rocksWater} alt="Beagle sitting on rocks near water" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-3">
            <HandNote light className="text-[24px] [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">Adventure<br />suits them.</HandNote>
            <UnderlineFlourish light />
          </div>
        </div>
        <aside className="rounded-[14px] bg-[#eef3e9] p-6">
          <h2 className="text-[21px] font-semibold">Is a Beagle Right for You?</h2>
          <p className="mt-1.5 text-[13px] leading-relaxed text-[#4c5668]">
            Beagles are loving and fun, but they also have their own unique needs. Learn more about their
            temperament, exercise requirements and whether a Beagle fits your lifestyle.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Btn to="/beagle-guide" size="sm">Find Out if a Beagle Is Right for You</Btn>
            <PawPrint size={30} className="text-[#15803D]" />
          </div>
        </aside>
      </section>

      {/* FAQ + QUOTE + RELATED */}
      <section id="faq" className="bp-container grid gap-5 pt-6 lg:grid-cols-[1.2fr_0.9fr_1fr] scroll-mt-28">
        <div>
          <SectionHead title="Frequently Asked Questions" sub="Quick answers to common questions about Beagles." />
          <ul className="mt-3 space-y-2">
            {["Are Beagles good family dogs?", "Do Beagles bark a lot?", "How much exercise do Beagles need?", "Are Beagles easy to train?", "Do Beagles get along with other pets?", "What is the average lifespan of a Beagle?"].map((q) => (
              <li key={q}>
                <details className="faq-item card">
                  <summary className="flex cursor-pointer list-none items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-[#0B1F3A]">
                    <span className="inline-flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full border border-[#15803D] text-[#15803D]"><Plus size={12} /></span>
                    {q}
                  </summary>
                  <p className="border-t border-[#eef1ee] px-4 py-3 pl-[48px] text-[12.5px] text-[#5b6577]">See our Complete Beagle Guide for a full, practical answer.</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
        <figure className="flex flex-col items-center justify-center rounded-[14px] bg-[#eef3e9] p-6 text-center">
          <Quote size={28} className="text-[#15803D]" />
          <blockquote className="mt-3 font-serif text-[19px] italic leading-snug text-[#0B1F3A]">
            “Beagles may be small in size, but they bring a huge amount of love, joy and adventure into your life.”
          </blockquote>
          <UnderlineFlourish />
          <PawPrint size={22} className="mt-2 text-[#15803D]" />
        </figure>
        <div>
          <h2 className="text-[20px] font-semibold">Related Guides</h2>
          <p className="text-[13px] text-[#5b6577]">Explore more helpful resources for Beagle owners.</p>
          <ul className="mt-3 space-y-2.5">
            {[
              [IMG.autumnHighfive, "Beagle Training for Beginners", "/training"],
              [IMG.steelBowl, "Feeding Your Beagle", "/food-nutrition"],
              [IMG.vetCheck, "Beagle Health Guide", "/health"],
              [IMG.brushHome, "Grooming & Essential Gear", "/grooming-gear"],
            ].map(([img, t, to]) => (
              <li key={t as string}>
                <Link to={to as string} className="card card-hover flex items-center gap-3 p-2 pr-4">
                  <img src={img as string} alt="" loading="lazy" className="h-[48px] w-[64px] rounded-[7px] object-cover" />
                  <span className="flex-1 text-[13px] font-bold text-[#0B1F3A]">{t}</span>
                  <ArrowRight size={16} className="text-[#15803D]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="bp-container py-6">
        <div className="flex flex-wrap items-center gap-4 rounded-[14px] bg-[#eef3e9] p-5 md:p-6">
          <span className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#7d9b76] text-white"><Heart size={28} /></span>
          <div className="min-w-[220px] flex-1">
            <h2 className="text-[20px] font-semibold">A Lifetime of Adventures</h2>
            <p className="text-[13px] text-[#4c5668]">With the right care, training and a little extra love, your Beagle can be a happy and healthy companion for many years to come.</p>
          </div>
          <Btn to="/beagle-guide">Explore All Beagle Guides</Btn>
          <HandNote className="hidden text-[19px] xl:block">Happy Beagles<br />Happier People. ♡</HandNote>
        </div>
      </section>

      <TrustSection />
      <div className="pb-8" />
    </main>
  );
}

import { Link } from "react-router-dom";
import {
  PawPrint, Heart, Crosshair, House, GraduationCap, Dog, Megaphone, Brush, LayoutGrid,
  Container, Clock, Star, Bone, ArrowRight,
} from "lucide-react";
import { IMG } from "../data/images";
import HubHero, { HubSubnav } from "../components/HubHero";
import { Btn, Eyebrow, HandNote, SectionHead, UnderlineFlourish } from "../components/ui";
import { ArticleCard } from "../components/cards";
import TrustSection from "../components/TrustSection";

export default function Training() {
  return (
    <main>
      <HubHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Training" }]}
        title={<>Beagle Training<br />& Behaviour</>}
        intro="Practical, positive and realistic training advice for a happy, well-behaved Beagle."
        points={[
          { icon: <PawPrint size={26} strokeWidth={1.7} />, text: "Understand the Beagle mindset" },
          { icon: <Heart size={26} strokeWidth={1.7} />, text: "Build good habits early" },
          { icon: <Crosshair size={26} strokeWidth={1.7} />, text: "Real solutions for real-life challenges" },
        ]}
        image={IMG.treatReach}
        imageAlt="Beagle looking up at a treat during training"
        handNote={<>Train with<br />kindness.<br />Enjoy the journey.</>}
      />
      <HubSubnav
        items={[
          { icon: <House size={22} />, label: "Overview", to: "#overview" },
          { icon: <GraduationCap size={22} />, label: "Basic Commands", to: "#goals" },
          { icon: <Dog size={22} />, label: "Recall", to: "#goals" },
          { icon: <Megaphone size={22} />, label: "Barking", to: "#goals" },
          { icon: <Brush size={22} />, label: "Leash Training", to: "#goals" },
          { icon: <LayoutGrid size={22} />, label: "Crate Training", to: "#goals" },
          { icon: <Container size={22} />, label: "Toilet Training", to: "#goals" },
          { icon: <Heart size={22} />, label: "Behaviour Issues", to: "#featured" },
        ]}
      />

      <section id="overview" className="bp-container grid gap-6 pt-8 lg:grid-cols-[1.5fr_0.9fr_0.85fr] scroll-mt-28">
        <div>
          <Eyebrow>A smarter approach</Eyebrow>
          <h2 className="mt-1 text-[26px] md:text-[32px] font-semibold leading-tight">Understand Your Beagle.<br />Train for Real Life.</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#4c5668]">
            Beagles are intelligent, independent and scent-driven — which makes them wonderful companions, but also
            a unique training challenge.
          </p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#4c5668]">
            This section gives you clear, step-by-step guidance on how to train your Beagle using positive,
            reward-based methods that work with their <em>natural</em> instincts, not against them.
          </p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#4c5668]">
            Whether you're teaching basic commands, dealing with barking or working on recall, you'll find
            practical advice you can trust.
          </p>
          <div className="mt-5"><Btn to="/training">Explore Training Guides</Btn></div>
        </div>
        <div className="relative overflow-hidden rounded-[12px]">
          <img src={IMG.redBall} alt="Beagle puppy playing outdoors" loading="lazy" className="h-[300px] w-full object-cover lg:h-full lg:min-h-[380px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <HandNote light className="text-[21px] -rotate-2">Good behaviour<br />leads to bigger<br />adventures.</HandNote>
            <UnderlineFlourish light />
          </div>
        </div>
        <aside className="h-fit rounded-[12px] bg-[#f3f6f0] p-5" aria-label="Training at a glance">
          <h3 className="font-serif text-[19px] font-semibold text-[#0B1F3A]">Training at a Glance</h3>
          <ul className="mt-3 space-y-3.5">
            {[
              [Clock, "Start early", "Puppies can begin basic training from 8 weeks"],
              [Star, "Be consistent", "Use the same cues and rules"],
              [Bone, "Keep it positive", "Reward good behaviour"],
              [PawPrint, "Short training sessions", "5–10 minutes at a time"],
              [Heart, "Be patient", "Beagles learn, but at their own pace"],
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

      {/* GOALS */}
      <section id="goals" className="bp-container pt-8 scroll-mt-28">
        <div className="rounded-[14px] bg-[#faf5ec] p-6 md:p-7">
          <h2 className="text-[22px] md:text-[24px] font-semibold">Common Training Goals</h2>
          <p className="mt-1 text-[13.5px] text-[#5b6577]">Quick links to the most popular training topics for Beagle owners.</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              [IMG.autumnHighfive, "Basic Commands", "Sit, stay, come and more"],
              [IMG.pinkLeash, "Recall Training", "Come back, even with distractions"],
              [IMG.closeUpSun, "Barking", "Why they bark and how to manage it"],
              [IMG.forestLeash, "Leash Training", "Enjoy calmer walks"],
              [IMG.calmRest, "Crate Training", "Create a safe, happy space"],
              [IMG.scarfBlanket, "Behaviour Issues", "Biting, chewing, jumping and more"],
            ].map(([img, t, d]) => (
              <Link key={t as string} to="/training" className="card card-hover group block">
                <span className="block aspect-[4/3] overflow-hidden"><img src={img as string} alt={t as string} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" /></span>
                <span className="block p-3"><span className="block text-[12.5px] font-bold text-[#0B1F3A]">{t}</span>
                <span className="block text-[11.5px] text-[#7b8494]">{d}</span>
                <span className="mt-2 block text-[#15803D]"><ArrowRight size={15} /></span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MINDSET */}
      <section className="bp-container pt-6">
        <div className="grid overflow-hidden rounded-[14px] bg-[#eef3e9] md:grid-cols-2">
          <div className="relative min-h-[220px]">
            <img src={IMG.restGrass} alt="Beagle sniffing grass on a walk" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#eef3e9]" />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 -rotate-3">
              <HandNote className="text-[23px]">Follow<br />their nose,<br />not the trouble.</HandNote>
              <UnderlineFlourish />
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h2 className="text-[22px] md:text-[24px] font-semibold">The Beagle Mindset</h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#4c5668]">
              Beagles are scent hounds. Their incredible sense of smell is a gift — but it also means they can be
              easily distracted. Understanding how their brain works is the key to successful training.
            </p>
            <div className="mt-4"><Btn to="/about-beagles">Learn About Beagle Behaviour</Btn></div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="bp-container pt-8 scroll-mt-28">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionHead title="Featured Training Guides" sub="In-depth guides to help you with the most common training challenges." />
          <Link to="/sitemap" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#15803D] hover:underline">View All Training Articles <ArrowRight size={14} /></Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ArticleCard to="/training" img={IMG.treatReach} alt="Beagle taking a treat during training" title="How to Train a Beagle Puppy" text="A complete step-by-step guide for beginners." linkLabel="Read Article" />
          <ArticleCard to="/training" img={IMG.closeUpSun} alt="Beagle looking up outdoors" title="Stop Excessive Barking" text="Practical solutions that work." linkLabel="Read Article" />
          <ArticleCard to="/training" img={IMG.pinkLeash} alt="Beagle sitting on grass looking up" title="Recall Training for Beagles" text="Get them to come back, even off-leash." linkLabel="Read Article" />
          <ArticleCard to="/training" img={IMG.forestLeash} alt="Beagle on a leash in the forest" title="Leash Training Made Easy" text="From pulling to relaxed walks." linkLabel="Read Article" />
        </div>
      </section>

      <TrustSection />
      <div className="pb-8" />
    </main>
  );
}

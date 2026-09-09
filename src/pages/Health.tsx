import { Link } from "react-router-dom";
import {
  Heart, PawPrint, ShieldCheck, Stethoscope, Syringe, CalendarCheck, Scale, HeartHandshake,
  Weight, TriangleAlert, ArrowRight,
} from "lucide-react";
import { IMG } from "../data/images";
import HubHero, { HubSubnav } from "../components/HubHero";
import { Btn, Eyebrow, HandNote, SectionHead, UnderlineFlourish } from "../components/ui";
import { ArticleCard, CheckItem } from "../components/cards";
import TrustSection from "../components/TrustSection";

export default function Health() {
  return (
    <main>
      <HubHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Health" }]}
        title={<>Beagle Health</>}
        intro="Expert advice to help your Beagle live a long, healthy and happy life."
        points={[
          { icon: <Heart size={26} strokeWidth={1.7} />, text: "Prevent problems early" },
          { icon: <PawPrint size={26} strokeWidth={1.7} />, text: "Know the signs to look for" },
          { icon: <ShieldCheck size={26} strokeWidth={1.7} />, text: "Practical, trusted health advice" },
        ]}
        image={IMG.sleepingSoft}
        imageAlt="Beagle resting peacefully"
        handNote={<>Healthy Beagles<br />happier lives.</>}
      />
      <HubSubnav
        items={[
          { icon: <Stethoscope size={22} />, label: "Overview", to: "#overview" },
          { icon: <Syringe size={22} />, label: "Common Health Issues", to: "#issues" },
          { icon: <Heart size={22} />, label: "Preventive Care", to: "#preventive" },
          { icon: <Syringe size={22} />, label: "Vaccinations", to: "#preventive" },
          { icon: <CalendarCheck size={22} />, label: "Regular Check-ups", to: "#preventive" },
          { icon: <Scale size={22} />, label: "Weight & Fitness", to: "#articles" },
          { icon: <HeartHandshake size={22} />, label: "Senior Care", to: "#articles" },
        ]}
      />

      <section id="overview" className="bp-container grid gap-6 pt-8 lg:grid-cols-[1.5fr_0.9fr_0.85fr] scroll-mt-28">
        <div>
          <Eyebrow>A healthy Beagle for a brighter tomorrow</Eyebrow>
          <h2 className="mt-1 text-[26px] md:text-[32px] font-semibold leading-tight">Proactive Care<br />for a Longer, Happier Life</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#4c5668]">
            Beagles are generally healthy, hardy dogs, but like all breeds they can be prone to certain health
            conditions. With the right care, regular check-ups and a healthy lifestyle, most Beagles live long,
            active and fulfilling lives.
          </p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#4c5668]">
            This section gives you clear, practical guidance on how to keep your Beagle healthy at every stage —
            from playful puppy to happy senior.
          </p>
          <div className="mt-5"><Btn to="/health">Explore Beagle Health Guides</Btn></div>
        </div>
        <div className="relative overflow-hidden rounded-[12px]">
          <img src={IMG.parkPuppy} alt="Beagle puppy standing on grass" loading="lazy" className="h-[300px] w-full object-cover lg:h-full lg:min-h-[380px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-right">
            <HandNote light className="text-[21px] -rotate-2">Good health<br />today means<br />more adventures<br />tomorrow.</HandNote>
            <div className="flex justify-end"><UnderlineFlourish light /></div>
          </div>
        </div>
        <aside className="h-fit rounded-[12px] bg-[#f3f6f0] p-5" aria-label="Key health facts">
          <h3 className="font-serif text-[19px] font-semibold text-[#0B1F3A]">Key Health Facts</h3>
          <ul className="mt-3 space-y-3.5">
            {[
              [PawPrint, "Typical lifespan", "12 – 15 years"],
              [Weight, "Healthy weight", "9 – 14 kg"],
              [Heart, "Common issues", "Ear infections, hip dysplasia, epilepsy, eye conditions"],
              [Syringe, "Core vaccinations", "Distemper, parvovirus, adenovirus, rabies (as advised)"],
              [Stethoscope, "Regular vet check-ups", "At least once a year (more for seniors)"],
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

      {/* ISSUES */}
      <section id="issues" className="bp-container pt-8 scroll-mt-28">
        <div className="rounded-[14px] bg-[#faf5ec] p-6 md:p-7">
          <h2 className="text-[22px] md:text-[24px] font-semibold">Common Health Issues in Beagles</h2>
          <p className="mt-1 text-[13.5px] text-[#5b6577]">Learn about the most common health conditions, what to look for and how to manage them.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <ArticleCard to="/health" img={IMG.sleepingCouch} alt="Beagle resting" title="Ear Infections" text="Why they're common and how to prevent them." />
            <ArticleCard to="/health" img={IMG.fieldStand} alt="Beagle standing in field" title="Hip Dysplasia" text="What it is, the signs to watch for and treatment options." />
            <ArticleCard to="/health" img={IMG.closeUpSun} alt="Close-up of Beagle eye area" title="Eye Conditions" text="Common eye problems in Beagles and how to keep their eyes healthy." />
            <ArticleCard to="/health" img={IMG.calmRest} alt="Beagle resting calmly" title="Epilepsy" text="Understanding seizures and how they are managed." />
            <ArticleCard to="/health" img={IMG.gardenPuppy} alt="Beagle puppy in garden" title="Other Health Issues" text="Thyroid problems, allergies and more." />
          </div>
        </div>
      </section>

      {/* PREVENTIVE + LIFE STAGE + VET */}
      <section id="preventive" className="bp-container grid gap-5 pt-6 lg:grid-cols-3 scroll-mt-28">
        <div className="rounded-[14px] border border-[#e6e9e6] bg-white p-6">
          <h2 className="text-[20px] font-semibold">Preventive Care</h2>
          <p className="text-[13px] text-[#5b6577]">Simple steps that make a big difference.</p>
          <ul className="mt-4 space-y-2.5">
            {["Balanced diet and healthy weight", "Regular exercise", "Up-to-date vaccinations", "Flea, tick and worm control", "Regular vet check-ups", "Dental care", "Keep an eye on behaviour and appetite"].map((t) => (
              <CheckItem key={t} text={t} />
            ))}
          </ul>
          <div className="relative mt-4 overflow-hidden rounded-[10px]">
            <img src={IMG.redBall} alt="Happy Beagle puppy playing" loading="lazy" className="h-[150px] w-full object-cover" />
            <HandNote className="absolute bottom-2 right-3 text-[19px] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">Small steps<br />today. A healthier<br />tomorrow.</HandNote>
          </div>
        </div>
        <div className="rounded-[14px] border border-[#e6e9e6] bg-white p-6">
          <h2 className="text-[20px] font-semibold">Health by Life Stage</h2>
          <p className="text-[13px] text-[#5b6577]">Every stage has different needs.</p>
          <ul className="mt-4 space-y-4">
            {[
              [IMG.sleepingBone, "Puppy Health", "Key vaccinations and early care."],
              [IMG.restGrass, "Adult Health", "Keeping your Beagle in top condition."],
              [IMG.calmRest, "Senior Health", "Extra care for their golden years."],
            ].map(([img, t, d]) => (
              <li key={t as string} className="flex items-center gap-3">
                <img src={img as string} alt="" loading="lazy" className="h-[52px] w-[52px] rounded-[8px] object-cover" />
                <div className="flex-1">
                  <p className="text-[13.5px] font-bold text-[#0B1F3A]">{t}</p>
                  <p className="text-[12px] text-[#5b6577]">{d}</p>
                </div>
                <Link to="/health" className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#15803D]">Read Guide <ArrowRight size={13} /></Link>
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-[14px] bg-[#e7f0e4] p-6" aria-label="When to see a vet">
          <h2 className="text-[20px] font-semibold">When to See a Vet</h2>
          <p className="text-[13px] text-[#5b6577]">Get professional advice if you notice:</p>
          <ul className="mt-3 space-y-2">
            {["Loss of appetite or weight", "Persistent vomiting or diarrhoea", "Limping or difficulty moving", "Changes in behaviour", "Excessive scratching or ear problems", "Frequent seizures", "Anything that doesn't seem right"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-[12.5px] text-[#3F4B5F]">
                <TriangleAlert size={15} className="mt-[2px] shrink-0 text-[#15803D]" />{t}
              </li>
            ))}
          </ul>
          <div className="mt-4"><Btn to="/health" size="sm">Read Our Vet Checklist</Btn></div>
        </aside>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="bp-container pt-8 scroll-mt-28">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionHead title="Featured Health Articles" sub="In-depth guides to help you keep your Beagle healthy." />
          <Link to="/sitemap" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#15803D] hover:underline">View All Health Articles <ArrowRight size={14} /></Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ArticleCard to="/health" img={IMG.vetCheck} alt="Vet examining a dog" title="Complete Beagle Health Check Guide" text="What to expect at the vet and how to prepare." linkLabel="Read Article" />
          <ArticleCard to="/health" img={IMG.sleepingCouch} alt="Beagle resting on couch" title="Beagle Dental Care" text="How to keep your Beagle's teeth clean and healthy." linkLabel="Read Article" />
          <ArticleCard to="/health" img={IMG.fieldStand} alt="Beagle standing in a field" title="Keeping Your Beagle at a Healthy Weight" text="Tips, feeding advice and exercise guidelines." linkLabel="Read Article" />
          <ArticleCard to="/health" img={IMG.calmRest} alt="Senior Beagle resting" title="Caring for a Senior Beagle" text="How to support your Beagle in their later years." linkLabel="Read Article" />
        </div>
        <p className="mt-3 text-[11.5px] italic text-[#7b8494]">Health information is educational and does not replace advice from your veterinarian.</p>
      </section>

      {/* BOTTOM BANNER */}
      <section className="bp-container py-6">
        <div className="flex flex-wrap items-center gap-4 rounded-[14px] bg-[#e7f0e4] p-5 md:p-6">
          <span className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#7d9b76] text-white"><PawPrint size={28} /></span>
          <div className="min-w-[220px] flex-1">
            <h2 className="text-[20px] font-semibold">A Happier, Healthier Beagle</h2>
            <p className="text-[13px] text-[#4c5668]">With the right care, knowledge and a little extra love, your Beagle can enjoy a long and happy life by your side.</p>
          </div>
          <Btn to="/health">Explore All Health Guides</Btn>
          <HandNote className="hidden text-[19px] xl:block">Healthy dogs.<br />Brighter tomorrows.</HandNote>
        </div>
      </section>

      <TrustSection />
      <div className="pb-8" />
    </main>
  );
}

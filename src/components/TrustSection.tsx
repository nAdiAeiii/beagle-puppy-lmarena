import { Link } from "react-router-dom";
import { IMG } from "../data/images";
import { HandNote, UnderlineFlourish } from "./ui";

/* Trust Block — Elementor: Container > (Heading + Text + Buttons) + Image */
export default function TrustSection() {
  return (
    <section className="bp-container py-10 md:py-12" aria-labelledby="trust-heading">
      <div className="overflow-hidden rounded-[14px] border border-[#e6e9e6] bg-white">
        <div className="grid md:grid-cols-[1.5fr_1fr]">
          <div className="p-6 md:p-9">
            <h2 id="trust-heading" className="text-[22px] md:text-[26px] font-semibold">
              Independent Guidance for Beagle Owners
            </h2>
            <p className="mt-2 max-w-[620px] text-[13.5px] leading-relaxed text-[#5b6577]">
              Beagle-Puppy.com is an independent resource for current and future Beagle owners. Our goal is to
              provide clear, practical and trustworthy guidance to help you give your Beagle a happy, healthy life.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {[
                { label: "About Us", to: "/about" },
                { label: "Editorial Policy", to: "/editorial-policy" },
                { label: "How We Recommend Products", to: "/how-we-recommend" },
              ].map((b) => (
                <Link
                  key={b.label}
                  to={b.to}
                  className="inline-flex items-center rounded-[7px] border border-[#d3d9d3] bg-white px-4 py-2 text-[12.5px] font-semibold text-[#0B1F3A] hover:border-[#0B1F3A] transition-colors"
                >
                  {b.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative min-h-[190px] md:min-h-full">
            <img
              src={IMG.rocksWater}
              alt="Beagle sitting on rocks beside calm water at sunset"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/15 to-transparent" />
            <div className="absolute right-4 top-4 md:right-6 md:top-6 text-right">
              <HandNote light className="text-[21px] md:text-[23px]">
                Same
                <br />
                Curious Spirit
                <br />A Brighter
                <br />
                Tomorrow
              </HandNote>
              <div className="flex justify-end"><UnderlineFlourish light /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

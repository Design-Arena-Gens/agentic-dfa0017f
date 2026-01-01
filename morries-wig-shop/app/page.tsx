"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const heroImage =
  "https://iili.io/fT6gj29.png";

const wigsOfTheWeek = [
  {
    name: "Studio 54 Shimmer",
    description: "Champagne blonde waves with hand-tied volume for all-night boogie.",
    tone: "Champagne Blaze",
    price: "$189",
  },
  {
    name: "Soul Train Halo",
    description: "Lux afro halo with velvet sheen and sculpted pick-friendly coils.",
    tone: "Burnt Sienna",
    price: "$164",
  },
  {
    name: "Boogie Bombshell",
    description: "Feathered flip with hidden lift seams for that effortless Farrah sway.",
    tone: "Copper Sunset",
    price: "$212",
  },
];

const accessories = [
  {
    label: "Velvet Groove Scarves",
    detail: "Hand-dyed bands that match our weekly palette and lock your style tight.",
  },
  {
    label: "Chrome Pick Set",
    detail: "Three-width picks etched with lightning bolts, made for disco bounce control.",
  },
  {
    label: "Glide & Shine Duo",
    detail: "Finishing mist + wide-tooth comb to keep fibers glossy under hot lights.",
  },
];

const dunkPick = {
  name: "Dunk's Moonlight Mirage",
  vibe: "A midnight indigo lob with pearlescent ribbons that glow under club strobes.",
  price: "$248",
  notes: [
    "Limited run – only 27 pieces cut by Dunk himself.",
    "Comes with mirrored travel case & satin wrap.",
    "Heat-friendly fibers up to 320°F for custom flips.",
  ],
};

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-headline span",
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 0.9,
          stagger: 0.12,
        },
      );

      gsap.fromTo(
        ".scroll-hint",
        { y: 0 },
        {
          y: 18,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 1.6,
        },
      );

      const sections = gsap.utils.toArray<HTMLElement>("[data-section]");

      sections.forEach((section) => {
        const title = section.querySelector(".section-title");
        const cards = section.querySelectorAll(".reveal-card");
        const lines = section.querySelectorAll(".reveal-line");

        if (title) {
          gsap.from(title, {
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
            y: 60,
            rotate: -2,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          });
        }

        if (lines.length) {
          gsap.from(lines, {
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
            },
            yPercent: 100,
            opacity: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "power2.out",
          });
        }

        if (cards.length) {
          gsap.from(cards, {
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
            },
            y: 80,
            opacity: 0,
            rotateX: -10,
            transformOrigin: "top center",
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.14,
          });
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="relative overflow-hidden text-base tracking-tight text-ink"
    >
      <section
        data-section="hero"
        className="relative flex min-h-screen flex-col justify-between px-6 pb-12 pt-20 sm:px-10 lg:px-20"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-harvest/55 to-transparent" />
          <Image
            src={heroImage}
            alt="Morries Wig Shop hero"
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative flex flex-col gap-10 pt-8 text-cream">
          <div className="inline-flex max-w-fit flex-col gap-3 rounded-full bg-ink/40 px-5 py-3 text-xs uppercase tracking-[0.32em] text-cream/70 backdrop-blur-md">
            Est. 1972 · Wig stylings with serious soul
          </div>
          <h1 className="hero-headline flex max-w-4xl flex-col gap-2 font-display text-5xl leading-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-7xl">
            <span>Morries Wig Shop</span>
            <span>Backroom Glam,</span>
            <span>Front Stage Energy.</span>
          </h1>
          <p className="max-w-xl text-lg text-cream/85 sm:text-xl">
            Slide into a groove where every strand is layered with disco glow,
            hand-curated textures, and the weekly picks our loyal regulars rave
            about.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium uppercase">
            <span className="rounded-full bg-cream/20 px-4 py-2 text-cream">
              This Week&apos;s Drop Live
            </span>
            <span className="rounded-full border border-cream/30 px-4 py-2 text-cream/70">
              Book a fitting · open late Thu-Sat
            </span>
          </div>
        </div>
        <div className="relative flex items-center justify-between pt-12 text-cream/70">
          <div className="max-w-sm text-sm leading-relaxed">
            Sway through the page to meet the wigs, accessories, and Dunk’s
            personal pick — all tuned to this week’s groove palette.
          </div>
          <div className="scroll-hint hidden items-center gap-2 text-xs uppercase tracking-[0.3em] md:flex">
            <span>Scroll</span>
            <span className="block h-10 w-px bg-cream/50" />
            <span>Feel the flow</span>
          </div>
        </div>
      </section>

      <section
        data-section="wigs"
        className="relative flex min-h-screen flex-col justify-center gap-12 bg-cream/90 px-6 py-20 sm:px-10 lg:px-20"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-sunshine/20 to-berry/10" />
        <div className="section-title font-display text-4xl text-ink sm:text-5xl">
          This Week&apos;s Wigs
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {wigsOfTheWeek.map((wig) => (
            <article
              key={wig.name}
              className="reveal-card group flex flex-col gap-5 rounded-3xl border border-ink/5 bg-white/80 p-6 shadow-[0_24px_60px_rgba(46,23,12,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-3 hover:shadow-[0_28px_80px_rgba(46,23,12,0.28)]"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-berry/80">
                <span>{wig.tone}</span>
                <span>{wig.price}</span>
              </div>
              <h3 className="reveal-line font-display text-2xl text-ink">
                {wig.name}
              </h3>
              <p className="reveal-line text-sm leading-relaxed text-ink/75">
                {wig.description}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4 text-xs font-semibold uppercase tracking-[0.24em] text-harvest">
                <span>Reserve</span>
                <span className="h-px w-12 bg-harvest/60" />
                <span>Try-On</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        data-section="dunk-pick"
        className="relative flex min-h-screen flex-col justify-center gap-12 bg-ink px-6 py-20 text-cream sm:px-10 lg:px-20"
      >
        <div
          className="absolute inset-0 -z-10 blur-3xl opacity-70"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(142, 59, 70, 0.7), rgba(43, 28, 26, 0.85) 55%, rgba(43, 28, 26, 0.95))",
          }}
        />
        <div className="section-title font-display text-4xl sm:text-5xl">
          Dunk&apos;s Wig Pick of the Week
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="reveal-card rounded-3xl border border-cream/10 bg-ink/50 p-8 backdrop-blur-lg shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.26em] text-sunshine/90">
              <span>Funk Certified</span>
              <span>{dunkPick.price}</span>
            </div>
            <h3 className="reveal-line mt-5 font-display text-4xl">
              {dunkPick.name}
            </h3>
            <p className="reveal-line mt-4 max-w-xl text-lg text-cream/85">
              {dunkPick.vibe}
            </p>
            <ul className="mt-8 flex flex-col gap-4 text-sm text-cream/70">
              {dunkPick.notes.map((note) => (
                <li
                  key={note}
                  className="reveal-line flex items-start gap-3"
                >
                  <span className="mt-1 block h-2 w-2 rounded-full bg-sunshine/90" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
            <button className="mt-10 inline-flex items-center gap-3 rounded-full border border-cream/20 bg-cream/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-cream/85 transition hover:bg-cream/20">
              Book Dunk
              <span className="h-0.5 w-10 bg-cream/60" />
            </button>
          </div>
          <div className="reveal-card hidden flex-col justify-between gap-8 rounded-3xl border border-cream/10 bg-cream/10 p-6 text-sm text-cream/80 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-md md:flex">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-sunshine/80">
                Behind the mix
              </div>
              <p className="mt-4 leading-relaxed">
                Dunk blends three tones by hand then razor-sculpts the fringe
                so it floats when you spin. Expect heads to turn when the club
                lights catch those pearlescent ribbons.
              </p>
            </div>
            <div className="rounded-2xl border border-cream/15 bg-cream/5 p-5">
              <div className="text-xs uppercase tracking-[0.24em] text-sunshine/80">
                Styling cues
              </div>
              <p className="mt-3 leading-relaxed">
                Pair with our velvet groove scarf in “Harvest Moon” and finish
                with Glide &amp; Shine mist for the cleanest light trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        data-section="accessories"
        className="relative flex min-h-screen flex-col justify-center gap-12 bg-sunshine/30 px-6 py-20 sm:px-10 lg:px-20"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-harvest/60 via-sunshine/20 to-cream blur-3xl opacity-70" />
        <div className="section-title font-display text-4xl text-ink sm:text-5xl">
          Accessories to Amplify
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {accessories.map((item) => (
            <div
              key={item.label}
              className="reveal-card group flex flex-col justify-between gap-6 rounded-3xl border border-ink/5 bg-white/70 p-6 shadow-[0_20px_55px_rgba(46,23,12,0.18)] transition-all duration-300 hover:-translate-y-3 hover:bg-white/90"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-harvest/80">
                  Spotlight
                </div>
                <h3 className="reveal-line mt-3 font-display text-2xl text-ink">
                  {item.label}
                </h3>
                <p className="reveal-line mt-4 text-sm leading-relaxed text-ink/75">
                  {item.detail}
                </p>
              </div>
              <button className="inline-flex items-center gap-2 self-start rounded-full border border-ink/15 bg-harvest/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-harvest transition hover:bg-harvest/20">
                Add to bundle
                <span className="h-[1px] w-6 bg-harvest/60" />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.28em] text-ink/70">
          <span>Visit the lounge · 174 Groove Ave · Tulsa</span>
          <span>Walk-ins welcome after 7pm on Disco Fridays</span>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Diagnose",
    desc: "We align on your business goals, target audience, and the exact problem we need to solve. No assumptions.",
    Animation: DiscoverAnimation
  },
  {
    id: "02",
    title: "Architect",
    desc: "I engineer the solution using modern, scalable tech. Every pixel is intentional, every interaction purposeful.",
    Animation: BuildAnimation
  },
  {
    id: "03",
    title: "Engineer",
    desc: "Rigorous testing, performance optimization, and a seamless deployment process ensuring zero downtime.",
    Animation: LaunchAnimation
  },
  {
    id: "04",
    title: "Accelerate",
    desc: "Post-launch telemetry, SEO refinement, and continuous iteration to ensure the system scales with you.",
    Animation: GrowAnimation
  }
];

export default function HowIWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "+=400",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          markers: false,
          onUpdate: (self) => {
            cards.forEach((otherCard, otherIndex) => {
              if (otherIndex < index) {
                const progress = self.progress;
                otherCard.style.transform = `scale(${0.9 + (0.1 * (1 - progress))})`;
                otherCard.style.filter = `blur(${8 * progress}px)`;
                otherCard.style.opacity = `${1 - (0.5 * progress)}`;
              }
            });
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative w-full bg-[var(--bg-color)]">
      {/* Section Heading — scrolls away normally before pinning */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-28 md:pt-36 pb-16">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-space)] font-bold tracking-[-0.03em] mb-4">
          How I Work
        </h2>
        <p className="text-[var(--text-color)]/70 text-lg md:text-xl font-[family-name:var(--font-inter)] max-w-2xl">
          A four-phase protocol engineered for clarity, speed, and zero surprises.
        </p>
      </div>

      {/* Sticky card stack */}
      <div ref={cardsContainerRef} className="overflow-hidden">
        {steps.map((step) => (
          <div
            key={step.id}
            className="process-card relative w-full min-h-screen flex items-center justify-center p-6 md:p-16"
          >
            <div className="relative w-full max-w-6xl mx-auto min-h-[70vh] bg-[var(--surface-color)] border border-[var(--accent-color)]/15 rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-12 overflow-hidden">

              {/* Text Content */}
              <div className="flex-1 z-10 flex flex-col justify-center">
                <div className="font-[family-name:var(--font-mono)] text-[var(--accent-color)] text-xl md:text-2xl tracking-widest mb-6">
                  {step.id} //
                </div>
                <h3 className="text-5xl md:text-7xl font-[family-name:var(--font-space)] font-bold tracking-[-0.03em] mb-6">
                  {step.title}
                </h3>
                <p className="text-[var(--text-color)]/70 text-xl md:text-2xl max-w-xl leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Visual/Animation */}
              <div className="flex-1 z-10 h-full min-h-[300px] w-full flex items-center justify-center border border-[var(--text-color)]/5 rounded-[2rem] bg-[var(--bg-color)]/50 relative overflow-hidden">
                <step.Animation />
              </div>

              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-color)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DiscoverAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute border border-[var(--accent-color)]/20 rounded-full"
          style={{
            width: `${i * 120}px`,
            height: `${i * 120}px`,
            animation: `spin ${10 + i * 5}s linear infinite ${i % 2 === 0 ? 'reverse' : ''}`
          }}
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-[var(--accent-color)] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_var(--accent-color)]" />
        </div>
      ))}
    </div>
  );
}

function BuildAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-8">
      <div className="grid grid-cols-8 gap-4 w-full opacity-30">
        {Array.from({length: 48}).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--text-color)] mx-auto" />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-[2px] bg-[var(--accent-color)] shadow-[0_0_15px_var(--accent-color)] animate-[scan_4s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}

function LaunchAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width="80%" viewBox="0 0 400 100" className="stroke-[var(--accent-color)]">
        <path
          d="M0,50 L100,50 L120,20 L150,90 L180,10 L210,80 L230,50 L400,50"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-[ekg_3s_linear_infinite]"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        />
      </svg>
    </div>
  );
}

function GrowAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-4 h-4 bg-[var(--accent-color)] rounded-full shadow-[0_0_20px_var(--accent-color)] z-10" />
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute border-2 border-[var(--accent-color)] rounded-full opacity-0 animate-[pulse-ring_3s_cubic-bezier(0.215,0.61,0.355,1)_infinite]"
          style={{
            animationDelay: `${i * 1}s`
          }}
        />
      ))}
    </div>
  );
}

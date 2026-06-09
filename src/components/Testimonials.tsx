"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Sulaimon's redesign of our website was on another level compared to our previous developer. The design is premium, the process was smooth, and the final result is exactly what we needed. Truly flawless work.",
      name: "Kate.",
      company: "M.D, IE-Hub Ltd"
    },
    {
      quote: "The AI agent integration alone saved us 15 hours a week in operational drag. His understanding of how software actually drives business value is unmatched.",
      name: "Sarah K.",
      company: "Director, Blueprint Media"
    },
    {
      quote: "From the first discovery call to the final launch, the process was seamless. The final product feels incredibly premium and works flawlessly.",
      name: "David O.",
      company: "CEO, PrimeBooth Advisory Ltd"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-28 md:py-36 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <div className="mb-20 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-space)] font-bold tracking-[-0.03em] mb-4">
          What Clients Say
        </h2>
        <p className="text-[var(--text-color)]/70 text-lg md:text-xl font-[family-name:var(--font-inter)]">
          Don&apos;t just take my word for it. Here is what partners and founders have to say.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial-card relative flex flex-col justify-between bg-[var(--surface-color)] rounded-[2rem] p-8 md:p-10 border border-[var(--accent-color)]/15"
          >
            <div>
              <div className="font-[family-name:var(--font-space)] font-bold text-6xl text-[var(--accent-color)]/40 leading-none mb-4">
                &ldquo;
              </div>
              <p className="text-[var(--text-color)] text-lg leading-relaxed mb-8 font-[family-name:var(--font-inter)]">
                {t.quote}
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--text-color)]/10">
              <div className="font-[family-name:var(--font-mono)] text-sm font-bold text-[var(--accent-color)] mb-1">
                {t.name}
              </div>
              <div className="font-[family-name:var(--font-mono)] text-xs text-[var(--text-color)]/40">
                {t.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

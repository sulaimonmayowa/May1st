"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-element", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.from(".hero-image-glow", {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.4
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90dvh] md:min-h-[85dvh] flex items-center justify-center px-4 md:px-16 overflow-hidden pt-24 pb-12"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-1/3 w-[800px] h-[800px] bg-[var(--accent-color)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-color)]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-8 md:gap-10 relative z-10">

        {/* Eyebrow */}
        <div className="hero-element flex items-center justify-center gap-3">
          <span className="w-10 h-px bg-[var(--accent-color)]/60" />
          <span className="font-mono text-[0.6rem] md:text-[0.65rem] tracking-[0.25em] uppercase text-[var(--accent-color)]/60">
            Full-Stack Engineer
          </span>
          <span className="w-10 h-px bg-[var(--accent-color)]/60" />
        </div>

        {/* Main Name */}
        <div className="hero-element flex items-baseline justify-center gap-2 md:gap-4">
          <h1 className="font-space font-bold text-[clamp(2.8rem,9vw,6rem)] tracking-[-0.04em] text-[var(--text-color)] leading-[1.05]">
            Sulaimon
          </h1>
          <h1 className="font-space font-bold text-[clamp(2.8rem,9vw,6rem)] tracking-[-0.04em] text-[var(--accent-color)] leading-[1.05]">
            Mayowa
          </h1>
        </div>

        {/* Title */}
        <div className="hero-element flex justify-center">
          <span className="inline-block font-mono text-[clamp(1rem,2.5vw,1.5rem)] font-medium tracking-tight text-[var(--text-color)]/80 bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 px-5 md:px-6 py-2 md:py-2.5 rounded-full text-center">
            Web & App Developer <span className="text-[var(--accent-color)]/50 mx-1.5">•</span> AI Agent Builder
          </span>
        </div>

        {/* Subheadline */}
        <p className="hero-element text-[clamp(0.9rem,1.5vw,1.15rem)] text-[var(--text-color)]/65 max-w-2xl leading-relaxed font-inter text-center px-2">
          Building high-performance websites, web applications, AI agents, and digital marketing systems that drive real business growth.
        </p>

        {/* CTA Buttons */}
        <div className="hero-element flex flex-wrap justify-center gap-3 md:gap-4 mt-2">
          <button
            onClick={scrollToContact}
            className="group relative overflow-hidden rounded-full bg-[var(--accent-color)] text-white px-6 md:px-7 py-3 md:py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 shadow-[0_4px_20px_rgba(79,142,247,0.25)]"
          >
            <span className="relative z-10">See my dev work</span>
            <ExternalLink className="relative z-10 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            <span className="absolute inset-0 bg-white/15 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </button>

          <a
            href="/Sulaimon_Mayowa_Resume.pdf"
            target="_blank"
            className="group relative overflow-hidden rounded-full border border-[var(--text-color)]/25 bg-transparent text-[var(--text-color)]/80 px-6 md:px-7 py-3 md:py-3.5 text-sm font-semibold transition-all duration-300 hover:border-[var(--accent-color)]/40 hover:text-[var(--accent-color)] flex items-center gap-2"
          >
            <span className="relative z-10">Download CV</span>
            <Download className="relative z-10 w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Keyboard Hero Image */}
        <div className="hero-image-glow relative w-full max-w-lg md:max-w-xl mt-4 md:mt-6">
          {/* Glow behind keyboard */}
          <div className="absolute -inset-10 bg-[var(--accent-color)]/8 rounded-[3rem] blur-[60px] opacity-60" />
          <div className="absolute -inset-4 bg-gradient-to-br from-[var(--accent-color)]/5 via-transparent to-purple-500/5 rounded-[2rem] blur-[40px]" />

          {/* Keyboard image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/hero-image.png"
              alt="Modern keyboard with glowing elements"
              width={700}
              height={450}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating glow dots */}
          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[var(--accent-color)]/25 blur-sm" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-purple-500/15 blur-sm" />
        </div>

      </div>
    </section>
  );
}

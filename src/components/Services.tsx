"use client";

import { Code2, Bot, TrendingUp, ArrowUpRight, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 px-6 md:px-16 max-w-7xl mx-auto w-full">
      {/* Header Row */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[var(--text-color)]/30" />
            <span className="font-mono text-sm tracking-widest uppercase text-[var(--text-color)]/50">
              My Services
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-space font-bold tracking-[-0.04em] leading-tight">
            WHAT I'M <br className="hidden md:block" /> OFFERING
          </h2>
        </div>
        <div className="md:col-span-4 flex items-end h-full">
          <p className="text-[var(--text-color)]/70 text-lg md:text-xl font-inter">
            I build focused digital products and systems engineered to solve real business problems, not just look good.
          </p>
        </div>
        <div className="md:col-span-3 flex md:justify-end items-end h-full">
          <Link
            href="#contact"
            className="px-6 py-3 rounded-full border border-[var(--text-color)]/20 hover:border-[var(--accent-color)] text-sm font-bold tracking-wide transition-colors"
          >
            LET'S TALK
          </Link>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <WebDevCard />
        <AIAgentsCard />
        <DigitalMarketingCard />
      </div>
    </section>
  );
}

/* ─── Shared card wrapper ─── */
function CardWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`group relative flex flex-col rounded-[2.5rem] p-8 transition-all duration-500 cursor-pointer
        bg-[var(--surface-color)]/80
        border border-[var(--accent-color)]/15
        hover:border-[var(--accent-color)]/50
        hover:shadow-[0_0_40px_rgba(79,142,247,0.25),0_0_80px_rgba(79,142,247,0.1)]
        hover:-translate-y-1
        ${className}`}
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--accent-color)]/5 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  );
}

/* ─── Stat pill ─── */
function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 bg-[var(--accent-color)]/10 rounded-full px-3.5 py-1.5 border border-[var(--accent-color)]/15">
      <span className="font-mono text-[0.65rem] font-bold text-[var(--accent-color)]">{value}</span>
      <span className="font-inter text-[0.65rem] text-[var(--text-color)]/60">{label}</span>
    </div>
  );
}

/* ─── 1. Web & App Development ─── */
function WebDevCard() {
  return (
    <CardWrapper>
      <Code2 size={28} className="text-[var(--accent-color)] mb-5" />
      <h3 className="font-space text-[1.25rem] font-bold mb-1">Web & App Development</h3>
      <p className="font-inter text-[0.85rem] text-[var(--text-color)]/60 mb-5">
        High-performance websites &amp; web applications
      </p>

      {/* Stats area */}
      <div className="flex flex-wrap gap-2 mb-5">
        <StatPill value="68%" label="higher sales" />
        <StatPill value="74%" label="higher conversions" />
        <StatPill value="3.5x" label="better engagement" />
      </div>

      <p className="font-inter text-[0.75rem] text-[var(--text-color)]/50 leading-relaxed mb-auto">
        Built with Next.js, React &amp; Tailwind for speed &amp; scalability.
        <br />32% faster revenue growth with professional web design.
      </p>

      <a href="#contact" className="mt-6 flex items-center gap-1.5 text-[var(--accent-color)] font-mono text-[0.7rem] font-bold tracking-widest group-hover:gap-3 transition-all duration-300">
        LEARN MORE <ArrowUpRight size={14} />
      </a>
    </CardWrapper>
  );
}

/* ─── 2. AI Agents & Automation ─── */
function AIAgentsCard() {
  return (
    <CardWrapper>
      <Bot size={28} className="text-[var(--accent-color)] mb-5" />
      <h3 className="font-space text-[1.25rem] font-bold mb-1">AI Agents &amp; Automation</h3>
      <p className="font-inter text-[0.85rem] text-[var(--text-color)]/60 mb-5">
        Intelligent systems that work for you 24/7
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        <StatPill value="55%" label="higher efficiency" />
        <StatPill value="35%" label="cost reduction" />
        <StatPill value="171%" label="ROI" />
      </div>

      <p className="font-inter text-[0.75rem] text-[var(--text-color)]/50 leading-relaxed mb-auto">
        From lead qualification to customer support — let AI handle the routine.
        <br />Automate 15–50% of repetitive business tasks.
      </p>

      <a href="#contact" className="mt-6 flex items-center gap-1.5 text-[var(--accent-color)] font-mono text-[0.7rem] font-bold tracking-widest group-hover:gap-3 transition-all duration-300">
        LEARN MORE <Zap size={14} />
      </a>
    </CardWrapper>
  );
}

/* ─── 3. Digital Marketing ─── */
function DigitalMarketingCard() {
  return (
    <CardWrapper>
      <TrendingUp size={28} className="text-[var(--accent-color)] mb-5" />
      <h3 className="font-space text-[1.25rem] font-bold mb-1">Digital Marketing</h3>
      <p className="font-inter text-[0.85rem] text-[var(--text-color)]/60 mb-5">
        SEO + Paid Ads that deliver measurable growth
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        <StatPill value="200%" label="PPC ROI" />
        <StatPill value="8x" label="SEO vs PPC" />
        <StatPill value="2.5x" label="revenue growth" />
      </div>

      <p className="font-inter text-[0.75rem] text-[var(--text-color)]/50 leading-relaxed mb-auto">
        Attract, convert, and scale with proven strategies.
        <br />SEO delivers 8x higher long-term ROI than PPC.
      </p>

      <a href="#contact" className="mt-6 flex items-center gap-1.5 text-[var(--accent-color)] font-mono text-[0.7rem] font-bold tracking-widest group-hover:gap-3 transition-all duration-300">
        LEARN MORE <BarChart3 size={14} />
      </a>
    </CardWrapper>
  );
}

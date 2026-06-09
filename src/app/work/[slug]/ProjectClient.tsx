"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

function getNextProject(currentSlug: string) {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  return projects[(idx + 1) % projects.length];
}

export default function ProjectClient({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  const nextProject = getNextProject(slug);

  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-el", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          scale: 0.97,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }

      gsap.from(".content-block", {
        scrollTrigger: {
          trigger: blocksRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[var(--bg-color)]">
        <div className="text-center">
          <h1 className="font-space text-4xl font-bold text-[var(--text-color)] mb-4">Project not found</h1>
          <Link href="/#work" className="text-[var(--accent-color)] font-mono text-sm hover:underline">
            ← Back to Work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <Navbar />

      {/* ─── A. PROJECT HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 md:pb-20 pt-32"
      >
        <Link
          href="/#work"
          className="hero-el flex items-center gap-2 text-[var(--accent-color)] font-mono text-[0.8rem] mb-12 hover:-translate-y-px transition-transform"
        >
          <ArrowLeft size={16} /> Back to Work
        </Link>

        <div className="hero-el flex flex-wrap items-center gap-3 mb-6">
          <span className="font-mono text-[0.65rem] font-bold tracking-widest uppercase text-white bg-[var(--accent-color)] px-3 py-1 rounded-full">
            {project.serviceTag}
          </span>
          <span className="font-mono text-[0.75rem] text-[var(--text-color)]/50">{project.industry}</span>
          <span className="text-[var(--text-color)]/30 font-mono text-[0.75rem]">·</span>
          <span className="font-mono text-[0.75rem] text-[var(--text-color)]/50">{project.year}</span>
        </div>

        <h1 className="hero-el font-space font-bold text-[clamp(2.5rem,6vw,6rem)] tracking-[-0.04em] leading-[1.05] mb-6">
          {project.title}
        </h1>

        <p className="hero-el font-inter text-[1.125rem] text-[var(--text-color)]/75 max-w-[640px] leading-relaxed mb-10">
          {project.overview.split(".")[0]}.
        </p>

        <div className="hero-el flex flex-wrap gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full bg-[var(--accent-color)] text-white px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:scale-[1.03] flex items-center gap-2 shadow-[0_4px_20px_rgba(79,142,247,0.3)]"
          >
            <span className="relative z-10">Visit Live Site</span>
            <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </a>

          <Link
            href="/#work"
            className="group relative overflow-hidden rounded-full border border-[var(--text-color)]/25 bg-transparent text-[var(--text-color)]/80 px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:scale-[1.03] hover:border-[var(--accent-color)]/50 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="relative z-10">Back to Work</span>
          </Link>
        </div>
      </section>

      {/* ─── C. PROJECT IMAGE ─── */}
      <section className="px-6 md:px-12 lg:px-20 mb-20">
        <div
          ref={imageRef}
          className="relative w-full max-h-[360px] md:max-h-[600px] overflow-hidden rounded-[2rem] mx-auto shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={700}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* ─── D. CONTENT GRID ─── */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12 lg:gap-16">
          <div ref={blocksRef} className="flex flex-col">
            <div className="content-block py-12 border-b border-[var(--text-color)]/10">
              <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[var(--accent-color)] mb-4 block">
                01 / OVERVIEW
              </span>
              <p className="font-inter text-[1.05rem] leading-[1.8] text-[var(--text-color)]/85">
                {project.overview}
              </p>
            </div>

            <div className="content-block py-12 border-b border-[var(--text-color)]/10">
              <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[var(--accent-color)] mb-4 block">
                02 / THE PROBLEM
              </span>
              <p className="font-inter text-[1.05rem] leading-[1.8] text-[var(--text-color)]/85 border-l-2 border-[var(--accent-color)] pl-6">
                {project.problem}
              </p>
            </div>

            <div className="content-block py-12 border-b border-[var(--text-color)]/10">
              <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[var(--accent-color)] mb-4 block">
                03 / THE SOLUTION
              </span>
              <p className="font-inter text-[1.05rem] leading-[1.8] text-[var(--text-color)]/85">
                {project.solution}
              </p>
            </div>

            <div className="content-block py-12">
              <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[var(--accent-color)] mb-4 block">
                04 / RESULTS
              </span>
              <div className="bg-[var(--accent-color)]/8 rounded-[1rem] p-6 border border-[var(--accent-color)]/20">
                <p className="font-inter text-[1.05rem] leading-[1.8] text-[var(--text-color)]/85">
                  {project.results}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 self-start">
            <div className="bg-[var(--surface-color)] rounded-[2rem] p-8 border border-[var(--text-color)]/10">
              <div className="space-y-0">
                <DetailRow label="Client" value={project.client} />
                <DetailRow label="Industry" value={project.industry} />
                <DetailRow label="Service" value={project.service} />
                <DetailRow label="Year" value={project.year} last />
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--text-color)]/10">
                <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[var(--text-color)]/40 mb-4 block">
                  Built With
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[0.7rem] text-[var(--text-color)]/70 bg-[var(--text-color)]/8 border border-[var(--text-color)]/15 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 rounded-full bg-[var(--accent-color)] text-white px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_rgba(79,142,247,0.25)]"
              >
                Visit Live Site <ArrowUpRight size={16} />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── F. NEXT PROJECT ─── */}
      <section className="px-6 md:px-12 lg:px-20 mb-20">
        <Link
          href={`/work/${nextProject!.slug}`}
          className="group block bg-[var(--surface-color)] rounded-[2rem] px-8 md:px-16 py-12 md:py-16 mx-auto border border-transparent hover:border-[var(--accent-color)]/30 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[var(--text-color)]/40 mb-3 block">
                Next Project
              </span>
              <h3 className="font-space font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.03em]">
                {nextProject!.title}
              </h3>
            </div>
            <span className="text-[var(--accent-color)] text-[3rem] md:text-[4rem] leading-none transition-transform duration-300 group-hover:translate-x-2">
              &rarr;
            </span>
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  );
}

function DetailRow({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-1 py-4 ${!last ? "border-b border-[var(--text-color)]/10" : ""}`}>
      <span className="font-mono text-[0.65rem] tracking-wider uppercase text-[var(--text-color)]/40">
        {label}
      </span>
      <span className="font-inter text-[0.9rem] text-[var(--text-color)]/90">{value}</span>
    </div>
  );
}

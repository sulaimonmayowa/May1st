"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, getRelatedPosts, categories } from "@/lib/blog";

gsap.registerPlugin(ScrollTrigger);

export default function PostClient({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  const relatedPosts = getRelatedPosts(slug);

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!post) return;
    const ctx = gsap.context(() => {
      gsap.from(".post-hero-el", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".post-content-el", {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".related-card", {
        scrollTrigger: {
          trigger: relatedRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, [post]);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[var(--bg-color)]">
        <div className="text-center">
          <h1 className="font-space text-4xl font-bold text-[var(--text-color)] mb-4">Post not found</h1>
          <Link href="/blog" className="text-[var(--accent-color)] font-mono text-sm hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <Navbar />

      {/* ─── POST HERO ─── */}
      <section
        ref={heroRef}
        className="relative pt-36 pb-12 md:pb-16 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="post-hero-el flex items-center gap-2 text-[var(--accent-color)] font-mono text-[0.8rem] mb-10 hover:-translate-x-0.5 transition-transform"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Meta strip */}
          <div className="post-hero-el flex flex-wrap items-center gap-3 mb-5">
            <span className="font-mono text-[0.6rem] font-bold tracking-widest uppercase text-white bg-[var(--accent-color)] px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="font-mono text-[0.7rem] text-[var(--text-color)]/40 flex items-center gap-1.5">
              <Calendar size={12} /> {formattedDate}
            </span>
            <span className="font-mono text-[0.7rem] text-[var(--text-color)]/40 flex items-center gap-1.5">
              <Clock size={12} /> {post.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="post-hero-el font-space font-bold text-[clamp(2rem,5vw,4rem)] tracking-[-0.04em] leading-[1.08] mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="post-hero-el font-inter text-[1.05rem] md:text-[1.125rem] text-[var(--text-color)]/65 max-w-2xl leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="post-hero-el flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-mono text-[0.6rem] text-[var(--accent-color)]/60 border border-[var(--accent-color)]/15 rounded-full px-3 py-1 hover:bg-[var(--accent-color)]/10 transition-colors flex items-center gap-1"
              >
                <Tag size={10} /> {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED IMAGE ─── */}
      <section className="px-6 md:px-12 lg:px-20 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full max-h-[420px] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section ref={contentRef} className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="post-content-el prose-custom">
            {post.content.split("\n").map((line, i) => {
              // Headers
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-space font-bold text-[1.6rem] md:text-[2rem] tracking-[-0.03em] mt-12 mb-4 text-[var(--text-color)]">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="font-space font-bold text-[1.2rem] md:text-[1.4rem] tracking-[-0.02em] mt-8 mb-3 text-[var(--text-color)]">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              // Lists
              if (line.startsWith("- **")) {
                const match = line.match(/- \*\*(.+?)\*\*(.*)/);
                if (match) {
                  return (
                    <div key={i} className="flex items-start gap-3 my-2 ml-4">
                      <span className="text-[var(--accent-color)] mt-1.5 shrink-0">•</span>
                      <p className="font-inter text-[1rem] leading-[1.8] text-[var(--text-color)]/80">
                        <strong className="text-[var(--text-color)]/90">{match[1]}</strong>{match[2]}
                      </p>
                    </div>
                  );
                }
              }
              if (line.startsWith("- ")) {
                return (
                  <div key={i} className="flex items-start gap-3 my-2 ml-4">
                    <span className="text-[var(--accent-color)] mt-1.5 shrink-0">•</span>
                    <p className="font-inter text-[1rem] leading-[1.8] text-[var(--text-color)]/80">
                      {line.replace("- ", "")}
                    </p>
                  </div>
                );
              }
              // Numbered lists
              if (/^\d+\.\s/.test(line)) {
                return (
                  <div key={i} className="flex items-start gap-3 my-2 ml-4">
                    <span className="font-mono text-[0.7rem] text-[var(--accent-color)] mt-1 shrink-0">
                      {line.match(/^(\d+)\./)?.[1]}.
                    </span>
                    <p className="font-inter text-[1rem] leading-[1.8] text-[var(--text-color)]/80">
                      {line.replace(/^\d+\.\s/, "")}
                    </p>
                  </div>
                );
              }
              // Tables
              if (line.startsWith("| ") && line.includes("|---")) {
                return null; // Skip table separator
              }
              if (line.startsWith("| ")) {
                const cells = line.split("|").filter(Boolean).map((c) => c.trim());
                // Header row detection
                const prevLine = i > 0 ? post.content.split("\n")[i - 1] : "";
                if (prevLine.startsWith("| ") && !prevLine.includes("---")) {
                  return (
                    <div key={i} className="flex gap-4 my-1 ml-2">
                      {cells.map((cell, ci) => (
                        <span
                          key={ci}
                          className={`font-mono text-[0.75rem] ${
                            i === 1 ? "text-[var(--text-color)]/90 font-bold" : "text-[var(--text-color)]/70"
                          } flex-1`}
                        >
                          {cell}
                        </span>
                      ))}
                    </div>
                  );
                }
                // Check if prev was separator (header row)
                const prevPrevLine = i > 1 ? post.content.split("\n")[i - 2] : "";
                if (prevLine.includes("---") && prevPrevLine.startsWith("| ")) {
                  return (
                    <div key={i} className="flex gap-4 my-1 ml-2">
                      {cells.map((cell, ci) => (
                        <span key={ci} className="font-inter text-[0.85rem] text-[var(--text-color)]/70 flex-1">
                          {cell}
                        </span>
                      ))}
                    </div>
                  );
                }
                // Table header
                return (
                  <div key={i} className="flex gap-4 mt-6 mb-2 ml-2 pb-2 border-b border-[var(--text-color)]/10">
                    {cells.map((cell, ci) => (
                      <span key={ci} className="font-mono text-[0.7rem] font-bold text-[var(--accent-color)] uppercase tracking-wider flex-1">
                        {cell}
                      </span>
                    ))}
                  </div>
                );
              }
              // Checkboxes
              if (line.startsWith("- [")) {
                const checked = line.includes("[x]") || line.includes("[X]");
                const text = line.replace(/^- \[.\]\s*/, "");
                return (
                  <div key={i} className="flex items-start gap-3 my-2 ml-4">
                    <span className={`mt-1 shrink-0 w-4 h-4 rounded border ${
                      checked ? "bg-[var(--accent-color)] border-[var(--accent-color)]" : "border-[var(--text-color)]/30"
                    } flex items-center justify-center`}>
                      {checked && <span className="text-white text-[0.5rem]">✓</span>}
                    </span>
                    <p className="font-inter text-[1rem] leading-[1.8] text-[var(--text-color)]/80">
                      {text}
                    </p>
                  </div>
                );
              }
              // Empty lines
              if (line.trim() === "") return <div key={i} className="h-4" />;
              // Regular paragraphs
              return (
                <p key={i} className="font-inter text-[1rem] leading-[1.8] text-[var(--text-color)]/80 my-3">
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── RELATED POSTS ─── */}
      {relatedPosts.length > 0 && (
        <section ref={relatedRef} className="px-6 md:px-12 lg:px-20 pb-28 md:pb-36">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[var(--text-color)]/40 mb-3 block">
                Related Articles
              </span>
              <h2 className="font-space font-bold text-[2rem] md:text-[2.5rem] tracking-[-0.03em]">
                Continue Reading
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="related-card group block bg-[var(--surface-color)] rounded-[2rem] p-4 border border-[var(--accent-color)]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent-color)]/50 hover:shadow-[0_12px_40px_rgba(79,142,247,0.15)]"
                >
                  <div className="relative w-full h-[180px] rounded-[1.5rem] overflow-hidden mb-4 bg-[var(--bg-color)]">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="px-1 pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[0.55rem] uppercase tracking-wider text-[var(--accent-color)] bg-[var(--accent-color)]/10 px-2 py-0.5 rounded-full">
                        {related.category}
                      </span>
                      <span className="font-mono text-[0.5rem] text-[var(--text-color)]/30">
                        {related.readingTime}
                      </span>
                    </div>
                    <h3 className="font-space font-bold text-[0.95rem] tracking-tight group-hover:text-[var(--accent-color)] transition-colors leading-snug">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

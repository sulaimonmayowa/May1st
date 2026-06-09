"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPublishedPosts, categories, allTags } from "@/lib/blog";

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const posts = getPublishedPosts();
  const filtered = posts.filter((p) => {
    if (activeCategory && p.category !== activeCategory) return false;
    if (activeTag && !p.tags.includes(activeTag)) return false;
    return true;
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-hero-el", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".blog-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, [activeCategory, activeTag]);

  return (
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-36 pb-16 md:pb-20 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="blog-hero-el flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-[var(--accent-color)]/60" />
            <span className="font-mono text-[0.6rem] md:text-[0.65rem] tracking-[0.25em] uppercase text-[var(--accent-color)]/60">
              Insights & Articles
            </span>
            <span className="w-10 h-px bg-[var(--accent-color)]/60" />
          </div>

          <h1 className="blog-hero-el font-space font-bold text-[clamp(2.5rem,6vw,5rem)] tracking-[-0.04em] leading-[1.05] mb-5">
            Blog
          </h1>

          <p className="blog-hero-el font-inter text-[1.05rem] md:text-[1.125rem] text-[var(--text-color)]/65 max-w-2xl leading-relaxed">
            Insights on web development, AI agents, digital marketing, and building high-performance digital products.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 lg:px-20 mb-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-8">
          {/* Categories */}
          <div className="flex-1">
            <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[var(--text-color)]/40 mb-3 block">
              Categories
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setActiveCategory(null); setActiveTag(null); }}
                className={`font-mono text-[0.7rem] px-3.5 py-1.5 rounded-full border transition-all duration-300 ${
                  !activeCategory && !activeTag
                    ? "bg-[var(--accent-color)] text-white border-[var(--accent-color)]"
                    : "border-[var(--text-color)]/20 text-[var(--text-color)]/60 hover:border-[var(--accent-color)]/40"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setActiveTag(null); }}
                  className={`font-mono text-[0.7rem] px-3.5 py-1.5 rounded-full border transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[var(--accent-color)] text-white border-[var(--accent-color)]"
                      : "border-[var(--text-color)]/20 text-[var(--text-color)]/60 hover:border-[var(--accent-color)]/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex-1">
            <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[var(--text-color)]/40 mb-3 block">
              Tags
            </span>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 8).map((tag) => (
                <button
                  key={tag}
                  onClick={() => { setActiveTag(tag); setActiveCategory(null); }}
                  className={`font-mono text-[0.6rem] px-3 py-1 rounded-full border transition-all duration-300 ${
                    activeTag === tag
                      ? "bg-[var(--accent-color)]/15 text-[var(--accent-color)] border-[var(--accent-color)]/30"
                      : "border-[var(--text-color)]/10 text-[var(--text-color)]/40 hover:text-[var(--text-color)]/70"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section ref={gridRef} className="px-6 md:px-12 lg:px-20 pb-28 md:pb-36">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-inter text-[var(--text-color)]/50">No posts found for this filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card group block bg-[var(--surface-color)] rounded-[2rem] p-4 border border-[var(--accent-color)]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent-color)]/50 hover:shadow-[0_12px_40px_rgba(79,142,247,0.15)]"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full h-[200px] rounded-[1.5rem] overflow-hidden mb-5 bg-[var(--bg-color)]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-[var(--bg-color)]/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Meta */}
                  <div className="px-1 pb-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--accent-color)] bg-[var(--accent-color)]/10 px-2.5 py-0.5 rounded-full border border-[var(--accent-color)]/20">
                        {post.category}
                      </span>
                      <span className="font-mono text-[0.55rem] text-[var(--text-color)]/30 flex items-center gap-1">
                        <Clock size={10} /> {post.readingTime}
                      </span>
                    </div>

                    <h3 className="font-space font-bold text-[1rem] tracking-tight mb-2 group-hover:text-[var(--accent-color)] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="font-inter text-[0.8rem] text-[var(--text-color)]/65 mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-[0.8rem] font-bold text-[var(--accent-color)] transition-colors">
                      Read More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPost } from "@/lib/blog";

export default function BlogArchiveClient({
  title,
  posts,
  type,
}: {
  title: string;
  posts: BlogPost[];
  type: "category" | "tag";
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".archive-hero-el", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".archive-card", {
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
  }, []);

  return (
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <Navbar />

      <section ref={heroRef} className="relative pt-36 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/blog"
            className="archive-hero-el flex items-center gap-2 text-[var(--accent-color)] font-mono text-[0.8rem] mb-8 hover:-translate-x-0.5 transition-transform"
          >
            ← Back to Blog
          </Link>

          <div className="archive-hero-el flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--accent-color)]/60" />
            <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-color)]/60">
              {type === "category" ? "Category" : "Tag"}
            </span>
            <span className="w-10 h-px bg-[var(--accent-color)]/60" />
          </div>

          <h1 className="archive-hero-el font-space font-bold text-[clamp(2rem,5vw,4rem)] tracking-[-0.04em] leading-[1.05] mb-4">
            {title}
          </h1>

          <p className="archive-hero-el font-inter text-[1rem] text-[var(--text-color)]/50">
            {posts.length} {posts.length === 1 ? "article" : "articles"}
          </p>
        </div>
      </section>

      <section ref={gridRef} className="px-6 md:px-12 lg:px-20 pb-28 md:pb-36">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-inter text-[var(--text-color)]/50">No articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="archive-card group block bg-[var(--surface-color)] rounded-[2rem] p-4 border border-[var(--accent-color)]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent-color)]/50 hover:shadow-[0_12px_40px_rgba(79,142,247,0.15)]"
                >
                  <div className="relative w-full h-[200px] rounded-[1.5rem] overflow-hidden mb-5 bg-[var(--bg-color)]">
                    <Image src={post.image} alt={post.title} fill className="object-cover object-top" />
                    <div className="absolute inset-0 bg-[var(--bg-color)]/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
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
                    <div className="flex items-center gap-2 text-[0.8rem] font-bold text-[var(--accent-color)]">
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

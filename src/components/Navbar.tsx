"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const scrollToContact = () => {
    setIsMobileMenuOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-5 md:px-6 py-3 flex items-center gap-3 md:gap-6 w-[92%] md:w-auto justify-between ${
          isScrolled
            ? "bg-[var(--surface-color)]/60 backdrop-blur-xl border border-[var(--accent-color)]/20 shadow-lg text-[var(--accent-color)]"
            : "bg-transparent text-[var(--text-color)] border border-transparent"
        }`}
      >
        <Link href="/" className="font-space font-bold tracking-[-0.03em] whitespace-nowrap text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors duration-200 shrink-0">
          Sulaimon Mayowa
        </Link>
        
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium">
          <Link href="#work" className="hover:text-[var(--accent-color)] transition-colors duration-200 whitespace-nowrap">Work</Link>
          <Link href="#services" className="hover:text-[var(--accent-color)] transition-colors duration-200 whitespace-nowrap">Services</Link>
          <Link href="/blog" className="hover:text-[var(--accent-color)] transition-colors duration-200 whitespace-nowrap">Blog</Link>
          <Link href="#process" className="hover:text-[var(--accent-color)] transition-colors duration-200 whitespace-nowrap">Process</Link>
          <Link href="#about" className="hover:text-[var(--accent-color)] transition-colors duration-200 whitespace-nowrap">About</Link>
        </nav>

        <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[var(--accent-color)]/10 transition-colors shrink-0"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={scrollToContact}
            className="hidden md:flex group relative overflow-hidden rounded-full bg-[var(--accent-color)] text-[#0D0D12] px-4 lg:px-5 py-2 text-sm font-bold whitespace-nowrap transition-transform duration-300 hover:scale-105 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shrink-0"
          >
            <span className="relative z-10">Book a strategy call</span>
            <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </button>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg-color)] flex flex-col items-center justify-center gap-8 text-xl font-medium pt-20">
          <Link href="#work" onClick={() => setIsMobileMenuOpen(false)}>Work</Link>
          <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link href="#process" onClick={() => setIsMobileMenuOpen(false)}>Process</Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <button 
            onClick={scrollToContact}
            className="rounded-full bg-[var(--accent-color)] text-[#0D0D12] px-8 py-3 font-bold mt-4"
          >
            Book a strategy call
          </button>
        </div>
      )}
    </>
  );
}

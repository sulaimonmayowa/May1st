import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-28 md:py-36 px-6 md:px-16 w-full bg-[var(--bg-color)] relative overflow-hidden flex flex-col items-center justify-center text-center border-t border-[var(--accent-color)]/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-color)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="font-[family-name:var(--font-space)] font-bold tracking-[-0.04em] text-5xl md:text-7xl lg:text-8xl text-[var(--text-color)] mb-8 leading-[1.1]">
          Ready to build something <br className="hidden md:block" />
          <span className="text-[var(--accent-color)]">that works?</span>
        </h2>

        <p className="text-[var(--text-color)]/70 text-lg md:text-xl max-w-2xl mb-12 font-[family-name:var(--font-inter)]">
          Let&apos;s talk about your project. No pitch decks, no fluff — just a real conversation about what you need and how we can achieve it.
        </p>

        <a
          href="https://calendar.app.google/TtBykkHJgxio885b9"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-full bg-[var(--accent-color)] text-white px-10 py-5 text-lg font-bold transition-transform duration-300 hover:scale-[1.03] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center gap-3"
        >
          <span className="relative z-10">Book a free strategy call</span>
          <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
          <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
        </a>
      </div>
    </section>
  );
}

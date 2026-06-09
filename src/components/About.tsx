import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-center gap-16">

        {/* Profile Image */}
        <div className="flex-1 w-full max-w-[480px] mx-auto md:max-w-none">
          <div className="relative rounded-[2rem] overflow-hidden border border-[var(--accent-color)]/20 shadow-[0_10px_40px_rgba(79,142,247,0.12)]">
            <Image
              src="/profile.jpg"
              alt="Sulaimon Mayowa"
              width={480}
              height={560}
              className="object-cover w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Bio & Credibility */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6 font-[family-name:var(--font-space)] max-w-[480px]">
            The Engineer Behind <br />the Build
          </h2>
          <p className="text-[var(--text-color)]/80 text-lg md:text-xl leading-relaxed mb-10 font-[family-name:var(--font-inter)]">
            I engineer scalable, high-performance web systems tailored to business needs. Beyond writing code, I bridge the gap between design intent and functional reality, ensuring that every project not only looks premium but performs flawlessly under pressure.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="bg-white/10 border border-white/20 text-[var(--tag-text)] text-[0.85rem] px-4 py-2 rounded-full font-[family-name:var(--font-mono)] [html[data-theme=light]_&]:bg-[var(--tag-bg)] [html[data-theme=light]_&]:border-[var(--tag-border)]">
              5+ years experience
            </span>
            <span className="bg-white/10 border border-white/20 text-[var(--tag-text)] text-[0.85rem] px-4 py-2 rounded-full font-[family-name:var(--font-mono)] [html[data-theme=light]_&]:bg-[var(--tag-bg)] [html[data-theme=light]_&]:border-[var(--tag-border)]">
              Based in Lagos
            </span>
            <span className="bg-white/10 border border-white/20 text-[var(--tag-text)] text-[0.85rem] px-4 py-2 rounded-full font-[family-name:var(--font-mono)] [html[data-theme=light]_&]:bg-[var(--tag-bg)] [html[data-theme=light]_&]:border-[var(--tag-border)]">
              Worked with teams in UK, USA & Nigeria
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

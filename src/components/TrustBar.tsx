"use client";

const techStack = [
  { name: "Next.js", icon: "N" },
  { name: "Node.js", icon: "N" },
  { name: "Python", icon: "P" },
  { name: "React", icon: "⚛" },
  { name: "Tailwind", icon: "T" },
  { name: "WordPress", icon: "W" },
  { name: "JavaScript", icon: "JS" },
  { name: "HTML & CSS", icon: "<>" },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-[var(--bg-color)] border-y border-[var(--text-color)]/10 py-8 md:py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5 md:gap-6 px-4 md:px-16">
        {/* Label */}
        <span className="font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.25em] uppercase text-[var(--text-color)]/40">
          Technologies I work with
        </span>

        {/* Scrolling Marquee */}
        <div className="w-full overflow-hidden mask-fade-edges">
          <div className="flex gap-6 md:gap-10 animate-marquee w-max">
            {/* Duplicate items twice for seamless loop */}
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-2.5 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-xl bg-[var(--surface-color)]/40 hover:bg-[var(--accent-color)]/10 transition-all duration-300 shrink-0"
              >
                <span className="font-mono text-[0.8rem] md:text-[0.9rem] font-bold text-[var(--accent-color)]">
                  {tech.icon}
                </span>
                <span className="font-inter text-[0.85rem] md:text-[1rem] font-medium text-[var(--text-color)]/70 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
    </section>
  );
}

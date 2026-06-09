import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SelectedWork() {
  const projects = [
    {
      name: "Smarts Magazine",
      industry: "African Media Brand",
      service: "Web Dev",
      result: "Built full editorial platform from scratch.",
      image: "/smarts-home.png",
      slug: "smarts-magazine"
    },
    {
      name: "Prime Booth Edu Advisory",
      industry: "Education Consultancy",
      service: "Strategy & Dev",
      result: "Designed a high-converting advisory portal.",
      image: "/primebooth.png",
      slug: "prime-booth"
    },
    {
      name: "IEH Consult Ltd",
      industry: "Corporate Consulting",
      service: "Digital Presence",
      result: "Revamped corporate identity and web infrastructure.",
      image: "/iehconsult.png",
      slug: "ieh-consult"
    }
  ];

  return (
    <section id="work" className="py-28 md:py-36 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-space)] font-bold tracking-[-0.03em] mb-4">
            Selected Work
          </h2>
          <p className="text-[var(--text-color)]/70 text-lg md:text-xl font-[family-name:var(--font-inter)]">
            A showcase of digital instruments built for founders who demand excellence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block relative bg-[var(--surface-color)] rounded-[2rem] p-4 border border-[var(--accent-color)]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent-color)]/50 hover:shadow-[0_12px_40px_rgba(79,142,247,0.15)]"
          >
            {/* Thumbnail with simulated scroll */}
            <div className="relative w-full h-[280px] rounded-[1.5rem] overflow-hidden mb-6 bg-[var(--bg-color)]">
              <div
                className="absolute inset-x-0 top-0 h-[150%] transition-transform duration-[2.5s] ease-in-out group-hover:-translate-y-[20%]"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-[var(--bg-color)]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="px-2 pb-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-wider text-[var(--accent-color)] bg-[var(--accent-color)]/10 px-3 py-1 rounded-full border border-[var(--accent-color)]/20">
                  {project.service}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--text-color)]/40">
                  {project.industry}
                </span>
              </div>

              <h3 className="text-base font-semibold tracking-tight mb-2 group-hover:text-[var(--accent-color)] transition-colors">
                {project.name}
              </h3>
              <p className="text-[var(--text-color)]/75 text-[0.875rem] mb-6 line-clamp-2">
                {project.result}
              </p>

              <div className="flex items-center gap-2 text-[0.875rem] font-bold text-[var(--accent-color)] hover:underline transition-colors">
                View Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

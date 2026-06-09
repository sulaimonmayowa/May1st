import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--surface-color)] text-[var(--text-color)] border-t border-[var(--text-color)]/5 rounded-t-[3rem] md:rounded-t-[4rem] px-6 pt-20 pb-12 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Brand & Status */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="font-[family-name:var(--font-space)] font-bold tracking-[-0.03em] text-xl mb-2">Sulaimon Mayowa</div>
            <div className="text-[var(--text-color)]/50 text-sm max-w-xs">Websites that build trust & drive growth.</div>
          </div>

          <div className="flex items-center gap-3 bg-[var(--bg-color)]/50 border border-[var(--text-color)]/10 w-fit px-4 py-2 rounded-full">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-2 h-2 bg-[#22c55e] rounded-full animate-[status-pulse_1.5s_infinite]" />
              <div className="relative w-2 h-2 bg-[#22c55e] rounded-full" />
            </div>
            <span className="font-[family-name:var(--font-mono)] text-[0.75rem] text-[var(--text-color)]/50">
              System Operational
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4 md:items-center">
          <h4 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--text-color)]/40 mb-2">Explore</h4>
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <Link href="#work" className="hover:text-[var(--accent-color)] transition-colors w-fit">Work</Link>
            <Link href="#services" className="hover:text-[var(--accent-color)] transition-colors w-fit">Services</Link>
            <Link href="/blog" className="hover:text-[var(--accent-color)] transition-colors w-fit">Blog</Link>
            <Link href="#about" className="hover:text-[var(--accent-color)] transition-colors w-fit">About</Link>
            <Link href="#process" className="hover:text-[var(--accent-color)] transition-colors w-fit">How I Work</Link>
            <Link href="#contact" className="hover:text-[var(--accent-color)] transition-colors w-fit">Contact</Link>
          </nav>
        </div>

        {/* Legal & Social */}
        <div className="flex flex-col gap-4 md:items-end">
          <h4 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--text-color)]/40 mb-2">Connect</h4>
          <nav className="flex flex-col gap-3 text-sm font-medium md:items-end">
            <a href="https://linkedin.com/in/sulaimon-mayowa" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors duration-200">LinkedIn</a>
            <a href="https://twitter.com/sulaimon_mayowa" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors duration-200">Twitter / X</a>
            <a href="mailto:a.sulaimonmayowa@gmail.com" className="hover:text-[var(--accent-color)] transition-colors duration-200 mt-2 font-bold">a.sulaimonmayowa@gmail.com</a>
          </nav>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--text-color)]/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-[family-name:var(--font-mono)] text-[var(--text-color)]/30">
        <div>&copy; {currentYear} Sulaimon Mayowa. All rights reserved.</div>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-[var(--text-color)] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[var(--text-color)] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

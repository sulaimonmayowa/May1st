export type Project = {
  slug: string;
  title: string;
  client: string;
  service: string;
  serviceTag: string;
  year: string;
  url: string;
  overview: string;
  problem: string;
  solution: string;
  results: string;
  stack: string[];
  image: string;
  industry: string;
};

export const projects: Project[] = [
  {
    slug: "smarts-magazine",
    title: "Smarts Magazine",
    client: "Smarts Magazine",
    industry: "African Media Brand",
    service: "Web Development",
    serviceTag: "WEB DEV",
    year: "2026",
    url: "https://www.smartsmagazine.com",
    image: "/smarts-home.png",
    overview:
      "Smarts Magazine is an Africa-focused digital media brand publishing news, long-form features, magazine editions, and video content. The brief was to build a scalable editorial platform that could handle high content volume while delivering a premium reading experience.",
    problem:
      "The client needed a fully-featured media platform — not just a blog. Requirements included a magazine archive, integrated TV/video section, SEO-optimized article structure, and a content system the editorial team could manage independently without developer support.",
    solution:
      "Built a custom WordPress platform with a bespoke UI design crafted from scratch. Architected a multi-content-type system covering news, magazines, and video. Designed the full visual identity of the site including color palette, typography, and layout system. Wrote and structured all web content for SEO performance.",
    results:
      "Delivered a fully operational editorial platform that matched the client's vision exactly. The team was able to independently publish content from day one. Site launched on schedule with all requested features live.",
    stack: ["WordPress", "Elementor Pro", "Yoast SEO", "Custom CSS", "WooCommerce"],
  },
  {
    slug: "prime-booth",
    title: "Prime Booth Edu Advisory",
    client: "Prime Booth Edu Advisory Ltd",
    industry: "Education Consultancy",
    service: "Web Development",
    serviceTag: "STRATEGY & DEV",
    year: "2026",
    url: "https://www.primebootheduadvisory.com",
    image: "/primebooth.png",
    overview:
      "Prime Booth Edu Advisory is a premium study abroad consultancy helping students secure placements at universities in the UK, Canada, and beyond. The project involved building a full-featured web platform to establish their digital presence and drive student enquiries at scale.",
    problem:
      "The client had no existing digital presence strong enough to compete in the study abroad market. They needed a platform that could handle university search, event listings, a blog, payment integration, and rank organically for competitive education keywords — all while looking premium enough to attract high-intent students.",
    solution:
      "Designed and developed a feature-rich WordPress platform from scratch. Created the full brand and visual identity including color palette, typography system, and UI component library. Built integrated systems for university search, blog, events management, and payment gateway. Structured all content architecture for SEO from the ground up.",
    results:
      "Delivered a platform the client described as exceeding their expectations. All requested features launched simultaneously. The site established a credible premium digital presence in the competitive study abroad space immediately on launch.",
    stack: ["WordPress", "Elementor Pro", "Yoast SEO", "Paystack", "Custom CSS", "Events Manager"],
  },
  {
    slug: "ieh-consult",
    title: "IEH Consult Ltd",
    client: "IE-Hub Ltd",
    industry: "Corporate Consulting",
    service: "Web Development + Digital Strategy",
    serviceTag: "DIGITAL PRESENCE",
    year: "2026",
    url: "https://iehconsult.com",
    image: "/iehconsult.png",
    overview:
      "IEH Consult is an international education and immigration consultancy operating across Nigeria, the UK, and beyond. The engagement involved a complete digital overhaul — rebuilding their brand presence and delivering three interconnected platforms: a corporate website, a university search portal, and an internal CRM system.",
    problem:
      "IEH's existing digital presence no longer reflected the scale of their operations. They needed three distinct platforms built simultaneously — each serving a different audience and function — while maintaining a cohesive brand identity across all three. SEO visibility was critically low and the team had no centralized system for managing leads and student data.",
    solution:
      "Designed and developed all three platforms in parallel. Crafted a unified visual identity and color system applied consistently across the corporate site, university search portal, and CRM interface. Built the corporate site on WordPress with full SEO architecture. Designed the university search portal with filtering and listing functionality. Delivered a CRM tailored to their student management and lead tracking workflow.",
    results:
      "Successfully launched three fully operational platforms under one cohesive brand. Delivered a digital infrastructure that supports IEH's operations across multiple countries and teams. Client reported the new platforms significantly elevated their professional positioning with institutional partners.",
    stack: ["WordPress", "Elementor Pro", "Yoast SEO", "Custom CSS", "Custom CRM", "University Search Portal"],
  },
];

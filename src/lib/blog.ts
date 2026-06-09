export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  image: string;
  published: boolean;
};

export const blogPosts: BlogPost[] = [
{
  slug: "why-every-nigerian-business-needs-a-website-in-2026",
  title: "Why Every Nigerian Business Needs a Proper Website in 2026",
  excerpt: "A social media page is not a website. Here is why Nigerian founders and SMEs are losing clients, credibility, and revenue without one.",
  content: `
## The Hard Truth Most Nigerian Businesses Ignore

If your only online presence is an Instagram page and a WhatsApp number, you do not have a digital presence — you have a contact card.

In 2026, the first thing any serious client, partner, or investor does before reaching out is Google you. If nothing comes up — or worse, if what comes up looks outdated and untrustworthy — you have already lost them before the conversation even started.

This is not theory. This is what I see every week working with founders across Nigeria, the UK, and beyond.

---

## What a Social Media Page Cannot Do

Social media is rented land. Instagram can ban your account, change its algorithm, or simply go down — and your entire business presence disappears overnight.

Beyond the risk, a social media page cannot do the things a proper website does:

- **Show up on Google** when someone searches for what you offer
- **Build trust** with a professional first impression before you speak to anyone
- **Explain your services clearly** without character limits or disappearing stories
- **Capture leads** with forms, booking systems, and email collection
- **Work for you 24/7** without you having to post, respond, or stay online

Your website is the only digital real estate you actually own.

---

## The Nigerian Market Is Moving Fast

Three years ago, having a website was optional for most small businesses in Nigeria. Today it is increasingly expected — especially if you are targeting clients in the UK, Canada, or the US, or working with corporate and institutional clients locally.

The businesses that invested in a proper digital presence early are now the ones showing up in search results, getting inbound enquiries, and closing deals without cold outreach.

The ones still relying on WhatsApp broadcasts are fighting for attention in an increasingly crowded feed.

---

## What a Proper Website Actually Does For Your Business

Here is what I have seen first-hand across projects:

### 1. It Qualifies Your Clients Before You Speak to Them
A well-structured website answers the questions your prospects have before they ask them — your services, your process, your pricing range, and your credibility. By the time someone contacts you, they already know they want to work with you.

### 2. It Works While You Sleep
Unlike a sales rep or a social post, your website is running every hour of every day. A study abroad consultancy I worked with started receiving enquiry form submissions at 2am from prospective students in different time zones — leads they would have missed entirely with just a WhatsApp number.

### 3. It Makes You Look the Part
Perception is reality in business. A clean, professional website signals to clients that you are serious, established, and invested in your own brand. It is often the difference between winning and losing a competitive pitch.

### 4. It Builds an Asset That Compounds Over Time
A social media post has a lifespan of hours. A well-optimised blog post or service page on your website can rank on Google and bring in traffic for years. Every page you add, every article you publish, builds on the last.

---

## What Separates a Proper Website From a Bad One

Not all websites are equal. A poorly built website can actually hurt your business — slow load times, confusing navigation, and generic design all signal the same thing: this business does not pay attention to detail.

A proper website in 2026 needs:

- **Fast load speed** — Google penalises slow sites and users leave within 3 seconds
- **Mobile-first design** — over 70% of Nigerian internet traffic is on mobile
- **Clear messaging** — visitors should understand what you do within 5 seconds of landing
- **SEO structure** — so Google can find and rank your pages
- **A clear call to action** — every page should tell the visitor exactly what to do next

---

## Who This Is For

If you are running any of the following in Nigeria or targeting Nigerian, UK, or US markets — you need a website:

- Education or study abroad consultancy
- Media or publishing brand
- Professional services firm (legal, finance, HR, consulting)
- E-commerce or product business
- Personal brand or freelance practice

The question is not whether you need one. The question is whether yours is doing the job.

---

## Final Thought

Your website is not a luxury or a nice-to-have. It is the foundation of your digital business. Everything else — your social media, your ads, your SEO — works better when it has a strong website to point to.

If you are ready to build something that actually works for your business, [let's talk](/contact).
  `.trim(),
    date: "2026-06-08",
    readingTime: "5 min read",
    category: "Web Development",
    tags: ["Web Development", "Nigerian Business", "Digital Strategy", "SEO"],
    image: "/marketing-saas-01.jpg",
    published: true,
  },
  {
    slug: "digital-marketing-roi-guide",
    title: "Maximizing ROI in Digital Marketing: A Data-Driven Approach",
    excerpt:
      "Stop guessing and start optimizing. Here's how to build a digital marketing strategy that delivers measurable returns across SEO, PPC, and content.",
    content: `
Every dollar spent on digital marketing should be traceable to a business outcome. Yet most businesses can't tell you which channels drive their highest ROI.

## The Channels That Deliver

Based on data from client campaigns and industry benchmarks:

- **SEO** delivers 8x higher long-term ROI than PPC
- **PPC** yields $2 for every $1 spent (200% ROI) when properly optimized
- **Content marketing** generates 3x more leads than paid advertising
- **Email marketing** averages $36 for every $1 spent

## The Problem with Most Strategies

The most common mistake is spreading budget too thin across too many channels. Instead of doing five things poorly, do two things exceptionally well.

## A Framework That Works

1. **Audit** — Measure current performance across all channels
2. **Focus** — Identify the two channels with the highest potential ROI
3. **Optimize** — Double down on what works, cut what doesn't
4. **Scale** — Reinvest profits into proven channels

## Measuring What Matters

Vanity metrics (likes, shares, impressions) don't pay the bills. Focus on:

- Cost per acquisition (CPA)
- Customer lifetime value (CLV)
- Return on ad spend (ROAS)
- Conversion rate by channel

The businesses that win at digital marketing are the ones that measure, iterate, and optimize relentlessly. There are no shortcuts.
    `.trim(),
    date: "2026-03-05",
    readingTime: "4 min read",
    category: "Digital Marketing",
    tags: ["Digital Marketing", "SEO", "PPC", "ROI", "Content Strategy"],
    image: "/digital-marketing.jpg",
    published: true,
  },
];

export const categories = [
  "Web Development",
  "AI & Automation",
  "Digital Marketing",
];

export const allTags = [
  "Next.js",
  "React",
  "Performance",
  "Tailwind CSS",
  "AI Agents",
  "Automation",
  "Business",
  "ROI",
  "SEO",
  "Digital Marketing",
  "Content Strategy",
  "Core Web Vitals",
  "CRM",
  "Web Development",
  "Database",
  "PPC",
  "Nigerian Business",
  "Digital Strategy",
];

export function getPostsByCategory(category: string) {
  return blogPosts.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase() && p.published
  );
}

export function getPostsByTag(tag: string) {
  return blogPosts.filter(
    (p) =>
          p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()) && p.published
  );
}

export function getPublishedPosts() {
  return blogPosts.filter((p) => p.published);
}

export function getRelatedPosts(currentSlug: string, limit = 2) {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  if (!current) return [];
  return blogPosts
    .filter(
      (p) =>
        p.slug !== currentSlug &&
        p.published &&
        (p.category === current.category ||
          p.tags.some((t) => current.tags.includes(t)))
    )
    .slice(0, limit);
}

import { Metadata } from "next";
import { blogPosts } from "@/lib/blog";
import PostClient from "./PostClient";

export async function generateStaticParams() {
  return blogPosts.filter((p) => p.published).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found — Sulaimon Mayowa" };

  return {
    title: `${post.title} — Sulaimon Mayowa`,
    description: post.excerpt.slice(0, 155),
    openGraph: {
      title: post.title,
      description: post.excerpt.slice(0, 155),
      images: [{ url: post.image }],
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PostClient slug={slug} />;
}

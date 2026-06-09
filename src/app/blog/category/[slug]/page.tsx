import { Metadata } from "next";
import Link from "next/link";
import { categories, getPostsByCategory } from "@/lib/blog";
import BlogArchiveClient from "../../BlogArchiveClient";

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.toLowerCase().replace(/\s+/g, "-") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${categoryName} — Blog — Sulaimon Mayowa`,
    description: `Articles about ${categoryName}.`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const posts = getPostsByCategory(categoryName);

  return (
    <BlogArchiveClient
      title={categoryName}
      posts={posts}
      type="category"
    />
  );
}

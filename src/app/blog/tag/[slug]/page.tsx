import { Metadata } from "next";
import { allTags, getPostsByTag } from "@/lib/blog";
import BlogArchiveClient from "../../BlogArchiveClient";

export async function generateStaticParams() {
  return allTags.map((tag) => ({ slug: tag.toLowerCase().replace(/\s+/g, "-") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tagName = slug.replace(/-/g, " ");
  return {
    title: `#${tagName} — Blog — Sulaimon Mayowa`,
    description: `Articles tagged with "${tagName}".`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tagName = slug.replace(/-/g, " ");
  const posts = getPostsByTag(tagName);

  return (
    <BlogArchiveClient
      title={`#${tagName}`}
      posts={posts}
      type="tag"
    />
  );
}

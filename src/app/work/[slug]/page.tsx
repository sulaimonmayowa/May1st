import { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectClient from "./ProjectClient";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found — Sulaimon Mayowa" };

  return {
    title: `${project.title} — Sulaimon Mayowa`,
    description: project.overview.slice(0, 155),
    openGraph: {
      title: project.title,
      description: project.overview.slice(0, 155),
      images: [{ url: project.image }],
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectClient slug={slug} />;
}

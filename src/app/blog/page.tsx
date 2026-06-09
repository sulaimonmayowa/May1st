import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog — Sulaimon Mayowa",
  description: "Insights on web development, AI agents, digital marketing, and building high-performance digital products.",
  openGraph: {
    title: "Blog — Sulaimon Mayowa",
    description: "Insights on web development, AI agents, digital marketing, and building high-performance digital products.",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}

import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/buildx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buildx — Build the Future" },
      { name: "description", content: "Practical courses for AI, automation, prompting, and Web3." },
      { property: "og:title", content: "Buildx — Build the Future" },
      { property: "og:description", content: "Practical courses for AI, automation, prompting, and Web3." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "../components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Pratham Hapani — Creative Developer" },
      { name: "description", content: "Pratham Hapani creates expressive, high-performance digital products and immersive web experiences." },
      { property: "og:title", content: "Pratham Hapani — Creative Developer" },
      { property: "og:description", content: "Creative developer crafting expressive digital products and immersive web experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

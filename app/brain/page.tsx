import type { Metadata } from "next";
import { BrainAtlasClient } from "@/components/brain/BrainAtlasClient";

export const metadata: Metadata = {
  title: "Creative Brain Atlas",
  description:
    "An artistic, plain-language atlas of major brain regions, including the hippocampus, amygdala, cortex, and brainstem.",
};

export default function BrainPage() {
  return <BrainAtlasClient />;
}

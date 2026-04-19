import type { Metadata } from "next";
import HomePageClient from "@/components/home/HomePageClient";

export const metadata: Metadata = {
  title: "LimbicLab — Computational Psychiatry Simulator",
};

export default function HomePage() {
  return <HomePageClient />;
}

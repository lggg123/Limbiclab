import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/ui/Navbar";
import MetaPixel from "@/components/meta/MetaPixel";
import GoogleAdsTag from "@/components/google/GoogleAdsTag";
import "./globals.css";

const lato = localFont({
  src: [
    {
      path: "../public/fonts/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const liberationMono = localFont({
  src: "../public/fonts/LiberationMono-Regular.ttf",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LimbicLab",
    template: "%s | LimbicLab",
  },
  description:
    "Computational psychiatry simulator modelling cannabis × hypomania interactions across polygenic bipolar risk — stochastic ODE engine, kindling model, and plain-language neuroscience explainer.",
  keywords: [
    "computational psychiatry",
    "bipolar disorder",
    "cannabis",
    "hypomania",
    "polygenic risk",
    "mood simulation",
    "neuroscience",
  ],
  authors: [{ name: "LimbicLab" }],
  openGraph: {
    title: "LimbicLab",
    description:
      "Explore how cannabis interacts with bipolar vulnerability through an interactive stochastic ODE simulator.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "LimbicLab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LimbicLab",
    description: "Computational neuroscience research — brain, belief, neurochemistry, epigenetics.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${liberationMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <MetaPixel />
        <GoogleAdsTag />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

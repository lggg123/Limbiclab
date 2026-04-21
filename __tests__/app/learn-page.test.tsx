import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import LearnPage from "@/app/learn/page";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("@/components/learn/ConceptCard", () => ({
  ConceptCard: ({ title }: { title: string }) => <div>{title}</div>,
}));

vi.mock("@/components/learn/DsmCategoryCard", () => ({
  DsmCategoryCard: ({ category }: { category: { family: string } }) => <div>{category.family}</div>,
}));

vi.mock("@/components/learn/DisorderExplorer", () => ({
  DisorderExplorer: () => <div>Disorder explorer</div>,
}));

vi.mock("@/components/learn/Glossary", () => ({
  Glossary: () => <div>Glossary</div>,
  toGlossaryTermId: (term: string) => term.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
}));

describe("LearnPage header links", () => {
  it("wires the explainer badges to the expected destinations", () => {
    render(<LearnPage />);

    expect(screen.getByText("Brain Atlas Linked").closest("a")).toHaveAttribute(
      "href",
      "/brain"
    );
    expect(screen.getByText("Evidence-Aware").closest("a")).toHaveAttribute(
      "href",
      "#evidence-boundaries"
    );
    expect(screen.getByText("DSM-5 Context").closest("a")).toHaveAttribute(
      "href",
      "#dsm5-study-map"
    );
  });
});

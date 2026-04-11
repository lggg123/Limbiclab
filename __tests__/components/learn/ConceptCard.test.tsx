import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ConceptCard } from "@/components/learn/ConceptCard";

const defaultProps = {
  emoji: "⚡",
  title: "Kindling Model",
  summary: "Why episodes beget episodes",
  detail: "Each episode lowers the neurobiological threshold for the next.",
};

describe("ConceptCard", () => {
  it("renders the title text", () => {
    render(<ConceptCard {...defaultProps} />);
    expect(screen.getByText("Kindling Model")).toBeInTheDocument();
  });

  it("renders the emoji", () => {
    render(<ConceptCard {...defaultProps} />);
    expect(screen.getByText("⚡")).toBeInTheDocument();
  });

  it("renders the summary text", () => {
    render(<ConceptCard {...defaultProps} />);
    expect(screen.getByText("Why episodes beget episodes")).toBeInTheDocument();
  });

  it("renders the detail text", () => {
    render(<ConceptCard {...defaultProps} />);
    expect(
      screen.getByText(
        "Each episode lowers the neurobiological threshold for the next."
      )
    ).toBeInTheDocument();
  });

  it("renders the title as an h3 element (via CardTitle)", () => {
    render(<ConceptCard {...defaultProps} />);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toContain("Kindling Model");
  });

  it("includes the emoji within the heading", () => {
    render(<ConceptCard {...defaultProps} />);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading.textContent).toContain("⚡");
  });

  it("renders different content for different props", () => {
    render(
      <ConceptCard
        emoji="🧬"
        title="Polygenic Risk"
        summary="Many small variants"
        detail="Hundreds of common variants combine into a polygenic risk score."
      />
    );
    expect(screen.getByText("Polygenic Risk")).toBeInTheDocument();
    expect(screen.getByText("Many small variants")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Hundreds of common variants combine into a polygenic risk score."
      )
    ).toBeInTheDocument();
  });

  it("does not render other concepts' text", () => {
    render(<ConceptCard {...defaultProps} />);
    expect(screen.queryByText("Polygenic Risk")).not.toBeInTheDocument();
  });

  it("renders multiple cards independently", () => {
    render(
      <>
        <ConceptCard
          emoji="⚡"
          title="Kindling"
          summary="summary 1"
          detail="detail 1"
        />
        <ConceptCard
          emoji="🧬"
          title="Genetics"
          summary="summary 2"
          detail="detail 2"
        />
      </>
    );
    expect(screen.getByText("Kindling")).toBeInTheDocument();
    expect(screen.getByText("Genetics")).toBeInTheDocument();
    expect(screen.getByText("summary 1")).toBeInTheDocument();
    expect(screen.getByText("summary 2")).toBeInTheDocument();
    expect(screen.getByText("detail 1")).toBeInTheDocument();
    expect(screen.getByText("detail 2")).toBeInTheDocument();
  });
});
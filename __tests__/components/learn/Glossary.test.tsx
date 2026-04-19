import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Glossary, GlossaryTerm } from "@/components/learn/Glossary";

describe("GlossaryTerm", () => {
  it("renders the term text", () => {
    render(<GlossaryTerm term="GWAS" definition="Genome-Wide Association Study" />);
    expect(screen.getByText("GWAS")).toBeInTheDocument();
  });

  it("renders the definition text", () => {
    render(<GlossaryTerm term="GWAS" definition="Genome-Wide Association Study" />);
    expect(screen.getByText("Genome-Wide Association Study")).toBeInTheDocument();
  });

  it("renders term in a dt element", () => {
    render(<GlossaryTerm term="ODE" definition="Ordinary Differential Equation" />);
    const dt = document.querySelector("dt");
    expect(dt).toBeInTheDocument();
    expect(dt?.textContent).toBe("ODE");
  });

  it("renders definition in a dd element", () => {
    render(<GlossaryTerm term="ODE" definition="Ordinary Differential Equation" />);
    const dd = document.querySelector("dd");
    expect(dd).toBeInTheDocument();
    expect(dd?.textContent).toBe("Ordinary Differential Equation");
  });

  it("term element has font-semibold styling", () => {
    render(<GlossaryTerm term="Kindling" definition="Episode threshold reduction" />);
    const dt = document.querySelector("dt");
    expect(dt?.className).toContain("font-semibold");
  });
});

describe("Glossary", () => {
  const sampleTerms = [
    { term: "GWAS", definition: "Genome-Wide Association Study" },
    { term: "ODE", definition: "Ordinary Differential Equation" },
    { term: "PRS", definition: "Polygenic Risk Score" },
  ];

  it("renders all terms", () => {
    render(<Glossary terms={sampleTerms} />);
    expect(screen.getByText("GWAS")).toBeInTheDocument();
    expect(screen.getByText("ODE")).toBeInTheDocument();
    expect(screen.getByText("PRS")).toBeInTheDocument();
  });

  it("renders all definitions", () => {
    render(<Glossary terms={sampleTerms} />);
    expect(screen.getByText("Genome-Wide Association Study")).toBeInTheDocument();
    expect(screen.getByText("Ordinary Differential Equation")).toBeInTheDocument();
    expect(screen.getByText("Polygenic Risk Score")).toBeInTheDocument();
  });

  it("renders a dl element as the container", () => {
    render(<Glossary terms={sampleTerms} />);
    const dl = document.querySelector("dl");
    expect(dl).toBeInTheDocument();
  });

  it("renders the correct number of term entries", () => {
    render(<Glossary terms={sampleTerms} />);
    const dtElements = document.querySelectorAll("dt");
    expect(dtElements.length).toBe(3);
  });

  it("renders empty list without errors", () => {
    const { container } = render(<Glossary terms={[]} />);
    expect(container.querySelector("dl")).toBeInTheDocument();
    expect(container.querySelectorAll("dt").length).toBe(0);
  });

  it("renders a single term correctly", () => {
    render(<Glossary terms={[{ term: "THC", definition: "Tetrahydrocannabinol" }]} />);
    expect(screen.getByText("THC")).toBeInTheDocument();
    expect(screen.getByText("Tetrahydrocannabinol")).toBeInTheDocument();
  });

  it("preserves order of terms as provided", () => {
    render(<Glossary terms={sampleTerms} />);
    const dtElements = Array.from(document.querySelectorAll("dt"));
    expect(dtElements[0].textContent).toBe("GWAS");
    expect(dtElements[1].textContent).toBe("ODE");
    expect(dtElements[2].textContent).toBe("PRS");
  });
});
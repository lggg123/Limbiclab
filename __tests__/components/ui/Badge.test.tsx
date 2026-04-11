import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/ui/Badge";

describe("Badge", () => {
  it("renders children text", () => {
    render(<Badge>Hello</Badge>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders as a span element", () => {
    render(<Badge>Label</Badge>);
    const el = screen.getByText("Label");
    expect(el.tagName).toBe("SPAN");
  });

  it("applies default variant classes when no variant is specified", () => {
    render(<Badge>Default</Badge>);
    const el = screen.getByText("Default");
    expect(el.className).toContain("bg-primary/15");
    expect(el.className).toContain("text-primary");
  });

  it("applies outline variant classes", () => {
    render(<Badge variant="outline">Outline</Badge>);
    const el = screen.getByText("Outline");
    expect(el.className).toContain("bg-transparent");
    expect(el.className).toContain("text-muted-foreground");
  });

  it("applies success variant classes", () => {
    render(<Badge variant="success">Success</Badge>);
    const el = screen.getByText("Success");
    expect(el.className).toContain("bg-success/15");
    expect(el.className).toContain("text-success");
  });

  it("applies warning variant classes", () => {
    render(<Badge variant="warning">Warning</Badge>);
    const el = screen.getByText("Warning");
    expect(el.className).toContain("bg-warning/15");
    expect(el.className).toContain("text-warning");
  });

  it("applies destructive variant classes", () => {
    render(<Badge variant="destructive">Danger</Badge>);
    const el = screen.getByText("Danger");
    expect(el.className).toContain("bg-destructive/15");
    expect(el.className).toContain("text-destructive");
  });

  it("merges additional className prop", () => {
    render(<Badge className="custom-class">Merged</Badge>);
    const el = screen.getByText("Merged");
    expect(el.className).toContain("custom-class");
  });

  it("passes through arbitrary HTML attributes", () => {
    render(<Badge data-testid="my-badge" aria-label="status">Status</Badge>);
    const el = screen.getByTestId("my-badge");
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("aria-label", "status");
  });

  it("forwards ref to the span element", () => {
    let capturedRef: HTMLSpanElement | null = null;
    render(
      <Badge ref={(el) => { capturedRef = el; }}>Ref test</Badge>
    );
    expect(capturedRef).toBeInstanceOf(HTMLSpanElement);
  });

  it("always includes base classes for layout and typography", () => {
    render(<Badge>Base</Badge>);
    const el = screen.getByText("Base");
    expect(el.className).toContain("inline-flex");
    expect(el.className).toContain("rounded-full");
    expect(el.className).toContain("border");
    expect(el.className).toContain("text-xs");
    expect(el.className).toContain("font-semibold");
  });

  it("renders with empty children gracefully", () => {
    const { container } = render(<Badge></Badge>);
    expect(container.firstChild).toBeInTheDocument();
  });
});
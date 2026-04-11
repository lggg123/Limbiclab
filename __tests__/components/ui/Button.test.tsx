import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders children text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders as a button element by default", () => {
    render(<Button>Action</Button>);
    expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
  });

  it("applies default variant and size classes", () => {
    render(<Button>Default</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("bg-primary");
    expect(btn.className).toContain("text-primary-foreground");
    // md size
    expect(btn.className).toContain("h-10");
    expect(btn.className).toContain("px-4");
  });

  it("applies outline variant classes", () => {
    render(<Button variant="outline">Outline</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("border");
    expect(btn.className).toContain("bg-transparent");
    expect(btn.className).toContain("text-foreground");
  });

  it("applies ghost variant classes", () => {
    render(<Button variant="ghost">Ghost</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("bg-transparent");
    expect(btn.className).toContain("text-foreground");
  });

  it("applies destructive variant classes", () => {
    render(<Button variant="destructive">Delete</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("bg-destructive");
    expect(btn.className).toContain("text-destructive-foreground");
  });

  it("applies sm size classes", () => {
    render(<Button size="sm">Small</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("h-8");
    expect(btn.className).toContain("px-3");
    expect(btn.className).toContain("text-xs");
    expect(btn.className).toContain("rounded-md");
  });

  it("applies lg size classes", () => {
    render(<Button size="lg">Large</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("h-12");
    expect(btn.className).toContain("px-6");
    expect(btn.className).toContain("text-base");
    expect(btn.className).toContain("rounded-xl");
  });

  it("merges additional className prop", () => {
    render(<Button className="extra-class">Custom</Button>);
    expect(screen.getByRole("button").className).toContain("extra-class");
  });

  it("calls onClick handler when clicked", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is set", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });

  it("does not call onClick when disabled", () => {
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Disabled</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies disabled opacity class", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("disabled:opacity-50");
  });

  it("renders asChild by cloning the child element with button classes", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    const link = screen.getByRole("link", { name: "Link Button" });
    expect(link.tagName).toBe("A");
    expect(link.className).toContain("bg-primary");
    expect(link.className).toContain("inline-flex");
  });

  it("forwards ref to the button element", () => {
    let capturedRef: HTMLButtonElement | null = null;
    render(
      <Button ref={(el) => { capturedRef = el; }}>Ref test</Button>
    );
    expect(capturedRef).toBeInstanceOf(HTMLButtonElement);
  });

  it("passes through type attribute", () => {
    render(<Button type="submit">Submit</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("type", "submit");
  });

  it("includes base accessibility classes for focus-visible ring", () => {
    render(<Button>Focus</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("focus-visible:ring-2");
  });
});
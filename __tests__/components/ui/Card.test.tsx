import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("renders as a div", () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild?.nodeName).toBe("DIV");
  });

  it("applies base card classes", () => {
    const { container } = render(<Card>Content</Card>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("rounded-xl");
    expect(el.className).toContain("border");
    expect(el.className).toContain("bg-card");
    expect(el.className).toContain("shadow-sm");
  });

  it("merges additional className prop", () => {
    const { container } = render(<Card className="my-custom">Content</Card>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("my-custom");
    expect(el.className).toContain("rounded-xl");
  });

  it("forwards ref to the div element", () => {
    let ref: HTMLDivElement | null = null;
    render(<Card ref={(el) => { ref = el; }}>Ref</Card>);
    expect(ref).toBeInstanceOf(HTMLDivElement);
  });

  it("passes through arbitrary HTML attributes", () => {
    render(<Card data-testid="card-el">Content</Card>);
    expect(screen.getByTestId("card-el")).toBeInTheDocument();
  });
});

describe("CardHeader", () => {
  it("renders children", () => {
    render(<CardHeader>Header content</CardHeader>);
    expect(screen.getByText("Header content")).toBeInTheDocument();
  });

  it("applies flex layout classes", () => {
    const { container } = render(<CardHeader>Header</CardHeader>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("flex");
    expect(el.className).toContain("flex-col");
    expect(el.className).toContain("p-6");
  });

  it("merges additional className", () => {
    const { container } = render(<CardHeader className="extra">Header</CardHeader>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("extra");
  });
});

describe("CardTitle", () => {
  it("renders children text", () => {
    render(<CardTitle>My Title</CardTitle>);
    expect(screen.getByText("My Title")).toBeInTheDocument();
  });

  it("renders as an h3 element", () => {
    render(<CardTitle>Title</CardTitle>);
    const el = screen.getByText("Title");
    expect(el.tagName).toBe("H3");
  });

  it("applies typography classes", () => {
    render(<CardTitle>Title</CardTitle>);
    const el = screen.getByText("Title");
    expect(el.className).toContain("text-xl");
    expect(el.className).toContain("font-semibold");
    expect(el.className).toContain("leading-none");
    expect(el.className).toContain("tracking-tight");
  });

  it("merges additional className", () => {
    render(<CardTitle className="custom-title">Title</CardTitle>);
    const el = screen.getByText("Title");
    expect(el.className).toContain("custom-title");
  });
});

describe("CardContent", () => {
  it("renders children", () => {
    render(<CardContent>Body text</CardContent>);
    expect(screen.getByText("Body text")).toBeInTheDocument();
  });

  it("applies padding classes with zero top padding", () => {
    const { container } = render(<CardContent>Content</CardContent>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("p-6");
    expect(el.className).toContain("pt-0");
  });

  it("merges additional className", () => {
    const { container } = render(<CardContent className="extra">Content</CardContent>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("extra");
  });
});

describe("CardFooter", () => {
  it("renders children", () => {
    render(<CardFooter>Footer text</CardFooter>);
    expect(screen.getByText("Footer text")).toBeInTheDocument();
  });

  it("applies flex layout and padding classes", () => {
    const { container } = render(<CardFooter>Footer</CardFooter>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("flex");
    expect(el.className).toContain("items-center");
    expect(el.className).toContain("p-6");
    expect(el.className).toContain("pt-0");
  });

  it("merges additional className", () => {
    const { container } = render(<CardFooter className="footer-extra">Footer</CardFooter>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("footer-extra");
  });
});

describe("Card composition", () => {
  it("renders full card with header, title, content, and footer", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardContent>Card body</CardContent>
        <CardFooter>Card footer</CardFooter>
      </Card>
    );
    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByText("Card body")).toBeInTheDocument();
    expect(screen.getByText("Card footer")).toBeInTheDocument();
  });

  it("CardTitle renders as h3 within Card", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Heading</CardTitle>
        </CardHeader>
      </Card>
    );
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent("Heading");
  });
});
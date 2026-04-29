import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders primary variant by default", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("renders secondary variant", () => {
    render(<Button variant="secondary">Click</Button>);
    expect(screen.getByRole("button").className).toContain("border");
  });
  it("renders ghost variant", () => {
    render(<Button variant="ghost">Click</Button>);
    expect(screen.getByRole("button").className).toContain("bg-transparent");
  });
  it("renders icon-only variant with aria-label", () => {
    render(<Button variant="icon" aria-label="menu">≡</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "menu");
  });
  it("renders as Slot when asChild is true", () => {
    render(<Button asChild><a href="/x">Link</a></Button>);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/x");
  });
});

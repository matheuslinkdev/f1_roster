import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("<Home/>", () => {
  test("Formula One link has the correct URL", () => {
    render(<Home />);
    const f1Link = screen.getByRole("link", { name: /Formula 1/i });
    expect(f1Link).toHaveAttribute("href", "/formulaone");
  });

  test("Formula Two link has the correct URL", () => {
    render(<Home />);
    const f1Link = screen.getByRole("link", { name: /Formula 2/i });
    expect(f1Link).toHaveAttribute("href", "/formulatwo");
  });

  test("F1 Academy link has the correct URL", () => {
    render(<Home />);
    const f1Link = screen.getByRole("link", { name: /F1 Academy/i });
    expect(f1Link).toHaveAttribute("href", "/formulaacademy");
  });
});

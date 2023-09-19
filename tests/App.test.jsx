import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

// This is an example to show hot to write test
describe("true false tests", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });

  it("2 plus 2 equals to 4", () => {
    expect(2 + 2).toBe(4);
  });
});

// Real tests
describe("App component", () => {
  // Bug, to be fixed...
  it("render correct heading", () => {
    const { app } = render(<App />);
    expect(app.querySelector(".header").textContent).toMatch(
      /welcom to shopping now!/i
    );
  });
});

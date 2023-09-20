import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
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
  it("full app rendering/navigating", async () => {
    const user = userEvent.setup();
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/welcome to shopping now!/i)).toBeInTheDocument();
    // await user.click();
  });
});

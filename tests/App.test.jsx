import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import Header from "../src/Header";
import Cart from "../src/Cart";
import Footer from "../src/Footer";
import Products from "../src/Products";
import ProductDetail from "../src/ProductDetail";

describe("Header component", () => {
  it("renders correct text and correct link", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText("Shopping Now!")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shopping Now!" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Products" })).toHaveAttribute(
      "href",
      "/products"
    );
    expect(screen.getByText("Cart")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Cart (0)" })).toHaveAttribute(
      "href",
      "/cart"
    );
    expect(screen.getByText("(0)")).toBeInTheDocument();
  });
});

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/welcome to shopping now!/i)).toBeInTheDocument();
  });

  it("renders homepage button with correct text and btn class", () => {
    render(<App />, { wrapper: BrowserRouter });
    const button = screen.getByRole("link");
    expect(button).toHaveClass("btn", "start-btn");
    expect(button).toHaveTextContent("Browse our products ---->");
    expect(button).toHaveAttribute("href", "/products");
  });
});

describe("Footer component", () => {
  it("renders correct text", () => {
    render(<Footer />);
    expect(screen.getByText("© 2023 Shopping Now!")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 5 })).toHaveClass("footer");
  });
});

describe("Products component", () => {
  it("have correct class", () => {
    render(<Products />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("products")).toHaveClass("products");
  });
});

describe("ProductDetail component", () => {
  it("render a button, correct text, and class", () => {
    render(<ProductDetail />, { wrapper: BrowserRouter });
    const image = document.querySelector("img");
    expect(screen.getByTestId("details")).toHaveClass("details");
    expect(image).toHaveClass("grid-img");
    expect(screen.getByRole("heading", { level: 2 })).toHaveClass("grid-title");
    expect(screen.getByText("Price:")).toBeInTheDocument();
    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText("Quantity:")).toBeInTheDocument();
    const button = screen.getByRole("button", { name: "Add to Cart" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn", "add-btn");
  });

  it("should call onClick function when clicked", async () => {
    const addCart = vi.fn();
    const user = userEvent.setup();
    render(<ProductDetail addCart={addCart} />, {
      wrapper: BrowserRouter,
    });
    const button = screen.getByRole("button", { name: "Add to Cart" });
    await user.click(button);
    expect(addCart).toHaveBeenCalled();
  });

  it("should not not call onClick function when clicked", async () => {
    const addCart = vi.fn();
    render(<ProductDetail addCart={addCart} />, { wrapper: BrowserRouter });
    expect(addCart).not.toHaveBeenCalled();
  });
});

describe("Cart component", () => {
  it("should show correct text", () => {
    render(<Cart />, { wrapper: BrowserRouter });
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });
});

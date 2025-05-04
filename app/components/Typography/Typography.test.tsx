import React from "react";
import { render, screen } from "@testing-library/react";
import EloTypography from "./Typography";
import "@testing-library/jest-dom";

describe("EloTypography", () => {
  it("should render with default props", () => {
    render(<EloTypography>Texto padrão</EloTypography>);
    const element = screen.getByText("Texto padrão");
    expect(element.tagName.toLowerCase()).toBe("p");
    expect(element).toHaveClass("theme-grey");
    expect(element).toHaveClass("text-primary-500");
    expect(element).toHaveClass("text-md");
  });

  it("should render with custom HTML element", () => {
    render(<EloTypography element="h1">Título</EloTypography>);
    const element = screen.getByText("Título");
    expect(element.tagName.toLowerCase()).toBe("h1");
  });

  it("should apply custom className along with variants", () => {
    render(<EloTypography className="custom-class">Texto</EloTypography>);
    const element = screen.getByText("Texto");
    expect(element).toHaveClass("theme-grey");
    expect(element).toHaveClass("custom-class");
  });

  it("should apply correct variant class", () => {
    render(<EloTypography variant="secondary">Texto</EloTypography>);
    const element = screen.getByText("Texto");
    expect(element).toHaveClass("text-primary-300");
  });

  it("should apply correct size class", () => {
    render(<EloTypography size="title2">Texto</EloTypography>);
    const element = screen.getByText("Texto");
    expect(element).toHaveClass("text-tlg");
  });

  it("should spread additional props onto the element", () => {
    render(<EloTypography data-testid="typography-element">Texto</EloTypography>);
    const element = screen.getByTestId("typography-element");
    expect(element).toBeInTheDocument();
  });

  it.each([
    ["xs", "text-xs"],
    ["sm", "text-sm"],
    ["md", "text-md"],
    ["xl", "text-xl"],
    ["title1", "text-txl"],
    ["title2", "text-tlg"],
    ["title3", "text-tmd"],
  ] as const)("should apply size='%s' class as '%s'", (size, expectedClass) => {
    render(<EloTypography size={size}>Texto tamanho {size}</EloTypography>);
    const element = screen.getByText(`Texto tamanho ${size}`);
    expect(element).toHaveClass(expectedClass);
  });

  it.each([
    ["primary", "text-primary-500"],
    ["secondary", "text-primary-300"],
    ["tertiary", "text-primary-100"],
  ] as const)("should apply variant='%s' class as '%s'", (variant, expectedClass) => {
    render(<EloTypography variant={variant}>Texto variante {variant}</EloTypography>);
    const element = screen.getByText(`Texto variante ${variant}`);
    expect(element).toHaveClass(expectedClass);
  });
});

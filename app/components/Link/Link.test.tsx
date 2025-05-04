import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EloLink from "./Link";

jest.mock("../IconContainer/IconContainer", () => ({
  __esModule: true,
  default: ({ name, style, size, color }: any) => (
    <div
      data-testid="mock-icon"
      data-name={name}
      data-style={style}
      data-size={size}
      data-color={color}
    >
      Mocked Icon - {name}
    </div>
  ),
}));

jest.mock("../../utils/utils", () => ({
  checkIfCustomColor: jest.fn((color) => color === "#FF0000"),
}));

describe("EloLink", () => {
  beforeEach(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      :root {
        --icon-xs: 12px;
        --icon-sm: 14px;
        --icon-md: 16px;
        --icon-lg: 20px;
        --text-xs: 10px;
        --text-sm: 12px;
        --text-md: 14px;
        --text-lg: 16px;
      }
    `;
    document.head.appendChild(style);
  });

  it("should render with default props", () => {
    render(<EloLink href="/test">Link padrão</EloLink>);
    const link = screen.getByText("Link padrão");
    expect(link).toHaveAttribute("href", "/test");
    expect(link).toBeInTheDocument();
  });

  it("should render disabled link without href", () => {
    render(<EloLink href="/test" disabled>Desabilitado</EloLink>);
    const link = screen.getByText("Desabilitado");
    expect(link).not.toHaveAttribute("href");
    expect(link).toHaveAttribute("aria-disabled", "true");
  });

  it("should apply underline style when underline is true", () => {
    render(<EloLink underline href="/test">Sublinhado</EloLink>);
    const container = screen.getByText("Sublinhado").parentElement;
    expect(container).toHaveClass("hover:underline");
  });

  it("should apply custom className", () => {
    render(<EloLink className="custom-link" href="/test">Com classe</EloLink>);
    const link = screen.getByText("Com classe");
    expect(link).toHaveClass("custom-link");
  });

  it("should render with iconStart", () => {
    render(
      <EloLink
        iconStart={{ iconName: "ArchiveBoxIcon", solid: true }}
        href="/start"
      >
        Início
      </EloLink>
    );
    const icon = screen.getByTestId("mock-icon");
    expect(icon).toHaveAttribute("data-name", "ArchiveBoxIcon");
    expect(icon).toHaveAttribute("data-style", "solid");
  });

  it("should render with iconEnd", () => {
    render(
      <EloLink
        iconEnd={{ iconName: "ArchiveBoxIcon", solid: false }}
        href="/end"
      >
        Fim
      </EloLink>
    );
    const icon = screen.getByTestId("mock-icon");
    expect(icon).toHaveAttribute("data-name", "ArchiveBoxIcon");
    expect(icon).toHaveAttribute("data-style", "outline");
  });

  it("should apply custom color if provided", () => {
    render(
      <EloLink color="#FF0000" href="/colorido">
        Colorido
      </EloLink>
    );
    const link = screen.getByText("Colorido");
    expect(link).toHaveStyle({ color: "#FF0000" });
  });

  it("should apply text color class if not custom color", () => {
    render(
      <EloLink color="secondary" href="/sec">
        Secundário
      </EloLink>
    );
    const link = screen.getByText("Secundário");
    expect(link).toHaveClass("text-secondary");
  });

  it("should pass rest props to anchor tag", () => {
    render(
      <EloLink href="/target" target="_blank" rel="noopener">
        Externo
      </EloLink>
    );
    const link = screen.getByText("Externo");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener");
  });
});

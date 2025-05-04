import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EloInput from "./Input";

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

describe("EloInput", () => {
  it("should render an input by default", () => {
    render(<EloInput placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input.tagName).toBe("INPUT");
  });

  it("should render a textarea when multiline is true", () => {
    render(<EloInput multiline placeholder="Enter multiline" />);
    const textarea = screen.getByPlaceholderText("Enter multiline");
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  it("should render a label when provided", () => {
    render(<EloInput label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("should render a required indicator when required is true", () => {
    render(<EloInput label="Email" required />);
    expect(screen.getByText("Email *")).toBeInTheDocument();
  });

  it("should render a start icon when iconStart is provided", () => {
    render(
      <EloInput
        iconStart={{ iconName: "UserIcon", solid: true }}
        placeholder="With icon"
      />
    );
    const icon = screen.getByTestId("mock-icon");
    expect(icon).toHaveAttribute("data-name", "UserIcon");
    expect(icon).toHaveAttribute("data-style", "solid");
  });

  it("should render an end icon when iconEnd is provided", () => {
    render(
      <EloInput
        iconEnd={{ iconName: "LockClosedIcon" }}
        placeholder="With end icon"
      />
    );
    const icon = screen.getByTestId("mock-icon");
    expect(icon).toHaveAttribute("data-name", "LockClosedIcon");
    expect(icon).toHaveAttribute("data-style", "outline");
  });

  it("should render error message when error prop is provided", () => {
    render(
      <EloInput
        error={{ message: "Campo obrigatório" }}
        placeholder="Erro"
      />
    );
    expect(screen.getByText("Campo obrigatório")).toBeInTheDocument();
  });

  it("should apply custom className to the input/textarea", () => {
    render(<EloInput className="custom-class" placeholder="Teste" />);
    const input = screen.getByPlaceholderText("Teste");
    expect(input).toHaveClass("custom-class");
  });

  it("should pass additional props to the input element", () => {
    render(<EloInput type="email" placeholder="Your email" />);
    const input = screen.getByPlaceholderText("Your email");
    expect(input).toHaveAttribute("type", "email");
  });
});

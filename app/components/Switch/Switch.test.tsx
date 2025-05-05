import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EloSwitch, { SwitchProps } from "./Switch";
import "@testing-library/jest-dom";

jest.mock("./Switch.style", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(({ variant, enabled, disabled, size }) => ({
    Container: `container-${variant}-${enabled}-${disabled}-${size}`,
    Switch: `switch-${variant}-${enabled}-${disabled}-${size}`,
    Icon: `icon-${variant}-${enabled}-${disabled}-${size}`,
  })),
}));

describe("EloSwitch", () => {
  const renderSwitch = (props: Partial<SwitchProps> = {}) => {
    return render(<EloSwitch size="default" {...props} />);
  };

  it("should render correctly with default props", () => {
    renderSwitch({ defaultEnable: false });
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("should toggle state when clicked and call onChange with updated value", () => {
    const onChangeMock = jest.fn();
    renderSwitch({ defaultEnable: false, onChange: onChangeMock });

    const switchElement = screen.getByRole("switch");

    fireEvent.click(switchElement);
    expect(onChangeMock).toHaveBeenCalledWith(true);

    fireEvent.click(switchElement);
    expect(onChangeMock).toHaveBeenCalledWith(false);
  });

  it("should not toggle or call onChange when disabled", () => {
    const onChangeMock = jest.fn();
    renderSwitch({ defaultEnable: false, onChange: onChangeMock, disabled: true });

    fireEvent.click(screen.getByRole("switch"));
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it("should apply correct styles based on variant, state and size", () => {
    renderSwitch({ defaultEnable: true, variant: "colorful", size: "small", disabled: false });
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveClass("container-colorful-true-false-small");
  });

  it("should render a visually hidden label for accessibility", () => {
    renderSwitch();
    const label = screen.getByText("switch toggle");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("sr-only");
  });

  it("should render check icon when variant is 'colorful-icon' and enabled is true", () => {
    renderSwitch({ defaultEnable: true, variant: "colorful-icon" });
    const switchElement = screen.getByRole("switch");
    const svg = switchElement.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(switchElement).toHaveClass("container-colorful-icon-true-false-default");
  });

  it("should render x icon when variant is 'colorful-icon' and enabled is false", () => {
    renderSwitch({ defaultEnable: false, variant: "colorful-icon" });
    const switchElement = screen.getByRole("switch");
    const svg = switchElement.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(switchElement).toHaveClass("container-colorful-icon-false-false-default");
  });
});

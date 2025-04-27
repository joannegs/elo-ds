import { render, fireEvent } from "@testing-library/react";
import EloCheckbox from "./Checkbox";
import "@testing-library/jest-dom";
import React from "react";

describe("EloCheckbox", () => {
  it("should render without crashing", () => {
    const { getByTestId } = render(<EloCheckbox />);
    expect(getByTestId("elo-checkbox")).toBeInTheDocument();
  });

  it("should display the label if the label prop is passed", () => {
    const { getByText } = render(<EloCheckbox label="Checkbox Label" />);
    expect(getByText("Checkbox Label")).toBeInTheDocument();
  });

  it("should not display the label if the label prop is not passed", () => {
    const { queryByText } = render(<EloCheckbox />);
    expect(queryByText("Checkbox Label")).toBeNull();
  });

  it("should toggle checked state when clicked", () => {
    const { getByTestId } = render(<EloCheckbox />);
    const checkbox = getByTestId("elo-checkbox");
    const checkboxInner = checkbox.querySelector("div");
    
    // Check the initial state is unchecked
    expect(checkboxInner).toHaveClass("border-gray-300");
    
    fireEvent.click(checkbox);
    
    expect(checkboxInner).toHaveClass("bg-primary");
    expect(checkboxInner).toHaveClass("border-primary");
  });

  it("should call the onChange function when clicked", () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<EloCheckbox onChange={onChangeMock} />);
    const checkbox = getByTestId("elo-checkbox");
    
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledWith(true);

    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledWith(false);
  });

  it("should respect the checked prop and stay checked when passed as true", () => {
    const { getByTestId } = render(<EloCheckbox checked={true} />);
    const checkbox = getByTestId("elo-checkbox");
    const checkboxInner = checkbox.querySelector("div");
    
    expect(checkboxInner).toHaveClass("bg-primary");
    expect(checkboxInner).toHaveClass("border-primary");
  });

  it("should respect the checked prop and stay unchecked when passed as false", () => {
    const { getByTestId } = render(<EloCheckbox checked={false} />);
    const checkbox = getByTestId("elo-checkbox");
    const checkboxInner = checkbox.querySelector("div");

    expect(checkboxInner).toHaveClass("border-gray-300");
  });

  it("should apply the disabled state correctly", () => {
    const { getByTestId } = render(<EloCheckbox disabled />);
    const checkbox = getByTestId("elo-checkbox");
    const checkboxInner = checkbox.querySelector("div");

    expect(checkbox).toHaveClass("opacity-50");
    expect(checkbox).toHaveClass("cursor-not-allowed");
    expect(checkboxInner).toHaveClass("bg-gray-200");
    expect(checkboxInner).toHaveClass("border-gray-400");
  });

  it("should not toggle checked state when clicked if disabled", () => {
    const { getByTestId } = render(<EloCheckbox disabled />);
    const checkbox = getByTestId("elo-checkbox");
    const checkboxInner = checkbox.querySelector("div");

    fireEvent.click(checkbox);

    expect(checkboxInner).toHaveClass("bg-gray-200");
    expect(checkboxInner).toHaveClass("border-gray-400");
  });

  it("should apply custom className passed via the className prop", () => {
    const { getByTestId } = render(<EloCheckbox className="custom-class" />);
    const checkbox = getByTestId("elo-checkbox");
    
    expect(checkbox).toHaveClass("custom-class");
  });
});

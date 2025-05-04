import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EloMultiStep from "./MultiStep";
import React from "react";

describe("EloMultiStep", () => {
  it("should render the correct number of steps", () => {
    render(<EloMultiStep size={5} currentStep={1} />);
    const steps = screen.getAllByTestId("elo-multi-step-item");
    expect(steps).toHaveLength(5);
  });

  it("should apply 'bg-primary' to completed and current steps", () => {
    render(<EloMultiStep size={4} currentStep={2} />);
    const steps = screen.getAllByTestId("elo-multi-step-item");

    expect(steps[0]).toHaveClass("bg-primary");
    expect(steps[1]).toHaveClass("bg-primary");
    expect(steps[2]).toHaveClass("bg-disabled");
    expect(steps[3]).toHaveClass("bg-disabled");
  });

  it("should render bar variant by default", () => {
    render(<EloMultiStep size={3} currentStep={1} />);
    const steps = screen.getAllByTestId("elo-multi-step-item");
    steps.forEach((step) => {
      expect(step).toHaveClass("h-1");
      expect(step).toHaveClass("rounded");
    });
  });

  it("should render dot variant when specified", () => {
    render(<EloMultiStep size={3} currentStep={2} variant="dot" />);
    const steps = screen.getAllByTestId("elo-multi-step-item");
    steps.forEach((step) => {
      expect(step).toHaveClass("w-2", "h-2", "rounded-full");
    });
  });

  it("should apply container layout for dot variant", () => {
    render(<EloMultiStep size={3} currentStep={1} variant="dot" />);
    const container = screen.getByTestId("elo-multi-step");
    expect(container).toHaveClass("flex", "items-center", "justify-center");
  });

  it("should apply custom className", () => {
    render(
      <EloMultiStep
        size={3}
        currentStep={1}
        className="custom-multistep"
        data-testid="custom"
      />
    );
    const container = screen.getByTestId("custom");
    expect(container).toHaveClass("custom-multistep");
  });

  it("should forward additional props to the container", () => {
    render(
      <EloMultiStep
        size={2}
        currentStep={1}
        id="multi-step-id"
        aria-label="progress indicator"
      />
    );
    const container = screen.getByLabelText("progress indicator");
    expect(container).toHaveAttribute("id", "multi-step-id");
  });
});

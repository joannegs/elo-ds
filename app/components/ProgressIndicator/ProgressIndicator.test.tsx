import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EloProgressIndicator from "./ProgressIndicator";
import React from "react";

describe("EloProgressIndicator", () => {
  it("should render the outer progress bar container", () => {
    render(<EloProgressIndicator percentage={50} />);
    const progressBar = screen.getByTestId("elo-progress-indicator");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveClass("bg-disabled", "rounded", "w-full", "h-1", "overflow-hidden");
  });

  it("should render the inner bar with correct width based on percentage", () => {
    render(<EloProgressIndicator percentage={75} />);
    const innerBar = screen.getByTestId("elo-progress-indicator").firstChild;
    expect(innerBar).toHaveStyle("width: 75%");
    expect(innerBar).toHaveClass("bg-primary", "h-full", "transition-all", "duration-300");
  });

  it("should clamp percentage below 0 to 0%", () => {
    render(<EloProgressIndicator percentage={-10} />);
    const innerBar = screen.getByTestId("elo-progress-indicator").firstChild;
    expect(innerBar).toHaveStyle("width: 0%");
  });

  it("should clamp percentage above 100 to 100%", () => {
    render(<EloProgressIndicator percentage={120} />);
    const innerBar = screen.getByTestId("elo-progress-indicator").firstChild;
    expect(innerBar).toHaveStyle("width: 100%");
  });

  it("should apply custom className", () => {
    render(
      <EloProgressIndicator
        percentage={50}
        className="custom-progress"
      />
    );
    const progressBar = screen.getByTestId("elo-progress-indicator");
    expect(progressBar).toHaveClass("custom-progress");
  });

  it("should pass additional props to the container", () => {
    render(
      <EloProgressIndicator
        percentage={30}
        id="progress-bar-id"
        aria-label="Progress bar"
      />
    );
    const container = screen.getByLabelText("Progress bar");
    expect(container).toHaveAttribute("id", "progress-bar-id");
  });
});

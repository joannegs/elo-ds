import { render } from "@testing-library/react";
import EloCardContainer from "./CardContainer";
import "@testing-library/jest-dom";
import React from "react";

describe("EloCardContainer", () => {
  it("should render children inside the card container", () => {
    const { getByTestId } = render(
      <EloCardContainer>
        <div>Test Child</div>
      </EloCardContainer>
    );
    expect(getByTestId("elo-card-container")).toBeInTheDocument();
    expect(getByTestId("elo-card-container").textContent).toBe("Test Child");
  });

  it("should apply the correct base classes", () => {
    const { getByTestId } = render(
      <EloCardContainer>
        <div>Test Child</div>
      </EloCardContainer>
    );
    const cardWrapper = getByTestId("elo-card-container").firstChild;
    expect(cardWrapper).toHaveClass("transition-all");
    expect(cardWrapper).toHaveClass("rounded-xl");
    expect(cardWrapper).toHaveClass("p-4");
    expect(cardWrapper).toHaveClass("flex");
    expect(cardWrapper).toHaveClass("items-center");
    expect(cardWrapper).toHaveClass("justify-center");
  });

  it("should apply shadow classes when shadow prop is true", () => {
    const { getByTestId } = render(
      <EloCardContainer shadow>
        <div>Test Child</div>
      </EloCardContainer>
    );
    const cardWrapper = getByTestId("elo-card-container").firstChild;
    expect(cardWrapper).toHaveClass("shadow-sm");
  });

  it("should not apply shadow classes when shadow prop is false", () => {
    const { getByTestId } = render(
      <EloCardContainer shadow={false}>
        <div>Test Child</div>
      </EloCardContainer>
    );
    const cardWrapper = getByTestId("elo-card-container").firstChild;
    expect(cardWrapper).not.toHaveClass("shadow-sm");
  });

  it("should apply hover effect when hideHover prop is false", () => {
    const { getByTestId } = render(
      <EloCardContainer hideHover={false}>
        <div>Test Child</div>
      </EloCardContainer>
    );
    const cardWrapper = getByTestId("elo-card-container").firstChild;
    expect(cardWrapper).toHaveClass("hover:scale-[1.01]");
  });

  it("should not apply hover effect when hideHover prop is true", () => {
    const { getByTestId } = render(
      <EloCardContainer hideHover={true}>
        <div>Test Child</div>
      </EloCardContainer>
    );
    const cardWrapper = getByTestId("elo-card-container").firstChild;
    expect(cardWrapper).not.toHaveClass("hover:scale-[1.01]");
  });

  it("should apply border classes when border prop is true", () => {
    const { getByTestId } = render(
      <EloCardContainer border>
        <div>Test Child</div>
      </EloCardContainer>
    );
    const cardWrapper = getByTestId("elo-card-container").firstChild;
    expect(cardWrapper).toHaveClass("border");
    expect(cardWrapper).toHaveClass("border-surface-medium");
  });

  it("should not apply border classes when border prop is false", () => {
    const { getByTestId } = render(
      <EloCardContainer border={false}>
        <div>Test Child</div>
      </EloCardContainer>
    );
    const cardWrapper = getByTestId("elo-card-container").firstChild;
    expect(cardWrapper).not.toHaveClass("border");
  });

  it("should apply custom background color when customBackground is passed", () => {
    const { getByTestId } = render(
      <EloCardContainer customBackground="blue">
        <div>Test Child</div>
      </EloCardContainer>
    );
    const cardWrapper = getByTestId("elo-card-container").firstChild;
    expect(cardWrapper).toHaveStyle("background-color: blue");
  });

  it("should apply fixed dimensions when fixedDimensions prop is provided", () => {
    const { getByTestId } = render(
      <EloCardContainer fixedDimensions={{ width: 200, height: 300 }}>
        <div>Test Child</div>
      </EloCardContainer>
    );
    const cardWrapper = getByTestId("elo-card-container").firstChild;
    expect(cardWrapper).toHaveStyle("width: 200px");
    expect(cardWrapper).toHaveStyle("height: 300px");
  });
});

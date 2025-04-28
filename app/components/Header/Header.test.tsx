import { render, screen } from "@testing-library/react";
import EloHeader from "./Header";
import "@testing-library/jest-dom";
import React from "react";

describe("EloHeader", () => {
  it("should render the header with a logo", () => {
    render(<EloHeader logo={<img src="logo.png" alt="Logo" />} backgroundColor="blue" />);

    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("should render the header with navigation", () => {
    render(
      <EloHeader
        logo={<img src="logo.png" alt="Logo" />}
        navigation={<ul><li>Home</li><li>About</li></ul>}
        backgroundColor="green"
      />
    );

    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    render(
      <EloHeader
        logo={<img src="logo.png" alt="Logo" />}
        navigation={<ul><li>Home</li></ul>}
        backgroundColor="purple"
        className="custom-class"
      />
    );

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("custom-class");
  });

  it("should apply custom backgroundColor", () => {
    render(<EloHeader logo={<img src="logo.png" alt="Logo" />} backgroundColor="red" />);

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("bg-red");
  });

  it("should render the header with default backgroundColor", () => {
    render(<EloHeader logo={<img src="logo.png" alt="Logo" />} />);
    const header = screen.getByRole("banner");
    expect(header).not.toHaveClass("bg-undefined");
  });

  it("should render the header with multiple navigation links", () => {
    render(
      <EloHeader
        logo={<img src="logo.png" alt="Logo" />}
        navigation={
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        }
        backgroundColor="gray"
      />
    );

    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");
    const contactLink = screen.getByText("Contact");

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});

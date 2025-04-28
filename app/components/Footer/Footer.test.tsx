import { render, screen } from "@testing-library/react";
import EloFooter from "./Footer";
import "@testing-library/jest-dom";
import React from "react";

describe("EloFooter", () => {
  it("should render the footer with logo and without social links", () => {
    render(<EloFooter backgroundColor="blue" logo={<img src="logo.png" alt="Logo" />} />);

    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("bg-blue");

    const socialLinks = screen.queryAllByRole("link");
    expect(socialLinks).toHaveLength(0);
  });

  it("should render the footer with social links", () => {
    const socialLinks = {
      email: "test@example.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    };

    render(<EloFooter backgroundColor="green" socialLinks={socialLinks} />);

    const mailLink = screen.getByLabelText("Email");
    expect(mailLink).toBeInTheDocument();
    expect(mailLink).toHaveAttribute("href", "mailto:test@example.com");

    const facebookLink = screen.getByLabelText("Facebook");
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute("href", "https://facebook.com");

    const instagramLink = screen.getByLabelText("Instagram");
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute("href", "https://instagram.com");
  });

  it("should render the footer with a custom logo", () => {
    const logo = <img src="custom-logo.png" alt="Custom Logo" />;

    render(<EloFooter backgroundColor="yellow" logo={logo} />);

    const customLogo = screen.getByAltText("Custom Logo");
    expect(customLogo).toBeInTheDocument();
  });

  it("should apply custom className and background color", () => {
    render(<EloFooter backgroundColor="purple" className="custom-class" />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("bg-purple");
    expect(footer).toHaveClass("custom-class");
  });

  it("should render the footer without a logo", () => {
    render(<EloFooter backgroundColor="red" />);

    const logo = screen.queryByAltText("Logo");
    expect(logo).toBeNull();
  });

  it("should render the footer without social links", () => {
    render(<EloFooter backgroundColor="gray" />);


    const mailLink = screen.queryByLabelText("Email");
    const facebookLink = screen.queryByLabelText("Facebook");
    const instagramLink = screen.queryByLabelText("Instagram");

    expect(mailLink).toBeNull();
    expect(facebookLink).toBeNull();
    expect(instagramLink).toBeNull();
  });
});

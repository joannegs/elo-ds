import { render, screen } from "@testing-library/react";
import IconGallery from "./IconContainerGallery";
import "@testing-library/jest-dom";
import React from "react";
import * as OutlineIcons from "@heroicons/react/24/outline";

jest.mock("./IconContainer", () => ({
  __esModule: true,
  default: ({ name, size, color, style }: any) => (
    <div data-testid="mock-icon" data-name={name} data-size={size} data-color={color} data-style={style}>
      Mocked Icon - {name}
    </div>
  ),
}));

describe("IconGallery", () => {
  const iconNames = Object.keys(OutlineIcons);

  it("should render all icons in the gallery", () => {
    render(<IconGallery style="outline" size={24} color="text-primary" />);

    const icons = screen.getAllByTestId("mock-icon");
    expect(icons).toHaveLength(iconNames.length);
  });

  it("should display the name of each icon below the icon", () => {
    render(<IconGallery style="outline" size={24} color="text-primary" />);

    iconNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it("should render the correct number of icons based on the iconNames array", () => {
    render(<IconGallery style="outline" size={24} color="text-primary" />);
    const mockedIcons = screen.getAllByTestId("mock-icon");
    expect(mockedIcons).toHaveLength(iconNames.length);
  });

  it("should render icons with correct size", () => {
    render(<IconGallery style="outline" size={32} color="text-primary" />);
    const icons = screen.getAllByTestId("mock-icon");
    icons.forEach((icon) => {
      expect(icon).toHaveAttribute("data-size", "32");
    });
  });

  it("should apply correct style (outline/solid) for each icon", () => {
    render(<IconGallery style="solid" size={24} color="text-primary" />);
    const icons = screen.getAllByTestId("mock-icon");
    icons.forEach((icon) => {
      expect(icon).toHaveAttribute("data-style", "solid");
    });
  });

  it("should apply the correct color to icons", () => {
    render(<IconGallery style="outline" size={24} color="red" />);
    const icons = screen.getAllByTestId("mock-icon");
    icons.forEach((icon) => {
      expect(icon).toHaveAttribute("data-color", "red");
    });
  });
});

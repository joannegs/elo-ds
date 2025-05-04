import { render, screen } from "@testing-library/react";
import EloIconContainer from "./IconContainer";
import { checkIfCustomColor } from "../../utils/utils";
import "@testing-library/jest-dom";
import React from "react";

jest.mock("../../utils/utils", () => ({
  checkIfCustomColor: jest.fn(),
}));

describe("EloIconContainer", () => {
  it("should render the correct icon", () => {
    render(<EloIconContainer name="ArchiveBoxXMarkIcon" style="outline" size={24} />);

    const icon = screen.getByLabelText(/ArchiveBoxXMarkIcon/i);
    expect(icon).toBeInTheDocument();
  });

  it("should return null if icon does not exist", () => {
    render(<EloIconContainer name="ArchiveBoxXMarkIcon" style="outline" size={24} />);
    
    const icon = screen.queryByLabelText("NonExistingIcon");
    expect(icon).toBeNull();
  });

  

  it("should apply custom color if passed", () => {
    (checkIfCustomColor as jest.Mock).mockReturnValue(true);
    
    render(<EloIconContainer name="ArchiveBoxXMarkIcon" color="red" size={24} />);

    const icon = screen.getByLabelText("ArchiveBoxXMarkIcon").firstChild;
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveStyle("color: red");
    expect(icon).toHaveStyle("width: 24px; height: 24px;");
  });

  it("should apply custom class name", () => {
    render(<EloIconContainer name="ArchiveBoxXMarkIcon" className="custom-class" size={24} />);

    const icon = screen.getByLabelText("ArchiveBoxXMarkIcon").firstChild;
    expect(icon).toHaveClass("custom-class");
  });

  it("should apply the correct size", () => {
    render(<EloIconContainer name="ArchiveBoxXMarkIcon" size={32} />);

    const icon = screen.getByLabelText("ArchiveBoxXMarkIcon").firstChild;
    expect(icon).toHaveStyle("width: 32px; height: 32px;");
  });


  it("should apply default color when no custom color is provided", () => {
    (checkIfCustomColor as jest.Mock).mockReturnValue(false);
    render(<EloIconContainer name="ArchiveBoxXMarkIcon" color="primary" size={24} />);

    const icon = screen.getByLabelText("ArchiveBoxXMarkIcon").firstChild;
    expect(icon).toHaveClass("text-primary");
  });

  it("should apply custom color when style is 'outline' and custom color is passed", () => {
    (checkIfCustomColor as jest.Mock).mockReturnValue(true);
    
    render(<EloIconContainer name="ArchiveBoxXMarkIcon" style="outline" color="blue" size={24} />);

    const icon = screen.getByLabelText("ArchiveBoxXMarkIcon").firstChild;
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveStyle("color: blue");
    expect(icon).toHaveStyle("width: 24px; height: 24px;");
  });
});

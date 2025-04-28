import { render, screen, fireEvent } from "@testing-library/react";
import EloDropdown from "./Dropdown";
import "@testing-library/jest-dom";
import React from "react";

describe("EloDropdown", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  it("should render with a placeholder when no items are selected", () => {
    render(<EloDropdown options={options} />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Selecione");
  });

  it("should render selected values", () => {
    render(<EloDropdown options={options} selectedValues={["1", "3"]} />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Option 1, Option 3");
  });

  it("should toggle dropdown visibility on button click", () => {
    render(<EloDropdown options={options} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    const dropdown = screen.getByText("Option 1");
    expect(dropdown).toBeInTheDocument();

    fireEvent.click(button);
    const dropdownClosed = screen.queryByText("Option 1");
    expect(dropdownClosed).not.toBeInTheDocument();
  });

  it("should select a value and update selected values (multiSelect)", () => {
    render(<EloDropdown options={options} multiSelect={true} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const option = screen.getByText("Option 1");
    fireEvent.click(option);

    expect(screen.getByRole("button")).toHaveTextContent("Option 1");
  });

  it("should toggle selection of options (multiSelect)", () => {
    render(<EloDropdown options={options} multiSelect={true} selectedValues={["1"]} />);
  
    const button = screen.getByRole("button");
    fireEvent.click(button);
  
    const option1 = screen.getByTestId("option-1");
    const option2 = screen.getByTestId("option-2");
  
    fireEvent.click(option2);
    expect(screen.getByRole("button")).toHaveTextContent("Option 1, Option 2");
  
    fireEvent.click(option1);
    expect(screen.getByRole("button")).toHaveTextContent("Option 2");
  });

  it("should call onSelectionChange when an option is selected (multiSelect)", () => {
    const onSelectionChange = jest.fn();
    render(<EloDropdown options={options} onSelectionChange={onSelectionChange} multiSelect={true} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const option = screen.getByText("Option 2");
    fireEvent.click(option);

    expect(onSelectionChange).toHaveBeenCalledWith(["2"]);
  });

  it("should select only one value when multiSelect is false", () => {
    render(<EloDropdown options={options} multiSelect={false} />);
  
    const button = screen.getByRole("button");
    fireEvent.click(button);
  
    const option1 = screen.getByTestId("option-1");
    fireEvent.click(option1);
    
    expect(screen.getByRole("button")).toHaveTextContent("Option 1");

    fireEvent.click(button);
  
  
    const option2 = screen.getByTestId("option-2");
    fireEvent.click(option2);
    
    expect(screen.getByRole("button")).toHaveTextContent("Option 2");
  });

  it("should apply custom className", () => {
    const { getByTestId } = render(<EloDropdown options={options} className="custom-class" />);
    const dropdownWrapper = getByTestId("elo-dropdown");

    expect(dropdownWrapper).toHaveClass("custom-class");
  });

  it("should show the placeholder when no options are selected", () => {
    render(<EloDropdown options={options} selectedValues={[]} placeholder="Select something..." />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Select something...");
  });
});

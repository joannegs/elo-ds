import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EloRadioGroup, { RadioOption } from "./RadioGroup";
import "@testing-library/jest-dom";

describe("EloRadioGroup", () => {
  const options: RadioOption[] = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2", disabled: true },
    { label: "Option 3", value: "3" },
  ];

  it("should render radio options correctly", () => {
    render(<EloRadioGroup options={options} />);
    const radioOptions = screen.getAllByTestId("elo-radio-option");
    expect(radioOptions).toHaveLength(options.length);

    options.forEach((option, index) => {
      expect(radioOptions[index]).toHaveTextContent(option.label);
    });
  });

  it("should select the correct radio button based on the value prop", () => {
    render(<EloRadioGroup options={options} value="2" />);
    const selectedOption = screen.getByText("Option 2");
    expect(selectedOption).toBeInTheDocument();
    
    const selectedRadio = selectedOption.closest("div")?.querySelector("div");
    expect(selectedRadio).toHaveClass("bg-primary");
  });

  it("should call onChange with the correct value when a radio option is clicked", () => {
    const handleChange = jest.fn();
    render(<EloRadioGroup options={options} onChange={handleChange} />);
    
    const option1 = screen.getByText("Option 1");
    fireEvent.click(option1);

    expect(handleChange).toHaveBeenCalledWith("1");
  });

  it("should not call onChange when a disabled radio option is clicked", () => {
    const handleChange = jest.fn();
    render(<EloRadioGroup options={options} onChange={handleChange} />);
    
    const option2 = screen.getByText("Option 2");
    fireEvent.click(option2);

    expect(handleChange).not.toHaveBeenCalled();
  });

  it("should render radio options with correct styles based on selection and disabled state", () => {
    render(<EloRadioGroup options={options} value="1" />);
  
    const radioOption1 = screen.getByText("Option 1").closest("div");
    const radioOption2 = screen.getByText("Option 2").closest("div");
    const radioOption3 = screen.getByText("Option 3").closest("div");
  
    const circle1 = radioOption1?.querySelector("div.w-5.h-5");
    expect(circle1).toHaveClass("bg-primary");
  
    const circle2 = radioOption2?.querySelector("div.w-5.h-5");
    expect(circle2).toHaveClass("bg-gray-200");
  
    const circle3 = radioOption3?.querySelector("div.w-5.h-5");
    expect(circle3).not.toHaveClass("bg-primary");
  });

  it("should apply custom className to the root div", () => {
    render(<EloRadioGroup options={options} className="custom-class" />);
    const radioGroupContainer = screen.getByTestId("elo-radio-group");
    expect(radioGroupContainer).toHaveClass("custom-class");
  });

  it("should update selected value when value prop changes", () => {
    const { rerender } = render(<EloRadioGroup options={options} value="1" />);
    
    let radioOption1 = screen.getByText("Option 1").closest("div");
    let circle1 = radioOption1?.querySelector("div.w-5.h-5");
    expect(circle1).toHaveClass("bg-primary");
  
    rerender(<EloRadioGroup options={options} value="3" />);
    radioOption1 = screen.getByText("Option 1").closest("div");
    const radioOption3 = screen.getByText("Option 3").closest("div");

    circle1 = radioOption1?.querySelector("div.w-5.h-5");
    expect(circle1).not.toHaveClass("bg-primary");
  
    const circle3 = radioOption3?.querySelector("div.w-5.h-5");
    expect(circle3).toHaveClass("bg-primary");
  });
});

import React, { useState, useEffect } from "react";

export type RadioOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type RadioGroupProps = {
  options: RadioOption[];
  value?: string;
  name?: string;
  className?: string;
  onChange?: (value: string) => void;
};

const EloRadioGroup: React.FC<RadioGroupProps> = ({ options, value, name, className, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleSelect = (val: string, disabled?: boolean) => {
    if (!disabled) {
      setSelectedValue(val);
      onChange?.(val);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {options.map((option) => {
        const isSelected = selectedValue === option.value;
        const isDisabled = option.disabled;

        return (
          <div
            key={option.value}
            className={`flex items-center gap-3 cursor-pointer select-none 
              ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleSelect(option.value, isDisabled)}
          >
            <div
              className={`w-5 h-5 flex items-center justify-center border-2 rounded-full transition-all 
                ${isSelected ? "bg-primary border-primary" : "border-gray-300"} 
                ${isDisabled ? "bg-gray-200 border-gray-400" : ""}`}
            >
              {isSelected && <div className="w-1 h-1 bg-white rounded-full" />}
            </div>
            <span className={`leading-none ${isDisabled ? "text-gray-400" : ""}`}>
              {option.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default EloRadioGroup;

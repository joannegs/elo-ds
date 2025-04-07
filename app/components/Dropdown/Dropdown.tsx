import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Checkbox from "../Checkbox/Checkbox";

export type DropdownProps = {
  options: { label: string; value: string }[];
  selectedValues?: string[];
  onSelectionChange?: (selected: string[]) => void;
  className?: string;
  placeholder?: string;
  multiSelect?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValues = [],
  onSelectionChange,
  className,
  placeholder = "Selecione",
  multiSelect = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(selectedValues);

  const handleSelect = (value: string) => {
    let newSelected: string[];

    if (multiSelect) {
      if (selected.includes(value)) {
        newSelected = selected.filter((item) => item !== value);
      } else {
        newSelected = [...selected, value];
      }
    } else {
      newSelected = [value];
      setIsOpen(false);
    }

    setSelected(newSelected);
    onSelectionChange?.(newSelected);
  };

  return (
    <div className={`relative w-64 ${className}`}>
      <button
        className="w-full flex items-center justify-between bg-gray-100 p-2 rounded-md shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${selected.length ? "" : "text-gray-400"}`}>
          {selected.length > 0
            ? selected
                .map(
                  (val) => options.find((o) => o.value === val)?.label || val
                )
                .join(", ")
            : placeholder}
        </span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full max-h-60 overflow-y-auto bg-white shadow-md rounded-md z-10">
          {options.map((option) => {
            const isSelected = selected.includes(option.value);
            return (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              >
                {multiSelect && (
                  <Checkbox
                    checked={isSelected}
                    onChange={() => handleSelect(option.value)}
                  />
                )}
                <span
                  className={`ml-2 ${isSelected ? "text-primary font-medium" : "text-black"}`}
                >
                  {option.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import { ChevronDown } from "lucide-react";

export type DropdownProps = {
  options: { label: string; value: string }[];
  selectedValues?: string[];
  onSelectionChange?: (selected: string[]) => void;
  className?: string;
  placeholder?: string
};

const Dropdown: React.FC<DropdownProps> = ({ options, selectedValues = [], onSelectionChange, className, placeholder = 'Selecione' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(selectedValues);

  const handleToggle = (value: string) => {
    let newSelected;
    if (selected.includes(value)) {
      newSelected = selected.filter((item) => item !== value);
    } else {
      newSelected = [...selected, value];
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
        <span>{selected.length > 0 ? selected.join(", ") : placeholder }</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white shadow-md rounded-md overflow-hidden">
          {options.map((option) => (
            <div key={option.value} className="p-2 hover:bg-gray-100">
              <Checkbox
                checked={selected.includes(option.value)}
                onChange={() => handleToggle(option.value)}
                label={option.label}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
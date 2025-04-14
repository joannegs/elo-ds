import React, { useState, useEffect } from "react";

export type RadioButtonProps = {
  selected?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  className?: string;
  onSelect?: (selected: boolean) => void;
};

<<<<<<< HEAD
const EloRadioButton: React.FC<RadioButtonProps> = ({ selected = false, disabled, label, className, onSelect }) => {
=======
const RadioButton: React.FC<RadioButtonProps> = ({ selected = false, disabled, label, name, className, onSelect }) => {
>>>>>>> parent of 83bbe93 (feat(elo-ds): adding eslint and fixing erros and warnings)
  const [isSelected, setIsSelected] = useState(selected);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const toggleSelect = () => {
    if (!disabled) {
      const newSelected = !isSelected;
      setIsSelected(newSelected);
      onSelect?.(newSelected);
    }
  };

  return (
    <div
      className={`flex items-center gap-3 cursor-pointer select-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={toggleSelect}
    >
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full transition-all 
                    ${isSelected ? 'bg-primary border-primary' : 'border-gray-300'}
                    ${disabled ? 'bg-gray-200 border-gray-400' : ''}`}
      >
        {isSelected && (
          <div className="w-1 h-1 bg-white rounded-full"></div>
        )}
      </div>
      {label && <span className={`leading-none ${disabled ? 'text-gray-400' : ''}`}>{label}</span>}
    </div>
  );
};

export default EloRadioButton;

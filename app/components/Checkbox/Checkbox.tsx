import React, { useState, useEffect } from "react";

export type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  className?: string;
  onChange?: (checked: boolean) => void;
};

const EloCheckbox: React.FC<CheckboxProps> = ({ checked = false, disabled, label, className, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const toggleCheck = () => {
    if (!disabled) {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onChange?.(newChecked);
    }
  };

  return (
    <div
      className={`flex items-center gap-2 cursor-pointer select-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={toggleCheck}
    >
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all 
                    ${isChecked ? 'bg-primary border-primary' : 'border-gray-300'}
                    ${disabled ? 'bg-gray-200 border-gray-400' : ''}`}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      {label && <span className={disabled ? 'text-gray-400' : ''}>{label}</span>}
    </div>
  );
};

export default EloCheckbox;
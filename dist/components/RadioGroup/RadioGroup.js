import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const EloRadioGroup = ({ options, value, name, className, onChange }) => {
    const [selectedValue, setSelectedValue] = useState(value);
    useEffect(() => {
        setSelectedValue(value);
    }, [value]);
    const handleSelect = (val, disabled) => {
        if (!disabled) {
            setSelectedValue(val);
            onChange === null || onChange === void 0 ? void 0 : onChange(val);
        }
    };
    return (_jsx("div", { className: `flex flex-col gap-2 ${className}`, children: options.map((option) => {
            const isSelected = selectedValue === option.value;
            const isDisabled = option.disabled;
            return (_jsxs("div", { className: `flex items-center gap-3 cursor-pointer select-none 
              ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`, onClick: () => handleSelect(option.value, isDisabled), children: [_jsx("div", { className: `w-5 h-5 flex items-center justify-center border-2 rounded-full transition-all 
                ${isSelected ? "bg-primary border-primary" : "border-gray-300"} 
                ${isDisabled ? "bg-gray-200 border-gray-400" : ""}`, children: isSelected && _jsx("div", { className: "w-1 h-1 bg-white rounded-full" }) }), _jsx("span", { className: `leading-none ${isDisabled ? "text-gray-400" : ""}`, children: option.label })] }, option.value));
        }) }));
};
export default EloRadioGroup;

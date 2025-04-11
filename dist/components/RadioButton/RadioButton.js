import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const RadioButton = ({ selected = false, disabled, label, name, className, onSelect }) => {
    const [isSelected, setIsSelected] = useState(selected);
    useEffect(() => {
        setIsSelected(selected);
    }, [selected]);
    const toggleSelect = () => {
        if (!disabled) {
            const newSelected = !isSelected;
            setIsSelected(newSelected);
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(newSelected);
        }
    };
    return (_jsxs("div", { className: `flex items-center gap-3 cursor-pointer select-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`, onClick: toggleSelect, children: [_jsx("div", { className: `w-5 h-5 flex items-center justify-center border-2 rounded-full transition-all 
                    ${isSelected ? 'bg-primary border-primary' : 'border-gray-300'}
                    ${disabled ? 'bg-gray-200 border-gray-400' : ''}`, children: isSelected && (_jsx("div", { className: "w-1 h-1 bg-white rounded-full" })) }), label && _jsx("span", { className: `leading-none ${disabled ? 'text-gray-400' : ''}`, children: label })] }));
};
export default RadioButton;

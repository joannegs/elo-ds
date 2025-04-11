import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Checkbox from "../Checkbox/Checkbox";
const Dropdown = ({ options, selectedValues = [], onSelectionChange, className, placeholder = "Selecione", multiSelect = true, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(selectedValues);
    const handleSelect = (value) => {
        let newSelected;
        if (multiSelect) {
            if (selected.includes(value)) {
                newSelected = selected.filter((item) => item !== value);
            }
            else {
                newSelected = [...selected, value];
            }
        }
        else {
            newSelected = [value];
            setIsOpen(false);
        }
        setSelected(newSelected);
        onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange(newSelected);
    };
    return (_jsxs("div", { className: `relative w-64 ${className}`, children: [_jsxs("button", { className: "w-full flex items-center justify-between bg-gray-100 p-2 rounded-md shadow", onClick: () => setIsOpen(!isOpen), children: [_jsx("span", { className: `${selected.length ? "" : "text-gray-400"}`, children: selected.length > 0
                            ? selected
                                .map((val) => { var _a; return ((_a = options.find((o) => o.value === val)) === null || _a === void 0 ? void 0 : _a.label) || val; })
                                .join(", ")
                            : placeholder }), _jsx(ChevronDown, { className: "w-4 h-4" })] }), isOpen && (_jsx("div", { className: "absolute mt-2 w-full max-h-60 overflow-y-auto bg-white shadow-md rounded-md z-10", children: options.map((option) => {
                    const isSelected = selected.includes(option.value);
                    return (_jsxs("div", { onClick: () => handleSelect(option.value), className: "flex items-center p-2 cursor-pointer hover:bg-gray-100", children: [multiSelect && (_jsx(Checkbox, { checked: isSelected, onChange: () => handleSelect(option.value) })), _jsx("span", { className: `ml-2 ${isSelected ? "text-primary font-medium" : "text-black"}`, children: option.label })] }, option.value));
                }) }))] }));
};
export default Dropdown;

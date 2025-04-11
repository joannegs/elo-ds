import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const Checkbox = ({ checked = false, disabled, label, className, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);
    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);
    const toggleCheck = () => {
        if (!disabled) {
            const newChecked = !isChecked;
            setIsChecked(newChecked);
            onChange === null || onChange === void 0 ? void 0 : onChange(newChecked);
        }
    };
    return (_jsxs("div", { className: `flex items-center gap-2 cursor-pointer select-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`, onClick: toggleCheck, children: [_jsx("div", { className: `w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all 
                    ${isChecked ? 'bg-primary border-primary' : 'border-gray-300'}
                    ${disabled ? 'bg-gray-200 border-gray-400' : ''}`, children: isChecked && (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-3 h-3 text-white", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 00-1.414 0L7 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z", clipRule: "evenodd" }) })) }), label && _jsx("span", { className: disabled ? 'text-gray-400' : '', children: label })] }));
};
export default Checkbox;

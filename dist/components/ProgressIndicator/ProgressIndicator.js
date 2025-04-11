import { jsx as _jsx } from "react/jsx-runtime";
export const ProgressIndicator = ({ percentage, className = "", }) => {
    return (_jsx("div", { className: `bg-disabled rounded w-full h-1 overflow-hidden ${className}`, children: _jsx("div", { className: "bg-primary h-full transition-all duration-300", style: {
                width: `${Math.min(Math.max(percentage, 0), 100)}%`,
            } }) }));
};

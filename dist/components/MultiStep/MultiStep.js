var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
const getMultiStepItensClasses = (currentStep, step, variant) => {
    const baseClasses = variant === "bar" ? "h-1 rounded" : "w-2 h-2 rounded-full";
    const stateClass = currentStep >= step ? "bg-primary" : "bg-disabled";
    return `${baseClasses} ${stateClass}`;
};
export const MultiStep = (_a) => {
    var { size, currentStep = 1, variant = "bar", className } = _a, rest = __rest(_a, ["size", "currentStep", "variant", "className"]);
    const MultiStepContainerClasses = variant === "dot" ? "flex items-center justify-center" : "";
    return (_jsx("div", Object.assign({ className: `${MultiStepContainerClasses} ${className}` }, rest, { children: _jsx("div", { className: `grid gap-1`, style: {
                gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
            }, children: Array.from({ length: size }, (_, i) => i + 1).map((step) => (_jsx("div", { className: `${getMultiStepItensClasses(currentStep, step, variant)}` }, step))) }) })));
};

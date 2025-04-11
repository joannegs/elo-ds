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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import IconContainer from "../IconContainer/IconContainer";
import { forwardRef } from "react";
const InputOrTextArea = forwardRef((props, ref) => {
    if (props.multiline) {
        return (_jsx("textarea", Object.assign({ ref: ref }, props)));
    }
    return (_jsx("input", Object.assign({ ref: ref }, props)));
});
InputOrTextArea.displayName = "InputOrTextArea";
const Input = forwardRef((_a, ref) => {
    var { label, className, iconStart, iconEnd, error, required } = _a, rest = __rest(_a, ["label", "className", "iconStart", "iconEnd", "error", "required"]);
    return (_jsxs("div", { className: "relative w-full", children: [label && (_jsxs("label", { className: "absolute pt-1 pl-3 text-xs text-subtitle", children: [label, required && ' *'] })), _jsxs("div", { className: `
            flex items-center w-full rounded-md border p-3 gap-2
            ${label ? "pt-5" : ""}
            ${error ? "border-input-error" : "theme-grey"}
            disabled:bg-disabled disabled:text-grey disabled:border-2 disabled:border-disabled
          `, children: [iconStart && (_jsx(IconContainer, { name: iconStart.iconName, style: iconStart.solid ? "solid" : "outline", size: 20, color: "text-medium-surface" })), _jsx(InputOrTextArea, Object.assign({ ref: ref, className: `flex-1 bg-transparent outline-none ${className || ""}`, required: required }, rest)), iconEnd && (_jsx(IconContainer, { name: iconEnd.iconName, style: iconEnd.solid ? "solid" : "outline", size: 20, color: "text-medium-surface" }))] }), (error === null || error === void 0 ? void 0 : error.message) && (_jsx("p", { className: "mt-1 ml-2 text-sm text-input-error", children: error.message }))] }));
});
Input.displayName = "Input";
export default Input;

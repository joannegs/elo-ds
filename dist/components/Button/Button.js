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
import clsx from "clsx";
import IconContainer from "../IconContainer/IconContainer";
function getVariant(variant, disabled) {
    switch (variant) {
        case 'primary':
            return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';
        case 'secondary':
            return disabled ? 'bg-disabled text-disabled' : 'bg-primary-50 text-primary';
        case 'tertiary':
            return disabled ? 'text-disabled' : 'text-primary';
        case 'error':
            return disabled ? 'bg-disabled text-disabled' : 'bg-error text-white';
        case 'alert':
            return disabled ? 'bg-disabled text-disabled' : 'bg-alert text-black';
        case 'success':
            return disabled ? 'bg-disabled text-disabled' : 'bg-success text-white';
        default:
            return disabled ? '' : '';
    }
}
const EloButton = (_a) => {
    var { variant = 'primary', children, iconStart, iconEnd, className, disabled } = _a, rest = __rest(_a, ["variant", "children", "iconStart", "iconEnd", "className", "disabled"]);
    return (_jsxs("button", Object.assign({ className: clsx('rounded-md px-6 py-2 flex items-center justify-center gap-2 transition-all', getVariant(variant, disabled), className), disabled: disabled }, rest, { children: [iconStart && (_jsx(IconContainer, { name: iconStart.iconName, style: iconStart.solid ? 'solid' : 'outline', size: 20, color: "currentColor" })), children, iconEnd && (_jsx(IconContainer, { name: iconEnd.iconName, style: iconEnd.solid ? 'solid' : 'outline', size: 20, color: "currentColor" }))] })));
};
export default EloButton;

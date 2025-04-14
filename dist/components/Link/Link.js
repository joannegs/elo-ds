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
import { checkIfCustomColor } from "../../utils/utils";
const EloLink = (_a) => {
    var { children, href, disabled, underline, className, size = "md", iconStart, iconEnd, color = "primary" } = _a, rest = __rest(_a, ["children", "href", "disabled", "underline", "className", "size", "iconStart", "iconEnd", "color"]);
    const isCustomColor = checkIfCustomColor(color);
    const textColor = isCustomColor ? color : `text-${color}`;
    const textSize = `var(--text-${size})`;
    const iconSize = getComputedStyle(document.documentElement).getPropertyValue(`--icon-${size}`).trim();
    return (_jsxs("div", { className: `
        flex 
        ${disabled ? "cursor-not-allowed" : "cursor-pointer"} 
        items-center gap-2 ${underline ? "hover:underline" : ""}`, style: { fontSize: textSize }, children: [iconStart && (_jsx(IconContainer, { name: iconStart.iconName, style: iconStart.solid ? "solid" : "outline", size: parseInt(iconSize), color: color })), _jsx("a", Object.assign({ href: disabled ? undefined : href, className: `${textColor} ${className} ${underline ? "hover:brightness-50" : ""}`, style: isCustomColor ? { color } : {}, "aria-disabled": disabled }, rest, { children: children })), iconEnd && (_jsx(IconContainer, { name: iconEnd.iconName, style: iconEnd.solid ? "solid" : "outline", size: parseInt(iconSize), color: color }))] }));
};
export default EloLink;

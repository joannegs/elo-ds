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
import classNames from "classnames";
import IconContainer from "../IconContainer/IconContainer";
const Badge = (_a) => {
    var { color = "primary", textColor = "text-title", shadow, tagContent, iconStart, iconEnd, className, size = "sm" } = _a, rest = __rest(_a, ["color", "textColor", "shadow", "tagContent", "iconStart", "iconEnd", "className", "size"]);
    const sizeMap = {
        sm: {
            paddingVertical: "py-0.5",
            paddingHorizontal: "px-2",
            fontSize: "text-xs",
            height: "h-6",
        },
        md: {
            paddingVertical: "py-1",
            paddingHorizontal: "px-3",
            fontSize: "text-sm",
            height: "h-8",
        },
        lg: {
            paddingVertical: "py-2",
            paddingHorizontal: "px-4",
            fontSize: "text-base",
            height: "h-10",
        },
    };
    const { paddingVertical, paddingHorizontal, fontSize, height } = sizeMap[size];
    const badgeClasses = classNames(`bg-${color}`, `text-${textColor}`, "rounded-[20px]", "inline-flex", "items-center", "gap-2", paddingVertical, paddingHorizontal, fontSize, height, shadow ? "shadow-sm" : "", className);
    return (_jsxs("div", Object.assign({ className: badgeClasses }, rest, { children: [iconStart && (_jsx(IconContainer, { name: iconStart.iconName, style: iconStart.solid ? 'solid' : 'outline', size: 20, color: "currentColor" })), _jsx("span", { children: tagContent }), iconEnd && (_jsx(IconContainer, { name: iconEnd.iconName, style: iconEnd.solid ? 'solid' : 'outline', size: 20, color: "currentColor" }))] })));
};
export default Badge;

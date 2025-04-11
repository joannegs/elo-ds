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
import classNames from "classnames";
const boxClassMap = {
    light: "bg-light-surface",
    medium: "bg-medium-surface",
    dark: "bg-dark-surface",
};
const boxShadowClassMap = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
};
const Box = (_a) => {
    var { border = true, type = "light", shadow, children, className } = _a, rest = __rest(_a, ["border", "type", "shadow", "children", "className"]);
    const borderClasses = border ? `border border-1 border-solid border-${type}` : "border-none";
    const shadowClasses = shadow ? boxShadowClassMap[shadow] : "";
    const classes = classNames(boxClassMap[type], borderClasses, shadowClasses, "p-4", className, "rounded-md");
    return (_jsx("div", Object.assign({ className: classes }, rest, { children: children })));
};
export default Box;

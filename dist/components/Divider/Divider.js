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
const colorClassMap = {
    light: "bg-light-surface",
    dark: "bg-dark-surface",
};
const textColorClassMap = {
    light: "text-light-surface",
    dark: "text-dark-surface",
};
const EloDivider = (_a) => {
    var { children, bgColor = "dark" } = _a, rest = __rest(_a, ["children", "bgColor"]);
    const colorClass = colorClassMap[bgColor];
    const textColorClasses = classNames(textColorClassMap[bgColor], "px-3", "text-center");
    const barClass = classNames(children ? "w-1/3" : "w-1/2", "h-[2px]", colorClass);
    return (_jsxs("div", { className: classNames("flex items-center justify-center"), children: [_jsx("div", { className: barClass }), children && _jsx("div", { className: textColorClasses, children: children }), _jsx("div", { className: barClass })] }));
};
export default EloDivider;

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
import { cva } from "class-variance-authority";
const textVariants = cva("theme-gray text-primary text-sm font-normal", {
    variants: {
        variant: {
            primary: "text-primary-500",
            secondary: "text-primary-300",
            tertiary: "text-primary-100",
        },
        size: {
            xs: "text-xs",
            sm: "text-sm",
            md: "text-md",
            xl: "text-xl",
            title1: "text-txl",
            title2: "text-tlg",
            title3: "text-tmd",
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    },
});
const Typography = (_a) => {
    var { children, element = "p", className } = _a, rest = __rest(_a, ["children", "element", "className"]);
    const Element = element;
    return (_jsx(Element, Object.assign({ className: `theme-grey ${textVariants(rest)} ${className}` }, rest, { children: children })));
};
export default Typography;

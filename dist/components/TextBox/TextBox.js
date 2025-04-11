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
import Typography from "../Typography/Typography";
const TextBox = (_a) => {
    var { title, content, className, titleSize } = _a, rest = __rest(_a, ["title", "content", "className", "titleSize"]);
    return (_jsxs("div", Object.assign({ className: `bg-light-surface p-5 rounded-md shadow-md ${className}` }, rest, { children: [title && (_jsx(Typography, { element: "h2", variant: "primary", size: titleSize, className: "font-bold mb-4", children: title })), _jsx(Typography, { element: "p", variant: "primary", children: content })] })));
};
export default TextBox;

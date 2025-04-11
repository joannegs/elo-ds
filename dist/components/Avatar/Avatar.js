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
import AvatarIcon from "./AvatarIcon";
import AvatarImage from "./AvatarImage";
const avatarSizeMap = {
    xs: "w-5 h-5",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-9 h-9",
};
const Avatar = (_a) => {
    var { size = "xs", image, avatarName, avatarDescription, className } = _a, rest = __rest(_a, ["size", "image", "avatarName", "avatarDescription", "className"]);
    const avatarSizeClass = avatarSizeMap[size];
    const avatarComponent = image ? (_jsx(AvatarImage, { src: image, altDescription: avatarDescription })) : (_jsx(AvatarIcon, {}));
    const avatarInfoComponent = avatarName && (_jsxs("div", { className: classNames(!avatarDescription && "flex"), children: [_jsx("p", { className: "text-sm font-semibold text-title", children: avatarName }), avatarDescription && (_jsx("p", { className: "text-xs text-subtitle", children: avatarDescription }))] }));
    return (_jsxs("div", { className: "flex items-center gap-4xs", children: [_jsx("div", Object.assign({ className: classNames("relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400", avatarSizeClass, className) }, rest, { children: avatarComponent })), avatarInfoComponent] }));
};
export default Avatar;

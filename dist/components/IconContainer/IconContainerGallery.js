import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import IconContainer from "./IconContainer";
import * as OutlineIcons from "@heroicons/react/24/outline";
const iconNames = Object.keys(OutlineIcons);
const IconGallery = ({ style = "outline", size = 24, color = "text-icon", useTokenColor = false }) => {
    return (_jsx("div", { className: "grid grid-cols-6 gap-4 p-4", children: iconNames.map((iconName) => (_jsxs("div", { className: "flex flex-col items-center text-center text-xs gap-2", children: [_jsx(IconContainer, { name: iconName, style: style, size: size, color: color }), _jsx("span", { className: "break-words", children: iconName })] }, iconName))) }));
};
export default IconGallery;

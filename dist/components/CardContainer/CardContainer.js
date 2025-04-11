import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import clsx from "clsx";
const CardContainer = ({ hideHover = true, className, shadow = true, border = false, fixedDimensions, customBackground = "white", children, }) => {
    const baseClasses = "transition-all rounded-xl p-4 flex items-center justify-center";
    const shadowClasses = shadow ? "shadow-sm" : "";
    const hoverClasses = hideHover ? "" : "hover:scale-[1.01]";
    const borderClasses = border ? "border border-surface-medium" : "";
    const dimensionsStyle = fixedDimensions
        ? {
            width: fixedDimensions.width,
            height: fixedDimensions.height,
            backgroundColor: customBackground,
        }
        : {
            backgroundColor: customBackground,
        };
    return (_jsx("div", { className: clsx("flex items-center gap-4 flex-wrap", className), children: React.Children.map(children, (child) => (_jsx("div", { className: clsx(baseClasses, shadowClasses, hoverClasses, borderClasses), style: dimensionsStyle, children: child }))) }));
};
export default CardContainer;

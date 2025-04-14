import { jsx as _jsx } from "react/jsx-runtime";
import * as OutlineIcons from "@heroicons/react/24/outline";
import * as SolidIcons from "@heroicons/react/24/solid";
import { checkIfCustomColor } from "../../utils/utils";
const EloIconContainer = ({ name, style = "outline", size = 12, className = "", color = "primary", }) => {
    const IconComponent = style === "solid"
        ? SolidIcons[name]
        : OutlineIcons[name];
    if (!IconComponent)
        return null;
    const isCustomColor = checkIfCustomColor(color);
    const finalColor = isCustomColor ? color : `text-${color}`;
    return (_jsx(IconComponent, { className: `${isCustomColor ? "" : finalColor} ${className}`, style: Object.assign({ width: size, height: size }, (isCustomColor ? { color: finalColor } : {})) }));
};
export default EloIconContainer;

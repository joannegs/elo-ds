import React from "react";
import * as OutlineIcons from "@heroicons/react/24/outline";
export type HeroIconStyle = "outline" | "solid";
export type IconName = keyof typeof OutlineIcons;
export type IconContainerProps = {
    name: IconName;
    style?: HeroIconStyle;
    size?: number;
    className?: string;
    color?: string;
};
declare const EloIconContainer: React.FC<IconContainerProps>;
export default EloIconContainer;

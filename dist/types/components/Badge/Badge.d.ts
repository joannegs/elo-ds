import React from "react";
import { InputIconProps } from "../../types/Icon.types";
export type BadgeProps = {
    color: string;
    textColor: string;
    tagContent: string;
    shadow: boolean;
    size: "sm" | "md" | "lg";
    iconStart?: InputIconProps;
    iconEnd?: InputIconProps;
} & React.HTMLAttributes<HTMLDivElement>;
declare const Badge: ({ color, textColor, shadow, tagContent, iconStart, iconEnd, className, size, ...rest }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export default Badge;

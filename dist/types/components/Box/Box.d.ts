import React from "react";
export type BoxProps = {
    border?: boolean;
    type?: "light" | "dark";
    shadow?: "sm" | "md" | "lg";
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
declare const Box: ({ border, type, shadow, children, className, ...rest }: BoxProps) => import("react/jsx-runtime").JSX.Element;
export default Box;

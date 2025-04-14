import React from "react";
export type DividerProps = {
    bgColor?: "light" | "dark";
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
declare const EloDivider: ({ children, bgColor, ...rest }: DividerProps) => import("react/jsx-runtime").JSX.Element;
export default EloDivider;

import React from "react";
import { InputIconProps } from "../../types/Icon.types";
export type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'alert';
    iconStart?: InputIconProps;
    iconEnd?: InputIconProps;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const EloButton: ({ variant, children, iconStart, iconEnd, className, disabled, ...rest }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default EloButton;

import { IconName } from "../IconContainer/IconContainer";
import React from "react";
type InputIconProps = {
    iconName: IconName;
    solid?: boolean;
};
type InputErrorProps = {
    message: string;
};
export type InputProps = {
    label?: string;
    multiline?: boolean;
    iconStart?: InputIconProps;
    iconEnd?: InputIconProps;
    error?: InputErrorProps;
} & (React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>);
declare const EloInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
export default EloInput;

import React from "react";
export type RadioOption = {
    label: string;
    value: string;
    disabled?: boolean;
};
export type RadioGroupProps = {
    options: RadioOption[];
    value?: string;
    name?: string;
    className?: string;
    onChange?: (value: string) => void;
};
declare const EloRadioGroup: React.FC<RadioGroupProps>;
export default EloRadioGroup;

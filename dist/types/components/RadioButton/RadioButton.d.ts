import React from "react";
export type RadioButtonProps = {
    selected?: boolean;
    disabled?: boolean;
    label?: string;
    name?: string;
    className?: string;
    onSelect?: (selected: boolean) => void;
};
declare const RadioButton: React.FC<RadioButtonProps>;
export default RadioButton;

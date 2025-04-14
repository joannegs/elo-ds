import React from "react";
export type CheckboxProps = {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    className?: string;
    onChange?: (checked: boolean) => void;
};
declare const EloCheckbox: React.FC<CheckboxProps>;
export default EloCheckbox;

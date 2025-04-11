import React from "react";
export type CheckboxProps = {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    className?: string;
    onChange?: (checked: boolean) => void;
};
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;

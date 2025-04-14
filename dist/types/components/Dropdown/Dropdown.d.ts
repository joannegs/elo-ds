import React from "react";
export type DropdownProps = {
    options: {
        label: string;
        value: string;
    }[];
    selectedValues?: string[];
    onSelectionChange?: (selected: string[]) => void;
    className?: string;
    placeholder?: string;
    multiSelect?: boolean;
};
declare const EloDropdown: React.FC<DropdownProps>;
export default EloDropdown;

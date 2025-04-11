import React from 'react';
interface ColorBoxProps {
    name: string;
    hex: string;
    rgb: string;
}
interface ColorGroupProps {
    title: string;
    colors: ColorBoxProps[];
}
export declare const ColorGroup: React.FC<ColorGroupProps>;
export {};

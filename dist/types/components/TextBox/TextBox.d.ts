import React from "react";
export type TextBoxProps = {
    title?: string;
    titleSize: "xl" | "title1" | "title2" | "title3";
    content: string;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
declare const EloTextBox: ({ title, content, className, titleSize, ...rest }: TextBoxProps) => import("react/jsx-runtime").JSX.Element;
export default EloTextBox;

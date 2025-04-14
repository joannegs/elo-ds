import React from "react";
export type ProgressIndicatorProps = {
    percentage: number;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const EloProgressIndicator: ({ percentage, className, }: ProgressIndicatorProps) => import("react/jsx-runtime").JSX.Element;
export default EloProgressIndicator;

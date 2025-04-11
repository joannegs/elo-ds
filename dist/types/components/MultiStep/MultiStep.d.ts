import React from "react";
export type MultiStepProps = {
    size: number;
    currentStep: number;
    variant?: "bar" | "dot";
} & React.HTMLAttributes<HTMLDivElement>;
export declare const MultiStep: ({ size, currentStep, variant, className, ...rest }: MultiStepProps) => import("react/jsx-runtime").JSX.Element;

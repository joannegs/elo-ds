import React from "react";
export type MultiStepProps = {
    size: number;
    currentStep: number;
    variant?: "bar" | "dot";
} & React.HTMLAttributes<HTMLDivElement>;
declare const EloMultiStep: ({ size, currentStep, variant, className, ...rest }: MultiStepProps) => import("react/jsx-runtime").JSX.Element;
export default EloMultiStep;

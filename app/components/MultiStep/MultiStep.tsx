import React from "react";

export type MultiStepProps = {
  size: number;
  currentStep: number;
  variant?: "bar" | "dot";
} & React.HTMLAttributes<HTMLDivElement>;

const getMultiStepItensClasses = (currentStep: number, step: number, variant: string) => {
  const baseClasses = variant === "bar" ? "h-1 rounded" : "w-2 h-2 rounded-full";
  const stateClass = currentStep >= step ? "bg-primary" : "bg-disabled";
  return `${baseClasses} ${stateClass}`;
};

const EloMultiStep = ({
  size,
  currentStep = 1,
  variant = "bar",
  className,
  ...rest
}: MultiStepProps) => {
  const MultiStepContainerClasses = variant === "dot" ? "flex items-center justify-center" : "";

  return (
    <div
      className={`${
        MultiStepContainerClasses
      } ${className}`}
      {...rest}
    >
      <div
        className={`grid gap-1`}
        style={{
          gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`${
              getMultiStepItensClasses(currentStep, step, variant)
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EloMultiStep;
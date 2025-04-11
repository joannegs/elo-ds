import React from "react";

export type ProgressIndicatorProps = {
  percentage: number;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ProgressIndicator = ({
  percentage,
  className = "",
}: ProgressIndicatorProps) => {
  return (
    <div
      className={`bg-disabled rounded w-full h-1 overflow-hidden ${className}`}
    >
      <div
        className="bg-primary h-full transition-all duration-300"
        style={{
          width: `${Math.min(Math.max(percentage, 0), 100)}%`,
        }}
      />
    </div>
  );
};

export default ProgressIndicator;
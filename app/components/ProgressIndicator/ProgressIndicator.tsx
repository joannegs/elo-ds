import React from "react";

export type ProgressIndicatorProps = {
  percentage: number;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const EloProgressIndicator = ({
  percentage,
  className = "",
  ...rest
}: ProgressIndicatorProps) => {
  return (
    <div data-testid="elo-progress-indicator"
      className={`bg-disabled rounded w-full h-1 overflow-hidden ${className}`}
      {...rest}
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

export default EloProgressIndicator;
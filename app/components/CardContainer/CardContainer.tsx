import React from "react";
import clsx from "clsx";

export type CardContainerProps = {
  hideHover?: boolean;
  className?: string;
  shadow?: boolean;
  customBackground?: string;
  border?: boolean;
  fixedDimensions?: {
    width: number;
    height: number;
  };
  children: React.ReactNode;
};

const EloCardContainer: React.FC<CardContainerProps> = ({
  hideHover = true,
  className,
  shadow = true,
  border = false,
  fixedDimensions,
  customBackground = "white",
  children,
}) => {
  const baseClasses =
    "transition-all rounded-xl p-4 flex items-center justify-center";
  const shadowClasses = shadow ? "shadow-sm" : "";
  const hoverClasses = hideHover ? "" : "hover:scale-[1.01]";
  const borderClasses = border ? "border border-surface-medium" : "";
  const dimensionsStyle = fixedDimensions
    ? {
        width: fixedDimensions.width,
        height: fixedDimensions.height,
        backgroundColor: customBackground,
      }
    : {
        backgroundColor: customBackground,
      };

  return (
    <div data-testid="elo-card-container"
    className={clsx("flex items-center gap-4 flex-wrap", className)}>
      {React.Children.map(children, (child) => (
        <div
          className={clsx(baseClasses, shadowClasses, hoverClasses, borderClasses)}
          style={dimensionsStyle}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default EloCardContainer;

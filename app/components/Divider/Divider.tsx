import React from "react";
import classNames from "classnames";

export type DividerProps = {
  bgColor?: "light" | "dark";
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const colorClassMap = {
  light: "bg-light-surface",
  dark: "bg-dark-surface",
};

const textColorClassMap = {
  light: "text-light-surface",
  dark: "text-dark-surface",
}

const EloDivider = ({
  children,
  bgColor = "dark",
  className,
}: DividerProps) => {
  const colorClass = colorClassMap[bgColor];
  const textColorClasses = classNames(
    textColorClassMap[bgColor],
    "px-3",
    "text-center"
  );

  const barClass = classNames(
    children ? "w-1/3" : "w-1/2", 
    "h-[2px]",
    colorClass
  );

  return (
    <div data-testid="elo-divider" 
      className={classNames(`flex items-center justify-center ${className}`)}>
      <div className={barClass}></div>
      {children && <div className={textColorClasses}>{children}</div>}
      <div className={barClass}></div>
    </div>
  );
};

export default EloDivider;
import classNames from "classnames";
import React from "react";

export type BoxProps = {
  border?: boolean;
  type?: "light" | "dark";
  shadow?: "sm" | "md" | "lg";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const boxClassMap = {
  light: "bg-light-surface",
  medium: "bg-medium-surface",
  dark: "bg-dark-surface",
};

const boxShadowClassMap = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

const Box = ({
  border = true,
  type = "light",
  shadow,
  children,
  className,
  ...rest
}: BoxProps) => {

  const borderClasses = border ? `border border-1 border-solid border-${type}` : "border-none";
  const shadowClasses = shadow ? boxShadowClassMap[shadow] : "";

  const classes = classNames(
    boxClassMap[type], borderClasses, shadowClasses, "p-4", className, "rounded-md"
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Box;
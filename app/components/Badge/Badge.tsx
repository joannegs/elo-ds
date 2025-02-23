import classNames from "classnames";
import React from "react";

export type BadgeProps = {
  color: string;
  textColor: string;
  tagContent: string;
  shadow: boolean;
  size: "big" | "small";
} & React.HTMLAttributes<HTMLDivElement>;

const Badge = ({
  color = "primary",
  textColor = "text-title",
  shadow,
  tagContent,
  className,
  size = "small",
  ...rest
}: BadgeProps) => {  

  const badgeClasses = classNames(
    `bg-${color}`,
    `text-${textColor}`,
    "rounded-md",
    "px-2",
    size === "big" ? "py-1" : "py-0.5",
    "inline-block",
    shadow ? "shadow-sm" : "",
    className
  );

  return (
    <div className={badgeClasses} {...rest}>
      <span>{tagContent}</span>
    </div>
  );
};

export default Badge;

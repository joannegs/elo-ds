import classNames from "classnames";
import React from "react";
import IconContainer from "../IconContainer/IconContainer";
import { InputIconProps } from "../../types/Icon.types";

export type BadgeProps = {
  color: string;
  textColor: string;
  tagContent: string;
  shadow: boolean;
  size: "sm" | "md" | "lg";
  iconStart?: InputIconProps;
  iconEnd?: InputIconProps;
} & React.HTMLAttributes<HTMLDivElement>;

const Badge = ({
  color = "primary",
  textColor = "text-title",
  shadow,
  tagContent,
  iconStart,
  iconEnd,
  className,
  size = "sm",
  ...rest
}: BadgeProps) => {  

  const sizeMap = {
    sm: {
      paddingVertical: "py-0.5",
      paddingHorizontal: "px-2",
      fontSize: "text-xs",
      height: "h-6",
    },
    md: {
      paddingVertical: "py-1",
      paddingHorizontal: "px-3",
      fontSize: "text-sm",
      height: "h-8",
    },
    lg: {
      paddingVertical: "py-2",
      paddingHorizontal: "px-4",
      fontSize: "text-base",
      height: "h-10",
    },
  };

  const { paddingVertical, paddingHorizontal, fontSize, height } = sizeMap[size];

  const badgeClasses = classNames(
    `bg-${color}`,
    `text-${textColor}`,
    "rounded-[20px]",
    "inline-flex",
    "items-center",
    "gap-2",
    paddingVertical,
    paddingHorizontal,
    fontSize,
    height,
    shadow ? "shadow-sm" : "",
    className
  );

  return (
    <div className={badgeClasses} {...rest}>
      {iconStart && (
        <IconContainer
          name={iconStart.iconName}
          style={iconStart.solid ? 'solid' : 'outline'}
          size={20}
          color="currentColor"
        />
      )}

      <span>{tagContent}</span>
      
      {iconEnd && (
        <IconContainer
          name={iconEnd.iconName}
          style={iconEnd.solid ? 'solid' : 'outline'}
          size={20}
          color="currentColor"
        />
      )}
    </div>
  );
};

export default Badge;

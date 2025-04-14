import React from "react";
import * as OutlineIcons from "@heroicons/react/24/outline";
import * as SolidIcons from "@heroicons/react/24/solid";
import { checkIfCustomColor } from "../../utils/utils";

export type HeroIconStyle = "outline" | "solid";
export type IconName = keyof typeof OutlineIcons;

export type IconContainerProps = {
  name: IconName;
  style?: HeroIconStyle;
  size?: number;
  className?: string;
  color?: string;
};

const EloIconContainer: React.FC<IconContainerProps> = ({
  name,
  style = "outline",
  size = 12,
  className = "",
  color = "primary",
}) => {
  const IconComponent =
    style === "solid"
      ? (SolidIcons[name] as React.ElementType)
      : (OutlineIcons[name] as React.ElementType);

  if (!IconComponent) return null;

  const isCustomColor = checkIfCustomColor(color);
  const finalColor = isCustomColor ? color : `text-${color}`;

  return (
    <IconComponent
      className={`${isCustomColor ? "" : finalColor} ${className}`}
      style={{
        width: size,
        height: size,
        ...(isCustomColor ? { color: finalColor } : {}),
      }}
    />
  );
};

export default EloIconContainer;

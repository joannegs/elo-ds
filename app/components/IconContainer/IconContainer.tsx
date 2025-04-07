import React from "react";
import * as OutlineIcons from "@heroicons/react/24/outline";
import * as SolidIcons from "@heroicons/react/24/solid";

export type HeroIconStyle = "outline" | "solid";
export type IconName = keyof typeof OutlineIcons;

export type IconContainerProps = {
  name: IconName;
  style?: HeroIconStyle;
  size?: number;
  className?: string;
  color?: string; // Aceita tanto classe quanto token CSS
  useTokenColor?: boolean; // Define se a cor deve vir de um token CSS (true) ou classe Tailwind (false)
};

const IconContainer: React.FC<IconContainerProps> = ({
  name,
  style = "outline",
  size = 12,
  className = "",
  color = "text-icon",
  useTokenColor = false,
}) => {
  const IconComponent =
    style === "solid"
      ? (SolidIcons[name] as React.ElementType)
      : (OutlineIcons[name] as React.ElementType);

  if (!IconComponent) return null;

  const iconStyle = useTokenColor
    ? { width: size, height: size, color: `var(--${color})` }
    : { width: size, height: size };

  const iconClassName = useTokenColor ? className : `${color} ${className}`;

  return <IconComponent className={iconClassName} style={iconStyle} />;
};

export default IconContainer;

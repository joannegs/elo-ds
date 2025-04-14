import React from "react";
import IconContainer, { HeroIconStyle, IconName } from "./IconContainer";
import * as OutlineIcons from "@heroicons/react/24/outline";

const iconNames = Object.keys(OutlineIcons) as IconName[];

const IconGallery: React.FC<{
  style?: HeroIconStyle;
  size?: number;
  color?: string;
  useTokenColor?: boolean;
}> = ({ style = "outline", size = 24, color = "text-icon", useTokenColor = false }) => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {iconNames.map((iconName) => (
        <div
          key={iconName}
          className="flex flex-col items-center text-center text-xs gap-2"
        >
          <IconContainer
            name={iconName}
            style={style}
            size={size}
            color={color}
          />
          <span className="break-words">{iconName}</span>
        </div>
      ))}
    </div>
  );
};

export default IconGallery;

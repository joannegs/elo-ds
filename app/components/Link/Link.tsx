import { InputIconProps } from "../../types/Icon.types";
import IconContainer from "../IconContainer/IconContainer";
import { checkIfCustomColor } from "../../utils/utils";

export type LinkProps = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  color?: string;
  underline?: boolean;
  iconStart?: InputIconProps;
  iconEnd?: InputIconProps;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const EloLink = ({
  children,
  href,
  disabled,
  underline,
  className,
  size = "md",
  iconStart,
  iconEnd,
  color = "primary",
  ...rest
}: LinkProps) => {

  const isCustomColor = checkIfCustomColor(color);
  const textColor = isCustomColor ? color : `text-${color}`;
  const textSize = `var(--text-${size})`;
  const iconSize = getComputedStyle(document.documentElement).getPropertyValue(`--icon-${size}`).trim();

  return (
    <div
      className={`
        flex 
        ${disabled ? "cursor-not-allowed" : "cursor-pointer"} 
        items-center gap-2 ${underline ? "hover:underline" : ""}`}
      style={{ fontSize: textSize }}
    >
      {iconStart && (
        <IconContainer
          name={iconStart.iconName}
          style={iconStart.solid ? "solid" : "outline"}
          size={parseInt(iconSize)}
          color={color}
        />
      )}

      <a
        href={disabled ? undefined : href}
        className={`${textColor} ${className} ${
          underline ? "hover:brightness-50" : ""
        }`}
        style={isCustomColor ? { color } : {}}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </a>

      {iconEnd && (
        <IconContainer
          name={iconEnd.iconName}
          style={iconEnd.solid ? "solid" : "outline"}
          size={parseInt(iconSize)}
          color={color}
        />
      )}
    </div>
  );
};

export default EloLink;

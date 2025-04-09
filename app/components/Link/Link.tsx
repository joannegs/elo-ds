import IconContainer, { IconName } from "../IconContainer/IconContainer";

type InputIconProps = {
  iconName: IconName;
  solid?: boolean;
};

export type LinkProps = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  color?: string;
  underline?: boolean;
  iconStart?: InputIconProps;
  iconEnd?: InputIconProps;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({
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

  const isCustomColor = /^#[0-9A-Fa-f]{6}$|^#[0-9A-Fa-f]{3}$|^rgb|^hsl|^var\(--/.test(color);

  const textColor = isCustomColor ? color : `text-${color}`;

  const textSize = `var(--text-${size})`;
  const iconSize = getComputedStyle(document.documentElement).getPropertyValue(`--icon-${size}`).trim();

  return (
    <div
      className={`flex items-center gap-2 ${underline ? "hover:underline" : ""}`}
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
        className={`${textColor} ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${className} ${
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

export default Link;

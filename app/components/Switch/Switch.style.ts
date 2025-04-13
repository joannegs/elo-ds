import { cva } from "class-variance-authority";
import classNames from "classnames";
import { SwitchProps } from "./Switch";

const switchStyle = ({ variant, enabled, disabled, size = "default" }: SwitchProps) => {
  const containerVariant = cva(
    classNames(
      "outline-none relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out",
      { "pointer-events-none disabled:bg-medium-surface": disabled }
    ),
    {
      variants: {
        variant: {
          default: enabled ? "bg-primary" : "bg-primary-100",
          colorful: enabled ? "bg-success" : "bg-error",
          "colorful-icon": enabled ? "bg-success" : "bg-error",
        },
        size: {
          small: "h-4 w-xl",
          default: "h-6 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );
  const containerClasses = containerVariant({ variant, size });

  const switchVariant = {
    small: "h-2 w-2 mx-[5px]",
    default: "h-5 w-5 translate-x-1",
  };

  const switchClasses = classNames(
    "inline-block bg-white rounded-full transform transition-transform duration-200 ease-in-out",
    switchVariant[size],
    enabled ? (size === "small" ? "translate-x-[1.2rem]" : "translate-x-[2.1rem]") : ""
  );

  const iconVariant = {
    small: "text-xs",
    default: "text-sm",
  };

  const iconClasses = classNames(
    "aria-disabled:text-font-disabled",
    { "text-success": enabled && !disabled },
    { "text-error": !enabled && !disabled },
    { "text-disabled": disabled },
    iconVariant[size]
  );

  return {
    Icon: iconClasses,
    Switch: switchClasses,
    Container: containerClasses,
  };
};

export default switchStyle;
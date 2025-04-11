import React from "react";
import clsx from "clsx";
import IconContainer from "../IconContainer/IconContainer";
import { InputIconProps } from "../../types/Icon.types";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'alert';
  iconStart?: InputIconProps;
  iconEnd?: InputIconProps;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(
  variant: ButtonProps['variant'],
  disabled: ButtonProps['disabled']
) {
  switch (variant) {
    case 'primary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';
    case 'secondary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-primary-50 text-primary';
    case 'tertiary':
      return disabled ? 'text-disabled' : 'text-primary';
    case 'error':
      return disabled ? 'bg-disabled text-disabled' : 'bg-error text-white';
    case 'alert':
      return disabled ? 'bg-disabled text-disabled' : 'bg-alert text-black';
    case 'success':
      return disabled ? 'bg-disabled text-disabled' : 'bg-success text-white';
    default:
      return disabled ? '' : '';
  }
}

const Button = ({
  variant = 'primary',
  children,
  iconStart,
  iconEnd,
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'rounded-md px-6 py-2 flex items-center justify-center gap-2 transition-all',
        getVariant(variant, disabled),
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {iconStart && (
        <IconContainer
          name={iconStart.iconName}
          style={iconStart.solid ? 'solid' : 'outline'}
          size={20}
          color="currentColor"
        />
      )}

      {children}

      {iconEnd && (
        <IconContainer
          name={iconEnd.iconName}
          style={iconEnd.solid ? 'solid' : 'outline'}
          size={20}
          color="currentColor"
        />
      )}
    </button>
  );
};

export default Button;

import { IconName } from "../IconContainer/IconContainer";
import IconContainer from "../IconContainer/IconContainer";
import React from "react";

type InputIconProps = {
  iconName: IconName;
  solid?: boolean;
};

export type InputProps = {
  label?: string;
  multiline?: boolean;
  iconStart?: InputIconProps;
  iconEnd?: InputIconProps;
} & (
  React.InputHTMLAttributes<HTMLInputElement> |
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputOrTextArea = (props: InputProps) => {
  if (props.multiline) {
    return <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />;
  }
  return <input {...props as React.InputHTMLAttributes<HTMLInputElement>} />;
};

const Input: React.FC<InputProps> = ({
  label,
  className,
  iconStart,
  iconEnd,
  ...rest
}) => {
  return (
    <div className="relative w-full">
      {label && (
        <label className="absolute pt-1 pl-3 text-xs text-primary-100">
          {label}
        </label>
      )}
      <div
        className={`
          flex items-center w-full theme-grey bg-primary-50 text-primary rounded-md border p-3 gap-2
          disabled:bg-disabled disabled:text-primary-100 disabled:border-2 disabled:border-disabled
          ${label ? "pt-5" : ""}
        `}
      >
        {iconStart && (
          <IconContainer
            name={iconStart.iconName}
            style={iconStart.solid ? "solid" : "outline"}
            size={20}
            color="text-primary-100"
          />
        )}

        <InputOrTextArea
          className={`flex-1 bg-transparent outline-none ${className || ""}`}
          {...rest}
        />

        {iconEnd && (
          <IconContainer
            name={iconEnd.iconName}
            style={iconEnd.solid ? "solid" : "outline"}
            size={20}
            color="text-primary-100"
          />
        )}
      </div>
    </div>
  );
};

export default Input;

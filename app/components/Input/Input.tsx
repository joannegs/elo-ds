import { IconName } from "../IconContainer/IconContainer";
import IconContainer from "../IconContainer/IconContainer";
import React, { forwardRef } from "react";

type InputIconProps = {
  iconName: IconName;
  solid?: boolean;
};

type InputErrorProps = {
  message: string;
};

export type InputProps = {
  label?: string;
  multiline?: boolean;
  iconStart?: InputIconProps;
  iconEnd?: InputIconProps;
  error?: InputErrorProps;
} & (
  React.InputHTMLAttributes<HTMLInputElement> |
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputOrTextArea = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>((props, ref) => {
  if (props.multiline) {
    return (
      <textarea
        ref={ref as React.Ref<HTMLTextAreaElement>}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return (
    <input data-testid="elo-input"
      ref={ref as React.Ref<HTMLInputElement>}
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  );
});

InputOrTextArea.displayName = "InputOrTextArea";

const EloInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      label,
      className,
      iconStart,
      iconEnd,
      error,
      required,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        {label && (
          <label className="absolute pt-1 pl-3 text-xs text-subtitle">
            {label}
            {required && ' *'}
          </label>
        )}
        <div
          className={`
            flex items-center w-full rounded-md border p-3 gap-2
            ${label ? "pt-5" : ""}
            ${error ? "border-input-error" : "theme-grey"}
            disabled:bg-disabled disabled:text-grey disabled:border-2 disabled:border-disabled
          `}
        >
          {iconStart && (
            <IconContainer
              name={iconStart.iconName}
              style={iconStart.solid ? "solid" : "outline"}
              size={20}
              color="text-medium-surface"
            />
          )}

          <InputOrTextArea
            ref={ref}
            className={`flex-1 bg-transparent outline-none ${className || ""}`}
            required={required}
            {...rest}
          />

          {iconEnd && (
            <IconContainer
              name={iconEnd.iconName}
              style={iconEnd.solid ? "solid" : "outline"}
              size={20}
              color="text-medium-surface"
            />
          )}
        </div>

        {error?.message && (
          <p className="mt-1 ml-2 text-sm text-input-error">
            {error.message}
          </p>
        )}
      </div>
    );
  }
);

export default EloInput;

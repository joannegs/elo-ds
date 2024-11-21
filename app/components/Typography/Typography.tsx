import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("theme-gray text-primary text-sm font-normal", {
  variants: {
    variant: {
      primary: "text-primary-500",
      secondary: "text-primary-300",
      tertiary: "text-primary-100",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      xl: "text-xl",
      title1: "text-txl",
      title2: "text-tlg",
      title3: "text-tmd",
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
});

export type TypographyProps = VariantProps<typeof textVariants> & {
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements["p"];

const Typography = ({
  children,
  element = "p",
  className,
  ...rest
}: TypographyProps) => {
  const Element = element as any;
  return (
    <Element className={`theme-grey ${textVariants(rest)} ${className}`} {...rest}>
      {children}
    </Element>
  );
};

export default Typography;
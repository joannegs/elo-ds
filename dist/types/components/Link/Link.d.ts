import { InputIconProps } from "../../types/Icon.types";
export type LinkProps = {
    children: React.ReactNode;
    size?: "xs" | "sm" | "md" | "lg";
    disabled?: boolean;
    color?: string;
    underline?: boolean;
    iconStart?: InputIconProps;
    iconEnd?: InputIconProps;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
declare const EloLink: ({ children, href, disabled, underline, className, size, iconStart, iconEnd, color, ...rest }: LinkProps) => import("react/jsx-runtime").JSX.Element;
export default EloLink;

import { type SwitchProps as HeadlessSwitchProps } from "@headlessui/react";
export type SwitchProps = {
    defaultEnable?: boolean;
    variant?: "default" | "colorful" | "colorful-icon";
    disabled?: boolean;
    size: "small" | "default";
    onChange?: (enabled: boolean) => void;
} & HeadlessSwitchProps<any>;
declare const Switch: ({ defaultEnable: enabledByDefault, variant, size, disabled, onChange, ...rest }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
export default Switch;

import {
  Switch as HeadlessSwitch,
  type SwitchProps as HeadlessSwitchProps,
} from "@headlessui/react";
import { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import useStyle from "./Switch.style";

export type SwitchProps = {
  defaultEnable?: boolean;
  variant?: "default"| "colorful" | "colorful-icon";
  disabled?: boolean;
  size: "small" | "default",
  onChange?: (enabled: boolean) => void;
} & HeadlessSwitchProps<any>;

const Switch = ({
  defaultEnable: enabledByDefault,
  variant = "default",
  size = "default",
  disabled,
  onChange,
  ...rest
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(enabledByDefault);
  const style = useStyle({ variant, enabled, disabled, size });

  const toggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    onChange?.(newState);
  };

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={toggle}
      disabled={disabled}
      className={style.Container}
      {...rest}
    >
      <span className="sr-only">switch toggle</span>
      {variant !== "colorful-icon" && <span className={style.Switch} />}
      {variant === "colorful-icon" && (
        <span className={style.Switch}>
          {enabled && (
            <CheckIcon className={style.Icon} aria-disabled={disabled} />
          )}
          {enabled || (
            <XMarkIcon className={style.Icon} aria-disabled={disabled} />
          )}
        </span>
      )}
    </HeadlessSwitch>
  );
};

export default Switch;
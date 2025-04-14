var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch as HeadlessSwitch, } from "@headlessui/react";
import { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import useStyle from "./Switch.style";
const EloSwitch = (_a) => {
    var { defaultEnable: enabledByDefault, variant = "default", size = "default", disabled, onChange } = _a, rest = __rest(_a, ["defaultEnable", "variant", "size", "disabled", "onChange"]);
    const [enabled, setEnabled] = useState(enabledByDefault);
    const style = useStyle({ variant, enabled, disabled, size });
    const toggle = () => {
        const newState = !enabled;
        setEnabled(newState);
        onChange === null || onChange === void 0 ? void 0 : onChange(newState);
    };
    return (_jsxs(HeadlessSwitch, Object.assign({ checked: enabled, onChange: toggle, disabled: disabled, className: style.Container }, rest, { children: [_jsx("span", { className: "sr-only", children: "switch toggle" }), variant !== "colorful-icon" && _jsx("span", { className: style.Switch }), variant === "colorful-icon" && (_jsxs("span", { className: style.Switch, children: [enabled && (_jsx(CheckIcon, { className: style.Icon, "aria-disabled": disabled })), enabled || (_jsx(XMarkIcon, { className: style.Icon, "aria-disabled": disabled }))] }))] })));
};
export default EloSwitch;

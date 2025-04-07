import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { IconName } from "../IconContainer/IconContainer";
import * as OutlineIcons from "@heroicons/react/24/outline";

const iconNamesOptions = [undefined, ...Object.keys(OutlineIcons) as IconName[]];

type ButtonStoryArgs = ButtonProps & {
  iconStartName?: IconName;
  iconStartSolid?: boolean;
  iconEndName?: IconName;
  iconEndSolid?: boolean;
};

const meta: Meta<ButtonStoryArgs> = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
      name: "Text",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "error", "alert", "success"],
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
    },
    iconStartName: {
      name: "Icon Start Name",
      control: { type: "select" },
      options: iconNamesOptions,
    },
    iconStartSolid: {
      name: "Icon Start Solid",
      control: { type: "radio" },
      options: [true, false],
    },
    iconEndName: {
      name: "Icon End Name",
      control: { type: "select" },
      options: iconNamesOptions,
    },
    iconEndSolid: {
      name: "Icon End Solid",
      control: { type: "radio" },
      options: [true, false],
    },
  },
};

export default meta;

const renderButton = (args: ButtonStoryArgs) => {
  const { iconStartName, iconEndName, iconStartSolid, iconEndSolid, ...rest } = args;

  const iconStart = iconStartName
    ? { iconName: iconStartName, solid: iconStartSolid }
    : undefined;

  const iconEnd = iconEndName
    ? { iconName: iconEndName, solid: iconEndSolid }
    : undefined;

  return <Button {...rest} iconStart={iconStart} iconEnd={iconEnd} />;
};

export const Primary: StoryObj<ButtonStoryArgs> = {
  args: {
    children: "Botão Primário",
    variant: "primary",
    disabled: false,
    iconStartName: undefined,
    iconEndName: undefined,
  },
  render: renderButton,
};

export const WithIcons: StoryObj<ButtonStoryArgs> = {
  args: {
    children: "Com Ícones",
    variant: "primary",
    iconStartName: "ArrowLeftIcon",
    iconStartSolid: false,
    iconEndName: "ArrowRightIcon",
    iconEndSolid: false,
  },
  render: renderButton,
};

export const Disabled: StoryObj<ButtonStoryArgs> = {
  args: {
    children: "Desabilitado",
    variant: "primary",
    disabled: true,
    iconStartName: "LockClosedIcon",
    iconStartSolid: true,
  },
  render: renderButton,
};

export const Danger: StoryObj<ButtonStoryArgs> = {
  args: {
    children: "Erro",
    variant: "error",
    iconEndName: "ExclamationTriangleIcon",
    iconEndSolid: false,
  },
  render: renderButton,
};
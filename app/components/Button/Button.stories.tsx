import { Meta, StoryObj } from "@storybook/react";
import EloButton, { ButtonProps } from "./Button";
import { IconName } from "../IconContainer/IconContainer";
import * as OutlineIcons from "@heroicons/react/24/outline";
import React from "react";
import { EloColorOptions } from './../../../styles/colors';

const iconNamesOptions = [undefined, ...Object.keys(OutlineIcons) as IconName[]];

type ButtonStoryArgs = ButtonProps & {
  iconStartName?: IconName;
  iconStartSolid?: boolean;
  iconEndName?: IconName;
  iconEndSolid?: boolean;
  customBackgroundColor?: string;
  customTextColor?: string;
};

const meta: Meta<ButtonStoryArgs> = {
  title: "Button",
  component: EloButton,
  argTypes: {
    children: {
      type: "string",
      name: "Text",
    },
    variant: {
      control: { type: "select" },
      options: [undefined, "primary", "secondary", "tertiary", "error", "alert", "success"],
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
    },
    customBackgroundColor: {
      name: "Custom Background Color",
      control: { type: "select" },
      options: EloColorOptions,
    },
    customTextColor: {
      name: "Text Color",
      control: { type: "select" },
      options: EloColorOptions,
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
  const { iconStartName, iconEndName, iconStartSolid, iconEndSolid, customBackgroundColor, customTextColor, variant, ...rest } = args;

  const iconStart = iconStartName
    ? { iconName: iconStartName, solid: iconStartSolid }
    : undefined;

  const iconEnd = iconEndName
    ? { iconName: iconEndName, solid: iconEndSolid }
    : undefined;

  return (
    <EloButton
      {...rest}
      iconStart={iconStart}
      iconEnd={iconEnd}
      customBackgroundColor={customBackgroundColor}
      customTextColor={customTextColor}
      variant={variant}
    />
  );
};

export const Primary: StoryObj<ButtonStoryArgs> = {
  args: {
    children: "Botão Primário",
    variant: "primary",
    disabled: false,
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

export const CustomColors: StoryObj<ButtonStoryArgs> = {
  args: {
    children: "Personalizado",
    customBackgroundColor: 'primary',
    customTextColor: 'primary-75',
    iconStartName: "SparklesIcon",
    iconStartSolid: false,
    disabled: false,
    variant: undefined,
  },
  render: renderButton,
};

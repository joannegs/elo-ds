import { Meta, StoryObj } from "@storybook/react";
import Badge, { BadgeProps } from "./Badge";
import { IconName } from "../IconContainer/IconContainer";
import * as OutlineIcons from "@heroicons/react/24/outline";

// Opções de ícones disponíveis (definindo um array com os ícones disponíveis)
const iconNamesOptions = [undefined, ...Object.keys(OutlineIcons) as IconName[]];

type BadgeStoryArgs = BadgeProps & {
  iconStartName?: IconName;
  iconStartSolid?: boolean;
  iconEndName?: IconName;
  iconEndSolid?: boolean;
};

const meta: Meta<BadgeStoryArgs> = {
  title: "Badge",
  component: Badge,
  argTypes: {
    color: {
      control: { type: "text" },
    },
    textColor: {
      control: { type: "text" },
    },
    shadow: {
      control: { type: "boolean" },
    },
    tagContent: {
      control: { type: "text" },
    },
    className: { type: "string" },
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg"],
      },
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

const renderBadge = (args: BadgeStoryArgs) => {
  const { iconStartName, iconEndName, iconStartSolid, iconEndSolid, ...rest } = args;

  const iconStart = iconStartName
    ? { iconName: iconStartName, solid: iconStartSolid }
    : undefined;

  const iconEnd = iconEndName
    ? { iconName: iconEndName, solid: iconEndSolid }
    : undefined;

  return <Badge {...rest} iconStart={iconStart} iconEnd={iconEnd} />;
};

export const Primary: StoryObj<BadgeStoryArgs> = {
  args: {
    color: "primary",
    textColor: "light-surface",
    shadow: false,
    size: "md",
    tagContent: "Primary Badge",
    iconStartName: undefined,
    iconEndName: undefined,
  },
  render: renderBadge,
};

export const WithIcons: StoryObj<BadgeStoryArgs> = {
  args: {
    color: "primary",
    textColor: "light-surface",
    shadow: false,
    size: "md",
    tagContent: "With Icons",
    iconStartName: "ArrowLeftIcon",
    iconStartSolid: false,
    iconEndName: "ArrowRightIcon",
    iconEndSolid: false,
  },
  render: renderBadge,
};

export const WithIconStartAndShadow: StoryObj<BadgeStoryArgs> = {
  args: {
    color: "success",
    textColor: "light-surface",
    shadow: true,
    size: "lg",
    tagContent: "With Icon and Shadow",
    iconStartName: "CheckCircleIcon",
    iconStartSolid: true,
  },
  render: renderBadge,
};

export const WithIconEnd: StoryObj<BadgeStoryArgs> = {
  args: {
    color: "error",
    textColor: "light-surface",
    shadow: false,
    size: "sm",
    tagContent: "With Icon End",
    iconEndName: "ExclamationCircleIcon",
    iconEndSolid: false,
  },
  render: renderBadge,
};

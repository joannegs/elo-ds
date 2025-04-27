import { Meta, StoryObj } from "@storybook/react";
import IconContainer from "./IconContainer";
import * as OutlineIcons from "@heroicons/react/24/outline";
import IconGallery from "./IconContainerGallery";
import React from "react";

const iconNames = Object.keys(OutlineIcons) as (keyof typeof OutlineIcons)[];

const meta: Meta<typeof IconContainer> = {
  title: "IconContainer",
  component: IconContainer,
  argTypes: {
    name: { control: "select", options: iconNames },
    style: { control: "radio", options: ["outline", "solid"] },
    size: { control: "number" },
    className: { control: "text" },
    color: { control: "text" },
  },
};

export default meta;

export const Default: StoryObj<typeof IconContainer> = {
  args: {
    name: "CheckIcon",
    style: "outline",
    size: 32,
    color: "text-green-500",
  },
};

export const AllIcons = {
  render: () => (
    <IconGallery
      style="outline"
      size={24}
      color="black"
    />
  ),
};

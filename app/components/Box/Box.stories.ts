import type { Meta, StoryObj } from "@storybook/react";
import Box, { type BoxProps } from "./Box";

const meta: Meta<BoxProps> = {
  title: "Box",
  component: Box,
  argTypes: {
    border: {
      control: { type: "boolean" },
    },
    type: {
      control: { type: "select" },
      options: ["light", "medium", "dark"],
    },
    shadow: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],

    },
  },
};

export default meta;
type Story = StoryObj<BoxProps>;

export const Primary: Story = {
  args: {
    children: "This is a primary box",
  },
};

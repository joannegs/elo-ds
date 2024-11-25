import type { Meta, StoryObj } from "@storybook/react";
import Badge, { type BadgeProps } from "./Badge";

const meta: Meta<BadgeProps> = {
  title: "Badge",
  component: Badge,
  argTypes: {
    color: {
      control: { type: "text" },
    },
    textColor: {
      control: { type: "select" },
      options: ["white", "black", "gray", "red", "blue"],
    },
    borderColor: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    shadow: {
      control: { type: "boolean" },
    },
    tagContent: {
      control: { type: "text" },
    },
    className: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<BadgeProps>;

export const Primary: Story = {
  args: {
    color: "primary-300",
    textColor: "white",
    borderColor: "light",
    shadow: true,
    tagContent: "Primary Badge",
  },
};

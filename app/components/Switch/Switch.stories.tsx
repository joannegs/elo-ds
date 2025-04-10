import type { Meta, StoryObj } from "@storybook/react";
import Switch, { type SwitchProps } from "./Switch";

const meta: Meta<SwitchProps> = {
  title: "Switch",
  component: Switch,
  argTypes: {
    defaultEnable: {
      type: "boolean",
      control: { type: "boolean" },
    },
    disabled: {
      type: "boolean",
      control: { type: "boolean" },
    },
    variant: {
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<SwitchProps>;
export const Primary: Story = {
  args: {},
};

export const Default: Story = {
  args: {
    variant: "default",
    defaultEnable: true,
  },
};

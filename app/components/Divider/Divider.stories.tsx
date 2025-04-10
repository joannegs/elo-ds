import { Meta, StoryObj } from "@storybook/react";

import Divider, { type DividerProps } from "./Divider";

const meta: Meta<DividerProps> = {
  title: "Divider",
  component: Divider,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;

export const Default: StoryObj<DividerProps> = {
  args: {},
};

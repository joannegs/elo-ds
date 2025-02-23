import type { Meta, StoryObj } from "@storybook/react";
import { ProgressIndicator, type ProgressIndicatorProps } from "./ProgressIndicator";

const meta: Meta<ProgressIndicatorProps> = {
  title: "ProgressIndicator",
  component: ProgressIndicator,
  argTypes: {
    percentage: {
      type: "number",
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    className: {
      type: "string",
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<ProgressIndicatorProps>;

export const Primary: Story = {
  args: {
    percentage: 50,
  },
};

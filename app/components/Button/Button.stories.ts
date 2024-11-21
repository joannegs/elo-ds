import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
    }
  }
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão'
  }
}

export const DangerButton: StoryObj<ButtonProps> = {
  args: {
    children: 'Danger Button',
    className: 'theme-red'
  }
}
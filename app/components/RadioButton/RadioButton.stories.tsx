import { Meta, StoryObj } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

const meta: Meta<RadioButtonProps> = {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    selected: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' }
  }
};

export default meta;

export const Default: StoryObj<RadioButtonProps> = {
  args: {
    selected: false,
    label: 'Opção 1',
    name: 'group1'
  }
};

export const Selected: StoryObj<RadioButtonProps> = {
  args: {
    selected: true,
    label: 'Opção 2',
    name: 'group1'
  }
};
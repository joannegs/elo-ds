import { Meta, StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

const meta: Meta<CheckboxProps> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' }
  }
};

export default meta;

export const Default: StoryObj<CheckboxProps> = {
  args: {
    checked: false,
    label: 'Opção 1'
  }
};

export const Checked: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
    label: 'Opção 2'
  }
};

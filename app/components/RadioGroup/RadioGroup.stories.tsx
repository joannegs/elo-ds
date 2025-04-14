import { Meta, StoryObj } from '@storybook/react';
import EloRadioGroup, { RadioGroupProps } from './RadioGroup';

const meta: Meta<RadioGroupProps> = {
  title: 'RadioGroup',
  component: EloRadioGroup,
  argTypes: {
    value: { control: 'text' },
    name: { control: 'text' },
    className: { control: 'text' },
    onChange: { action: 'changed' },
    options: {
      control: 'object',
      defaultValue: [
        { label: 'Opção 1', value: '1' },
        { label: 'Opção 2', value: '2' }
      ]
    }
  }
};

export default meta;

type Story = StoryObj<RadioGroupProps>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Opção 1', value: '1' },
      { label: 'Opção 2', value: '2' }
    ],
    value: '1',
    name: 'group1'
  }
};

export const DisabledOption: Story = {
  args: {
    options: [
      { label: 'Opção 1', value: '1' },
      { label: 'Opção 2', value: '2', disabled: true }
    ],
    value: '1',
    name: 'group1'
  }
};

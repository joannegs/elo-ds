import { Meta, StoryObj } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';

const meta: Meta<DropdownProps> = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    multiSelect: {
      control: 'boolean',
      description: 'Define se o dropdown permite seleção múltipla ou única',
    },
  },
};

export default meta;

export const Default: StoryObj<DropdownProps> = {
  args: {
    options: [
      { label: 'Opção 1', value: 'op1' },
      { label: 'Opção 2', value: 'op2' },
      { label: 'Opção 3', value: 'op3' },
    ],
    selectedValues: ['op1'],
    onSelectionChange: (selected) => console.log("Selecionado:", selected),
    multiSelect: true,
  }
};

export const SingleSelect: StoryObj<DropdownProps> = {
  args: {
    options: [
      { label: 'Opção 1', value: 'op1' },
      { label: 'Opção 2', value: 'op2' },
      { label: 'Opção 3', value: 'op3' },
    ],
    selectedValues: ['op1'],
    onSelectionChange: (selected) => console.log("Selecionado:", selected),
    multiSelect: false,
  }
};

import { Meta, StoryObj } from '@storybook/react';
import EloMultiStep, { MultiStepProps } from './MultiStep';

const meta: Meta<MultiStepProps> = {
  title: 'MultiStep',
  component: EloMultiStep,
  argTypes: {
    size: {
      control: { type: 'number' },
    },
    currentStep: {
      control: { type: 'number' },
    },
    variant: {
      control: { type: 'select' },
      options: ['bar', 'dot'],
    },
    className: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<MultiStepProps>;

export const Default: Story = {
  args: {
    size: 5,
    currentStep: 1,
    variant: 'bar',
  },
};

export const CustomTheme: Story = {
  args: {
    size: 4,
    currentStep: 3,
    variant: 'bar',
    className: 'theme-yellow',
  },
};

import { Meta, StoryObj } from '@storybook/react';
import Header, { HeaderProps } from './Header';

const meta: Meta<HeaderProps> = {
  title: 'Header',
  component: Header,
  argTypes: {
    backgroundColor: {
      control: { type: 'text' },
    }
  }
};

export default meta;

export const Default: StoryObj<HeaderProps> = {
  args: {
    logo: 'Logo',
    backgroundColor: "header",
    navigation: ['Home', 'Sistema'],
  }
};

export const Alternative: StoryObj<HeaderProps> = {
  args: {
    logo: 'Logo',
    backgroundColor: "header",
    navigation: ['Área 1', 'Área 2', 'Área 3'],
  }
};

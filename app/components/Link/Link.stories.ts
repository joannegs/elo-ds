import { Meta, StoryObj } from '@storybook/react';
import Link, { LinkProps } from './Link';

type LinkStoryArgs = LinkProps;

const meta: Meta<LinkStoryArgs> = {
  title: 'Link',
  component: Link,
  argTypes: {
    underline: {
      name: 'Underline',
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Primary: StoryObj<LinkStoryArgs> = {
  args: {
    children: 'Link',
    href: '/',
    underline: false,
  },
};

export const Disabled: StoryObj<LinkStoryArgs> = {
  args: {
    children: 'Link',
    disabled: true,
    underline: false,
  },
};

export const SuccessLink: StoryObj<LinkStoryArgs> = {
  args: {
    children: 'Success Link',
    className: 'theme-green',
    underline: true,
  },
};

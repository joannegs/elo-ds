import { Meta, StoryObj } from '@storybook/react';

import Link, { LinkProps } from './Link';

const meta: Meta<LinkProps> = {
  title: 'Link',
  component: Link,
  argTypes: {}
};

export default meta;

export const Primary: StoryObj<LinkProps> = {
  args: {
    children: 'Link',
    href: '/'
  }
};

export const Disabled: StoryObj<LinkProps> = {
  args: {
    children: 'Link',
    disabled: true,
  }
};

export const SuccessLink:  StoryObj<LinkProps> = {
  args: {
    children: 'Success Link',
    className: 'theme-green'
  }
};
import { Meta, StoryObj } from '@storybook/react';
import Link, { LinkProps } from './Link';
import { IconName } from '../IconContainer/IconContainer';
import * as OutlineIcons from '@heroicons/react/24/outline';

const iconNamesOptions = [undefined, ...Object.keys(OutlineIcons) as IconName[]];

type LinkStoryArgs = LinkProps & {
  iconStartName?: IconName;
  iconStartSolid?: boolean;
  iconEndName?: IconName;
  iconEndSolid?: boolean;
};

const meta: Meta<LinkStoryArgs> = {
  title: 'Link',
  component: Link,
  argTypes: {
    underline: {
      name: 'Underline',
      control: { type: 'boolean' },
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },
    iconStartName: {
      name: 'Icon Start Name',
      control: { type: 'select' },
      options: iconNamesOptions,
    },
    iconStartSolid: {
      name: 'Icon Start Solid',
      control: { type: 'radio' },
      options: [true, false],
    },
    iconEndName: {
      name: 'Icon End Name',
      control: { type: 'select' },
      options: iconNamesOptions,
    },
    iconEndSolid: {
      name: 'Icon End Solid',
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

export default meta;

const renderLink = (args: LinkStoryArgs) => {
  const { iconStartName, iconEndName, iconStartSolid, iconEndSolid, size, ...rest } = args;

  const iconStart = iconStartName
    ? { iconName: iconStartName, solid: iconStartSolid }
    : undefined;

  const iconEnd = iconEndName
    ? { iconName: iconEndName, solid: iconEndSolid }
    : undefined;

  return <Link {...rest} iconStart={iconStart} iconEnd={iconEnd} size={size} />;
};

export const Primary: StoryObj<LinkStoryArgs> = {
  args: {
    children: 'Link',
    href: '/',
    underline: false,
    size: 'md',
  },
  render: renderLink,
};

export const Disabled: StoryObj<LinkStoryArgs> = {
  args: {
    children: 'Link',
    disabled: true,
    underline: false,
    size: 'md',
  },
  render: renderLink,
};

export const SuccessLink: StoryObj<LinkStoryArgs> = {
  args: {
    children: 'Success Link',
    className: 'theme-green',
    underline: true,
    size: 'md',
  },
  render: renderLink,
};

export const WithIconStart: StoryObj<LinkStoryArgs> = {
  args: {
    children: 'Link with Start Icon',
    href: '/',
    underline: true,
    size: 'md',
    iconStartName: 'ArrowLeftIcon',
    iconStartSolid: false,
  },
  render: renderLink,
};

export const WithIconEnd: StoryObj<LinkStoryArgs> = {
  args: {
    children: 'Link with End Icon',
    href: '/',
    underline: true,
    size: 'md',
    iconEndName: 'ArrowRightIcon',
    iconEndSolid: false,
  },
  render: renderLink,
};

export const WithIcons: StoryObj<LinkStoryArgs> = {
  args: {
    children: 'Link with Both Icons',
    href: '/',
    underline: true,
    size: 'md',
    iconStartName: 'ArrowLeftIcon',
    iconStartSolid: false,
    iconEndName: 'ArrowRightIcon',
    iconEndSolid: false,
  },
  render: renderLink,
};

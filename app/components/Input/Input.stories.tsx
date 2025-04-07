import { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './Input';
import { IconName } from '../IconContainer/IconContainer';
import * as OutlineIcons from '@heroicons/react/24/outline';

const iconNamesOptions = [...Object.keys(OutlineIcons) as string[], 'None'];

type InputStoryArgs = InputProps & {
  iconStartName?: IconName;
  iconStartSolid?: boolean;
  iconEndName?: IconName;
  iconEndSolid?: boolean;
};

const meta: Meta<InputStoryArgs> = {
  title: 'Input',
  component: Input,
  argTypes: {
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

export const Primary: StoryObj<InputStoryArgs> = {
  args: {
    value: 'Input',
    iconStartName: undefined,
    iconStartSolid: false,
    iconEndName: undefined,
    iconEndSolid: false,
  },
};

export const WithIcons: StoryObj<InputStoryArgs> = {
  args: {
    placeholder: 'Placeholder',
    iconStartName: 'ArrowTopRightOnSquareIcon',
    iconStartSolid: false,
    iconEndName: 'ArrowTopRightOnSquareIcon',
    iconEndSolid: false,
  },
  render: (args: InputStoryArgs) => (
    <Input
      {...args}
      iconStart={
        args.iconStartName
          ? { iconName: args.iconStartName, solid: args.iconStartSolid }
          : undefined
      }
      iconEnd={
        args.iconEndName
          ? { iconName: args.iconEndName, solid: args.iconEndSolid }
          : undefined
      }
    />
  ),
};

export const Disabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    disabled: true,
  },
};
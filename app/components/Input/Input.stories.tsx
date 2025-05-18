import { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './Input';
import { IconName } from '../IconContainer/IconContainer';
import * as OutlineIcons from '@heroicons/react/24/outline';
import EloInput from './Input';
import React from 'react';

const iconNamesOptions = [...Object.keys(OutlineIcons) as string[], 'None'];

type InputStoryArgs = InputProps & {
  iconStartName?: IconName;
  iconStartSolid?: boolean;
  iconEndName?: IconName;
  iconEndSolid?: boolean;
  showError?: boolean;
  errorMessage?: string;
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
    showError: {
      name: 'Show Error',
      control: { type: 'boolean' },
    },
    errorMessage: {
      name: 'Error Message',
      control: { type: 'text' },
    },
  },
};

export default meta;

const renderInput = (args: InputStoryArgs) => {
  return (
    <EloInput
      {...args}
      iconStart={
        args.iconStartName
          ? { iconName: args.iconStartName!, solid: args.iconStartSolid }
          : undefined
      }
      iconEnd={
        args.iconEndName
          ? { iconName: args.iconEndName!, solid: args.iconEndSolid }
          : undefined
      }
      error={
        args.showError && args.errorMessage
          ? { message: args.errorMessage }
          : undefined
      }
    />
  );
};

export const Primary: StoryObj<InputStoryArgs> = {
  args: {
    value: 'Input',
    iconStartName: undefined,
    iconEndName: undefined,
    showError: false,
    errorMessage: 'Este campo é obrigatório.',
  },
  render: renderInput,
};

export const WithIcons: StoryObj<InputStoryArgs> = {
  args: {
    placeholder: 'Placeholder',
    iconStartName: 'ArrowTopRightOnSquareIcon',
    iconStartSolid: false,
    iconEndName: 'ArrowTopRightOnSquareIcon',
    iconEndSolid: false,
    showError: false,
  },
  render: renderInput,
};

export const Disabled: StoryObj<InputStoryArgs> = {
  args: {
    value: 'Input',
    disabled: true,
    iconStartName: undefined,
    iconEndName: undefined,
    showError: false,
    errorMessage: '',
  },
  render: renderInput,
};
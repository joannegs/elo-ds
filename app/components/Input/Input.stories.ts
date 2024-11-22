import { Meta, StoryObj} from '@storybook/react'

import Input, { InputProps } from './Input'

const meta: Meta<InputProps> = {
  title: 'Input',
  component: Input,
  argTypes: {}
}

export default meta

export const Primary: StoryObj<InputProps> = {
  args: {
    value: 'Input',
  }
}

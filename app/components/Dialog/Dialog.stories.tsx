import { Meta, StoryObj } from "@storybook/react";
import Dialog, { DialogProps } from './Dialog';

const meta: Meta<DialogProps> = {
  title: 'Dialog',
  component: Dialog,
  argTypes: {
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    onClose: {
      action: 'onClose'
    },
    actions: {
      control: { type: 'object' }
    },
    children: {
      control: { type: 'text' }
    }
  }
};

export default meta;

export const BasicModal: StoryObj<DialogProps> = {
  args: {
    title: 'Título do Modal',
    description: 'Esta é a descrição do modal.',
    actions: [
      { text: 'Confirmar', variant: 'primary', onClick: () => console.log('Confirmar') },
      { text: 'Cancelar', variant: 'secondary', onClick: () => console.log('Cancelar') },
    ],
  }
};


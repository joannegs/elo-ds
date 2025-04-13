import { Meta, StoryObj } from '@storybook/react';
import Footer, { FooterProps } from './Footer';

const meta: Meta<FooterProps> = {
  title: 'Footer',
  component: Footer,
  argTypes: {
    backgroundColor: {
      control: { type: 'text' },
    }
  }
};

export default meta;

export const Default: StoryObj<FooterProps> = {
  args: {
    logo: 'Logo',
    backgroundColor: "footer",
    middleContent: 'Instituição & Parceiros',
    socialLinks: {
      email: 'mailto:example@example.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
    },
  }
};

export const NoSocialLinks: StoryObj<FooterProps> = {
  args: {
    logo: 'Logo',
    backgroundColor: "footer",
    middleContent: 'Instituição & Parceiros',
  }
};

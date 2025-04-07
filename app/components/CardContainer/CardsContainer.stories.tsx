import { Meta, StoryObj } from '@storybook/react';
import CardContainer, { CardContainerProps } from './CardContainer';

const meta: Meta<CardContainerProps> = {
  title: 'CardContainer',
  component: CardContainer,
  argTypes: {
    hideHover: { control: 'boolean' },
    shadow: { control: 'boolean' },
    border: { control: 'boolean' }, // <-- controle de borda adicionado
    className: { control: 'text' },
    fixedDimensions: {
      control: 'object',
    },
    children: {
      control: false,
    },
  },
};

export default meta;

const SampleCard = ({ text }: { text: string }) => (
  <div className="text-center text-gray-700 font-medium">{text}</div>
);

export const Default: StoryObj<CardContainerProps> = {
  args: {
    hideHover: true,
    shadow: true,
    border: false,
    fixedDimensions: { width: 200, height: 150 },
    children: (
      <>
        <SampleCard text="Card 1" />
        <SampleCard text="Card 2" />
      </>
    ),
  },
};

export const WithHover: StoryObj<CardContainerProps> = {
  args: {
    hideHover: false,
    shadow: true,
    border: true,
    fixedDimensions: { width: 200, height: 150 },
    children: (
      <>
        <SampleCard text="Hover 1" />
        <SampleCard text="Hover 2" />
      </>
    ),
  },
};

export const NoShadow: StoryObj<CardContainerProps> = {
  args: {
    hideHover: false,
    shadow: false,
    border: true,
    fixedDimensions: { width: 200, height: 150 },
    children: (
      <>
        <SampleCard text="Flat 1" />
        <SampleCard text="Flat 2" />
      </>
    ),
  },
};

export const CustomSize: StoryObj<CardContainerProps> = {
  args: {
    hideHover: false,
    shadow: true,
    border: true,
    fixedDimensions: { width: 300, height: 200 },
    children: (
      <>
        <SampleCard text="Big 1" />
        <SampleCard text="Big 2" />
      </>
    ),
  },
};

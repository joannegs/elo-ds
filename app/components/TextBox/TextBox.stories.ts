import { Meta, StoryObj } from "@storybook/react";
import TextBox, { type TextBoxProps } from "./TextBox";

const meta: Meta<TextBoxProps> = {
  title: "TextBox",
  component: TextBox,
  argTypes: {
    title: {
      type: "string",
      description: "O título do TextBox.",
      control: { type: "text" },
    },
    titleSize: {
      description: "Define o tamanho do título.",
      control: { type: "select" },
      options: ["xl", "title1", "title2", "title3"],
    },
    content: {
      type: "string",
      description: "O conteúdo textual do TextBox.",
      control: { type: "text" },
    },
    className: {
      type: "string",
      description: "Classes CSS adicionais para estilização.",
      control: { type: "text" },
    },
  },
};

export default meta;

export const Default: StoryObj<TextBoxProps> = {
  args: {
    title: "Default Title",
    titleSize: "title2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    className: "",
  },
};

export const CustomStyle: StoryObj<TextBoxProps> = {
  args: {
    title: "Custom Styled Title",
    titleSize: "title1",
    content:
      "This is a TextBox with custom styles applied through the `className` prop. You can adjust the background, padding, borders, and more.",
    className: "bg-blue-100 p-8 border border-blue-400",
  },
};

export const WithoutTitle: StoryObj<TextBoxProps> = {
  args: {
    content:
      "This is a TextBox without a title. Only the content is displayed here with the selected size and styles.",
    className: "bg-gray-200 p-6 rounded-lg",
  },
};

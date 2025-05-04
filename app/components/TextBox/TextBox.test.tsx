import React from 'react';
import { render, screen } from '@testing-library/react';
import EloTextBox, { TextBoxProps } from './TextBox';

jest.mock('../Typography/Typography', () => ({ element, size, variant, children, className }: any) => (
  React.createElement(element || 'p', {
    'data-testid': `typography-${size}`,
    className,
    'data-variant': variant,
  }, children)
));

describe('EloTextBox', () => {
  const defaultProps: TextBoxProps = {
    content: 'This is some content',
    title: 'This is a title',
    titleSize: 'title1',
  };

  it('should render correctly with title and content', () => {
    render(<EloTextBox {...defaultProps} />);
    expect(screen.getByText(defaultProps.title!)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.content)).toBeInTheDocument();
  });

  it('should not render title if not provided', () => {
    render(<EloTextBox content="Only content" titleSize="title2" />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    expect(screen.getByText('Only content')).toBeInTheDocument();
  });

  it('should apply className correctly to container', () => {
    render(<EloTextBox {...defaultProps} className="custom-class" />);
    const container = screen.getByText(defaultProps.content).parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('should spread additional props onto the root element', () => {
    render(<EloTextBox {...defaultProps} data-testid="text-box" />);
    expect(screen.getByTestId('text-box')).toBeInTheDocument();
  });

  it.each(['xl', 'title1', 'title2', 'title3'] as const)(
    'should render the title with size "%s"',
    (size) => {
      render(<EloTextBox title="Title" content="Content" titleSize={size} />);
      expect(screen.getByTestId(`typography-${size}`)).toBeInTheDocument();
    }
  );

  it('should render title with correct variant and className', () => {
    render(<EloTextBox {...defaultProps} />);
    const heading = screen.getByText(defaultProps.title!);
    expect(heading).toHaveAttribute('data-variant', 'primary');
    expect(heading).toHaveClass('font-bold mb-4');
  });

  it('should render content with variant "primary"', () => {
    render(<EloTextBox {...defaultProps} />);
    const paragraph = screen.getByText(defaultProps.content);
    expect(paragraph).toHaveAttribute('data-variant', 'primary');
  });
});

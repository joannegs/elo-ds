import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EloButton from './Button';
import React from 'react';
import { InputIconProps } from '../../types/Icon.types';

describe('EloButton', () => {
  it('renders the button text correctly', () => {
    render(<EloButton>Test Button</EloButton>);

    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<EloButton onClick={handleClick}>Click Here</EloButton>);

    await user.click(screen.getByText('Click Here'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the disabled class when disabled prop is passed', () => {
    render(<EloButton disabled>Disabled Button</EloButton>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('applies correct background and text color for primary variant', () => {
    render(<EloButton variant="primary">Primary Button</EloButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary', 'text-white');
  });

  it('applies correct background and text color for secondary variant', () => {
    render(<EloButton variant="secondary">Secondary Button</EloButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary-50', 'text-primary-500');
  });

  it('applies correct background and text color for success variant', () => {
    render(<EloButton variant="success">Success Button</EloButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-success', 'text-white');
  });

  it('applies correct background and text color for error variant', () => {
    render(<EloButton variant="error">Error Button</EloButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-error', 'text-white');
  });

  it('applies correct background and text color for alert variant', () => {
    render(<EloButton variant="alert">Alert Button</EloButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-alert', 'text-black');
  });

  it('applies correct background and text color for tertiary variant', () => {
    render(<EloButton variant="tertiary">Tertiary Button</EloButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-primary');
  });

  it('does not apply any styles when the variant is not specified and uses customBackgroundColor and customTextColor', () => {
    render(
      <EloButton customBackgroundColor="green" customTextColor="yellow">
        Custom Color Button
      </EloButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-green', 'text-yellow');
  });

  it('renders iconStart and iconEnd when provided', () => {
    const iconStart: InputIconProps = { iconName: 'ArchiveBoxXMarkIcon', solid: true };
    const iconEnd: InputIconProps = { iconName: 'ArrowDownCircleIcon', solid: false };

    render(
      <EloButton iconStart={iconStart} iconEnd={iconEnd}>
        Button with Icons
      </EloButton>
    );

    expect(screen.getByLabelText(/ArchiveBoxXMarkIcon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ArrowDownCircleIcon/i)).toBeInTheDocument();
  });

  it('does not render icons when not provided', () => {
    render(<EloButton>Button without Icons</EloButton>);

    expect(screen.queryByLabelText(/ArchiveBoxXMarkIcon/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/ArrowDownCircleIcon/i)).not.toBeInTheDocument();
  });

  it('does not trigger onClick when button is disabled', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(
      <EloButton disabled onClick={handleClick}>
        Disabled Button
      </EloButton>
    );

    await user.click(screen.getByText('Disabled Button'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});

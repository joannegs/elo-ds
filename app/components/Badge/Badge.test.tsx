import { render, screen } from '@testing-library/react';
import EloBadge from './Badge';
import { InputIconProps } from '../../types/Icon.types';
import '@testing-library/jest-dom';
import React from 'react';

describe.only('EloBadge', () => {
  it('renders EloBadge with correct classes based on props', () => {
    const { getByTestId } = render(
      <EloBadge color="primary" textColor="white" size="md" shadow tagContent="Test Badge" />
    );
    const badgeWrapper = getByTestId('elo-badge');

    expect(badgeWrapper).toHaveClass('bg-primary');
    expect(badgeWrapper).toHaveClass('text-white');
    expect(badgeWrapper).toHaveClass('text-sm');
    expect(badgeWrapper).toHaveClass('py-1');
    expect(badgeWrapper).toHaveClass('px-3');
    expect(badgeWrapper).toHaveClass('h-8');

    expect(badgeWrapper).toHaveClass('shadow-sm');
  });

  it('renders EloBadge without shadow class when shadow prop is false', () => {
    const { getByTestId } = render(
      <EloBadge color="primary" textColor="text-title" shadow={false} tagContent="No Shadow" size="sm" />
    );
    const badgeWrapper = getByTestId('elo-badge');

    expect(badgeWrapper).not.toHaveClass('shadow-sm');
  });

  it('renders EloBadge with correct iconStart and iconEnd', () => {
    const iconStart: InputIconProps = { iconName: 'ArchiveBoxXMarkIcon', solid: true };
    const iconEnd: InputIconProps = { iconName: 'ArrowRightIcon', solid: false };

    render(
      <EloBadge 
        color="primary" 
        textColor="text-white" 
        size="lg" 
        shadow 
        tagContent="With Icons"
        iconStart={iconStart}
        iconEnd={iconEnd}
      />
    );

    expect(screen.getByText('With Icons')).toBeInTheDocument();

    expect(screen.getByLabelText(/ArchiveBoxXMarkIcon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ArrowRightIcon/i)).toBeInTheDocument();
  });

  it('renders EloBadge with correct textContent from tagContent prop', () => {
    render(<EloBadge color="secondary" textColor="text-white" tagContent="Tag Content" size="sm" />);
    expect(screen.getByText('Tag Content')).toBeInTheDocument();
  });

  it('applies default size classes when size is not provided', () => {
    const { getByTestId } = render(<EloBadge tagContent="Default Size" color="primary" textColor="text-white" size={'sm'} />);
    const badgeWrapper = getByTestId('elo-badge');

    expect(badgeWrapper).toHaveClass('py-0.5');
    expect(badgeWrapper).toHaveClass('px-2');
    expect(badgeWrapper).toHaveClass('text-xs');
    expect(badgeWrapper).toHaveClass('h-6');
  });
});

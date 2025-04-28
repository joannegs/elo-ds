import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import EloDivider from './Divider';
import React from 'react';

describe('EloDivider', () => {

  it('should render the divider with default props', () => {
    render(<EloDivider />);
    
    const divider = screen.getByTestId('elo-divider');
    const bars = divider.querySelectorAll('div');
    
    expect(bars).toHaveLength(2);

    expect(bars[0]).toHaveClass('bg-dark-surface');
    expect(bars[1]).toHaveClass('bg-dark-surface');
  });

  it('should render divider with children', () => {
    render(<EloDivider>Text in the middle</EloDivider>);
    
    const divider = screen.getByTestId('elo-divider');
    const text = screen.getByText('Text in the middle');
    
    expect(text).toBeInTheDocument();
    
    expect(text).toHaveClass('text-dark-surface');
    
    const bars = divider.querySelectorAll('div');
    expect(bars).toHaveLength(3);
  });

  it('should apply light background color when bgColor is "light"', () => {
    render(<EloDivider bgColor="light" />);
    
    const divider = screen.getByTestId('elo-divider');
    const bars = divider.querySelectorAll('div');
    
    expect(bars[0]).toHaveClass('bg-light-surface');
    expect(bars[1]).toHaveClass('bg-light-surface');
  });
});

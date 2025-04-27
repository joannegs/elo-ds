import { render, screen } from '@testing-library/react';
import EloAvatar from './Avatar';
import '@testing-library/jest-dom';
import React from 'react';

describe('EloAvatar', () => {
  it('renders the avatar with image when image prop is provided', () => {
    const imageUrl = "https://example.com/avatar.jpg";
    render(<EloAvatar image={imageUrl} size="md" avatarName="John Doe" avatarDescription="Developer" />);
    
    const image = screen.getByAltText("Developer");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', imageUrl);
  });

  it('renders the avatar with icon when no image is provided', () => {
    render(<EloAvatar size="md" avatarName="John Doe" avatarDescription="Developer" />);
    
    const icon = screen.getByTestId('elo-avatar');
    expect(icon).toBeInTheDocument();
  });

  it('renders avatar name and description when provided', () => {
    render(<EloAvatar size="md" avatarName="John Doe" avatarDescription="Developer" />);
    
    const name = screen.getByText('John Doe');
    const description = screen.getByText('Developer');
    
    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('renders only avatar name when description is not provided', () => {
    render(<EloAvatar size="md" avatarName="John Doe" />);
    
    const name = screen.getByText('John Doe');
    expect(name).toBeInTheDocument();
    const description = screen.queryByText('Developer');
    expect(description).not.toBeInTheDocument();
  });

  it('applies the correct size class based on size prop', () => {
    const { getByTestId } = render(<EloAvatar size="lg" />);

    const avatarWrapper = getByTestId('elo-avatar-container');
    expect(avatarWrapper).toHaveClass('w-9 h-9');
  });

  it('applies additional className passed as prop', () => {
    const { getByTestId } = render(<EloAvatar size="md" className="custom-class" />);
    
    const avatarWrapper = getByTestId('elo-avatar-container');
    expect(avatarWrapper).toHaveClass('custom-class');
  });
  
  it('should render without avatarName and avatarDescription', () => {
    render(<EloAvatar size="sm" />);
    
    const avatarDiv = screen.getByTestId('elo-avatar');
    expect(avatarDiv).toBeInTheDocument();
    const name = screen.queryByText('John Doe');
    const description = screen.queryByText('Developer');
    expect(name).not.toBeInTheDocument();
    expect(description).not.toBeInTheDocument();
  });
});

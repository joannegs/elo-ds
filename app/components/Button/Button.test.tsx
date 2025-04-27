// src/components/Button/Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EloButton from './Button';
import React from 'react';

describe('EloButton', () => {
  it('renderiza o texto corretamente', () => {
    render(<EloButton>Botão de Teste</EloButton>);

    expect(screen.getByText('Botão de Teste')).toBeInTheDocument();
  });

  it('chama a função onClick quando clicado', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<EloButton onClick={handleClick}>Clique aqui</EloButton>);

    await user.click(screen.getByText('Clique aqui'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('aplica a classe de desabilitado quando disabled', () => {
    render(<EloButton disabled>Desabilitado</EloButton>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});

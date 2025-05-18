import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import EloLoginBox, { LoginBoxProps } from "./LoginBox";

const defaultProps: LoginBoxProps = {
  email: "",
  password: "",
  rememberMe: false,
  onEmailChange: jest.fn(),
  onPasswordChange: jest.fn(),
  onRememberMeChange: jest.fn(),
  onLogin: jest.fn(),
  onRegister: jest.fn(),
};

describe("EloLoginBox", () => {
  it("should render correctly with default props", () => {
    render(<EloLoginBox {...defaultProps} />);
    expect(screen.getByTestId("elo-login-box")).toBeInTheDocument();
    expect(screen.getByTestId("elo-login-box-title")).toHaveTextContent("Entrar");
    expect(screen.getByTestId("elo-login-input1")).toBeInTheDocument();
    expect(screen.getByTestId("elo-login-input2")).toBeInTheDocument();
    expect(screen.getByTestId("elo-checkbox")).toBeInTheDocument();
    expect(screen.getByTestId("elo-login-link")).toBeInTheDocument();
    expect(screen.getByTestId("elo-login-button1")).toBeInTheDocument();
    expect(screen.getByTestId("elo-login-button2")).toBeInTheDocument();
  });

  test('should call onEmailChange when email input changes', () => {
    const handleEmailChange = jest.fn();
    render(<EloLoginBox {...defaultProps} onEmailChange={handleEmailChange}/>);
    const emailInput = screen.getByTestId('elo-login-input1');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(handleEmailChange).toHaveBeenCalled();
  });
  
  it("should call onPasswordChange when password input changes", () => {
    const handlePasswordChange = jest.fn();
    render(<EloLoginBox {...defaultProps} onPasswordChange={handlePasswordChange} />);
    const input = screen.getByTestId("elo-login-input2");
    fireEvent.change(input, { target: { value: "123456" } });
    expect(handlePasswordChange).toHaveBeenCalledWith("123456");
  });

  it("should call onRememberMeChange when checkbox is clicked", () => {
    render(<EloLoginBox {...defaultProps} />);
    const checkbox = screen.getByTestId("elo-checkbox");
    fireEvent.click(checkbox);
    expect(defaultProps.onRememberMeChange).toHaveBeenCalled();
  });

  it("should call onLogin with correct values when login button is clicked", () => {
    render(
      <EloLoginBox
        {...defaultProps}
        email="user@example.com"
        password="123456"
        rememberMe={true}
      />
    );
    fireEvent.click(screen.getByTestId("elo-login-button1"));
    expect(defaultProps.onLogin).toHaveBeenCalledWith("user@example.com", "123456", true);
  });

  it("should call onRegister when register button is clicked", () => {
    render(<EloLoginBox {...defaultProps} />);
    fireEvent.click(screen.getByTestId("elo-login-button2"));
    expect(defaultProps.onRegister).toHaveBeenCalled();
  });

  it("should not render register button if showRegisterButton is false", () => {
    render(<EloLoginBox {...defaultProps} showRegisterButton={false} />);
    expect(screen.queryByTestId("elo-login-button2")).not.toBeInTheDocument();
  });

  it("should render error messages if provided", () => {
    render(
      <EloLoginBox
        {...defaultProps}
        emailError="Email inválido"
        passwordError="Senha fraca"
      />
    );
    expect(screen.getByText("Email inválido")).toBeInTheDocument();
    expect(screen.getByText("Senha fraca")).toBeInTheDocument();
  });

  it("should not render forgot password link if not provided", () => {
    render(<EloLoginBox {...defaultProps} forgotPasswordLink="" />);
    expect(screen.queryByTestId("elo-login-link")).not.toBeInTheDocument();
  });
});

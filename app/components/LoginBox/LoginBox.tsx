import React from "react";
import EloCardContainer from "../CardContainer/CardContainer";
import EloInput from '../Input/Input';
import EloCheckbox from '../Checkbox/Checkbox';
import EloButton from '../Button/Button';
import EloLink from '../Link/Link';

export type LoginBoxProps = {
  title?: string;
  emailLabel?: string;
  passwordLabel?: string;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  rememberMeLabel?: string;
  forgotPasswordText?: string;
  forgotPasswordLink?: string;
  loginButtonLabel?: string;
  registerButtonLabel?: string;
  onLogin?: (email: string, password: string, rememberMe: boolean) => void;
  onRegister?: () => void;
  showRegisterButton?: boolean;
  fixedWidth?: number;
  fixedHeight?: number;

  email: string;
  password: string;
  rememberMe: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onRememberMeChange: (value: boolean) => void;
  emailError?: string;
  passwordError?: string;
  theme?: string;
};

const EloLoginBox: React.FC<LoginBoxProps> = ({
  title = "Entrar",
  emailLabel = "E-mail:",
  passwordLabel = "Senha:",
  emailPlaceholder = "Digite seu e-mail",
  passwordPlaceholder = "Digite sua senha",
  rememberMeLabel = "Lembre-se de mim",
  forgotPasswordText = "Esqueceu sua senha?",
  forgotPasswordLink = "#",
  loginButtonLabel = "Entrar",
  registerButtonLabel = "Cadastrar",
  onLogin,
  onRegister,
  showRegisterButton = true,
  fixedWidth = 320,
  fixedHeight = 500,

  email,
  password,
  rememberMe,
  onEmailChange,
  onPasswordChange,
  onRememberMeChange,
  emailError,
  passwordError,
  theme = "",
}) => {
  const handleLogin = () => {
    onLogin?.(email, password, rememberMe);
  };

  return (
    <div data-testid="elo-login-box" className="flex justify-center items-center min-h-screen bg-muted">
      <EloCardContainer data-testid="elo-login-box-container"
        shadow
        fixedDimensions={{ width: fixedWidth, height: fixedHeight }}
        customBackground="white"
      >
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center" data-testid="elo-login-box-title">{title}</h2>
          <EloInput data-testid="elo-login-input1"
            label={emailLabel}
            type="email"
            placeholder={emailPlaceholder}
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            error={emailError ? { message: emailError } : undefined}
            required
          />

          <EloInput data-testid="elo-login-input2"
            label={passwordLabel}
            type="password"
            placeholder={passwordPlaceholder}
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            error={passwordError ? { message: passwordError } : undefined}
            required
          />

          <div className="flex flex-col gap-2 justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <EloCheckbox data-testid="elo-login-checkbox"
                checked={rememberMe}
                onChange={onRememberMeChange}
                className={`theme-${theme}`}
              />
              <label htmlFor="remember">{rememberMeLabel}</label>
            </div>
            {forgotPasswordLink && (
            <EloLink data-testid="elo-login-link" href={forgotPasswordLink} className={`text-primary hover:underline theme-${theme}`}>
                {forgotPasswordText}
              </EloLink>
            )}
          </div>

          <EloButton data-testid="elo-login-button1"
            className={`w-full theme-${theme}`}
            onClick={handleLogin}
          >
            {loginButtonLabel}
          </EloButton>

          {showRegisterButton && (
            <EloButton data-testid="elo-login-button2"
            className={`w-full theme-${theme}`}
              variant="secondary"
              onClick={onRegister}
            >
              {registerButtonLabel}
            </EloButton>
          )}
        </div>
      </EloCardContainer>
    </div>
  );
};

export default EloLoginBox;

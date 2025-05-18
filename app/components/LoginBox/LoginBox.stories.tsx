import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import EloLoginBox, { LoginBoxProps } from "./LoginBox";

const meta: Meta<typeof EloLoginBox> = {
  title: "LoginBox",
  component: EloLoginBox,
  // Opcional: você pode definir args padrão aqui também
  args: {
    theme: "primary",
  },
};

export default meta;

type Story = StoryObj<typeof EloLoginBox>;

export const Default: Story = {
  render: (args) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const emailError = email && !/\S+@\S+\.\S+/.test(email) ? "E-mail inválido" : undefined;
    const passwordError = password && password.length < 6 ? "Senha muito curta" : undefined;

    const handleLogin = () => {
      if (!emailError && !passwordError) {
        args.onLogin?.(email, password, rememberMe);
      } else {
        alert("Corrija os erros antes de entrar.");
      }
    };

    return (
      <EloLoginBox
        {...args}
        email={email}
        password={password}
        rememberMe={rememberMe}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onRememberMeChange={setRememberMe}
        emailError={emailError}
        passwordError={passwordError}
        onLogin={handleLogin}
      />
    );
  },
};

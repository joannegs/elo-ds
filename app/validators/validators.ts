
export const validateRequired = (value: string): string | null => {
  return value.trim() ? null : "Este campo é obrigatório";
};

export const validateEmail = (value: string): string | null => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value) ? null : "Formato de e-mail inválido";
};

export const validatePhone = (value: string): string | null => {
  const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  return regex.test(value) ? null : "Número de telefone inválido";
};

export const validateCPF = (cpf: string): string | null => {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return "CPF inválido";

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return "CPF inválido";

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return "CPF inválido";

  return null;
};

export const validateUfapeEmail = (value: string): string | null => {
  const emailRegex = /^[^\s@]+@ufape\.edu\.br$/i;
  return emailRegex.test(value)
    ? null
    : "Use um e-mail institucional válido da UFAPE (@ufape.edu.br)";
};

export const validatePassword = (value: string): string | null => {
  if (!value) return "A senha é obrigatória";

  if (value.length < 8) return "A senha deve ter pelo menos 8 caracteres";
  if (!/[A-Z]/.test(value)) return "A senha deve conter pelo menos uma letra maiúscula";
  if (!/[a-z]/.test(value)) return "A senha deve conter pelo menos uma letra minúscula";
  if (!/[0-9]/.test(value)) return "A senha deve conter pelo menos um número";
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    return "A senha deve conter pelo menos um caractere especial";
  }

  return null;
};

export const validateUrl = (value: string) =>
  /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/.test(value)
    ? null
    : "URL inválida";

export const validateMatch = (value: string, compareTo: string) =>
  value !== compareTo ? "Os campos não coincidem" : null;
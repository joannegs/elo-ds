import {
  validateRequired,
  validateEmail,
  validatePhone,
  validateCPF,
  validateUfapeEmail,
  validatePassword,
  validateUrl,
  validateMatch,
} from './validators';

describe('Validators', () => {
  describe('validateRequired', () => {
    it('should return null for non-empty input', () => {
      expect(validateRequired('hello')).toBeNull();
    });

    it('should return error message for empty input', () => {
      expect(validateRequired('')).toBe('Este campo é obrigatório');
    });

    it('trims spaces and validates empty input', () => {
      expect(validateRequired('   ')).toBe('Este campo é obrigatório');
    });
  });

  describe('validateEmail', () => {
    it('should accept a valid email', () => {
      expect(validateEmail('user@example.com')).toBeNull();
    });

    it('should reject an invalid email', () => {
      expect(validateEmail('userexample.com')).toBe('Formato de e-mail inválido');
    });
  });

  describe('validatePhone', () => {
    it('should acceptc a valid phone number', () => {
      expect(validatePhone('(81) 91234-5678')).toBeNull();
    });

    it('should reject an invalid phone number', () => {
      expect(validatePhone('1234')).toBe('Número de telefone inválido');
    });
  });

  describe('validateCPF', () => {
    it('should accept a valid CPF', () => {
      expect(validateCPF('935.411.347-80')).toBeNull();
    });

    it('hould reject an invalid CPF with repeated digits', () => {
      expect(validateCPF('111.111.111-11')).toBe('CPF inválido');
    });

    it('should reject a malformed CPF', () => {
      expect(validateCPF('123.456.789-00')).toBe('CPF inválido');
    });
  });

  describe('validateUfapeEmail', () => {
    it('should accept valid UFAPE email', () => {
      expect(validateUfapeEmail('student@ufape.edu.br')).toBeNull();
    });

    it('should reject non-UFAPE email', () => {
      expect(validateUfapeEmail('user@gmail.com')).toBe(
        'Use um e-mail institucional válido da UFAPE (@ufape.edu.br)'
      );
    });
  });

  describe('validatePassword', () => {
    it('should accept a strong password', () => {
      expect(validatePassword('Str0ng!Pass')).toBeNull();
    });

    it('should reject a short password', () => {
      expect(validatePassword('Aa1!')).toBe('A senha deve ter pelo menos 8 caracteres');
    });

    it('should require an uppercase letter', () => {
      expect(validatePassword('weakpass1!')).toBe('A senha deve conter pelo menos uma letra maiúscula');
    });

    it('should require a lowercase letter', () => {
      expect(validatePassword('WEAKPASS1!')).toBe('A senha deve conter pelo menos uma letra minúscula');
    });

    it('should require a number', () => {
      expect(validatePassword('WeakPass!')).toBe('A senha deve conter pelo menos um número');
    });

    it('should require a special character', () => {
      expect(validatePassword('WeakPass1')).toBe('A senha deve conter pelo menos um caractere especial');
    });

    it('should reject empty password', () => {
      expect(validatePassword('')).toBe('A senha é obrigatória');
    });
  });

  describe('validateUrl', () => {
    it('should accept valid URLs', () => {
      expect(validateUrl('https://example.com')).toBeNull();
      expect(validateUrl('http://example.com/page')).toBeNull();
    });

    it('should reject invalid URLs', () => {
      expect(validateUrl('justtext')).toBe('URL inválida');
    });
  });

  describe('validateMatch', () => {
    it('should return null if values match', () => {
      expect(validateMatch('abc123', 'abc123')).toBeNull();
    });

    it('should return error if values do not match', () => {
      expect(validateMatch('abc123', 'abc')).toBe('Os campos não coincidem');
    });
  });
});


<div  align="center">
<img  src="https://github.com/joannegs/elo-ds/blob/master/public/logo-lmts-color.png?raw=true"  width="220"  alt="Logo LMTS"  />
</div>
<div  align="center">
<img  src="https://github.com/joannegs/elo-ds/blob/master/public/elo-logo.png?raw=true"  width="180"  alt="Logo eloDS"  />
</div>
  

# eloDS – Design System para o LMTS

  

O **eloDS** é o Design System oficial do Laboratório Multidisciplinar de Tecnologias Sociais (LMTS), desenvolvido para promover consistência visual, acessibilidade e escalabilidade nas interfaces de aplicações vinculadas ao laboratório. Sua arquitetura é fundamentada em tecnologias modernas, componentes reutilizáveis e boas práticas de desenvolvimento frontend.

  

---

  

## Arquitetura e Tecnologias

  

O projeto adota uma arquitetura moderna baseada em componentes e princípios de atomic design. O foco está na criação de interfaces modulares, responsivas e alinhadas com padrões de acessibilidade.

  

### Stack Utilizadas

  

O **elo-DS** foi desenvolvido com uma stack tecnológica moderna que prioriza performance, escalabilidade e manutenção a longo prazo. O projeto é construído sobre o Next.js, um framework React amplamente adotado por seu suporte a renderização híbrida e foco em desempenho. A utilização de TypeScript garante, por meio de tipagem, uma maior facilidade de detecção de erros em tempo de desenvolvimento e contribuindo para a legibilidade do código.

  

A estilização dos componentes é realizada com Tailwind CSS, uma abordagem utilitária que proporciona consistência visual e responsividade sem sacrificar flexibilidade. Para documentação visual e testes isolados de componentes, o projeto incorpora o Storybook, ferramenta para a colaboração entre times de design e desenvolvimento.

  

O processamento de estilos é refinado com PostCSS, que permite a utilização de recursos modernos de CSS e facilita a integração com plugins. A qualidade e padronização do código são asseguradas com ESLint, que atua como uma camada de governança sobre as boas práticas. Por fim, a confiabilidade dos componentes é validada por meio de uma suíte de testes automatizados com Jest e Testing Library, garantindo que a experiência do usuário final permaneça estável mesmo diante de mudanças no código.

  
  

### Componentização

  

A biblioteca segue a abordagem atômica, com divisão clara entre:

  

- **Elementos Atômicos**: Botões, ícones, tipografia, campos de entrada etc.

- **Componentes Compostos**: Blocos reutilizáveis e mais complexos baseados em átomos.

- **Integração com ícones**: Inclui suporte nativo a **Lucide Icons** e **Heroicons**.

  

---

  

## Como rodar o projeto

Para executar o projeto localmente, siga as etapas abaixo. Certifique-se de que você possui o Node.js (versão 18 ou superior) e o npm instalados na sua máquina.

  

1. Clone o repositório

  

```bash

git clone https://github.com/joannegs/elo-ds.git

cd elo-ds

```

  

2. Instale as dependências

```bash

npm install

```

  

3. Execute o ambiente de desenvolvimento -> Storybook

```bash

npm storybook

```

  

A aplicação estará disponível em: http://localhost:6006.

  

---

  

## Como utilizar a biblioteca do elo-DS

  

Para instruções detalhadas sobre instalação, uso dos componentes e boas práticas de integração, consulte a [Wiki oficial do projeto](https://github.com/joannegs/elo-ds/wiki/Como-usar-o-elo%E2%80%90DS).

  

## Testes e Cobertura

  

O projeto utiliza **Jest** e **Testing Library** para garantir confiabilidade aos componentes. A cobertura mínima recomendada está configurada para:

  

- **Branches**: 80%

- **Functions**: 85%

- **Lines**: 90%

- **Statements**: 90%

  

Relatórios de cobertura são gerados automaticamente após a execução dos testes.

  

Os testes automatizados são executados via Jest. Para rodar os testes com cobertura de código:

  

```bash

npm run test

```

  

---

  

## Publicação e Distribuição

  

A distribuição dos componentes é feita via NPM após execução dos comandos de `build` e `release`. O pacote inclui os arquivos compilados (`dist/`) e estilos necessários para utilização independente dos componentes.

  

---

  

## Contribuição

  

Este repositório é mantido pelo LMTS-UFAPE. Contribuições podem ser discutidas previamente por meio de issues ou pull requests, desde que alinhadas aos padrões de desenvolvimento adotados pela equipe. Para escrarecimentos mais detalhados sobre contribuições, verificar a [Wiki oficial do projeto](https://github.com/joannegs/elo-ds/wiki/Como-usar-o-elo%E2%80%90DS).

  

---  

## Sobre o LMTS

  

O **Laboratório Multidisciplinar de Tecnologias Sociais** é uma iniciativa da UFAPE voltada ao desenvolvimento de soluções digitais com impacto social. O eloDS representa um dos pilares de padronização visual das aplicações desenvolvidas pelo laboratório.

  

---

  


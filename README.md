
# Sistema de Design do Laboratório Multidisciplinar de Tecnologias Sociais (LMTS)

Este repositório contém o Sistema de Design desenvolvido para o Laboratório Multidisciplinar de Tecnologias Sociais (LMTS) da Universidade Federal do Agreste de Pernambuco (UFAPE), localizado em Garanhuns.

## Visão Geral

O Sistema de Design do LMTS visa padronizar e unificar os componentes de interface utilizados nos projetos do laboratório, garantindo consistência visual e usabilidade. Este repositório foi iniciado com o framework [Next.js](https://nextjs.org/), utilizando o comando `create-next-app`.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

- **.storybook/**: Configurações do Storybook para desenvolvimento e visualização de componentes isolados.
- **app/**: Contém os componentes principais e páginas da aplicação.
- **fonts/**: Arquivos de fontes utilizados no projeto.
- **public/**: Arquivos públicos acessíveis, como imagens e outros recursos estáticos.
- **.eslintrc.json**: Configurações do ESLint para padronização de código.
- **.gitignore**: Arquivos e pastas ignorados pelo Git.
- **README.md**: Este arquivo de documentação.
- **next.config.ts**: Configurações do Next.js.
- **package-lock.json**: Detalhes das dependências instaladas.
- **package.json**: Dependências e scripts do projeto.
- **postcss.config.mjs**: Configurações do PostCSS.
- **tailwind.config.ts**: Configurações do Tailwind CSS.
- **tsconfig.json**: Configurações do TypeScript.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **Storybook**: Ferramenta para desenvolvimento de componentes de forma isolada.
- **ESLint**: Ferramenta para análise estática de código.
- **PostCSS**: Ferramenta para transformações de CSS.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/) (versão especificada no arquivo `.nvmrc`)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/joannegs/lmts-design-system.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd lmts-design-system
   ```

3. Instale as dependências:

   ```bash
   yarn install
   # ou
   npm install
   ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
yarn dev
# ou
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar a aplicação.

## Desenvolvimento de Componentes

Este projeto utiliza o Storybook para desenvolvimento e documentação de componentes.
Para iniciar o Storybook:

```bash
yarn storybook
# ou
npm run storybook
```

O Storybook estará disponível em [http://localhost:6006](http://localhost:6006).

## Contribuição

Contribuições são bem-vindas!

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona minha nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request detalhando suas alterações.

# Idea Drop - UI

Projeto front-end (UI) criado como exercício de aprendizado durante o curso "Modern React from the Beginning" (Udemy). Este repositório contém a interface construída com React + Vite + TypeScript e bibliotecas auxiliares usadas no curso.

**Visão Geral**

- **Objetivo:** implementação prática de uma aplicação simples para gerenciamento de ideias (CRUD básico), visando praticar conceitos modernos de React.
- **Curso referência:** https://www.udemy.com/course/modern-react-from-the-beginning/

**Principais tecnologias**

- React 18/19 + JSX/TSX
- Vite (bundler / dev server)
- TypeScript
- Tailwind CSS
- Axios (requisições HTTP)
- TanStack Router + React Query
- json-server (API fake para desenvolvimento)

Estrutura mínima do projeto:

- `src/` - código fonte React (rotas, componentes, API)
- `src/data/db.json` - banco JSON usado pelo `json-server`
- `src/components/` - componentes reutilizáveis
- `src/routes/` - páginas e rotas da aplicação

Instalação e execução

1. Instale as dependências:

```bash
npm install
```

2. Rode a API fake (opcional, para simular backend):

```bash
npm run json-server
# json-server serve src/data/db.json na porta 8000
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# abre a aplicação em http://localhost:3000
```

Build e testes

- Gerar build de produção:

```bash
npm run build
```

- Rodar testes (Vitest):

```bash
npm run test
```

# agent-api

API para gerenciamento de agentes, construída em Node.js com TypeScript.

## Tecnologias e Bibliotecas Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Drizzle ORM**: ORM para TypeScript focado em simplicidade e segurança de tipos.
- **PNPM**: Gerenciador de pacotes rápido e eficiente.

## Padrões de Projeto

- **Modularização**: Separação de responsabilidades em módulos (`db`, `http`, `schema`).
- **Configuração por ambiente**: Uso de arquivos de configuração para variáveis de ambiente.
- **Migrations**: Controle de versão do banco de dados via arquivos de migração.

## Setup e Configuração

### Pré-requisitos
- Node.js >= 18
- PNPM >= 8

### Instalação

```bash
pnpm install
```

### Configuração do Banco de Dados

1. Configure as variáveis de ambiente no arquivo `envs.ts` conforme necessário.
2. Execute as migrations para criar as tabelas:

```bash
pnpm drizzle-kit push
```

### Seed do Banco de Dados

```bash
pnpm tsx src/db/seed.ts
```

### Rodando o Servidor

```bash
pnpm dev
```

O servidor será iniciado conforme configuração em `src/server.ts`.

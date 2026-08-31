# Boosteria Clone

Uma aplicação em Next.js para simular a abertura de boosters de cartas Pokémon, com visual moderno, geração aleatória de raridades e integração com Prisma para persistência de dados.

## 🎯 Objetivo

Este projeto foi criado para praticar:
- Next.js App Router
- TypeScript
- Prisma ORM
- consumo de API interna
- lógica de sorteio com pesos por raridade
- estrutura de frontend com React no lado do cliente

## 🧩 Funcionalidades

- abertura de booster simulada
- sorteio de carta com raridades: comum, rara, épica e lendária
- carregamento de cartas via API interna
- integração com banco de dados usando Prisma
- layout simples e responsivo

## 🛠️ Stack

- Next.js
- React
- TypeScript
- Prisma
- PostgreSQL / SQLite (dependendo da configuração)
- Tailwind CSS

## 🚀 Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Configure o banco de dados no arquivo `.env`:

```env
DATABASE_URL="file:./dev.db"
```

Ou use outra URL de banco conforme sua configuração local.

3. Gere o cliente Prisma:

```bash
npx prisma generate
```

4. Rode as migrations:

```bash
npx prisma migrate dev
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

6. Acesse:

```text
http://localhost:3000
```

## 📁 Estrutura do projeto

```text
app/
  api/
    cards/
      route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  BoosterOpener.tsx
lib/
  prisma.ts
prisma/
  schema.prisma
  migrations/
```

## 🧠 Regras de sorteio

As cartas têm pesos diferentes por raridade para deixar o resultado mais realista:

- comum: 60
- rara: 30
- épica: 8
- lendária: 2

Esses valores influenciam a chance de cada carta aparecer no booster.

## 🧪 Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 📌 Observações

- Este projeto ainda está em desenvolvimento e foi pensado como base para evoluir com:
  - catálogo de cartas
  - login e coleção do usuário
  - sistema de packs e trocas
  - marketplace interno

## 🤝 Contribuição

Sinta-se livre para abrir issues e pull requests para melhorar a aplicação.

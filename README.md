
# Fastify TypeScript Example

This is a simple Node.js backend project using Fastify, TypeScript and Zod.

## Features

- ✅ Fastify HTTP server
- ✅ Typed route handlers
- ✅ Zod for schema validation
- ✅ Auto-generated Swagger documentation

## Project structure

```
src/
  modules/
    users/
      application/      # Business logic (use cases)
      domain/           # Data schemas (Zod)
      infra/            # Controllers, Repositories, Routes
```

## Getting Started

```bash
pnpm install
pnpm run dev
```

## API Docs

After starting the server, access the Swagger UI at:

[http://localhost:3333/docs](http://localhost:3333/docs)

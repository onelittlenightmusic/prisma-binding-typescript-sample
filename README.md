# Prisma-binding sample

Demonstration of graphql-yoga server to forward requests to prisma server directly.

## TL;DR

```
cp .env_sample .env
vi .env # input your prisma server address
graphql get-schema # to install prisma.graphql from prisma server
graphql prepare # to install app.graphql
yarn install
yarn start
```
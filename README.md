# Prisma-binding sample

Demonstration of graphql-yoga server to forward requests to prisma server directly.

## Prerequisite

You must have Prisma server installed in your environment (on local or on cloud service)
For example, you might deploy simple Prisma service by utilizing this repo.
https://github.com/onelittlenightmusic/simple_user_sample_for_PRISMA

## TL;DR

```
cp .env_sample .env
vi .env # input your prisma server address
graphql get-schema # to install prisma.graphql from prisma server
graphql prepare # to install app.graphql
yarn install
yarn start (or yarn start-apollo)
```

... and access `http://localhost:4010` with your browser.
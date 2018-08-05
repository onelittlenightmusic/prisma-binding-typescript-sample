# Prisma-binding forwardTo sample

Demonstration of graphql-yoga server or Apollo Server 2.0 to forward requests to prisma server directly.

## TL;DR
 
```
cp .env_sample .env
vi .env # input your prisma server address

# if you want, go to "prepare your prisma server"

graphql get-schema # to install prisma.graphql from prisma server
graphql prepare # to install app.graphql
yarn install
yarn start (or yarn start-apollo)
```

... and access `http://localhost:4010` with your browser.

- (Option) Prepare your prisma server

```
cd prisma
docker-compose up -d
# if you want, change graphql schema by editing datamodel.graphql
prisma deploy -e ../.env
cd ..
```

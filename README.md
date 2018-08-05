# Prisma-binding forwardTo sample

Demonstration of graphql-yoga server or Apollo Server 2.0 to forward requests to prisma server directly.

## TL;DR
 
```
cp .env_sample .env
# input your prisma server address
vi .env 

# if you want, go to "prepare your prisma server"

# Start server (if you want, you can start server manually)
sh server.sh
```

... and access `http://localhost:4010` with your browser.

- (Option) Prepare your prisma server

```
cd prisma
# change docker-compose environment variables
vi .env
docker-compose up -d
# if you want, change graphql schema by editing datamodel.graphql
prisma deploy -e ../.env
cd ..
```

- (Alternative) Start graphql-yoga or Apollo Server 2.0 server manually

```
# to install prisma.graphql from prisma server
graphql get-schema -p prisma --dotenv .env
# to install app.graphql
graphql prepare --dotenv .env
yarn install
yarn start (or yarn start-apollo)
```
import { ApolloServer } from 'apollo-server'
import { Prisma, forwardTo } from 'prisma-binding'
import { config } from 'dotenv'
import { importSchema } from 'graphql-import'
config()

const typeDefs = <any> importSchema('src/generated/app.graphql')

const __PRISMA_ENDPOINT__ = process.env.PRISMA_ENDPOINT

const resolvers = <any> {
    Query: {
      user: forwardTo('prisma'),
      users: forwardTo('prisma')
    },
    Mutation: {
      createUser: forwardTo('prisma'),
    }      
}

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    context: (req: any) => ({
      ...req,
      prisma: new Prisma({
        typeDefs: 'src/generated/prisma.graphql',
        endpoint: __PRISMA_ENDPOINT__,
      }),
    }),
    introspection: true,
    playground: true,
    debug: true,
 })
server.listen({ port: 4010,})
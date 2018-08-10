import { ApolloServer } from 'apollo-server'
import { Prisma, forwardTo } from 'prisma-binding'
import { config } from 'dotenv'
import { importSchema } from 'graphql-import'
config()

const typeDefs = <any> importSchema('src/generated/app.graphql')

const __PRISMA_ENDPOINT__ = process.env.PRISMA_ENDPOINT
const __API_PORT__ = process.env.API_PORT

const resolvers = <any> {
    Query: {
      location: forwardTo('prisma'),
      locations: forwardTo('prisma')
    },
    Mutation: {
      createLocation: forwardTo('prisma'),
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
server.listen({ port: __API_PORT__,})
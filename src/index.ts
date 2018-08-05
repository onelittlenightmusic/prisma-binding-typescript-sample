import { GraphQLServer } from 'graphql-yoga'
import { Prisma, forwardTo } from 'prisma-binding'
import { config } from 'dotenv'
config()
const __PRISMA_ENDPOINT__ = process.env.PRISMA_ENDPOINT
const __API_PORT__ = process.env.API_PORT

const resolvers = <any> {
    Query: {
      user: forwardTo('prisma'),
      users: forwardTo('prisma')
    },
    Mutation: {
      createUser: forwardTo('prisma')
    }      
}

const server = new GraphQLServer({ 
    typeDefs: 'src/generated/app.graphql',
    resolvers,
    context: req => ({
      ...req,
      prisma: new Prisma({
        typeDefs: 'src/generated/prisma.graphql',
        endpoint: __PRISMA_ENDPOINT__,
      }),
    }),
 })
server.start({ port: __API_PORT__,}, ({port}) => console.log(`GraphQL server is running on http://localhost:${port}`))
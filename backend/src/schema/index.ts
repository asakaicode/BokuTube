import bookSchema from '~/schema/books'

const typeDefs = [bookSchema.typeDefs]

const resolvers = {
  Query: {
    ...bookSchema.resolvers.Query,
  },
  Mutation: {
    ...bookSchema.resolvers.Mutation,
  },
}

const apolloConfig = {
  typeDefs,
  resolvers,
}

export default apolloConfig

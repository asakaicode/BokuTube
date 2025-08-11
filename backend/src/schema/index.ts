import bookSchema from '~/schema/books/index.js'

const typeDefs = [bookSchema.typeDefs]

const resolvers = {
  Query: {
    ...bookSchema.resolvers.Query,
  },
}

const apolloConfig = {
  typeDefs,
  resolvers,
}

export default apolloConfig

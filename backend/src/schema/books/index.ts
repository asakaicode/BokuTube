import books from '~/schema/books/queries/books.js'
import typeDefs from '~/schema/books/typeDefs.js'

const resolvers = {
  Query: {
    books,
  },
}

const schema = {
  typeDefs,
  resolvers,
}

export default schema

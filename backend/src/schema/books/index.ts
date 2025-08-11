import books from "~/schema/books/queries/books";
import typeDefs from "~/schema/books/typeDefs";

const resolvers = {
  Query: {
    books
  },
  Mutation: {}
}

const schema = {
  typeDefs,
  resolvers,
}

export default schema
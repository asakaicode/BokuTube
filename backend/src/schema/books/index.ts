import books from "./queries/books";
import typeDefs from "./typeDefs";

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
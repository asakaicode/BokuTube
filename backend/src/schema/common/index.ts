import testMutation from './mutations/testMutation.js'
import testQuery from './queries/testQuery.js'
import typeDefs from './typeDefs.js'

const resolvers = {
  Query: {
    testQuery,
  },
  Mutation: {
    testMutation,
  },
}

const schema = {
  typeDefs,
  resolvers,
}

export default schema

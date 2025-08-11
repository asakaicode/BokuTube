const typeDefs = `
  scalar DateTime

  type TestQueryResponse {
    message: String!
  }

  type TestMutationResponse {
    message: String!
  }

  type Query {
    testQuery: TestQueryResponse!
  }

  type Mutation {
    testMutation(message: String!): TestMutationResponse!
  }
`

export default typeDefs

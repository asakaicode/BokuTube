import videoSchema from '~/schema/videos/index.js'

const typeDefs = [videoSchema.typeDefs]

const resolvers = {
  Query: {
    ...videoSchema.resolvers.Query,
  },
  Mutation: {
    ...videoSchema.resolvers.Mutation,
  },
}

const apolloConfig = {
  typeDefs,
  resolvers,
}

export default apolloConfig

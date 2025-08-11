import videoSchema from '~/schema/videos/index.js'

const typeDefs = [videoSchema.typeDefs]

const resolvers = {
  Query: {
    ...videoSchema.resolvers.Query,
  },
}

const apolloConfig = {
  typeDefs,
  resolvers,
}

export default apolloConfig

import commonSchema from '~/schema/common/index.js'
import videoSchema from '~/schema/videos/index.js'

const typeDefs = [commonSchema.typeDefs, videoSchema.typeDefs]

const resolvers = {
  Query: {
    ...commonSchema.resolvers.Query,
    ...videoSchema.resolvers.Query,
  },
  Mutation: {
    ...commonSchema.resolvers.Mutation,
    ...videoSchema.resolvers.Mutation,
  },
}

const apolloConfig = {
  typeDefs,
  resolvers,
}

export default apolloConfig

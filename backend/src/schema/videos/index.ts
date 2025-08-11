import videos from '~/schema/videos/queries/videos.js'
import typeDefs from '~/schema/videos/typeDefs.js'

const resolvers = {
  Query: {
    videos,
  },
}

const schema = {
  typeDefs,
  resolvers,
}

export default schema

import videos from '~/schema/videos/queries/videos.js'
import typeDefs from '~/schema/videos/typeDefs.js'
import createUploadUrl from './mutations/createUploadUrl.js'
import finalizeUploadVideo from './mutations/finalizeUploadVideo.js'
import video from './queries/video.js'

const resolvers = {
  Query: {
    video,
    videos,
  },
  Mutation: {
    createUploadUrl,
    finalizeUploadVideo,
  },
}

const schema = {
  typeDefs,
  resolvers,
}

export default schema
